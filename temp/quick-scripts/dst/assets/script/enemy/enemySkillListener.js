
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/enemySkillListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4185KSpNtMjIMS6mlQrgUl', 'enemySkillListener');
// script/enemy/enemySkillListener.ts

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
        _this.skillColider = null;
        _this.damage = 100;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onColider = function (value) {
        this.skillColider.enabled = value;
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        if (other.node.getComponent('heroListener')) {
            var target = other.node.getComponent('heroListener').target;
            target.getComponent('hero').attacked(this.damage);
        }
    };
    __decorate([
        property(cc.PolygonCollider)
    ], NewClass.prototype, "skillColider", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZW5lbXlTa2lsbExpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUJDO1FBbkJHLGtCQUFZLEdBQXVCLElBQUksQ0FBQztRQUV4QyxZQUFNLEdBQUcsR0FBRyxDQUFBOztJQWlCaEIsQ0FBQztJQWhCRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3JDLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7SUFFNUIsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDNUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO2tEQUNXO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ1Q7SUFKSyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBidWxsZXQgZnJvbSAnLi4vYnVsbGV0J1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUG9seWdvbkNvbGxpZGVyKVxuICAgIHNraWxsQ29saWRlcjogY2MuUG9seWdvbkNvbGxpZGVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSAxMDBcbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBvbkNvbGlkZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5za2lsbENvbGlkZXIuZW5hYmxlZCA9IHZhbHVlXG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcblxuICAgIH1cbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdoZXJvTGlzdGVuZXInKSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdoZXJvTGlzdGVuZXInKS50YXJnZXQ7XG4gICAgICAgICAgICB0YXJnZXQuZ2V0Q29tcG9uZW50KCdoZXJvJykuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICB9XG4gICAgfVxuIFxufVxuIl19