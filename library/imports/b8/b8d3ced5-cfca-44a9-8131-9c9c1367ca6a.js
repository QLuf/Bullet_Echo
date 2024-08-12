"use strict";
cc._RF.push(module, 'b8d3c7Vz8pEqYExnJwTZ8pq', 'giantRock');
// script/enemy/giantRock.ts

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
        _this.isCountDowskill = false;
        _this.isAtk = false;
        return _this;
        // btn_skillCircle() {
        //     // for (let i = 0; i < 12; i++) {
        //     //     let rd = Math.floor(Math.random() * 2)
        //     //     let bullet = cc.instantiate(this.preBullet);
        //     //     let angle = (-Math.PI) + (Math.PI * i / 6);
        //     //     let pos = cc.v3(0, 0);
        //     //     this.node.addChild(bullet);
        //     //     bullet.zIndex=cc.macro.MIN_ZINDEX
        //     //     bullet.setPosition(pos.add(cc.v3(0, -50)));
        //     //     // bullet.getChildByName("circle").children[0].color = new cc.Color().fromHEX("#4ED3EC");
        //     //     bullet.scale = 0.4
        //     //     let param = (this.node.scaleX < 0) ? (-400 - 50 * rd) : (400 + 50 * rd)
        //     //     cc.tween(bullet).to(1, { position: cc.v3(param * Math.cos(angle), param * Math.sin(angle)).add(cc.v3(0, -50)) }).call(() => {
        //     //         // bullet.getComponent(cc.Animation).play()
        //     //    bullet.destroy()
        //     //     }).start();
        //     // }
        // }
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
        if (this.isSkill)
            return;
        this.anim.play("skill1");
        this.isSkill = true;
        // this.scheduleOnce(() => {
        //     this.isSkill = false;
        //     this.skill2()
        // }, 0.5)
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
    // doubleAtk(target) {
    //     for (let i = 0; i < 2; i++) {
    //         let atk = cc.instantiate(this.atk_down)
    //         atk.parent = this.node.parent;
    //         let pos = target.parent.convertToWorldSpaceAR(target.position);
    //         pos = this.node.parent.convertToNodeSpaceAR(pos)
    //         atk.position = pos
    //         atk.scaleX = ((i == 0) ? -1 : 1) * atk.scaleX
    //         atk.zIndex = 2
    //     }
    // }
    // createAtkDown(target) {
    //     let atk = cc.instantiate(this.atk_down)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.scaleX = ((pos.x > this.node.x) ? -1 : 1) * atk.scaleX
    //     atk.position = pos
    //     atk.zIndex = 2
    // }
    // createAtkAround(target) {
    //     let atk = cc.instantiate(this.atk_around)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.position = pos
    //     atk.zIndex = 2
    // }
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isAtk = false;
            this.isSkill = false;
            this.isMeet = false;
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
        property(cc.Prefab)
    ], NewClass.prototype, "skill1Node", void 0);
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