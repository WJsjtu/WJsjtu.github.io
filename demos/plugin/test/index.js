var canvas = document.getElementById("canvas");
var app = new PIXI.Application({
    view: canvas,
    resolution: window.devicePixelRatio,
    // backgroundColor: 0x000000,
    antialias: true,
    forceCanvas: false,
});

// app.renderer.backgroundColor = 0x000000;

var sprite = new PIXI.Sprite();
sprite.anchor.set(0.5, 0.5);
sprite.texture = PIXI.Texture.fromImage("noise.png");
sprite.x = (app.screen.width / 2) * 0.45;
sprite.y = (app.screen.height / 2) * 0.45;
sprite.scale.x = sprite.scale.y = 0.5;
sprite.pluginName = "picture";

app.stage.addChild(sprite);