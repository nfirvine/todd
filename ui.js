var ReagentPointer = this.ReagentPointer = function(basis) {
  console.log("pointer", basis);
  Phaser.Sprite.call(this, basis.game, basis.x, basis.y, basis.key);
  this.anchor.setTo(0.5, 0.5);
  this.alpha = 0.5;
  this.state = "on";
  this.inputEnabled = true;
  this.events.onInputUp.add(
    function () {
      this.destroy();
    },
    this
  );
};

ReagentPointer.prototype = Object.create(Phaser.Sprite.prototype);
ReagentPointer.prototype.constructor = ReagentPointer;

ReagentPointer.prototype.update = function () {
  switch (this.state) {
    case "on":
      if (game.input.activePointer.isUp) {
        this.state = "up";
      } else {
        this.x = this.game.input.activePointer.x*2;
        this.y = this.game.input.activePointer.y*2;
      }
      break;
    case "up":
      this.destroy();
      break;
  }
};

this.reagent_pointer = null;

(function() {
  function init(game) {
  }

  function preload(game) {
    game.load.image('bomb_hole', 'assets/bomb_hole.png');
    game.load.image('trash_bin', 'assets/trash_bin.png');
    game.load.image('background', 'assets/background.png');
    game.load.audio('soundtrack', 'assets/music.mp3');
  }

  function create(game) {
    var background = game.add.sprite(0,0, 'background');
    layers.background.add(background);
    var trash_bin = game.add.sprite(450, 1300, 'trash_bin');
    layers.ui.add(trash_bin);
    var bomb_hole = game.add.sprite(1350, 1300, 'bomb_hole');
    layers.ui.add(bomb_hole);
    var soundtrack = game.add.audio('soundtrack', 1, true);
    soundtrack.play();
  }

  function update(game) {
  }

  todd.add_module('ui', {
    init: init,
    preload: preload,
    create: create,
    update: update
  });
})();
