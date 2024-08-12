"use strict";
cc._RF.push(module, '1c3f3lDTO9Cd7QfUiTKBrTr', 'chimera');
// script/enemy/chimera.ts

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
        _this.skill2Node = null;
        _this.skill1Node = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.thunderPre = null;
        _this.soundThunder = null;
        _this.soundSkill1 = null;
        _this.soundSkill2 = null;
        _this.isCountDowskill = false;
        _this.isAtk = false;
        return _this;
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        if (this.isAtk)
            return;
        this.isAtk = true;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.atkList();
    };
    NewClass.prototype.atkList = function () {
        this.countAtk++;
        switch (this.countAtk) {
            case 1:
                cc.audioEngine.play(this.atkSOund, false, 1);
                this.anim.play("atk");
                break;
            case 2:
                this.skill1();
                break;
            case 3:
                this.skill2();
                this.countAtk = 0;
                break;
            default:
                // this.countAtk++;
                // this.skill1()
                break;
        }
    };
    NewClass.prototype.skill1 = function () {
        var _this = this;
        if (this.isSkill)
            return;
        this.isSkill = true;
        this.anim.play("skill1");
        cc.audioEngine.play(this.soundSkill1, false, 1);
        this.scheduleOnce(function () {
            var thunder = cc.instantiate(_this.thunderPre);
            thunder.parent = _this.node.parent;
            thunder.position = cc.v3(60, 180);
            cc.audioEngine.play(_this.soundThunder, false, 1);
            // thunder.position=cc.v3(0,0)
        }, 0.7);
    };
    NewClass.prototype.skill2 = function () {
        if (this.isSkill)
            return;
        cc.audioEngine.play(this.soundSkill2, false, 1);
        this.isSkill = true;
        this.anim.play("skill2");
    };
    NewClass.prototype.completeEvent = function (type) {
        this.isSkill = false;
        switch (type) {
            case "skill2":
                this.atkList();
                console.log("skill2");
                break;
            case "skill1":
                this.atkList();
                console.log("skill1");
                break;
            case "atk":
                this.atkList();
                console.log("atk");
                break;
        }
    };
    NewClass.prototype.addEvent = function (type) {
        switch (type) {
            case "skill2":
                this.skill2Node.getComponent(cc.Animation).play();
                break;
            case "skill1":
                this.skill1Node.getComponent(cc.Animation).play();
                break;
        }
    };
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isSkill = false;
            this.isMeet = false;
            this.isAtk = false;
            this.anim.play("idle");
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill2Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill1Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "thunderPre", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThunder", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSkill1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSkill2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(enemy_1.default));
exports.default = NewClass;

cc._RF.pop();