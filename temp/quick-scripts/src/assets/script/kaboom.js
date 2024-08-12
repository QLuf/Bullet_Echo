"use strict";
cc._RF.push(module, '5cf1bFirdpNe6szzD0hTpXk', 'kaboom');
// script/kaboom.ts

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
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodySkeleton = null;
        _this.bodyCollider = null;
        _this.rangeCollider = null;
        _this.heroBullet = null;
        _this.effect = null;
        _this.kameBeam = null;
        // @property(cc.Prefab)
        // heroKnife: cc.Prefab = null;
        // @property(cc.Prefab)
        // heroArrow: cc.Prefab = null;
        // @property(cc.Prefab)
        // fireBall: cc.Prefab = null;
        _this.blood = null;
        _this.hp = 500;
        _this.damage = 50;
        _this.atkSound = null;
        _this.moveDir = null;
        _this.directionX = null;
        _this.isRun = false;
        _this.isDie = false;
        _this.speed = 250;
        _this.maxHp = 0;
        _this.enemyArr = [];
        _this.isAttack = false;
        _this.gamePlay = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.maxHp = this.hp;
        this.gamePlay = cc.Canvas.instance.node.getComponent('GamePlay_2');
    };
    NewClass.prototype.run = function () {
        if (!this.isRun && !this.isDie) {
            this.isRun = true;
            this.bodySkeleton.setAnimation(0, 'fly', true);
            this.kameBeam.active = true;
        }
    };
    NewClass.prototype.idle = function () {
        if (!this.isRun && !this.isDie) {
            this.bodySkeleton.setAnimation(0, 'fly idle', true);
            this.kameBeam.active = false;
        }
    };
    NewClass.prototype.stop = function () {
        if (!this.isDie) {
            this.isRun = false;
            this.bodySkeleton.setAnimation(0, 'idle', true);
            this.kameBeam.active = false;
        }
    };
    NewClass.prototype.attack = function () {
        var _this = this;
        if (this.enemyArr.length > 0) {
            if (!this.isAttack) {
                this.isAttack = true;
                this.bodySkeleton.schedule(function () {
                    //ss2 skill Flame
                    _this.Flame();
                }, 2, cc.macro.REPEAT_FOREVER, 0);
            }
        }
    };
    NewClass.prototype.attacked = function (damage) {
        if (this.isDie)
            return;
        this.hp -= damage;
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.node.getChildByName('holyRing').active = false;
            this.bodySkeleton.setAnimation(0, 'die', false);
            this.unscheduleAllCallbacks();
            this.bodySkeleton.unscheduleAllCallbacks();
            this.changeAnimation();
            this.gamePlay.joyStick.getComponent('Joystick').touchEndEvent();
            this.gamePlay.joyStick.active = false;
            // cc.Canvas.instance.node.emit(Constant.EVENT.END_GAME, false);
        }
        this.blood.fillRange = this.hp / this.maxHp;
    };
    NewClass.prototype.removeEnemy = function (idEnemy) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy._id == idEnemy)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.idle();
        }
    };
    NewClass.prototype.Flame = function () {
        this.showEffect("flame_2", this.node);
        if (this.enemyArr.length > 0) {
            for (var j = 0; j < this.enemyArr.length; j++) {
                cc.audioEngine.play(this.atkSound, false, 0.5);
                this.showEffect("flame_3", this.enemyArr[j]);
            }
        }
    };
    NewClass.prototype.showEffect = function (name, parent) {
        // if (this.isEnd) return;
        var effect = cc.instantiate(this.effect);
        parent.addChild(effect);
        effect.getComponent("effect").play(name);
        effect.zIndex = 100;
        return effect;
    };
    // shootKnife() {
    //     this.bodySkeleton.schedule(() => {
    //         for (let i = 0; i < 1; i++) {
    //             if (this.enemyArr.length > 1) {
    //                 let bullet = cc.instantiate(this.heroKnife);
    //                 let pos2 = this.enemyArr[1].position.add(cc.v3(50 * i, 50 * i));
    //                 let pos = (this.bodySkeleton.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
    //                 let angle = this.checkAngle(this.enemyArr[1])
    //                 this.createBullet(bullet, angle, pos, pos2,0.35)
    //             }
    //         }
    //     }, 0.25, cc.macro.REPEAT_FOREVER, 0.5)
    // }
    // skillFireBall() {
    //     this.schedule(() => {
    //         for (let i = 0; i < 1; i++) {
    //             if (this.enemyArr.length > 1) {
    //                 let bullet = cc.instantiate(this.fireBall);
    //                 bullet.zIndex = 5;
    //                 bullet.scaleX = (this.enemyArr[1].position.x < 0) ? 0.1 : -0.1
    //                 let pos2 = this.enemyArr[1].position;
    //                 let pos = this.enemyArr[1].position.add(cc.v3((this.enemyArr[1].position.x < 0) ? 500 : -500, (this.enemyArr[1].position.y < 0) ? 500 : 500))
    //                 let angle = 0
    //                 this.createBullet(bullet, angle, pos, pos2, 0.75)
    //             }
    //         }
    //     }, 0.4, cc.macro.REPEAT_FOREVER, 0);
    // }
    // skillKnife(pos) {
    //     for (let i = 0; i < 4; i++) {
    //         let bullet = cc.instantiate(this.heroKnife);
    //         let angle = -135 + 90 * i
    //         let angleR = angle * (Math.PI) / 180
    //         // bullet.angle = angle * 180 / Math.PI + 90;
    //         bullet.getComponent('bullet').isKnife = false;
    //         bullet.getComponent(cc.CircleCollider).enabled = false;
    //         let param = (bullet.scaleX < 0) ? -1000 : 1000
    //         let pos2 = pos.add(cc.v3(param * Math.cos(angleR), param * Math.sin(angleR)))
    //         this.scheduleOnce(() => {
    //             bullet.getComponent(cc.CircleCollider).enabled = true;
    //         }, 0.15)
    //         this.createBullet(bullet, angle, pos, pos2, 1);
    //     }
    // }
    // skillIceArrow() {
    //     this.schedule(() => {
    //         for (let i = 0; i < 10; i++) {
    //             let bullet = cc.instantiate(this.heroArrow);
    //             let angleR = (-Math.PI) + (Math.PI * i / 5);
    //             let pos = this.node.position.add(cc.v3(0, 30));
    //             let angle = angleR * 180 / Math.PI
    //             let param = (bullet.scaleX < 0) ? -1000 : 1000
    //             let pos2 = pos.add(cc.v3(param * Math.cos(angleR), param * Math.sin(angleR)))
    //             this.createBullet(bullet, angle, pos, pos2, 1);
    //         }
    //     }, 1, cc.macro.REPEAT_FOREVER, 1);
    // }
    NewClass.prototype.createBullet = function (bullet, angle, pos, pos2, speed) {
        var _this = this;
        if (speed === void 0) { speed = 0.25; }
        this.node.parent.addChild(bullet);
        // bullet.getComponent('bulletHeroListener').setDame(this.damage);
        bullet.angle = angle;
        bullet.setPosition(pos);
        // console.log(angle);
        var param = (this.bodySkeleton.node.scaleX < 0) ? -1000 : 1000;
        this.scheduleOnce(function () {
            bullet.getChildByName('trail1').active = true;
        }, 0.05);
        cc.tween(bullet).to(speed, { position: pos2 }).call(function () {
            bullet.getChildByName('explode').active = true;
            bullet.getChildByName('icon').active = false;
            _this.scheduleOnce(function () {
                bullet.destroy();
            }, 0.12);
        }).start();
    };
    NewClass.prototype.checkAngle = function (targetEnemy) {
        if (this.enemyArr.length > 0 && this.enemyArr) {
            var target = targetEnemy;
            var tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (this.node.x <= target.x) ? angle : angle + 180;
            return angle;
        }
    };
    NewClass.prototype.changeAnimation = function () {
        var _this = this;
        this.bodySkeleton.setCompleteListener(function (track) {
            var anim = (track.animation) ? track.animation.name : '';
            if (anim == 'die') {
                _this.node.active = false;
                cc.Canvas.instance.node.emit(Constant_1.Constant.EVENT.END_GAME, false);
            }
        });
    };
    NewClass.prototype.update = function (dt) {
        if (this.moveDir && this.directionX && this.isRun && !this.isDie) {
            var newPos = this.node.position.add(this.moveDir.mul(this.speed / 60));
            this.node.setPosition(newPos.clampf(cc.v3(-700, -750), cc.v3(700, 750)));
        }
        if (this.enemyArr.length > 0 && this.enemyArr && !this.isDie) {
            var target = this.enemyArr[0];
            if (target.x >= this.node.x + 20) {
                this.bodySkeleton.node.scaleX = -0.1;
            }
            else {
                this.bodySkeleton.node.scaleX = 0.1;
            }
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "bodySkeleton", void 0);
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
        property(cc.Prefab)
    ], NewClass.prototype, "effect", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kameBeam", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "blood", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "hp", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();