var Reagent = this.Reagent = function(game, x, y, type) {
  Phaser.Sprite.call(this, game, x, y, "reagent_" + type);
  this.anchor.setTo(0.5, 0.5);
  this.type = type;
  this.state = "new";
};

Reagent.TYPES = [
  'feather'
];

Reagent.prototype = Object.create(Phaser.Sprite.prototype);
Reagent.prototype.constructor = Reagent;

Reagent.prototype.update = function() {
  console.log(this.state);
  Phaser.Sprite.prototype.update.apply(this, arguments);
  switch (this.state) {
    case "new":
      this.state = "moving";
      break;
    case "moving":
      if (this.x >= 550) {
        this.destroy();
        //TODO: next steps
        //this.state = "falling";
      } else {
        this.x += 5;
      }
      break;
  }
};


(function() {
  function init(game) {
  }

  function preload(game) {
    for (var i in Reagent.TYPES) {
      var type = Reagent.TYPES[i];
      game.load.image('reagent_'+type, 'assets/reagent_'+type+'.png');
    }
  }

  function create(game) {
  }

  function update(game) {
  }

  todd.add_module('reagent', {
    init: init,
    preload: preload,
    create: create,
    update: update
  });
})();
