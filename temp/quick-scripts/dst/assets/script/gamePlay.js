
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef1d6tt/RtJXI44W2k4YByY', 'gamePlay');
// script/gamePlay.ts

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
var hero_1 = require("./hero/hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hero = null;
        _this.hero2 = null;
        _this.eff_summon = null;
        _this.btnStart = null;
        _this.btnStart2 = null;
        _this.mainCamera = null;
        _this.uiCamera = null;
        _this.gate = null;
        _this.listHero1 = null;
        _this.listHero2 = null;
        _this.listHeroDefault = null;
        _this.heroNode = null;
        _this.tree2 = null;
        _this.preDamage = null;
        _this.preFxAtk = null;
        _this.listTree = [];
        _this.unlockNode = null;
        _this.preWood = null;
        _this.preWood2 = null;
        _this.missionBar = null;
        _this.sceneBattle = null;
        _this.bloodBar = null;
        _this.boss = null;
        //nhac
        _this.soundBg = null;
        _this.soundChop = null;
        _this.soundWoddy = null;
        _this.soundWoodin = null;
        _this.soundWoodOut = null;
        _this.soundQuestComplete = null;
        _this.soundSword = null;
        _this.soundLight = null;
        _this.soundVictory = null;
        _this.endGameNode = null;
        _this.textGuide = null;
        _this.linkToStore = null;
        _this.coinBar = null;
        _this.bossBar = null;
        _this.listBtn = null;
        _this.uiNode = null;
        _this.warning = null;
        _this.iconGG = null;
        _this.scene1 = null;
        _this.preDie = null;
        _this.guild2 = null;
        _this.skillLight = null;
        _this.skillSword = null;
        _this.popHero = null;
        _this.isEndGame = false;
        _this.isPus = 0;
        _this.isPauseGame = false;
        _this.heroComp = null;
        _this.isStep = 1;
        _this.isMoving = false;
        _this.isvertical = false;
        _this.isZoomed = false;
        _this.isPhase = 1;
        _this.isRed = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // window.gameReady && window.gameReady();
        var _this = this;
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.makeResponsive();
        cc.audioEngine.play(this.soundBg, true, 0.5);
        this.scheduleOnce(function () {
            _this.listTree[0].getChildByName("arrow1").active = true;
        }, 0.5);
    };
    NewClass.prototype.start = function () {
        this.heroComp = this.hero.getComponent('hero');
        // this.hero.zIndex = 3;
    };
    NewClass.prototype.update = function (dt) {
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(-70, 50)));
        }
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.mainCamera.zoomRatio = 2.2
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.isPus = 0;
                // if (this.isZoomed) {
                //     this.mainCamera.zoomRatio = 1.1
                // }
                // else {
                //     this.mainCamera.zoomRatio = 1
                // }
                this.iconGG.scale = 1;
                this.coinBar.scale = 1;
                if (cc.winSize.height / cc.winSize.width < 1.35) {
                    canvas.fitHeight = true;
                }
            }
        }
        else {
            // this.mainCamera.zoomRatio = 2.2
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.iconGG.scale = 1.3;
            this.coinBar.scale = 1.3;
            this.isPus = 80;
        }
    };
    NewClass.prototype.btnCollect = function (event) {
        var _this = this;
        console.log(event);
        if (this.isStep < 2) {
            this.scheduleOnce(function () {
                _this.listTree[_this.isStep].getChildByName("arrow1").active = true;
                _this.listTree[_this.isStep].getComponent(cc.Button).enabled = true;
                _this.isStep++;
            }, 1.8);
        }
        else {
            this.scheduleOnce(function () {
                _this.missionBar.getComponent(cc.Animation).play("mission_complete");
                cc.audioEngine.play(_this.soundQuestComplete, false, 1);
                _this.missionBar.getComponent("updateBar").reset(1);
            }, 2.7);
            this.scheduleOnce(function () {
                _this.moveCam1();
                // this.isMoving = false
            }, 3);
        }
        var tree = event.currentTarget;
        tree.getComponent(cc.Button).enabled = false;
        tree.getChildByName("arrow1").active = false;
        this.heroComp.movePos(tree);
    };
    NewClass.prototype.moveWood = function (wood) {
        var _this = this;
        cc.audioEngine.play(this.soundWoodin, false, 1);
        var pos = this.missionBar.position;
        pos = pos.add(cc.v3(-50, 0));
        var pos2 = wood.parent.convertToWorldSpaceAR(wood.position);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2);
        if (this.isPhase == 1) {
            wood.parent = this.uiNode;
            wood.scale *= 1.3;
            // wood.position = pos2.add(cc.v3(-this.mainCamera.node.position.x, -this.mainCamera.node.position.y));
            cc.tween(wood).to(0.4, { position: pos }).call(function () {
                _this.missionBar.getComponent("updateBar").updateBar();
                wood.getComponent(cc.Animation).play("exp");
                cc.audioEngine.play(_this.soundWoodOut, false, 1);
            }).start();
        }
    };
    NewClass.prototype.moveCam1 = function () {
        var _this = this;
        this.isMoving = true;
        this.heroComp.moveToPos(cc.v3(-450, -120), 1.2);
        cc.tween(this.mainCamera.node).to(1.2, { position: cc.v3(-834, -5.3) }).start();
        cc.tween(this.mainCamera).by(1.2, { zoomRatio: 0.3 }).call(function () {
            _this.transWood(_this.gate);
        }).start();
    };
    NewClass.prototype.transWood = function (nodeEnd) {
        var _this = this;
        var pos = nodeEnd.position;
        var _loop_1 = function (i) {
            var wood = cc.instantiate(this_1.preWood);
            wood.parent = this_1.scene1;
            wood.position = this_1.hero.position;
            wood.scale = 1.2;
            var midPos = cc.v2((this_1.hero.x + pos.x + 90) / 2, (this_1.hero.y + 200));
            var endPos = pos.add(cc.v3(0, 0));
            cc.tween(wood).delay(i * 0.08).set({ opacity: 255 }).call(function () {
                cc.audioEngine.play(_this.soundWoodin, false, 1);
            })
                .parallel(cc.tween().bezierTo(0.3, cc.v2(this_1.hero.x, this_1.hero.y), midPos, cc.v2(endPos.x, endPos.y)).call(function () {
                if (i == 7) {
                    _this.summonHero();
                }
                wood.getComponent(cc.Animation).play("exp");
            }), cc.tween().by(0.3, { angle: 360 })).start();
        };
        var this_1 = this;
        for (var i = 0; i < 8; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.transWood2 = function (nodeEnd) {
        var _this = this;
        var pos = nodeEnd.position;
        var _loop_2 = function (k) {
            var preHero = (k == 0) ? this_2.hero : this_2.hero2;
            var _loop_3 = function (i) {
                var wood = cc.instantiate(this_2.preWood);
                wood.parent = this_2.scene1;
                wood.position = preHero.position;
                wood.scale = 1.2;
                var midPos = cc.v2((preHero.x + pos.x + 90) / 2, (preHero.y + 200));
                var endPos = pos.add(cc.v3(0, 0));
                cc.tween(wood).delay(i * 0.08).set({ opacity: 255 }).call(function () {
                    cc.audioEngine.play(_this.soundWoodin, false, 1);
                })
                    .parallel(cc.tween().bezierTo(0.3, cc.v2(preHero.x, this_2.hero.y), midPos, cc.v2(endPos.x, endPos.y)).call(function () {
                    if (i == 7 && k == 1) {
                        _this.summonHero2();
                    }
                    wood.getComponent(cc.Animation).play("exp");
                }), cc.tween().by(0.3, { angle: 360 })).start();
            };
            for (var i = 0; i < 8; i++) {
                _loop_3(i);
            }
        };
        var this_2 = this;
        for (var k = 0; k < 2; k++) {
            _loop_2(k);
        }
    };
    NewClass.prototype.summonHero2 = function () {
        var _this = this;
        this.popHero.getComponent(cc.Animation).play("pop_close");
        this.scheduleOnce(function () {
            _this.listHeroDefault.active = true;
            cc.audioEngine.play(_this.soundQuestComplete, false, 2);
            _this.scheduleOnce(function () {
                // this.btn_Start2()
                _this.btnStart2.active = true;
            }, 0.4);
        }, 0.5);
    };
    NewClass.prototype.btn_Start2 = function (event) {
        var _this = this;
        this.sceneBattle.getChildByName("endGame").active = false;
        cc.audioEngine.play(this.soundQuestComplete, false, 1);
        // this.endGameNode.active = false;
        this.sceneBattle.active = true;
        this.listHero1.active = false;
        event.currentTarget.active = false;
        this.mainCamera.zoomRatio = 1;
        this.sceneBattle.active = true;
        this.mainCamera.node.position = cc.v3(0, 0);
        this.scheduleOnce(function () {
            _this.listHero2.active = true;
            _this.bloodBar.active = true;
        }, 0.3);
        this.scheduleOnce(function () {
            _this.moveHero2();
        }, 0.45);
    };
    NewClass.prototype.showSkill = function () {
        var _this = this;
        var arrPos = [cc.v3(0, 0), cc.v3(-300, -50), cc.v3(-150, -10), cc.v3(-200, 20), cc.v3(-100, -30)];
        var count = 0;
        this.schedule(function () {
            var light = cc.instantiate(_this.skillLight);
            light.parent = _this.sceneBattle;
            light.position = _this.boss.position;
            light.zIndex = 10;
            if (count < 5) {
                light.position = _this.boss.position.add(arrPos[count]);
                count++;
            }
            else {
                count = 0;
            }
            cc.audioEngine.play(_this.soundLight, false, 0.8);
            _this.scheduleOnce(function () {
                _this.createDamageBoss(_this.boss.position);
            }, 0.4);
        }, 0.6);
        this.scheduleOnce(function () {
            var light = cc.instantiate(_this.skillSword);
            light.parent = _this.sceneBattle;
            light.position = _this.boss.position.add(cc.v3(-2, 0));
            light.zIndex = 10;
            cc.audioEngine.play(_this.soundSword, false, 0.8);
        }, 2);
        this.scheduleOnce(function () {
            var light = cc.instantiate(_this.skillSword);
            light.parent = _this.sceneBattle;
            light.position = _this.boss.position.add(cc.v3(-2, 0));
            light.zIndex = 10;
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundSword, false, 1);
            }, 0.3);
        }, 4);
    };
    NewClass.prototype.moveHero2 = function () {
        var _this = this;
        var _loop_4 = function (child) {
            child.getComponent(hero_1.default).moveByPos(cc.v3(0, 300), 1);
            this_3.scheduleOnce(function () {
                var p = (child.getChildByName("icon").scaleX > 0) ? cc.v3(-100, 80) : cc.v3(100, 80);
                _this.schedule(function () {
                    _this.createDamage(child.position.add(p));
                }, 0.8);
                _this.createDamage(child.position.add(p));
            }, 1);
        };
        var this_3 = this;
        for (var _i = 0, _a = this.listHero2.children; _i < _a.length; _i++) {
            var child = _a[_i];
            _loop_4(child);
        }
        this.scheduleOnce(function () {
            _this.showSkill();
        }, 1);
    };
    NewClass.prototype.summonHero = function () {
        var _this = this;
        this.eff_summon.active = true;
        this.missionBar.getComponent(cc.Animation).play("mission_complete2");
        cc.audioEngine.play(this.soundQuestComplete, false, 2);
        this.scheduleOnce(function () {
            _this.hero2.active = true;
            _this.missionBar.active = false;
        }, 0.3);
        this.scheduleOnce(function () {
            _this.hero2.getComponent(hero_1.default).moveToPos(cc.v3(-595, -160), 0.8);
            _this.hero.getComponent(hero_1.default).moveToPos(cc.v3(-519, -154), 0.8);
            _this.scheduleOnce(function () {
                _this.btnStart.active = true;
            }, 0.7);
        }, 0.8);
    };
    NewClass.prototype.btn_battle = function (event) {
        // this.isPhase = 2
        // event.currentTarget.active = false;
        // cc.audioEngine.play(this.soundQuestComplete, false, 1)
        // this.mainCamera.zoomRatio = 1;
        // this.sceneBattle.active = true;
        // this.mainCamera.node.position = cc.v3(0, 0);
        // this.warning.active = true;
        // let pos = [cc.v3(146, -106), cc.v3(-102, -134)];
        // this.scheduleOnce(() => {
        //     this.bloodBar.active = true;
        //     this.listHero1.children[0].getComponent(H).moveToPos(cc.v3(146, -0), 1)
        //     this.scheduleOnce(() => {
        //         this.listHero1.children[0].getComponent(H).skill1("arthur")
        //     }, 0.8)
        //     this.scheduleOnce(() => {
        //         this.listHero1.children[1].getComponent(H).skill1("woody")
        //     }, 0.8)
        //     this.listHero1.children[1].getComponent(H).moveToPos(cc.v3(-102, -30), 1)
        // }, 0.3)
    };
    NewClass.prototype.endPhase1 = function () {
        var _this = this;
        for (var _i = 0, _a = this.listHero1.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var pos = child.position;
            var die = cc.instantiate(this.preDie);
            die.parent = this.listHero1.parent;
            die.position = pos.add(cc.v3(0, 50));
            die.zIndex = 3;
        }
        this.listHero1.children[0].active = false;
        this.listHero1.children[1].active = false;
        this.scheduleOnce(function () {
            _this.sceneBattle.getChildByName("endGame").active = true;
        }, 0.5);
        this.scheduleOnce(function () {
            _this.tree2.active = true;
            _this.sceneBattle.active = false;
            _this.warning.active = false;
            _this.bloodBar.active = false;
            _this.scheduleOnce(function () {
                _this.hero.position = cc.v3(52, -109);
                _this.hero2.position = cc.v3(110, -92);
                _this.hero2.getChildByName("icon").scaleX = 1.3;
                _this.hero.getChildByName("fxAppear").active = true;
                _this.hero.getChildByName("fxAppear").getComponent(cc.Animation).play();
                _this.hero2.getChildByName("fxAppear").active = true;
                _this.hero2.getChildByName("fxAppear").getComponent(cc.Animation).play();
            }, 0.2);
            _this.scheduleOnce(function () {
                _this.guild2.active = true;
            }, 0.4);
        }, 1.3);
    };
    NewClass.prototype.btnPhase2 = function (event) {
        var _this = this;
        this.mainCamera.node.position = this.hero.position.add(cc.v3(-70, 50));
        this.guild2.active = false;
        this.popHero.active = true;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        var tree = event.currentTarget;
        // this.heroComp.moveToPos(tree)
        this.heroComp.moveToPos(cc.v3(-51, -113), 0.6);
        this.hero2.getComponent(hero_1.default).moveToPos(cc.v3(-18, -13), 0.6);
        this.scheduleOnce(function () {
            _this.heroComp.chop(event.currentTarget);
            _this.hero2.getComponent(hero_1.default).chop(_this.tree2.children[0]);
        }, 0.6);
        this.scheduleOnce(function () {
            _this.moveCam2();
        }, 2);
        this.isMoving = false;
    };
    NewClass.prototype.moveCam2 = function () {
        var _this = this;
        this.isMoving = true;
        this.hero2.getComponent(hero_1.default).moveToPos(cc.v3(-455, -90), 1.7);
        this.heroComp.moveToPos(cc.v3(-485, -120), 1.7);
        cc.tween(this.mainCamera.node).to(1.7, { position: cc.v3(-834, -5.3) }).start();
        cc.tween(this.mainCamera).by(1.7, { zoomRatio: 0.2 }).call(function () {
            _this.transWood2(_this.gate);
        }).start();
    };
    // moveCam2() {
    //     cc.tween(this.mainCamera.node).to(0.35, { position: cc.v3(350, 0 + this.isPus) }).call(() => {
    //         this.enemyNode.active = true
    //         this.scheduleOnce(() => {
    //             this.warning.active = true;
    //         }, 0.5)
    //     }).delay(0.6).to(0.4, { position: cc.v3(260, 0 + this.isPus) }).start()
    //     let zoom = (this.isvertical) ? 1.1 : 2.2
    //     cc.tween(this.mainCamera).delay(1.1).to(0.4, { zoomRatio: zoom }).call(() => {
    //         this.isZoomed = true
    //         this.enemyNode.getChildByName("hand").opacity = 255
    //         this.linkToStore.active = true;
    //         this.missionBar.getComponent(cc.Animation).play("unlock_showup")
    //     }).start()
    // }
    NewClass.prototype.makeResponsive = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        var deviceResolution = cc.view.getFrameSize();
        // calculte design ratio
        var desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // calculte device ratio
        var deviceRatio = deviceResolution.width / deviceResolution.height;
        if (deviceRatio >= desiredRatio) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        else if (deviceRatio < desiredRatio) {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    };
    NewClass.prototype.createHero = function (heroPre, value) {
        var hero = cc.instantiate(heroPre);
        hero.parent = this.heroNode;
        var pos = this.hero.position;
        hero.position = pos.add(cc.v3(50, 50));
        if (value == 1 || value == 2) {
            hero.getComponent("hero").skillIceArrow();
            // hero.getComponent("hero").idle()
            this.scheduleOnce(function () {
                if (value == 2) {
                    hero.getComponent("hero").check1();
                }
            }, 0.4);
        }
    };
    NewClass.prototype.updateBossBar = function () {
        var bar = this.bossBar.getChildByName("bar").getComponent(cc.Sprite);
        bar.fillRange -= 0.015;
        var iconBoss = this.bossBar.getChildByName("iconBoss");
        var value = -6;
        if (iconBoss.x - 5 < -168) {
            iconBoss.x = -168;
            value = 0;
        }
        cc.tween(iconBoss).by(0.2, { position: cc.v3(value, 0) }).start();
        if (bar.fillRange <= 0.3) {
            if (this.isRed == false) {
                this.isRed = true;
                this.bossBar.getComponent(cc.Animation).play("red_bar");
            }
        }
    };
    NewClass.prototype.createDamage = function (pos) {
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos;
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2;
        // let damage = cc.instantiate(this.preDamage)
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528");
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos;
        damagefx.scale = 1.4;
        this.boss.getComponent("boss").attacked(90);
    };
    NewClass.prototype.createDamageBoss = function (pos) {
        console.log("create dame");
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos;
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 3;
        // let damage = cc.instantiate(this.preDamage)
        var valueDamage = rd + 800;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#F59022");
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos;
        damagefx.scale = 1.4;
        this.boss.getComponent("boss").attacked(107);
    };
    NewClass.prototype.onEndGame = function () {
        cc.audioEngine.play(this.soundVictory, false, 0.8);
        this.unscheduleAllCallbacks();
        this.bloodBar.active = false;
        this.sceneBattle.getChildByName("endGame2").active = true;
        this.linkToStore.active = true;
        for (var _i = 0, _a = this.listHero2.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent("hero").stopG();
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "eff_summon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnStart", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnStart2", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "gate", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHero1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHero2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHeroDefault", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "heroNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tree2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preFxAtk", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTree", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "unlockNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "missionBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sceneBattle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bloodBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoddy", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodOut", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundQuestComplete", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSword", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLight", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundVictory", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGameNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuide", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bossBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iconGG", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDie", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skillLight", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skillSword", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "popHero", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtBQUNuQixvQ0FBMkI7QUFHckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwbUJDO1FBdm1CRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLGVBQVMsR0FBYyxJQUFJLENBQUE7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQTtRQUcxQixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFDcEIsTUFBTTtRQUVOLGFBQU8sR0FBaUIs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QVksQ0FBQyxjQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFM0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdB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O0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBckdQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwbUI1QjtJQUFELGVBQUM7Q0ExbUJELEFBMG1CQyxDQTFtQnFDLEVBQUUsQ0FBQyxTQUFTLEdBMG1CakQ7a0JBMW1Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuZ2xvYmFsVGhpcy5nb2xkID0gMFxuaW1wb3J0IEggZnJvbSBcIi4vaGVyby9oZXJvXCJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZWZmX3N1bW1vbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blN0YXJ0MjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2F0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0SGVybzE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RIZXJvMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEhlcm9EZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdHJlZTI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVEYW1hZ2U6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUZ4QXRrOiBjYy5QcmVmYWIgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0VHJlZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdW5sb2NrTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVXb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlV29vZDI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWlzc2lvbkJhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2NlbmVCYXR0bGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb29kQmFyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJvc3M6IGNjLk5vZGUgPSBudWxsXG4gICAgLy9uaGFjXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDaG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRXb2RkeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kV29vZGluOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRXb29kT3V0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRRdWVzdENvbXBsZXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTd29yZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kTGlnaHQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVmljdG9yeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZEdhbWVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0R3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3NzQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0QnRuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb25HRzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2NlbmUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZURpZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBndWlsZDI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBza2lsbExpZ2h0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2tpbGxTd29yZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3BIZXJvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpc0VuZEdhbWUgPSBmYWxzZTtcbiAgICBpc1B1cyA9IDBcbiAgICBpc1BhdXNlR2FtZSA9IGZhbHNlO1xuICAgIGhlcm9Db21wID0gbnVsbDtcbiAgICBpc1N0ZXAgPSAxO1xuICAgIGlzTW92aW5nID0gZmFsc2U7XG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlXG4gICAgaXNab29tZWQgPSBmYWxzZVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5tYWtlUmVzcG9uc2l2ZSgpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0VHJlZVswXS5nZXRDaGlsZEJ5TmFtZShcImFycm93MVwiKS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH0sIDAuNSlcbiAgICB9XG5cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMuaGVyb0NvbXAgPSB0aGlzLmhlcm8uZ2V0Q29tcG9uZW50KCdoZXJvJyk7XG4gICAgICAgIC8vIHRoaXMuaGVyby56SW5kZXggPSAzO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKC03MCwgNTApKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDIuMlxuXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1B1cyA9IDBcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc1pvb21lZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS4xXG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxXG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uR0cuc2NhbGUgPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5jb2luQmFyLnNjYWxlID0gMVxuICAgICAgICAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDIuMlxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pY29uR0cuc2NhbGUgPSAxLjNcbiAgICAgICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDEuM1xuICAgICAgICAgICAgdGhpcy5pc1B1cyA9IDgwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidG5Db2xsZWN0KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPCAyKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VHJlZVt0aGlzLmlzU3RlcF0uZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvdzFcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFRyZWVbdGhpcy5pc1N0ZXBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xuICAgICAgICAgICAgfSwgMS44KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibWlzc2lvbl9jb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFF1ZXN0Q29tcGxldGUsIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikucmVzZXQoMSlcbiAgICAgICAgICAgIH0sIDIuNylcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbTEoKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgICB9LCAzKVxuICAgICAgICB9XG4gICAgICAgIGxldCB0cmVlID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgdHJlZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgdHJlZS5nZXRDaGlsZEJ5TmFtZShcImFycm93MVwiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmhlcm9Db21wLm1vdmVQb3ModHJlZSlcblxuXG4gICAgfVxuICAgIGlzUGhhc2UgPSAxO1xuICAgIG1vdmVXb29kKHdvb2QpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubWlzc2lvbkJhci5wb3NpdGlvblxuICAgICAgICBwb3MgPSBwb3MuYWRkKGNjLnYzKC01MCwgMCkpXG4gICAgICAgIGxldCBwb3MyID0gd29vZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pO1xuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMilcbiAgICAgICAgaWYgKHRoaXMuaXNQaGFzZSA9PSAxKSB7XG4gICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMudWlOb2RlO1xuXG4gICAgICAgICAgICB3b29kLnNjYWxlICo9IDEuM1xuXG4gICAgICAgICAgICAvLyB3b29kLnBvc2l0aW9uID0gcG9zMi5hZGQoY2MudjMoLXRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uLngsIC10aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi55KSk7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XG4gICAgICAgICAgICAgICAgd29vZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwXCIpXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBtb3ZlQ2FtMSgpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcblxuICAgICAgICB0aGlzLmhlcm9Db21wLm1vdmVUb1BvcyhjYy52MygtNDUwLCAtMTIwKSwgMS4yKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMS4yLCB7IHBvc2l0aW9uOiBjYy52MygtODM0LCAtNS4zKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkuYnkoMS4yLCB7IHpvb21SYXRpbzogMC4zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc1dvb2QodGhpcy5nYXRlKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIHRyYW5zV29vZChub2RlRW5kKSB7XG4gICAgICAgIGxldCBwb3MgPSBub2RlRW5kLnBvc2l0aW9uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV29vZCk7XG4gICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMuc2NlbmUxO1xuICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbjtcbiAgICAgICAgICAgIHdvb2Quc2NhbGUgPSAxLjJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigodGhpcy5oZXJvLnggKyBwb3MueCArIDkwKSAvIDIsICh0aGlzLmhlcm8ueSArIDIwMCkpXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcblxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoaSAqIDAuMDgpLnNldCh7IG9wYWNpdHk6IDI1NSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC4zLCBjYy52Mih0aGlzLmhlcm8ueCwgdGhpcy5oZXJvLnkpLCBtaWRQb3MsIGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VtbW9uSGVybygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4zLCB7IGFuZ2xlOiAzNjAgfSlcbiAgICAgICAgICAgICAgICApLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmFuc1dvb2QyKG5vZGVFbmQpIHtcbiAgICAgICAgbGV0IHBvcyA9IG5vZGVFbmQucG9zaXRpb25cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAyOyBrKyspIHtcbiAgICAgICAgICAgIGxldCBwcmVIZXJvID0gKGsgPT0gMCkgPyB0aGlzLmhlcm8gOiB0aGlzLmhlcm8yXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKTtcbiAgICAgICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMuc2NlbmUxO1xuICAgICAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSBwcmVIZXJvLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHdvb2Quc2NhbGUgPSAxLjJcbiAgICAgICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHByZUhlcm8ueCArIHBvcy54ICsgOTApIC8gMiwgKHByZUhlcm8ueSArIDIwMCkpXG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvcyA9IHBvcy5hZGQoY2MudjMoMCwgMCkpXG5cbiAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheShpICogMC4wOCkuc2V0KHsgb3BhY2l0eTogMjU1IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC4zLCBjYy52MihwcmVIZXJvLngsIHRoaXMuaGVyby55KSwgbWlkUG9zLCBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkpKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA3ICYmIGsgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1vbkhlcm8yKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29vZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4zLCB7IGFuZ2xlOiAzNjAgfSlcbiAgICAgICAgICAgICAgICAgICAgKS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIHN1bW1vbkhlcm8yKCkge1xuICAgICAgICB0aGlzLnBvcEhlcm8uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9jbG9zZVwiKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RIZXJvRGVmYXVsdC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdENvbXBsZXRlLCBmYWxzZSwgMilcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYnRuX1N0YXJ0MigpXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGFydDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICB9LCAwLjUpXG5cbiAgICB9XG4gICAgYnRuX1N0YXJ0MihldmVudCkge1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmdldENoaWxkQnlOYW1lKFwiZW5kR2FtZVwiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdENvbXBsZXRlLCBmYWxzZSwgMSlcblxuICAgICAgICAvLyB0aGlzLmVuZEdhbWVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEhlcm8xLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxO1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdEhlcm8yLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuYmxvb2RCYXIuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB9LCAwLjMpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZUhlcm8yKClcbiAgICAgICAgfSwgMC40NSlcbiAgICB9XG4gICAgc2hvd1NraWxsKCkge1xuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDApLCBjYy52MygtMzAwLCAtNTApLCBjYy52MygtMTUwLCAtMTApLCBjYy52MygtMjAwLCAyMCksIGNjLnYzKC0xMDAsIC0zMCldXG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2tpbGxMaWdodClcbiAgICAgICAgICAgIGxpZ2h0LnBhcmVudCA9IHRoaXMuc2NlbmVCYXR0bGU7XG4gICAgICAgICAgICBsaWdodC5wb3NpdGlvbiA9IHRoaXMuYm9zcy5wb3NpdGlvblxuICAgICAgICAgICAgbGlnaHQuekluZGV4ID0gMTBcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgICBsaWdodC5wb3NpdGlvbiA9IHRoaXMuYm9zcy5wb3NpdGlvbi5hZGQoYXJyUG9zW2NvdW50XSlcblxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTGlnaHQsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURhbWFnZUJvc3ModGhpcy5ib3NzLnBvc2l0aW9uKVxuICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICB9LCAwLjYpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBsaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2tpbGxTd29yZClcbiAgICAgICAgICAgIGxpZ2h0LnBhcmVudCA9IHRoaXMuc2NlbmVCYXR0bGU7XG4gICAgICAgICAgICBsaWdodC5wb3NpdGlvbiA9IHRoaXMuYm9zcy5wb3NpdGlvbi5hZGQoY2MudjMoLTIsIDApKVxuICAgICAgICAgICAgbGlnaHQuekluZGV4ID0gMTBcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFN3b3JkLCBmYWxzZSwgMC44KVxuICAgICAgICB9LCAyKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGlnaHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNraWxsU3dvcmQpXG4gICAgICAgICAgICBsaWdodC5wYXJlbnQgPSB0aGlzLnNjZW5lQmF0dGxlO1xuICAgICAgICAgICAgbGlnaHQucG9zaXRpb24gPSB0aGlzLmJvc3MucG9zaXRpb24uYWRkKGNjLnYzKC0yLCAwKSlcbiAgICAgICAgICAgIGxpZ2h0LnpJbmRleCA9IDEwXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3dvcmQsIGZhbHNlLCAxKVxuXG4gICAgICAgICAgICB9LCAwLjMpXG5cbiAgICAgICAgfSwgNClcbiAgICB9XG4gICAgbW92ZUhlcm8yKCkge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RIZXJvMi5jaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52MygwLCAzMDApLCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwID0gKGNoaWxkLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5zY2FsZVggPiAwKSA/IGNjLnYzKC0xMDAsIDgwKSA6IGNjLnYzKDEwMCwgODApXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRGFtYWdlKGNoaWxkLnBvc2l0aW9uLmFkZChwKSlcblxuICAgICAgICAgICAgICAgIH0sIDAuOClcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURhbWFnZShjaGlsZC5wb3NpdGlvbi5hZGQocCkpXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NraWxsKClcbiAgICAgICAgfSwgMSlcblxuXG5cbiAgICB9XG4gICAgc3VtbW9uSGVybygpIHtcbiAgICAgICAgdGhpcy5lZmZfc3VtbW9uLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtaXNzaW9uX2NvbXBsZXRlMlwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdENvbXBsZXRlLCBmYWxzZSwgMilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZXJvMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5taXNzaW9uQmFyLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0sIDAuMylcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZXJvMi5nZXRDb21wb25lbnQoSCkubW92ZVRvUG9zKGNjLnYzKC01OTUsIC0xNjApLCAwLjgpXG4gICAgICAgICAgICB0aGlzLmhlcm8uZ2V0Q29tcG9uZW50KEgpLm1vdmVUb1BvcyhjYy52MygtNTE5LCAtMTU0KSwgMC44KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSwgMC43KVxuICAgICAgICB9LCAwLjgpXG5cbiAgICB9XG4gICAgYnRuX2JhdHRsZShldmVudCkge1xuICAgICAgICAvLyB0aGlzLmlzUGhhc2UgPSAyXG5cbiAgICAgICAgLy8gZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUXVlc3RDb21wbGV0ZSwgZmFsc2UsIDEpXG5cbiAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDE7XG4gICAgICAgIC8vIHRoaXMuc2NlbmVCYXR0bGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKTtcbiAgICAgICAgLy8gdGhpcy53YXJuaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGxldCBwb3MgPSBbY2MudjMoMTQ2LCAtMTA2KSwgY2MudjMoLTEwMiwgLTEzNCldO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmJsb29kQmFyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmxpc3RIZXJvMS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSCkubW92ZVRvUG9zKGNjLnYzKDE0NiwgLTApLCAxKVxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubGlzdEhlcm8xLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChIKS5za2lsbDEoXCJhcnRodXJcIilcbiAgICAgICAgLy8gICAgIH0sIDAuOClcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmxpc3RIZXJvMS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoSCkuc2tpbGwxKFwid29vZHlcIilcbiAgICAgICAgLy8gICAgIH0sIDAuOClcbiAgICAgICAgLy8gICAgIHRoaXMubGlzdEhlcm8xLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChIKS5tb3ZlVG9Qb3MoY2MudjMoLTEwMiwgLTMwKSwgMSlcbiAgICAgICAgLy8gfSwgMC4zKVxuXG4gICAgfVxuICAgIGVuZFBoYXNlMSgpIHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0SGVybzEuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBjaGlsZC5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBkaWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURpZSk7XG4gICAgICAgICAgICBkaWUucGFyZW50ID0gdGhpcy5saXN0SGVybzEucGFyZW50O1xuICAgICAgICAgICAgZGllLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MygwLCA1MCkpXG4gICAgICAgICAgICBkaWUuekluZGV4ID0gM1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdEhlcm8xLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RIZXJvMS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZUJhdHRsZS5nZXRDaGlsZEJ5TmFtZShcImVuZEdhbWVcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9LCAwLjUpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJlZTIuYWN0aXZlID0gdHJ1ZVxuXG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmVCYXR0bGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJsb29kQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyby5wb3NpdGlvbiA9IGNjLnYzKDUyLCAtMTA5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm8yLnBvc2l0aW9uID0gY2MudjMoMTEwLCAtOTIpXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvMi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuc2NhbGVYID0gMS4zXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvLmdldENoaWxkQnlOYW1lKFwiZnhBcHBlYXJcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuaGVyby5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGVybzIuZ2V0Q2hpbGRCeU5hbWUoXCJmeEFwcGVhclwiKS5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB0aGlzLmhlcm8yLmdldENoaWxkQnlOYW1lKFwiZnhBcHBlYXJcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICB9LCAwLjIpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlsZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfSwgMC40KVxuXG4gICAgICAgIH0sIDEuMylcblxuICAgIH1cbiAgICBidG5QaGFzZTIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24gPSB0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKC03MCwgNTApKVxuICAgICAgICB0aGlzLmd1aWxkMi5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcEhlcm8uYWN0aXZlID0gdHJ1ZVxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICBsZXQgdHJlZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICAgLy8gdGhpcy5oZXJvQ29tcC5tb3ZlVG9Qb3ModHJlZSlcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5tb3ZlVG9Qb3MoY2MudjMoLTUxLCAtMTEzKSwgMC42KVxuICAgICAgICB0aGlzLmhlcm8yLmdldENvbXBvbmVudChIKS5tb3ZlVG9Qb3MoY2MudjMoLTE4LCAtMTMpLCAwLjYpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVyb0NvbXAuY2hvcChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy5oZXJvMi5nZXRDb21wb25lbnQoSCkuY2hvcCh0aGlzLnRyZWUyLmNoaWxkcmVuWzBdKVxuXG4gICAgICAgIH0sIDAuNilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlQ2FtMigpXG4gICAgICAgIH0sIDIpXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBtb3ZlQ2FtMigpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcbiAgICAgICAgdGhpcy5oZXJvMi5nZXRDb21wb25lbnQoSCkubW92ZVRvUG9zKGNjLnYzKC00NTUsIC05MCksIDEuNylcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5tb3ZlVG9Qb3MoY2MudjMoLTQ4NSwgLTEyMCksIDEuNylcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDEuNywgeyBwb3NpdGlvbjogY2MudjMoLTgzNCwgLTUuMykgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmJ5KDEuNywgeyB6b29tUmF0aW86IDAuMiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNXb29kMih0aGlzLmdhdGUpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG4gICAgLy8gbW92ZUNhbTIoKSB7XG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjM1LCB7IHBvc2l0aW9uOiBjYy52MygzNTAsIDAgKyB0aGlzLmlzUHVzKSB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuZW5lbXlOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH0sIDAuNSlcbiAgICAvLyAgICAgfSkuZGVsYXkoMC42KS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDI2MCwgMCArIHRoaXMuaXNQdXMpIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgbGV0IHpvb20gPSAodGhpcy5pc3ZlcnRpY2FsKSA/IDEuMSA6IDIuMlxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmRlbGF5KDEuMSkudG8oMC40LCB7IHpvb21SYXRpbzogem9vbSB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNab29tZWQgPSB0cnVlXG4gICAgLy8gICAgICAgICB0aGlzLmVuZW15Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikub3BhY2l0eSA9IDI1NVxuICAgIC8vICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ1bmxvY2tfc2hvd3VwXCIpXG5cbiAgICAvLyAgICAgfSkuc3RhcnQoKVxuXG5cbiAgICAvLyB9XG5cbiAgICBtYWtlUmVzcG9uc2l2ZSgpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuXG4gICAgICAgIC8vIGNhbGN1bHRlIGRlc2lnbiByYXRpb1xuICAgICAgICBsZXQgZGVzaXJlZFJhdGlvID0gY2FudmFzLmRlc2lnblJlc29sdXRpb24ud2lkdGggLyBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgIC8vIGNhbGN1bHRlIGRldmljZSByYXRpb1xuICAgICAgICBsZXQgZGV2aWNlUmF0aW8gPSBkZXZpY2VSZXNvbHV0aW9uLndpZHRoIC8gZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKGRldmljZVJhdGlvID49IGRlc2lyZWRSYXRpbykge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChkZXZpY2VSYXRpbyA8IGRlc2lyZWRSYXRpbykge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVIZXJvKGhlcm9QcmUsIHZhbHVlKSB7XG4gICAgICAgIGxldCBoZXJvID0gY2MuaW5zdGFudGlhdGUoaGVyb1ByZSlcbiAgICAgICAgaGVyby5wYXJlbnQgPSB0aGlzLmhlcm9Ob2RlO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5oZXJvLnBvc2l0aW9uXG4gICAgICAgIGhlcm8ucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKDUwLCA1MCkpXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxIHx8IHZhbHVlID09IDIpIHtcbiAgICAgICAgICAgIGhlcm8uZ2V0Q29tcG9uZW50KFwiaGVyb1wiKS5za2lsbEljZUFycm93KClcbiAgICAgICAgICAgIC8vIGhlcm8uZ2V0Q29tcG9uZW50KFwiaGVyb1wiKS5pZGxlKClcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBoZXJvLmdldENvbXBvbmVudChcImhlcm9cIikuY2hlY2sxKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwLjQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNSZWQgPSBmYWxzZVxuICAgIHVwZGF0ZUJvc3NCYXIoKSB7XG4gICAgICAgIGxldCBiYXIgPSB0aGlzLmJvc3NCYXIuZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGJhci5maWxsUmFuZ2UgLT0gMC4wMTU7XG4gICAgICAgIGxldCBpY29uQm9zcyA9IHRoaXMuYm9zc0Jhci5nZXRDaGlsZEJ5TmFtZShcImljb25Cb3NzXCIpXG4gICAgICAgIGxldCB2YWx1ZSA9IC02XG5cbiAgICAgICAgaWYgKGljb25Cb3NzLnggLSA1IDwgLTE2OCkge1xuICAgICAgICAgICAgaWNvbkJvc3MueCA9IC0xNjhcbiAgICAgICAgICAgIHZhbHVlID0gMFxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKGljb25Cb3NzKS5ieSgwLjIsIHsgcG9zaXRpb246IGNjLnYzKHZhbHVlLCAwKSB9KS5zdGFydCgpXG4gICAgICAgIGlmIChiYXIuZmlsbFJhbmdlIDw9IDAuMykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuYm9zc0Jhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicmVkX2JhclwiKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlKHBvcykge1xuICAgICAgICBsZXQgZGFtYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYW1hZ2UpO1xuICAgICAgICBkYW1hZ2UucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIGRhbWFnZS5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgbGV0IHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMClcbiAgICAgICAgZGFtYWdlLnNjYWxlID0gMlxuICAgICAgICAvLyBsZXQgZGFtYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYW1hZ2UpXG4gICAgICAgIGxldCB2YWx1ZURhbWFnZSA9IHJkICsgMTAwMFxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzIzNkREXCIpXG5cbiAgICAgICAgaWYgKHZhbHVlRGFtYWdlID4gMTIwMCkge1xuICAgICAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0MyMzZERFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZURhbWFnZSA+IDE1MDApIHtcbiAgICAgICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDNTM1MjhcIilcbiAgICAgICAgfVxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgdmFsdWVEYW1hZ2UudG9TdHJpbmcoKVxuXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS40XG5cbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChcImJvc3NcIikuYXR0YWNrZWQoOTApXG5cblxuICAgIH1cbiAgICBjcmVhdGVEYW1hZ2VCb3NzKHBvcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBkYW1lXCIpXG4gICAgICAgIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSk7XG4gICAgICAgIGRhbWFnZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAzXG4gICAgICAgIC8vIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSlcbiAgICAgICAgbGV0IHZhbHVlRGFtYWdlID0gcmQgKyA4MDBcbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0Y1OTAyMlwiKVxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgdmFsdWVEYW1hZ2UudG9TdHJpbmcoKVxuXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS40XG5cbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChcImJvc3NcIikuYXR0YWNrZWQoMTA3KVxuXG5cbiAgICB9XG4gICAgb25FbmRHYW1lKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRWaWN0b3J5LCBmYWxzZSwgMC44KVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxuICAgICAgICB0aGlzLmJsb29kQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmdldENoaWxkQnlOYW1lKFwiZW5kR2FtZTJcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0SGVybzIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImhlcm9cIikuc3RvcEcoKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19