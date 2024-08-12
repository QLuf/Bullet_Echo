"use strict";
cc._RF.push(module, 'cf42aYP49lJC7Ot/vSeV8zJ', 'ChestListener');
// script/chest/ChestListener.ts

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
        _this.gamePlay = null;
        _this.isEnd = false;
        _this.isDelay = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        var _this = this;
        if (this.isEnd == false) {
            if (other.node.getComponent('heroListener')) {
                console.log("haveChest");
                this.node.getComponent("Chest").clickChest();
            }
        }
        else {
            if (other.node.getComponent('heroListener')) {
                console.log("end task");
                if (globalThis.gold >= 500) {
                    this.node.getComponent(cc.CircleCollider).enabled = false;
                    this.gamePlay.onEndGame();
                }
                else {
                    if (!this.isDelay) {
                        this.node.getComponent("Chest").notEnoughGold();
                        this.isDelay = true;
                        this.scheduleOnce(function () {
                            _this.isDelay = false;
                        }, 0.7);
                    }
                }
            }
        }
    };
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isEnd", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();