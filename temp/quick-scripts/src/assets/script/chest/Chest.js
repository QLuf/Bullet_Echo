"use strict";
cc._RF.push(module, '9fab3/PvPZEMrurmDmn/82u', 'Chest');
// script/chest/Chest.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.current = 0;
        _this.gamePlay = null;
        _this.tag = 0;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    };
    NewClass.prototype.clickChest = function () {
        var _this = this;
        if (globalThis.gold >= this.current) {
            this.node.getComponent(cc.CircleCollider).enabled = false;
            console.log("clickchest");
            globalThis.gold -= this.current;
            this.gamePlay.clickChest(this.tag);
            this.scheduleOnce(function () {
                var chest = _this.node.children[0].getChildByName("chest");
                _this.node.children[0].getChildByName("icon").active = false;
                _this.node.children[0].getChildByName("New Label").active = false;
                _this.node.children[0].getChildByName("bang").active = false;
                chest.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', chest.getComponent(cc.Sprite)));
            }, 0.6);
        }
        else {
            this.notEnoughGold();
        }
    };
    NewClass.prototype.notEnoughGold = function () {
        this.node.getComponent(cc.Animation).play();
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "current", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();