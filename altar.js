(function() {
  var altar = null;
  function init(game) {
    console.log('altar init');
  }

  function preload(game) {
    console.log('altar preload');
    game.load.image('altar', 'assets/altar.png');
    game.load.image('star', 'assets/star.png');

  }

  function create(game) {
    function tweenTint(obj, startColor, endColor, time) {
      // create an object to tween with our step value at 0
      var colorBlend = {step: 0};
      // create the tween on this object and tween its step property to 100
      var colorTween = game.add.tween(colorBlend).to({step: 100}, time, Phaser.Easing.Linear.None, true, 0, -1, true );
      // run the interpolateColor function every time the tween updates, feeding it the
      // updated value of our tween each time, and set the result as our tint
      colorTween.onUpdateCallback(function() {
        obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
      });        // set the object to the start color straight away
      obj.tint = startColor;
      // start the tween
      colorTween.start();
    }
    console.log('altar create');
    //300x150
    altar = game.add.sprite(game.world.centerX, 300, 'altar');
    altar.anchor.setTo(0.5, 0.5);
    altar.scale.setTo(2,2);
    star = game.make.sprite(0, 0, 'star');
    star.anchor.setTo(0.5, 0.5);
    altar.addChild(star);
    tweenTint(star, 0xCC4518, 0x2E1006);
  }

  function update(game) {
  }

  todd.add_module('altar', {
    init: init,
    preload: preload,
    create: create,
    update: update
  });
})();
