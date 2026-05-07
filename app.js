const elements = ["fire", "water", "air", "earth", "dark", "light"];

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function wikiPage(name) {
  return `https://pixelworlds.fandom.com/wiki/${name.replace(/ /g, "_")}`;
}

function elementalDamage({ earth = 0, air = 0, fire = 0, water = 0, dark = 0, light = 0 } = {}) {
  return { fire, water, air, earth, dark, light };
}

function weapon({ name, file, type = "melee", baseDamage, criticalChance, earth = 0, air = 0, fire = 0, water = 0, dark = 0, light = 0 }) {
  return {
    id: slugify(name),
    name,
    type,
    image: `Weapons/${file}`,
    baseDamage,
    criticalChance,
    elementalDamage: elementalDamage({ earth, air, fire, water, dark, light }),
    source: `Pixel Worlds Wiki: ${name}`,
    sourceUrl: wikiPage(name),
  };
}

function enemy({ name, file, hp, armor, fire = 0, water = 0, air = 0, earth = 0, dark = 0, light = 0 }) {
  return {
    id: slugify(name),
    name,
    image: `Enemies/${file}`,
    hp,
    armor,
    elementalResistance: { fire, water, air, earth, dark, light },
    source: `Pixel Worlds Wiki: ${name}`,
    sourceUrl: wikiPage(name),
  };
}

const weapons = [
  weapon({ name: "Abyss Sword", file: "Abyss_Sword.webp", baseDamage: 162, criticalChance: 3, dark: 18 }),
  weapon({ name: "Arasaka LLP-X5", file: "Arasaka_LLP-X5.webp", type: "ranged", baseDamage: 0, criticalChance: 0, fire: 118 }),
  weapon({ name: "Astro Cannon", file: "Astro_Cannon.webp", type: "ranged", baseDamage: 17, criticalChance: 2, dark: 210 }),
  weapon({ name: "Axe of the Underworld", file: "Axe_of_the_Underworld.webp", baseDamage: 185, criticalChance: 5, dark: 24 }),
  weapon({ name: "Beretta", file: "Beretta.webp", type: "ranged", baseDamage: 151, criticalChance: 5 }),
  weapon({ name: "Blades of Turok", file: "Blades_of_Turok.webp", baseDamage: 235, criticalChance: 4, earth: 19, light: 28 }),
  weapon({ name: "Blood Sword", file: "Blood_Sword.webp", baseDamage: 161, criticalChance: 1, earth: 7, dark: 15 }),
  weapon({ name: "Blue Laser Sword", file: "Blue_Laser_Sword.webp", baseDamage: 18, criticalChance: 0, light: 228 }),
  weapon({ name: "Bone Hammer", file: "Bone_Hammer.webp", baseDamage: 164, criticalChance: 4, earth: 16 }),
  weapon({ name: "Broom", file: "Broom.webp", baseDamage: 124, criticalChance: 0, dark: 12 }),
  weapon({ name: "Bunnynator Gun", file: "Bunnynator_Gun.webp", type: "ranged", baseDamage: 183, criticalChance: 2, earth: 8 }),
  weapon({ name: "Butcher Sword", file: "Butcher_Sword.webp", baseDamage: 210, criticalChance: 1, earth: 18, dark: 18 }),
  weapon({ name: "Calibur Sword", file: "Calibur_Sword.webp", baseDamage: 179, criticalChance: 2, light: 4 }),
  weapon({ name: "Chaos Sword", file: "Chaos_Sword.webp", baseDamage: 124, criticalChance: 18, dark: 12 }),
  weapon({ name: "Claymore", file: "Claymore.webp", baseDamage: 173, criticalChance: 2 }),
  weapon({ name: "Cleaver Sword", file: "Cleaver_Sword.webp", baseDamage: 144, criticalChance: 12 }),
  weapon({ name: "Club of the Hydra", file: "Club_of_the_Hydra.webp", baseDamage: 245, criticalChance: 2 }),
  weapon({ name: "Cyber Berserker Battle Arms", file: "Cyber_Berserker_Battle_Arms.webp", baseDamage: 53, criticalChance: 0, light: 193 }),
  weapon({ name: "Dark Sword", file: "Dark_Sword.webp", baseDamage: 0, criticalChance: 0, dark: 245 }),
  weapon({ name: "Darkness Clan Shield", file: "Darkness_Clan_Shield.webp", type: "ranged", baseDamage: 128, criticalChance: 3, dark: 15 }),
  weapon({ name: "Darkness Clan Sword", file: "Darkness_Clan_Sword.webp", baseDamage: 105, criticalChance: 5, dark: 31 }),
  weapon({ name: "Egg Hunter Staff", file: "Egg_Hunter_Staff.webp", type: "ranged", baseDamage: 134, criticalChance: 0, earth: 13, air: 7 }),
  weapon({ name: "Elven Dual Blades", file: "Elven_Dual_Blades.webp", baseDamage: 159, criticalChance: 7, light: 10 }),
  weapon({ name: "Excalibur", file: "Excalibur.webp", baseDamage: 227, criticalChance: 3, air: 36 }),
  weapon({ name: "Executioner Axe", file: "Executioner_Axe.webp", baseDamage: 107, criticalChance: 5 }),
  weapon({ name: "Flame Glove", file: "Flame_Glove.webp", baseDamage: 144, criticalChance: 5, fire: 29 }),
  weapon({ name: "Flame Sword", file: "Flame_Sword.webp", baseDamage: 18, criticalChance: 0, fire: 228 }),
  weapon({ name: "Galactic Champion Plasma Gun", file: "Galactic_Champion_Plasma_Gun.webp", type: "ranged", baseDamage: 15, criticalChance: 1, dark: 165 }),
  weapon({ name: "Gladius Sword", file: "Gladius_Sword.webp", baseDamage: 155, criticalChance: 3 }),
  weapon({ name: "Golden Claymore", file: "Golden_Claymore.webp", baseDamage: 191, criticalChance: 4 }),
  weapon({ name: "Golden Desert Eagle", file: "Golden_Desert_Eagle.webp", type: "ranged", baseDamage: 202, criticalChance: 2 }),
  weapon({ name: "Golden Short Sword", file: "Golden_Short_Sword.webp", baseDamage: 110, criticalChance: 18 }),
  weapon({ name: "Green Laser Sword", file: "Green_Laser_Sword.webp", baseDamage: 18, criticalChance: 0, light: 228 }),
  weapon({ name: "Hammer of Might", file: "Hammer_of_Might.webp", type: "ranged", baseDamage: 188, criticalChance: 1, air: 72 }),
  weapon({ name: "Hammer of Summer", file: "Hammer_of_Summer.webp", baseDamage: 173, criticalChance: 7 }),
  weapon({ name: "Heavy Battle Axe", file: "Heavy_Battle_Axe.webp", baseDamage: 165, criticalChance: 0 }),
  weapon({ name: "Honshu Sword", file: "Honshu_Sword.webp", baseDamage: 165, criticalChance: 4 }),
  weapon({ name: "Insulting Bat", file: "Insulting_Bat.webp", baseDamage: 191, criticalChance: 3 }),
  weapon({ name: "Katana", file: "Katana.webp", baseDamage: 209, criticalChance: 5 }),
  weapon({ name: "Knight Great Sword", file: "Knight_Great_Sword.webp", baseDamage: 209, criticalChance: 8 }),
  weapon({ name: "Light Clan Shield", file: "Light_Clan_Shield.webp", type: "ranged", baseDamage: 128, criticalChance: 3, light: 15 }),
  weapon({ name: "Light Clan Sword", file: "Light_Clan_Sword.webp", baseDamage: 160, criticalChance: 5, light: 31 }),
  weapon({ name: "Mechanical Crossbow", file: "Mechanical_Crossbow.webp", type: "ranged", baseDamage: 0, criticalChance: 0, earth: 180 }),
  weapon({ name: "Naginata", file: "Naginata.webp", baseDamage: 180, criticalChance: 3 }),
  weapon({ name: "Nether Blade", file: "Nether_Blade.webp", baseDamage: 177, criticalChance: 5, dark: 32 }),
  weapon({ name: "Nether Staff", file: "Nether_Staff.webp", type: "ranged", baseDamage: 134, criticalChance: 2, dark: 20 }),
  weapon({ name: "Ninjato Sword", file: "Ninjato_Sword.webp", baseDamage: 155, criticalChance: 10 }),
  weapon({ name: "Pilum Spear", file: "Pilum_Spear.webp", type: "ranged", baseDamage: 115, criticalChance: 0 }),
  weapon({ name: "Pro Water Gun", file: "Pro_Water_Gun.webp", type: "ranged", baseDamage: 0, criticalChance: 0, water: 191 }),
  weapon({ name: "Punk Baseball Bat", file: "Punk_Baseball_Bat.webp", baseDamage: 173, criticalChance: 3 }),
  weapon({ name: "Purple Laser Sword", file: "Purple_Laser_Sword.webp", baseDamage: 18, criticalChance: 0, dark: 245 }),
  weapon({ name: "Qing Dao", file: "Qing_Dao.webp", baseDamage: 165, criticalChance: 5 }),
  weapon({ name: "Quickdraw Blades of Nether", file: "Quickdraw_Blades_of_Nether.webp", baseDamage: 192, criticalChance: 3, air: 8, dark: 20 }),
  weapon({ name: "Ray-Gun", file: "Ray-Gun.webp", type: "ranged", baseDamage: 1, criticalChance: 1, fire: 146 }),
  weapon({ name: "Red Laser Sword", file: "Red_Laser_Sword.webp", baseDamage: 18, criticalChance: 0, dark: 228 }),
  weapon({ name: "SHOUTGUN", file: "SHOUTGUN.webp", type: "ranged", baseDamage: 124, criticalChance: 0, air: 12 }),
  weapon({ name: "Seer's Staff", file: "Seer's_Staff.webp", type: "ranged", baseDamage: 128, criticalChance: 1, earth: 4, air: 4, fire: 4, water: 4 }),
  weapon({ name: "Shogun Katana", file: "Shogun_Katana.webp", baseDamage: 227, criticalChance: 5 }),
  weapon({ name: "Short Sword", file: "Short_Sword.webp", baseDamage: 110, criticalChance: 10 }),
  weapon({ name: "Sickle", file: "Sickle.webp", baseDamage: 100, criticalChance: 20 }),
  weapon({ name: "Small Water Gun", file: "Small_Water_Gun.webp", type: "ranged", baseDamage: 0, criticalChance: 0, water: 136 }),
  weapon({ name: "Spartan Sword", file: "Spartan_Sword.webp", baseDamage: 136, criticalChance: 10 }),
  weapon({ name: "Spectrum Gun", file: "Spectrum_Gun.webp", type: "ranged", baseDamage: 80, criticalChance: 4, earth: 32, air: 32, fire: 32, water: 32 }),
  weapon({ name: "Spectrum Sword", file: "Spectrum_Sword.webp", baseDamage: 99, criticalChance: 3, earth: 23, air: 23, fire: 23, water: 23 }),
  weapon({ name: "Spiked Viking Axe", file: "Spiked_Viking_Axe.webp", baseDamage: 136, criticalChance: 0 }),
  weapon({ name: "Steel Mace", file: "Steel_Mace.webp", baseDamage: 187, criticalChance: 1 }),
  weapon({ name: "Sun Hammer", file: "Sun_Hammer.webp", baseDamage: 173, criticalChance: 7 }),
  weapon({ name: "Swift Slicer", file: "Swift_Slicer.webp", baseDamage: 18, criticalChance: 0, earth: 245 }),
  weapon({ name: "Thor's Hammer", file: "Thor's_Hammer.webp", type: "ranged", baseDamage: 175, criticalChance: 1, air: 70 }),
  weapon({ name: "Throwable Axe", file: "Throwable_Axe.webp", type: "ranged", baseDamage: 155, criticalChance: 1 }),
  weapon({ name: "Viking Spear", file: "Viking_Spear.webp", baseDamage: 115, criticalChance: 0 }),
  weapon({ name: "Wanderer Staff", file: "Wanderer_Staff.webp", type: "ranged", baseDamage: 130, criticalChance: 2, earth: 6 }),
  weapon({ name: "Wooden Sword", file: "Wooden_Sword.webp", baseDamage: 105, criticalChance: 1 }),
];

const enemies = [
  enemy({ name: "Abyss Walker", file: "Abyss_Walker.webp", hp: 350, armor: 80, light: 10 }),
  enemy({ name: "Bomber Drone", file: "Bomber_Drone.webp", hp: 200, armor: 50, fire: 15, water: 20, air: 15, earth: 15, dark: 15 }),
  enemy({ name: "Buzzkill", file: "Buzzkill.webp", hp: 300, armor: 50, fire: 15, water: 20, air: 15, earth: 15, dark: 15 }),
  enemy({ name: "Death Drill", file: "Death_Drill.webp", hp: 275, armor: 70, fire: 15, water: 20, air: 15, earth: 15, dark: 15 }),
  enemy({ name: "Electro", file: "Electro.webp", hp: 250, armor: 50, fire: 15, water: 20, air: 15, earth: 15, dark: 15 }),
  enemy({ name: "Flame Charger", file: "Flame_Charger.webp", hp: 350, armor: 50, fire: 100, air: 5, earth: 5, dark: 5, light: 5 }),
  enemy({ name: "Flame Flyer", file: "Flame_Flyer.webp", hp: 200, armor: 50, fire: 100, air: 5, earth: 5, dark: 5, light: 5 }),
  enemy({ name: "Flame Jumper", file: "Flame_Jumper.webp", hp: 275, armor: 50, fire: 100, air: 5, earth: 5, dark: 5, light: 5 }),
  enemy({ name: "Manic Mecha", file: "Manic_Mecha.webp", hp: 15000, armor: 95, fire: 5, water: 50, air: 75, dark: 5 }),
  enemy({ name: "Nether Wraith", file: "Nether_Wraith.webp", hp: 200, armor: 50, water: 20, air: 50 }),
  enemy({ name: "Plasma Cannon", file: "Plasma_Cannon.webp", hp: 310, armor: 50, fire: 15, water: 20, air: 15, earth: 15, dark: 15 }),
  enemy({ name: "Robe Caster", file: "Robe_Caster.webp", hp: 275, armor: 0, fire: 100, air: 5, earth: 5, dark: 5, light: 5 }),
  enemy({ name: "Staff Caster", file: "Staff_Caster.webp", hp: 375, armor: 0, dark: 50 }),
  enemy({ name: "Tentacle Shooter", file: "Tentacle_Shooter.webp", hp: 200, armor: 20, water: 25 }),
  enemy({ name: "Wraith No More", file: "Wraith_No_More.webp", hp: 10000, armor: 25, fire: 15, water: 15, air: 15, earth: 15, dark: 75 }),
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
const weaponPreview = document.querySelector("#weapon-preview");
const enemyPreview = document.querySelector("#enemy-preview");
const totalDamage = document.querySelector("#total-damage");
const hitsToKill = document.querySelector("#hits-to-kill");
const physicalDamage = document.querySelector("#physical-damage");
const physicalDetail = document.querySelector("#physical-detail");
const elementalDamageValue = document.querySelector("#elemental-damage");
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

  const elementalRows = elements.map((element) => {
    const raw = weapon.elementalDamage[element] ?? 0;
    const boosted = raw * multiplier;
    const resistance = enemy.elementalResistance[element] ?? 0;
    const dealt = Math.max(0, boosted - resistance);
    return { element, raw, boosted, resistance, dealt };
  });

  const mitigatedPhysical = Math.max(0, incomingPhysical - enemy.armor);
  const totalElemental = elementalRows.reduce((total, row) => total + row.dealt, 0);
  const fallbackPhysical = mitigatedPhysical === 0 && totalElemental === 0 ? 1 : 0;
  const totalPhysical = mitigatedPhysical + fallbackPhysical;
  const total = totalPhysical + totalElemental;

  return { appliedPerks, multiplier, incomingPhysical, mitigatedPhysical, fallbackPhysical, totalPhysical, elementalRows, totalElemental, total };
}

function formatNumber(value) {
  const rounded = Math.round(value);
  return Math.abs(value - rounded) < Number.EPSILON * 100 ? String(rounded) : value.toFixed(2);
}

function formatElementSummary(values) {
  const active = elements
    .filter((element) => (values[element] ?? 0) > 0)
    .map((element) => `${element[0].toUpperCase()}${element.slice(1)} ${values[element]}`);
  return active.length ? active.join(" · ") : "No elemental values";
}

function formatElementalCalculation(rows, multiplier) {
  const weaponElements = rows.filter((row) => row.raw > 0);

  if (!weaponElements.length) {
    return "No elemental damage on this weapon.";
  }

  return weaponElements
    .map((row) => `${row.element[0].toUpperCase()}${row.element.slice(1)} ${formatNumber(row.raw)} × ${formatNumber(multiplier)} perks − ${formatNumber(row.resistance)} resist = ${formatNumber(row.dealt)}`)
    .join(" · ");
}

function renderPreview(container, item, kind) {
  const primaryStats = kind === "weapon"
    ? `${formatNumber(item.baseDamage)} base · ${formatNumber(item.criticalChance)}% crit · ${item.type}`
    : `${formatNumber(item.hp)} HP · ${formatNumber(item.armor)} armor`;
  const elementValues = kind === "weapon" ? item.elementalDamage : item.elementalResistance;
  const elementLabel = kind === "weapon" ? "Elemental damage" : "Elemental resistance";

  container.innerHTML = `
    <img src="${item.image}" alt="${item.name}" loading="lazy" />
    <div>
      <strong>${item.name}</strong>
      <span>${primaryStats}</span>
      <small>${elementLabel}: ${formatElementSummary(elementValues)}</small>
      <a href="${item.sourceUrl}" target="_blank" rel="noreferrer">Wiki source</a>
    </div>
  `;
}

function render() {
  const formData = new FormData(form);
  const weapon = weapons.find((item) => item.id === formData.get("weapon")) ?? weapons[0];
  const enemy = enemies.find((item) => item.id === formData.get("enemy")) ?? enemies[0];
  const activePerks = selectedPerks(formData);
  const critical = formData.has("critical");
  const result = calculateDamage({ weapon, enemy, activePerks, critical });
  const hitCount = Math.ceil(enemy.hp / result.total);

  renderPreview(weaponPreview, weapon, "weapon");
  renderPreview(enemyPreview, enemy, "enemy");
  totalDamage.textContent = formatNumber(result.total);
  hitsToKill.textContent = `${hitCount} ${hitCount === 1 ? "hit" : "hits"} to defeat ${enemy.name}`;
  physicalDamage.textContent = formatNumber(result.totalPhysical);
  physicalDetail.textContent = `${formatNumber(weapon.baseDamage)} base × ${formatNumber(result.multiplier)} perks${critical ? " × 2 crit" : ""} − ${enemy.armor} armor${result.fallbackPhysical ? " → 1 minimum because no elemental damage is dealt" : ""}`;
  elementalDamageValue.textContent = formatNumber(result.totalElemental);
  elementalDetail.textContent = formatElementalCalculation(result.elementalRows, result.multiplier);
  perkMultiplier.textContent = `${formatNumber(result.multiplier)}×`;
  perkDetail.textContent = result.appliedPerks.length ? result.appliedPerks.map((perk) => perk.label).join(", ") : "No selected perk applies.";

  elementTable.innerHTML = result.elementalRows
    .map((row) => `
      <tr>
        <td>${row.element[0].toUpperCase()}${row.element.slice(1)}</td>
        <td>${formatNumber(row.raw)}</td>
        <td>${formatNumber(row.boosted)}</td>
        <td>${formatNumber(row.resistance)}</td>
        <td class="${row.dealt > 0 ? "element-hit" : "element-blocked"}">${formatNumber(row.dealt)}</td>
      </tr>
    `)
    .join("");
}

populateSelect(weaponSelect, weapons);
populateSelect(enemySelect, enemies);
form.addEventListener("change", render);
render();
