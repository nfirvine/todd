(function() {
  var conveyors = [];
  function init(game) {
  }

  function preload(game) {
    game.load.image('conveyor', 'assets/conveyor.png');

  }

  function create(game) {
    console.log('conveyor create');
    for (var i=0; i < 6; i++) {
      var lefthand = i < 3;
      var x = lefthand? 0 : game.world.width;
      var y = 200 + (i % 3) * 125; 
      var c = game.add.sprite(x, y, 'conveyor');
      c.scale.setTo(0.5, 0.5);
      if (!lefthand) {
        c.scale.x *= -1;
        c.x = game.world.width;
      }
      conveyors.push(c);
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
