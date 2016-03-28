MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    preload: function() {
        this.stage.backgroundColor = '#ffffff'
    },
    start : function(){
        this.load.image('blackFade','assets/blackFade.gif');
        this.load.image('MainMenu','assets/MainMenu.jpg?1');
        this.load.image('type_2','assets/btn-107.png');
        this.load.image('type_1','assets/btn-135.png');
        this.load.image('rule_btn','assets/rule_btn.png');
        this.load.image('my_lotto','assets/my_lotto.png');
        this.load.image('ruleBox','assets/ruleBox.png');
        this.load.image('cover','assets/cover.png');

        this.load.image('bg1','assets/bg1.jpg');
        this.load.image('bg2','assets/bg2.jpg');
        this.load.image('player','assets/player.png');
        this.load.image('banner1','assets/banner1.png?1');
        this.load.image('banner2','assets/banner2.png?1');

        this.load.image('yhq_way','assets/yhq_way.png');
        this.load.image('lj_way','assets/lj_way.png');
        this.load.image('myLottoBox','assets/myLottoBox.png');
        this.load.image('close','assets/close.png');
        this.load.image('ljText','assets/ljText.png');
        this.load.image('yhqText','assets/yhqText.png');

        this.load.image('enemy_0','assets/enemy_0.png');
        this.load.image('enemy_1','assets/enemy_1.png');
        this.load.image('enemy_2','assets/enemy_2.png');
        this.load.image('enemy_3','assets/enemy_3.png');
        this.load.image('enemy_4','assets/enemy_4.png');

        this.load.image('good','assets/good.png')

        this.load.image('gameover','assets/gameover.png');
        this.load.image('box','assets/box.png');

        this.load.start();

    },

    fileComplete : function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete : function(){
        this.state.start('MainMenu');
    },
    create: function() {
        this.start();
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2-50, '', { fill: '#000000' });
        this.text.anchor.set(0.5);

        this.text2 = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2, '稍等哦，精彩马上呈现...', { fill: '#000000' });
        this.text2.anchor.set(0.5);
    }
};