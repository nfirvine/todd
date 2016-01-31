this.conveyors = [];

var Conveyor = this.Conveyor = function(game, i) {
  var lefthand = i < 3;
  var x = lefthand? 0 : game.world.width;
  x -= (3 - (i % 3)) * 40 * (lefthand? 1 : -1); 
  var y = 600 + (i % 3) * 200; 
  console.log('adding conveyor at', x, y);
  Phaser.Sprite.call(this, game, x, y, 'conveyor');
  this.scale.x *= lefthand? 1 : -1;

  var w = game.add.sprite(700, -60, 'anim', 'worker_animation/worker_animation0001.png');
  this.addChild(w);
  w.scale.setTo(0.25,0.25);

  w.animations.add('bob', Phaser.Animation.generateFrameNames('worker_animation/worker_animation', 1, 27, '.png', 4), 19, true, false);
  w.animations.play('bob');

  conveyors.push(this);
  layers.foreground.add(this);
};

Conveyor.prototype = Object.create(Phaser.Sprite.prototype);
Conveyor.prototype.constructor = Conveyor;


(function() {
  function init(game) {
  }

  function preload(game) {
    game.load.image('conveyor', 'assets/conveyor.png');
    game.load.atlasJSONHash('anim', 'assets/dej_animations.png', 'assets/dej_animations.json');
  }

  function create(game) {
    console.log('conveyor create');
    for (var i=0; i < 6; i++) {
      var c = new Conveyor(game, i);
      game.add.existing(c);
    }
  }

  function update(game) {
  }

  todd.add_module('conveyor', {
    init: init,
    preload: preload,
    create: create,
    update: update
  });
})();
