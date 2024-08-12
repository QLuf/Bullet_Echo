"use strict";
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