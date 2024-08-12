"use strict";
cc._RF.push(module, '4ec9fStrWBBI6YpSEjKfyvl', 'house');
// script/house/house.ts

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
        _this.house1 = null;
        _this.house2 = null;
        _this.currentLabel = null;
        _this.pop1 = null;
        _this.pop2 = null;
        _this.pop3 = null;
        _this.pop4 = null;
        _this.circle = null;
        _this.isUpdate = 0;
        _this.valueUpdate = 10;
        _this.gamePlay = null;
        _this.isStep = 0;
        _this.isMoving = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    };
    NewClass.prototype.checkUpdate = function () {
        if (this.isMoving)
            return;
        if (globalThis.wood >= this.valueUpdate && this.isUpdate == 0 && this.isStep == 0) {
            // this.updateHouse(this.valueUpdate)
            this.gamePlay.updateHouse(this.valueUpdate);
            this.isStep = 1;
            this.isMoving = true;
        }
        else if (globalThis.gold >= this.valueUpdate && this.isUpdate == 1 && this.isStep == 1) {
            this.gamePlay.updateHouse2(20);
            this.isStep = 2;
            this.isMoving = true;
        }
        else if (globalThis.gold >= this.valueUpdate && this.isUpdate == 2 && this.isStep == 2) {
            this.gamePlay.updateHouse2(20);
            this.isStep = 3;
            this.isMoving = true;
        }
        else if (globalThis.gold >= this.valueUpdate && this.isUpdate == 3 && this.isStep == 3) {
            this.gamePlay.updateHouse2(20);
            this.isStep = 4;
            this.isMoving = true;
        }
        else {
            this.gamePlay.heroComp.showNoti();
        }
    };
    NewClass.prototype.updateValue = function () {
        this.valueUpdate--;
        this.currentLabel.string = this.valueUpdate.toString();
        var fill = this.pop1.getChildByName("bg").getComponent(cc.Sprite);
        var check = fill.fillRange;
        cc.tween(fill).to(0.1, { fillRange: check + 0.5 }).start();
    };
    NewClass.prototype.updateHouse = function () {
        var _this = this;
        this.gamePlay.arrow.active = false;
        if (this.isUpdate == 0) {
            this.pop1.active = false;
            this.house1.active = false;
            this.house2.active = true;
            this.valueUpdate = 80;
            this.isUpdate = 1;
            this.circle.scale = 0.22;
            this.scheduleOnce(function () {
                _this.pop2.active = true;
                cc.tween(_this.pop2).to(0.3, { scale: 1 }).start();
                _this.pop1 = _this.pop2;
            }, 0.5);
            this.gamePlay.spawEnemies(30);
            this.isMoving = false;
        }
        else if (this.isUpdate == 1) {
            // this.gamePlay.listCard.children[0].scale = 1
            // this.gamePlay.listCard.children[0].children[0].active = true;
            this.gamePlay.btn_Claim(null, "2");
            this.pop2.active = false;
            this.isUpdate = 2;
            this.valueUpdate = 150;
            this.scheduleOnce(function () {
                _this.pop3.active = true;
                cc.tween(_this.pop3).to(0.3, { scale: 1 }).start();
                _this.pop1 = _this.pop3;
            }, 0.5);
            this.gamePlay.arrow.getComponent("arrow").param = 130;
        }
        else if (this.isUpdate == 2) {
            this.gamePlay.btn_Claim(null, "4");
            this.gamePlay.arrow.getComponent("arrow").param = 180;
            // this.gamePlay.listCard.scale=this.gamePlay.isScale
            // this.gamePlay.listCard.children[0].scale = 1
            this.pop3.active = false;
            // this.gamePlay.listCard.children[0].children[1].active = true;
            this.isUpdate = 3;
            this.valueUpdate = 500;
            this.scheduleOnce(function () {
                _this.pop4.active = true;
                cc.tween(_this.pop4).to(0.3, { scale: 1 }).start();
                _this.pop1 = _this.pop4;
            }, 0.5);
        }
        else if (this.isUpdate == 3) {
            this.gamePlay.btn_Claim(null, "1");
            // this.gamePlay.listCard.children[0].scale = 1
            this.gamePlay.arrow.getComponent("arrow").param = 200;
            // this.gamePlay.listCard.children[0].children[2].active = true;
            this.isUpdate = 4;
            this.valueUpdate = 1000;
            this.scheduleOnce(function () {
                _this.pop4.active = true;
                cc.tween(_this.pop4).to(0.3, { scale: 1 }).start();
                // this.gamePlay.onEndGame()
                _this.pop1 = _this.pop4;
            }, 0.5);
        }
    };
    NewClass.prototype.checkSuccess = function () {
        if (this.isUpdate == 1 && globalThis.gold >= 80) {
            this.gamePlay.arrow.active = true;
        }
        else if (this.isUpdate == 2 && globalThis.gold >= 150) {
            this.gamePlay.arrow.active = true;
        }
        else if (this.isUpdate == 3 && globalThis.gold >= 500) {
            this.gamePlay.arrow.active = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        this.checkSuccess();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house2", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "currentLabel", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pop4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "circle", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();