class RobotPetarung {
  constructor(nama,senjata,level,hp){
    this.nama = nama;
    this.senjata = senjata;
    this.level = level;
    this.hp = hp;
  };

  
  serang(){
    return `Robot ${this.nama} menyerang dengan ${this.senjata}!`
  }
  
  move(){
    return `Move`;
  }

  moveLeft(){
    return `${this.nama} Move left`;
  };
  
  moveRight(){
    return `${this.nama} Move right`
  }
  moveBack(){
    return `${this.nama} Move back`
  }
}

const robotMeki = new RobotPetarung("Meki","Sniper","Extreme",5000)

console.log(robotMeki.move());
console.log(robotMeki.serang());
console.log(robotMeki.moveBack());