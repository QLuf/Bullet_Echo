"use strict";
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