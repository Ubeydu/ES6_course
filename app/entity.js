class Entity {
    constructor(name, height) {
      this.name = name;
      this.height = height;
    }

    greet() {
      console.log(`Hi. I'm ${this.name} from middle earth.`);
    }
  }



class Wizard {
  constructor(power_level) {
    this.power_level = power_level;
  }
  // TODO add power(), such that it returns this class's power_level
  power() {
      return this.power_level;
  }
}

export {Entity, Wizard};
