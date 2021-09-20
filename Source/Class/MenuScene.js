class MenueScene {
    constructor( buttons = { startButton: { img, img2} } ) {

        //start button
        this.startButtonNotPressed = buttons.startButton.img
        this.startButtonPressed = buttons.startButton.img2

    }

    start() {

        startButton.scale = 0.5
        startButton.addAnimation( "startImage", this.startButtonNotPressed )
        startButton.addAnimation( "mousePressed", this.startButtonPressed )

        if ( mousePressedOver( startButton ) ) {

            startButton.changeAnimation( "mousePressed" , this.startButtonPressed );
            // if (SoundRecentlyPlayed == false) {
            //     click.play();
            // }
            // SoundRecentlyPlayed = true

            setTimeout(() => {

                GameState = 1
                // SoundRecentlyPlayed = false;



            }, 1000)

        }else {
            // SoundRecentlyPlayed = false
            startButton.changeAnimation( "startImage" , this.startButtonNotPressed );
        }

    }
}