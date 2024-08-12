
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZSQztRQTNSRyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFzQixJQUFJLENBQUM7UUFHdkMseUJBQW1CLEdBQTZCLElBQUksQ0FBQztRQUdyRCxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFMUIsVUFBSSxHQUFHLEtBQUssQ0FBQTtRQUVaLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFFZCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsUUFBRSxHQUFHLENBQUMsQ0FBQztRQUVQLGdCQUFVLEdBQUcsR0FBRyxDQUFDO1FBRWpCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUN0QixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLGFBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixjQUFRLEdBQUcsS0FBSyxDQUFBOztJQXNQcEIsQ0FBQztJQXJQRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBRyxJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsRUFBQztZQUNYLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUNuQjtRQUNELElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDWCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDbkI7SUFDTCxDQUFDO0lBRUQsc0JBQUcsR0FBSDtRQUNJLHlCQUF5QjtJQUM3QixDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQVVDO1FBVEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUM3QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ3BELENBQUMsS0FBSyxFQUFFLENBQUE7SUFDYixDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQVVDO1FBVEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUM3QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pELEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzVELENBQUMsS0FBSyxFQUFFLENBQUE7SUFDYixDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLE1BQU07UUFBZixpQkF5Q0M7UUF4Q0csSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzNDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFckMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUM5QztTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ25DLGtEQUFrRDtZQUNsRCwrQkFBK0I7WUFDL0IseUJBQXlCO1lBRXpCLG9EQUFvRDtZQUNwRCxRQUFRO1lBQ1IsWUFBWTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0MsUUFBUTtZQUNSLElBQUk7WUFDSixnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO1lBRTFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUVWO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2hELENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsSUFBSTtJQUVsQixDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLElBQUk7SUFFYixDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLFdBQVc7UUFDbEIsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sTUFBTTtRQUFiLGlCQStDQztRQTlDRyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtRQUNyQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FFM0I7UUFDRCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDbkIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUVwRCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQTtZQUV6QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDZix3QkFBd0I7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNuQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBRXBELEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUV6QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDWCxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3RDO2FBQ0k7WUFDRCx3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ25CLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUdQLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNmLHdCQUF3QjtnQkFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ25CLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDWCxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3hDO1FBRUQsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6Qiw0Q0FBNEM7UUFDNUMsUUFBUTtRQUNSLHVDQUF1QztJQUMzQyxDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLE1BQU0sRUFBRSxVQUFVO1FBQS9CLGlCQXNCQztRQXJCRyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM3RCxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEQsdUdBQXVHO1FBQ3ZHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFBO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFJaEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xFLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM1RixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFRLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0gsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzFELE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUNELCtCQUFZLEdBQVosVUFBYSxJQUFJLEVBQUUsSUFBSTtRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDakQsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLE1BQU07UUFBakIsaUJBbUJDO1FBaEJHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDOUIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE1BQU07Z0JBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFBO1FBQ0Ysd0JBQXdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FFdEM7SUFNTCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDaEQsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsT0FBTztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLHNDQUFzQztTQUN6QztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3JDLDhDQUE4QztJQUNsRCxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLElBQUksRUFBRSxJQUFJO1FBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU8sR0FBRyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN4QyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEYsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdGLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEc7SUFDTCxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixvQ0FBb0M7WUFDcEMsNERBQTREO1lBQzVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5SCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FFbkg7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUVMLENBQUM7SUExUkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO2tEQUNXO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt5REFDa0I7SUFHckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDVDtJQUVaO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ1A7SUFFZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNQO0lBRWQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDZDtJQUVQO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0RBQ0o7SUFFakI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDVjtJQUVYO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2I7SUFFUjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBL0JMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2UjVCO0lBQUQsZUFBQztDQTdSRCxBQTZSQyxDQTdScUMsRUFBRSxDQUFDLFNBQVMsR0E2UmpEO2tCQTdSb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuL0NvbnN0YW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIGJvZHlDb2xsaWRlcjogY2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcilcbiAgICBib2R5UGh5c2ljc0NvbGxpZGVyOiBjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBibG9vZDogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVmVjMylcbiAgICBidWxsZXRQb3MgPSBjYy52MygwLCAwLCAwKVxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzQUQgPSBmYWxzZVxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzQm9zcyA9IGZhbHNlXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgdGltZVNwZWVkID0gMDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBocCA9IDA7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgdGltZUJ1bGxldCA9IDQwMDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHRhZyA9IDA7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSFA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBpc01lZXQgPSBmYWxzZVxuICAgIGlzRGllID0gZmFsc2U7XG4gICAgaXNGcmVlemUgPSBmYWxzZTtcbiAgICBtYXhIcCA9IDA7XG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuICAgIGlzU2tpbGwgPSBmYWxzZVxuICAgIGFyckhlcm8gPSBbXVxuICAgIGlzQXR0YWNrID0gZmFsc2VcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudCgnR2FtZScpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gMjtcbiAgICAgICAgdGhpcy5tYXhIcCA9IHRoaXMuaHBcbiAgICAgICAgdGhpcy5pc0ZyZWV6ZSA9IHRydWU7XG4gICAgICAgIGlmKHRoaXMudGFnPT0xKXtcbiAgICAgICAgICAgIHRoaXMubW92ZUlkbGUxKClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnRhZz09Mil7XG4gICAgICAgICAgICB0aGlzLm1vdmVJZGxlMigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKVxuICAgIH1cbiAgICBtb3ZlSWRsZTEoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2V0KHsgcG9zaXRpb246IGNjLnYzKC0xNjYsIDc1OSkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSAtOTBcbiAgICAgICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDIwNSwgNzAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ubm9kZS5hbmdsZSA9IDE4MFxuICAgICAgICAgICAgfSkuZGVsYXkoMC44KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ubm9kZS5hbmdsZSA9IDkwXG4gICAgICAgICAgICB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMTY2LCA3NTkpIH0pLmRlbGF5KDEpXG4gICAgICAgICkuc3RhcnQoKVxuICAgIH1cbiAgICBtb3ZlSWRsZTIoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2V0KHsgcG9zaXRpb246IGNjLnYzKC03MDUuMjExLCA0OTcuNDA3KSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ubm9kZS5hbmdsZSA9IDE4MFxuICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTY1NC4wMDgsIDY3LjAyNCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSAxODBcbiAgICAgICAgICAgIH0pLmRlbGF5KDAuOCkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSAwXG4gICAgICAgICAgICB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtNzA1LjIxMSwgNDk3LjQwNykgfSkuZGVsYXkoMSlcbiAgICAgICAgKS5zdGFydCgpXG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RpZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xuICAgICAgICB0aGlzLmxiSFAuc3RyaW5nID0gdGhpcy5ocC50b1N0cmluZygpXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jcmVhdGVEYW1hZ2UodGhpcy5ub2RlLnBvc2l0aW9uKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb3NzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jcmVhdGVEYW1hZ2VCb3NzKHRoaXMubm9kZS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhwID0gMDtcbiAgICAgICAgICAgIHRoaXMuYm9keUNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEaWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLnJlbW92ZUVuZW15Mih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZVBsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzQm9zcykge1xuXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYm9zc0RpZSh0aGlzLm5vZGUucG9zaXRpb24pXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNvdW50RGllKHRoaXMubm9kZS5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5LmNyZWF0ZU1lYXQodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlXG5cbiAgICAgICAgICAgIH0sIDAuMylcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvb2QuZmlsbFJhbmdlID0gdGhpcy5ocCAvIHRoaXMubWF4SHA7XG4gICAgfVxuICAgIGNvbXBsZXRlRXZlbnQodHlwZSkge1xuXG4gICAgfVxuICAgIGFkZEV2ZW50KHR5cGUpIHtcblxuICAgIH1cbiAgICBjaGVja0FuZ2xlKHRhcmdldEVuZW15KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0YXJnZXRFbmVteTtcbiAgICAgICAgbGV0IHRhbiA9ICh0YXJnZXQueCAtIHRoaXMubm9kZS54ICE9PSAwKSA/ICh0YXJnZXQueSAtIHRoaXMubm9kZS55IC0gMzApIC8gKHRhcmdldC54IC0gdGhpcy5ub2RlLngpIDogMFxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4odGFuKSAqICgxODAgLyAoTWF0aC5QSSkpO1xuICAgICAgICBhbmdsZSA9ICh0aGlzLm5vZGUueCA8PSB0YXJnZXQueCkgPyBhbmdsZSA6IGFuZ2xlICsgMTgwXG4gICAgICAgIHJldHVybiBhbmdsZTtcbiAgICB9XG4gICAgYXR0YWNrKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaykgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzTWVldCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNBdHRhY2sgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5hcnJIZXJvWzBdKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmFyckhlcm9bMF1cblxuICAgICAgICB9XG4gICAgICAgIGxldCB0YXJnZXRDb21wID0gdGFyZ2V0LmdldENvbXBvbmVudCgnaGVybycpO1xuICAgICAgICBpZiAodGhpcy5pc0FEKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheShcImF0a1wiKVxuICAgICAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSB0aGlzLmNoZWNrQW5nbGUodGFyZ2V0KSAtIDkwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQodGFyZ2V0LCB0YXJnZXRDb21wKVxuXG4gICAgICAgICAgICB9LCAwLjQpXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwiYXRrXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5ub2RlLmFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRhcmdldCkgLSA5MDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCh0YXJnZXQsIHRhcmdldENvbXApXG5cbiAgICAgICAgICAgICAgICB9LCAwLjQpXG4gICAgICAgICAgICB9LCAxLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC41KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICAgICAgfSwgMC4zKVxuXG5cbiAgICAgICAgICAgIHRoaXMuYW5pbS5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29tcC5hdHRhY2tlZCh0aGlzLmRhbWFnZSk7XG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgfSwgMC44LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC41KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5hbmltLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzTWVldCkge1xuICAgICAgICAvLyAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCAxLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC41KTtcbiAgICB9XG4gICAgY3JlYXRlQnVsbGV0KHRhcmdldCwgdGFyZ2V0Q29tcCkge1xuICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJ1bGxldCk7XG4gICAgICAgIGJ1bGxldC56SW5kZXggPSAxMFxuICAgICAgICBidWxsZXQub3BhY2l0eSA9IDBcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYW5pbS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAxNjcpKVxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgLy8gbGV0IGJ1bGxldFBvcyA9ICh0aGlzLm5vZGUuc2NhbGVYID4gMCkgPyB0aGlzLmJ1bGxldFBvcyA6IGNjLnYzKC10aGlzLmJ1bGxldFBvcy54LCB0aGlzLmJ1bGxldFBvcy55KVxuICAgICAgICBidWxsZXQucG9zaXRpb24gPSBwb3NcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmNoZWNrVGltZVBvcyhidWxsZXQucG9zaXRpb24sIHRhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzApKSlcblxuXG5cbiAgICAgICAgbGV0IHBhcmFtID0gMTUwMDtcbiAgICAgICAgbGV0IGFuZ2xlMiA9IHRoaXMuY2hlY2tBbmdsZTIodGhpcy5ub2RlLnBvc2l0aW9uLCB0YXJnZXQucG9zaXRpb24pXG4gICAgICAgIGFuZ2xlMiA9IGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhhbmdsZTIpXG4gICAgICAgIGxldCBwb3MzID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MyhwYXJhbSAqIE1hdGguY29zKGFuZ2xlMiksIHBhcmFtICogTWF0aC5zaW4oYW5nbGUyKSkpXG4gICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkuc2V0KHsgb3BhY2l0eTogMjU1IH0pLmNhbGwoKCkgPT4geyBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmlhbFwiKS5hY3RpdmUgPSB0cnVlIH0pLnRvKDEsIHsgcG9zaXRpb246IHBvczMgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgICAgIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZShcImV4cGxvZGVcIikuYWN0aXZlID0gdHJ1ZVxuYnVsbGV0LmRlc3Ryb3koKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIGNoZWNrVGltZVBvcyhwb3MxLCBwb3MyKSB7XG4gICAgICAgIGxldCB0aW1lID0gcG9zMS5zdWIocG9zMikubWFnKCkgLyB0aGlzLnRpbWVCdWxsZXRcbiAgICAgICAgcmV0dXJuIHRpbWVcbiAgICB9XG4gICAgZXhpdFRhcmdldChpZEhlcm8pIHtcblxuXG4gICAgICAgIHRoaXMuYXJySGVyby5mb3JFYWNoKChlbmVteSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbmVteS5faWQgPT0gaWRIZXJvKSB0aGlzLmFyckhlcm8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy5pc1RhcmdldCA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmFyckhlcm8ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNNZWV0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzU2tpbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG5cbiAgICAgICAgfVxuXG5cblxuXG5cbiAgICB9XG4gICAgZnJlZXplKCkge1xuICAgICAgICB0aGlzLmlzRnJlZXplID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzbm93JykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib2R5UGh5c2ljc0NvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDE7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGcmVlemUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm9keVBoeXNpY3NDb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc25vdycpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDI7XG4gICAgICAgIH0sIDIpO1xuICAgIH1cbiAgICBvblBhdXNlKGlzUGF1c2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJlZXplKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmJvZHlTa2VsZXRvbi5wYXVzZWQgPSBpc1BhdXNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUNvbGxpZGVyLmVuYWJsZWQgPSAhaXNQYXVzZTtcbiAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbiAgICBjaGVja0FuZ2xlMihwb3MxLCBwb3MyKSB7XG4gICAgICAgIGxldCB0YW4gPSBNYXRoLmFicyhwb3MyLnkgLSBwb3MxLnkpIC8gTWF0aC5hYnMocG9zMi54IC0gcG9zMS54KTtcbiAgICAgICAgaWYgKHBvczIueSA9PSBwb3MxLnkpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLngpIHJldHVybiAwO1xuICAgICAgICAgICAgaWYgKHBvczIueCA8IHBvczEueCkgcmV0dXJuIDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3MyLnggPT0gcG9zMS54KSB7XG4gICAgICAgICAgICBpZiAocG9zMi55ID4gcG9zMS55KSByZXR1cm4gOTA7XG4gICAgICAgICAgICBpZiAocG9zMi55IDwgcG9zMS55KSByZXR1cm4gLTkwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3MxLnggPT0gcG9zMi54ICYmIHBvczEueSA9PSBwb3MyLnkpIHJldHVybiAwO1xuICAgICAgICBpZiAocG9zMS54ICE9PSBwb3MyLnggJiYgcG9zMS55ICE9PSBwb3MyLnkpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLnggJiYgcG9zMi55ID4gcG9zMS55KSByZXR1cm4gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKTtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLnggJiYgcG9zMi55IDwgcG9zMS55KSByZXR1cm4gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSAqIC0xO1xuICAgICAgICAgICAgaWYgKHBvczIueCA8IHBvczEueCAmJiBwb3MyLnkgPiBwb3MxLnkpIHJldHVybiAoMTgwIC0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSk7XG4gICAgICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54ICYmIHBvczIueSA8IHBvczEueSkgcmV0dXJuIC0oMTgwIC0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0ZyZWV6ZSAmJiAhdGhpcy5nYW1lUGxheS5pc1BhdXNlR2FtZSAmJiB0aGlzLmlzTWVldCA9PSBmYWxzZSAmJiAhdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgbGV0IGhlcm8gPSB0aGlzLmdhbWVQbGF5Lmhlcm87XG4gICAgICAgICAgICAvLyBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnggPD0gaGVyby54ICsgMTApID8gLTEgOiAxO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KCh0aGlzLm5vZGUueCAtIGhlcm8ueCksIDIpICsgTWF0aC5wb3coKHRoaXMubm9kZS55IC0gaGVyby55KSwgMikpXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS54ICsgKGR0ICogKCh0aGlzLm5vZGUueCA8IGhlcm8ueCkgPyAxIDogLTEpKSAqIChNYXRoLmFicyh0aGlzLm5vZGUueCAtIGhlcm8ueCkgKiAxMCAvIHRoaXMudGltZVNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLnkgKyAoZHQgKiAoKHRoaXMubm9kZS55IDwgaGVyby55KSA/IDEgOiAtMSkpICogKE1hdGguYWJzKHRoaXMubm9kZS55IC0gaGVyby55KSAqIDEwIC8gdGhpcy50aW1lU3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hbmdsZSA9IHRoaXMuY2hlY2tBbmdsZTIodGhpcy5ub2RlLnBvc2l0aW9uLCB0aGlzLmdhbWVQbGF5Lmhlcm8ucG9zaXRpb24pIC0gOTA7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc1BhdXNlR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5vblBhdXNlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5nYW1lUGxheS5pc1BhdXNlR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5vblBhdXNlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19