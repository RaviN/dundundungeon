class Monster {

  constructor(name, level, type){
    this.name = name;
    this.level = level;
    this.type = type;
    this.health = this.level * this.type.baseHealth;
  }
  
}
