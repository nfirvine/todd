var todd = {};

todd.modules = {};

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
    var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { init: init, preload: preload, create: create, update: update});

    function init() {
      todd.run_module_funcs('init', game);
    }

    function preload () {
      console.log('preload', game);
      todd.run_module_funcs('preload', game);

    }

    function create () {
      todd.run_module_funcs('create', game);
    }

    function update () {
      todd.run_module_funcs('update', game);
    
    }
};
