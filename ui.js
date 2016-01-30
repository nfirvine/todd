(function() {
  var bomb_hole;
  var trash_bin;
  function init(game) {
  }

  function preload(game) {
    game.load.image('bomb_hole', 'assets/bomb_hole.png');
    game.load.image('trash_bin', 'assets/trash_bin.png');

  }

  function create(game) {
    trash_bin = game.add.sprite(250, 650, 'trash_bin');
    trash_bin.scale.setTo(0.5, 0.5);
    bomb_hole = game.add.sprite(700, 650, 'bomb_hole');
    bomb_hole.scale.setTo(0.5, 0.5);
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
