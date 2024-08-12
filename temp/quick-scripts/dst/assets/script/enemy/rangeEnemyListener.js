
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/rangeEnemyListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd61d7/9EOhL/oeQBQH2cM9p', 'rangeEnemyListener');
// script/enemy/rangeEnemyListener.ts

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
var hero_1 = require("../hero/hero");
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.className = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.className = this["__classname__"];
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.getComponent(hero_1.default)) {
            this.target.getComponent(enemy_1.default).attack(other.node);
            this.target.getComponent(enemy_1.default).arrHero.push(other.node);
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.node.getComponent(hero_1.default)) {
            this.target.getComponent(enemy_1.default).exitTarget(other.node._id);
            // this.target.getComponent(hero).removeEnemy(other.node._id);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxccmFuZ2VFbmVteUxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUFnQztBQUNoQyxrQ0FBNkI7QUFDdkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3QkM7UUFyQkcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQUcsSUFBSSxDQUFDOztRQWtCakIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsQkcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBRTNEO0lBQ0wsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzRCw4REFBOEQ7U0FDakU7SUFDTCxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFITixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0I1QjtJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QnFDLEVBQUUsQ0FBQyxTQUFTLEdBd0JqRDtrQkF4Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBoZXJvIGZyb20gJy4uL2hlcm8vaGVybyc7XG5pbXBvcnQgZW5lbXkgZnJvbSAnLi4vZW5lbXknO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBjbGFzc05hbWUgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXNbXCJfX2NsYXNzbmFtZV9fXCJdXG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGhlcm8pKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoZW5lbXkpLmF0dGFjayhvdGhlci5ub2RlKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmdldENvbXBvbmVudChlbmVteSkuYXJySGVyby5wdXNoKG90aGVyLm5vZGUpXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGhlcm8pKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoZW5lbXkpLmV4aXRUYXJnZXQob3RoZXIubm9kZS5faWQpO1xuICAgICAgICAgICAgLy8gdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KGhlcm8pLnJlbW92ZUVuZW15KG90aGVyLm5vZGUuX2lkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=