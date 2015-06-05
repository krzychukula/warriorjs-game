class Player {
  playTurn(warrior) {
    // Cool code goes here
    var health = warrior.health();

    if(warrior.feel().isEmpty()){

      if(health < this._health){
        //archer
        warrior.walk()
      }else if(health < 20){
        warrior.rest();
      }else{
        warrior.walk()
      }
    }else{
      if(warrior.feel().isCaptive()){
        warrior.rescue()
      }else{
        warrior.attack();
      }

    }

    this._health = health;

  }
}

global.Player = Player;
