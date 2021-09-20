class LevelOne {

    constructor () {


    }

    start () {

        startButton.visible = false
        island.visible = true
        player.body.visible = true

        // obsRadius.x = obs.x;
        // obsRadius.y = obs.y;  
        

        function createOptionalIndexes( value ) {

            let ary = []
            let incrementValue = 0

            for ( let i = 0; i < 15; i++ ) {

                ary.push( value + incrementValue + i );

            }

            for ( let i = 0; i < 15; i-- ) {

                ary.push( value + incrementValue + i );

            }

            return ary;

        }

        for ( let i = 0; i < count; i++ ) {

            obsGroup[i].body.visible = true
            obsRadiusGroup[i].body.x = obsGroup[i].body.x;
            obsRadiusGroup[i].body.y = obsGroup[i].body.y;


            if ( player.body.isTouching( obsRadiusGroup[i].body ) ) {

                obsGroup[i].body.attractionPoint( 0.01, player.body.x, player.body.y )

                //events
                EVENT_STOP_ENTITY_FLAG = 0
                EVENT_ENTITY_RETURNED_FLAG = 0

            }else {

                if ( EVENT_STOP_ENTITY_FLAG == 0 ) {
                    obsGroup[i].body.setVelocity( 0, 0 )
                    
                    //-----
                    EVENT_STOP_ENTITY_FLAG = 1
                }

                returnObs( initialPosArray[i].x, initialPosArray[i].y )

            }

            function returnObs( x, y ) {

                x = Math.floor( x ) 
                y = Math.floor( y )

                    if ( Math.floor( obsGroup[i].body.x ) != x && Math.floor( obsGroup[i].body.y ) != y && EVENT_ENTITY_RETURNED_FLAG == 0 && obsGroup[i].count < 10 ) {

                        obsGroup[i].body.attractionPoint( 1, x, y )
                        obsGroup[i].count++
                        console.log(obsGroup[i].count)
            
                    }else if ( obsGroup[i].count == 10 ) {
                        obsGroup[i].body.x = x
                        obsGroup[i].body.y = y 
                        obsGroup[i].body.setVelocity( 0, 0 )

                        //----
                        EVENT_ENTITY_RETURNED_FLAG = 1
                        obsGroup[i].count = 0
                    }

            }

        }

        camera.position.x = player.body.x
        camera.position.y = player.body.y
        
        if ( keyIsDown( LEFT_ARROW ) ) {
            player.body.x -= 4

        }

        if ( keyIsDown( RIGHT_ARROW ) ) {

            player.body.x += 4

        }

        if ( keyIsDown( UP_ARROW ) ) {

            player.body.y -= 4

        }

        if ( keyIsDown( DOWN_ARROW ) ) {

            player.body.y += 4

        }

        // if ( Player.isTouching( obsRadius ) ) {

        //     obs.attractionPoint( 0.01, Player.x, Player.y )

        // }else {
        //     for( let x = 1; x != 2; x++ ) {
        //         obs.setVelocity( 0, 0 )
        //     }
        //     this.returnObs( initialPos.x, initialPos.y )
        // }

            

    }

    

}