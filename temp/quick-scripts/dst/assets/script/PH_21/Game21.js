
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PH_21/Game21.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8946kv3XFKoJpl24s1ht7I', 'Game21');
// script/PH_21/Game21.ts

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
globalThis.gold = 0;
globalThis.wood = 10;
var hero_1 = require("../hero/hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrow = null;
        _this.circle = null;
        _this.mainCamera = null;
        _this.mainCamera2 = null;
        _this.hero = null;
        // @property(cc.Node)
        // goku: cc.Node = null;
        _this.kazetsu = null;
        _this.arthur = null;
        _this.lucia = null;
        _this.mako = null;
        _this.mechaman = null;
        _this.auriel = null;
        _this.listChest = null;
        // @property(cc.Node)
        // listCard: cc.Node = null
        _this.heroNode = null;
        _this.coinBar = null;
        _this.preDamage = null;
        _this.preBonus = null;
        _this.preFxAtk = null;
        _this.preCoin = null;
        _this.preWood = null;
        _this.preEnemies = null;
        _this.preEnemies2 = null;
        _this.listEnemy = null;
        _this.linkToStore = null;
        _this.bgSOund = null;
        _this.soundGem = null;
        _this.soundCard = null;
        _this.soundComfirm = null;
        _this.soundEnd = null;
        _this.soundEnemyDie = null;
        _this.soundUpdate = null;
        _this.soundBtn = null;
        _this.soundput = null;
        _this.JoyStick = null;
        _this.uiNode = null;
        _this.endGameNode = null;
        _this.preMeat = null;
        _this.listHero = null;
        _this.guild = null;
        _this.house1 = null;
        _this.logo = null;
        _this.currency = null;
        _this.preEnemyDie = null;
        _this.boss = null;
        _this.listEnemy2 = null;
        _this.block = null;
        _this.fxtele = null;
        _this.fxXuatHien = null;
        _this.bloodBar = null;
        _this.chest = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.isMoving = false;
        _this.isvertical = false;
        _this.heroComp = null;
        _this.isPauseGame = false;
        _this.isCountEnemiesDie = 0;
        // isPhase2 = false
        _this.isSound = false;
        _this.isMain = null;
        _this.isEndGame = false;
        _this.isCountFollow = 0;
        _this.isCountHero = 0;
        _this.arrHero = [];
        _this.listArrPos = [cc.v3(-600 + 509, -80 + 70), cc.v3(-611 + 510, 36 + 10), cc.v3(-415 + 509, 17 + 61), cc.v3(-415 + 509, 17 - 61)];
        _this.isPhase2 = false;
        _this.isUdcircle = 0;
        _this.isCountUnlock = 0;
        _this.isCountHeroDie = 0;
        _this.isScale = 1;
        _this.isMag = 0;
        return _this;
    }
    // protected onLoad(): void {
    // }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // let manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // // Enabled draw collider
        // manager.enabledDebugDraw = true;
        // // Enabled draw collider bounding box
        // manager.enabledDrawBoundingBox = true;
        this.arrHero.push(this.hero);
    };
    NewClass.prototype.start = function () {
        var _this = this;
        // this.reponsive()
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.bgSOund, true, 0.4);
        this.isMain = this.heroComp;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.heroComp = this.hero.getComponent(hero_1.default);
        this.isMoving = true;
        cc.tween(this.mainCamera.node).delay(1.2).to(0.5, { position: this.hero.position.add(cc.v3(50, 50)) }).delay(0.3).call(function () {
            _this.guild.active = true;
            _this.JoyStick.active = true;
            _this.isMoving = false;
        }).start();
        cc.tween(this.mainCamera2.node).delay(1.2).to(0.5, { position: this.hero.position.add(cc.v3(50, 50)) }).delay(0.3).call(function () {
            _this.guild.active = true;
            _this.JoyStick.active = true;
            _this.isMoving = false;
        }).start();
    };
    NewClass.prototype.showRuong = function () { };
    NewClass.prototype.phase2 = function () {
        var _this = this;
        this.offJoyStick();
        console.log("check");
        this.isMoving = true;
        this.boss.active = true;
        this.listEnemy2.active = true;
        this.listEnemy.active = false;
        var _loop_1 = function (child) {
            if (child.active == true) {
                var fx = cc.instantiate(this_1.fxtele);
                fx.parent = this_1.node;
                fx.position = child.position;
                this_1.scheduleOnce(function () {
                    child.opacity = 0;
                }, 0.3);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.arrHero; _i < _a.length; _i++) {
            var child = _a[_i];
            _loop_1(child);
        }
        cc.tween(this.logo).by(0.2, { opacity: -255, position: cc.v3(0, -100) }).start();
        cc.tween(this.currency).by(0.2, { opacity: -255, position: cc.v3(0, -100) }).start();
        cc.tween(this.circle).to(0.3, { opacity: 0 }).start();
        this.scheduleOnce(function () {
            _this.isMag = 100;
            cc.tween(_this.mainCamera.node).to(0.7, { position: cc.v3(1050 + 50 + _this.isMag, 900 + 50) }).call(function () {
            }).start();
            cc.tween(_this.mainCamera2.node).to(0.7, { position: cc.v3(1050 + 50 + _this.isMag, 900 + 50) }).call(function () {
            }).start();
            cc.tween(_this.mainCamera).by(0.7, { zoomRatio: -0.25 }).start();
            cc.tween(_this.mainCamera2).by(0.7, { zoomRatio: -0.25 }).start();
            // this.hero.position.add(cc.v3(50 + this.isMag, 50)
            _this.scheduleOnce(function () {
                _this.bloodBar.active = true;
                _this.hero.position = cc.v3(1050, 900);
                _this.block.active = true;
                _this.isMoving = false;
                _this.house1.active = false;
                _this.scheduleOnce(function () {
                    _this.circle.opacity = 255;
                    var _loop_2 = function (child) {
                        if (child.active == true) {
                            console.log("move");
                            var fx = cc.instantiate(_this.fxXuatHien);
                            fx.parent = _this.node;
                            fx.position = child.position;
                            _this.scheduleOnce(function () {
                                child.opacity = 255;
                            }, 0.3);
                        }
                    };
                    for (var _i = 0, _a = _this.arrHero; _i < _a.length; _i++) {
                        var child = _a[_i];
                        _loop_2(child);
                    }
                    _this.onJoyStick();
                }, 0.2);
                _this.scheduleOnce(function () {
                });
                _this.isPhase2 = true;
            }, 0.7);
        }, 0.3);
    };
    NewClass.prototype.onBoss = function () {
        this.boss.getComponent(cc.CircleCollider).enabled = true;
        this.boss.getChildByName("range").getComponent(cc.CircleCollider).enabled = true;
    };
    NewClass.prototype.spawEnemy1 = function () {
        var _this = this;
        this.spawEnemies(20);
        this.scheduleOnce(function () {
            _this.spawEnemies(30);
        }, 2);
        this.scheduleOnce(function () {
            _this.spawEnemies(30);
        }, 4);
    };
    NewClass.prototype.spawEnemies = function (value) {
        for (var i = 0; i < value; i++) {
            var posX = Math.floor(Math.random() * -400) + Math.floor(Math.random() * 400);
            var posY = Math.floor(Math.random() * -550) + Math.floor(Math.random() * 550);
            var param = Math.floor(Math.random() * 2) + 1;
            var pos = null;
            if (i % 2 == 0)
                pos = this.hero.position.add(cc.v3(posX + i * 20, ((param % 2 == 0) ? -550 - i * 10 : 550 + i * 10)));
            else
                pos = this.hero.position.add(cc.v3((param % 2 == 0) ? -400 - i * 10 : 400 + i * 10, posY + i * 20));
            var enemy = this.createEnemy('enemy1', pos);
            enemy.getComponent('enemy').freeze = false;
            enemy.getComponent('enemy').run();
        }
    };
    NewClass.prototype.createEnemy = function (name, pos) {
        var enemy = null;
        var rd = Math.floor(Math.random() * 2);
        if (rd == 0) {
            enemy = cc.instantiate(this.preEnemies);
        }
        else {
            enemy = cc.instantiate(this.preEnemies2);
        }
        // switch (name) {
        //     case 'enemy1':
        //         enemy = cc.instantiate(this.preEnemies)
        //         break;
        // }
        this.listEnemy.addChild(enemy);
        enemy.setPosition(pos);
        // enemy.scaleX = enemy.scaleX * ((enemy.x < 0) ? 1 : -1);
        return enemy;
    };
    NewClass.prototype.updateHouse = function (value) {
        var _this = this;
        this.offJoyStick();
        cc.audioEngine.play(this.soundput, false, 1);
        this.arrow.active = false;
        var _loop_3 = function (i) {
            this_2.scheduleOnce(function () {
                var wood = cc.instantiate(_this.preWood);
                wood.parent = _this.node;
                wood.position = _this.hero.position;
                wood.scale = 0.5;
                var startPos = cc.v2(wood.x, wood.y);
                var posEnd = _this.house1.parent.convertToWorldSpaceAR(_this.house1.position);
                posEnd = _this.node.convertToNodeSpaceAR(posEnd);
                // posEnd=cc.v2(posEnd.x,posEnd.y)
                var midPos = cc.v2((startPos.x + posEnd.x) / 2, (startPos.y + posEnd.y) / 2 + 400);
                cc.tween(wood).bezierTo(0.5, startPos, midPos, cc.v2(posEnd.x, posEnd.y + 200)).call(function () {
                    wood.destroy();
                    // if (this.house1.getComponent("house").isUpdate == 0) {
                    //     globalThis.wood--
                    // }
                    // else {
                    //     globalThis.gold -= 4
                    // }
                    switch (_this.house1.getComponent("house").isUpdate) {
                        case 0:
                            globalThis.wood--;
                            break;
                        case 1:
                            globalThis.gold -= 4;
                            break;
                        case 2:
                            globalThis.gold -= 16;
                            break;
                    }
                    _this.house1.getComponent("house").updateValue();
                    if (i == value - 1) {
                        cc.audioEngine.play(_this.soundEnd, false, 1);
                        _this.onJoyStick();
                        _this.house1.getComponent("house").updateHouse();
                    }
                }).start();
                cc.tween(wood).to(0.5, { scale: 0.7 }).start();
            }, i * 0.05);
        };
        var this_2 = this;
        for (var i = 0; i < value; i++) {
            _loop_3(i);
        }
    };
    NewClass.prototype.updateHouse2 = function (value) {
        var _this = this;
        this.offJoyStick();
        cc.audioEngine.play(this.soundput, false, 1);
        var _loop_4 = function (i) {
            this_3.scheduleOnce(function () {
                var wood = cc.instantiate(_this.preMeat);
                wood.parent = _this.node;
                wood.position = _this.hero.position;
                wood.scale = 0.5;
                var startPos = cc.v2(wood.x, wood.y);
                var posEnd = _this.house1.parent.convertToWorldSpaceAR(_this.house1.position);
                posEnd = _this.node.convertToNodeSpaceAR(posEnd);
                // posEnd=cc.v2(posEnd.x,posEnd.y)
                var midPos = cc.v2((startPos.x + posEnd.x) / 2, (startPos.y + posEnd.y) / 2 + 400);
                cc.tween(wood).bezierTo(0.5, startPos, midPos, cc.v2(posEnd.x, posEnd.y + 200)).call(function () {
                    wood.destroy();
                    switch (_this.house1.getComponent("house").isUpdate) {
                        case 2:
                            globalThis.gold -= 2;
                            break;
                    }
                    _this.house1.getComponent("house").updateValue();
                    if (i == value - 1) {
                        _this.onJoyStick();
                        cc.audioEngine.play(_this.soundEnd, false, 1);
                        _this.house1.getComponent("house").updateHouse();
                    }
                }).start();
                cc.tween(wood).to(0.5, { scale: 0.7 }).start();
            }, i * 0.05);
        };
        var this_3 = this;
        for (var i = 0; i < value; i++) {
            _loop_4(i);
        }
    };
    NewClass.prototype.addHero = function () {
        console.log("add Hero");
        if (this.isCountHero > 3)
            return;
        cc.audioEngine.play(this.soundCard, false, 0.8);
        // this.listCard.children[0].children[this.isCountHero].active = true;
        this.offJoyStick();
        // let pos = this.listArrPos[this.isCountHero]
        // this.isCountHero++
        // let hero = null;
        // switch (this.isCountHero) {
        //     case 1:
        //         hero = this.lucia;
        //         break;
        //     case 2:
        //         hero = this.kazetsu;
        //         break;
        //     case 3:
        //         hero = this.arthur;
        //         break;
        // }
        // this.arrHero.push(hero);
        // hero.getComponent("hero").localPos = pos;
        // hero.position = this.hero.position.add(pos);
        // hero.active = true;
    };
    NewClass.prototype.btn_Claim = function (event, value) {
        var _this = this;
        // let btn = event.currentTarget.parent.parent
        cc.audioEngine.play(this.soundComfirm, false, 0.8);
        // this.isScale = true
        // cc.tween(btn).to(0.3, { scale: 0 }).delay(0.2).call(() => {
        // this.isScale = false
        var pos = this.listArrPos[this.isCountHero];
        this.isCountHero++;
        var hero = null;
        switch (value) {
            case "1":
                hero = this.lucia;
                this.scheduleOnce(function () {
                    _this.phase2();
                }, 0.3);
                break;
            case "2":
                hero = this.kazetsu;
                break;
            case "3":
                hero = this.mechaman;
                break;
            case "4":
                hero = this.arthur;
                break;
            case 5:
                hero = this.mako;
                break;
        }
        this.arrHero.push(hero);
        hero.getComponent("hero").localPos = pos;
        hero.position = this.hero.position.add(pos);
        hero.active = true;
        this.onJoyStick();
        var val = 0.12;
        if (this.isUdcircle != 0) {
            val = 0.02;
        }
        else {
            this.spawEnemy1();
        }
        // this.spawEnemies(30)
        // th (this.isUdcircle) {
        //     case 1:
        //         val=0
        this.isUdcircle++;
        this.house1.getComponent("house").isMoving = false;
        console.log("ud");
        // }
        cc.tween(this.circle).by(0.2, { scale: val }).start();
        // }).start()
    };
    NewClass.prototype.clickChest = function (value) {
        // console.log(value)
        // switch (value) {
        //     case 1:
        this.offJoyStick();
        this.transCoin(value);
        // break;
        // }
    };
    NewClass.prototype.transCoin = function (value) {
        var _this = this;
        console.log("transcoin");
        var chest = this.listChest.children[value - 1];
        var _loop_5 = function (i) {
            this_4.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundGem, false, 0.5);
                var rewardNode = cc.instantiate(_this.preCoin);
                rewardNode.position = _this.hero.position;
                rewardNode.parent = _this.node;
                rewardNode.scale = 0;
                var startPos = cc.v2(_this.hero.x, _this.hero.y);
                var endPos = cc.v2(chest.x, chest.y);
                var midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 400);
                cc.tween(rewardNode).to(0.3, { scale: 1 }).start();
                cc.tween(rewardNode).bezierTo(0.3, startPos, midPos, endPos).call(function () {
                    rewardNode.destroy();
                    if (i == 7) {
                        _this.addHero();
                    }
                }).start();
            }, 0.12 * i);
        };
        var this_4 = this;
        for (var i = 0; i < 8; i++) {
            _loop_5(i);
        }
    };
    // checkLock(value) {
    // }
    NewClass.prototype.offJoyStick = function () {
        this.JoyStick.active = false;
        this.JoyStick.getComponent("JoyStick").touchEndEvent();
    };
    NewClass.prototype.onJoyStick = function () {
        this.JoyStick.active = true;
    };
    NewClass.prototype.startGame = function () {
        this.hero.getComponent(cc.Collider).enabled = true;
        this.circle.getComponent(cc.PolygonCollider).enabled = true;
    };
    NewClass.prototype.countDie = function (pos) {
        this.isCountEnemiesDie++;
        this.createCoin(pos);
        var preDie = cc.instantiate(this.preEnemyDie);
        preDie.parent = this.node;
        preDie.position = pos;
    };
    NewClass.prototype.createCoin = function (pos) {
        var _this = this;
        var _loop_6 = function (i) {
            var rewardNode = cc.instantiate(this_5.preCoin);
            var nodeScale = rewardNode.scale;
            rewardNode.scale = 0;
            pos = this_5.listEnemy.convertToWorldSpaceAR(pos);
            pos = this_5.hero.convertToNodeSpaceAR(pos);
            rewardNode.parent = this_5.hero;
            cc.tween(rewardNode).delay(0.15 * i).call(function () {
                cc.audioEngine.play(_this.soundGem, false, 0.5);
            }).set({ active: true, scale: 0, position: pos }).to(0.1, { scale: 0.5 })
                .to(0.4, { position: cc.v3(0, 50) }).call(function () {
                globalThis.gold += 5;
                rewardNode.destroy();
                var bonus = cc.instantiate(_this.preBonus);
                bonus.parent = _this.hero;
                bonus.position = cc.v3(0, 50);
                bonus.scaleX = (_this.hero.scaleX > 0) ? 1 : -1;
            })
                .start();
        };
        var this_5 = this;
        for (var i = 0; i < 1; i++) {
            _loop_6(i);
        }
    };
    NewClass.prototype.countHeroDie = function () {
        this.isCountHeroDie++;
        // if (this.isCountHeroDie == 4) {
        //     this.onEndGame()
        // }
    };
    NewClass.prototype.moveHeroToBoss = function () {
        this.heroComp.moveByPos(cc.v3(80, 50), 0.3);
        this.kazetsu.getComponent(hero_1.default).moveByPos(cc.v3(400, 50), 0.3);
        // this.goku.getComponent(H).moveByPos(cc.v3(100, 50), 0.3)
        // this.mako.getComponent(H).moveByPos(cc.v3(50, 20), 0.1)
    };
    // touchEndEvent(event) {
    //     let pos = event.getLocation();
    //     // pos=this.scene1.convertToWorldSpaceAR(pos)
    //     pos = this.boss.parent.convertToNodeSpaceAR(pos)
    //     pos = pos.add(this.mainCamera.node.position)
    //     let posBoss = this.boss.position.add(cc.v3(0, 80))
    //     if (this.boss.position.sub(pos).mag() <= 300) {
    //         console.log("atk boss");
    //         cc.tween(this.boss.children[0]).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
    //         if (this.isFirst == false) {
    //             this.isFirst = true
    //             this.scheduleOnce(() => {
    //                 this.boss.getChildByName("hand").active = false;
    //             }, 1)
    //             this.moveHeroToBoss()
    //         }
    //         this.createDamageBoss(pos)
    //     }
    // }
    NewClass.prototype.spawEnenmy = function () {
        // this.listIconHero[0].active = true;
        // this.listIconHero[2].active = true;
    };
    NewClass.prototype.onEndGame = function () {
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        // let chest = this.listChest.children[1]
        this.linkToStore.active = true;
        this.offJoyStick();
        // this.boxIcon.active = false
        // cc.tween(this.mainCamera).by(0.5, { zoomRatio: -0.3 }).start()
        // this.hero.position = cc.v3(1045, -209)
        // for (let i = 1; i < this.listArrPos.length; i++) {
        //     this.hero.parent.children[i].position = this.hero.position.add(this.listArrPos[i - 1])
        // }
        // for (let i = 0; i < 8; i++) {
        //     this.scheduleOnce(() => {
        //         cc.audioEngine.play(this.soundGem, false, 0.5)
        //         let rewardNode = cc.instantiate(this.preCoin);
        //         rewardNode.position = this.hero.position;
        //         rewardNode.parent = this.node;
        //         rewardNode.scale = 0
        //         let startPos = cc.v2(this.hero.x, this.hero.y);
        //         let endPos = cc.v2(chest.x, chest.y)
        //         let midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 400)
        //         cc.tween(rewardNode).to(0.3, { scale: 1 }).start()
        //         cc.tween(rewardNode).bezierTo(0.3, startPos, midPos, endPos).call(() => {
        //             rewardNode.destroy();
        //             if (i == 7) {
        //                 // this.addHero();
        //                 let chests = chest.children[0].getChildByName("chest")
        //                 // chest.children[0].getChildByName("icon").active = false;
        //                 chest.children[0].getChildByName("currentcy").active = false
        //                 chest.children[0].getChildByName("bang").active = false
        //                 chests.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', chests.getComponent(cc.Sprite)));
        //                 this.linkToStore.active = true;
        //             }
        //         }).start()
        //     }, 0.12 * i)
        // }
        // cc.audioEngine.play(this.soundEnd, false, 1)
        // this.endGameNode.active = true;
        // this.linkToStore.active = true;
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
        damagefx.position = pos.add(cc.v3(0, 0));
        ;
        damagefx.scale = 1;
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos.add(cc.v3(0, 0));
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 1.5;
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
        var rdx = Math.floor(Math.random() * 200) - 100;
        var rdy = Math.floor(Math.random() * 100) + 80;
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos.add(cc.v3(rdx, rdy + 100));
        ;
        damagefx.scale = 1;
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos.add(cc.v3(rdx, rdy + 100));
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
    NewClass.prototype.bossDie = function (pos) {
        var _this = this;
        this.offJoyStick();
        this.chest.active = true;
        this.isMoving = true;
        this.scheduleOnce(function () {
            var preDie = cc.instantiate(_this.preEnemyDie);
            preDie.parent = _this.node;
            preDie.position = pos;
            preDie.scale = 4;
            _this.linkToStore.active = true;
            _this.chest.getChildByName("hand").active = true;
        }, 0.3);
        cc.tween(this.mainCamera.node).to(0.4, { position: cc.v3(1360, 1200) }).start();
        cc.tween(this.mainCamera2.node).to(0.4, { position: cc.v3(1360, 1200) }).start();
        cc.tween(this.mainCamera).by(0.4, { zoomRatio: 0.8 }).start();
        cc.tween(this.mainCamera2).by(0.4, { zoomRatio: 0.8 }).start();
        cc.tween(this.bloodBar).by(0.3, { opacity: -255, position: cc.v3(0, 80) }).call(function () { _this.bloodBar.active = false; }).start();
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
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(50 + this.isMag, 50)));
            this.mainCamera2.node.setPosition(this.hero.position.add(cc.v3(50 + this.isMag, 50)));
            // if (!this.isEndGame) {
            // }
        }
        // let canvas = this.node.getComponent(cc.Canvas);
        var deviceResolution = cc.view.getFrameSize();
        var check2 = (deviceResolution.width / 640);
        if (deviceResolution.width < deviceResolution.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // if (cc.winSize.height / cc.winSize.width < 1.35) {
                //     canvas.fitHeight = true;
                // }
            }
            // this.mainCamera.zoomRatio = 1;
            this.isScale = 1;
            // this.listCard.position = cc.v3(0, 0)
            this.logo.scale = 0.9;
            // this.logo.position=cc.v3(-200,419*check-50)
            // this.logo.getComponent(cc.Widget).left = 110
            // this.listCard.scale = 1
            this.currency.scale = 1;
            // this.currency.getComponent(cc.Widget).right = 83
            this.logo.position = cc.v3(-200, 500);
            this.currency.position = cc.v3(236, 550);
            this.mainCamera.node.active = true;
            this.mainCamera2.node.active = false;
            if (deviceResolution.height / deviceResolution.width < 1.35) {
                this.logo.position = cc.v3(-200, 419);
                this.currency.position = cc.v3(236, 474);
            }
        }
        else {
            this.isvertical = false;
            this.currency.scale = 1.3;
            // this.currency.getComponent(cc.Widget).right = 120
            this.isScale = 1.3;
            // this.listCard.scale = 1.3
            // this.listCard.position = cc.v3(0, -70)
            // this.mainCamera.zoomRatio = 1.3
            this.mainCamera.node.active = false;
            this.mainCamera2.node.active = true;
            this.logo.scale = 1.2;
            // this.logo.getComponent(cc.Widget).left = 200
            this.logo.position = cc.v3(-500 + 50, 419);
            this.currency.position = cc.v3(500, 474);
            // this.logo.getComponent(cc.Widget).h=300
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "circle", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kazetsu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arthur", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lucia", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mako", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mechaman", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "auriel", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChest", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "heroNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBonus", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preFxAtk", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preEnemies", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preEnemies2", void 0);
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
    ], NewClass.prototype, "soundGem", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCard", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundComfirm", void 0);
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
        property(cc.AudioClip)
    ], NewClass.prototype, "soundput", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "JoyStick", void 0);
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
    ], NewClass.prototype, "listHero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "currency", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preEnemyDie", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listEnemy2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "block", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxtele", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxXuatHien", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bloodBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "chest", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQSF8yMVxcR2FtZTIxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBR3BCLHFDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW15QkM7UUFoeUJHLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBRzNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FB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Q0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRixDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFVCxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM5RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsR0FB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QUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQTNHTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbXlCNUI7SUFBRCxlQUFDO0NBbnlCRCxBQW15QkMsQ0FueUJxQyxFQUFFLENBQUMsU0FBUyxHQW15QmpEO2tCQW55Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWxUaGlzLmdvbGQgPSAwXG5nbG9iYWxUaGlzLndvb2QgPSAxMFxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuaW1wb3J0IEggZnJvbSAnLi4vaGVyby9oZXJvJ1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFycm93OiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNpcmNsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWFpbkNhbWVyYTI6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVybzogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZ29rdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2F6ZXRzdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJ0aHVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsdWNpYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFrbzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWVjaGFtYW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGF1cmllbDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENoZXN0OiBjYy5Ob2RlID0gbnVsbFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGxpc3RDYXJkOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVyb05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvaW5CYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlRGFtYWdlOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlQm9udXM6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVGeEF0azogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVXb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlRW5lbWllczogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUVuZW1pZXMyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEVuZW15OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBiZ1NPdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEdlbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2FyZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ29tZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRFbmVteURpZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVXBkYXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCdG46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZHB1dDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBKb3lTdGljazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVNZWF0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEhlcm86IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlMTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjdXJyZW5jeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVFbmVteURpZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3NzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0RW5lbXkyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBibG9jazogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGZ4dGVsZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGZ4WHVhdEhpZW46IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmxvb2RCYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoZXN0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXG4gICAgaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgaGVyb0NvbXAgPSBudWxsO1xuICAgIGlzUGF1c2VHYW1lID0gZmFsc2U7XG4gICAgaXNDb3VudEVuZW1pZXNEaWUgPSAwO1xuICAgIC8vIGlzUGhhc2UyID0gZmFsc2VcbiAgICBpc1NvdW5kID0gZmFsc2VcbiAgICBpc01haW4gPSBudWxsO1xuICAgIGlzRW5kR2FtZSA9IGZhbHNlO1xuICAgIGlzQ291bnRGb2xsb3cgPSAwO1xuICAgIGlzQ291bnRIZXJvID0gMDtcbiAgICBhcnJIZXJvID0gW107XG4gICAgbGlzdEFyclBvcyA9IFtjYy52MygtNjAwICsgNTA5LCAtODAgKyA3MCksIGNjLnYzKC02MTEgKyA1MTAsIDM2ICsgMTApLCBjYy52MygtNDE1ICsgNTA5LCAxNyArIDYxKSwgY2MudjMoLTQxNSArIDUwOSwgMTcgLSA2MSldXG5cbiAgICAvLyBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuXG4gICAgLy8gfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG5cbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyAvLyBFbmFibGVkIGRyYXcgY29sbGlkZXJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcblxuICAgICAgICAvLyAvLyBFbmFibGVkIGRyYXcgY29sbGlkZXIgYm91bmRpbmcgYm94XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG4gICAgICAgIHRoaXMuYXJySGVyby5wdXNoKHRoaXMuaGVybylcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMucmVwb25zaXZlKClcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NPdW5kLCB0cnVlLCAwLjQpXG4gICAgICAgIHRoaXMuaXNNYWluID0gdGhpcy5oZXJvQ29tcDtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGVyb0NvbXAgPSB0aGlzLmhlcm8uZ2V0Q29tcG9uZW50KEgpO1xuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkuZGVsYXkoMS4yKS50bygwLjUsIHsgcG9zaXRpb246IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQoY2MudjMoNTAsIDUwKSkgfSkuZGVsYXkoMC4zKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuSm95U3RpY2suYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMi5ub2RlKS5kZWxheSgxLjIpLnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5oZXJvLnBvc2l0aW9uLmFkZChjYy52Myg1MCwgNTApKSB9KS5kZWxheSgwLjMpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH1cbiAgICBzaG93UnVvbmcoKSB7IH1cbiAgICBpc1BoYXNlMiA9IGZhbHNlO1xuICAgIHBoYXNlMigpIHtcbiAgICAgICAgdGhpcy5vZmZKb3lTdGljaygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tcIilcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcbiAgICAgICAgdGhpcy5ib3NzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEVuZW15Mi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RFbmVteS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJIZXJvKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZnggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ4dGVsZSlcbiAgICAgICAgICAgICAgICBmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgICAgICAgICBmeC5wb3NpdGlvbiA9IGNoaWxkLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5vcGFjaXR5ID0gMFxuICAgICAgICAgICAgICAgIH0sIDAuMylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nbykuYnkoMC4yLCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAtMTAwKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVuY3kpLmJ5KDAuMiwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgLTEwMCkgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmNpcmNsZSkudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTWFnID0gMTAwO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC43LCB7IHBvc2l0aW9uOiBjYy52MygxMDUwICsgNTAgKyB0aGlzLmlzTWFnLCA5MDAgKyA1MCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjMoMTA1MCArIDUwICsgdGhpcy5pc01hZywgOTAwICsgNTApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS5ieSgwLjcsIHsgem9vbVJhdGlvOiAtMC4yNSB9KS5zdGFydCgpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyKS5ieSgwLjcsIHsgem9vbVJhdGlvOiAtMC4yNSB9KS5zdGFydCgpXG4gICAgICAgICAgICAvLyB0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKDUwICsgdGhpcy5pc01hZywgNTApXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9vZEJhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyby5wb3NpdGlvbiA9IGNjLnYzKDEwNTAsIDkwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaG91c2UxLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZS5vcGFjaXR5ID0gMjU1XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJySGVybykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5meFh1YXRIaWVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4LnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4LnBvc2l0aW9uID0gY2hpbGQucG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLm9wYWNpdHkgPSAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSm95U3RpY2soKVxuXG4gICAgICAgICAgICAgICAgfSwgMC4yKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMiA9IHRydWVcbiAgICAgICAgICAgIH0sIDAuNylcbiAgICAgICAgfSwgMC4zKVxuXG4gICAgfVxuICAgIG9uQm9zcygpIHtcbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9zcy5nZXRDaGlsZEJ5TmFtZShcInJhbmdlXCIpLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHNwYXdFbmVteTEoKSB7XG4gICAgICAgIHRoaXMuc3Bhd0VuZW1pZXMoMjApXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Bhd0VuZW1pZXMoMzApXG4gICAgICAgIH0sIDIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Bhd0VuZW1pZXMoMzApXG4gICAgICAgIH0sIDQpXG5cbiAgICB9XG4gICAgc3Bhd0VuZW1pZXModmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIC00MDApICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDAwKTtcbiAgICAgICAgICAgIGxldCBwb3NZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogLTU1MCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1NTApO1xuICAgICAgICAgICAgbGV0IHBhcmFtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgICAgICAgICAgbGV0IHBvcyA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT0gMCkgcG9zID0gdGhpcy5oZXJvLnBvc2l0aW9uLmFkZChjYy52Myhwb3NYICsgaSAqIDIwLCAoKHBhcmFtICUgMiA9PSAwKSA/IC01NTAgLSBpICogMTAgOiA1NTAgKyBpICogMTApKSk7XG4gICAgICAgICAgICBlbHNlIHBvcyA9IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQoY2MudjMoKHBhcmFtICUgMiA9PSAwKSA/IC00MDAgLSBpICogMTAgOiA0MDAgKyBpICogMTAsIHBvc1kgKyBpICogMjApKTtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHRoaXMuY3JlYXRlRW5lbXkoJ2VuZW15MScsIHBvcyk7XG4gICAgICAgICAgICBlbmVteS5nZXRDb21wb25lbnQoJ2VuZW15JykuZnJlZXplID0gZmFsc2VcbiAgICAgICAgICAgIGVuZW15LmdldENvbXBvbmVudCgnZW5lbXknKS5ydW4oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNyZWF0ZUVuZW15KG5hbWUsIHBvcykge1xuICAgICAgICBsZXQgZW5lbXkgPSBudWxsO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuXG4gICAgICAgIGlmIChyZCA9PSAwKSB7XG4gICAgICAgICAgICBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRW5lbWllcylcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVuZW1pZXMyKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgJ2VuZW15MSc6XG4gICAgICAgIC8vICAgICAgICAgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVuZW1pZXMpXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmxpc3RFbmVteS5hZGRDaGlsZChlbmVteSk7XG4gICAgICAgIGVuZW15LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIC8vIGVuZW15LnNjYWxlWCA9IGVuZW15LnNjYWxlWCAqICgoZW5lbXkueCA8IDApID8gMSA6IC0xKTtcbiAgICAgICAgcmV0dXJuIGVuZW15O1xuICAgIH1cblxuICAgIHVwZGF0ZUhvdXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMub2ZmSm95U3RpY2soKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRwdXQsIGZhbHNlLCAxKVxuICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKTtcbiAgICAgICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSB0aGlzLmhlcm8ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgd29vZC5zY2FsZSA9IDAuNVxuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKHdvb2QueCwgd29vZC55KTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5ob3VzZTEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmhvdXNlMS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICBwb3NFbmQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKTtcbiAgICAgICAgICAgICAgICAvLyBwb3NFbmQ9Y2MudjIocG9zRW5kLngscG9zRW5kLnkpXG4gICAgICAgICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChzdGFydFBvcy54ICsgcG9zRW5kLngpIC8gMiwgKHN0YXJ0UG9zLnkgKyBwb3NFbmQueSkgLyAyICsgNDAwKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5iZXppZXJUbygwLjUsIHN0YXJ0UG9zLCBtaWRQb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSArIDIwMCkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3b29kLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KFwiaG91c2VcIikuaXNVcGRhdGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZ2xvYmFsVGhpcy53b29kLS1cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGdsb2JhbFRoaXMuZ29sZCAtPSA0XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoXCJob3VzZVwiKS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMud29vZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCAtPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCAtPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoXCJob3VzZVwiKS51cGRhdGVWYWx1ZSgpXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IHZhbHVlIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kLCBmYWxzZSwgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkpveVN0aWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2UxLmdldENvbXBvbmVudChcImhvdXNlXCIpLnVwZGF0ZUhvdXNlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS50bygwLjUsIHsgc2NhbGU6IDAuNyB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCBpICogMC4wNSlcblxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUhvdXNlMih2YWx1ZSkge1xuICAgICAgICB0aGlzLm9mZkpveVN0aWNrKClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kcHV0LCBmYWxzZSwgMSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTWVhdCk7XG4gICAgICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gdGhpcy5oZXJvLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHdvb2Quc2NhbGUgPSAwLjVcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mih3b29kLngsIHdvb2QueSk7XG4gICAgICAgICAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuaG91c2UxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ob3VzZTEucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcG9zRW5kID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZCk7XG4gICAgICAgICAgICAgICAgLy8gcG9zRW5kPWNjLnYyKHBvc0VuZC54LHBvc0VuZC55KVxuICAgICAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migoc3RhcnRQb3MueCArIHBvc0VuZC54KSAvIDIsIChzdGFydFBvcy55ICsgcG9zRW5kLnkpIC8gMiArIDQwMCk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4od29vZCkuYmV6aWVyVG8oMC41LCBzdGFydFBvcywgbWlkUG9zLCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkgKyAyMDApKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoXCJob3VzZVwiKS5pc1VwZGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkIC09IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KFwiaG91c2VcIikudXBkYXRlVmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB2YWx1ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Kb3lTdGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KFwiaG91c2VcIikudXBkYXRlSG91c2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuNSwgeyBzY2FsZTogMC43IH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIGkgKiAwLjA1KVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIZXJvKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBIZXJvXCIpXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRIZXJvID4gMykgcmV0dXJuO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDYXJkLCBmYWxzZSwgMC44KVxuICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RoaXMuaXNDb3VudEhlcm9dLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2ZmSm95U3RpY2soKVxuICAgICAgICAvLyBsZXQgcG9zID0gdGhpcy5saXN0QXJyUG9zW3RoaXMuaXNDb3VudEhlcm9dXG4gICAgICAgIC8vIHRoaXMuaXNDb3VudEhlcm8rK1xuICAgICAgICAvLyBsZXQgaGVybyA9IG51bGw7XG4gICAgICAgIC8vIHN3aXRjaCAodGhpcy5pc0NvdW50SGVybykge1xuICAgICAgICAvLyAgICAgY2FzZSAxOlxuICAgICAgICAvLyAgICAgICAgIGhlcm8gPSB0aGlzLmx1Y2lhO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSAyOlxuICAgICAgICAvLyAgICAgICAgIGhlcm8gPSB0aGlzLmthemV0c3U7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIDM6XG4gICAgICAgIC8vICAgICAgICAgaGVybyA9IHRoaXMuYXJ0aHVyO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuYXJySGVyby5wdXNoKGhlcm8pO1xuICAgICAgICAvLyBoZXJvLmdldENvbXBvbmVudChcImhlcm9cIikubG9jYWxQb3MgPSBwb3M7XG4gICAgICAgIC8vIGhlcm8ucG9zaXRpb24gPSB0aGlzLmhlcm8ucG9zaXRpb24uYWRkKHBvcyk7XG4gICAgICAgIC8vIGhlcm8uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgYnRuX0NsYWltKGV2ZW50LCB2YWx1ZSkge1xuICAgICAgICAvLyBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnQucGFyZW50XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbWZpcm0sIGZhbHNlLCAwLjgpXG4gICAgICAgIC8vIHRoaXMuaXNTY2FsZSA9IHRydWVcbiAgICAgICAgLy8gY2MudHdlZW4oYnRuKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5pc1NjYWxlID0gZmFsc2VcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdEFyclBvc1t0aGlzLmlzQ291bnRIZXJvXVxuICAgICAgICB0aGlzLmlzQ291bnRIZXJvKytcbiAgICAgICAgbGV0IGhlcm8gPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgIGhlcm8gPSB0aGlzLmx1Y2lhO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZTIoKVxuXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBoZXJvID0gdGhpcy5rYXpldHN1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICBoZXJvID0gdGhpcy5tZWNoYW1hbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgaGVybyA9IHRoaXMuYXJ0aHVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGhlcm8gPSB0aGlzLm1ha287XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJIZXJvLnB1c2goaGVybyk7XG4gICAgICAgIGhlcm8uZ2V0Q29tcG9uZW50KFwiaGVyb1wiKS5sb2NhbFBvcyA9IHBvcztcbiAgICAgICAgaGVyby5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQocG9zKTtcbiAgICAgICAgaGVyby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uSm95U3RpY2soKTtcbiAgICAgICAgbGV0IHZhbCA9IDAuMTJcbiAgICAgICAgaWYgKHRoaXMuaXNVZGNpcmNsZSAhPSAwKSB7XG4gICAgICAgICAgICB2YWwgPSAwLjAyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwYXdFbmVteTEoKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnNwYXdFbmVtaWVzKDMwKVxuXG4gICAgICAgIC8vIHRoICh0aGlzLmlzVWRjaXJjbGUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgMTpcbiAgICAgICAgLy8gICAgICAgICB2YWw9MFxuXG4gICAgICAgIHRoaXMuaXNVZGNpcmNsZSsrXG4gICAgICAgIHRoaXMuaG91c2UxLmdldENvbXBvbmVudChcImhvdXNlXCIpLmlzTW92aW5nID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJ1ZFwiKVxuICAgICAgICAvLyB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2lyY2xlKS5ieSgwLjIsIHsgc2NhbGU6IHZhbCB9KS5zdGFydCgpXG4gICAgICAgIC8vIH0pLnN0YXJ0KClcblxuICAgIH1cbiAgICBpc1VkY2lyY2xlID0gMFxuICAgIGNsaWNrQ2hlc3QodmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIC8vIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5vZmZKb3lTdGljaygpXG4gICAgICAgIHRoaXMudHJhbnNDb2luKHZhbHVlKVxuICAgICAgICAvLyBicmVhaztcblxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHRyYW5zQ29pbih2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zY29pblwiKVxuICAgICAgICBsZXQgY2hlc3QgPSB0aGlzLmxpc3RDaGVzdC5jaGlsZHJlblt2YWx1ZSAtIDFdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2VtLCBmYWxzZSwgMC41KVxuICAgICAgICAgICAgICAgIGxldCByZXdhcmROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcbiAgICAgICAgICAgICAgICByZXdhcmROb2RlLnBvc2l0aW9uID0gdGhpcy5oZXJvLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHJld2FyZE5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuc2NhbGUgPSAwXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIodGhpcy5oZXJvLngsIHRoaXMuaGVyby55KTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoY2hlc3QueCwgY2hlc3QueSlcbiAgICAgICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHN0YXJ0UG9zLnggKyBlbmRQb3MueCkgLyAyLCAoc3RhcnRQb3MueSArIGVuZFBvcy55KSAvIDIgKyA0MDApXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocmV3YXJkTm9kZSkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2VlbihyZXdhcmROb2RlKS5iZXppZXJUbygwLjMsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhlcm8oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIDAuMTIgKiBpKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2tMb2NrKHZhbHVlKSB7XG5cbiAgICAvLyB9XG5cbiAgICBvZmZKb3lTdGljaygpIHtcbiAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLkpveVN0aWNrLmdldENvbXBvbmVudChcIkpveVN0aWNrXCIpLnRvdWNoRW5kRXZlbnQoKVxuICAgIH1cblxuXG4gICAgb25Kb3lTdGljaygpIHtcbiAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5oZXJvLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2lyY2xlLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgY291bnREaWUocG9zKSB7XG4gICAgICAgIHRoaXMuaXNDb3VudEVuZW1pZXNEaWUrK1xuICAgICAgICB0aGlzLmNyZWF0ZUNvaW4ocG9zKVxuICAgICAgICBsZXQgcHJlRGllID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVFbmVteURpZSk7XG4gICAgICAgIHByZURpZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHByZURpZS5wb3NpdGlvbiA9IHBvcztcblxuXG4gICAgfVxuXG4gICAgY3JlYXRlQ29pbihwb3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXdhcmROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcbiAgICAgICAgICAgIGxldCBub2RlU2NhbGUgPSByZXdhcmROb2RlLnNjYWxlO1xuICAgICAgICAgICAgcmV3YXJkTm9kZS5zY2FsZSA9IDBcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubGlzdEVuZW15LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmhlcm8uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICAgICAgcmV3YXJkTm9kZS5wYXJlbnQgPSB0aGlzLmhlcm87XG4gICAgICAgICAgICBjYy50d2VlbihyZXdhcmROb2RlKS5kZWxheSgwLjE1ICogaSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2VtLCBmYWxzZSwgMC41KVxuXG4gICAgICAgICAgICB9KS5zZXQoeyBhY3RpdmU6IHRydWUsIHNjYWxlOiAwLCBwb3NpdGlvbjogcG9zIH0pLnRvKDAuMSwgeyBzY2FsZTogMC41IH0pXG5cbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygwLCA1MCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSA1XG4gICAgICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBib251cyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQm9udXMpXG4gICAgICAgICAgICAgICAgICAgIGJvbnVzLnBhcmVudCA9IHRoaXMuaGVybztcbiAgICAgICAgICAgICAgICAgICAgYm9udXMucG9zaXRpb24gPSBjYy52MygwLCA1MClcblxuICAgICAgICAgICAgICAgICAgICBib251cy5zY2FsZVggPSAodGhpcy5oZXJvLnNjYWxlWCA+IDApID8gMSA6IC0xXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0NvdW50VW5sb2NrID0gMFxuICAgIGlzQ291bnRIZXJvRGllID0gMFxuICAgIGNvdW50SGVyb0RpZSgpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50SGVyb0RpZSsrO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQ291bnRIZXJvRGllID09IDQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMub25FbmRHYW1lKClcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG1vdmVIZXJvVG9Cb3NzKCkge1xuICAgICAgICB0aGlzLmhlcm9Db21wLm1vdmVCeVBvcyhjYy52Myg4MCwgNTApLCAwLjMpXG4gICAgICAgIHRoaXMua2F6ZXRzdS5nZXRDb21wb25lbnQoSCkubW92ZUJ5UG9zKGNjLnYzKDQwMCwgNTApLCAwLjMpXG4gICAgICAgIC8vIHRoaXMuZ29rdS5nZXRDb21wb25lbnQoSCkubW92ZUJ5UG9zKGNjLnYzKDEwMCwgNTApLCAwLjMpXG4gICAgICAgIC8vIHRoaXMubWFrby5nZXRDb21wb25lbnQoSCkubW92ZUJ5UG9zKGNjLnYzKDUwLCAyMCksIDAuMSlcblxuICAgIH1cbiAgICAvLyB0b3VjaEVuZEV2ZW50KGV2ZW50KSB7XG4gICAgLy8gICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgIC8vICAgICAvLyBwb3M9dGhpcy5zY2VuZTEuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcylcbiAgICAvLyAgICAgcG9zID0gdGhpcy5ib3NzLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgIHBvcyA9IHBvcy5hZGQodGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24pXG4gICAgLy8gICAgIGxldCBwb3NCb3NzID0gdGhpcy5ib3NzLnBvc2l0aW9uLmFkZChjYy52MygwLCA4MCkpXG4gICAgLy8gICAgIGlmICh0aGlzLmJvc3MucG9zaXRpb24uc3ViKHBvcykubWFnKCkgPD0gMzAwKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImF0ayBib3NzXCIpO1xuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5ib3NzLmNoaWxkcmVuWzBdKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0ZpcnN0ID09IGZhbHNlKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ib3NzLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5tb3ZlSGVyb1RvQm9zcygpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZURhbWFnZUJvc3MocG9zKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyB9XG4gICAgc3Bhd0VuZW5teSgpIHtcbiAgICAgICAgLy8gdGhpcy5saXN0SWNvbkhlcm9bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5saXN0SWNvbkhlcm9bMl0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkVuZEdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWU7XG4gICAgICAgIC8vIGxldCBjaGVzdCA9IHRoaXMubGlzdENoZXN0LmNoaWxkcmVuWzFdXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vZmZKb3lTdGljaygpXG4gICAgICAgIC8vIHRoaXMuYm94SWNvbi5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmJ5KDAuNSwgeyB6b29tUmF0aW86IC0wLjMgfSkuc3RhcnQoKVxuICAgICAgICAvLyB0aGlzLmhlcm8ucG9zaXRpb24gPSBjYy52MygxMDQ1LCAtMjA5KVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubGlzdEFyclBvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgdGhpcy5oZXJvLnBhcmVudC5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5saXN0QXJyUG9zW2kgLSAxXSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdlbSwgZmFsc2UsIDAuNSlcbiAgICAgICAgLy8gICAgICAgICBsZXQgcmV3YXJkTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XG4gICAgICAgIC8vICAgICAgICAgcmV3YXJkTm9kZS5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbjtcbiAgICAgICAgLy8gICAgICAgICByZXdhcmROb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgLy8gICAgICAgICByZXdhcmROb2RlLnNjYWxlID0gMFxuICAgICAgICAvLyAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKHRoaXMuaGVyby54LCB0aGlzLmhlcm8ueSk7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKGNoZXN0LngsIGNoZXN0LnkpXG4gICAgICAgIC8vICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChzdGFydFBvcy54ICsgZW5kUG9zLngpIC8gMiwgKHN0YXJ0UG9zLnkgKyBlbmRQb3MueSkgLyAyICsgNDAwKVxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHJld2FyZE5vZGUpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4ocmV3YXJkTm9kZSkuYmV6aWVyVG8oMC4zLCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICByZXdhcmROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGkgPT0gNykge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRIZXJvKCk7XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBjaGVzdHMgPSBjaGVzdC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNoZXN0XCIpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjaGVzdC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjaGVzdC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImN1cnJlbnRjeVwiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2hlc3QuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJiYW5nXCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjaGVzdHMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIGNoZXN0cy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIC8vICAgICB9LCAwLjEyICogaSlcblxuICAgICAgICAvLyB9XG5cblxuXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXG4gICAgICAgIC8vIHRoaXMuZW5kR2FtZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBjcmVhdGVNZWF0KHBvcykge1xuICAgICAgICBsZXQgbWVhdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTWVhdCk7XG4gICAgICAgIG1lYXQucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIG1lYXQucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIG1lYXQuc2NhbGUgPSAwLjhcbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlKHBvcykge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzU291bmQgPSB0cnVlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmVteURpZSwgZmFsc2UsIDEpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gZmFsc2VcblxuICAgICAgICAgICAgfSwgMC4xNSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSAtIDEwMFxuICAgICAgICBsZXQgcmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDgwXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKDAsIDApKTs7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMVxuICAgICAgICBsZXQgZGFtYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYW1hZ2UpO1xuICAgICAgICBkYW1hZ2UucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIGRhbWFnZS5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoMCwgMCkpO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAxLjVcbiAgICAgICAgZGFtYWdlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVhcbiAgICAgICAgbGV0IHZhbHVlRGFtYWdlID0gcmQgKyAxMDAwXG4gICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDMjM2RERcIilcblxuICAgICAgICBpZiAodmFsdWVEYW1hZ2UgPiAxMjAwKSB7XG4gICAgICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzIzNkREXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlRGFtYWdlID4gMTUwMCkge1xuICAgICAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0M1MzUyOFwiKVxuICAgICAgICB9XG4gICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyB2YWx1ZURhbWFnZS50b1N0cmluZygpXG5cbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlQm9zcyhwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5lbXlEaWUsIGZhbHNlLCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTb3VuZCA9IGZhbHNlXG5cbiAgICAgICAgICAgIH0sIDAuMTUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMCkgLSAxMDBcbiAgICAgICAgbGV0IHJkeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyA4MFxuICAgICAgICBsZXQgZGFtYWdlZnggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUZ4QXRrKTtcbiAgICAgICAgZGFtYWdlZngucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIGRhbWFnZWZ4LnBvc2l0aW9uID0gcG9zLmFkZChjYy52MyhyZHgsIHJkeSArIDEwMCkpOztcbiAgICAgICAgZGFtYWdlZnguc2NhbGUgPSAxXG4gICAgICAgIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSk7XG4gICAgICAgIGRhbWFnZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MyhyZHgsIHJkeSArIDEwMCkpO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAyXG4gICAgICAgIGRhbWFnZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYXG4gICAgICAgIGxldCB2YWx1ZURhbWFnZSA9IHJkICsgMTAwMFxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzIzNkREXCIpXG5cbiAgICAgICAgaWYgKHZhbHVlRGFtYWdlID4gMTIwMCkge1xuICAgICAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0MyMzZERFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZURhbWFnZSA+IDE1MDApIHtcbiAgICAgICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDNTM1MjhcIilcbiAgICAgICAgfVxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgdmFsdWVEYW1hZ2UudG9TdHJpbmcoKVxuXG4gICAgfVxuICAgIGJvc3NEaWUocG9zKSB7XG4gICAgICAgIHRoaXMub2ZmSm95U3RpY2soKVxuICAgICAgICB0aGlzLmNoZXN0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcmVEaWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVuZW15RGllKTtcbiAgICAgICAgICAgIHByZURpZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBwcmVEaWUucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICBwcmVEaWUuc2NhbGUgPSA0O1xuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGVzdC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSwgMC4zKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygxMzYwLCAxMjAwKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygxMzYwLCAxMjAwKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkuYnkoMC40LCB7IHpvb21SYXRpbzogMC44IH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikuYnkoMC40LCB7IHpvb21SYXRpbzogMC44IH0pLnN0YXJ0KClcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmJsb29kQmFyKS5ieSgwLjMsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDgwKSB9KS5jYWxsKCgpID0+IHsgdGhpcy5ibG9vZEJhci5hY3RpdmUgPSBmYWxzZSB9KS5zdGFydCgpXG4gICAgfVxuICAgIHJlcG9uc2l2ZSgpIHtcbiAgICAgICAgLy8gbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgLy8gaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDFcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnNjYWxlID0gMVxuICAgICAgICAvLyAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxLjNcbiAgICAgICAgLy8gICAgIHRoaXMuZW5kR2FtZU5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTAwKVxuICAgICAgICAvLyAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDEuMlxuICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGlzU2NhbGUgPSAxXG4gICAgaXNNYWcgPSAwXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuaGVyby5wb3NpdGlvbi5hZGQoY2MudjMoNTAgKyB0aGlzLmlzTWFnLCA1MCkpKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5zZXRQb3NpdGlvbih0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKDUwICsgdGhpcy5pc01hZywgNTApKSk7XG5cbiAgICAgICAgICAgIC8vIGlmICghdGhpcy5pc0VuZEdhbWUpIHtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGxldCBjaGVjazIgPSAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCAvIDY0MClcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNjLndpblNpemUuaGVpZ2h0IC8gY2Mud2luU2l6ZS53aWR0aCA8IDEuMzUpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDE7XG4gICAgICAgICAgICB0aGlzLmlzU2NhbGUgPSAxXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgICAgIHRoaXMubG9nby5zY2FsZSA9IDAuOVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dvLnBvc2l0aW9uPWNjLnYzKC0yMDAsNDE5KmNoZWNrLTUwKVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAxMTBcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdENhcmQuc2NhbGUgPSAxXG4gICAgICAgICAgICB0aGlzLmN1cnJlbmN5LnNjYWxlID0gMVxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW5jeS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDgzXG4gICAgICAgICAgICB0aGlzLmxvZ28ucG9zaXRpb24gPSBjYy52MygtMjAwLCA1MDApXG4gICAgICAgICAgICB0aGlzLmN1cnJlbmN5LnBvc2l0aW9uID0gY2MudjMoMjM2LCA1NTApXG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24uaGVpZ2h0IC8gZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IDEuMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ28ucG9zaXRpb24gPSBjYy52MygtMjAwLCA0MTkpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeS5wb3NpdGlvbiA9IGNjLnYzKDIzNiwgNDc0KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW5jeS5zY2FsZSA9IDEuM1xuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW5jeS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDEyMFxuICAgICAgICAgICAgdGhpcy5pc1NjYWxlID0gMS4zXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLnNjYWxlID0gMS4zXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLnBvc2l0aW9uID0gY2MudjMoMCwgLTcwKVxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9nby5zY2FsZSA9IDEuMlxuICAgICAgICAgICAgLy8gdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAyMDBcbiAgICAgICAgICAgIHRoaXMubG9nby5wb3NpdGlvbiA9IGNjLnYzKC01MDAgKyA1MCwgNDE5KVxuICAgICAgICAgICAgdGhpcy5jdXJyZW5jeS5wb3NpdGlvbiA9IGNjLnYzKDUwMCwgNDc0KVxuXG4gICAgICAgICAgICAvLyB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaD0zMDBcblxuICAgICAgICB9XG4gICAgfVxufVxuIl19