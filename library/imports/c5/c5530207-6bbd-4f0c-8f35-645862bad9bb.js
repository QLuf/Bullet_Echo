"use strict";
cc._RF.push(module, 'c5530IHa71PDI81ZFhiutm7', 'Game17');
// script/PH_17/Game17.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var hero_1 = require("../hero/hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boss = null;
        _this.listBoss = [];
        _this.mainCamera = null;
        _this.hero = null;
        _this.goku = null;
        _this.kazetsu = null;
        _this.arthur = null;
        _this.heroNode = null;
        _this.enemylist = null;
        // @property(cc.Node)
        // boss: cc.Node = null;
        _this.bossBloodBar = null;
        _this.scene1 = null;
        _this.coinBar = null;
        _this.preDamage = null;
        _this.preFxAtk = null;
        _this.listEnemy = null;
        _this.linkToStore = null;
        _this.bgSOund = null;
        _this.soundWoodin = null;
        _this.soundWoodOut = null;
        _this.soundEnd = null;
        _this.soundEnemyDie = null;
        _this.soundUpdate = null;
        _this.soundBtn = null;
        _this.JoyStick = null;
        _this.MissionBar = null;
        _this.listRuby = null;
        _this.uiNode = null;
        _this.endGameNode = null;
        _this.preMeat = null;
        _this.tranScreen = null;
        _this.listScreen = [];
        //
        _this.listCard = null;
        _this.listHero = null;
        _this.guild = null;
        _this.textNameBoss = null;
        _this.bloodBoss = null;
        _this.isMoving = false;
        _this.isvertical = false;
        _this.heroComp = null;
        _this.isPauseGame = false;
        _this.isCountEnemiesDie = 0;
        _this.isPhase2 = false;
        _this.isSound = false;
        _this.isMain = null;
        _this.isEndGame = false;
        _this.isCountFollow = 0;
        _this.isCountBoss = 0;
        _this.isCountUnlock = 0;
        _this.isCountHeroDie = 0;
        _this.isFirst = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_pairBit |
        //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit
        //     ;
    };
    NewClass.prototype.start = function () {
        this.reponsive();
        cc.audioEngine.play(this.bgSOund, true, 0.4);
        this.isMain = this.heroComp;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        this.heroComp = this.hero.getComponent(hero_1.default);
        // this.showMission()
        this.setPosHero();
    };
    NewClass.prototype.offJoyStick = function () {
        this.JoyStick.active = false;
        this.JoyStick.getComponent("JoyStick").touchEndEvent();
    };
    NewClass.prototype.onJoyStick = function () {
        this.JoyStick.active = true;
    };
    NewClass.prototype.startGame = function () {
        this.isCountBoss++;
        this.boss.getComponent(cc.CircleCollider).enabled = true;
        this.boss.getChildByName("range").getComponent(cc.CircleCollider).enabled = true;
        // this.kazetsu.getComponent(H).moveAuto();
        // this.arthur.getComponent(H).moveAuto()
        // this.goku.getComponent(H).moveAuto()
        var listArr = [cc.v3(-142, -10), cc.v3(0, -100), cc.v3(-126, -115)];
        if (this.isCountBoss == 3) {
            console.log("game");
            listArr = [cc.v3(-190, -5), cc.v3(-59, -69), cc.v3(198, -14)];
        }
        this.kazetsu.getComponent(hero_1.default).moveToPos(listArr[1], 1);
        this.arthur.getComponent(hero_1.default).moveToPos(listArr[0], 1);
        this.goku.getComponent(hero_1.default).moveToPos(listArr[2], 1);
    };
    NewClass.prototype.btn_battle = function (event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.listCard.active = false;
        this.guild.active = true;
        this.onJoyStick();
        cc.audioEngine.play(this.soundBtn, false, 1);
    };
    NewClass.prototype.countDie = function (tag) {
        this.isCountEnemiesDie++;
        if (this.isCountEnemiesDie < 3) {
            this.tranScreen.getComponent(cc.Animation).play();
            this.openNewMap(this.isCountEnemiesDie);
        }
        else if (this.isCountEnemiesDie == 3) {
            this.endGameNode.active = true;
            this.linkToStore.active = true;
            cc.audioEngine.play(this.soundEnd, false, 1);
        }
    };
    NewClass.prototype.openNewMap = function (value) {
        var _this = this;
        this.offJoyStick();
        switch (value) {
            case 1:
                this.scheduleOnce(function () {
                    _this.listScreen[0].active = false;
                    _this.listScreen[1].active = true;
                    _this.kazetsu.getComponent(hero_1.default).setDefault();
                    _this.goku.getComponent(hero_1.default).setDefault();
                    _this.arthur.getComponent(hero_1.default).setDefault();
                    _this.hero.position = cc.v3(-99, -277);
                    _this.arthur.position = cc.v3(-238, -261);
                    _this.kazetsu.position = cc.v3(-43, -351);
                    _this.goku.position = cc.v3(-170, -405);
                }, 0.5);
                this.JoyStick.getComponent("JoyStick").offGuide = false;
                this.boss = this.listBoss[0];
                this.textNameBoss.string = "CHIMERA";
                break;
            case 2:
                this.scheduleOnce(function () {
                    _this.listScreen[1].active = false;
                    _this.listScreen[2].active = true;
                    _this.kazetsu.getComponent(hero_1.default).setDefault();
                    _this.goku.getComponent(hero_1.default).setDefault();
                    _this.arthur.getComponent(hero_1.default).setDefault();
                    _this.hero.position = cc.v3(5, -270);
                    _this.arthur.position = cc.v3(-155, -292);
                    _this.kazetsu.position = cc.v3(-7, -377);
                    _this.goku.position = cc.v3(187, -352);
                }, 0.5);
                this.JoyStick.getComponent("JoyStick").offGuide = false;
                this.boss = this.listBoss[1];
                this.textNameBoss.string = "DARK OCTOPUS";
                break;
        }
        this.boss.getComponent("enemy").blood = this.bloodBoss;
        this.scheduleOnce(function () {
            _this.bloodBoss.fillRange = 1;
        }, 0.2);
        this.scheduleOnce(function () {
            _this.onJoyStick();
        }, 1.5);
    };
    NewClass.prototype.countHeroDie = function () {
        this.isCountHeroDie++;
        if (this.isCountHeroDie == 4) {
            this.onEndGame();
        }
    };
    NewClass.prototype.setPosHero = function () {
        var arrPos = [cc.v3(-367, -986), cc.v3(-375, -895), cc.v3(-309, -819), cc.v3(-370, -1009)];
        // this.goku.getComponent(H).localPos = this.heroComp.arrPosFollow[0];
        this.kazetsu.getComponent(hero_1.default).gamePlay = this;
        this.arthur.getComponent(hero_1.default).gamePlay = this;
        this.goku.getComponent(hero_1.default).gamePlay = this;
        this.heroComp.addFollow(this.arthur);
        this.heroComp.addFollow(this.kazetsu);
        this.heroComp.addFollow(this.goku);
        // this.hero.position = arrPos[0].add(cc.v3(100, 0));
        // this.mako.position = arrPos[1]
        // this.goku.position = arrPos[2]
        // this.kazetsu.position = arrPos[3]
    };
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
    NewClass.prototype.initTouchEvent = function () {
        this.scene1.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.scene1.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    NewClass.prototype.moveHeroToBoss = function () {
        this.heroComp.moveByPos(cc.v3(80, 50), 0.3);
        this.kazetsu.getComponent(hero_1.default).moveByPos(cc.v3(400, 50), 0.3);
        this.goku.getComponent(hero_1.default).moveByPos(cc.v3(100, 50), 0.3);
        // this.mako.getComponent(H).moveByPos(cc.v3(50, 20), 0.1)
    };
    NewClass.prototype.touchEndEvent = function (event) {
        var _this = this;
        var pos = event.getLocation();
        // pos=this.scene1.convertToWorldSpaceAR(pos)
        pos = this.boss.parent.convertToNodeSpaceAR(pos);
        pos = pos.add(this.mainCamera.node.position);
        var posBoss = this.boss.position.add(cc.v3(0, 80));
        if (this.boss.position.sub(pos).mag() <= 300) {
            console.log("atk boss");
            cc.tween(this.boss.children[0]).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            if (this.isFirst == false) {
                this.isFirst = true;
                this.scheduleOnce(function () {
                    _this.boss.getChildByName("hand").active = false;
                }, 1);
                this.moveHeroToBoss();
            }
            this.createDamageBoss(pos);
        }
    };
    NewClass.prototype.spawEnenmy = function () {
        // this.listIconHero[0].active = true;
        // this.listIconHero[2].active = true;
    };
    NewClass.prototype.onEndGame = function () {
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        cc.audioEngine.play(this.soundEnd, false, 1);
        this.endGameNode.active = true;
        this.linkToStore.active = true;
    };
    NewClass.prototype.createMeat = function (pos) {
        var meat = cc.instantiate(this.preMeat);
        meat.parent = this.node;
        meat.position = pos;
        meat.scale = 0.8;
    };
    NewClass.prototype.createDamage = function (pos) {
        var _this = this;
        if (this.isSound == false) {
            this.isSound = true;
            cc.audioEngine.play(this.soundEnemyDie, false, 1);
            this.scheduleOnce(function () {
                _this.isSound = false;
            }, 0.15);
        }
        var rdx = Math.floor(Math.random() * 200) - 100;
        var rdy = Math.floor(Math.random() * 100) + 80;
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos.add(cc.v3(rdx, rdy));
        ;
        damagefx.scale = 1.2;
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos.add(cc.v3(rdx, rdy));
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2;
        damage.zIndex = cc.macro.MAX_ZINDEX;
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528");
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
    };
    NewClass.prototype.createDamageBoss = function (pos) {
        var _this = this;
        if (this.isSound == false) {
            this.isSound = true;
            cc.audioEngine.play(this.soundEnemyDie, false, 1);
            this.scheduleOnce(function () {
                _this.isSound = false;
            }, 0.15);
        }
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos;
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2.5;
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#F87A33");
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
        this.boss.getComponent("enemy").attacked(300);
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos;
        damagefx.scale = 1.4;
    };
    NewClass.prototype.moveWood = function (wood) {
        var _this = this;
        cc.audioEngine.play(this.soundWoodin, false, 1);
        var pos = this.MissionBar.position;
        pos = pos.add(cc.v3(-50, 0));
        var pos2 = wood.parent.convertToWorldSpaceAR(wood.position);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2);
        wood.parent = this.uiNode;
        wood.scale *= 1.3;
        wood.position = pos2.add(cc.v3(-this.mainCamera.node.position.x, -this.mainCamera.node.position.y));
        cc.tween(wood).to(0.4, { position: pos }).call(function () {
            _this.MissionBar.getComponent("updateBar").updateBar();
            wood.getComponent(cc.Animation).play("exp");
            cc.audioEngine.play(_this.soundWoodOut, false, 1);
        }).start();
    };
    NewClass.prototype.reponsive = function () {
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
    };
    NewClass.prototype.update = function () {
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
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBoss", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "goku", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kazetsu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arthur", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "heroNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemylist", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bossBloodBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preFxAtk", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listEnemy", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bgSOund", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodOut", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnemyDie", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpdate", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "JoyStick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "MissionBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRuby", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGameNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preMeat", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tranScreen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listScreen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "textNameBoss", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "bloodBoss", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();