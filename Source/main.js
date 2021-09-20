
let GameState = 0;
var Menu

var initialPosArray = []
let count = 2
let count2 = 0
let EVENT_STOP_ENTITY_FLAG = 0;
let EVENT_ENTITY_RETURNED_FLAG = 0;
var startImg1, startImg2
var startButton;

var player, PlayerSprite
var island;
var Level1;
var click
var SoundRecentlyPlayed = false

var obsGroup = []
var obsRadiusGroup = []

function preload() {

    startImg1 = loadAnimation("Assets/Images/Start Button Not Pressed.png");
    startImg2 = loadAnimation("Assets/Images/Start Button Pressed.png");
    PlayerSprite = loadImage("Assets/Images/player.png");

    //Sound Effects
    click = loadSound("Assets/Music/Mouse-Click.mp3");

}

function setup() {
    createCanvas( window.innerWidth, window.innerHeight )

    startButton = createSprite( window.innerWidth / 2, window.innerHeight / 2, 100, 50 );
    startButton.visible = true

    player = new Player()


    island = createSprite( 250, 250, width * 1.2, height * 1.2 );
    island.x = width / 2
    island.y = height / 2
    island.depth = player.body.depth - 1
    island.visible = false;

    // obs = createSprite( random( 0, window.innerWidth ), random( 0, window.innerHeight ), 10, 10 )
    // obs.visible = false;
    // obs.debug = true;

    // initialPos = {
    //     x: obs.position.x,
    //     y: obs.position.y,
    // }

    // obsRadius = createSprite( obs.x, obs.y, 100, 100 )
    // obsRadius.visible = false;
    // obsRadius.debug = true;

    for ( let i = 0; i < count; i++ ) {

        var obs = new Entity( random( 0, island.width ), random( 0, island.height ) );
        var obsRadius = new EntityRadius( obs.body.x, obs.body.y );

        obsGroup[i] = obs
        obsRadiusGroup[i] = obsRadius

        var initialPos = {
            x: obs.body.x,
            y: obs.body.y,
        };

        initialPosArray[i] = initialPos

    }

    let MenuSettings = {
        img: startImg1, 
        img2: startImg2
    }
    Menu = new MenueScene({ startButton: MenuSettings });

    Level1 = new LevelOne();

}


function draw() {
    background( 255, 255, 255 )

    
    if ( GameState == 0 && Menu ){
        Menu.start()

    }
    if ( GameState == 1 && Menu ) {
        Level1.start()
    }


    drawSprites();
}

