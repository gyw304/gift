MyGame.MainMenu = function(game) {};
var type;
var canGame = true;
var current=1;
MyGame.MainMenu.prototype = {
    create: function() {
        this.add.image(0,0,'MainMenu');
        this.rule_btn = this.add.button(MyGame.GAME_WIDTH/2,580,'rule_btn',this.showRule,this);
        this.rule_btn.anchor.set(0.5,0);
        this.my_lotto = this.add.button(MyGame.GAME_WIDTH/2,640,'my_lotto',this.showMyLotto,this);
        this.my_lotto.anchor.set(0.5,0);
        this.btn_107 = this.add.button(340,700,'type_1',this.startGame,this);
        this.btn_135 = this.add.button(30,700,'type_2',this.startGame,this);

        var blackFade = this.add.sprite(0,0,"blackFade");
        var fadeTween = this.add.tween(blackFade);
        fadeTween.to({
            alpha:0
        },1000,Phaser.Easing.Cubic.Out,true);

    },
    startGame: function(item) {
        if(canGame)
        {
            type = item.key.split("_")[1];
            this.state.start('Game');
        }
    },
    showRule : function(){
        this.ruleBox = this.add.image(0,0,'ruleBox');
        this.ruleBox.inputEnabled = true;
        this.ruleBox.events.onInputDown.add(function(){
            this.ruleBox.kill()
        }, this);
    },
    showMyLotto : function(){

        if(islotto)
        {
            canGame = false;

            this.myLottoBox = this.add.image(0,0,'myLottoBox');
            this.closeBtn = this.add.button(530,90,'close',function(){
                this.myLottoBox.kill();
                canGame = true;
            },this);
            this.myLottoBox.addChild(this.closeBtn);


            this.myLottoText = this.add.sprite(40,260,'ljText');
            this.myLottoBox.addChild(this.myLottoText);

            this.ctrBtn = this.add.sprite(200,855,'yhq_way');
            this.myLottoBox.addChild(this.ctrBtn);

            this.lottoTexts = this.add.text(MyGame.GAME_WIDTH/2, 160, " "+lotto1+""+lotto2+"", {font: "32px Arial", fill: "#ec6941",align: "center"});
            this.lottoTexts.anchor.set(0.5,0);
            this.myLottoBox.addChild(this.lottoTexts);

            this.ctrBtn.inputEnabled = true;
            this.ctrBtn.events.onInputDown.add(function(){
                if(current)
                {
                    this.ctrBtn.loadTexture('lj_way', 0, false);
                    this.myLottoText.loadTexture('yhqText', 0, false);
                    current = 0;
                }
                else
                {
                    this.ctrBtn.loadTexture('yhq_way', 0, false);
                    this.myLottoText.loadTexture('ljText', 0, false);
                    current = 1;
                }

            }, this);
        }
        else
        {
            alert('Äú»¹Î´ÖÐ½±')
        }



        //this.myLottoText.loadTexture(yhqText, 0, false);



    }
};