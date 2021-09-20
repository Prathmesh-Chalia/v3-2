class Entity {

    constructor( x, y ) {

        this.body = createSprite( x, y, 10, 10 )
        this.body.visible = false;
        this.body.debug = true;

        this.count = 0

        this.x = x;
        this.y = y;

    }

}