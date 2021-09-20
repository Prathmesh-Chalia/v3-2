class Player {

    constructor(  ) {

        this.body = createSprite( 250, 200, 20, 20 );
        this.body.x = width / 2
        this.body.y = height / 2
        this.body.addImage("player", PlayerSprite)
        this.body.visible = false;
        this.health = 100;

    }

}