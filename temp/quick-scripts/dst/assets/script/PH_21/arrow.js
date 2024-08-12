
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PH_21/arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '936b5N+F35Bvor1whG6l4d+', 'arrow');
// script/PH_21/arrow.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.target = null;
        _this.param = 100;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.checkAngle = function () {
        if (this.target != null) {
            var posHero = cc.Canvas.instance.node.getComponent("Game21").hero.position;
            var target = this.target;
            // let pos2 = target.position.add(cc.v3(-this.camera.position.x,- this.camera.position.y))
            var pos2 = target.position;
            pos2 = target.parent.convertToWorldSpaceAR(pos2);
            pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
            var pos = this.node.position;
            var tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (pos.x <= pos2.x) ? angle : angle + 180;
            var param = this.param;
            var angle2 = this.checkAngle2(posHero, pos2);
            angle2 = cc.misc.degreesToRadians(angle2);
            var pos3 = posHero.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)));
            this.node.position = pos3;
            // console.log()
            // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            return angle;
        }
    };
    NewClass.prototype.checkPos = function () {
        var target = this.target;
        var son = this.node.parent;
        var pos2 = target.position;
        pos2 = target.parent.convertToWorldSpaceAR(pos2);
        pos2 = son.parent.convertToNodeSpaceAR(pos2);
        // if(son.y>=pos2.y){
        // if (son.x <= pos2.x) {
        // this.node.position = cc.v3(138, 66)
        // } else if (son.x > pos2.x) {
        // }
        // this.node.position = cc.v3(165, 66)
        // }
        // else{
        //     if (son.x > pos2.x) {
        //         this.node.position = cc.v3(138, 66)
        //     } else if (son.x < pos2.x) {
        //         this.node.position = cc.v3(165, 66)
        //     }
        // }
    };
    NewClass.prototype.checkAngle2 = function (pos1, pos2) {
        var tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
        if (pos2.y == pos1.y) {
            if (pos2.x > pos1.x)
                return 0;
            if (pos2.x < pos1.x)
                return 180;
        }
        if (pos2.x == pos1.x) {
            if (pos2.y > pos1.y)
                return 90;
            if (pos2.y < pos1.y)
                return -90;
        }
        if (pos1.x == pos2.x && pos1.y == pos2.y)
            return 0;
        if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
            if (pos2.x > pos1.x && pos2.y > pos1.y)
                return cc.misc.radiansToDegrees(Math.atan(tan));
            if (pos2.x > pos1.x && pos2.y < pos1.y)
                return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
            if (pos2.x < pos1.x && pos2.y > pos1.y)
                return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
            if (pos2.x < pos1.x && pos2.y < pos1.y)
                return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
        }
    };
    NewClass.prototype.update = function (dt) {
        this.node.angle = this.checkAngle();
        // this.checkPos()
        // this.icon.angle = -this.node.angle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQSF8yMVxcYXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0RkM7UUF6RkcsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUN0QixXQUFLLEdBQUcsR0FBRyxDQUFBOztJQXdGZixDQUFDO0lBdkZHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1lBQzFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsMEZBQTBGO1lBQzFGLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUE7WUFFMUIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1lBQzVCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFL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QUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEc7SUFDTCxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsa0JBQWtCO1FBQ2xCLHNDQUFzQztJQUUxQyxDQUFDO0lBeEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFITCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEY1QjtJQUFELGVBQUM7Q0E1RkQsQUE0RkMsQ0E1RnFDLEVBQUUsQ0FBQyxTQUFTLEdBNEZqRDtrQkE1Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGxcbiAgICBwYXJhbSA9IDEwMFxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgY2hlY2tBbmdsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBwb3NIZXJvID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZTIxXCIpLmhlcm8ucG9zaXRpb25cbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgICAgIC8vIGxldCBwb3MyID0gdGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygtdGhpcy5jYW1lcmEucG9zaXRpb24ueCwtIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkpKVxuICAgICAgICAgICAgbGV0IHBvczIgPSB0YXJnZXQucG9zaXRpb25cblxuICAgICAgICAgICAgcG9zMiA9IHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczIpO1xuICAgICAgICAgICAgcG9zMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMik7XG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uXG4gICAgICAgICAgICBsZXQgdGFuID0gKHBvczIueCAtIHBvcy54ICE9PSAwKSA/IChwb3MyLnkgLSBwb3MueSAtIDMwKSAvIChwb3MyLnggLSBwb3MueCkgOiAwXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4odGFuKSAqICgxODAgLyAoTWF0aC5QSSkpO1xuICAgICAgICAgICAgYW5nbGUgPSAocG9zLnggPD0gcG9zMi54KSA/IGFuZ2xlIDogYW5nbGUgKyAxODA7XG4gICAgICAgICAgICBsZXQgcGFyYW0gPSB0aGlzLnBhcmFtO1xuICAgICAgICAgICAgbGV0IGFuZ2xlMiA9IHRoaXMuY2hlY2tBbmdsZTIocG9zSGVybywgcG9zMilcbiAgICAgICAgICAgIGFuZ2xlMiA9IGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhhbmdsZTIpXG4gICAgICAgICAgICBsZXQgcG9zMyA9IHBvc0hlcm8uYWRkKGNjLnYzKHBhcmFtICogTWF0aC5jb3MoYW5nbGUyKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZTIpKSlcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvczNcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZVggPSAocG9zLnggPD0gdGFyZ2V0LngpID8gMC41IDogLTAuNTtcbiAgICAgICAgICAgIHJldHVybiBhbmdsZTtcblxuXG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrUG9zKCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgIGxldCBzb24gPSB0aGlzLm5vZGUucGFyZW50XG4gICAgICAgIGxldCBwb3MyID0gdGFyZ2V0LnBvc2l0aW9uXG5cbiAgICAgICAgcG9zMiA9IHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczIpO1xuICAgICAgICBwb3MyID0gc29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKTtcblxuXG5cblxuICAgICAgICAvLyBpZihzb24ueT49cG9zMi55KXtcbiAgICAgICAgLy8gaWYgKHNvbi54IDw9IHBvczIueCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygxMzgsIDY2KVxuXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoc29uLnggPiBwb3MyLngpIHtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygxNjUsIDY2KVxuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgLy8gICAgIGlmIChzb24ueCA+IHBvczIueCkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDEzOCwgNjYpXG5cbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoc29uLnggPCBwb3MyLngpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygxNjUsIDY2KVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cblxuICAgIH1cbiAgICBjaGVja0FuZ2xlMihwb3MxLCBwb3MyKSB7XG4gICAgICAgIGxldCB0YW4gPSBNYXRoLmFicyhwb3MyLnkgLSBwb3MxLnkpIC8gTWF0aC5hYnMocG9zMi54IC0gcG9zMS54KTtcbiAgICAgICAgaWYgKHBvczIueSA9PSBwb3MxLnkpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLngpIHJldHVybiAwO1xuICAgICAgICAgICAgaWYgKHBvczIueCA8IHBvczEueCkgcmV0dXJuIDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3MyLnggPT0gcG9zMS54KSB7XG4gICAgICAgICAgICBpZiAocG9zMi55ID4gcG9zMS55KSByZXR1cm4gOTA7XG4gICAgICAgICAgICBpZiAocG9zMi55IDwgcG9zMS55KSByZXR1cm4gLTkwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3MxLnggPT0gcG9zMi54ICYmIHBvczEueSA9PSBwb3MyLnkpIHJldHVybiAwO1xuICAgICAgICBpZiAocG9zMS54ICE9PSBwb3MyLnggJiYgcG9zMS55ICE9PSBwb3MyLnkpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLnggJiYgcG9zMi55ID4gcG9zMS55KSByZXR1cm4gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKTtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLnggJiYgcG9zMi55IDwgcG9zMS55KSByZXR1cm4gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSAqIC0xO1xuICAgICAgICAgICAgaWYgKHBvczIueCA8IHBvczEueCAmJiBwb3MyLnkgPiBwb3MxLnkpIHJldHVybiAoMTgwIC0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSk7XG4gICAgICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54ICYmIHBvczIueSA8IHBvczEueSkgcmV0dXJuIC0oMTgwIC0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuY2hlY2tBbmdsZSgpO1xuICAgICAgICAvLyB0aGlzLmNoZWNrUG9zKClcbiAgICAgICAgLy8gdGhpcy5pY29uLmFuZ2xlID0gLXRoaXMubm9kZS5hbmdsZTtcblxuICAgIH1cbn1cbiJdfQ==