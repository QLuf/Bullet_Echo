"use strict";
cc._RF.push(module, '00640rtX/pCuIYFAk2ViewZ', 'updateBar');
// script/updateBar.ts

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
        _this.lbCount = null;
        _this.fillbar = null;
        _this.text = null;
        _this.iconRuby = null;
        _this.count = 0;
        _this.mission = 10;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.updateBar = function () {
        this.count = this.count + 2;
        this.lbCount.node.getComponent(cc.Animation).play("text_animation");
        this.lbCount.string = this.count.toString() + "/" + this.mission.toString();
        this.fillbar.fillRange = this.count / this.mission;
    };
    NewClass.prototype.reset = function (mission) {
        this.count = 0;
        this.mission = mission;
        this.lbCount.string = this.count.toString() + "/" + this.mission.toString();
        this.fillbar.fillRange = 0;
    };
    NewClass.prototype.setMission2 = function () {
        this.text.string = "Collect 10 Ruby";
        this.node.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.iconRuby;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCount", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillbar", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "iconRuby", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();