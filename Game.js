MyGame.Game = function(game) {
    this.gameisover = false;
};
var Enemy;
var self;
var canGoMain = false;
MyGame.Game.prototype = {
    create: function() {
        self = this;

        this.bg = this.add.image(0,0,'bg'+type+'');

        this.EnemyGroup = this.add.physicsGroup(Phaser.Physics.ARCADE);
        this.EnemyGroup.enableBody = true;

        this.goodGroup = this.add.group();

        this.player = this.add.sprite(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 155,'player');
        this.player.anchor.set(0.5,0);
        this.player.inputEnabled = true;
        this.player.input.enableDrag();
        this.player.input.allowVerticalDrag = false;
        this.physics.enable(this.player,Phaser.Physics.ARCADE);
        this.player.body.setSize(83, 51, 13, 61);

        this.banner = this.add.image(0,0,'banner'+type+'');
        this.Time = this.time.events.loop(Phaser.Timer.SECOND * 1, this.createEnemy, this);


        var blackFade = this.add.sprite(0,0,"blackFade");
        var fadeTween = this.add.tween(blackFade);
        fadeTween.to({
            alpha:0
        },1000,Phaser.Easing.Cubic.Out,true);


    },
    update: function(){
        if(this.gameisover) return;
        this.physics.arcade.overlap(this.EnemyGroup,this.player , null, this.Hit, this);
        this.EnemyGroup.forEachAlive(this.checkEnemy, this);
    },
    createEnemy : function(){
        Enemy = this.EnemyGroup.create(this.rnd.integerInRange(50, 500),this.rnd.integerInRange(0, -150),'enemy_'+this.rnd.integerInRange(0, 4)+'');
        Enemy.body.gravity.y = this.rnd.integerInRange(100, 1000);
        Enemy.anchor.set(0.5,0);
    },
    Hit : function(player,Enemy){
        this.goodGroup.create(this.player.x, this.player.y, 'good');
        this.goodGroup.forEach(function(i){
            self.add.tween(i).to( { y:self.player.y-100, alpha: 0 }, 1000, Phaser.Easing.Cubic.Out, true).onComplete.add(function(){
                i.kill();
            },this)
        });
        Enemy.kill()
    },
    checkEnemy : function(item){
        if(item.y>=MyGame.GAME_HEIGHT)
        {
            item.kill();
            this.gameover();
        }
    },
    gameover : function(){
        this.gameisover = true;
        this.time.events.remove(this.Time);
        this.player.inputEnabled = false;
        this.EnemyGroup.forEachAlive(function(alive){
            alive.body.velocity.y = 0;
            alive.body.gravity.y =0;
        }, this);
        this.gameoverImg = this.add.image(0,0,'gameover');

        //显示登录框
        this.time.events.add(Phaser.Timer.SECOND * 2, this.showSignUp, this);
        //this.showLotto();

    },
    showSignUp : function(){
        document.getElementById('signup').style.display = 'block';
        $("#name").focus();
        document.getElementById('subBtn').addEventListener('touchend',function(){
            document.getElementById('signup').style.display = 'none';
            canGoMain = true;
            self.showLotto();
        },false)
    },
    showLotto : function(){//中奖框
        this.box = this.add.image(MyGame.GAME_WIDTH/2,200,'box');
        this.box.anchor.set(0.5,0);

        this.box.inputEnabled = true;
        this.box.events.onInputDown.add(function(){
            if(canGoMain)
            {
                this.state.start('MainMenu');
                this.gameisover = false;
            }
        }, this);

        this.lottoTitle = this.add.text(0, 100, "恭喜您获得礼品一份，礼物已经\n放入“我的礼包”中", {font: "32px Arial", fill: "#000000",align: "center"});
        this.lottoTitle.anchor.set(0.5,0);
        this.lottoText = this.add.text(0, 350, " "+lotto1+""+lotto2+"", {font: "42px Arial", fill: "#000000",align: "center"});
        this.lottoText.anchor.set(0.5);
        this.lottoText.lineSpacing = 30;
        this.box.addChild(this.lottoTitle);
        this.box.addChild(this.lottoText);
    }
};

