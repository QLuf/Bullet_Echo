
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PH_17/Game17.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQSF8xN1xcR2FtZTE3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThjQztRQTVjRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUV4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7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RXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ087SUEzRVYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThjNUI7SUFBRCxlQUFDO0NBOWNELEFBOGNDLENBOWNxQyxFQUFFLENBQUMsU0FBUyxHQThjakQ7a0JBOWNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSCBmcm9tICcuLi9oZXJvL2hlcm8nXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJvc3M6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCb3NzOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVybzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ29rdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2F6ZXRzdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJ0aHVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXlsaXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBib3NzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3NzQmxvb2RCYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNjZW5lMTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZURhbWFnZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUZ4QXRrOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RFbmVteTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYmdTT3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRXb29kaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFdvb2RPdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kRW5lbXlEaWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVwZGF0ZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQnRuOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIEpveVN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBNaXNzaW9uQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0UnVieTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVNZWF0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRyYW5TY3JlZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RTY3JlZW46IGNjLk5vZGVbXSA9IFtdO1xuICAgIC8vXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENhcmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RIZXJvOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGV4dE5hbWVCb3NzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBibG9vZEJvc3M6IGNjLlNwcml0ZSA9IG51bGxcbiAgICBpc01vdmluZyA9IGZhbHNlO1xuICAgIGlzdmVydGljYWwgPSBmYWxzZTtcbiAgICBoZXJvQ29tcCA9IG51bGw7XG4gICAgaXNQYXVzZUdhbWUgPSBmYWxzZTtcbiAgICBpc0NvdW50RW5lbWllc0RpZSA9IDA7XG4gICAgaXNQaGFzZTIgPSBmYWxzZVxuICAgIGlzU291bmQgPSBmYWxzZVxuICAgIGlzTWFpbiA9IG51bGw7XG4gICAgaXNFbmRHYW1lID0gZmFsc2U7XG4gICAgaXNDb3VudEZvbGxvdyA9IDBcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAgICAgLy8gICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfcGFpckJpdCB8XG4gICAgICAgIC8vICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2NlbnRlck9mTWFzc0JpdCB8XG4gICAgICAgIC8vICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAgICAgLy8gICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXRcbiAgICAgICAgLy8gICAgIDtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVwb25zaXZlKClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnU091bmQsIHRydWUsIDAuNClcbiAgICAgICAgdGhpcy5pc01haW4gPSB0aGlzLmhlcm9Db21wXG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhlcm9Db21wID0gdGhpcy5oZXJvLmdldENvbXBvbmVudChIKVxuICAgICAgICAvLyB0aGlzLnNob3dNaXNzaW9uKClcbiAgICAgICAgdGhpcy5zZXRQb3NIZXJvKClcbiAgICB9XG4gICAgaXNDb3VudEJvc3MgPSAwXG4gICAgb2ZmSm95U3RpY2soKSB7XG4gICAgICAgIHRoaXMuSm95U3RpY2suYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5Kb3lTdGljay5nZXRDb21wb25lbnQoXCJKb3lTdGlja1wiKS50b3VjaEVuZEV2ZW50KClcbiAgICB9XG4gICAgb25Kb3lTdGljaygpIHtcbiAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSB0cnVlXG5cbiAgICB9XG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmlzQ291bnRCb3NzKytcbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9zcy5nZXRDaGlsZEJ5TmFtZShcInJhbmdlXCIpLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMua2F6ZXRzdS5nZXRDb21wb25lbnQoSCkubW92ZUF1dG8oKTtcbiAgICAgICAgLy8gdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLm1vdmVBdXRvKClcbiAgICAgICAgLy8gdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5tb3ZlQXV0bygpXG5cbiAgICAgICAgbGV0IGxpc3RBcnIgPSBbY2MudjMoLTE0MiwgLTEwKSwgY2MudjMoMCwgLTEwMCksIGNjLnYzKC0xMjYsIC0xMTUpXVxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Qm9zcyA9PSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVcIilcbiAgICAgICAgICAgIGxpc3RBcnIgPSBbY2MudjMoLTE5MCwgLTUpLCBjYy52MygtNTksIC02OSksIGNjLnYzKDE5OCwgLTE0KV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLm1vdmVUb1BvcyhsaXN0QXJyWzFdLCAxKTtcbiAgICAgICAgdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLm1vdmVUb1BvcyhsaXN0QXJyWzBdLCAxKTtcbiAgICAgICAgdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5tb3ZlVG9Qb3MobGlzdEFyclsyXSwgMSk7XG5cbiAgICB9XG5cbiAgICBidG5fYmF0dGxlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLm9uSm95U3RpY2soKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCdG4sIGZhbHNlLCAxKVxuICAgIH1cbiAgICBjb3VudERpZSh0YWcpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50RW5lbWllc0RpZSsrXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRFbmVtaWVzRGllIDwgMykge1xuICAgICAgICAgICAgdGhpcy50cmFuU2NyZWVuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgdGhpcy5vcGVuTmV3TWFwKHRoaXMuaXNDb3VudEVuZW1pZXNEaWUpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc0NvdW50RW5lbWllc0RpZSA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb3Blbk5ld01hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLm9mZkpveVN0aWNrKClcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0U2NyZWVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFNjcmVlblsxXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2F6ZXRzdS5nZXRDb21wb25lbnQoSCkuc2V0RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdva3UuZ2V0Q29tcG9uZW50KEgpLnNldERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGh1ci5nZXRDb21wb25lbnQoSCkuc2V0RGVmYXVsdCgpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvLnBvc2l0aW9uID0gY2MudjMoLTk5LCAtMjc3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRodXIucG9zaXRpb24gPSBjYy52MygtMjM4LCAtMjYxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rYXpldHN1LnBvc2l0aW9uID0gY2MudjMoLTQzLCAtMzUxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb2t1LnBvc2l0aW9uID0gY2MudjMoLTE3MCwgLTQwNSk7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5Kb3lTdGljay5nZXRDb21wb25lbnQoXCJKb3lTdGlja1wiKS5vZmZHdWlkZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5ib3NzID0gdGhpcy5saXN0Qm9zc1swXVxuXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TmFtZUJvc3Muc3RyaW5nID0gXCJDSElNRVJBXCJcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0U2NyZWVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFNjcmVlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLnNldERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5zZXREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLnNldERlZmF1bHQoKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5wb3NpdGlvbiA9IGNjLnYzKDUsIC0yNzApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGh1ci5wb3NpdGlvbiA9IGNjLnYzKC0xNTUsIC0yOTIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmthemV0c3UucG9zaXRpb24gPSBjYy52MygtNywgLTM3Nyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29rdS5wb3NpdGlvbiA9IGNjLnYzKDE4NywgLTM1Mik7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5Kb3lTdGljay5nZXRDb21wb25lbnQoXCJKb3lTdGlja1wiKS5vZmZHdWlkZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5ib3NzID0gdGhpcy5saXN0Qm9zc1sxXVxuICAgICAgICAgICAgICAgIHRoaXMudGV4dE5hbWVCb3NzLnN0cmluZyA9IFwiREFSSyBPQ1RPUFVTXCJcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9zcy5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5ibG9vZCA9IHRoaXMuYmxvb2RCb3NzXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmxvb2RCb3NzLmZpbGxSYW5nZSA9IDE7XG4gICAgICAgIH0sIDAuMilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkpveVN0aWNrKClcbiAgICAgICAgfSwgMS41KVxuXG4gICAgfVxuICAgIGlzQ291bnRVbmxvY2sgPSAwXG4gICAgaXNDb3VudEhlcm9EaWUgPSAwXG4gICAgY291bnRIZXJvRGllKCkge1xuICAgICAgICB0aGlzLmlzQ291bnRIZXJvRGllKys7XG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRIZXJvRGllID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRQb3NIZXJvKCkge1xuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKC0zNjcsIC05ODYpLCBjYy52MygtMzc1LCAtODk1KSwgY2MudjMoLTMwOSwgLTgxOSksIGNjLnYzKC0zNzAsIC0xMDA5KV1cbiAgICAgICAgLy8gdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5sb2NhbFBvcyA9IHRoaXMuaGVyb0NvbXAuYXJyUG9zRm9sbG93WzBdO1xuICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLmdhbWVQbGF5ID0gdGhpcztcbiAgICAgICAgdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLmdhbWVQbGF5ID0gdGhpcztcbiAgICAgICAgdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5nYW1lUGxheSA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGVyb0NvbXAuYWRkRm9sbG93KHRoaXMuYXJ0aHVyKTtcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5hZGRGb2xsb3codGhpcy5rYXpldHN1KTtcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5hZGRGb2xsb3codGhpcy5nb2t1KTtcblxuXG4gICAgICAgIC8vIHRoaXMuaGVyby5wb3NpdGlvbiA9IGFyclBvc1swXS5hZGQoY2MudjMoMTAwLCAwKSk7XG4gICAgICAgIC8vIHRoaXMubWFrby5wb3NpdGlvbiA9IGFyclBvc1sxXVxuICAgICAgICAvLyB0aGlzLmdva3UucG9zaXRpb24gPSBhcnJQb3NbMl1cbiAgICAgICAgLy8gdGhpcy5rYXpldHN1LnBvc2l0aW9uID0gYXJyUG9zWzNdXG4gICAgfVxuICAgIC8vIHNob3dWc0Jvc3MoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2V0RW5kXCIpXG4gICAgLy8gICAgIHRoaXMuYm9zcy5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAvLyAgICAgbGV0IGFyclBvcyA9IFtjYy52MygtMzY3LCAtOTg2KSwgY2MudjMoLTM3NSwgLTg5NSksIGNjLnYzKC0zMDksIC04MTkpLCBjYy52MygtMzcwLCAtMTAwOSldXG4gICAgLy8gICAgIGxldCBjb3VudCA9IDA7XG4gICAgLy8gICAgIC8vIHRoaXMubGlzdEljb25IZXJvWzFdLmFjdGl2ZSA9IGZhbHNlXG4gICAgLy8gICAgIHRoaXMuZ29rdS5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuaGVyby5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMua2F6ZXRzdS5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMubWFrby5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuaGVyby5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMubWFrby5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMua2F6ZXRzdS5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMuZ29rdS5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgfSwgMC4zKVxuICAgIC8vICAgICB0aGlzLkpveVN0aWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICB0aGlzLkpveVN0aWNrLmdldENvbXBvbmVudChcIkpveVN0aWNrXCIpLnRvdWNoRW5kRXZlbnQoKVxuICAgIC8vICAgICAvLyBjYy50d2Vlbih0aGlzLmJvc3NFeHBCYXIpLmRlbGF5KDAuMykudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgLy8gICAgIC8vICAgICB0aGlzLmJvc3NFeHBCYXIuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIC8vIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmRlbGF5KDAuNCkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtODAsIC03MDApIH0pLmNhbGwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzZXRQb3NcIilcbiAgICAvLyAgICAgICAgIHRoaXMuYm9zc0Jsb29kQmFyLmFjdGl2ZSA9IHRydWVcbiAgICAvLyAgICAgICAgIHRoaXMuaGVyby5nZXRDb21wb25lbnQoSCkub2ZmQ29saWRlcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5tYWtvLmdldENvbXBvbmVudChIKS5vZmZDb2xpZGVyKClcbiAgICAvLyAgICAgICAgIHRoaXMuZ29rdS5nZXRDb21wb25lbnQoSCkub2ZmQ29saWRlcigpXG4gICAgLy8gICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLm9mZkNvbGlkZXIoKVxuICAgIC8vICAgICAgICAgdGhpcy5rYXpldHN1LnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVhcblxuICAgIC8vICAgICAgICAgdGhpcy5oZXJvLnBvc2l0aW9uID0gYXJyUG9zWzBdLmFkZChjYy52MygxMDAsIDApKTtcbiAgICAvLyAgICAgICAgIGNvdW50KytcbiAgICAvLyAgICAgICAgIHRoaXMubWFrby5wb3NpdGlvbiA9IGFyclBvc1sxXVxuICAgIC8vICAgICAgICAgY291bnQrK1xuICAgIC8vICAgICAgICAgdGhpcy5nb2t1LnBvc2l0aW9uID0gYXJyUG9zWzJdXG4gICAgLy8gICAgICAgICBjb3VudCsrXG4gICAgLy8gICAgICAgICB0aGlzLmthemV0c3UucG9zaXRpb24gPSBhcnJQb3NbM11cbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmJvc3MuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pbml0VG91Y2hFdmVudCgpXG4gICAgLy8gICAgICAgICB9LCAwLjIpXG5cbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAvLyBpZih0aGlzLmthemV0c3UhPW51bGwpe1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLmF0dGFja2VkKDEwMDAwKVxuXG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgfSwgMTIpXG4gICAgLy8gICAgIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjUsIHsgem9vbVJhdGlvOiAwLjggfSkuc3RhcnQoKTtcbiAgICAvLyB9XG4gICAgaW5pdFRvdWNoRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUxLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5zY2VuZTEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xuICAgIH1cbiAgICBpc0ZpcnN0ID0gZmFsc2VcbiAgICBtb3ZlSGVyb1RvQm9zcygpIHtcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5tb3ZlQnlQb3MoY2MudjMoODAsIDUwKSwgMC4zKVxuICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52Myg0MDAsIDUwKSwgMC4zKVxuICAgICAgICB0aGlzLmdva3UuZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52MygxMDAsIDUwKSwgMC4zKVxuICAgICAgICAvLyB0aGlzLm1ha28uZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52Myg1MCwgMjApLCAwLjEpXG5cbiAgICB9XG4gICAgdG91Y2hFbmRFdmVudChldmVudCkge1xuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgLy8gcG9zPXRoaXMuc2NlbmUxLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXG4gICAgICAgIHBvcyA9IHRoaXMuYm9zcy5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICBwb3MgPSBwb3MuYWRkKHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uKVxuICAgICAgICBsZXQgcG9zQm9zcyA9IHRoaXMuYm9zcy5wb3NpdGlvbi5hZGQoY2MudjMoMCwgODApKVxuICAgICAgICBpZiAodGhpcy5ib3NzLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpIDw9IDMwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdGsgYm9zc1wiKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYm9zcy5jaGlsZHJlblswXSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGaXJzdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9zcy5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUhlcm9Ub0Jvc3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEYW1hZ2VCb3NzKHBvcylcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNwYXdFbmVubXkoKSB7XG4gICAgICAgIC8vIHRoaXMubGlzdEljb25IZXJvWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMubGlzdEljb25IZXJvWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25FbmRHYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXG4gICAgICAgIHRoaXMuZW5kR2FtZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBjcmVhdGVNZWF0KHBvcykge1xuICAgICAgICBsZXQgbWVhdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTWVhdCk7XG4gICAgICAgIG1lYXQucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIG1lYXQucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIG1lYXQuc2NhbGUgPSAwLjhcbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlKHBvcykge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzU291bmQgPSB0cnVlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmVteURpZSwgZmFsc2UsIDEpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gZmFsc2VcblxuICAgICAgICAgICAgfSwgMC4xNSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSAtIDEwMFxuICAgICAgICBsZXQgcmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArODBcbiAgICAgICAgbGV0IGRhbWFnZWZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVGeEF0ayk7XG4gICAgICAgIGRhbWFnZWZ4LnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICBkYW1hZ2VmeC5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMocmR4LCByZHkpKTs7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS4yXG4gICAgICAgIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSk7XG4gICAgICAgIGRhbWFnZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MyhyZHgsIHJkeSkpO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAyXG4gICAgICAgIGRhbWFnZS56SW5kZXg9Y2MubWFjcm8uTUFYX1pJTkRFWFxuICAgICAgICBsZXQgdmFsdWVEYW1hZ2UgPSByZCArIDEwMDBcbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0MyMzZERFwiKVxuXG4gICAgICAgIGlmICh2YWx1ZURhbWFnZSA+IDEyMDApIHtcbiAgICAgICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDMjM2RERcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVEYW1hZ2UgPiAxNTAwKSB7XG4gICAgICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzUzNTI4XCIpXG4gICAgICAgIH1cbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHZhbHVlRGFtYWdlLnRvU3RyaW5nKClcbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlQm9zcyhwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5lbXlEaWUsIGZhbHNlLCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTb3VuZCA9IGZhbHNlXG5cbiAgICAgICAgICAgIH0sIDAuMTUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhbWFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRGFtYWdlKTtcbiAgICAgICAgZGFtYWdlLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICBkYW1hZ2UucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApXG4gICAgICAgIGRhbWFnZS5zY2FsZSA9IDIuNVxuICAgICAgICBsZXQgdmFsdWVEYW1hZ2UgPSByZCArIDEwMDBcbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0Y4N0EzM1wiKVxuXG4gICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyB2YWx1ZURhbWFnZS50b1N0cmluZygpXG4gICAgICAgIHRoaXMuYm9zcy5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5hdHRhY2tlZCgzMDApXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS40XG4gICAgfVxuICAgIG1vdmVXb29kKHdvb2QpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuTWlzc2lvbkJhci5wb3NpdGlvblxuICAgICAgICBwb3MgPSBwb3MuYWRkKGNjLnYzKC01MCwgMCkpXG4gICAgICAgIGxldCBwb3MyID0gd29vZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pO1xuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMilcbiAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLnVpTm9kZTtcbiAgICAgICAgd29vZC5zY2FsZSAqPSAxLjNcbiAgICAgICAgd29vZC5wb3NpdGlvbiA9IHBvczIuYWRkKGNjLnYzKC10aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi54LCAtdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24ueSkpO1xuICAgICAgICBjYy50d2Vlbih3b29kKS50bygwLjQsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuTWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XG4gICAgICAgICAgICB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RPdXQsIGZhbHNlLCAxKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIHJlcG9uc2l2ZSgpIHtcbiAgICAgICAgLy8gbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgLy8gaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDFcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnNjYWxlID0gMVxuICAgICAgICAvLyAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxLjNcbiAgICAgICAgLy8gICAgIHRoaXMuZW5kR2FtZU5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTAwKVxuICAgICAgICAvLyAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDEuMlxuICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8gaWYgKCF0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKDAsIDUwKSkpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIC8vIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lTm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDFcbiAgICAgICAgLy8gICAgICAgICBpZiAoY2Mud2luU2l6ZS5oZWlnaHQgLyBjYy53aW5TaXplLndpZHRoIDwgMS4zNSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxLjNcbiAgICAgICAgLy8gICAgIHRoaXMuZW5kR2FtZU5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTAwKVxuICAgICAgICAvLyAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDEuMlxuXG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iXX0=