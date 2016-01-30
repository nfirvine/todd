var todd = {};

todd.modules = {};

todd.add_module = function (name, funcs) {
  console.log('adding module ' + name);
  todd.modules[name] = funcs;
};

todd.run_module_funcs = function (funcname) {
    for (var name in todd.modules) {
      if (!todd.modules.hasOwnProperty(name)) {
        continue;
      }
      if (todd.modules[name].hasOwnProperty(funcname)) {
        todd.modules[name][funcname]();
      }
    }
};

window.onload = function() {
    var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { init: init, preload: preload, create: create, update: update});

    function init() {
      todd.run_module_funcs('init');
    }

    function preload () {
      todd.run_module_funcs('preload');
      game.load.image('logo', 'phaser.png');

    }

    function create () {
      todd.run_module_funcs('create');
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

    }

    function update () {
      todd.run_module_funcs('update');
    
    }
};
