
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/effect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '509bd1PIO9OhrLmNb930bKd', 'effect');
// script/effect.ts

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
        _this.anim = null;
        _this.collider = null;
        _this.gamePlay = null;
        _this.type = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent('game');
    };
    NewClass.prototype.setAnim = function (name) {
    };
    NewClass.prototype.finish = function () {
        this.node.parent.destroy();
    };
    NewClass.prototype.play = function (name, position) {
        if (position === void 0) { position = cc.v3(0, 0); }
        this.collider.enabled = false;
        switch (name) {
            case 'moon_aura':
                this.getAnim(name).speed = 0.4;
                // this.node.angle = 90;
                this.node.position = position;
                this.node.scale = 2;
                break;
            case 'skill_1_boss':
                this.getAnim(name).speed = 0.3;
                this.node.position = position;
                break;
            case 'skill1_fx':
                this.getAnim(name).speed = 0.5;
                this.node.angle = 90;
                this.node.position = position;
                break;
            case 'flame_2':
                this.getAnim(name).speed = 0.7;
                this.node.scale = 0.7;
                this.node.position = position;
                break;
            case 'flame_3':
                this.getAnim(name).speed = 0.5;
                this.node.scale = 0.3;
                this.node.position = position;
                break;
            default:
                break;
        }
        this.anim.play(name);
    };
    NewClass.prototype.getAnim = function (name) {
        for (var i = 0; i < this.anim.getClips().length; i++) {
            if (this.anim.getClips()[i].name == name) {
                return this.anim.getClips()[i];
            }
        }
        return null;
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "collider", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3RUM7UUFyRUcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFzQixJQUFJLENBQUM7UUFFbkMsY0FBUSxHQUFHLElBQUksQ0FBQztRQUVoQixVQUFJLEdBQUcsSUFBSSxDQUFDOztRQTZEWixpQkFBaUI7SUFDckIsQ0FBQztJQTVERyxlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQUk7SUFDWixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssSUFBSSxFQUFFLFFBQXNCO1FBQXRCLHlCQUFBLEVBQUEsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzlCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtnQkFDOUIsd0JBQXdCO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtnQkFDN0IsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO2dCQUM3QixNQUFNO1lBRVYsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7Z0JBQzdCLE1BQU07WUFFVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO2dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtnQkFDN0IsTUFBTTtZQUVWO2dCQUNJLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBbEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ0c7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzs4Q0FDTztJQU5sQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0U1QjtJQUFELGVBQUM7Q0F4RUQsQUF3RUMsQ0F4RXFDLEVBQUUsQ0FBQyxTQUFTLEdBd0VqRDtrQkF4RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIGNvbGxpZGVyOiBjYy5DaXJjbGVDb2xsaWRlciA9IG51bGw7XG5cbiAgICBnYW1lUGxheSA9IG51bGw7XG5cbiAgICB0eXBlID0gbnVsbDtcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoJ2dhbWUnKTtcbiAgICB9XG5cbiAgICBzZXRBbmltKG5hbWUpIHtcbiAgICB9XG5cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHBsYXkobmFtZSwgcG9zaXRpb24gPSBjYy52MygwLCAwKSkge1xuICAgICAgICB0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdtb29uX2F1cmEnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5pbShuYW1lKS5zcGVlZCA9IDAuNFxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSA9IDkwO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NraWxsXzFfYm9zcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBbmltKG5hbWUpLnNwZWVkID0gMC4zXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NraWxsMV9meCc6XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBbmltKG5hbWUpLnNwZWVkID0gMC41XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gOTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZmxhbWVfMic6XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBbmltKG5hbWUpLnNwZWVkID0gMC43XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMC43O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2ZsYW1lXzMnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5pbShuYW1lKS5zcGVlZCA9IDAuNVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuMztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xuICAgIH1cblxuICAgIGdldEFuaW0obmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5pbS5nZXRDbGlwcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltLmdldENsaXBzKClbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5pbS5nZXRDbGlwcygpW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=