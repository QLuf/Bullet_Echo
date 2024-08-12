"use strict";
cc._RF.push(module, 'ee894rLZOtG451paY6xID8B', 'enemy');
// script/enemy.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.bodyCollider = null;
        _this.bodyPhysicsCollider = null;
        _this.blood = null;
        _this.bulletPrefab = null;
        _this.bulletPos = cc.v3(0, 0, 0);
        _this.isAD = false;
        _this.isBoss = false;
        _this.timeSpeed = 0;
        _this.hp = 0;
        _this.timeBullet = 400;
        _this.damage = 0;
        _this.tag = 0;
        _this.lbHP = null;
        _this.isMeet = false;
        _this.isDie = false;
        _this.isFreeze = false;
        _this.maxHp = 0;
        _this.gamePlay = null;
        _this.isSkill = false;
        _this.arrHero = [];
        _this.isAttack = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
        // this.node.zIndex = 2;
        this.maxHp = this.hp;
        this.isFreeze = true;
        if (this.tag == 1) {
            this.moveIdle1();
        }
        if (this.tag == 2) {
            this.moveIdle2();
        }
    };
    NewClass.prototype.run = function () {
        // this.anim.play("move")
    };
    NewClass.prototype.moveIdle1 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(-166, 759) }).call(function () {
            _this.anim.node.angle = -90;
        }).to(1, { position: cc.v3(205, 700) }).call(function () {
            _this.anim.node.angle = 180;
        }).delay(0.8).call(function () {
            _this.anim.node.angle = 90;
        }).to(1, { position: cc.v3(-166, 759) }).delay(1)).start();
    };
    NewClass.prototype.moveIdle2 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(-705.211, 497.407) }).call(function () {
            _this.anim.node.angle = 180;
        }).to(1, { position: cc.v3(-654.008, 67.024) }).call(function () {
            _this.anim.node.angle = 180;
        }).delay(0.8).call(function () {
            _this.anim.node.angle = 0;
        }).to(1, { position: cc.v3(-705.211, 497.407) }).delay(1)).start();
    };
    NewClass.prototype.attacked = function (damage) {
        var _this = this;
        if (this.isDie)
            return;
        this.node.getComponent(cc.Animation).play();
        this.hp -= damage;
        this.lbHP.string = this.hp.toString();
        if (this.gamePlay != null) {
            this.gamePlay.createDamage(this.node.position);
            if (this.isBoss) {
                this.gamePlay.createDamageBoss(this.node.position);
                this.node.getComponent(cc.Animation).play();
            }
        }
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
            // this.gamePlay.heroComp.removeEnemy2(this.node);
            // if (this.gamePlay != null) {
            //     if (this.isBoss) {
            //         this.gamePlay.bossDie(this.node.position)
            //     }
            //     else{
            this.gamePlay.countDie(this.node.position);
            //     }
            // }
            // this.gamePlay.createMeat(this.node.position);
            this.node.active = false;
            this.scheduleOnce(function () {
                _this.node.active = false;
            }, 0.3);
        }
        this.blood.fillRange = this.hp / this.maxHp;
    };
    NewClass.prototype.completeEvent = function (type) {
    };
    NewClass.prototype.addEvent = function (type) {
    };
    NewClass.prototype.checkAngle = function (targetEnemy) {
        var target = targetEnemy;
        var tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0;
        var angle = Math.atan(tan) * (180 / (Math.PI));
        angle = (this.node.x <= target.x) ? angle : angle + 180;
        return angle;
    };
    NewClass.prototype.attack = function (target) {
        var _this = this;
        if (this.isAttack)
            return;
        this.isMeet = true;
        this.isAttack = false;
        if (this.arrHero[0]) {
            target = this.arrHero[0];
        }
        var targetComp = target.getComponent('hero');
        if (this.isAD) {
            // this.anim.play("atk")
            this.anim.scheduleOnce(function () {
                _this.anim.node.angle = _this.checkAngle(target) - 90;
                _this.createBullet(target, targetComp);
            }, 0.4);
            this.anim.schedule(function () {
                // this.anim.play("atk")
                _this.anim.scheduleOnce(function () {
                    _this.anim.node.angle = _this.checkAngle(target) - 90;
                    _this.createBullet(target, targetComp);
                }, 0.4);
            }, 1, cc.macro.REPEAT_FOREVER, 0.5);
        }
        else {
            // this.anim.play("atk")
            this.anim.scheduleOnce(function () {
                targetComp.attacked(_this.damage);
            }, 0.3);
            this.anim.schedule(function () {
                // this.anim.play("atk")
                _this.anim.scheduleOnce(function () {
                    targetComp.attacked(_this.damage);
                }, 0.3);
            }, 0.8, cc.macro.REPEAT_FOREVER, 0.5);
        }
        // this.anim.schedule(() => {
        //     if (this.isMeet) {
        //         targetComp.attacked(this.damage);
        //     }
        // }, 1, cc.macro.REPEAT_FOREVER, 0.5);
    };
    NewClass.prototype.createBullet = function (target, targetComp) {
        var _this = this;
        var bullet = cc.instantiate(this.bulletPrefab);
        this.node.parent.addChild(bullet);
        bullet.zIndex = 10;
        bullet.opacity = 0;
        var pos = this.anim.node.convertToWorldSpaceAR(cc.v3(0, 167));
        pos = this.node.parent.convertToNodeSpaceAR(pos);
        // let bulletPos = (this.node.scaleX > 0) ? this.bulletPos : cc.v3(-this.bulletPos.x, this.bulletPos.y)
        bullet.position = pos;
        var time = this.checkTimePos(bullet.position, target.position.add(cc.v3(0, 30)));
        var param = 1500;
        var angle2 = this.checkAngle2(this.node.position, target.position);
        angle2 = cc.misc.degreesToRadians(angle2);
        var pos3 = this.node.position.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)));
        cc.tween(bullet).set({ opacity: 255 }).call(function () { bullet.getChildByName("trial").active = true; }).to(1, { position: pos3 }).call(function () {
            targetComp.attacked(_this.damage);
            bullet.getChildByName("explode").active = true;
            bullet.destroy();
        }).start();
    };
    NewClass.prototype.checkTimePos = function (pos1, pos2) {
        var time = pos1.sub(pos2).mag() / this.timeBullet;
        return time;
    };
    NewClass.prototype.exitTarget = function (idHero) {
        var _this = this;
        this.arrHero.forEach(function (enemy, index) {
            if (enemy._id == idHero)
                _this.arrHero.splice(index, 1);
        });
        // this.isTarget = false
        if (this.arrHero.length == 0) {
            this.isMeet = false;
            this.isSkill = false;
            // this.anim.play("move");
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.freeze = function () {
        var _this = this;
        this.isFreeze = true;
        this.node.getChildByName('snow').active = true;
        this.bodyPhysicsCollider.enabled = false;
        this.node.zIndex = 1;
        this.scheduleOnce(function () {
            _this.isFreeze = false;
            _this.bodyPhysicsCollider.enabled = true;
            _this.node.getChildByName('snow').active = false;
            _this.node.zIndex = 2;
        }, 2);
    };
    NewClass.prototype.onPause = function (isPause) {
        if (!this.isFreeze) {
            // this.bodySkeleton.paused = isPause;
        }
        this.bodyCollider.enabled = !isPause;
        // this.bodySkeleton.unscheduleAllCallbacks();
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
    NewClass.prototype.update = function (dt) {
        if (!this.isFreeze && !this.gamePlay.isPauseGame && this.isMeet == false && !this.isDie) {
            var hero = this.gamePlay.hero;
            // let localPos = this.node.position
            // this.node.scaleX = (this.node.x <= hero.x + 10) ? -1 : 1;
            var distance = Math.sqrt(Math.pow((this.node.x - hero.x), 2) + Math.pow((this.node.y - hero.y), 2));
            this.node.x = this.node.x + (dt * ((this.node.x < hero.x) ? 1 : -1)) * (Math.abs(this.node.x - hero.x) * 10 / this.timeSpeed);
            this.node.y = this.node.y + (dt * ((this.node.y < hero.y) ? 1 : -1)) * (Math.abs(this.node.y - hero.y) * 10 / this.timeSpeed);
            this.node.getChildByName("icon").angle = this.checkAngle2(this.node.position, this.gamePlay.hero.position) - 90;
        }
        if (this.gamePlay.isPauseGame) {
            this.onPause(true);
        }
        if (!this.gamePlay.isPauseGame) {
            this.onPause(false);
        }
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "bodyCollider", void 0);
    __decorate([
        property(cc.PhysicsCircleCollider)
    ], NewClass.prototype, "bodyPhysicsCollider", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "blood", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bulletPrefab", void 0);
    __decorate([
        property(cc.Vec3)
    ], NewClass.prototype, "bulletPos", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isAD", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isBoss", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "timeSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "hp", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "timeBullet", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbHP", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();