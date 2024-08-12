
import H from '../hero/hero'
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    boss: cc.Node = null;
    @property(cc.Node)
    listBoss: cc.Node[] = [];
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Node)
    hero: cc.Node = null;
    @property(cc.Node)
    goku: cc.Node = null;
    @property(cc.Node)
    kazetsu: cc.Node = null;
    @property(cc.Node)
    arthur: cc.Node = null;
    @property(cc.Node)
    heroNode: cc.Node = null;
    @property(cc.Node)
    enemylist: cc.Node = null;
    // @property(cc.Node)
    // boss: cc.Node = null;
    @property(cc.Node)
    bossBloodBar: cc.Node = null;
    @property(cc.Node)
    scene1: cc.Node = null
    @property(cc.Node)
    coinBar: cc.Node = null;
    @property(cc.Prefab)
    preDamage: cc.Prefab = null;
    @property(cc.Prefab)
    preFxAtk: cc.Prefab = null;
    @property(cc.Node)
    listEnemy: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.AudioClip)
    bgSOund: cc.AudioClip = null
    @property(cc.AudioClip)
    soundWoodin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWoodOut: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundEnd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundEnemyDie: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUpdate: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundBtn: cc.AudioClip = null;
    @property(cc.Node)
    JoyStick: cc.Node = null;
    @property(cc.Node)
    MissionBar: cc.Node = null;
    @property(cc.Node)
    listRuby: cc.Node = null
    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    endGameNode: cc.Node = null
    @property(cc.Prefab)
    preMeat: cc.Prefab = null;
    @property(cc.Node)
    tranScreen: cc.Node = null;
    @property(cc.Node)
    listScreen: cc.Node[] = [];
    //
    @property(cc.Node)
    listCard: cc.Node = null;
    @property(cc.Node)
    listHero: cc.Node = null
    @property(cc.Node)
    guild: cc.Node = null;
    @property(cc.Label)
    textNameBoss: cc.Label = null;
    @property(cc.Sprite)
    bloodBoss: cc.Sprite = null
    isMoving = false;
    isvertical = false;
    heroComp = null;
    isPauseGame = false;
    isCountEnemiesDie = 0;
    isPhase2 = false
    isSound = false
    isMain = null;
    isEndGame = false;
    isCountFollow = 0
    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_pairBit |
        //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit
        //     ;
    }
    start() {
        this.reponsive()
        cc.audioEngine.play(this.bgSOund, true, 0.4)
        this.isMain = this.heroComp
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        this.heroComp = this.hero.getComponent(H)
        // this.showMission()
        this.setPosHero()
    }
    isCountBoss = 0
    offJoyStick() {
        this.JoyStick.active = false
        this.JoyStick.getComponent("JoyStick").touchEndEvent()
    }
    onJoyStick() {
        this.JoyStick.active = true

    }
    startGame() {
        this.isCountBoss++
        this.boss.getComponent(cc.CircleCollider).enabled = true;
        this.boss.getChildByName("range").getComponent(cc.CircleCollider).enabled = true;
        // this.kazetsu.getComponent(H).moveAuto();
        // this.arthur.getComponent(H).moveAuto()
        // this.goku.getComponent(H).moveAuto()

        let listArr = [cc.v3(-142, -10), cc.v3(0, -100), cc.v3(-126, -115)]
        if (this.isCountBoss == 3) {
            console.log("game")
            listArr = [cc.v3(-190, -5), cc.v3(-59, -69), cc.v3(198, -14)]
        }
        this.kazetsu.getComponent(H).moveToPos(listArr[1], 1);
        this.arthur.getComponent(H).moveToPos(listArr[0], 1);
        this.goku.getComponent(H).moveToPos(listArr[2], 1);

    }

    btn_battle(event) {
        event.currentTarget.getComponent(cc.Button).enabled = false
        this.listCard.active = false;
        this.guild.active = true
        this.onJoyStick()
        cc.audioEngine.play(this.soundBtn, false, 1)
    }
    countDie(tag) {
        this.isCountEnemiesDie++
        if (this.isCountEnemiesDie < 3) {
            this.tranScreen.getComponent(cc.Animation).play()
            this.openNewMap(this.isCountEnemiesDie);

        }
        else if (this.isCountEnemiesDie == 3) {
            this.endGameNode.active = true;
            this.linkToStore.active = true;
            cc.audioEngine.play(this.soundEnd, false, 1)

        }
    }
    openNewMap(value) {
        this.offJoyStick()
        switch (value) {
            case 1:
                this.scheduleOnce(() => {
                    this.listScreen[0].active = false;

                    this.listScreen[1].active = true;

                    this.kazetsu.getComponent(H).setDefault();
                    this.goku.getComponent(H).setDefault()
                    this.arthur.getComponent(H).setDefault()

                    this.hero.position = cc.v3(-99, -277);
                    this.arthur.position = cc.v3(-238, -261);
                    this.kazetsu.position = cc.v3(-43, -351);
                    this.goku.position = cc.v3(-170, -405);
                }, 0.5)

                this.JoyStick.getComponent("JoyStick").offGuide = false
                this.boss = this.listBoss[0]

                this.textNameBoss.string = "CHIMERA"

                break;
            case 2:
                this.scheduleOnce(() => {
                    this.listScreen[1].active = false;

                    this.listScreen[2].active = true;
                    this.kazetsu.getComponent(H).setDefault();
                    this.goku.getComponent(H).setDefault()
                    this.arthur.getComponent(H).setDefault()

                    this.hero.position = cc.v3(5, -270);
                    this.arthur.position = cc.v3(-155, -292);
                    this.kazetsu.position = cc.v3(-7, -377);
                    this.goku.position = cc.v3(187, -352);
                }, 0.5)

                this.JoyStick.getComponent("JoyStick").offGuide = false
                this.boss = this.listBoss[1]
                this.textNameBoss.string = "DARK OCTOPUS"

                break;
        }
        this.boss.getComponent("enemy").blood = this.bloodBoss
        this.scheduleOnce(() => {
            this.bloodBoss.fillRange = 1;
        }, 0.2)
        this.scheduleOnce(() => {
            this.onJoyStick()
        }, 1.5)

    }
    isCountUnlock = 0
    isCountHeroDie = 0
    countHeroDie() {
        this.isCountHeroDie++;
        if (this.isCountHeroDie == 4) {
            this.onEndGame()
        }
    }
    setPosHero() {
        let arrPos = [cc.v3(-367, -986), cc.v3(-375, -895), cc.v3(-309, -819), cc.v3(-370, -1009)]
        // this.goku.getComponent(H).localPos = this.heroComp.arrPosFollow[0];
        this.kazetsu.getComponent(H).gamePlay = this;
        this.arthur.getComponent(H).gamePlay = this;
        this.goku.getComponent(H).gamePlay = this;
        this.heroComp.addFollow(this.arthur);
        this.heroComp.addFollow(this.kazetsu);
        this.heroComp.addFollow(this.goku);


        // this.hero.position = arrPos[0].add(cc.v3(100, 0));
        // this.mako.position = arrPos[1]
        // this.goku.position = arrPos[2]
        // this.kazetsu.position = arrPos[3]
    }
    // showVsBoss() {
    //     console.log("setEnd")
    //     this.boss.active = true;
    //     this.isMoving = true;
    //     let arrPos = [cc.v3(-367, -986), cc.v3(-375, -895), cc.v3(-309, -819), cc.v3(-370, -1009)]
    //     let count = 0;
    //     // this.listIconHero[1].active = false
    //     this.goku.getChildByName("fxAppear").active = true;
    //     this.hero.getChildByName("fxAppear").active = true;
    //     this.kazetsu.getChildByName("fxAppear").active = true;
    //     this.mako.getChildByName("fxAppear").active = true;
    //     this.scheduleOnce(() => {
    //         this.hero.active = false;
    //         this.mako.active = false;
    //         this.kazetsu.active = false;
    //         this.goku.active = false;
    //     }, 0.3)
    //     this.JoyStick.active = false;
    //     this.JoyStick.getComponent("JoyStick").touchEndEvent()
    //     // cc.tween(this.bossExpBar).delay(0.3).to(0.3, { opacity: 0 }).call(() => {
    //     //     this.bossExpBar.active = false;
    //     // }).start()
    //     cc.tween(this.mainCamera.node).delay(0.4).to(0.5, { position: cc.v3(-80, -700) }).call(() => {
    //         console.log("setPos")
    //         this.bossBloodBar.active = true
    //         this.hero.getComponent(H).offColider();
    //         this.mako.getComponent(H).offColider()
    //         this.goku.getComponent(H).offColider()
    //         this.kazetsu.getComponent(H).offColider()
    //         this.kazetsu.zIndex = cc.macro.MAX_ZINDEX

    //         this.hero.position = arrPos[0].add(cc.v3(100, 0));
    //         count++
    //         this.mako.position = arrPos[1]
    //         count++
    //         this.goku.position = arrPos[2]
    //         count++
    //         this.kazetsu.position = arrPos[3]
    //         this.scheduleOnce(() => {
    //             this.boss.getChildByName("hand").active = true;
    //             this.initTouchEvent()
    //         }, 0.2)

    //         this.scheduleOnce(() => {
    //             // if(this.kazetsu!=null){
    //             //     this.kazetsu.getComponent(H).attacked(10000)

    //             // }
    //         }, 12)
    //     }).start()
    //     cc.tween(this.mainCamera).to(0.5, { zoomRatio: 0.8 }).start();
    // }
    initTouchEvent() {
        this.scene1.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.scene1.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    }
    isFirst = false
    moveHeroToBoss() {
        this.heroComp.moveByPos(cc.v3(80, 50), 0.3)
        this.kazetsu.getComponent(H).moveByPos(cc.v3(400, 50), 0.3)
        this.goku.getComponent(H).moveByPos(cc.v3(100, 50), 0.3)
        // this.mako.getComponent(H).moveByPos(cc.v3(50, 20), 0.1)

    }
    touchEndEvent(event) {
        let pos = event.getLocation();
        // pos=this.scene1.convertToWorldSpaceAR(pos)
        pos = this.boss.parent.convertToNodeSpaceAR(pos)
        pos = pos.add(this.mainCamera.node.position)
        let posBoss = this.boss.position.add(cc.v3(0, 80))
        if (this.boss.position.sub(pos).mag() <= 300) {
            console.log("atk boss");
            cc.tween(this.boss.children[0]).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            if (this.isFirst == false) {
                this.isFirst = true
                this.scheduleOnce(() => {
                    this.boss.getChildByName("hand").active = false;

                }, 1)
                this.moveHeroToBoss()
            }
            this.createDamageBoss(pos)
        }

    }
    spawEnenmy() {
        // this.listIconHero[0].active = true;
        // this.listIconHero[2].active = true;
    }

    onEndGame() {
        if (this.isEndGame) return;
        this.isEndGame = true
        cc.audioEngine.play(this.soundEnd, false, 1)
        this.endGameNode.active = true;
        this.linkToStore.active = true;
    }
    createMeat(pos) {
        let meat = cc.instantiate(this.preMeat);
        meat.parent = this.node
        meat.position = pos;
        meat.scale = 0.8
    }
    createDamage(pos) {
        if (this.isSound == false) {
            this.isSound = true
            cc.audioEngine.play(this.soundEnemyDie, false, 1)
            this.scheduleOnce(() => {
                this.isSound = false

            }, 0.15)
        }
        let rdx = Math.floor(Math.random() * 200) - 100
        let rdy = Math.floor(Math.random() * 100) +80
        let damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node
        damagefx.position = pos.add(cc.v3(rdx, rdy));;
        damagefx.scale = 1.2
        let damage = cc.instantiate(this.preDamage);
        damage.parent = this.node
        damage.position = pos.add(cc.v3(rdx, rdy));
        let rd = Math.floor(Math.random() * 1000)
        damage.scale = 2
        damage.zIndex=cc.macro.MAX_ZINDEX
        let valueDamage = rd + 1000
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")

        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528")
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString()
    }
    createDamageBoss(pos) {
        if (this.isSound == false) {
            this.isSound = true
            cc.audioEngine.play(this.soundEnemyDie, false, 1)
            this.scheduleOnce(() => {
                this.isSound = false

            }, 0.15)
        }
        let damage = cc.instantiate(this.preDamage);
        damage.parent = this.node
        damage.position = pos;
        let rd = Math.floor(Math.random() * 1000)
        damage.scale = 2.5
        let valueDamage = rd + 1000
        damage.getChildByName("count").color = new cc.Color().fromHEX("#F87A33")

        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString()
        this.boss.getComponent("enemy").attacked(300)
        let damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node
        damagefx.position = pos;
        damagefx.scale = 1.4
    }
    moveWood(wood) {
        cc.audioEngine.play(this.soundWoodin, false, 1)
        let pos = this.MissionBar.position
        pos = pos.add(cc.v3(-50, 0))
        let pos2 = wood.parent.convertToWorldSpaceAR(wood.position);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2)
        wood.parent = this.uiNode;
        wood.scale *= 1.3
        wood.position = pos2.add(cc.v3(-this.mainCamera.node.position.x, -this.mainCamera.node.position.y));
        cc.tween(wood).to(0.4, { position: pos }).call(() => {
            this.MissionBar.getComponent("updateBar").updateBar();
            wood.getComponent(cc.Animation).play("exp")
            cc.audioEngine.play(this.soundWoodOut, false, 1)
        }).start()
    }
    reponsive() {
        // let canvas = this.node.getComponent(cc.Canvas);
        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.coinBar.scale = 1
        //         this.endGameNode.position = cc.v3(0, 0)
        //         this.endGameNode.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;
        //         }
        //         this.mainCamera.zoomRatio = 0.9
        //     }
        // }
        // else {
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.coinBar.scale = 1.3
        //     this.endGameNode.position = cc.v3(0, -100)
        //     this.endGameNode.scale = 1.2
        //     this.mainCamera.zoomRatio = 1.3
        // }
    }
    update() {
        // if (!this.isMoving) {
        //     this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(0, 50)));
        // }
        // let canvas = this.node.getComponent(cc.Canvas);
        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.coinBar.scale = 1
        //         this.endGameNode.position = cc.v3(0, 0)
        //         this.endGameNode.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;
        //         }
        //     }
        // }
        // else {
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.coinBar.scale = 1.3
        //     this.endGameNode.position = cc.v3(0, -100)
        //     this.endGameNode.scale = 1.2

        // }
    }
}
