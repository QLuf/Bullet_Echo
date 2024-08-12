
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/chest/ChestListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGVzdFxcQ2hlc3RMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBDQztRQXhDRyxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFdBQUssR0FBRyxLQUFLLENBQUE7UUFRYixhQUFPLEdBQUcsS0FBSyxDQUFBOztJQThCbkIsQ0FBQztJQXBDRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7SUFFNUIsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFBM0IsaUJBNEJDO1FBM0JHLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7YUFFL0M7U0FDSjthQUFNO1lBQ0gsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDdkIsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUE7aUJBQzVCO3FCQUNJO29CQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFBO3dCQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTt3QkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQzs0QkFDZCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTt3QkFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO3FCQUNWO2lCQUNKO2FBR0o7U0FDSjtJQUVMLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyQ0FDUjtJQUpJLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQzVCO0lBQUQsZUFBQztDQTFDRCxBQTBDQyxDQTFDcUMsRUFBRSxDQUFDLFNBQVMsR0EwQ2pEO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBnYW1lUGxheSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaXNFbmQgPSBmYWxzZVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJHYW1lMjFcIik7XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcblxuICAgIH1cbiAgICBpc0RlbGF5ID0gZmFsc2VcbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudCgnaGVyb0xpc3RlbmVyJykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhdmVDaGVzdFwiKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJDaGVzdFwiKS5jbGlja0NoZXN0KClcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdoZXJvTGlzdGVuZXInKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5kIHRhc2tcIilcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVGhpcy5nb2xkID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkub25FbmRHYW1lKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0RlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiQ2hlc3RcIikubm90RW5vdWdoR29sZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGVsYXkgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RlbGF5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==