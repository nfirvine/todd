(function() {
  var bomb_hole;
  var trash_bin;
  //background is in the ui just cause I'm lazy
  var background;
  function init(game) {
  }

  function preload(game) {
    game.load.image('bomb_hole', 'assets/bomb_hole.png');
    game.load.image('trash_bin', 'assets/trash_bin.png');
    game.load.image('background', 'assets/background.png');

  }

  function create(game) {
    background = game.add.sprite(0,0, 'background');
    layers.background.add(background);
    background.scale.setTo(0.5, 0.5);
    trash_bin = game.add.sprite(250, 650, 'trash_bin');
    trash_bin.scale.setTo(0.5, 0.5);
    layers.ui.add(trash_bin);
    bomb_hole = game.add.sprite(700, 650, 'bomb_hole');
    bomb_hole.scale.setTo(0.5, 0.5);
    layers.ui.add(bomb_hole);
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
