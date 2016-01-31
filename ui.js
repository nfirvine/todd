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
    var trash_bin = game.add.sprite(500, 1300, 'trash_bin');
    layers.ui.add(trash_bin);
    var bomb_hole = game.add.sprite(1400, 1300, 'bomb_hole');
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
