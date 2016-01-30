(function() {
  function init() {
    console.log('altar init');

  }

  function preload() {
    console.log('altar preload');

  }

  function create() {
    console.log('altar create');
  }

  function update() {
  }

  todd.add_module('altar', {
    init: init,
    preload: preload,
    create: create,
    update: update
  });

})();
