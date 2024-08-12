
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/house/house.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxob3VzZVxcaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrSkM7UUFoSkcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGtCQUFZLEdBQWEsSUFBSSxDQUFBO1FBRTdCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxjQUFRLEdBQUcsS0FBSyxDQUFBOztJQTRIcEIsQ0FBQztJQTNIRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCw4QkFBVyxHQUFYO1FBRUksSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDMUIsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDL0UscUNBQXFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtTQUN2QjthQUNJLElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBRXZCO2FBQ0ksSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDcEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7U0FFdkI7YUFDSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtTQUV2QjthQUNJO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDcEM7SUFDTCxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDOUQsQ0FBQztJQUNELDhCQUFXLEdBQVg7UUFBQSxpQkFrRUM7UUFqRUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNqRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUE7WUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7U0FDeEI7YUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3pCLCtDQUErQztZQUMvQyxnRUFBZ0U7WUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNqRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUE7WUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7U0FFeEQ7YUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUVsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtZQUNyRCxxREFBcUQ7WUFDckQsK0NBQStDO1lBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUV4QixnRUFBZ0U7WUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUE7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7Z0JBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDakQsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUNWO2FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFFbEMsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1lBQ3JELGdFQUFnRTtZQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNqRCw0QkFBNEI7Z0JBQzVCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQTtZQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDVjtJQUNMLENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3BDO2FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3BDO2FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUVuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3BDO0lBQ0wsQ0FBQztJQUNTLHlCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUEvSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBaEJOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrSjVCO0lBQUQsZUFBQztDQWxKRCxBQWtKQyxDQWxKcUMsRUFBRSxDQUFDLFNBQVMsR0FrSmpEO2tCQWxKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGN1cnJlbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wMTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3AyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcDM6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wNDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaXJjbGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaXNVcGRhdGUgPSAwXG4gICAgdmFsdWVVcGRhdGUgPSAxMFxuICAgIGdhbWVQbGF5ID0gbnVsbFxuICAgIGlzU3RlcCA9IDA7XG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZTIxXCIpO1xuICAgIH1cbiAgICBjaGVja1VwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xuICAgICAgICBpZiAoZ2xvYmFsVGhpcy53b29kID49IHRoaXMudmFsdWVVcGRhdGUgJiYgdGhpcy5pc1VwZGF0ZSA9PSAwICYmIHRoaXMuaXNTdGVwID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlSG91c2UodGhpcy52YWx1ZVVwZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkudXBkYXRlSG91c2UodGhpcy52YWx1ZVVwZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMTtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVGhpcy5nb2xkID49IHRoaXMudmFsdWVVcGRhdGUgJiYgdGhpcy5pc1VwZGF0ZSA9PSAxICYmIHRoaXMuaXNTdGVwID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkudXBkYXRlSG91c2UyKDIwKVxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAyO1xuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFRoaXMuZ29sZCA+PSB0aGlzLnZhbHVlVXBkYXRlICYmIHRoaXMuaXNVcGRhdGUgPT0gMiAmJiB0aGlzLmlzU3RlcCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnVwZGF0ZUhvdXNlMigyMClcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMztcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnbG9iYWxUaGlzLmdvbGQgPj0gdGhpcy52YWx1ZVVwZGF0ZSAmJiB0aGlzLmlzVXBkYXRlID09IDMgJiYgdGhpcy5pc1N0ZXAgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS51cGRhdGVIb3VzZTIoMjApXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLnNob3dOb3RpKClcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZS0tXG4gICAgICAgIHRoaXMuY3VycmVudExhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVVcGRhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLnBvcDEuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICBsZXQgY2hlY2sgPSBmaWxsLmZpbGxSYW5nZVxuICAgICAgICBjYy50d2VlbihmaWxsKS50bygwLjEsIHsgZmlsbFJhbmdlOiBjaGVjayArIDAuNSB9KS5zdGFydCgpXG4gICAgfVxuICAgIHVwZGF0ZUhvdXNlKCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmlzVXBkYXRlID09IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9wMS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ob3VzZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhvdXNlMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZSA9IDgwXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlID0gMVxuICAgICAgICAgICAgdGhpcy5jaXJjbGUuc2NhbGUgPSAwLjIyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3AyLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcDIpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgdGhpcy5wb3AxID0gdGhpcy5wb3AyXG4gICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNwYXdFbmVtaWVzKDMwKVxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1VwZGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmxpc3RDYXJkLmNoaWxkcmVuWzBdLnNjYWxlID0gMVxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5saXN0Q2FyZC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5fQ2xhaW0obnVsbCwgXCIyXCIpXG4gICAgICAgICAgICB0aGlzLnBvcDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlID0gMjtcblxuICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZSA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDMuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wMykudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDEgPSB0aGlzLnBvcDNcbiAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3cuZ2V0Q29tcG9uZW50KFwiYXJyb3dcIikucGFyYW0gPSAxMzBcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVcGRhdGUgPT0gMikge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5fQ2xhaW0obnVsbCwgXCI0XCIpXG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3cuZ2V0Q29tcG9uZW50KFwiYXJyb3dcIikucGFyYW0gPSAxODBcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVBsYXkubGlzdENhcmQuc2NhbGU9dGhpcy5nYW1lUGxheS5pc1NjYWxlXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmxpc3RDYXJkLmNoaWxkcmVuWzBdLnNjYWxlID0gMVxuXG4gICAgICAgICAgICB0aGlzLnBvcDMuYWN0aXZlID0gZmFsc2VcblxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5saXN0Q2FyZC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZSA9IDNcbiAgICAgICAgICAgIHRoaXMudmFsdWVVcGRhdGUgPSA1MDBcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wNCkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDEgPSB0aGlzLnBvcDRcbiAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzVXBkYXRlID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuX0NsYWltKG51bGwsIFwiMVwiKVxuXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmxpc3RDYXJkLmNoaWxkcmVuWzBdLnNjYWxlID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hcnJvdy5nZXRDb21wb25lbnQoXCJhcnJvd1wiKS5wYXJhbSA9IDIwMFxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5saXN0Q2FyZC5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZSA9IDRcbiAgICAgICAgICAgIHRoaXMudmFsdWVVcGRhdGUgPSAxMDAwXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3A0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcDQpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoKVxuICAgICAgICAgICAgICAgIHRoaXMucG9wMSA9IHRoaXMucG9wNFxuICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrU3VjY2VzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGUgPT0gMSAmJiBnbG9iYWxUaGlzLmdvbGQgPj0gODApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3cuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVcGRhdGUgPT0gMiAmJiBnbG9iYWxUaGlzLmdvbGQgPj0gMTUwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzVXBkYXRlID09IDMgJiYgZ2xvYmFsVGhpcy5nb2xkID49IDUwMCkge1xuXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxuICAgIH1cbn1cbiJdfQ==