"use strict";
cc._RF.push(module, '1030fxn3DdOZ48cwLUaYY9G', 'btnHero');
// script/btnHero.ts

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
        _this.value = 25;
        _this.gamePlay = null;
        _this.isSuccess = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent('gamePlay');
    };
    NewClass.prototype.card_on = function () {
        this.node.getChildByName("circle").active = true;
        this.node.getComponent(cc.Animation).play("card_on");
    };
    NewClass.prototype.click = function (event, customEventData) {
        var _this = this;
        // console.log("click", customEventData)
        if (globalThis.gold >= this.value) {
            this.scheduleOnce(function () {
                _this.node.getChildByName("vfx").active = true;
            }, 1);
            this.scheduleOnce(function () {
                _this.node.getComponent(cc.Animation).play("card_success");
            }, 1.2);
            this.node.getComponent(cc.Button).enabled = false;
            globalThis.gold -= this.value;
            switch (customEventData) {
                case "1":
                    console.log("add");
                    this.gamePlay.btn_spawRenna();
                    break;
                case "2":
                    this.gamePlay.btn_spawWereWolf();
                    break;
                case "3":
                    this.gamePlay.btn_spawRacher();
                    break;
                default:
                    break;
            }
            this.isSuccess = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        if (this.isSuccess == false) {
            if (globalThis.gold >= this.value) {
                this.node.getComponent(cc.Button).enabled = true;
                this.card_on();
            }
            else {
                this.node.getComponent(cc.Button).enabled = false;
            }
        }
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "value", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();