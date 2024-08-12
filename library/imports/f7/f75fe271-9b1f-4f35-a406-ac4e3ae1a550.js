"use strict";
cc._RF.push(module, 'f75feJxmx9PNaQGrE464aVQ', 'dragon');
// script/enemy/dragon.ts

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
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Prefab)
        // atk_around: cc.Prefab = null;
        // @property(cc.Prefab)
        // atk_down: cc.Prefab = null;
        _this.skill2Node = null;
        _this.skill1Pre = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.isCountDowskill = false;
        return _this;
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.skill2();
    };
    NewClass.prototype.atkList = function () {
        var _this = this;
        this.anim.play("atk");
        if (!this.isCountDowskill) {
            this.isCountDowskill = true;
            // cc.audioEngine.play(this.atkSOund, false, 0.8)
            this.scheduleOnce(function () {
                _this.isCountDowskill = false;
            }, 0.2);
        }
        switch (this.countAtk) {
            case 2:
                this.countAtk = 0;
                this.skill1();
                break;
            case 1:
                this.countAtk++;
                this.skill2();
                break;
            default:
                this.countAtk++;
                this.skill1();
                break;
        }
    };
    NewClass.prototype.skill1 = function () {
        var _this = this;
        if (this.isSkill)
            return;
        this.isSkill = true;
        var arrBullet = [cc.v3(-231, -510), cc.v3(-126, -637), cc.v3(-325, -623), cc.v3(-142, -515),
            cc.v3(-428, -579), cc.v3(-314, -530), cc.v3(-217, -601), cc.v3(0, -534), cc.v3(-390, -540), cc.v3(50, -500),
        ];
        var _loop_1 = function (i) {
            var delay = i % 2;
            delay = delay * 0.4;
            this_1.scheduleOnce(function () {
                var bullet = cc.instantiate(_this.skill1Pre);
                bullet.parent = _this.node.parent;
                bullet.position = arrBullet[i].add(cc.v3(0, 100));
                cc.tween(bullet).by(0.5, { position: cc.v3(0, -500) }).call(function () {
                    if (bullet.getChildByName('explode')) {
                        bullet.getComponent(cc.CircleCollider).enabled = false;
                        bullet.stopAllActions();
                        bullet.getChildByName('explode').active = true;
                        // bullet.getChildByName('trail1').active = false;
                        bullet.getChildByName('icon').active = false;
                    }
                }).start();
            }, delay);
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            _this.isSkill = false;
            _this.skill2();
        }, 0.5);
    };
    NewClass.prototype.skill2 = function () {
        if (this.isSkill)
            return;
        this.isSkill = true;
        this.anim.play("skill2");
    };
    NewClass.prototype.completeEvent = function (type) {
        this.isSkill = false;
        switch (type) {
            case "skill2":
                // this.atkList();
                this.skill1();
                break;
            case "skill1":
                // this.atkList()
                this.skill2();
                break;
        }
    };
    NewClass.prototype.addEvent = function (type) {
        switch (type) {
            case "skill2":
                // this.skill2();
                this.skill2Node.getComponent(cc.Animation).play();
                break;
            case "skill1":
                this.skill1();
                break;
        }
    };
    NewClass.prototype.exitTarget = function () {
        this.isSkill = false;
        this.isMeet = false;
        this.anim.play("idle");
        this.anim.unscheduleAllCallbacks();
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill2Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skill1Pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(enemy_1.default));
exports.default = NewClass;

cc._RF.pop();