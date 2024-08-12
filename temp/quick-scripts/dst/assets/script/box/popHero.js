
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/box/popHero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '848935Cp+JKcKGS69AwYcRd', 'popHero');
// script/box/popHero.ts

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
        _this.icon = null;
        _this.target = null;
        _this.camera = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.checkAngle = function () {
        if (this.target != null) {
            // let target = this.target;
            // let pos2 = target.position.add(cc.v3(this.camera.position.x, -this.camera.position.y))
            // pos2 = target.parent.convertToWorldSpaceAR(target.position);
            // pos2 = this.node.convertToNodeSpaceAR(pos2);
            // let pos = this.node.position.add(cc.v3(this.camera.position.x, -this.camera.position.y))
            // pos = pos2
            // let tan = (target.x - pos.x !== 0) ? (target.y - pos.y - 30) / (target.x - pos.x) : 0
            // let angle = Math.atan(tan) * (180 / (Math.PI));
            // angle = (pos.x <= target.x) ? angle : angle + 180;
            // // console.log()
            // // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            // return angle;
            var target = this.target;
            var pos2 = target.position.add(cc.v3(-this.camera.position.x, -this.camera.position.y));
            pos2 = target.parent.convertToWorldSpaceAR(pos2);
            pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
            var pos = this.node.position;
            var tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (pos.x <= pos2.x) ? angle : angle + 180;
            // console.log()
            // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            return angle;
        }
    };
    NewClass.prototype.update = function (dt) {
        this.node.angle = this.checkAngle();
        this.icon.angle = -this.node.angle;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "camera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxib3hcXHBvcEhlcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErQ0M7UUE3Q0csVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBeUMzQixDQUFDO0lBeENHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsNEJBQTRCO1lBQzVCLHlGQUF5RjtZQUN6RiwrREFBK0Q7WUFDL0QsK0NBQStDO1lBQy9DLDJGQUEyRjtZQUMzRixhQUFhO1lBQ2Isd0ZBQXdGO1lBQ3hGLGtEQUFrRDtZQUNsRCxxREFBcUQ7WUFDckQsbUJBQW1CO1lBQ25CLDBEQUEwRDtZQUMxRCxnQkFBZ0I7WUFFaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN2RixJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7WUFDNUIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMvRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNoRCxnQkFBZ0I7WUFDaEIsdURBQXVEO1lBQ3ZELE9BQU8sS0FBSyxDQUFDO1NBS2hCO0lBQ0wsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFdkMsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQzVCO0lBQUQsZUFBQztDQS9DRCxBQStDQyxDQS9DcUMsRUFBRSxDQUFDLFNBQVMsR0ErQ2pEO2tCQS9Db0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBjaGVja0FuZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgICAgICAgLy8gbGV0IHBvczIgPSB0YXJnZXQucG9zaXRpb24uYWRkKGNjLnYzKHRoaXMuY2FtZXJhLnBvc2l0aW9uLngsIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55KSlcbiAgICAgICAgICAgIC8vIHBvczIgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXQucG9zaXRpb24pO1xuICAgICAgICAgICAgLy8gcG9zMiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKTtcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKHRoaXMuY2FtZXJhLnBvc2l0aW9uLngsIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55KSlcbiAgICAgICAgICAgIC8vIHBvcyA9IHBvczJcbiAgICAgICAgICAgIC8vIGxldCB0YW4gPSAodGFyZ2V0LnggLSBwb3MueCAhPT0gMCkgPyAodGFyZ2V0LnkgLSBwb3MueSAtIDMwKSAvICh0YXJnZXQueCAtIHBvcy54KSA6IDBcbiAgICAgICAgICAgIC8vIGxldCBhbmdsZSA9IE1hdGguYXRhbih0YW4pICogKDE4MCAvIChNYXRoLlBJKSk7XG4gICAgICAgICAgICAvLyBhbmdsZSA9IChwb3MueCA8PSB0YXJnZXQueCkgPyBhbmdsZSA6IGFuZ2xlICsgMTgwO1xuICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgLy8gLy8gdGhpcy5ub2RlLnNjYWxlWCA9IChwb3MueCA8PSB0YXJnZXQueCkgPyAwLjUgOiAtMC41O1xuICAgICAgICAgICAgLy8gcmV0dXJuIGFuZ2xlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgcG9zMiA9IHRhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoLXRoaXMuY2FtZXJhLnBvc2l0aW9uLngsLSB0aGlzLmNhbWVyYS5wb3NpdGlvbi55KSlcbiAgICAgICAgICAgIHBvczIgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MyKTtcbiAgICAgICAgICAgIHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvblxuICAgICAgICAgICAgbGV0IHRhbiA9IChwb3MyLnggLSBwb3MueCAhPT0gMCkgPyAocG9zMi55IC0gcG9zLnkgLSAzMCkgLyAocG9zMi54IC0gcG9zLngpIDogMFxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuKHRhbikgKiAoMTgwIC8gKE1hdGguUEkpKTtcbiAgICAgICAgICAgIGFuZ2xlID0gKHBvcy54IDw9IHBvczIueCkgPyBhbmdsZSA6IGFuZ2xlICsgMTgwO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWCA9IChwb3MueCA8PSB0YXJnZXQueCkgPyAwLjUgOiAtMC41O1xuICAgICAgICAgICAgcmV0dXJuIGFuZ2xlO1xuXG5cblxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuY2hlY2tBbmdsZSgpO1xuICAgICAgICB0aGlzLmljb24uYW5nbGUgPSAtdGhpcy5ub2RlLmFuZ2xlO1xuXG4gICAgfVxufVxuIl19