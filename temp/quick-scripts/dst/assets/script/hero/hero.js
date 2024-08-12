
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxoZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF5QztBQUN6QyxrQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtZ0JDO1FBaGdCRyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFzQixJQUFJLENBQUM7UUFHdkMsbUJBQWEsR0FBc0IsSUFBSSxDQUFDO1FBR3hDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsaUJBQVcsR0FBRyxJQUFJLENBQUE7UUFFbEIsUUFBRSxHQUFHLEdBQUcsQ0FBQztRQUVULFlBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWhCLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFYixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFFZCxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixnQkFBVSxHQUFHLElBQUks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LEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTt3QkFDYixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtxQkFDdEI7eUJBQ0k7d0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUMvQyxJQUFJLFFBQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDcEgsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlDLElBQUksSUFB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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuaW1wb3J0IEVuZW15IGZyb20gJy4uL2VuZW15J1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2hlcm8vaGVyb1wiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIGJvZHlDb2xsaWRlcjogY2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIHJhbmdlQ29sbGlkZXI6IGNjLkNpcmNsZUNvbGxpZGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaGVyb0J1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJsb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgYmxvb2RTdWI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVEYW1hZ2U6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsZXZlbE5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBpc0hhdmVTa2lsbCA9IHRydWVcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBocCA9IDUwMDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSA1MDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBjb3VudERvd24gPSAwLjQ7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaXNBRCA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzQXV0byA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBjaG9wU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBza2lsbDFTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVNraWxsMTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVNraWxsMjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJIUDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIGlzTG9jYWxTY2FsZSA9IDE7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaXNNYWluID0gZmFsc2VcblxuICAgIGlzU0tpbGwgPSBmYWxzZTtcbiAgICBtb3ZlRGlyID0gbnVsbDtcbiAgICBkaXJlY3Rpb25YID0gbnVsbDtcbiAgICBpc1J1biA9IGZhbHNlO1xuICAgIGlzRGllID0gZmFsc2U7XG4gICAgc3BlZWQgPSAzMDA7XG4gICAgbWF4SHAgPSAwO1xuICAgIGVuZW15QXJyID0gW107XG4gICAgaXNBdHRhY2sgPSBmYWxzZTtcbiAgICBpc0Nob3AgPSBmYWxzZTtcbiAgICBnYW1lUGxheSA9IG51bGw7XG4gICAgaXNDb3VudEF0ayA9IDA7XG4gICAgYXJyUG9zRm9sbG93ID0gW2NjLnYzKC0yMzgsIC0yNjEpLCBjYy52MygtNDMsIC0zNTEpLCBjYy52MygtMTcwLCAtNDA1KSwgY2MudjMoLTEwMSwgNjcpXTtcbiAgICBpc0NvdW50Rm9sbG93ID0gMDtcblxuICAgIGxvY2FsUG9zID0gY2MudjMoMCwgMCk7XG4gICAgYXJySGVybyA9IFtdO1xuICAgIGFyckZ4U2tpbGwgPSBbXVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm1heEhwID0gdGhpcy5ocDtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudCgnR2FtZScpO1xuICAgICAgICAvLyB0aGlzLmFyckhlcm8gPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoJ0dhbWUyMScpLmFyckhlcm9cbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NLaWxsKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzUnVuICYmICF0aGlzLmlzRGllKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaXNSdW4gPSB0cnVlO1xuICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJtb3ZlXCIpXG4gICAgICAgICAgICAvLyB0aGlzLmlzQXR0YWNrID0gZmFsc2U7XG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIGlkbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1J1biAmJiAhdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJpZGxlXCIpXG4gICAgICAgICAgICB0aGlzLmlzU0tpbGwgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29saWRlcigpIHtcbiAgICAgICAgdGhpcy5ib2R5Q29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmFuZ2VDb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaXNFbmQgPSBmYWxzZVxuICAgIG9mZkNvbGlkZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMuYm9keUNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yYW5nZUNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXG4gICAgICAgIHRoaXMuaXNBdXRvID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSdW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaHBCYXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pZGxlKCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NLaWxsKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5pc0F0dGFjayA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTS2lsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheShcImlkbGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc2hvd05vdGkoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByZU5vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgfVxuICAgIGF0dGFjaygpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzUnVuLHRoaXMuZW5lbXlBcnIubGVuZ3RoKVxuICAgICAgICAvLyB0aGlzLmVuZW15QXJyLnB1c2goZW5lbXkpXG5cbiAgICAgICAgLy8gaWYgKHRoaXMuaXNSdW4pIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcblxuICAgICAgICAgICAgICAgIH0sIDAuMylcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFjayA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXREZWZhdWx0KCkge1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5pc0F0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWRsZSgpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmeEFwcGVhclwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibmFwZGFuXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNyZWF0ZUFtbW8odGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MygtNTAsIDUwKSkpXG5cbiAgICAgICAgfSwgMC4yKVxuICAgIH1cbiAgICBtb3ZlVG9Qb3MocG9zLCB0aW1lKSB7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKHRpbWUsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIG1vdmVCeVBvcyhwb3MsIHRpbWUpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJtb3ZlXCIpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkodGltZSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJpZGxlXCIpXG4gICAgICAgICAgICB0aGlzLm9uQ29saWRlcigpXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RpZSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xuICAgICAgICB0aGlzLmxiSFAuc3RyaW5nID0gdGhpcy5ocC50b1N0cmluZygpXG4gICAgICAgIHRoaXMuYmxvb2QuZmlsbFJhbmdlID0gdGhpcy5ocCAvIHRoaXMubWF4SHA7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICBpZiAodGhpcy5ocCA8PSAxMDApIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5ocCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJvZHlDb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW0udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrQW5nbGUyKHBvczEsIHBvczIpIHtcbiAgICAvLyAgICAgbGV0IHRhbiA9IE1hdGguYWJzKHBvczIueSAtIHBvczEueSkgLyBNYXRoLmFicyhwb3MyLnggLSBwb3MxLngpO1xuICAgIC8vICAgICBpZiAocG9zMi55ID09IHBvczEueSkge1xuICAgIC8vICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCkgcmV0dXJuIDA7XG4gICAgLy8gICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54KSByZXR1cm4gMTgwO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgaWYgKHBvczIueCA9PSBwb3MxLngpIHtcbiAgICAvLyAgICAgICAgIGlmIChwb3MyLnkgPiBwb3MxLnkpIHJldHVybiA5MDtcbiAgICAvLyAgICAgICAgIGlmIChwb3MyLnkgPCBwb3MxLnkpIHJldHVybiAtOTA7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHBvczEueCA9PSBwb3MyLnggJiYgcG9zMS55ID09IHBvczIueSkgcmV0dXJuIDA7XG4gICAgLy8gICAgIGlmIChwb3MxLnggIT09IHBvczIueCAmJiBwb3MxLnkgIT09IHBvczIueSkge1xuICAgIC8vICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPiBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpO1xuICAgIC8vICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPCBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpICogLTE7XG4gICAgLy8gICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54ICYmIHBvczIueSA+IHBvczEueSkgcmV0dXJuICgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAvLyAgICAgICAgIGlmIChwb3MyLnggPCBwb3MxLnggJiYgcG9zMi55IDwgcG9zMS55KSByZXR1cm4gLSgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICByZW1vdmVFbmVteShpZEVuZW15KSB7XG4gICAgICAgIHRoaXMuZW5lbXlBcnIuZm9yRWFjaCgoZW5lbXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5lbXkuX2lkID09IGlkRW5lbXkpIHRoaXMuZW5lbXlBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNrID0gZmFsc2VcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU0tpbGwgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUVuZW15Mihub2RlKSB7XG4gICAgICAgIHRoaXMuZW5lbXlBcnIuZm9yRWFjaCgoZW5lbXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5lbXkgPT0gbm9kZSkgdGhpcy5lbmVteUFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNrID0gZmFsc2U7XG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrMSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNrID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBza2lsbDEoKSB7XG5cbiAgICB9XG4gICAgc2tpbGwyKCkge1xuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NLaWxsKSByZXR1cm47XG4gICAgICAgIC8vIGlmICh0aGlzLmlzUnVuKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IDE7XG4gICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheShcImF0a1wiKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBRCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyWzBdICYmIHRoaXMuZW5lbXlBcnJbMF0ucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0UgPSB0aGlzLmVuZW15QXJyWzBdLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnggPiBwb3NFLngpID8gdGhpcy5pc0xvY2FsU2NhbGUgOiAtdGhpcy5pc0xvY2FsU2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5ub2RlLmFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRoaXMuZW5lbXlBcnJbMF0pIC0gOTA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVsbGV0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdGtTb3VuZCwgZmFsc2UsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVyb0J1bGxldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSBwb3NFLmFkZChjYy52Myg1MCAqIGksIDUwICogaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBwb3MgPSAodGhpcy5hbmltLm5vZGUuc2NhbGVYIDwgMCkgPyB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSkgOiB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYW5pbS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAxNjcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY2hlY2tBbmdsZSh0aGlzLmVuZW15QXJyWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ291bnRBdGsrK1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50QXRrID4gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50QXRrID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0hhdmVTa2lsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50QXRrID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdGtTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tUmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGFtZSA9IHRoaXMuZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnggPiB0aGlzLmVuZW15QXJyWzBdLngpID8gdGhpcy5pc0xvY2FsU2NhbGUgOiAtdGhpcy5pc0xvY2FsU2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRBdGsgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbDEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50QXRrID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdGtTb3VuZCwgZmFsc2UsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVyb0J1bGxldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLmVuZW15QXJyWzBdLnBvc2l0aW9uLmFkZChjYy52Myg1MCAqIDAsIDUwICogMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSAodGhpcy5hbmltLm5vZGUuc2NhbGVYIDwgMCkgPyB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSkgOiB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRoaXMuZW5lbXlBcnJbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIm1lY2hhbWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MygxODcgLSA2OSwgMzIgLSAxNSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9ICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkgPyB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDIwMCAtIDY5LCAzMiAtIDE1KSkgOiB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKC0yMDAgKyA2OSwgMzIgLSAxNSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNBdHRhY2sgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc1NLaWxsID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tUaW1lUG9zKHBvczEsIHBvczIpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBwb3MxLnN1Yihwb3MyKS5tYWcoKSAvIDIwMDtcbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuICAgIC8vIG1vdmVUb1Bvcygpe31cblxuICAgIGV2ZW50Q29tcGxldGUobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhdGtcIjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15QXJyWzBdLmdldENvbXBvbmVudChFbmVteSkuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmlzU0tpbGwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlBcnJbMF0uZ2V0Q29tcG9uZW50KEVuZW15KS5hdHRhY2tlZCh0aGlzLmRhbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTS2lsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcEcoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXG4gICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJpZGxlXCIpXG4gICAgICAgIHRoaXMuaXNSdW4gPSBmYWxzZVxuICAgIH1cblxuICAgIGNyZWF0ZUJ1bGxldChidWxsZXQsIGFuZ2xlLCBwb3MsIHBvczIsIHNwZWVkID0gMC4zNSkge1xuXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lICE9IFwia2F6ZXRzdVwiKSB7XG4gICAgICAgICAgICBidWxsZXQuYW5nbGUgPSBhbmdsZVxuXG4gICAgICAgIH1cblxuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgbGV0IHBhcmFtID0gMTUwMDtcbiAgICAgICAgbGV0IGFuZ2xlMiA9IHRoaXMuY2hlY2tBbmdsZTIodGhpcy5ub2RlLnBvc2l0aW9uLCBwb3MyKVxuICAgICAgICBhbmdsZTIgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUyKVxuICAgICAgICBsZXQgcG9zMyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMocGFyYW0gKiBNYXRoLmNvcyhhbmdsZTIpLCBwYXJhbSAqIE1hdGguc2luKGFuZ2xlMikpKVxuXG4gICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkudG8oMS41LCB7IHBvc2l0aW9uOiBwb3MzIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKVxuICAgICAgICAgICAgLy8gaWYgKGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpKSB7XG4gICAgICAgICAgICAvLyAgICAgYnVsbGV0LmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGNoZWNrQW5nbGUodGFyZ2V0RW5lbXkpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCAmJiB0aGlzLmVuZW15QXJyICYmIHRoaXMuZW5lbXlBcnJbMF0pIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0YXJnZXRFbmVteTtcbiAgICAgICAgICAgIGxldCB0YW4gPSAodGFyZ2V0LnggLSB0aGlzLm5vZGUueCAhPT0gMCkgPyAodGFyZ2V0LnkgLSB0aGlzLm5vZGUueSAtIDMwKSAvICh0YXJnZXQueCAtIHRoaXMubm9kZS54KSA6IDBcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbih0YW4pICogKDE4MCAvIChNYXRoLlBJKSk7XG4gICAgICAgICAgICBhbmdsZSA9ICh0aGlzLm5vZGUueCA8PSB0YXJnZXQueCkgPyBhbmdsZSA6IGFuZ2xlICsgMTgwXG4gICAgICAgICAgICByZXR1cm4gYW5nbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuZCkge1xuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5kaXJlY3Rpb25YICYmIHRoaXMuaXNSdW4gJiYgIXRoaXMuaXNEaWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh0aGlzLm1vdmVEaXIubXVsKHRoaXMuc3BlZWQgLyA2MCkpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuY2hlY2tBbmdsZTEobmV3UG9zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlMih0aGlzLm5vZGUucG9zaXRpb24sIG5ld1BvcykgLSA5MDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLm1vdmVEaXIgJiYgIXRoaXMuaXNTS2lsbCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5tb3ZlRGlyLnggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLXRoaXMuaXNMb2NhbFNjYWxlO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuaXNMb2NhbFNjYWxlO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01haW4gPT0gZmFsc2UgJiYgdGhpcy5pc1J1bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSB0aGlzLmNoZWNrQW5nbGUxKHRoaXMuZ2FtZVBsYXkuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5sb2NhbFBvcykpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuZ2FtZVBsYXkuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5sb2NhbFBvcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzUnVuID09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCAmJiB0aGlzLmVuZW15QXJyICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmVuZW15QXJyWzBdO1xuXG5cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5sZXZlbE5vZGUpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxldmVsTm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnNjYWxlWCA+IDApID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5sb2NhbFBvcykge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuZ2FtZVBsYXkuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5sb2NhbFBvcylcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcmVOb3RpXCIpKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJlTm90aVwiKS5zY2FsZVggPSAodGhpcy5ub2RlLnNjYWxlWCA+IDApID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgY2hlY2tBbmdsZTEocG9zVGFyZ2V0KSB7XG4gICAgICAgIC8vIGxldCBwb3NIZXJvID0gdGhpcy5ub2RlLnBvc2l0aW9uXG4gICAgICAgIC8vIGxldCBwb3MyID0gdGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygtdGhpcy5jYW1lcmEucG9zaXRpb24ueCwtIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkpKVxuICAgICAgICBsZXQgcG9zMiA9IHBvc1RhcmdldFxuXG4gICAgICAgIC8vIHBvczIgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MyKTtcbiAgICAgICAgLy8gcG9zMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMik7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cbiAgICAgICAgbGV0IHRhbiA9IChwb3MyLnggLSBwb3MueCAhPT0gMCkgPyAocG9zMi55IC0gcG9zLnkgLSAzMCkgLyAocG9zMi54IC0gcG9zLngpIDogMFxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4odGFuKSAqICgxODAgLyAoTWF0aC5QSSkpO1xuICAgICAgICBhbmdsZSA9IChwb3MueCA8PSBwb3MyLngpID8gYW5nbGUgOiBhbmdsZSArIDE4MDtcbiAgICAgICAgLy8gbGV0IHBhcmFtID0gNVxuICAgICAgICAvLyBsZXQgYW5nbGUyID0gdGhpcy5jaGVja0FuZ2xlMihwb3NIZXJvLCBwb3MyKVxuICAgICAgICAvLyBhbmdsZTIgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUyKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWCA9IChwb3MueCA8PSB0YXJnZXQueCkgPyAwLjUgOiAtMC41O1xuICAgICAgICByZXR1cm4gYW5nbGU7XG5cblxuXG5cbiAgICB9XG4gICAgY2hlY2tQb3MocG9zVGFyZ2V0KSB7XG4gICAgICAgIC8vIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgbGV0IHNvbiA9IHRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgbGV0IHBvczIgPSBwb3NUYXJnZXRcblxuXG4gICAgfVxuICAgIGNoZWNrQW5nbGUyKHBvczEsIHBvczIpIHtcbiAgICAgICAgbGV0IHRhbiA9IE1hdGguYWJzKHBvczIueSAtIHBvczEueSkgLyBNYXRoLmFicyhwb3MyLnggLSBwb3MxLngpO1xuICAgICAgICBpZiAocG9zMi55ID09IHBvczEueSkge1xuICAgICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCkgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54KSByZXR1cm4gMTgwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvczIueCA9PSBwb3MxLngpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnkgPiBwb3MxLnkpIHJldHVybiA5MDtcbiAgICAgICAgICAgIGlmIChwb3MyLnkgPCBwb3MxLnkpIHJldHVybiAtOTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvczEueCA9PSBwb3MyLnggJiYgcG9zMS55ID09IHBvczIueSkgcmV0dXJuIDA7XG4gICAgICAgIGlmIChwb3MxLnggIT09IHBvczIueCAmJiBwb3MxLnkgIT09IHBvczIueSkge1xuICAgICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPiBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpO1xuICAgICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPCBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpICogLTE7XG4gICAgICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54ICYmIHBvczIueSA+IHBvczEueSkgcmV0dXJuICgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPCBwb3MxLnggJiYgcG9zMi55IDwgcG9zMS55KSByZXR1cm4gLSgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==