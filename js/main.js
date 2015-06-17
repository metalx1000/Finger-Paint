var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});
var click = 0;

function preload() {

  //  You can fill the preloader with as many assets as your game requires

  //  Here we are loading an image. The first parameter is the unique
  //  string by which we'll identify the image later in our code.

  //  The second parameter is the URL of the image (relative)
  game.load.image('brush1', 'res/images/brush1.png');

  //game.load.audio('music', ['res/music/music1.ogg', 'res/music/music1.mp3']);
}

function create() {
  //add input for touch screen use
  game.input.addPointer();
 
  var x = game.input.mousePointer.position.x;
  var y = game.input.mousePointer.position.y;
  brushg = game.add.group();
  brushg.enableBody = true;
  brush = brushg.create(x,y, 'brush1');
  brush.anchor.setTo(0.5, 0.5);
  //set background color
  game.stage.backgroundColor = '#ffffff';
  //  Play some music
  //music = game.add.audio('music');
  //music.play('',0,1,true);

  // start fullscreen on click
  game.input.onDown.add(go_fullscreen, this);
}

function update(){
  //this is where things are updated
  if (game.input.mousePointer.isDown
  ||game.input.pointer1.isDown){
    if(click == 0){
      var x = game.input.position.x;
      var y = game.input.position.y;
      brush.position.x = x;
      brush.position.y = y;
      click = 1;
    }
    game.physics.arcade.moveToPointer(brush, 500);
  }else{
    click = 0;
    brush.body.velocity.setTo(0, 0);
  }
  var x = brush.position.x; 
  var y = brush.position.y; 
  paint = game.add.sprite(x,y, 'brush1');
  paint.anchor.setTo(0.5, 0.5);    

}


function go_fullscreen(){
  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.startFullScreen();
}

