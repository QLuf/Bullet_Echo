
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/kaboom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxrYWJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ1FDO1FBN1BHLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUdqQyxrQkFBWSxHQUFzQixJQUFJLENBQUM7UUFHdkMsbUJBQWEsR0FBc0IsSUFBSSxDQUFDO1FBR3hDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6Qix1QkFBdUI7UUFDdkIsK0JBQStCO1FBRS9CLHVCQUF1QjtRQUN2QiwrQkFBK0I7UUFFL0IsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUc5QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFFBQUUsR0FBRyxHQUFHLENBQUM7UUFHVCxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBR1osY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLFdBQUssR0FBRyxLQUFLLENBQUM7UUFFZCxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVaLFdBQUssR0FBRyxDQUFDLENBQUM7UUFFVixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXVNcEIsQ0FBQztJQXBNRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7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O2FBQ3ZDO1NBQ0o7SUFDTCxDQUFDO0lBNVBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ1c7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQztrREFDVztJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO21EQUNZO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBWXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDWjtJQUdUO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ1Q7SUFHWjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBdkNiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnUTVCO0lBQUQsZUFBQztDQWhRRCxBQWdRQyxDQWhRcUMsRUFBRSxDQUFDLFNBQVMsR0FnUWpEO2tCQWhRb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGJvZHlTa2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIGJvZHlDb2xsaWRlcjogY2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIHJhbmdlQ29sbGlkZXI6IGNjLkNpcmNsZUNvbGxpZGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaGVyb0J1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZWZmZWN0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2FtZUJlYW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICAvLyBoZXJvS25pZmU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIC8vIGhlcm9BcnJvdzogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gZmlyZUJhbGw6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJsb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgaHAgPSA1MDA7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSA1MDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBtb3ZlRGlyID0gbnVsbDtcblxuICAgIGRpcmVjdGlvblggPSBudWxsO1xuXG4gICAgaXNSdW4gPSBmYWxzZTtcblxuICAgIGlzRGllID0gZmFsc2U7XG5cbiAgICBzcGVlZCA9IDI1MDtcblxuICAgIG1heEhwID0gMDtcblxuICAgIGVuZW15QXJyID0gW107XG5cbiAgICBpc0F0dGFjayA9IGZhbHNlO1xuXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubWF4SHAgPSB0aGlzLmhwO1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KCdHYW1lUGxheV8yJyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVuICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICB0aGlzLmlzUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm9keVNrZWxldG9uLnNldEFuaW1hdGlvbigwLCAnZmx5JywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmthbWVCZWFtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWRsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVuICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbi5zZXRBbmltYXRpb24oMCwgJ2ZseSBpZGxlJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmthbWVCZWFtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgdGhpcy5pc1J1biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsICdpZGxlJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmthbWVCZWFtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24uc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL3NzMiBza2lsbCBGbGFtZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZsYW1lKCk7XG4gICAgICAgICAgICAgICAgfSwgMiwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RpZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZTtcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5ocCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJvZHlDb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdob2x5UmluZycpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsICdkaWUnLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuYm9keVNrZWxldG9uLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmpveVN0aWNrLmdldENvbXBvbmVudCgnSm95c3RpY2snKS50b3VjaEVuZEV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmpveVN0aWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5FTkRfR0FNRSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvb2QuZmlsbFJhbmdlID0gdGhpcy5ocCAvIHRoaXMubWF4SHA7XG4gICAgfVxuICAgIHJlbW92ZUVuZW15KGlkRW5lbXkpIHtcbiAgICAgICAgdGhpcy5lbmVteUFyci5mb3JFYWNoKChlbmVteSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbmVteS5faWQgPT0gaWRFbmVteSkgdGhpcy5lbmVteUFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5pZGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBGbGFtZSgpIHtcbiAgICAgICAgdGhpcy5zaG93RWZmZWN0KFwiZmxhbWVfMlwiLCB0aGlzLm5vZGUpO1xuICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZW5lbXlBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXRrU291bmQsIGZhbHNlLCAwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdChcImZsYW1lXzNcIiwgdGhpcy5lbmVteUFycltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93RWZmZWN0KG5hbWUsIHBhcmVudCkge1xuICAgICAgICAvLyBpZiAodGhpcy5pc0VuZCkgcmV0dXJuO1xuICAgICAgICBsZXQgZWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lZmZlY3QpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcbiAgICAgICAgZWZmZWN0LmdldENvbXBvbmVudChcImVmZmVjdFwiKS5wbGF5KG5hbWUpO1xuICAgICAgICBlZmZlY3QuekluZGV4ID0gMTAwO1xuICAgICAgICByZXR1cm4gZWZmZWN0O1xuICAgIH1cblxuICAgIC8vIHNob290S25pZmUoKSB7XG4gICAgLy8gICAgIHRoaXMuYm9keVNrZWxldG9uLnNjaGVkdWxlKCgpID0+IHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5oZXJvS25pZmUpO1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMuZW5lbXlBcnJbMV0ucG9zaXRpb24uYWRkKGNjLnYzKDUwICogaSwgNTAgKiBpKSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBwb3MgPSAodGhpcy5ib2R5U2tlbGV0b24ubm9kZS5zY2FsZVggPCAwKSA/IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzApKSA6IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzApKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRoaXMuZW5lbXlBcnJbMV0pXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMiwwLjM1KVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSwgMC4yNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDAuNSlcbiAgICAvLyB9XG4gICAgLy8gc2tpbGxGaXJlQmFsbCgpIHtcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDEpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmlyZUJhbGwpO1xuICAgIC8vICAgICAgICAgICAgICAgICBidWxsZXQuekluZGV4ID0gNTtcbiAgICAvLyAgICAgICAgICAgICAgICAgYnVsbGV0LnNjYWxlWCA9ICh0aGlzLmVuZW15QXJyWzFdLnBvc2l0aW9uLnggPCAwKSA/IDAuMSA6IC0wLjFcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLmVuZW15QXJyWzFdLnBvc2l0aW9uO1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5lbmVteUFyclsxXS5wb3NpdGlvbi5hZGQoY2MudjMoKHRoaXMuZW5lbXlBcnJbMV0ucG9zaXRpb24ueCA8IDApID8gNTAwIDogLTUwMCwgKHRoaXMuZW5lbXlBcnJbMV0ucG9zaXRpb24ueSA8IDApID8gNTAwIDogNTAwKSlcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gMFxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChidWxsZXQsIGFuZ2xlLCBwb3MsIHBvczIsIDAuNzUpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9LCAwLjQsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwKTtcbiAgICAvLyB9XG4gICAgLy8gc2tpbGxLbmlmZShwb3MpIHtcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAvLyAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhlcm9LbmlmZSk7XG4gICAgLy8gICAgICAgICBsZXQgYW5nbGUgPSAtMTM1ICsgOTAgKiBpXG4gICAgLy8gICAgICAgICBsZXQgYW5nbGVSID0gYW5nbGUgKiAoTWF0aC5QSSkgLyAxODBcbiAgICAvLyAgICAgICAgIC8vIGJ1bGxldC5hbmdsZSA9IGFuZ2xlICogMTgwIC8gTWF0aC5QSSArIDkwO1xuICAgIC8vICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnYnVsbGV0JykuaXNLbmlmZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgbGV0IHBhcmFtID0gKGJ1bGxldC5zY2FsZVggPCAwKSA/IC0xMDAwIDogMTAwMFxuICAgIC8vICAgICAgICAgbGV0IHBvczIgPSBwb3MuYWRkKGNjLnYzKHBhcmFtICogTWF0aC5jb3MoYW5nbGVSKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZVIpKSlcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH0sIDAuMTUpXG4gICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChidWxsZXQsIGFuZ2xlLCBwb3MsIHBvczIsIDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIHNraWxsSWNlQXJyb3coKSB7XG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVyb0Fycm93KTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgYW5nbGVSID0gKC1NYXRoLlBJKSArIChNYXRoLlBJICogaSAvIDUpO1xuICAgIC8vICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSk7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGFuZ2xlID0gYW5nbGVSICogMTgwIC8gTWF0aC5QSVxuICAgIC8vICAgICAgICAgICAgIGxldCBwYXJhbSA9IChidWxsZXQuc2NhbGVYIDwgMCkgPyAtMTAwMCA6IDEwMDBcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9zMiA9IHBvcy5hZGQoY2MudjMocGFyYW0gKiBNYXRoLmNvcyhhbmdsZVIpLCBwYXJhbSAqIE1hdGguc2luKGFuZ2xlUikpKVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMiwgMSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0sIDEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAxKTtcbiAgICAvLyB9XG4gICAgY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMiwgc3BlZWQgPSAwLjI1KSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgLy8gYnVsbGV0LmdldENvbXBvbmVudCgnYnVsbGV0SGVyb0xpc3RlbmVyJykuc2V0RGFtZSh0aGlzLmRhbWFnZSk7XG4gICAgICAgIGJ1bGxldC5hbmdsZSA9IGFuZ2xlXG4gICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhbmdsZSk7XG4gICAgICAgIGxldCBwYXJhbSA9ICh0aGlzLmJvZHlTa2VsZXRvbi5ub2RlLnNjYWxlWCA8IDApID8gLTEwMDAgOiAxMDAwO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ3RyYWlsMScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sIDAuMDUpXG4gICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkudG8oc3BlZWQsIHsgcG9zaXRpb246IHBvczIgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ2V4cGxvZGUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYnVsbGV0LmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIDAuMTIpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBjaGVja0FuZ2xlKHRhcmdldEVuZW15KSB7XG4gICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFycikge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRhcmdldEVuZW15O1xuICAgICAgICAgICAgbGV0IHRhbiA9ICh0YXJnZXQueCAtIHRoaXMubm9kZS54ICE9PSAwKSA/ICh0YXJnZXQueSAtIHRoaXMubm9kZS55IC0gMzApIC8gKHRhcmdldC54IC0gdGhpcy5ub2RlLngpIDogMFxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuKHRhbikgKiAoMTgwIC8gKE1hdGguUEkpKTtcbiAgICAgICAgICAgIGFuZ2xlID0gKHRoaXMubm9kZS54IDw9IHRhcmdldC54KSA/IGFuZ2xlIDogYW5nbGUgKyAxODBcbiAgICAgICAgICAgIHJldHVybiBhbmdsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgbGV0IGFuaW0gPSAodHJhY2suYW5pbWF0aW9uKSA/IHRyYWNrLmFuaW1hdGlvbi5uYW1lIDogJyc7XG4gICAgICAgICAgICBpZiAoYW5pbSA9PSAnZGllJykge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KENvbnN0YW50LkVWRU5ULkVORF9HQU1FLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5kaXJlY3Rpb25YICYmIHRoaXMuaXNSdW4gJiYgIXRoaXMuaXNEaWUpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMubW92ZURpci5tdWwodGhpcy5zcGVlZCAvIDYwKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zLmNsYW1wZihjYy52MygtNzAwLCAtNzUwKSwgY2MudjMoNzAwLCA3NTApKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCAmJiB0aGlzLmVuZW15QXJyICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5lbmVteUFyclswXTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQueCA+PSB0aGlzLm5vZGUueCArIDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24ubm9kZS5zY2FsZVggPSAtMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24ubm9kZS5zY2FsZVggPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=