class MonsterType {
  let name;
  let baseHealth;
  let attacks = [];

  constructor(name, baseHealth, attacks) {
    this.name = name;
    this.baseHealth = baseHealth;
    this.attacks = attacks;
  }
}
