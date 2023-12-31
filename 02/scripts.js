window.onload = function(){

    new TimelineMax()
      .set('#logo',     {autoAlpha:1})
      .set('#flare1',   {transformOrigin:'110px 55px 2px', transformPerspective:200, left:70, top:45, alpha:0, scale:1.2, rotationX:-15, z:10}, 0)
      .from('#flare2',      1.0, {x:-9, y:15, scale:0, ease:Power0.easeNone}, 0)
      .to('#flare1',        2.0, {scale:0.5, rotationX:25, ease:Power1.easeIn}, 1)
      .to('#flare1',        2.0, {x:4, y:2, ease:Power0.easeNone}, 0.9)
      .to('#flare1',        1.0, {alpha:1, ease:Power1.easeInOut}, 0.9)
      .to('#flare1',        0.8, {alpha:0, ease:Power3.easeIn}, 1.7)
      .from('#logoChrome',  1.5, {alpha:0, ease:Power3.easeInOut}, 0)
      .fromTo('#logoDark',  4.0, {y:-1, alpha:1}, {y:3, alpha:0.8, ease:Power1.easeInOut}, 0)
      .fromTo('#logoDark',  4.0, {x:-3}, {x:2, scaleX:0.9, ease:Power1.easeInOut}, 0)
      .to('#logoDark',      2.0, {alpha:0.1, ease:Power1.easeInOut}, 2)  
      .from('#logo',        4.0, {scale:0.9, rotation:1}, 0)  
      .to('#logo',          1.5, {alpha:0, ease:Power2.easeInOut}, 2.5)
    }