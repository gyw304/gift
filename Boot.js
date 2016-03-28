var MyGame = {};
MyGame.Boot = function(game) {
    MyGame.GAME_WIDTH = 640;
    MyGame.GAME_HEIGHT = 1010;
};
MyGame.Boot.prototype = {
    create: function() {
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
        this.state.start('Preloader');
    }
};