"use strict";
cc._RF.push(module, '7dca7QRyN9LfKFIkDZl5K0r', 'hero');
// script/hero/hero.ts

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
// import { Constant } from "./Constant";
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.bodyCollider = null;
        _this.rangeCollider = null;
        _this.heroBullet = null;
        _this.blood = null;
        _this.bloodSub = null;
        _this.preDamage = null;
        _this.levelNode = null;
        _this.isHaveSkill = true;
        _this.hp = 500;
        _this.damage = 50;
        _this.countDown = 0.4;
        _this.isAD = false;
        _this.isAuto = false;
        _this.atkSound = null;
        _this.chopSound = null;
        _this.skill1Sound = null;
        _this.preSkill1 = null;
        _this.preSkill2 = null;
        _this.lbHP = null;
        _this.isLocalScale = 1;
        _this.isMain = false;
        _this.isSKill = false;
        _this.moveDir = null;
        _this.directionX = null;
        _this.isRun = false;
        _this.isDie = false;
        _this.speed = 300;
        _this.maxHp = 0;
        _this.enemyArr = [];
        _this.isAttack = false;
        _this.isChop = false;
        _this.gamePlay = null;
        _this.isCountAtk = 0;
        _this.arrPosFollow = [cc.v3(-238, -261), cc.v3(-43, -351), cc.v3(-170, -405), cc.v3(-101, 67)];
        _this.isCountFollow = 0;
        _this.localPos = cc.v3(0, 0);
        _this.arrHero = [];
        _this.arrFxSkill = [];
        _this.isEnd = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.maxHp = this.hp;
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
        // this.arrHero = cc.Canvas.instance.node.getComponent('Game21').arrHero
    };
    NewClass.prototype.run = function () {
        if (this.isSKill)
            return;
        if (!this.isRun && !this.isDie) {
            this.isRun = true;
            // this.anim.play("move")
            // this.isAttack = false;
        }
    };
    NewClass.prototype.idle = function () {
        if (!this.isRun && !this.isDie) {
            // this.anim.play("idle")
            this.isSKill = false;
        }
    };
    NewClass.prototype.onColider = function () {
        this.bodyCollider.enabled = true;
        this.rangeCollider.enabled = true;
    };
    NewClass.prototype.offColider = function () {
        this.node.active = true;
        this.bodyCollider.enabled = false;
        this.rangeCollider.enabled = false;
        this.node.scaleX = -1;
        this.isAuto = false;
        this.isRun = false;
        this.isEnd = true;
        this.unscheduleAllCallbacks();
        this.node.stopAllActions();
        this.node.getChildByName("hpBar").active = true;
        this.idle();
        this.node.getChildByName("fxAppear").getComponent(cc.Animation).play();
    };
    NewClass.prototype.stop = function () {
        if (this.isSKill)
            return;
        if (!this.isDie) {
            // this.isAttack = false
            this.isRun = false;
            if (this.enemyArr.length > 0) {
                this.attack();
            }
            else {
                if (!this.isSKill) {
                    // this.anim.play("idle");
                }
            }
        }
    };
    NewClass.prototype.showNoti = function () {
        this.node.getChildByName("preNoti").getComponent(cc.Animation).play();
    };
    NewClass.prototype.attack = function () {
        // console.log(this.isRun,this.enemyArr.length)
        // this.enemyArr.push(enemy)
        var _this = this;
        // if (this.isRun) return;
        if (this.enemyArr.length > 0) {
            if (!this.isAttack) {
                this.isAttack = true;
                this.node.stopAllActions();
                this.isRun = false;
                this.schedule(function () {
                    _this.shoot();
                }, 0.3);
            }
        }
        else {
            if (this.enemyArr.length == 0) {
                if (this.isAuto) {
                    this.anim.unscheduleAllCallbacks();
                    this.isAttack = false;
                    this.idle();
                }
            }
        }
    };
    NewClass.prototype.setDefault = function () {
        this.node.stopAllActions();
        this.isAttack = false;
        this.isRun = false;
        this.idle();
        this.node.getChildByName("fxAppear").getComponent(cc.Animation).play();
    };
    NewClass.prototype.reload = function () {
        var _this = this;
        this.node.getChildByName("napdan").getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            _this.gamePlay.createAmmo(_this.node.position.add(cc.v3(-50, 50)));
        }, 0.2);
    };
    NewClass.prototype.moveToPos = function (pos, time) {
        var _this = this;
        this.anim.play("move");
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            _this.idle();
        }).start();
    };
    NewClass.prototype.moveByPos = function (pos, time) {
        var _this = this;
        this.anim.play("move");
        cc.tween(this.node).by(time, { position: pos }).call(function () {
            _this.anim.play("idle");
            _this.onColider();
        }).start();
    };
    NewClass.prototype.attacked = function (damage) {
        if (this.isDie)
            return;
        this.hp -= damage;
        this.lbHP.string = this.hp.toString();
        this.blood.fillRange = this.hp / this.maxHp;
        this.node.getComponent(cc.Animation).play();
        if (this.hp <= 100)
            return;
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
            this.node.destroy();
        }
    };
    // checkAngle2(pos1, pos2) {
    //     let tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
    //     if (pos2.y == pos1.y) {
    //         if (pos2.x > pos1.x) return 0;
    //         if (pos2.x < pos1.x) return 180;
    //     }
    //     if (pos2.x == pos1.x) {
    //         if (pos2.y > pos1.y) return 90;
    //         if (pos2.y < pos1.y) return -90;
    //     }
    //     if (pos1.x == pos2.x && pos1.y == pos2.y) return 0;
    //     if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
    //         if (pos2.x > pos1.x && pos2.y > pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan));
    //         if (pos2.x > pos1.x && pos2.y < pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
    //         if (pos2.x < pos1.x && pos2.y > pos1.y) return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
    //         if (pos2.x < pos1.x && pos2.y < pos1.y) return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
    //     }
    // }
    NewClass.prototype.removeEnemy = function (idEnemy) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy._id == idEnemy)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.isAttack = false;
            if (this.isSKill == false) {
            }
        }
    };
    NewClass.prototype.removeEnemy2 = function (node) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy == node)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.node.stopAllActions();
            this.isAttack = false;
        }
    };
    NewClass.prototype.check1 = function () {
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.isAttack = false;
        }
    };
    NewClass.prototype.skill1 = function () {
    };
    NewClass.prototype.skill2 = function () {
    };
    NewClass.prototype.shoot = function () {
        if (this.isSKill)
            return;
        // if (this.isRun) return;
        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
            var bullet = 1;
            // this.anim.play("atk")
            if (this.isAD) {
                if (this.enemyArr[0] && this.enemyArr[0].position) {
                    var posE = this.enemyArr[0].position;
                    // this.node.scaleX = (this.node.x > posE.x) ? this.isLocalScale : -this.isLocalScale;
                    this.anim.node.angle = this.checkAngle(this.enemyArr[0]) - 90;
                    for (var i = 0; i < bullet; i++) {
                        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                            cc.audioEngine.play(this.atkSound, false, 0.5);
                            var bullet_1 = cc.instantiate(this.heroBullet);
                            var pos2 = posE.add(cc.v3(50 * i, 50 * i));
                            // let pos = (this.anim.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
                            var pos = this.anim.node.convertToWorldSpaceAR(cc.v3(0, 167));
                            pos = this.node.parent.convertToNodeSpaceAR(pos);
                            var angle = this.checkAngle(this.enemyArr[0]);
                            this.createBullet(bullet_1, angle, pos, pos2);
                        }
                    }
                }
            }
            else {
                if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                    this.isCountAtk++;
                    if (this.isCountAtk > 4) {
                        this.isCountAtk = 0;
                    }
                    if (!this.isHaveSkill) {
                        this.isCountAtk = 0;
                    }
                    cc.audioEngine.play(this.atkSound, false, 1);
                    var randomRate = Math.floor(Math.random() * 100) + 1;
                    var dame = this.damage;
                    this.node.scaleX = (this.node.x > this.enemyArr[0].x) ? this.isLocalScale : -this.isLocalScale;
                    if (this.isCountAtk == 4) {
                        this.skill1();
                        this.isCountAtk = 0;
                    }
                    else {
                        this.anim.play("atk");
                        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                            cc.audioEngine.play(this.atkSound, false, 0.5);
                            var bullet_2 = cc.instantiate(this.heroBullet);
                            var pos2 = this.enemyArr[0].position.add(cc.v3(50 * 0, 50 * 0));
                            var pos = (this.anim.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
                            var angle = this.checkAngle(this.enemyArr[0]);
                            if (this.node.name == "mechaman") {
                                // pos = this.node.position.add(cc.v3(187 - 69, 32 - 15))
                                pos = (this.node.scaleX < 0) ? this.node.position.add(cc.v3(200 - 69, 32 - 15)) : this.node.position.add(cc.v3(-200 + 69, 32 - 15));
                            }
                            this.createBullet(bullet_2, angle, pos, pos2);
                        }
                    }
                }
            }
        }
        else {
            this.isAttack = false;
            this.isSKill = false;
            this.idle();
        }
    };
    NewClass.prototype.checkTimePos = function (pos1, pos2) {
        var time = pos1.sub(pos2).mag() / 200;
        return time;
    };
    // moveToPos(){}
    NewClass.prototype.eventComplete = function (name) {
        switch (name) {
            case "atk":
                if (this.enemyArr.length == 0) {
                    this.idle();
                }
                else {
                    this.shoot();
                }
                if (this.enemyArr[0]) {
                    this.enemyArr[0].getComponent(enemy_1.default).attacked(this.damage);
                }
                break;
            case "skill1":
                this.isSKill = false;
                if (this.enemyArr.length == 0) {
                    this.idle();
                }
                else {
                    this.shoot();
                }
                if (this.enemyArr[0]) {
                    this.enemyArr[0].getComponent(enemy_1.default).attacked(this.damage);
                }
                break;
            case "skill2":
                this.isSKill = false;
                if (this.enemyArr.length == 0) {
                    this.idle();
                }
                else {
                    this.shoot();
                }
                break;
        }
    };
    NewClass.prototype.stopG = function () {
        this.unscheduleAllCallbacks();
        this.anim.unscheduleAllCallbacks();
        this.anim.play("idle");
        this.isRun = false;
    };
    NewClass.prototype.createBullet = function (bullet, angle, pos, pos2, speed) {
        if (speed === void 0) { speed = 0.35; }
        this.node.parent.addChild(bullet);
        if (this.node.name != "kazetsu") {
            bullet.angle = angle;
        }
        bullet.setPosition(pos);
        var param = 1500;
        var angle2 = this.checkAngle2(this.node.position, pos2);
        angle2 = cc.misc.degreesToRadians(angle2);
        var pos3 = this.node.position.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)));
        cc.tween(bullet).to(1.5, { position: pos3 }).call(function () {
            bullet.destroy();
            // if (bullet.getChildByName('explode')) {
            //     bullet.getChildByName('explode').active = true;
            // }
            // bullet.getChildByName('icon').active = false;
        }).start();
    };
    NewClass.prototype.checkAngle = function (targetEnemy) {
        if (this.enemyArr.length > 0 && this.enemyArr && this.enemyArr[0]) {
            var target = targetEnemy;
            var tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (this.node.x <= target.x) ? angle : angle + 180;
            return angle;
        }
    };
    NewClass.prototype.update = function (dt) {
        if (!this.isEnd) {
            if (this.moveDir && this.directionX && this.isRun && !this.isDie) {
                var newPos = this.node.position.add(this.moveDir.mul(this.speed / 60));
                // this.node.angle = this.checkAngle1(newPos);
                if (this.enemyArr.length == 0) {
                    this.node.getChildByName("icon").angle = this.checkAngle2(this.node.position, newPos) - 90;
                }
                this.node.setPosition(newPos);
                // if (this.moveDir && !this.isSKill) {
                //     if (this.moveDir.x > 0) {
                //         this.node.scaleX = -this.isLocalScale;
                //     }
                //     else {
                //         this.node.scaleX = this.isLocalScale;
                //     }
                // }
            }
            else {
                if (this.isMain == false && this.isRun) {
                    this.node.angle = this.checkAngle1(this.gamePlay.hero.position.add(this.localPos));
                    this.node.position = this.gamePlay.hero.position.add(this.localPos);
                }
            }
            // if (this.isRun == false) {
            //     if (this.enemyArr.length > 0 && this.enemyArr && !this.isDie) {
            //         let target = this.enemyArr[0];
            //     }
            // }
            // if (this.levelNode) {
            //     this.levelNode.scaleX = (this.node.scaleX > 0) ? 1 : -1;
            // }
            // if (this.localPos) {
            //     this.node.position = this.gamePlay.hero.position.add(this.localPos)
            // }
            // if (this.node.getChildByName("preNoti")) {
            //     this.node.getChildByName("preNoti").scaleX = (this.node.scaleX > 0) ? 1 : -1;
            // }
        }
    };
    NewClass.prototype.checkAngle1 = function (posTarget) {
        // let posHero = this.node.position
        // let pos2 = target.position.add(cc.v3(-this.camera.position.x,- this.camera.position.y))
        var pos2 = posTarget;
        // pos2 = target.parent.convertToWorldSpaceAR(pos2);
        // pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
        var pos = this.node.position;
        var tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0;
        var angle = Math.atan(tan) * (180 / (Math.PI));
        angle = (pos.x <= pos2.x) ? angle : angle + 180;
        // let param = 5
        // let angle2 = this.checkAngle2(posHero, pos2)
        // angle2 = cc.misc.degreesToRadians(angle2)
        // console.log()
        // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
        return angle;
    };
    NewClass.prototype.checkPos = function (posTarget) {
        // let target = this.target;
        var son = this.node.parent;
        var pos2 = posTarget;
    };
    NewClass.prototype.checkAngle2 = function (pos1, pos2) {
        var tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
        if (pos2.y == pos1.y) {
            if (pos2.x > pos1.x)
                return 0;
            if (pos2.x < pos1.x)
                return 180;
        }
        if (pos2.x == pos1.x) {
            if (pos2.y > pos1.y)
                return 90;
            if (pos2.y < pos1.y)
                return -90;
        }
        if (pos1.x == pos2.x && pos1.y == pos2.y)
            return 0;
        if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
            if (pos2.x > pos1.x && pos2.y > pos1.y)
                return cc.misc.radiansToDegrees(Math.atan(tan));
            if (pos2.x > pos1.x && pos2.y < pos1.y)
                return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
            if (pos2.x < pos1.x && pos2.y > pos1.y)
                return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
            if (pos2.x < pos1.x && pos2.y < pos1.y)
                return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
        }
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "bodyCollider", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "rangeCollider", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "heroBullet", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "blood", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "bloodSub", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "levelNode", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isHaveSkill", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "hp", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "countDown", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isAD", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isAuto", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "chopSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "skill1Sound", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preSkill1", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preSkill2", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbHP", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "isLocalScale", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isMain", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();