var todd = {};

todd.modules = {};
layers = {};

todd.add_module = function (name, funcs) {
  console.log('adding module ' + name);
  todd.modules[name] = funcs;
};

todd.run_module_funcs = function (funcname, game) {
    for (var name in todd.modules) {
      if (!todd.modules.hasOwnProperty(name)) {
        continue;
      }
      if (todd.modules[name].hasOwnProperty(funcname)) {
        todd.modules[name][funcname](game);
      }
    }
};

window.onload = function() {
    game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { init: init, preload: preload, create: create, update: update});

    function init() {
      todd.run_module_funcs('init', game);
    }

    function preload () {
      console.log('preload', game);
      todd.run_module_funcs('preload', game);
    }

    function create () {
      game.world.width = 1024*2;
      game.world.height = 768*2;
      game.world.scale.setTo(0.5, 0.5);
      layers = {
        'background': game.add.group(),
        'foreground': game.add.group(),
        'ui': game.add.group()
      };
      layers.background.z = -1000;
      layers.foreground.z = 0;
      layers.ui.z = 1000;
      todd.run_module_funcs('create', game);
    }

    function update () {
      todd.run_module_funcs('update', game);
    }
};
