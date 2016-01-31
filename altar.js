(function() {
  var altar = null;
  function init(game) {
    console.log('altar init');
  }

  function preload(game) {
    console.log('altar preload');
    game.load.atlasJSONHash('anim', 'assets/dej_animations.png', 'assets/dej_animations.json');

  }

  function create(game) {
    // function tweenTint(obj, startColor, endColor, time) {
    //   // create an object to tween with our step value at 0
    //   var colorBlend = {step: 0};
    //   // create the tween on this object and tween its step property to 100
    //   var colorTween = game.add.tween(colorBlend).to({step: 100}, time, Phaser.Easing.Linear.None, true, 0, -1, true );
    //   // run the interpolateColor function every time the tween updates, feeding it the
    //   // updated value of our tween each time, and set the result as our tint
    //   colorTween.onUpdateCallback(function() {
    //     obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
    //   });        // set the object to the start color straight away
    //   obj.tint = startColor;
    //   // start the tween
    //   colorTween.start();
    // }
    console.log('altar create');
    //300x150
    altar = game.add.sprite(game.world.centerX, 425, 'anim', 'altar_animation/altar_animation0001.png');
    altar.animations.add('glow', Phaser.Animation.generateFrameNames('altar_animation/altar_animation', 1, 78, '.png', 4), 19, true, false);
    altar.animations.play('glow');
    altar.scale.setTo(0.5,0.5);
    altar.anchor.setTo(0.5, 0.5);

    baby = game.add.sprite(0, -100, 'anim', 'dead_body_animation/dead_body_animation0001.png');
    baby.animations.add('festering', Phaser.Animation.generateFrameNames('dead_body_animation/dead_body_animation', 1, 32, '.png', 4), 19, true, false);
    baby.animations.play('festering');
    baby.scale.setTo(0.5,0.5);

    baby.anchor.setTo(0.5, 0.5);
    altar.addChild(baby);

    // altar.scale.setTo(2,2);
    // tweenTint(star, 0xCC4518, 0x2E1006);
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
