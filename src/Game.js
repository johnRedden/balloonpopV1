/* jshint browser:true */
// create BasicGame Class
BasicGame = {

};

// create Game function in BasicGame
BasicGame.Game = function (game) {
};

// set Game function prototype
BasicGame.Game.prototype = {

    init: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.stage.backgroundColor = '#fff';
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Force the orientation in landscape or portrait.
        // * Set first to true to force landscape. 
        // * Set second to true to force portrait.
        this.scale.forceOrientation(false, true);
        
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.restitution = 1; //this gives bounce
        this.physics.p2.gravity.y = 50;
        
    },

    preload: function () {

        
    },
    
    create: function () {



    },
    
    update: function(){
        

        
    },
    
    // Your methods go here
    


};