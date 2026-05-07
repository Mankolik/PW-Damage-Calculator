const elements = ["fire", "water", "air", "earth", "dark", "light"];

const weapons = [
  {
    id: "golden-short-sword",
    name: "Golden Short Sword",
    type: "melee",
    baseDamage: 110,
    criticalChance: 18,
    elementalDamage: { fire: 0, water: 0, air: 0, earth: 0, dark: 0, light: 0 },
    source: "Pixel Worlds Wiki: Golden Short Sword",
  },
];

const enemies = [
  {
    id: "electro",
    name: "Electro",
    hp: 250,
    armor: 50,
    elementalResistance: { fire: 15, water: 20, air: 15, earth: 15, dark: 15, light: 0 },
    source: "Pixel Worlds Wiki: Electro",
  },
];

const perks = {
  meleeMadness: {
    label: "Melee Madness",
    multiplier: 1.05,
    applies: (weapon) => weapon.type === "melee",
  },
  hereComesThePain: { label: "Here Comes The Pain", multiplier: 1.1, applies: () => true },
  heavyHit: { label: "Heavy Hit", multiplier: 1.5, applies: () => true },
  healthyHitFull: { label: "Healthy Hit", multiplier: 1.05, applies: () => true },
  kamikaze: { label: "Kamikaze", multiplier: 1.05, applies: () => true },
  fierceCompanion: { label: "Fierce Companion", multiplier: 1.03, applies: () => true },
};

const form = document.querySelector("#calculator-form");
const weaponSelect = document.querySelector("#weapon-select");
const enemySelect = document.querySelector("#enemy-select");
const totalDamage = document.querySelector("#total-damage");
const hitsToKill = document.querySelector("#hits-to-kill");
const physicalDamage = document.querySelector("#physical-damage");
const physicalDetail = document.querySelector("#physical-detail");
const elementalDamage = document.querySelector("#elemental-damage");
const elementalDetail = document.querySelector("#elemental-detail");
const perkMultiplier = document.querySelector("#perk-multiplier");
const perkDetail = document.querySelector("#perk-detail");
const elementTable = document.querySelector("#element-table");

function populateSelect(select, options) {
  select.innerHTML = options
    .map((option) => `<option value="${option.id}">${option.name}</option>`)
    .join("");
}

function selectedPerks(formData) {
  return formData
    .getAll("perk")
    .map((perkId) => perks[perkId])
    .filter(Boolean);
}

function calculateDamage({ weapon, enemy, activePerks, critical }) {
  const appliedPerks = activePerks.filter((perk) => perk.applies(weapon));
  const multiplier = appliedPerks.reduce((total, perk) => total * perk.multiplier, 1);
  const criticalMultiplier = critical ? 2 : 1;
  const incomingPhysical = weapon.baseDamage * multiplier * criticalMultiplier;
  const mitigatedPhysical = Math.max(1, incomingPhysical - enemy.armor);

  const elementalRows = elements.map((element) => {
    const raw = weapon.elementalDamage[element] ?? 0;
    const resistance = enemy.elementalResistance[element] ?? 0;
    const dealt = Math.max(0, raw - resistance);
    return { element, raw, resistance, dealt };
  });

  const totalElemental = elementalRows.reduce((total, row) => total + row.dealt, 0);
  const total = mitigatedPhysical + totalElemental;

  return { appliedPerks, multiplier, incomingPhysical, mitigatedPhysical, elementalRows, totalElemental, total };
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function render() {
  const formData = new FormData(form);
  const weapon = weapons.find((item) => item.id === formData.get("weapon")) ?? weapons[0];
  const enemy = enemies.find((item) => item.id === formData.get("enemy")) ?? enemies[0];
  const activePerks = selectedPerks(formData);
  const critical = formData.has("critical");
  const result = calculateDamage({ weapon, enemy, activePerks, critical });
  const hitCount = Math.ceil(enemy.hp / result.total);

  totalDamage.textContent = formatNumber(result.total);
  hitsToKill.textContent = `${hitCount} ${hitCount === 1 ? "hit" : "hits"} to defeat ${enemy.name}`;
  physicalDamage.textContent = formatNumber(result.mitigatedPhysical);
  physicalDetail.textContent = `${formatNumber(weapon.baseDamage)} base × ${formatNumber(result.multiplier)} perks${critical ? " × 2 crit" : ""} − ${enemy.armor} armor`;
  elementalDamage.textContent = formatNumber(result.totalElemental);
  elementalDetail.textContent = result.totalElemental > 0 ? "Matching resistances were subtracted from each element." : "No elemental damage passes this enemy's resistances.";
  perkMultiplier.textContent = `${formatNumber(result.multiplier)}×`;
  perkDetail.textContent = result.appliedPerks.length ? result.appliedPerks.map((perk) => perk.label).join(", ") : "No selected perk applies.";

  elementTable.innerHTML = result.elementalRows
    .map((row) => `
      <tr>
        <td>${row.element[0].toUpperCase()}${row.element.slice(1)}</td>
        <td>${row.raw}</td>
        <td>${row.resistance}</td>
        <td class="${row.dealt > 0 ? "element-hit" : "element-blocked"}">${row.dealt}</td>
      </tr>
    `)
    .join("");
}

populateSelect(weaponSelect, weapons);
populateSelect(enemySelect, enemies);
form.addEventListener("change", render);
render();
