
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Constant');
require('./assets/script/Game');
require('./assets/script/JoyStick');
require('./assets/script/PH_17/Game17');
require('./assets/script/PH_21/Game21');
require('./assets/script/PH_21/arrow');
require('./assets/script/Skill');
require('./assets/script/anim');
require('./assets/script/bar');
require('./assets/script/box/popHero');
require('./assets/script/btnHero');
require('./assets/script/bullet');
require('./assets/script/card/cardRR');
require('./assets/script/charMap');
require('./assets/script/chest');
require('./assets/script/chest/Chest');
require('./assets/script/chest/ChestListener');
require('./assets/script/common/AdManager');
require('./assets/script/common/PlatformBrandIcon');
require('./assets/script/effect');
require('./assets/script/enemy');
require('./assets/script/enemyListener');
require('./assets/script/enemy/bulletEnemyListener');
require('./assets/script/enemy/chimera');
require('./assets/script/enemy/darkOctopus');
require('./assets/script/enemy/dragon');
require('./assets/script/enemy/enemySkillListener');
require('./assets/script/enemy/eventBossListener');
require('./assets/script/enemy/giantRock');
require('./assets/script/enemy/rangeEnemyListener');
require('./assets/script/enemy/rangeTargetEnemy');
require('./assets/script/gamePlay');
require('./assets/script/gem');
require('./assets/script/hand');
require('./assets/script/heroListener');
require('./assets/script/hero/Arthur');
require('./assets/script/hero/Circle');
require('./assets/script/hero/EventHeroListener');
require('./assets/script/hero/Goku');
require('./assets/script/hero/Mako');
require('./assets/script/hero/Wukong');
require('./assets/script/hero/bulletHeroListener');
require('./assets/script/hero/hero');
require('./assets/script/house/house');
require('./assets/script/kaboom');
require('./assets/script/laser');
require('./assets/script/listener/skillListener');
require('./assets/script/listener/treeListener');
require('./assets/script/rangeHeroListener');
require('./assets/script/status');
require('./assets/script/tree');
require('./assets/script/updateBar');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/JoyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e138tFidRDnLPhU89XWAAw', 'JoyStick');
// script/JoyStick.ts

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
        _this.dot = null;
        _this.ring = null;
        _this.guild = null;
        _this.textName = null;
        _this.radius = null;
        _this.stickPos = null;
        _this.touchLocation = null;
        _this.gamePlay = null;
        _this.offGuide = false;
        _this.isMove = false;
        _this.textGuild = null;
        _this.isFirst = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.radius = this.ring.width / 2;
        this.initTouchEvent();
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
    };
    NewClass.prototype.initTouchEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    NewClass.prototype.touchStartEvent = function (event) {
        // if (!this.offGuide) {
        //     this.offGuide = true;
        //     this.guild.active = false
        //     this.gamePlay.startGame()
        //     this.node.opacity = 255;
        //     if (!this.isFirst) {
        //         this.isFirst = true
        //         cc.tween(this.textGuild).to(0.2, { scale: 0.7 }).start()
        //     }
        //     // cc.Canvas.instance.node.emit(Constant.EVENT.SPAWN_ENEMY);
        // }
        // if (this.gamePlay.isPhase2) {
        //     this.gamePlay.isPhase2 = false;
        //     this.gamePlay.onBoss()
        // }
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        var distance = touchPos.sub(this.ring.getPosition().mag());
        // if (this.radius > distance) {
        //     this.dot.setPosition(touchPos)
        // }
        this.gamePlay.heroComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.heroComp.run();
        // this.stickPos = touchPos;
        this.node.opacity = 255;
        this.touchLocation = event.getLocation();
        // for (let child of this.gamePlay.arrHero) {
        //     if (!this.gamePlay.heroComp.isSKill) {
        //         child.getComponent(H).directionX = (this.dot.x > 0) ? -1 : 1;
        //         child.getComponent(H).run();
        //     }
        // }
        // this.ring.setPosition(touchPos);
        // this.dot.setPosition(touchPos);
    };
    // isFirstENd = false
    NewClass.prototype.touchMoveEvent = function (event) {
        if (this.touchLocation === event.getLocation()) {
            return false;
        }
        this.isMove = true;
        this.textName.active = false;
        var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.mag();
        var posX = this.stickPos.x + touchPos.x;
        var posY = this.stickPos.y + touchPos.y;
        var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
        if (this.radius > distance) {
            this.dot.setPosition(cc.v2(posX, posY));
        }
        else {
            var x = this.stickPos.x + p.x * this.radius;
            var y = this.stickPos.y + p.y * this.radius;
            this.dot.setPosition(cc.v2(x, y));
        }
        this.gamePlay.heroComp.run();
        this.gamePlay.heroComp.moveDir = p;
        this.gamePlay.heroComp.directionX = (this.dot.x > 0) ? -1 : 1;
        // for (let child of this.gamePlay.arrHero) {
        //     if (!this.gamePlay.heroComp.isSKill) {
        //         child.getComponent(H).directionX = (this.dot.x > 0) ? -1 : 1;
        //         child.getComponent(H).run();
        //         child.getComponent(H).moveDir = p;
        //     }
        // }
    };
    NewClass.prototype.touchEndEvent = function () {
        this.dot.setPosition(this.ring.getPosition());
        // this.node.opacity = 0;
        this.isMove = false;
        this.gamePlay.heroComp.stop();
        this.textName.active = true;
        // if (!this.isFirstENd) {
        //     this.isFirstENd = true
        //     cc.tween(this.textGuild).to(0.2, { scale: 0 }).start()
        // }
        // for (let child of this.gamePlay.arrHero) {
        //     child.getComponent(H).stop();
        // }
        // this.gamePlay.circle.getComponent("Circle").checkAtk()
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ring", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textName", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKb3lTdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1JQztRQWhJRyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixhQUFPLEdBQUcsS0FBSyxDQUFBOztJQWdIbkIsQ0FBQztJQS9HRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWpFLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFD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UUFDOUMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QiwwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLDZEQUE2RDtRQUM3RCxJQUFJO1FBQ0osNkNBQTZDO1FBQzdDLG9DQUFvQztRQUVwQyxJQUFJO1FBQ0oseURBQXlEO0lBRTdELENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtJQUNULENBQUM7SUEvSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQVN6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBbEJSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtSTVCO0lBQUQsZUFBQztDQW5JRCxBQW1JQyxDQW5JcUMsRUFBRSxDQUFDLFNBQVMsR0FtSWpEO2tCQW5Jb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuaW1wb3J0IEggZnJvbSBcIi4vaGVyby9oZXJvXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG90OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByaW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGV4dE5hbWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcmFkaXVzID0gbnVsbDtcbiAgICBzdGlja1BvcyA9IG51bGw7XG4gICAgdG91Y2hMb2NhdGlvbiA9IG51bGw7XG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuICAgIG9mZkd1aWRlID0gZmFsc2U7XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGV4dEd1aWxkOiBjYy5Ob2RlID0gbnVsbFxuICAgIGlzRmlyc3QgPSBmYWxzZVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLnJpbmcud2lkdGggLyAyO1xuICAgICAgICB0aGlzLmluaXRUb3VjaEV2ZW50KCk7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoJ0dhbWUnKTtcblxuICAgIH1cbiAgICBpbml0VG91Y2hFdmVudCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICB9XG4gICAgdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5vZmZHdWlkZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5vZmZHdWlkZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVQbGF5LnN0YXJ0R2FtZSgpXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5pc0ZpcnN0KSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZVxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dEd1aWxkKS50bygwLjIsIHsgc2NhbGU6IDAuNyB9KS5zdGFydCgpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICAvLyBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KENvbnN0YW50LkVWRU5ULlNQQVdOX0VORU1ZKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lUGxheS5pc1BoYXNlMikge1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lUGxheS5pc1BoYXNlMiA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lUGxheS5vbkJvc3MoKVxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICB0aGlzLnN0aWNrUG9zID0gdGhpcy5yaW5nLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3Muc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpLm1hZygpKTtcbiAgICAgICAgLy8gaWYgKHRoaXMucmFkaXVzID4gZGlzdGFuY2UpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAuZGlyZWN0aW9uWCA9ICh0aGlzLmRvdC54ID4gMCkgPyAtMSA6IDE7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAucnVuKCk7XG4gICAgICAgIC8vIHRoaXMuc3RpY2tQb3MgPSB0b3VjaFBvcztcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMudG91Y2hMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5nYW1lUGxheS5hcnJIZXJvKSB7XG4gICAgICAgIC8vICAgICBpZiAoIXRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAuaXNTS2lsbCkge1xuXG4gICAgICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEgpLmRpcmVjdGlvblggPSAodGhpcy5kb3QueCA+IDApID8gLTEgOiAxO1xuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChIKS5ydW4oKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLnJpbmcuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuICAgICAgICAvLyB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XG5cbiAgICB9XG4gICAgLy8gaXNGaXJzdEVOZCA9IGZhbHNlXG4gICAgdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hMb2NhdGlvbiA9PT0gZXZlbnQuZ2V0TG9jYXRpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlXG4gICAgICAgIHRoaXMudGV4dE5hbWUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLnJpbmcuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3MubWFnKCk7XG4gICAgICAgIGNvbnN0IHBvc1ggPSB0aGlzLnN0aWNrUG9zLnggKyB0b3VjaFBvcy54O1xuICAgICAgICBjb25zdCBwb3NZID0gdGhpcy5zdGlja1Bvcy55ICsgdG91Y2hQb3MueTtcblxuICAgICAgICBjb25zdCBwID0gY2MudjIocG9zWCwgcG9zWSkuc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKTtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHBvc1gsIHBvc1kpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLnN0aWNrUG9zLnggKyBwLnggKiB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLnN0aWNrUG9zLnkgKyBwLnkgKiB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLnJ1bigpO1xuICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLm1vdmVEaXIgPSBwO1xuICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLmRpcmVjdGlvblggPSAodGhpcy5kb3QueCA+IDApID8gLTEgOiAxO1xuXG4gICAgICAgIC8vIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuZ2FtZVBsYXkuYXJySGVybykge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLmlzU0tpbGwpIHtcbiAgICAgICAgLy8gICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoSCkuZGlyZWN0aW9uWCA9ICh0aGlzLmRvdC54ID4gMCkgPyAtMSA6IDE7XG4gICAgICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEgpLnJ1bigpO1xuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChIKS5tb3ZlRGlyID0gcDtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyB9XG5cbiAgICB9XG4gICAgdG91Y2hFbmRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAuc3RvcCgpO1xuICAgICAgICB0aGlzLnRleHROYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGlmICghdGhpcy5pc0ZpcnN0RU5kKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzRmlyc3RFTmQgPSB0cnVlXG4gICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLnRleHRHdWlsZCkudG8oMC4yLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmdhbWVQbGF5LmFyckhlcm8pIHtcbiAgICAgICAgLy8gICAgIGNoaWxkLmdldENvbXBvbmVudChIKS5zdG9wKCk7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmdhbWVQbGF5LmNpcmNsZS5nZXRDb21wb25lbnQoXCJDaXJjbGVcIikuY2hlY2tBdGsoKVxuXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PH_17/Game17.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5530IHa71PDI81ZFhiutm7', 'Game17');
// script/PH_17/Game17.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boss = null;
        _this.listBoss = [];
        _this.mainCamera = null;
        _this.hero = null;
        _this.goku = null;
        _this.kazetsu = null;
        _this.arthur = null;
        _this.heroNode = null;
        _this.enemylist = null;
        // @property(cc.Node)
        // boss: cc.Node = null;
        _this.bossBloodBar = null;
        _this.scene1 = null;
        _this.coinBar = null;
        _this.preDamage = null;
        _this.preFxAtk = null;
        _this.listEnemy = null;
        _this.linkToStore = null;
        _this.bgSOund = null;
        _this.soundWoodin = null;
        _this.soundWoodOut = null;
        _this.soundEnd = null;
        _this.soundEnemyDie = null;
        _this.soundUpdate = null;
        _this.soundBtn = null;
        _this.JoyStick = null;
        _this.MissionBar = null;
        _this.listRuby = null;
        _this.uiNode = null;
        _this.endGameNode = null;
        _this.preMeat = null;
        _this.tranScreen = null;
        _this.listScreen = [];
        //
        _this.listCard = null;
        _this.listHero = null;
        _this.guild = null;
        _this.textNameBoss = null;
        _this.bloodBoss = null;
        _this.isMoving = false;
        _this.isvertical = false;
        _this.heroComp = null;
        _this.isPauseGame = false;
        _this.isCountEnemiesDie = 0;
        _this.isPhase2 = false;
        _this.isSound = false;
        _this.isMain = null;
        _this.isEndGame = false;
        _this.isCountFollow = 0;
        _this.isCountBoss = 0;
        _this.isCountUnlock = 0;
        _this.isCountHeroDie = 0;
        _this.isFirst = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_pairBit |
        //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit
        //     ;
    };
    NewClass.prototype.start = function () {
        this.reponsive();
        cc.audioEngine.play(this.bgSOund, true, 0.4);
        this.isMain = this.heroComp;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        this.heroComp = this.hero.getComponent(hero_1.default);
        // this.showMission()
        this.setPosHero();
    };
    NewClass.prototype.offJoyStick = function () {
        this.JoyStick.active = false;
        this.JoyStick.getComponent("JoyStick").touchEndEvent();
    };
    NewClass.prototype.onJoyStick = function () {
        this.JoyStick.active = true;
    };
    NewClass.prototype.startGame = function () {
        this.isCountBoss++;
        this.boss.getComponent(cc.CircleCollider).enabled = true;
        this.boss.getChildByName("range").getComponent(cc.CircleCollider).enabled = true;
        // this.kazetsu.getComponent(H).moveAuto();
        // this.arthur.getComponent(H).moveAuto()
        // this.goku.getComponent(H).moveAuto()
        var listArr = [cc.v3(-142, -10), cc.v3(0, -100), cc.v3(-126, -115)];
        if (this.isCountBoss == 3) {
            console.log("game");
            listArr = [cc.v3(-190, -5), cc.v3(-59, -69), cc.v3(198, -14)];
        }
        this.kazetsu.getComponent(hero_1.default).moveToPos(listArr[1], 1);
        this.arthur.getComponent(hero_1.default).moveToPos(listArr[0], 1);
        this.goku.getComponent(hero_1.default).moveToPos(listArr[2], 1);
    };
    NewClass.prototype.btn_battle = function (event) {
        event.currentTarget.getComponent(cc.Button).enabled = false;
        this.listCard.active = false;
        this.guild.active = true;
        this.onJoyStick();
        cc.audioEngine.play(this.soundBtn, false, 1);
    };
    NewClass.prototype.countDie = function (tag) {
        this.isCountEnemiesDie++;
        if (this.isCountEnemiesDie < 3) {
            this.tranScreen.getComponent(cc.Animation).play();
            this.openNewMap(this.isCountEnemiesDie);
        }
        else if (this.isCountEnemiesDie == 3) {
            this.endGameNode.active = true;
            this.linkToStore.active = true;
            cc.audioEngine.play(this.soundEnd, false, 1);
        }
    };
    NewClass.prototype.openNewMap = function (value) {
        var _this = this;
        this.offJoyStick();
        switch (value) {
            case 1:
                this.scheduleOnce(function () {
                    _this.listScreen[0].active = false;
                    _this.listScreen[1].active = true;
                    _this.kazetsu.getComponent(hero_1.default).setDefault();
                    _this.goku.getComponent(hero_1.default).setDefault();
                    _this.arthur.getComponent(hero_1.default).setDefault();
                    _this.hero.position = cc.v3(-99, -277);
                    _this.arthur.position = cc.v3(-238, -261);
                    _this.kazetsu.position = cc.v3(-43, -351);
                    _this.goku.position = cc.v3(-170, -405);
                }, 0.5);
                this.JoyStick.getComponent("JoyStick").offGuide = false;
                this.boss = this.listBoss[0];
                this.textNameBoss.string = "CHIMERA";
                break;
            case 2:
                this.scheduleOnce(function () {
                    _this.listScreen[1].active = false;
                    _this.listScreen[2].active = true;
                    _this.kazetsu.getComponent(hero_1.default).setDefault();
                    _this.goku.getComponent(hero_1.default).setDefault();
                    _this.arthur.getComponent(hero_1.default).setDefault();
                    _this.hero.position = cc.v3(5, -270);
                    _this.arthur.position = cc.v3(-155, -292);
                    _this.kazetsu.position = cc.v3(-7, -377);
                    _this.goku.position = cc.v3(187, -352);
                }, 0.5);
                this.JoyStick.getComponent("JoyStick").offGuide = false;
                this.boss = this.listBoss[1];
                this.textNameBoss.string = "DARK OCTOPUS";
                break;
        }
        this.boss.getComponent("enemy").blood = this.bloodBoss;
        this.scheduleOnce(function () {
            _this.bloodBoss.fillRange = 1;
        }, 0.2);
        this.scheduleOnce(function () {
            _this.onJoyStick();
        }, 1.5);
    };
    NewClass.prototype.countHeroDie = function () {
        this.isCountHeroDie++;
        if (this.isCountHeroDie == 4) {
            this.onEndGame();
        }
    };
    NewClass.prototype.setPosHero = function () {
        var arrPos = [cc.v3(-367, -986), cc.v3(-375, -895), cc.v3(-309, -819), cc.v3(-370, -1009)];
        // this.goku.getComponent(H).localPos = this.heroComp.arrPosFollow[0];
        this.kazetsu.getComponent(hero_1.default).gamePlay = this;
        this.arthur.getComponent(hero_1.default).gamePlay = this;
        this.goku.getComponent(hero_1.default).gamePlay = this;
        this.heroComp.addFollow(this.arthur);
        this.heroComp.addFollow(this.kazetsu);
        this.heroComp.addFollow(this.goku);
        // this.hero.position = arrPos[0].add(cc.v3(100, 0));
        // this.mako.position = arrPos[1]
        // this.goku.position = arrPos[2]
        // this.kazetsu.position = arrPos[3]
    };
    // showVsBoss() {
    //     console.log("setEnd")
    //     this.boss.active = true;
    //     this.isMoving = true;
    //     let arrPos = [cc.v3(-367, -986), cc.v3(-375, -895), cc.v3(-309, -819), cc.v3(-370, -1009)]
    //     let count = 0;
    //     // this.listIconHero[1].active = false
    //     this.goku.getChildByName("fxAppear").active = true;
    //     this.hero.getChildByName("fxAppear").active = true;
    //     this.kazetsu.getChildByName("fxAppear").active = true;
    //     this.mako.getChildByName("fxAppear").active = true;
    //     this.scheduleOnce(() => {
    //         this.hero.active = false;
    //         this.mako.active = false;
    //         this.kazetsu.active = false;
    //         this.goku.active = false;
    //     }, 0.3)
    //     this.JoyStick.active = false;
    //     this.JoyStick.getComponent("JoyStick").touchEndEvent()
    //     // cc.tween(this.bossExpBar).delay(0.3).to(0.3, { opacity: 0 }).call(() => {
    //     //     this.bossExpBar.active = false;
    //     // }).start()
    //     cc.tween(this.mainCamera.node).delay(0.4).to(0.5, { position: cc.v3(-80, -700) }).call(() => {
    //         console.log("setPos")
    //         this.bossBloodBar.active = true
    //         this.hero.getComponent(H).offColider();
    //         this.mako.getComponent(H).offColider()
    //         this.goku.getComponent(H).offColider()
    //         this.kazetsu.getComponent(H).offColider()
    //         this.kazetsu.zIndex = cc.macro.MAX_ZINDEX
    //         this.hero.position = arrPos[0].add(cc.v3(100, 0));
    //         count++
    //         this.mako.position = arrPos[1]
    //         count++
    //         this.goku.position = arrPos[2]
    //         count++
    //         this.kazetsu.position = arrPos[3]
    //         this.scheduleOnce(() => {
    //             this.boss.getChildByName("hand").active = true;
    //             this.initTouchEvent()
    //         }, 0.2)
    //         this.scheduleOnce(() => {
    //             // if(this.kazetsu!=null){
    //             //     this.kazetsu.getComponent(H).attacked(10000)
    //             // }
    //         }, 12)
    //     }).start()
    //     cc.tween(this.mainCamera).to(0.5, { zoomRatio: 0.8 }).start();
    // }
    NewClass.prototype.initTouchEvent = function () {
        this.scene1.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.scene1.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    NewClass.prototype.moveHeroToBoss = function () {
        this.heroComp.moveByPos(cc.v3(80, 50), 0.3);
        this.kazetsu.getComponent(hero_1.default).moveByPos(cc.v3(400, 50), 0.3);
        this.goku.getComponent(hero_1.default).moveByPos(cc.v3(100, 50), 0.3);
        // this.mako.getComponent(H).moveByPos(cc.v3(50, 20), 0.1)
    };
    NewClass.prototype.touchEndEvent = function (event) {
        var _this = this;
        var pos = event.getLocation();
        // pos=this.scene1.convertToWorldSpaceAR(pos)
        pos = this.boss.parent.convertToNodeSpaceAR(pos);
        pos = pos.add(this.mainCamera.node.position);
        var posBoss = this.boss.position.add(cc.v3(0, 80));
        if (this.boss.position.sub(pos).mag() <= 300) {
            console.log("atk boss");
            cc.tween(this.boss.children[0]).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            if (this.isFirst == false) {
                this.isFirst = true;
                this.scheduleOnce(function () {
                    _this.boss.getChildByName("hand").active = false;
                }, 1);
                this.moveHeroToBoss();
            }
            this.createDamageBoss(pos);
        }
    };
    NewClass.prototype.spawEnenmy = function () {
        // this.listIconHero[0].active = true;
        // this.listIconHero[2].active = true;
    };
    NewClass.prototype.onEndGame = function () {
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        cc.audioEngine.play(this.soundEnd, false, 1);
        this.endGameNode.active = true;
        this.linkToStore.active = true;
    };
    NewClass.prototype.createMeat = function (pos) {
        var meat = cc.instantiate(this.preMeat);
        meat.parent = this.node;
        meat.position = pos;
        meat.scale = 0.8;
    };
    NewClass.prototype.createDamage = function (pos) {
        var _this = this;
        if (this.isSound == false) {
            this.isSound = true;
            cc.audioEngine.play(this.soundEnemyDie, false, 1);
            this.scheduleOnce(function () {
                _this.isSound = false;
            }, 0.15);
        }
        var rdx = Math.floor(Math.random() * 200) - 100;
        var rdy = Math.floor(Math.random() * 100) + 80;
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos.add(cc.v3(rdx, rdy));
        ;
        damagefx.scale = 1.2;
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos.add(cc.v3(rdx, rdy));
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2;
        damage.zIndex = cc.macro.MAX_ZINDEX;
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528");
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
    };
    NewClass.prototype.createDamageBoss = function (pos) {
        var _this = this;
        if (this.isSound == false) {
            this.isSound = true;
            cc.audioEngine.play(this.soundEnemyDie, false, 1);
            this.scheduleOnce(function () {
                _this.isSound = false;
            }, 0.15);
        }
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos;
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2.5;
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#F87A33");
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
        this.boss.getComponent("enemy").attacked(300);
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos;
        damagefx.scale = 1.4;
    };
    NewClass.prototype.moveWood = function (wood) {
        var _this = this;
        cc.audioEngine.play(this.soundWoodin, false, 1);
        var pos = this.MissionBar.position;
        pos = pos.add(cc.v3(-50, 0));
        var pos2 = wood.parent.convertToWorldSpaceAR(wood.position);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2);
        wood.parent = this.uiNode;
        wood.scale *= 1.3;
        wood.position = pos2.add(cc.v3(-this.mainCamera.node.position.x, -this.mainCamera.node.position.y));
        cc.tween(wood).to(0.4, { position: pos }).call(function () {
            _this.MissionBar.getComponent("updateBar").updateBar();
            wood.getComponent(cc.Animation).play("exp");
            cc.audioEngine.play(_this.soundWoodOut, false, 1);
        }).start();
    };
    NewClass.prototype.reponsive = function () {
        // let canvas = this.node.getComponent(cc.Canvas);
        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.coinBar.scale = 1
        //         this.endGameNode.position = cc.v3(0, 0)
        //         this.endGameNode.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;
        //         }
        //         this.mainCamera.zoomRatio = 0.9
        //     }
        // }
        // else {
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.coinBar.scale = 1.3
        //     this.endGameNode.position = cc.v3(0, -100)
        //     this.endGameNode.scale = 1.2
        //     this.mainCamera.zoomRatio = 1.3
        // }
    };
    NewClass.prototype.update = function () {
        // if (!this.isMoving) {
        //     this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(0, 50)));
        // }
        // let canvas = this.node.getComponent(cc.Canvas);
        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.coinBar.scale = 1
        //         this.endGameNode.position = cc.v3(0, 0)
        //         this.endGameNode.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;
        //         }
        //     }
        // }
        // else {
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.coinBar.scale = 1.3
        //     this.endGameNode.position = cc.v3(0, -100)
        //     this.endGameNode.scale = 1.2
        // }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBoss", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "goku", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kazetsu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arthur", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "heroNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "enemylist", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bossBloodBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preFxAtk", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listEnemy", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bgSOund", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodOut", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnemyDie", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpdate", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "JoyStick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "MissionBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listRuby", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGameNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preMeat", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tranScreen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listScreen", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listCard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "textNameBoss", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "bloodBoss", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQSF8xN1xcR2FtZTE3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThjQztRQTVjRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUV4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVksSUFBSSxDQUFBO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFpQixJQUFJLENBQUE7UUFFNUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7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RXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ087SUEzRVYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThjNUI7SUFBRCxlQUFDO0NBOWNELEFBOGNDLENBOWNxQyxFQUFFLENBQUMsU0FBUyxHQThjakQ7a0JBOWNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSCBmcm9tICcuLi9oZXJvL2hlcm8nXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJvc3M6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCb3NzOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIG1haW5DYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVybzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ29rdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2F6ZXRzdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJ0aHVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXlsaXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBib3NzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3NzQmxvb2RCYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNjZW5lMTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZURhbWFnZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUZ4QXRrOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RFbmVteTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYmdTT3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRXb29kaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFdvb2RPdXQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEVuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kRW5lbXlEaWU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZFVwZGF0ZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQnRuOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIEpveVN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBNaXNzaW9uQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0UnVieTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVNZWF0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRyYW5TY3JlZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RTY3JlZW46IGNjLk5vZGVbXSA9IFtdO1xuICAgIC8vXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENhcmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RIZXJvOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGd1aWxkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGV4dE5hbWVCb3NzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBibG9vZEJvc3M6IGNjLlNwcml0ZSA9IG51bGxcbiAgICBpc01vdmluZyA9IGZhbHNlO1xuICAgIGlzdmVydGljYWwgPSBmYWxzZTtcbiAgICBoZXJvQ29tcCA9IG51bGw7XG4gICAgaXNQYXVzZUdhbWUgPSBmYWxzZTtcbiAgICBpc0NvdW50RW5lbWllc0RpZSA9IDA7XG4gICAgaXNQaGFzZTIgPSBmYWxzZVxuICAgIGlzU291bmQgPSBmYWxzZVxuICAgIGlzTWFpbiA9IG51bGw7XG4gICAgaXNFbmRHYW1lID0gZmFsc2U7XG4gICAgaXNDb3VudEZvbGxvdyA9IDBcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAgICAgLy8gICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfcGFpckJpdCB8XG4gICAgICAgIC8vICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2NlbnRlck9mTWFzc0JpdCB8XG4gICAgICAgIC8vICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAgICAgLy8gICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXRcbiAgICAgICAgLy8gICAgIDtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVwb25zaXZlKClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnU091bmQsIHRydWUsIDAuNClcbiAgICAgICAgdGhpcy5pc01haW4gPSB0aGlzLmhlcm9Db21wXG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhlcm9Db21wID0gdGhpcy5oZXJvLmdldENvbXBvbmVudChIKVxuICAgICAgICAvLyB0aGlzLnNob3dNaXNzaW9uKClcbiAgICAgICAgdGhpcy5zZXRQb3NIZXJvKClcbiAgICB9XG4gICAgaXNDb3VudEJvc3MgPSAwXG4gICAgb2ZmSm95U3RpY2soKSB7XG4gICAgICAgIHRoaXMuSm95U3RpY2suYWN0aXZlID0gZmFsc2VcbiAgICAgICAgdGhpcy5Kb3lTdGljay5nZXRDb21wb25lbnQoXCJKb3lTdGlja1wiKS50b3VjaEVuZEV2ZW50KClcbiAgICB9XG4gICAgb25Kb3lTdGljaygpIHtcbiAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSB0cnVlXG5cbiAgICB9XG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmlzQ291bnRCb3NzKytcbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9zcy5nZXRDaGlsZEJ5TmFtZShcInJhbmdlXCIpLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMua2F6ZXRzdS5nZXRDb21wb25lbnQoSCkubW92ZUF1dG8oKTtcbiAgICAgICAgLy8gdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLm1vdmVBdXRvKClcbiAgICAgICAgLy8gdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5tb3ZlQXV0bygpXG5cbiAgICAgICAgbGV0IGxpc3RBcnIgPSBbY2MudjMoLTE0MiwgLTEwKSwgY2MudjMoMCwgLTEwMCksIGNjLnYzKC0xMjYsIC0xMTUpXVxuICAgICAgICBpZiAodGhpcy5pc0NvdW50Qm9zcyA9PSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVcIilcbiAgICAgICAgICAgIGxpc3RBcnIgPSBbY2MudjMoLTE5MCwgLTUpLCBjYy52MygtNTksIC02OSksIGNjLnYzKDE5OCwgLTE0KV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLm1vdmVUb1BvcyhsaXN0QXJyWzFdLCAxKTtcbiAgICAgICAgdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLm1vdmVUb1BvcyhsaXN0QXJyWzBdLCAxKTtcbiAgICAgICAgdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5tb3ZlVG9Qb3MobGlzdEFyclsyXSwgMSk7XG5cbiAgICB9XG5cbiAgICBidG5fYmF0dGxlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMubGlzdENhcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLm9uSm95U3RpY2soKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCdG4sIGZhbHNlLCAxKVxuICAgIH1cbiAgICBjb3VudERpZSh0YWcpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50RW5lbWllc0RpZSsrXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRFbmVtaWVzRGllIDwgMykge1xuICAgICAgICAgICAgdGhpcy50cmFuU2NyZWVuLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgdGhpcy5vcGVuTmV3TWFwKHRoaXMuaXNDb3VudEVuZW1pZXNEaWUpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc0NvdW50RW5lbWllc0RpZSA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb3Blbk5ld01hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLm9mZkpveVN0aWNrKClcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0U2NyZWVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFNjcmVlblsxXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2F6ZXRzdS5nZXRDb21wb25lbnQoSCkuc2V0RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdva3UuZ2V0Q29tcG9uZW50KEgpLnNldERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGh1ci5nZXRDb21wb25lbnQoSCkuc2V0RGVmYXVsdCgpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvLnBvc2l0aW9uID0gY2MudjMoLTk5LCAtMjc3KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRodXIucG9zaXRpb24gPSBjYy52MygtMjM4LCAtMjYxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rYXpldHN1LnBvc2l0aW9uID0gY2MudjMoLTQzLCAtMzUxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb2t1LnBvc2l0aW9uID0gY2MudjMoLTE3MCwgLTQwNSk7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5Kb3lTdGljay5nZXRDb21wb25lbnQoXCJKb3lTdGlja1wiKS5vZmZHdWlkZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5ib3NzID0gdGhpcy5saXN0Qm9zc1swXVxuXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0TmFtZUJvc3Muc3RyaW5nID0gXCJDSElNRVJBXCJcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0U2NyZWVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFNjcmVlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLnNldERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5zZXREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLnNldERlZmF1bHQoKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5wb3NpdGlvbiA9IGNjLnYzKDUsIC0yNzApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGh1ci5wb3NpdGlvbiA9IGNjLnYzKC0xNTUsIC0yOTIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmthemV0c3UucG9zaXRpb24gPSBjYy52MygtNywgLTM3Nyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29rdS5wb3NpdGlvbiA9IGNjLnYzKDE4NywgLTM1Mik7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5Kb3lTdGljay5nZXRDb21wb25lbnQoXCJKb3lTdGlja1wiKS5vZmZHdWlkZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5ib3NzID0gdGhpcy5saXN0Qm9zc1sxXVxuICAgICAgICAgICAgICAgIHRoaXMudGV4dE5hbWVCb3NzLnN0cmluZyA9IFwiREFSSyBPQ1RPUFVTXCJcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9zcy5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5ibG9vZCA9IHRoaXMuYmxvb2RCb3NzXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmxvb2RCb3NzLmZpbGxSYW5nZSA9IDE7XG4gICAgICAgIH0sIDAuMilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkpveVN0aWNrKClcbiAgICAgICAgfSwgMS41KVxuXG4gICAgfVxuICAgIGlzQ291bnRVbmxvY2sgPSAwXG4gICAgaXNDb3VudEhlcm9EaWUgPSAwXG4gICAgY291bnRIZXJvRGllKCkge1xuICAgICAgICB0aGlzLmlzQ291bnRIZXJvRGllKys7XG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRIZXJvRGllID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMub25FbmRHYW1lKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRQb3NIZXJvKCkge1xuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKC0zNjcsIC05ODYpLCBjYy52MygtMzc1LCAtODk1KSwgY2MudjMoLTMwOSwgLTgxOSksIGNjLnYzKC0zNzAsIC0xMDA5KV1cbiAgICAgICAgLy8gdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5sb2NhbFBvcyA9IHRoaXMuaGVyb0NvbXAuYXJyUG9zRm9sbG93WzBdO1xuICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLmdhbWVQbGF5ID0gdGhpcztcbiAgICAgICAgdGhpcy5hcnRodXIuZ2V0Q29tcG9uZW50KEgpLmdhbWVQbGF5ID0gdGhpcztcbiAgICAgICAgdGhpcy5nb2t1LmdldENvbXBvbmVudChIKS5nYW1lUGxheSA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGVyb0NvbXAuYWRkRm9sbG93KHRoaXMuYXJ0aHVyKTtcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5hZGRGb2xsb3codGhpcy5rYXpldHN1KTtcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5hZGRGb2xsb3codGhpcy5nb2t1KTtcblxuXG4gICAgICAgIC8vIHRoaXMuaGVyby5wb3NpdGlvbiA9IGFyclBvc1swXS5hZGQoY2MudjMoMTAwLCAwKSk7XG4gICAgICAgIC8vIHRoaXMubWFrby5wb3NpdGlvbiA9IGFyclBvc1sxXVxuICAgICAgICAvLyB0aGlzLmdva3UucG9zaXRpb24gPSBhcnJQb3NbMl1cbiAgICAgICAgLy8gdGhpcy5rYXpldHN1LnBvc2l0aW9uID0gYXJyUG9zWzNdXG4gICAgfVxuICAgIC8vIHNob3dWc0Jvc3MoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2V0RW5kXCIpXG4gICAgLy8gICAgIHRoaXMuYm9zcy5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAvLyAgICAgbGV0IGFyclBvcyA9IFtjYy52MygtMzY3LCAtOTg2KSwgY2MudjMoLTM3NSwgLTg5NSksIGNjLnYzKC0zMDksIC04MTkpLCBjYy52MygtMzcwLCAtMTAwOSldXG4gICAgLy8gICAgIGxldCBjb3VudCA9IDA7XG4gICAgLy8gICAgIC8vIHRoaXMubGlzdEljb25IZXJvWzFdLmFjdGl2ZSA9IGZhbHNlXG4gICAgLy8gICAgIHRoaXMuZ29rdS5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuaGVyby5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMua2F6ZXRzdS5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMubWFrby5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuaGVyby5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMubWFrby5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMua2F6ZXRzdS5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMuZ29rdS5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgfSwgMC4zKVxuICAgIC8vICAgICB0aGlzLkpveVN0aWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICB0aGlzLkpveVN0aWNrLmdldENvbXBvbmVudChcIkpveVN0aWNrXCIpLnRvdWNoRW5kRXZlbnQoKVxuICAgIC8vICAgICAvLyBjYy50d2Vlbih0aGlzLmJvc3NFeHBCYXIpLmRlbGF5KDAuMykudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgLy8gICAgIC8vICAgICB0aGlzLmJvc3NFeHBCYXIuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIC8vIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLmRlbGF5KDAuNCkudG8oMC41LCB7IHBvc2l0aW9uOiBjYy52MygtODAsIC03MDApIH0pLmNhbGwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzZXRQb3NcIilcbiAgICAvLyAgICAgICAgIHRoaXMuYm9zc0Jsb29kQmFyLmFjdGl2ZSA9IHRydWVcbiAgICAvLyAgICAgICAgIHRoaXMuaGVyby5nZXRDb21wb25lbnQoSCkub2ZmQ29saWRlcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5tYWtvLmdldENvbXBvbmVudChIKS5vZmZDb2xpZGVyKClcbiAgICAvLyAgICAgICAgIHRoaXMuZ29rdS5nZXRDb21wb25lbnQoSCkub2ZmQ29saWRlcigpXG4gICAgLy8gICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLm9mZkNvbGlkZXIoKVxuICAgIC8vICAgICAgICAgdGhpcy5rYXpldHN1LnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVhcblxuICAgIC8vICAgICAgICAgdGhpcy5oZXJvLnBvc2l0aW9uID0gYXJyUG9zWzBdLmFkZChjYy52MygxMDAsIDApKTtcbiAgICAvLyAgICAgICAgIGNvdW50KytcbiAgICAvLyAgICAgICAgIHRoaXMubWFrby5wb3NpdGlvbiA9IGFyclBvc1sxXVxuICAgIC8vICAgICAgICAgY291bnQrK1xuICAgIC8vICAgICAgICAgdGhpcy5nb2t1LnBvc2l0aW9uID0gYXJyUG9zWzJdXG4gICAgLy8gICAgICAgICBjb3VudCsrXG4gICAgLy8gICAgICAgICB0aGlzLmthemV0c3UucG9zaXRpb24gPSBhcnJQb3NbM11cbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmJvc3MuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pbml0VG91Y2hFdmVudCgpXG4gICAgLy8gICAgICAgICB9LCAwLjIpXG5cbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAvLyBpZih0aGlzLmthemV0c3UhPW51bGwpe1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLmF0dGFja2VkKDEwMDAwKVxuXG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgfSwgMTIpXG4gICAgLy8gICAgIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS50bygwLjUsIHsgem9vbVJhdGlvOiAwLjggfSkuc3RhcnQoKTtcbiAgICAvLyB9XG4gICAgaW5pdFRvdWNoRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUxLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5zY2VuZTEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xuICAgIH1cbiAgICBpc0ZpcnN0ID0gZmFsc2VcbiAgICBtb3ZlSGVyb1RvQm9zcygpIHtcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5tb3ZlQnlQb3MoY2MudjMoODAsIDUwKSwgMC4zKVxuICAgICAgICB0aGlzLmthemV0c3UuZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52Myg0MDAsIDUwKSwgMC4zKVxuICAgICAgICB0aGlzLmdva3UuZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52MygxMDAsIDUwKSwgMC4zKVxuICAgICAgICAvLyB0aGlzLm1ha28uZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52Myg1MCwgMjApLCAwLjEpXG5cbiAgICB9XG4gICAgdG91Y2hFbmRFdmVudChldmVudCkge1xuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgLy8gcG9zPXRoaXMuc2NlbmUxLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXG4gICAgICAgIHBvcyA9IHRoaXMuYm9zcy5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICBwb3MgPSBwb3MuYWRkKHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uKVxuICAgICAgICBsZXQgcG9zQm9zcyA9IHRoaXMuYm9zcy5wb3NpdGlvbi5hZGQoY2MudjMoMCwgODApKVxuICAgICAgICBpZiAodGhpcy5ib3NzLnBvc2l0aW9uLnN1Yihwb3MpLm1hZygpIDw9IDMwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdGsgYm9zc1wiKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYm9zcy5jaGlsZHJlblswXSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGaXJzdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9zcy5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUhlcm9Ub0Jvc3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEYW1hZ2VCb3NzKHBvcylcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNwYXdFbmVubXkoKSB7XG4gICAgICAgIC8vIHRoaXMubGlzdEljb25IZXJvWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMubGlzdEljb25IZXJvWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25FbmRHYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuZEdhbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0VuZEdhbWUgPSB0cnVlXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXG4gICAgICAgIHRoaXMuZW5kR2FtZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBjcmVhdGVNZWF0KHBvcykge1xuICAgICAgICBsZXQgbWVhdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTWVhdCk7XG4gICAgICAgIG1lYXQucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIG1lYXQucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIG1lYXQuc2NhbGUgPSAwLjhcbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlKHBvcykge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzU291bmQgPSB0cnVlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmVteURpZSwgZmFsc2UsIDEpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gZmFsc2VcblxuICAgICAgICAgICAgfSwgMC4xNSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSAtIDEwMFxuICAgICAgICBsZXQgcmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArODBcbiAgICAgICAgbGV0IGRhbWFnZWZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVGeEF0ayk7XG4gICAgICAgIGRhbWFnZWZ4LnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICBkYW1hZ2VmeC5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMocmR4LCByZHkpKTs7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS4yXG4gICAgICAgIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSk7XG4gICAgICAgIGRhbWFnZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MyhyZHgsIHJkeSkpO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAyXG4gICAgICAgIGRhbWFnZS56SW5kZXg9Y2MubWFjcm8uTUFYX1pJTkRFWFxuICAgICAgICBsZXQgdmFsdWVEYW1hZ2UgPSByZCArIDEwMDBcbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0MyMzZERFwiKVxuXG4gICAgICAgIGlmICh2YWx1ZURhbWFnZSA+IDEyMDApIHtcbiAgICAgICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDMjM2RERcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVEYW1hZ2UgPiAxNTAwKSB7XG4gICAgICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzUzNTI4XCIpXG4gICAgICAgIH1cbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHZhbHVlRGFtYWdlLnRvU3RyaW5nKClcbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlQm9zcyhwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5lbXlEaWUsIGZhbHNlLCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTb3VuZCA9IGZhbHNlXG5cbiAgICAgICAgICAgIH0sIDAuMTUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhbWFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRGFtYWdlKTtcbiAgICAgICAgZGFtYWdlLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICBkYW1hZ2UucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApXG4gICAgICAgIGRhbWFnZS5zY2FsZSA9IDIuNVxuICAgICAgICBsZXQgdmFsdWVEYW1hZ2UgPSByZCArIDEwMDBcbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0Y4N0EzM1wiKVxuXG4gICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyB2YWx1ZURhbWFnZS50b1N0cmluZygpXG4gICAgICAgIHRoaXMuYm9zcy5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5hdHRhY2tlZCgzMDApXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS40XG4gICAgfVxuICAgIG1vdmVXb29kKHdvb2QpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuTWlzc2lvbkJhci5wb3NpdGlvblxuICAgICAgICBwb3MgPSBwb3MuYWRkKGNjLnYzKC01MCwgMCkpXG4gICAgICAgIGxldCBwb3MyID0gd29vZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pO1xuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMilcbiAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLnVpTm9kZTtcbiAgICAgICAgd29vZC5zY2FsZSAqPSAxLjNcbiAgICAgICAgd29vZC5wb3NpdGlvbiA9IHBvczIuYWRkKGNjLnYzKC10aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi54LCAtdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24ueSkpO1xuICAgICAgICBjYy50d2Vlbih3b29kKS50bygwLjQsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuTWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XG4gICAgICAgICAgICB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFdvb2RPdXQsIGZhbHNlLCAxKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIHJlcG9uc2l2ZSgpIHtcbiAgICAgICAgLy8gbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgLy8gaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDFcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnNjYWxlID0gMVxuICAgICAgICAvLyAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxLjNcbiAgICAgICAgLy8gICAgIHRoaXMuZW5kR2FtZU5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTAwKVxuICAgICAgICAvLyAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDEuMlxuICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8gaWYgKCF0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKDAsIDUwKSkpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGxldCBjYW52YXMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIC8vIGlmIChjYy53aW5TaXplLndpZHRoIDwgY2Mud2luU2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lTm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDApXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDFcbiAgICAgICAgLy8gICAgICAgICBpZiAoY2Mud2luU2l6ZS5oZWlnaHQgLyBjYy53aW5TaXplLndpZHRoIDwgMS4zNSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxLjNcbiAgICAgICAgLy8gICAgIHRoaXMuZW5kR2FtZU5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTAwKVxuICAgICAgICAvLyAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDEuMlxuXG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/card/cardRR.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd17edV3MrJK64VP9BAZUOhr', 'cardRR');
// script/card/cardRR.ts

"use strict";
// import { Constant } from "./Constant";
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
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.anim = null;
        _this.card_frame_arr = [];
        _this.card_face_down_frame = null;
        _this.card_name = null;
        _this.isRunning = false;
        _this.isOpen = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Card.prototype.start = function () {
        this.addListener();
        // this.appear();
    };
    Card.prototype.appear = function () {
        var t = cc.tween;
        t(this.node).set({ scale: 0 }).to(0.5, { scale: 1.1 }).start();
    };
    Card.prototype.changeIconOpen = function () {
        // if (this.card_name) {
        //     // let Global = cc.Global;
        this.node.getChildByName("block").active = false;
        //     // this.icon.spriteFrame = Global.getDataByName(this.card_frame_arr, this.card_name);
        // }
    };
    Card.prototype.changeIconClose = function () {
        this.icon.spriteFrame = this.card_face_down_frame;
    };
    Card.prototype.addListener = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        // cc.Canvas.instance.node.on(Constant.EVENT.CLOSE_CARD, this.onCloseCard, this);
    };
    Card.prototype.onTouchStart = function (e) {
        if (this.isRunning || this.isOpen) {
            return;
        }
        // cc.Canvas.instance.node.emit(Constant.EVENT.SOUND.CARD_OPEN);
        // cc.Canvas.instance.node.emit(Constant.EVENT.OFF_GUIDE);
        // let Global = cc.Global;
        // if (!this.card_name) {
        //     this.card_name = Global.CARD_ARR[Global.COUNT_CARD];
        //     Global.COUNT_CARD++;
        // }
        // this.anim.play("open_card");
        this.isRunning = true;
    };
    Card.prototype.finishOpen = function () {
        this.isOpen = true;
        this.isRunning = false;
        // this.checkSameCard();
    };
    Card.prototype.finishClose = function () {
        this.isOpen = false;
        this.isRunning = false;
    };
    // checkSameCard () {
    //     let Global = cc.Global;
    //     let check_card_arr = Global.CHECK_CARD_ARR;
    //     check_card_arr.push(this);
    //     if (check_card_arr.length == 2) {
    //         let card1 = check_card_arr[0];
    //         let card2 = check_card_arr[1];
    //         if (card1.card_name !== card2.card_name) {
    //             cc.Canvas.instance.node.emit(Constant.EVENT.CLOSE_CARD, check_card_arr);
    //             Global.CHECK_CARD_ARR = [];
    //         } else {
    //             // cc.Canvas.instance.node.emit(Constant.EVENT.SHOW_HERO);
    //             cc.Canvas.instance.node.emit(Constant.EVENT.SHOW_HERO, card1.node, card2.node);
    //         }
    //     }
    // }
    Card.prototype.onCloseCard = function (check_card_arr) {
        if (check_card_arr.indexOf(this) == -1) {
            return;
        }
        this.isRunning = true;
        this.anim.play("close_card");
        // cc.Canvas.instance.node.emit(Constant.EVENT.SOUND.CARD_CLOSE);
    };
    __decorate([
        property(cc.Sprite)
    ], Card.prototype, "icon", void 0);
    __decorate([
        property(cc.Animation)
    ], Card.prototype, "anim", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Card.prototype, "card_frame_arr", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Card.prototype, "card_face_down_frame", void 0);
    Card = __decorate([
        ccclass
    ], Card);
    return Card;
}(cc.Component));
exports.default = Card;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjYXJkXFxjYXJkUlIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBc0dDO1FBbkdHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBR3RDLDBCQUFvQixHQUFtQixJQUFJLENBQUM7UUFFNUMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUVqQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFlBQU0sR0FBRyxLQUFLLENBQUM7O1FBbUZmLGlCQUFpQjtJQUNyQixDQUFDO0lBbEZHLGVBQWU7SUFFZixvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLGlCQUFpQjtJQUNyQixDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDSSx3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUE7UUFDOUMsNEZBQTRGO1FBQzVGLElBQUk7SUFDUixDQUFDO0lBRUQsOEJBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLGlGQUFpRjtJQUNyRixDQUFDO0lBRUQsMkJBQVksR0FBWixVQUFhLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMvQixPQUFPO1NBQ1Y7UUFDRCxnRUFBZ0U7UUFDaEUsMERBQTBEO1FBQzFELDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsMkRBQTJEO1FBQzNELDJCQUEyQjtRQUMzQixJQUFJO1FBQ0osK0JBQStCO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsd0JBQXdCO0lBQzVCLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsa0RBQWtEO0lBQ2xELGlDQUFpQztJQUNqQyx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6QyxxREFBcUQ7SUFDckQsdUZBQXVGO0lBQ3ZGLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIseUVBQXlFO0lBQ3pFLDhGQUE4RjtJQUM5RixZQUFZO0lBQ1osUUFBUTtJQUNSLElBQUk7SUFFSiwwQkFBVyxHQUFYLFVBQVksY0FBYztRQUN0QixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsaUVBQWlFO0lBQ3JFLENBQUM7SUFoR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NDQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ2E7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDbUI7SUFaM0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNHeEI7SUFBRCxXQUFDO0NBdEdELEFBc0dDLENBdEdpQyxFQUFFLENBQUMsU0FBUyxHQXNHN0M7a0JBdEdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgY2FyZF9mcmFtZV9hcnI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBjYXJkX2ZhY2VfZG93bl9mcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgY2FyZF9uYW1lID0gbnVsbDtcblxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gICAgICAgIC8vIHRoaXMuYXBwZWFyKCk7XG4gICAgfVxuXG4gICAgYXBwZWFyKCkge1xuICAgICAgICBsZXQgdCA9IGNjLnR3ZWVuO1xuICAgICAgICB0KHRoaXMubm9kZSkuc2V0KHsgc2NhbGU6IDAgfSkudG8oMC41LCB7IHNjYWxlOiAxLjEgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uT3BlbigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY2FyZF9uYW1lKSB7XG4gICAgICAgIC8vICAgICAvLyBsZXQgR2xvYmFsID0gY2MuR2xvYmFsO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJibG9ja1wiKS5hY3RpdmU9ZmFsc2VcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IEdsb2JhbC5nZXREYXRhQnlOYW1lKHRoaXMuY2FyZF9mcmFtZV9hcnIsIHRoaXMuY2FyZF9uYW1lKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGNoYW5nZUljb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkX2ZhY2VfZG93bl9mcmFtZTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKENvbnN0YW50LkVWRU5ULkNMT1NFX0NBUkQsIHRoaXMub25DbG9zZUNhcmQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZyB8fCB0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmVtaXQoQ29uc3RhbnQuRVZFTlQuU09VTkQuQ0FSRF9PUEVOKTtcbiAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5PRkZfR1VJREUpO1xuICAgICAgICAvLyBsZXQgR2xvYmFsID0gY2MuR2xvYmFsO1xuICAgICAgICAvLyBpZiAoIXRoaXMuY2FyZF9uYW1lKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmNhcmRfbmFtZSA9IEdsb2JhbC5DQVJEX0FSUltHbG9iYWwuQ09VTlRfQ0FSRF07XG4gICAgICAgIC8vICAgICBHbG9iYWwuQ09VTlRfQ0FSRCsrO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwib3Blbl9jYXJkXCIpO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZmluaXNoT3BlbigpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmNoZWNrU2FtZUNhcmQoKTtcbiAgICB9XG5cbiAgICBmaW5pc2hDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGVja1NhbWVDYXJkICgpIHtcbiAgICAvLyAgICAgbGV0IEdsb2JhbCA9IGNjLkdsb2JhbDtcbiAgICAvLyAgICAgbGV0IGNoZWNrX2NhcmRfYXJyID0gR2xvYmFsLkNIRUNLX0NBUkRfQVJSO1xuICAgIC8vICAgICBjaGVja19jYXJkX2Fyci5wdXNoKHRoaXMpO1xuICAgIC8vICAgICBpZiAoY2hlY2tfY2FyZF9hcnIubGVuZ3RoID09IDIpIHtcbiAgICAvLyAgICAgICAgIGxldCBjYXJkMSA9IGNoZWNrX2NhcmRfYXJyWzBdO1xuICAgIC8vICAgICAgICAgbGV0IGNhcmQyID0gY2hlY2tfY2FyZF9hcnJbMV07XG4gICAgLy8gICAgICAgICBpZiAoY2FyZDEuY2FyZF9uYW1lICE9PSBjYXJkMi5jYXJkX25hbWUpIHtcbiAgICAvLyAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KENvbnN0YW50LkVWRU5ULkNMT1NFX0NBUkQsIGNoZWNrX2NhcmRfYXJyKTtcbiAgICAvLyAgICAgICAgICAgICBHbG9iYWwuQ0hFQ0tfQ0FSRF9BUlIgPSBbXTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5TSE9XX0hFUk8pO1xuICAgIC8vICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmVtaXQoQ29uc3RhbnQuRVZFTlQuU0hPV19IRVJPLCBjYXJkMS5ub2RlLCBjYXJkMi5ub2RlKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIG9uQ2xvc2VDYXJkKGNoZWNrX2NhcmRfYXJyKSB7XG4gICAgICAgIGlmIChjaGVja19jYXJkX2Fyci5pbmRleE9mKHRoaXMpID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcImNsb3NlX2NhcmRcIik7XG4gICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmVtaXQoQ29uc3RhbnQuRVZFTlQuU09VTkQuQ0FSRF9DTE9TRSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/PlatformBrandIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c2b0Hn/WBGxbjDSZRcovbN', 'PlatformBrandIcon');
// script/common/PlatformBrandIcon.ts

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
var PlatformBrandIcon = /** @class */ (function (_super) {
    __extends(PlatformBrandIcon, _super);
    function PlatformBrandIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.androidIcon = null;
        _this.iosIcon = null;
        return _this;
        // update (dt) {}
    }
    PlatformBrandIcon.prototype.start = function () {
        //this.getComponent(cc.Sprite).spriteFrame = this.iosIcon;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            this.getComponent(cc.Sprite).spriteFrame = this.androidIcon;
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            this.getComponent(cc.Sprite).spriteFrame = this.iosIcon;
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBrandIcon.prototype, "androidIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBrandIcon.prototype, "iosIcon", void 0);
    PlatformBrandIcon = __decorate([
        ccclass
    ], PlatformBrandIcon);
    return PlatformBrandIcon;
}(cc.Component));
exports.default = PlatformBrandIcon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXFBsYXRmb3JtQnJhbmRJY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBbUJDO1FBaEJHLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUduQyxhQUFPLEdBQW1CLElBQUksQ0FBQzs7UUFZL0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFYRyxpQ0FBSyxHQUFMO1FBQ0ksMERBQTBEO1FBQzFELElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDL0Q7YUFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQ1U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDTTtJQU5kLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBbUJyQztJQUFELHdCQUFDO0NBbkJELEFBbUJDLENBbkI4QyxFQUFFLENBQUMsU0FBUyxHQW1CMUQ7a0JBbkJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtQnJhbmRJY29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBhbmRyb2lkSWNvbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGlvc0ljb246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy90aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pb3NJY29uO1xuICAgICAgICBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmFuZHJvaWRJY29uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmlvc0ljb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/darkOctopus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '296c2kQR8NJe62OUx72go0Y', 'darkOctopus');
// script/enemy/darkOctopus.ts

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
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atk_around = null;
        _this.atk_down = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.isCountDowskill = false;
        return _this;
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        // targetComp.attacked(this.damage);
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.atkList(target);
        this.anim.schedule(function () {
            if (_this.isMeet) {
                _this.atkList(target);
                _this.anim.scheduleOnce(function () {
                    targetComp.attacked(_this.damage);
                }, 0.3);
            }
        }, 1.2, cc.macro.REPEAT_FOREVER, 0.6);
    };
    NewClass.prototype.atkList = function (target) {
        var _this = this;
        this.anim.play("atk");
        if (!this.isCountDowskill) {
            this.isCountDowskill = true;
            cc.audioEngine.play(this.atkSOund, false, 0.8);
            this.scheduleOnce(function () {
                _this.isCountDowskill = false;
            }, 0.2);
        }
        switch (this.countAtk) {
            case 2:
                this.countAtk = 0;
                this.doubleAtk(target);
                break;
            case 1:
                this.countAtk++;
                this.createAtkAround(target);
                this.btn_skillCircle();
                break;
            default:
                this.countAtk++;
                this.createAtkDown(target);
                break;
        }
    };
    NewClass.prototype.doubleAtk = function (target) {
        for (var i = 0; i < 2; i++) {
            var atk = cc.instantiate(this.atk_down);
            atk.parent = this.node.parent.parent.parent;
            var pos = target.parent.convertToWorldSpaceAR(target.position);
            pos = this.node.parent.parent.parent.convertToNodeSpaceAR(pos);
            atk.position = pos;
            atk.scaleX = ((i == 0) ? -1 : 1) * atk.scaleX;
            atk.zIndex = 2;
        }
    };
    NewClass.prototype.createAtkDown = function (target) {
        var atk = cc.instantiate(this.atk_down);
        atk.parent = this.node.parent.parent;
        var pos = target.parent.convertToWorldSpaceAR(target.position);
        pos = this.node.parent.parent.convertToNodeSpaceAR(pos);
        atk.scaleX = ((pos.x > this.node.x) ? -1 : 1) * atk.scaleX;
        atk.position = pos;
        atk.zIndex = 2;
    };
    NewClass.prototype.createAtkAround = function (target) {
        var atk = cc.instantiate(this.atk_around);
        atk.parent = this.node.parent.parent;
        var pos = target.parent.convertToWorldSpaceAR(target.position);
        pos = this.node.parent.parent.convertToNodeSpaceAR(pos);
        atk.position = pos;
        atk.zIndex = 2;
    };
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isMeet = false;
            this.anim.play("idle");
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    NewClass.prototype.btn_skillCircle = function () {
        // for (let i = 0; i < 12; i++) {
        //     let rd = Math.floor(Math.random() * 2)
        //     let bullet = cc.instantiate(this.preBullet);
        //     let angle = (-Math.PI) + (Math.PI * i / 6);
        //     let pos = cc.v3(0, 0);
        //     this.node.addChild(bullet);
        //     bullet.zIndex=cc.macro.MIN_ZINDEX
        //     bullet.setPosition(pos.add(cc.v3(0, -50)));
        //     // bullet.getChildByName("circle").children[0].color = new cc.Color().fromHEX("#4ED3EC");
        //     bullet.scale = 0.4
        //     let param = (this.node.scaleX < 0) ? (-400 - 50 * rd) : (400 + 50 * rd)
        //     cc.tween(bullet).to(1, { position: cc.v3(param * Math.cos(angle), param * Math.sin(angle)).add(cc.v3(0, -50)) }).call(() => {
        //         // bullet.getComponent(cc.Animation).play()
        //    bullet.destroy()
        //     }).start();
        // }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "atk_around", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "atk_down", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(enemy_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZGFya09jdG9wdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0NBQTRCO0FBQ3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFLO0lBQTNDO1FBQUEscUVBMEhDO1FBeEhHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFDN0IscUJBQWUsR0FBRyxLQUFLLENBQUE7O0lBZ0gzQixDQUFDO0lBOUdHLHlCQUFNLEdBQU4sVUFBTyxNQUFNO1FBQWIsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0Msb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDZixJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ25CLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0s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a0NBQWUsR0FBZjtRQUNJLGlDQUFpQztRQUNqQyw2Q0FBNkM7UUFFN0MsbURBQW1EO1FBQ25ELGtEQUFrRDtRQUNsRCw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLHdDQUF3QztRQUN4QyxrREFBa0Q7UUFDbEQsZ0dBQWdHO1FBQ2hHLHlCQUF5QjtRQUN6Qiw4RUFBOEU7UUFDOUUsb0lBQW9JO1FBQ3BJLHNEQUFzRDtRQUN0RCxzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLElBQUk7SUFFUixDQUFDO0lBdkhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFUWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEg1QjtJQUFELGVBQUM7Q0ExSEQsQUEwSEMsQ0ExSHFDLGVBQUssR0EwSDFDO2tCQTFIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGVuZW15IGZyb20gXCIuLi9lbmVteVwiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBlbmVteSB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBhdGtfYXJvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYXRrX2Rvd246IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBpc0NvdW50RG93c2tpbGwgPSBmYWxzZVxuXG4gICAgYXR0YWNrKHRhcmdldCkge1xuICAgICAgICB0aGlzLmlzTWVldCA9IHRydWU7XG4gICAgICAgIGxldCB0YXJnZXRDb21wID0gdGFyZ2V0LmdldENvbXBvbmVudCgnaGVybycpO1xuICAgICAgICAvLyB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcblxuICAgICAgICB9LCAwLjMpXG4gICAgICAgIHRoaXMuYXRrTGlzdCh0YXJnZXQpXG5cbiAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWVldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXRrTGlzdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxLjIsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwLjYpO1xuICAgIH1cbiAgICBhdGtMaXN0KHRhcmdldCkge1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcImF0a1wiKVxuICAgICAgICBpZiAoIXRoaXMuaXNDb3VudERvd3NraWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3dza2lsbCA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXRrU091bmQsIGZhbHNlLCAwLjgpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93c2tpbGwgPSBmYWxzZTtcblxuICAgICAgICAgICAgfSwgMC4yKVxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3VudEF0aykge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZG91YmxlQXRrKHRhcmdldClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrKytcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUF0a0Fyb3VuZCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fc2tpbGxDaXJjbGUoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrKys7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBdGtEb3duKHRhcmdldClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb3VibGVBdGsodGFyZ2V0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXRrID0gY2MuaW5zdGFudGlhdGUodGhpcy5hdGtfZG93bik7XG4gICAgICAgICAgICBhdGsucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldC5wb3NpdGlvbik7XG4gICAgICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgIGF0ay5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIGF0ay5zY2FsZVggPSAoKGkgPT0gMCkgPyAtMSA6IDEpICogYXRrLnNjYWxlWDtcbiAgICAgICAgICAgIGF0ay56SW5kZXggPSAyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQXRrRG93bih0YXJnZXQpIHtcbiAgICAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Rvd24pXG4gICAgICAgIGF0ay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgICAgbGV0IHBvcyA9IHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldC5wb3NpdGlvbik7XG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgYXRrLnNjYWxlWCA9ICgocG9zLnggPiB0aGlzLm5vZGUueCkgPyAtMSA6IDEpICogYXRrLnNjYWxlWFxuICAgICAgICBhdGsucG9zaXRpb24gPSBwb3NcbiAgICAgICAgYXRrLnpJbmRleCA9IDJcblxuXG4gICAgfVxuICAgIGNyZWF0ZUF0a0Fyb3VuZCh0YXJnZXQpIHtcbiAgICAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Fyb3VuZClcbiAgICAgICAgYXRrLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgICBsZXQgcG9zID0gdGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0LnBvc2l0aW9uKTtcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICBhdGsucG9zaXRpb24gPSBwb3NcbiAgICAgICAgYXRrLnpJbmRleCA9IDJcbiAgICB9XG4gICAgZXhpdFRhcmdldCgpIHtcbiAgICAgIFxuXG4gICAgICAgIGlmKHRoaXMuYXJySGVyby5sZW5ndGg8PTApe1xuICAgICAgICAgICAgdGhpcy5pc01lZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKVxuICAgICAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuICAgIGJ0bl9za2lsbENpcmNsZSgpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuXG4gICAgICAgIC8vICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCdWxsZXQpO1xuICAgICAgICAvLyAgICAgbGV0IGFuZ2xlID0gKC1NYXRoLlBJKSArIChNYXRoLlBJICogaSAvIDYpO1xuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IGNjLnYzKDAsIDApO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJ1bGxldCk7XG4gICAgICAgIC8vICAgICBidWxsZXQuekluZGV4PWNjLm1hY3JvLk1JTl9aSU5ERVhcbiAgICAgICAgLy8gICAgIGJ1bGxldC5zZXRQb3NpdGlvbihwb3MuYWRkKGNjLnYzKDAsIC01MCkpKTtcbiAgICAgICAgLy8gICAgIC8vIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZShcImNpcmNsZVwiKS5jaGlsZHJlblswXS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNEVEM0VDXCIpO1xuICAgICAgICAvLyAgICAgYnVsbGV0LnNjYWxlID0gMC40XG4gICAgICAgIC8vICAgICBsZXQgcGFyYW0gPSAodGhpcy5ub2RlLnNjYWxlWCA8IDApID8gKC00MDAgLSA1MCAqIHJkKSA6ICg0MDAgKyA1MCAqIHJkKVxuICAgICAgICAvLyAgICAgY2MudHdlZW4oYnVsbGV0KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MyhwYXJhbSAqIE1hdGguY29zKGFuZ2xlKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZSkpLmFkZChjYy52MygwLCAtNTApKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAvLyBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgIC8vICAgIGJ1bGxldC5kZXN0cm95KClcbiAgICAgICAgLy8gICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIH1cblxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/Circle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6454C1o/5IrbFDTrPsrykv', 'Circle');
// script/hero/Circle.ts

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
var hero_1 = require("./hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetHero = null;
        _this.enemyArr = [];
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    };
    NewClass.prototype.checkAtk = function () {
        if (this.enemyArr.length > 0) {
            console.log("atk", this.gamePlay.arrHero);
            for (var _i = 0, _a = this.gamePlay.arrHero; _i < _a.length; _i++) {
                var child = _a[_i];
                child.getComponent(hero_1.default).enemyArr = this.enemyArr;
                child.getComponent(hero_1.default).attack(this.enemyArr[0]);
            }
            // this.attack()
        }
        else {
            for (var _b = 0, _c = this.gamePlay.arrHero; _b < _c.length; _b++) {
                var child = _c[_b];
                child.getComponent(hero_1.default).stop();
            }
        }
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.name == "circleUpdate") {
            other.node.color = cc.Color.GREEN;
            other.node.parent.getComponent("house").checkUpdate();
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.node.name == "circleUpdate") {
            other.node.color = cc.Color.WHITE;
            // this.enemyArr.push(other.node);
            // this.target.getComponent(hero).enemyArr.push(other.node.getComponent(EL).target);
        }
        // if (other.node.getComponent(EL)) {
        //     for (let child of this.gamePlay.arrHero) {
        //         child.getComponent(hero).removeEnemy(other.node._id);
        //     }
        //     this.removeEnemy(other.node._id);
        //     if (this.enemyArr.length == 0) {
        //         this.node.color = cc.color().fromHEX("#98DBF5")
        //     }
        // }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        // if (other.node.getComponent(EL) && other.node.getComponent(EL).target && this.target.getComponent(hero).isAttack == false) {
        //     // this.target.getComponent(hero).attack();
        // }
        if (other.node.name == "circleUpdate") {
            other.node.parent.getComponent("house").checkUpdate();
        }
    };
    NewClass.prototype.removeEnemy = function (idEnemy) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy._id == idEnemy)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            for (var _i = 0, _a = this.gamePlay.arrHero; _i < _a.length; _i++) {
                var child = _a[_i];
                child.getComponent(hero_1.default).stop();
            }
        }
    };
    NewClass.prototype.update = function (dt) {
        this.node.position = this.targetHero.position;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "targetHero", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxDaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQTBCO0FBSXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUVDO1FBdkVHLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQzFCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXFFcEIsQ0FBQztJQXBFRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUV6QyxLQUFrQixVQUFxQixFQUFyQixLQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO2dCQUFwQyxJQUFJLEtBQUssU0FBQTtnQkFDVixLQUFLLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO2dCQUNqRCxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDcEQ7WUFDRCxnQkFBZ0I7U0FDbkI7YUFDSTtZQUNELEtBQWtCLFVBQXFCLEVBQXJCLEtBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQXJCLGNBQXFCLEVBQXJCLElBQXFCLEVBQUU7Z0JBQXBDLElBQUksS0FBSyxTQUFBO2dCQUNWLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDbEM7U0FDSjtJQUNMLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUU7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ3hEO0lBQ0wsQ0FBQztJQUlELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUU7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7WUFDakMsa0NBQWtDO1lBQ2xDLG9GQUFvRjtTQUN2RjtRQUNELHFDQUFxQztRQUNyQyxpREFBaUQ7UUFFakQsZ0VBQWdFO1FBQ2hFLFFBQVE7UUFDUix3Q0FBd0M7UUFDeEMsdUNBQXVDO1FBQ3ZDLDBEQUEwRDtRQUUxRCxRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLCtIQUErSDtRQUMvSCxrREFBa0Q7UUFDbEQsSUFBSTtRQUNKLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFFO1lBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUN4RDtJQUNMLENBQUM7SUFDRCw4QkFBVyxHQUFYLFVBQVksT0FBTztRQUFuQixpQkFVQztRQVRHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDL0IsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU87Z0JBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFFM0IsS0FBa0IsVUFBcUIsRUFBckIsS0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtnQkFBcEMsSUFBSSxLQUFLLFNBQUE7Z0JBQ1YsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNsQztTQUNKO0lBQ0wsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUE7SUFDakQsQ0FBQztJQXRFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBRlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlFNUI7SUFBRCxlQUFDO0NBekVELEFBeUVDLENBekVxQyxFQUFFLENBQUMsU0FBUyxHQXlFakQ7a0JBekVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IGVuZW15IGZyb20gJy4uL2VuZW15JztcbmltcG9ydCBFTCBmcm9tICcuLi9lbmVteUxpc3RlbmVyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YXJnZXRIZXJvOiBjYy5Ob2RlID0gbnVsbFxuICAgIGVuZW15QXJyID0gW107XG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZTIxXCIpXG4gICAgfVxuICAgIGNoZWNrQXRrKCkge1xuICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImF0a1wiLCB0aGlzLmdhbWVQbGF5LmFyckhlcm8pXG5cbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuZ2FtZVBsYXkuYXJySGVybykge1xuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChoZXJvKS5lbmVteUFyciA9IHRoaXMuZW5lbXlBcnJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoaGVybykuYXR0YWNrKHRoaXMuZW5lbXlBcnJbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLmF0dGFjaygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmdhbWVQbGF5LmFyckhlcm8pIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoaGVybykuc3RvcCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiY2lyY2xlVXBkYXRlXCIpIHtcbiAgICAgICAgICAgIG90aGVyLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgICAgICAgICAgIG90aGVyLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvdXNlXCIpLmNoZWNrVXBkYXRlKClcbiAgICAgICAgfVxuICAgIH1cbiBcblxuXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJjaXJjbGVVcGRhdGVcIikge1xuICAgICAgICAgICAgb3RoZXIubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFXG4gICAgICAgICAgICAvLyB0aGlzLmVuZW15QXJyLnB1c2gob3RoZXIubm9kZSk7XG4gICAgICAgICAgICAvLyB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykuZW5lbXlBcnIucHVzaChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpKSB7XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmdhbWVQbGF5LmFyckhlcm8pIHtcblxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChoZXJvKS5yZW1vdmVFbmVteShvdGhlci5ub2RlLl9pZCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB0aGlzLnJlbW92ZUVuZW15KG90aGVyLm5vZGUuX2lkKTtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKFwiIzk4REJGNVwiKVxuXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgb25Db2xsaXNpb25TdGF5KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIC8vIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkgJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCAmJiB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykuaXNBdHRhY2sgPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMudGFyZ2V0LmdldENvbXBvbmVudChoZXJvKS5hdHRhY2soKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiY2lyY2xlVXBkYXRlXCIpIHtcbiAgICAgICAgICAgIG90aGVyLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvdXNlXCIpLmNoZWNrVXBkYXRlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVFbmVteShpZEVuZW15KSB7XG4gICAgICAgIHRoaXMuZW5lbXlBcnIuZm9yRWFjaCgoZW5lbXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5lbXkuX2lkID09IGlkRW5lbXkpIHRoaXMuZW5lbXlBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5nYW1lUGxheS5hcnJIZXJvKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGhlcm8pLnN0b3AoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnRhcmdldEhlcm8ucG9zaXRpb25cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxob3VzZVxcaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrSkM7UUFoSkcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGtCQUFZLEdBQWEsSUFBSSxDQUFBO1FBRTdCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQTtRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFBO1FBRXBCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ1osaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQTtRQUNmLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxjQUFRLEdBQUcsS0FBSyxDQUFBOztJQTRIcEIsQ0FBQztJQTNIRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCw4QkFBVyxHQUFYO1FBRUksSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDMUIsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDL0UscUNBQXFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFD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QzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBaEJOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrSjVCO0lBQUQsZUFBQztDQWxKRCxBQWtKQyxDQWxKcUMsRUFBRSxDQUFDLFNBQVMsR0FrSmpEO2tCQWxKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob3VzZTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGN1cnJlbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wMTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3AyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcDM6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wNDogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaXJjbGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaXNVcGRhdGUgPSAwXG4gICAgdmFsdWVVcGRhdGUgPSAxMFxuICAgIGdhbWVQbGF5ID0gbnVsbFxuICAgIGlzU3RlcCA9IDA7XG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZTIxXCIpO1xuICAgIH1cbiAgICBjaGVja1VwZGF0ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykgcmV0dXJuO1xuICAgICAgICBpZiAoZ2xvYmFsVGhpcy53b29kID49IHRoaXMudmFsdWVVcGRhdGUgJiYgdGhpcy5pc1VwZGF0ZSA9PSAwICYmIHRoaXMuaXNTdGVwID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlSG91c2UodGhpcy52YWx1ZVVwZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkudXBkYXRlSG91c2UodGhpcy52YWx1ZVVwZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMTtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVGhpcy5nb2xkID49IHRoaXMudmFsdWVVcGRhdGUgJiYgdGhpcy5pc1VwZGF0ZSA9PSAxICYmIHRoaXMuaXNTdGVwID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkudXBkYXRlSG91c2UyKDIwKVxuICAgICAgICAgICAgdGhpcy5pc1N0ZXAgPSAyO1xuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFRoaXMuZ29sZCA+PSB0aGlzLnZhbHVlVXBkYXRlICYmIHRoaXMuaXNVcGRhdGUgPT0gMiAmJiB0aGlzLmlzU3RlcCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnVwZGF0ZUhvdXNlMigyMClcbiAgICAgICAgICAgIHRoaXMuaXNTdGVwID0gMztcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnbG9iYWxUaGlzLmdvbGQgPj0gdGhpcy52YWx1ZVVwZGF0ZSAmJiB0aGlzLmlzVXBkYXRlID09IDMgJiYgdGhpcy5pc1N0ZXAgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS51cGRhdGVIb3VzZTIoMjApXG4gICAgICAgICAgICB0aGlzLmlzU3RlcCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLnNob3dOb3RpKClcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZS0tXG4gICAgICAgIHRoaXMuY3VycmVudExhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVVcGRhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLnBvcDEuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICBsZXQgY2hlY2sgPSBmaWxsLmZpbGxSYW5nZVxuICAgICAgICBjYy50d2VlbihmaWxsKS50bygwLjEsIHsgZmlsbFJhbmdlOiBjaGVjayArIDAuNSB9KS5zdGFydCgpXG4gICAgfVxuICAgIHVwZGF0ZUhvdXNlKCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmlzVXBkYXRlID09IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9wMS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ob3VzZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhvdXNlMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZSA9IDgwXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlID0gMVxuICAgICAgICAgICAgdGhpcy5jaXJjbGUuc2NhbGUgPSAwLjIyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3AyLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcDIpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgdGhpcy5wb3AxID0gdGhpcy5wb3AyXG4gICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LnNwYXdFbmVtaWVzKDMwKVxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1VwZGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmxpc3RDYXJkLmNoaWxkcmVuWzBdLnNjYWxlID0gMVxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5saXN0Q2FyZC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5fQ2xhaW0obnVsbCwgXCIyXCIpXG4gICAgICAgICAgICB0aGlzLnBvcDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlID0gMjtcblxuICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZSA9IDE1MDtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDMuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wMykudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDEgPSB0aGlzLnBvcDNcbiAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3cuZ2V0Q29tcG9uZW50KFwiYXJyb3dcIikucGFyYW0gPSAxMzBcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVcGRhdGUgPT0gMikge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5fQ2xhaW0obnVsbCwgXCI0XCIpXG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3cuZ2V0Q29tcG9uZW50KFwiYXJyb3dcIikucGFyYW0gPSAxODBcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVBsYXkubGlzdENhcmQuc2NhbGU9dGhpcy5nYW1lUGxheS5pc1NjYWxlXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmxpc3RDYXJkLmNoaWxkcmVuWzBdLnNjYWxlID0gMVxuXG4gICAgICAgICAgICB0aGlzLnBvcDMuYWN0aXZlID0gZmFsc2VcblxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5saXN0Q2FyZC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZSA9IDNcbiAgICAgICAgICAgIHRoaXMudmFsdWVVcGRhdGUgPSA1MDBcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucG9wNCkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnBvcDEgPSB0aGlzLnBvcDRcbiAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzVXBkYXRlID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuX0NsYWltKG51bGwsIFwiMVwiKVxuXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmxpc3RDYXJkLmNoaWxkcmVuWzBdLnNjYWxlID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5hcnJvdy5nZXRDb21wb25lbnQoXCJhcnJvd1wiKS5wYXJhbSA9IDIwMFxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5saXN0Q2FyZC5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZSA9IDRcbiAgICAgICAgICAgIHRoaXMudmFsdWVVcGRhdGUgPSAxMDAwXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3A0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBvcDQpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lUGxheS5vbkVuZEdhbWUoKVxuICAgICAgICAgICAgICAgIHRoaXMucG9wMSA9IHRoaXMucG9wNFxuICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrU3VjY2VzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGUgPT0gMSAmJiBnbG9iYWxUaGlzLmdvbGQgPj0gODApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYXJyb3cuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVcGRhdGUgPT0gMiAmJiBnbG9iYWxUaGlzLmdvbGQgPj0gMTUwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzVXBkYXRlID09IDMgJiYgZ2xvYmFsVGhpcy5nb2xkID49IDUwMCkge1xuXG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmFycm93LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MoKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/listener/treeListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '134ddWv0WFGRrZctqdDmZFf', 'treeListener');
// script/listener/treeListener.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsaXN0ZW5lclxcdHJlZUxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQVFBLENBQUM7SUFKRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQU5nQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBUTVCO0lBQUQsZUFBQztDQVJELEFBUUMsQ0FScUMsRUFBRSxDQUFDLFNBQVMsR0FRakQ7a0JBUm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgIFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba7cfCUQlNCEIFcMs27Q2UM', 'bullet');
// script/bullet.ts

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
        _this.damage = 0;
        _this.isKnife = false;
        _this.isArrow = false;
        _this.isShuriken = false;
        return _this;
        // update (dt) {}
    }
    // @property(cc.Boolean)
    // isHolyRingCircle = false;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isKnife", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isArrow", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isShuriken", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxidWxsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwQkM7UUF2QkcsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUdYLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixnQkFBVSxHQUFHLEtBQUssQ0FBQzs7UUFhbkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFaRyx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBRTVCLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDVjtJQUdYO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NkNBQ0w7SUFHaEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDTDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNGO0lBWkYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBCNUI7SUFBRCxlQUFDO0NBMUJELEFBMEJDLENBMUJxQyxFQUFFLENBQUMsU0FBUyxHQTBCakQ7a0JBMUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIGRhbWFnZSA9IDA7XG5cbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBpc0tuaWZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBpc0Fycm93ID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBpc1NodXJpa2VuID0gZmFsc2U7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICAvLyBpc0hvbHlSaW5nQ2lyY2xlID0gZmFsc2U7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7051gWBttNSLf+INoI17fA', 'bar');
// script/bar.ts

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
        _this.tag = "";
        _this.lbCurrent = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        switch (this.tag) {
            case "coin":
                this.lbCurrent.string = globalThis.gold.toString();
                break;
            case "wood":
                this.lbCurrent.string = globalThis.wood.toString();
                break;
        }
    };
    __decorate([
        property(cc.String)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCurrent", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxQkM7UUFsQkcsU0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUVSLGVBQVMsR0FBYSxJQUFJLENBQUM7O0lBZ0IvQixDQUFDO0lBZkcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNkLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNsRCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2xELE1BQU07U0FDYjtJQUVMLENBQUM7SUFqQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDWjtJQUVSO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFMVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgdGFnID0gXCJcIlxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkN1cnJlbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMudGFnKSB7XG4gICAgICAgICAgICBjYXNlIFwiY29pblwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGJDdXJyZW50LnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid29vZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGJDdXJyZW50LnN0cmluZyA9IGdsb2JhbFRoaXMud29vZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/charMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee026mfNG9PkYofRKbjFIfJ', 'charMap');
// script/charMap.ts

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
        _this.target = null;
        _this.map = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (this.target != null && this.target.position && this.target.active == true) {
            this.node.position = this.target.position;
        }
        else {
            this.node.active = false;
        }
        if (this.map && this.map.name == "miniMap") {
            this.map.position = cc.v3(-this.node.x, -this.node.y);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "map", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGFyTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUJDO1FBbkJHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsU0FBRyxHQUFZLElBQUksQ0FBQTs7SUFpQnZCLENBQUM7SUFoQkcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1NBRTVDO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDM0I7UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FFdEQ7SUFDTCxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUpGLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxQjVCO0lBQUQsZUFBQztDQXJCRCxBQXFCQyxDQXJCcUMsRUFBRSxDQUFDLFNBQVMsR0FxQmpEO2tCQXJCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAhPSBudWxsICYmIHRoaXMudGFyZ2V0LnBvc2l0aW9uICYmIHRoaXMudGFyZ2V0LmFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMudGFyZ2V0LnBvc2l0aW9uXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXAgJiYgdGhpcy5tYXAubmFtZSA9PSBcIm1pbmlNYXBcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1hcC5wb3NpdGlvbiA9Y2MudjMoLXRoaXMubm9kZS54LC10aGlzLm5vZGUueSkgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Skill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5103etcHLZD8rySdIeY94Iw', 'Skill');
// script/Skill.ts

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
var enemyListener_1 = require("./enemyListener");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posStart = cc.v3(0, 0, 0);
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
        if (other.node.getComponent(enemyListener_1.default) && other.node.getComponent(enemyListener_1.default).target) {
            other.node.getComponent("enemy").attacked(this.damage);
        }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        // if (other.node.getComponent(EL) && other.node.getComponent(EL).target) {
        //     other.node.getComponent("enemy").attacked(this.damage)
        //     console.log("atk skill")
        // }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.node.getComponent(enemyListener_1.default) && other.node.getComponent(enemyListener_1.default).target) {
        }
    };
    __decorate([
        property(cc.Vec3)
    ], NewClass.prototype, "posStart", void 0);
    __decorate([
        property(cc.BoxCollider)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTa2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxpREFBaUM7QUFHakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4QkM7UUE1QkcsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUV6QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsWUFBTSxHQUFHLEdBQUcsQ0FBQTs7SUF3QmhCLENBQUM7SUF2Qkcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUNyQyxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUN6RDtJQUNMLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLDJFQUEyRTtRQUMzRSw2REFBNkQ7UUFDN0QsK0JBQStCO1FBQy9CLElBQUk7SUFDUixDQUFDO0lBQ0Qsa0NBQWUsR0FBZixVQUFnQixLQUFLLEVBQUUsSUFBSTtRQUN2QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1NBRXRFO0lBQ0wsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDVDtJQU5LLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QjVCO0lBQUQsZUFBQztDQTlCRCxBQThCQyxDQTlCcUMsRUFBRSxDQUFDLFNBQVMsR0E4QmpEO2tCQTlCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEVMIGZyb20gJy4vZW5lbXlMaXN0ZW5lcic7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlZlYzMpXG4gICAgcG9zU3RhcnQgPSBjYy52MygwLCAwLCAwKVxuICAgIEBwcm9wZXJ0eShjYy5Cb3hDb2xsaWRlcilcbiAgICBza2lsbENvbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSAxMDBcbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBvbkNvbGlkZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5za2lsbENvbGlkZXIuZW5hYmxlZCA9IHZhbHVlXG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVMKSAmJiBvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkudGFyZ2V0KSB7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChcImVuZW15XCIpLmF0dGFja2VkKHRoaXMuZGFtYWdlKVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZil7XG4gICAgICAgIC8vIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkgJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCkge1xuICAgICAgICAvLyAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5hdHRhY2tlZCh0aGlzLmRhbWFnZSlcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYXRrIHNraWxsXCIpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkgJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCkge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/anim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7382cD19kVJp7SvbRYFnLSk', 'anim');
// script/anim.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.finish = function () {
        this.node.destroy();
    };
    NewClass.prototype.finishParent = function () {
        this.node.parent.destroy();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxhbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQVlBLENBQUM7SUFWRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQVZnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBWTVCO0lBQUQsZUFBQztDQVpELEFBWUMsQ0FacUMsRUFBRSxDQUFDLFNBQVMsR0FZakQ7a0JBWm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuICAgIH1cbiAgICBmaW5pc2hQYXJlbnQoKXtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5kZXN0cm95KClcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/btnHero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxidG5IZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMkRDO1FBeERHLFdBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVMsR0FBQyxLQUFLLENBQUM7O1FBcURoQixpQkFBaUI7SUFDckIsQ0FBQztJQXJERyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXpELENBQUM7SUFDRCx3QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLGVBQWU7UUFBNUIsaUJBNkJDO1FBNUJHLHdDQUF3QztRQUN4QyxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBRTdELENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2xELFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUM3QixRQUFRLGVBQWUsRUFBRTtnQkFDckIsS0FBSyxHQUFHO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUE7b0JBQzdCLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDakMsTUFBTTtnQkFDVixLQUFLLEdBQUc7b0JBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTtnQkFFVjtvQkFDSSxNQUFNO2FBQ2I7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQTtTQUN0QjtJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxLQUFLLEVBQUM7WUFDckIsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDakI7aUJBQ0k7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFFckQ7U0FDSjtJQUVMLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyQ0FDVjtJQUhNLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyRDVCO0lBQUQsZUFBQztDQTNERCxBQTJEQyxDQTNEcUMsRUFBRSxDQUFDLFNBQVMsR0EyRGpEO2tCQTNEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgdmFsdWUgPSAyNTtcbiAgICBnYW1lUGxheSA9IG51bGw7XG4gICAgaXNTdWNjZXNzPWZhbHNlO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KCdnYW1lUGxheScpO1xuICAgIH1cbiAgICBjYXJkX29uKCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX29uXCIpO1xuXG4gICAgfVxuICAgIGNsaWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja1wiLCBjdXN0b21FdmVudERhdGEpXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLmdvbGQgPj0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZmeFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJjYXJkX3N1Y2Nlc3NcIilcblxuICAgICAgICAgICAgfSwxLjIpXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkIC09IHRoaXMudmFsdWVcbiAgICAgICAgICAgIHN3aXRjaCAoY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5fc3Bhd1Jlbm5hKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5idG5fc3Bhd1dlcmVXb2xmKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYnRuX3NwYXdSYWNoZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNTdWNjZXNzPXRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYodGhpcy5pc1N1Y2Nlc3M9PWZhbHNlKXtcbiAgICAgICAgICAgIGlmIChnbG9iYWxUaGlzLmdvbGQgPj0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRfb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '559a6ZW3eZKToGTx2ExzOXS', 'gem');
// script/gem.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        // this.scheduleOnce(()=>{
        //     if(this.node) {
        //         this.node.destroy();
        //     }
        // },4)
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBZ0JBLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixRQUFRO1FBQ1IsT0FBTztJQUVYLENBQUM7SUFiZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdCNUI7SUFBRCxlQUFDO0NBaEJELEFBZ0JDLENBaEJxQyxFQUFFLENBQUMsU0FBUyxHQWdCakQ7a0JBaEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgLy8gICAgIGlmKHRoaXMubm9kZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sNClcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/chest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f5556keFNDVJ2mJGM/ZOd8', 'chest');
// script/chest.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.appear = function () {
        // this.node.getComponent(cc.Animation).play("chest_zigzag")
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFPQSxDQUFDO0lBTEEseUJBQU0sR0FBTjtRQUNHLDREQUE0RDtJQUMvRCxDQUFDO0lBSm1CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FPNUI7SUFBRCxlQUFDO0NBUEQsQUFPQyxDQVBxQyxFQUFFLENBQUMsU0FBUyxHQU9qRDtrQkFQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuIGFwcGVhcigpe1xuICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiY2hlc3RfemlnemFnXCIpXG4gfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee894rLZOtG451paY6xID8B', 'enemy');
// script/enemy.ts

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
        _this.anim = null;
        _this.bodyCollider = null;
        _this.bodyPhysicsCollider = null;
        _this.blood = null;
        _this.bulletPrefab = null;
        _this.bulletPos = cc.v3(0, 0, 0);
        _this.isAD = false;
        _this.isBoss = false;
        _this.timeSpeed = 0;
        _this.hp = 0;
        _this.timeBullet = 400;
        _this.damage = 0;
        _this.tag = 0;
        _this.lbHP = null;
        _this.isMeet = false;
        _this.isDie = false;
        _this.isFreeze = false;
        _this.maxHp = 0;
        _this.gamePlay = null;
        _this.isSkill = false;
        _this.arrHero = [];
        _this.isAttack = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
        // this.node.zIndex = 2;
        this.maxHp = this.hp;
        this.isFreeze = true;
        if (this.tag == 1) {
            this.moveIdle1();
        }
        if (this.tag == 2) {
            this.moveIdle2();
        }
    };
    NewClass.prototype.run = function () {
        // this.anim.play("move")
    };
    NewClass.prototype.moveIdle1 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(-166, 759) }).call(function () {
            _this.anim.node.angle = -90;
        }).to(1, { position: cc.v3(205, 700) }).call(function () {
            _this.anim.node.angle = 180;
        }).delay(0.8).call(function () {
            _this.anim.node.angle = 90;
        }).to(1, { position: cc.v3(-166, 759) }).delay(1)).start();
    };
    NewClass.prototype.moveIdle2 = function () {
        var _this = this;
        cc.tween(this.node).repeatForever(cc.tween().set({ position: cc.v3(-705.211, 497.407) }).call(function () {
            _this.anim.node.angle = 180;
        }).to(1, { position: cc.v3(-654.008, 67.024) }).call(function () {
            _this.anim.node.angle = 180;
        }).delay(0.8).call(function () {
            _this.anim.node.angle = 0;
        }).to(1, { position: cc.v3(-705.211, 497.407) }).delay(1)).start();
    };
    NewClass.prototype.attacked = function (damage) {
        var _this = this;
        if (this.isDie)
            return;
        this.node.getComponent(cc.Animation).play();
        this.hp -= damage;
        this.lbHP.string = this.hp.toString();
        if (this.gamePlay != null) {
            this.gamePlay.createDamage(this.node.position);
            if (this.isBoss) {
                this.gamePlay.createDamageBoss(this.node.position);
                this.node.getComponent(cc.Animation).play();
            }
        }
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
            // this.gamePlay.heroComp.removeEnemy2(this.node);
            // if (this.gamePlay != null) {
            //     if (this.isBoss) {
            //         this.gamePlay.bossDie(this.node.position)
            //     }
            //     else{
            this.gamePlay.countDie(this.node.position);
            //     }
            // }
            // this.gamePlay.createMeat(this.node.position);
            this.node.active = false;
            this.scheduleOnce(function () {
                _this.node.active = false;
            }, 0.3);
        }
        this.blood.fillRange = this.hp / this.maxHp;
    };
    NewClass.prototype.completeEvent = function (type) {
    };
    NewClass.prototype.addEvent = function (type) {
    };
    NewClass.prototype.checkAngle = function (targetEnemy) {
        var target = targetEnemy;
        var tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0;
        var angle = Math.atan(tan) * (180 / (Math.PI));
        angle = (this.node.x <= target.x) ? angle : angle + 180;
        return angle;
    };
    NewClass.prototype.attack = function (target) {
        var _this = this;
        if (this.isAttack)
            return;
        this.isMeet = true;
        this.isAttack = false;
        if (this.arrHero[0]) {
            target = this.arrHero[0];
        }
        var targetComp = target.getComponent('hero');
        if (this.isAD) {
            // this.anim.play("atk")
            this.anim.scheduleOnce(function () {
                _this.anim.node.angle = _this.checkAngle(target) - 90;
                _this.createBullet(target, targetComp);
            }, 0.4);
            this.anim.schedule(function () {
                // this.anim.play("atk")
                _this.anim.scheduleOnce(function () {
                    _this.anim.node.angle = _this.checkAngle(target) - 90;
                    _this.createBullet(target, targetComp);
                }, 0.4);
            }, 1, cc.macro.REPEAT_FOREVER, 0.5);
        }
        else {
            // this.anim.play("atk")
            this.anim.scheduleOnce(function () {
                targetComp.attacked(_this.damage);
            }, 0.3);
            this.anim.schedule(function () {
                // this.anim.play("atk")
                _this.anim.scheduleOnce(function () {
                    targetComp.attacked(_this.damage);
                }, 0.3);
            }, 0.8, cc.macro.REPEAT_FOREVER, 0.5);
        }
        // this.anim.schedule(() => {
        //     if (this.isMeet) {
        //         targetComp.attacked(this.damage);
        //     }
        // }, 1, cc.macro.REPEAT_FOREVER, 0.5);
    };
    NewClass.prototype.createBullet = function (target, targetComp) {
        var _this = this;
        var bullet = cc.instantiate(this.bulletPrefab);
        this.node.parent.addChild(bullet);
        bullet.zIndex = 10;
        bullet.opacity = 0;
        var pos = this.anim.node.convertToWorldSpaceAR(cc.v3(0, 167));
        pos = this.node.parent.convertToNodeSpaceAR(pos);
        // let bulletPos = (this.node.scaleX > 0) ? this.bulletPos : cc.v3(-this.bulletPos.x, this.bulletPos.y)
        bullet.position = pos;
        var time = this.checkTimePos(bullet.position, target.position.add(cc.v3(0, 30)));
        var param = 1500;
        var angle2 = this.checkAngle2(this.node.position, target.position);
        angle2 = cc.misc.degreesToRadians(angle2);
        var pos3 = this.node.position.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)));
        cc.tween(bullet).set({ opacity: 255 }).call(function () { bullet.getChildByName("trial").active = true; }).to(1, { position: pos3 }).call(function () {
            targetComp.attacked(_this.damage);
            bullet.getChildByName("explode").active = true;
            bullet.destroy();
        }).start();
    };
    NewClass.prototype.checkTimePos = function (pos1, pos2) {
        var time = pos1.sub(pos2).mag() / this.timeBullet;
        return time;
    };
    NewClass.prototype.exitTarget = function (idHero) {
        var _this = this;
        this.arrHero.forEach(function (enemy, index) {
            if (enemy._id == idHero)
                _this.arrHero.splice(index, 1);
        });
        // this.isTarget = false
        if (this.arrHero.length == 0) {
            this.isMeet = false;
            this.isSkill = false;
            // this.anim.play("move");
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.freeze = function () {
        var _this = this;
        this.isFreeze = true;
        this.node.getChildByName('snow').active = true;
        this.bodyPhysicsCollider.enabled = false;
        this.node.zIndex = 1;
        this.scheduleOnce(function () {
            _this.isFreeze = false;
            _this.bodyPhysicsCollider.enabled = true;
            _this.node.getChildByName('snow').active = false;
            _this.node.zIndex = 2;
        }, 2);
    };
    NewClass.prototype.onPause = function (isPause) {
        if (!this.isFreeze) {
            // this.bodySkeleton.paused = isPause;
        }
        this.bodyCollider.enabled = !isPause;
        // this.bodySkeleton.unscheduleAllCallbacks();
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
        if (!this.isFreeze && !this.gamePlay.isPauseGame && this.isMeet == false && !this.isDie) {
            var hero = this.gamePlay.hero;
            // let localPos = this.node.position
            // this.node.scaleX = (this.node.x <= hero.x + 10) ? -1 : 1;
            var distance = Math.sqrt(Math.pow((this.node.x - hero.x), 2) + Math.pow((this.node.y - hero.y), 2));
            this.node.x = this.node.x + (dt * ((this.node.x < hero.x) ? 1 : -1)) * (Math.abs(this.node.x - hero.x) * 10 / this.timeSpeed);
            this.node.y = this.node.y + (dt * ((this.node.y < hero.y) ? 1 : -1)) * (Math.abs(this.node.y - hero.y) * 10 / this.timeSpeed);
            this.node.getChildByName("icon").angle = this.checkAngle2(this.node.position, this.gamePlay.hero.position) - 90;
        }
        if (this.gamePlay.isPauseGame) {
            this.onPause(true);
        }
        if (!this.gamePlay.isPauseGame) {
            this.onPause(false);
        }
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "bodyCollider", void 0);
    __decorate([
        property(cc.PhysicsCircleCollider)
    ], NewClass.prototype, "bodyPhysicsCollider", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "blood", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bulletPrefab", void 0);
    __decorate([
        property(cc.Vec3)
    ], NewClass.prototype, "bulletPos", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isAD", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isBoss", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "timeSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "hp", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "timeBullet", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbHP", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZSQztRQTNSRyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFzQixJQUFJLENBQUM7UUFHdkMseUJBQW1CLEdBQTZCLElBQUksQ0FBQztRQUdyRCxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFMUIsVUFBSSxHQUFHLEtBQUssQ0FBQTtRQUVaLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFFZCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsUUFBRSxHQUFHLENBQUMsQ0FBQztRQUVQLGdCQUFVLEdBQUcsR0FBRyxDQUFDO1FBRWpCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUN0QixZQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLGFBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixjQUFRLEdBQUcsS0FB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Q0FDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO2tEQUNXO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt5REFDa0I7SUFHckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDVDtJQUVaO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ1A7SUFFZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNQO0lBRWQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDZDtJQUVQO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0RBQ0o7SUFFakI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDVjtJQUVYO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2I7SUFFUjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBL0JMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2UjVCO0lBQUQsZUFBQztDQTdSRCxBQTZSQyxDQTdScUMsRUFBRSxDQUFDLFNBQVMsR0E2UmpEO2tCQTdSb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuL0NvbnN0YW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIGJvZHlDb2xsaWRlcjogY2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcilcbiAgICBib2R5UGh5c2ljc0NvbGxpZGVyOiBjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBibG9vZDogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVmVjMylcbiAgICBidWxsZXRQb3MgPSBjYy52MygwLCAwLCAwKVxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzQUQgPSBmYWxzZVxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzQm9zcyA9IGZhbHNlXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgdGltZVNwZWVkID0gMDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBocCA9IDA7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgdGltZUJ1bGxldCA9IDQwMDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHRhZyA9IDA7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSFA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBpc01lZXQgPSBmYWxzZVxuICAgIGlzRGllID0gZmFsc2U7XG4gICAgaXNGcmVlemUgPSBmYWxzZTtcbiAgICBtYXhIcCA9IDA7XG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuICAgIGlzU2tpbGwgPSBmYWxzZVxuICAgIGFyckhlcm8gPSBbXVxuICAgIGlzQXR0YWNrID0gZmFsc2VcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudCgnR2FtZScpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gMjtcbiAgICAgICAgdGhpcy5tYXhIcCA9IHRoaXMuaHBcbiAgICAgICAgdGhpcy5pc0ZyZWV6ZSA9IHRydWU7XG4gICAgICAgIGlmKHRoaXMudGFnPT0xKXtcbiAgICAgICAgICAgIHRoaXMubW92ZUlkbGUxKClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnRhZz09Mil7XG4gICAgICAgICAgICB0aGlzLm1vdmVJZGxlMigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKVxuICAgIH1cbiAgICBtb3ZlSWRsZTEoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2V0KHsgcG9zaXRpb246IGNjLnYzKC0xNjYsIDc1OSkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSAtOTBcbiAgICAgICAgICAgIH0pLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDIwNSwgNzAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ubm9kZS5hbmdsZSA9IDE4MFxuICAgICAgICAgICAgfSkuZGVsYXkoMC44KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ubm9kZS5hbmdsZSA9IDkwXG4gICAgICAgICAgICB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtMTY2LCA3NTkpIH0pLmRlbGF5KDEpXG4gICAgICAgICkuc3RhcnQoKVxuICAgIH1cbiAgICBtb3ZlSWRsZTIoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2V0KHsgcG9zaXRpb246IGNjLnYzKC03MDUuMjExLCA0OTcuNDA3KSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ubm9kZS5hbmdsZSA9IDE4MFxuICAgICAgICAgICAgfSkudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoLTY1NC4wMDgsIDY3LjAyNCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSAxODBcbiAgICAgICAgICAgIH0pLmRlbGF5KDAuOCkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSAwXG4gICAgICAgICAgICB9KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MygtNzA1LjIxMSwgNDk3LjQwNykgfSkuZGVsYXkoMSlcbiAgICAgICAgKS5zdGFydCgpXG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RpZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xuICAgICAgICB0aGlzLmxiSFAuc3RyaW5nID0gdGhpcy5ocC50b1N0cmluZygpXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVBsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jcmVhdGVEYW1hZ2UodGhpcy5ub2RlLnBvc2l0aW9uKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb3NzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jcmVhdGVEYW1hZ2VCb3NzKHRoaXMubm9kZS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhwID0gMDtcbiAgICAgICAgICAgIHRoaXMuYm9keUNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNEaWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLnJlbW92ZUVuZW15Mih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZVBsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzQm9zcykge1xuXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZ2FtZVBsYXkuYm9zc0RpZSh0aGlzLm5vZGUucG9zaXRpb24pXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNvdW50RGllKHRoaXMubm9kZS5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVQbGF5LmNyZWF0ZU1lYXQodGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlPWZhbHNlXG5cbiAgICAgICAgICAgIH0sIDAuMylcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvb2QuZmlsbFJhbmdlID0gdGhpcy5ocCAvIHRoaXMubWF4SHA7XG4gICAgfVxuICAgIGNvbXBsZXRlRXZlbnQodHlwZSkge1xuXG4gICAgfVxuICAgIGFkZEV2ZW50KHR5cGUpIHtcblxuICAgIH1cbiAgICBjaGVja0FuZ2xlKHRhcmdldEVuZW15KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0YXJnZXRFbmVteTtcbiAgICAgICAgbGV0IHRhbiA9ICh0YXJnZXQueCAtIHRoaXMubm9kZS54ICE9PSAwKSA/ICh0YXJnZXQueSAtIHRoaXMubm9kZS55IC0gMzApIC8gKHRhcmdldC54IC0gdGhpcy5ub2RlLngpIDogMFxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4odGFuKSAqICgxODAgLyAoTWF0aC5QSSkpO1xuICAgICAgICBhbmdsZSA9ICh0aGlzLm5vZGUueCA8PSB0YXJnZXQueCkgPyBhbmdsZSA6IGFuZ2xlICsgMTgwXG4gICAgICAgIHJldHVybiBhbmdsZTtcbiAgICB9XG4gICAgYXR0YWNrKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaykgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzTWVldCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNBdHRhY2sgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5hcnJIZXJvWzBdKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmFyckhlcm9bMF1cblxuICAgICAgICB9XG4gICAgICAgIGxldCB0YXJnZXRDb21wID0gdGFyZ2V0LmdldENvbXBvbmVudCgnaGVybycpO1xuICAgICAgICBpZiAodGhpcy5pc0FEKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheShcImF0a1wiKVxuICAgICAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYW5nbGUgPSB0aGlzLmNoZWNrQW5nbGUodGFyZ2V0KSAtIDkwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQodGFyZ2V0LCB0YXJnZXRDb21wKVxuXG4gICAgICAgICAgICB9LCAwLjQpXG4gICAgICAgICAgICB0aGlzLmFuaW0uc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwiYXRrXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5ub2RlLmFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRhcmdldCkgLSA5MDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCh0YXJnZXQsIHRhcmdldENvbXApXG5cbiAgICAgICAgICAgICAgICB9LCAwLjQpXG4gICAgICAgICAgICB9LCAxLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC41KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICAgICAgfSwgMC4zKVxuXG5cbiAgICAgICAgICAgIHRoaXMuYW5pbS5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0uc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29tcC5hdHRhY2tlZCh0aGlzLmRhbWFnZSk7XG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgfSwgMC44LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC41KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5hbmltLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzTWVldCkge1xuICAgICAgICAvLyAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCAxLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMC41KTtcbiAgICB9XG4gICAgY3JlYXRlQnVsbGV0KHRhcmdldCwgdGFyZ2V0Q29tcCkge1xuICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJ1bGxldCk7XG4gICAgICAgIGJ1bGxldC56SW5kZXggPSAxMFxuICAgICAgICBidWxsZXQub3BhY2l0eSA9IDBcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYW5pbS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAxNjcpKVxuICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgLy8gbGV0IGJ1bGxldFBvcyA9ICh0aGlzLm5vZGUuc2NhbGVYID4gMCkgPyB0aGlzLmJ1bGxldFBvcyA6IGNjLnYzKC10aGlzLmJ1bGxldFBvcy54LCB0aGlzLmJ1bGxldFBvcy55KVxuICAgICAgICBidWxsZXQucG9zaXRpb24gPSBwb3NcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmNoZWNrVGltZVBvcyhidWxsZXQucG9zaXRpb24sIHRhcmdldC5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzApKSlcblxuXG5cbiAgICAgICAgbGV0IHBhcmFtID0gMTUwMDtcbiAgICAgICAgbGV0IGFuZ2xlMiA9IHRoaXMuY2hlY2tBbmdsZTIodGhpcy5ub2RlLnBvc2l0aW9uLCB0YXJnZXQucG9zaXRpb24pXG4gICAgICAgIGFuZ2xlMiA9IGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhhbmdsZTIpXG4gICAgICAgIGxldCBwb3MzID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MyhwYXJhbSAqIE1hdGguY29zKGFuZ2xlMiksIHBhcmFtICogTWF0aC5zaW4oYW5nbGUyKSkpXG4gICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkuc2V0KHsgb3BhY2l0eTogMjU1IH0pLmNhbGwoKCkgPT4geyBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0cmlhbFwiKS5hY3RpdmUgPSB0cnVlIH0pLnRvKDEsIHsgcG9zaXRpb246IHBvczMgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgICAgIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZShcImV4cGxvZGVcIikuYWN0aXZlID0gdHJ1ZVxuYnVsbGV0LmRlc3Ryb3koKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIGNoZWNrVGltZVBvcyhwb3MxLCBwb3MyKSB7XG4gICAgICAgIGxldCB0aW1lID0gcG9zMS5zdWIocG9zMikubWFnKCkgLyB0aGlzLnRpbWVCdWxsZXRcbiAgICAgICAgcmV0dXJuIHRpbWVcbiAgICB9XG4gICAgZXhpdFRhcmdldChpZEhlcm8pIHtcblxuXG4gICAgICAgIHRoaXMuYXJySGVyby5mb3JFYWNoKChlbmVteSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbmVteS5faWQgPT0gaWRIZXJvKSB0aGlzLmFyckhlcm8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy5pc1RhcmdldCA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmFyckhlcm8ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNNZWV0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzU2tpbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG5cbiAgICAgICAgfVxuXG5cblxuXG5cbiAgICB9XG4gICAgZnJlZXplKCkge1xuICAgICAgICB0aGlzLmlzRnJlZXplID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzbm93JykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib2R5UGh5c2ljc0NvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDE7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGcmVlemUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm9keVBoeXNpY3NDb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc25vdycpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDI7XG4gICAgICAgIH0sIDIpO1xuICAgIH1cbiAgICBvblBhdXNlKGlzUGF1c2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJlZXplKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmJvZHlTa2VsZXRvbi5wYXVzZWQgPSBpc1BhdXNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUNvbGxpZGVyLmVuYWJsZWQgPSAhaXNQYXVzZTtcbiAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbiAgICBjaGVja0FuZ2xlMihwb3MxLCBwb3MyKSB7XG4gICAgICAgIGxldCB0YW4gPSBNYXRoLmFicyhwb3MyLnkgLSBwb3MxLnkpIC8gTWF0aC5hYnMocG9zMi54IC0gcG9zMS54KTtcbiAgICAgICAgaWYgKHBvczIueSA9PSBwb3MxLnkpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLngpIHJldHVybiAwO1xuICAgICAgICAgICAgaWYgKHBvczIueCA8IHBvczEueCkgcmV0dXJuIDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3MyLnggPT0gcG9zMS54KSB7XG4gICAgICAgICAgICBpZiAocG9zMi55ID4gcG9zMS55KSByZXR1cm4gOTA7XG4gICAgICAgICAgICBpZiAocG9zMi55IDwgcG9zMS55KSByZXR1cm4gLTkwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3MxLnggPT0gcG9zMi54ICYmIHBvczEueSA9PSBwb3MyLnkpIHJldHVybiAwO1xuICAgICAgICBpZiAocG9zMS54ICE9PSBwb3MyLnggJiYgcG9zMS55ICE9PSBwb3MyLnkpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLnggJiYgcG9zMi55ID4gcG9zMS55KSByZXR1cm4gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKTtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPiBwb3MxLnggJiYgcG9zMi55IDwgcG9zMS55KSByZXR1cm4gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSAqIC0xO1xuICAgICAgICAgICAgaWYgKHBvczIueCA8IHBvczEueCAmJiBwb3MyLnkgPiBwb3MxLnkpIHJldHVybiAoMTgwIC0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSk7XG4gICAgICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54ICYmIHBvczIueSA8IHBvczEueSkgcmV0dXJuIC0oMTgwIC0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0YW4pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0ZyZWV6ZSAmJiAhdGhpcy5nYW1lUGxheS5pc1BhdXNlR2FtZSAmJiB0aGlzLmlzTWVldCA9PSBmYWxzZSAmJiAhdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgbGV0IGhlcm8gPSB0aGlzLmdhbWVQbGF5Lmhlcm87XG4gICAgICAgICAgICAvLyBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnggPD0gaGVyby54ICsgMTApID8gLTEgOiAxO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KCh0aGlzLm5vZGUueCAtIGhlcm8ueCksIDIpICsgTWF0aC5wb3coKHRoaXMubm9kZS55IC0gaGVyby55KSwgMikpXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS54ICsgKGR0ICogKCh0aGlzLm5vZGUueCA8IGhlcm8ueCkgPyAxIDogLTEpKSAqIChNYXRoLmFicyh0aGlzLm5vZGUueCAtIGhlcm8ueCkgKiAxMCAvIHRoaXMudGltZVNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLnkgKyAoZHQgKiAoKHRoaXMubm9kZS55IDwgaGVyby55KSA/IDEgOiAtMSkpICogKE1hdGguYWJzKHRoaXMubm9kZS55IC0gaGVyby55KSAqIDEwIC8gdGhpcy50aW1lU3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hbmdsZSA9IHRoaXMuY2hlY2tBbmdsZTIodGhpcy5ub2RlLnBvc2l0aW9uLCB0aGlzLmdhbWVQbGF5Lmhlcm8ucG9zaXRpb24pIC0gOTA7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lUGxheS5pc1BhdXNlR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5vblBhdXNlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5nYW1lUGxheS5pc1BhdXNlR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5vblBhdXNlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca1fcten2ZAwr2eOIAxh36j', 'hand');
// script/hand.ts

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
        _this.card1Node = null;
        _this.card2Node = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.card1 = function () {
        this.card1Node.play("card_tut");
    };
    NewClass.prototype.card2 = function () {
        this.card2Node.play("card_tut");
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "card1Node", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "card2Node", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7O1FBVy9CLGlCQUFpQjtJQUNyQixDQUFDO0lBVkcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBWkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBTGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIGNhcmQxTm9kZTogY2MuQW5pbWF0aW9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIGNhcmQyTm9kZTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIGNhcmQxKCkge1xuICAgICAgICB0aGlzLmNhcmQxTm9kZS5wbGF5KFwiY2FyZF90dXRcIilcbiAgICB9XG4gICAgY2FyZDIoKSB7XG4gICAgICAgIHRoaXMuY2FyZDJOb2RlLnBsYXkoXCJjYXJkX3R1dFwiKVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemyListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34607e8qldE4p0kUXlNOEAT', 'enemyListener');
// script/enemyListener.ts

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
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (self.node.getComponent('enemyListener') && other.node.getComponent('heroListener')) {
            var target = self.node.getComponent('enemyListener').target;
            target.getComponent('enemy').attack(other.node);
            target.getComponent('enemy').arrHero.push(other.node);
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (self.node.getComponent('enemyListener') && other.node.getComponent('heroListener')) {
            var target = self.node.getComponent('enemyListener').target;
            target.getComponent('enemy').exitTarget(other.node._id);
        }
        // if(other.node.getComponent(EL)&& other.node.getComponent(EL).target) {
        //     this.target.getComponent(hero).removeEnemy(other.node._id);
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteUxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0NDO1FBL0JHLFlBQU0sR0FBVyxJQUFJLENBQUM7O1FBOEJ0QixpQkFBaUI7SUFDckIsQ0FBQztJQTdCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDcEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTVELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3hEO0lBQ0wsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNwRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDNUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzRDtRQUdELHlFQUF5RTtRQUN6RSxrRUFBa0U7UUFDbEUsSUFBSTtJQUVSLENBQUM7SUE1QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUhMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQzVCO0lBQUQsZUFBQztDQWxDRCxBQWtDQyxDQWxDcUMsRUFBRSxDQUFDLFNBQVMsR0FrQ2pEO2tCQWxDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDpjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAoc2VsZi5ub2RlLmdldENvbXBvbmVudCgnZW5lbXlMaXN0ZW5lcicpICYmIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdoZXJvTGlzdGVuZXInKSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoJ2VuZW15TGlzdGVuZXInKS50YXJnZXQ7XG5cbiAgICAgICAgICAgIHRhcmdldC5nZXRDb21wb25lbnQoJ2VuZW15JykuYXR0YWNrKG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudCgnZW5lbXknKS5hcnJIZXJvLnB1c2gob3RoZXIubm9kZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKHNlbGYubm9kZS5nZXRDb21wb25lbnQoJ2VuZW15TGlzdGVuZXInKSAmJiBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnaGVyb0xpc3RlbmVyJykpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KCdlbmVteUxpc3RlbmVyJykudGFyZ2V0O1xuICAgICAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudCgnZW5lbXknKS5leGl0VGFyZ2V0KG90aGVyLm5vZGUuX2lkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gaWYob3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCkge1xuICAgICAgICAvLyAgICAgdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KGhlcm8pLnJlbW92ZUVuZW15KG90aGVyLm5vZGUuX2lkKTtcbiAgICAgICAgLy8gfVxuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/heroListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2910fuy6ihCOLc2U3/6jdtv', 'heroListener');
// script/heroListener.ts

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
        _this.target = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        var heroComp = this.node.getComponent("hero");
        if (self.node.getComponent('heroListener') && other.node.name == "bulletBox") {
            other.node.active = false;
            heroComp.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQkM7UUFqQkcsWUFBTSxHQUFZLElBQUksQ0FBQzs7UUFnQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBZEcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO1lBQ3ZCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUVyQjtJQUNMLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBSE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9CNUI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEJxQyxFQUFFLENBQUMsU0FBUyxHQW9CakQ7a0JBcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgbGV0IGhlcm9Db21wID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcImhlcm9cIik7XG4gICAgICAgIGlmIChzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KCdoZXJvTGlzdGVuZXInKSAmJiBvdGhlci5ub2RlLm5hbWUgPT0gXCJidWxsZXRCb3hcIikge1xuICAgICAgICAgICAgb3RoZXIubm9kZS5hY3RpdmU9ZmFsc2VcbiAgICAgICAgICAgIGhlcm9Db21wLnJlbG9hZCgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef1d6tt/RtJXI44W2k4YByY', 'gamePlay');
// script/gamePlay.ts

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
globalThis.gold = 0;
var hero_1 = require("./hero/hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hero = null;
        _this.hero2 = null;
        _this.eff_summon = null;
        _this.btnStart = null;
        _this.btnStart2 = null;
        _this.mainCamera = null;
        _this.uiCamera = null;
        _this.gate = null;
        _this.listHero1 = null;
        _this.listHero2 = null;
        _this.listHeroDefault = null;
        _this.heroNode = null;
        _this.tree2 = null;
        _this.preDamage = null;
        _this.preFxAtk = null;
        _this.listTree = [];
        _this.unlockNode = null;
        _this.preWood = null;
        _this.preWood2 = null;
        _this.missionBar = null;
        _this.sceneBattle = null;
        _this.bloodBar = null;
        _this.boss = null;
        //nhac
        _this.soundBg = null;
        _this.soundChop = null;
        _this.soundWoddy = null;
        _this.soundWoodin = null;
        _this.soundWoodOut = null;
        _this.soundQuestComplete = null;
        _this.soundSword = null;
        _this.soundLight = null;
        _this.soundVictory = null;
        _this.endGameNode = null;
        _this.textGuide = null;
        _this.linkToStore = null;
        _this.coinBar = null;
        _this.bossBar = null;
        _this.listBtn = null;
        _this.uiNode = null;
        _this.warning = null;
        _this.iconGG = null;
        _this.scene1 = null;
        _this.preDie = null;
        _this.guild2 = null;
        _this.skillLight = null;
        _this.skillSword = null;
        _this.popHero = null;
        _this.isEndGame = false;
        _this.isPus = 0;
        _this.isPauseGame = false;
        _this.heroComp = null;
        _this.isStep = 1;
        _this.isMoving = false;
        _this.isvertical = false;
        _this.isZoomed = false;
        _this.isPhase = 1;
        _this.isRed = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // window.gameReady && window.gameReady();
        var _this = this;
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.makeResponsive();
        cc.audioEngine.play(this.soundBg, true, 0.5);
        this.scheduleOnce(function () {
            _this.listTree[0].getChildByName("arrow1").active = true;
        }, 0.5);
    };
    NewClass.prototype.start = function () {
        this.heroComp = this.hero.getComponent('hero');
        // this.hero.zIndex = 3;
    };
    NewClass.prototype.update = function (dt) {
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(-70, 50)));
        }
        var canvas = this.node.getComponent(cc.Canvas);
        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.mainCamera.zoomRatio = 2.2
                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.isPus = 0;
                // if (this.isZoomed) {
                //     this.mainCamera.zoomRatio = 1.1
                // }
                // else {
                //     this.mainCamera.zoomRatio = 1
                // }
                this.iconGG.scale = 1;
                this.coinBar.scale = 1;
                if (cc.winSize.height / cc.winSize.width < 1.35) {
                    canvas.fitHeight = true;
                }
            }
        }
        else {
            // this.mainCamera.zoomRatio = 2.2
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.iconGG.scale = 1.3;
            this.coinBar.scale = 1.3;
            this.isPus = 80;
        }
    };
    NewClass.prototype.btnCollect = function (event) {
        var _this = this;
        console.log(event);
        if (this.isStep < 2) {
            this.scheduleOnce(function () {
                _this.listTree[_this.isStep].getChildByName("arrow1").active = true;
                _this.listTree[_this.isStep].getComponent(cc.Button).enabled = true;
                _this.isStep++;
            }, 1.8);
        }
        else {
            this.scheduleOnce(function () {
                _this.missionBar.getComponent(cc.Animation).play("mission_complete");
                cc.audioEngine.play(_this.soundQuestComplete, false, 1);
                _this.missionBar.getComponent("updateBar").reset(1);
            }, 2.7);
            this.scheduleOnce(function () {
                _this.moveCam1();
                // this.isMoving = false
            }, 3);
        }
        var tree = event.currentTarget;
        tree.getComponent(cc.Button).enabled = false;
        tree.getChildByName("arrow1").active = false;
        this.heroComp.movePos(tree);
    };
    NewClass.prototype.moveWood = function (wood) {
        var _this = this;
        cc.audioEngine.play(this.soundWoodin, false, 1);
        var pos = this.missionBar.position;
        pos = pos.add(cc.v3(-50, 0));
        var pos2 = wood.parent.convertToWorldSpaceAR(wood.position);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2);
        if (this.isPhase == 1) {
            wood.parent = this.uiNode;
            wood.scale *= 1.3;
            // wood.position = pos2.add(cc.v3(-this.mainCamera.node.position.x, -this.mainCamera.node.position.y));
            cc.tween(wood).to(0.4, { position: pos }).call(function () {
                _this.missionBar.getComponent("updateBar").updateBar();
                wood.getComponent(cc.Animation).play("exp");
                cc.audioEngine.play(_this.soundWoodOut, false, 1);
            }).start();
        }
    };
    NewClass.prototype.moveCam1 = function () {
        var _this = this;
        this.isMoving = true;
        this.heroComp.moveToPos(cc.v3(-450, -120), 1.2);
        cc.tween(this.mainCamera.node).to(1.2, { position: cc.v3(-834, -5.3) }).start();
        cc.tween(this.mainCamera).by(1.2, { zoomRatio: 0.3 }).call(function () {
            _this.transWood(_this.gate);
        }).start();
    };
    NewClass.prototype.transWood = function (nodeEnd) {
        var _this = this;
        var pos = nodeEnd.position;
        var _loop_1 = function (i) {
            var wood = cc.instantiate(this_1.preWood);
            wood.parent = this_1.scene1;
            wood.position = this_1.hero.position;
            wood.scale = 1.2;
            var midPos = cc.v2((this_1.hero.x + pos.x + 90) / 2, (this_1.hero.y + 200));
            var endPos = pos.add(cc.v3(0, 0));
            cc.tween(wood).delay(i * 0.08).set({ opacity: 255 }).call(function () {
                cc.audioEngine.play(_this.soundWoodin, false, 1);
            })
                .parallel(cc.tween().bezierTo(0.3, cc.v2(this_1.hero.x, this_1.hero.y), midPos, cc.v2(endPos.x, endPos.y)).call(function () {
                if (i == 7) {
                    _this.summonHero();
                }
                wood.getComponent(cc.Animation).play("exp");
            }), cc.tween().by(0.3, { angle: 360 })).start();
        };
        var this_1 = this;
        for (var i = 0; i < 8; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.transWood2 = function (nodeEnd) {
        var _this = this;
        var pos = nodeEnd.position;
        var _loop_2 = function (k) {
            var preHero = (k == 0) ? this_2.hero : this_2.hero2;
            var _loop_3 = function (i) {
                var wood = cc.instantiate(this_2.preWood);
                wood.parent = this_2.scene1;
                wood.position = preHero.position;
                wood.scale = 1.2;
                var midPos = cc.v2((preHero.x + pos.x + 90) / 2, (preHero.y + 200));
                var endPos = pos.add(cc.v3(0, 0));
                cc.tween(wood).delay(i * 0.08).set({ opacity: 255 }).call(function () {
                    cc.audioEngine.play(_this.soundWoodin, false, 1);
                })
                    .parallel(cc.tween().bezierTo(0.3, cc.v2(preHero.x, this_2.hero.y), midPos, cc.v2(endPos.x, endPos.y)).call(function () {
                    if (i == 7 && k == 1) {
                        _this.summonHero2();
                    }
                    wood.getComponent(cc.Animation).play("exp");
                }), cc.tween().by(0.3, { angle: 360 })).start();
            };
            for (var i = 0; i < 8; i++) {
                _loop_3(i);
            }
        };
        var this_2 = this;
        for (var k = 0; k < 2; k++) {
            _loop_2(k);
        }
    };
    NewClass.prototype.summonHero2 = function () {
        var _this = this;
        this.popHero.getComponent(cc.Animation).play("pop_close");
        this.scheduleOnce(function () {
            _this.listHeroDefault.active = true;
            cc.audioEngine.play(_this.soundQuestComplete, false, 2);
            _this.scheduleOnce(function () {
                // this.btn_Start2()
                _this.btnStart2.active = true;
            }, 0.4);
        }, 0.5);
    };
    NewClass.prototype.btn_Start2 = function (event) {
        var _this = this;
        this.sceneBattle.getChildByName("endGame").active = false;
        cc.audioEngine.play(this.soundQuestComplete, false, 1);
        // this.endGameNode.active = false;
        this.sceneBattle.active = true;
        this.listHero1.active = false;
        event.currentTarget.active = false;
        this.mainCamera.zoomRatio = 1;
        this.sceneBattle.active = true;
        this.mainCamera.node.position = cc.v3(0, 0);
        this.scheduleOnce(function () {
            _this.listHero2.active = true;
            _this.bloodBar.active = true;
        }, 0.3);
        this.scheduleOnce(function () {
            _this.moveHero2();
        }, 0.45);
    };
    NewClass.prototype.showSkill = function () {
        var _this = this;
        var arrPos = [cc.v3(0, 0), cc.v3(-300, -50), cc.v3(-150, -10), cc.v3(-200, 20), cc.v3(-100, -30)];
        var count = 0;
        this.schedule(function () {
            var light = cc.instantiate(_this.skillLight);
            light.parent = _this.sceneBattle;
            light.position = _this.boss.position;
            light.zIndex = 10;
            if (count < 5) {
                light.position = _this.boss.position.add(arrPos[count]);
                count++;
            }
            else {
                count = 0;
            }
            cc.audioEngine.play(_this.soundLight, false, 0.8);
            _this.scheduleOnce(function () {
                _this.createDamageBoss(_this.boss.position);
            }, 0.4);
        }, 0.6);
        this.scheduleOnce(function () {
            var light = cc.instantiate(_this.skillSword);
            light.parent = _this.sceneBattle;
            light.position = _this.boss.position.add(cc.v3(-2, 0));
            light.zIndex = 10;
            cc.audioEngine.play(_this.soundSword, false, 0.8);
        }, 2);
        this.scheduleOnce(function () {
            var light = cc.instantiate(_this.skillSword);
            light.parent = _this.sceneBattle;
            light.position = _this.boss.position.add(cc.v3(-2, 0));
            light.zIndex = 10;
            _this.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundSword, false, 1);
            }, 0.3);
        }, 4);
    };
    NewClass.prototype.moveHero2 = function () {
        var _this = this;
        var _loop_4 = function (child) {
            child.getComponent(hero_1.default).moveByPos(cc.v3(0, 300), 1);
            this_3.scheduleOnce(function () {
                var p = (child.getChildByName("icon").scaleX > 0) ? cc.v3(-100, 80) : cc.v3(100, 80);
                _this.schedule(function () {
                    _this.createDamage(child.position.add(p));
                }, 0.8);
                _this.createDamage(child.position.add(p));
            }, 1);
        };
        var this_3 = this;
        for (var _i = 0, _a = this.listHero2.children; _i < _a.length; _i++) {
            var child = _a[_i];
            _loop_4(child);
        }
        this.scheduleOnce(function () {
            _this.showSkill();
        }, 1);
    };
    NewClass.prototype.summonHero = function () {
        var _this = this;
        this.eff_summon.active = true;
        this.missionBar.getComponent(cc.Animation).play("mission_complete2");
        cc.audioEngine.play(this.soundQuestComplete, false, 2);
        this.scheduleOnce(function () {
            _this.hero2.active = true;
            _this.missionBar.active = false;
        }, 0.3);
        this.scheduleOnce(function () {
            _this.hero2.getComponent(hero_1.default).moveToPos(cc.v3(-595, -160), 0.8);
            _this.hero.getComponent(hero_1.default).moveToPos(cc.v3(-519, -154), 0.8);
            _this.scheduleOnce(function () {
                _this.btnStart.active = true;
            }, 0.7);
        }, 0.8);
    };
    NewClass.prototype.btn_battle = function (event) {
        // this.isPhase = 2
        // event.currentTarget.active = false;
        // cc.audioEngine.play(this.soundQuestComplete, false, 1)
        // this.mainCamera.zoomRatio = 1;
        // this.sceneBattle.active = true;
        // this.mainCamera.node.position = cc.v3(0, 0);
        // this.warning.active = true;
        // let pos = [cc.v3(146, -106), cc.v3(-102, -134)];
        // this.scheduleOnce(() => {
        //     this.bloodBar.active = true;
        //     this.listHero1.children[0].getComponent(H).moveToPos(cc.v3(146, -0), 1)
        //     this.scheduleOnce(() => {
        //         this.listHero1.children[0].getComponent(H).skill1("arthur")
        //     }, 0.8)
        //     this.scheduleOnce(() => {
        //         this.listHero1.children[1].getComponent(H).skill1("woody")
        //     }, 0.8)
        //     this.listHero1.children[1].getComponent(H).moveToPos(cc.v3(-102, -30), 1)
        // }, 0.3)
    };
    NewClass.prototype.endPhase1 = function () {
        var _this = this;
        for (var _i = 0, _a = this.listHero1.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var pos = child.position;
            var die = cc.instantiate(this.preDie);
            die.parent = this.listHero1.parent;
            die.position = pos.add(cc.v3(0, 50));
            die.zIndex = 3;
        }
        this.listHero1.children[0].active = false;
        this.listHero1.children[1].active = false;
        this.scheduleOnce(function () {
            _this.sceneBattle.getChildByName("endGame").active = true;
        }, 0.5);
        this.scheduleOnce(function () {
            _this.tree2.active = true;
            _this.sceneBattle.active = false;
            _this.warning.active = false;
            _this.bloodBar.active = false;
            _this.scheduleOnce(function () {
                _this.hero.position = cc.v3(52, -109);
                _this.hero2.position = cc.v3(110, -92);
                _this.hero2.getChildByName("icon").scaleX = 1.3;
                _this.hero.getChildByName("fxAppear").active = true;
                _this.hero.getChildByName("fxAppear").getComponent(cc.Animation).play();
                _this.hero2.getChildByName("fxAppear").active = true;
                _this.hero2.getChildByName("fxAppear").getComponent(cc.Animation).play();
            }, 0.2);
            _this.scheduleOnce(function () {
                _this.guild2.active = true;
            }, 0.4);
        }, 1.3);
    };
    NewClass.prototype.btnPhase2 = function (event) {
        var _this = this;
        this.mainCamera.node.position = this.hero.position.add(cc.v3(-70, 50));
        this.guild2.active = false;
        this.popHero.active = true;
        event.currentTarget.getComponent(cc.Button).enabled = false;
        var tree = event.currentTarget;
        // this.heroComp.moveToPos(tree)
        this.heroComp.moveToPos(cc.v3(-51, -113), 0.6);
        this.hero2.getComponent(hero_1.default).moveToPos(cc.v3(-18, -13), 0.6);
        this.scheduleOnce(function () {
            _this.heroComp.chop(event.currentTarget);
            _this.hero2.getComponent(hero_1.default).chop(_this.tree2.children[0]);
        }, 0.6);
        this.scheduleOnce(function () {
            _this.moveCam2();
        }, 2);
        this.isMoving = false;
    };
    NewClass.prototype.moveCam2 = function () {
        var _this = this;
        this.isMoving = true;
        this.hero2.getComponent(hero_1.default).moveToPos(cc.v3(-455, -90), 1.7);
        this.heroComp.moveToPos(cc.v3(-485, -120), 1.7);
        cc.tween(this.mainCamera.node).to(1.7, { position: cc.v3(-834, -5.3) }).start();
        cc.tween(this.mainCamera).by(1.7, { zoomRatio: 0.2 }).call(function () {
            _this.transWood2(_this.gate);
        }).start();
    };
    // moveCam2() {
    //     cc.tween(this.mainCamera.node).to(0.35, { position: cc.v3(350, 0 + this.isPus) }).call(() => {
    //         this.enemyNode.active = true
    //         this.scheduleOnce(() => {
    //             this.warning.active = true;
    //         }, 0.5)
    //     }).delay(0.6).to(0.4, { position: cc.v3(260, 0 + this.isPus) }).start()
    //     let zoom = (this.isvertical) ? 1.1 : 2.2
    //     cc.tween(this.mainCamera).delay(1.1).to(0.4, { zoomRatio: zoom }).call(() => {
    //         this.isZoomed = true
    //         this.enemyNode.getChildByName("hand").opacity = 255
    //         this.linkToStore.active = true;
    //         this.missionBar.getComponent(cc.Animation).play("unlock_showup")
    //     }).start()
    // }
    NewClass.prototype.makeResponsive = function () {
        var canvas = this.node.getComponent(cc.Canvas);
        var deviceResolution = cc.view.getFrameSize();
        // calculte design ratio
        var desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // calculte device ratio
        var deviceRatio = deviceResolution.width / deviceResolution.height;
        if (deviceRatio >= desiredRatio) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        else if (deviceRatio < desiredRatio) {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    };
    NewClass.prototype.createHero = function (heroPre, value) {
        var hero = cc.instantiate(heroPre);
        hero.parent = this.heroNode;
        var pos = this.hero.position;
        hero.position = pos.add(cc.v3(50, 50));
        if (value == 1 || value == 2) {
            hero.getComponent("hero").skillIceArrow();
            // hero.getComponent("hero").idle()
            this.scheduleOnce(function () {
                if (value == 2) {
                    hero.getComponent("hero").check1();
                }
            }, 0.4);
        }
    };
    NewClass.prototype.updateBossBar = function () {
        var bar = this.bossBar.getChildByName("bar").getComponent(cc.Sprite);
        bar.fillRange -= 0.015;
        var iconBoss = this.bossBar.getChildByName("iconBoss");
        var value = -6;
        if (iconBoss.x - 5 < -168) {
            iconBoss.x = -168;
            value = 0;
        }
        cc.tween(iconBoss).by(0.2, { position: cc.v3(value, 0) }).start();
        if (bar.fillRange <= 0.3) {
            if (this.isRed == false) {
                this.isRed = true;
                this.bossBar.getComponent(cc.Animation).play("red_bar");
            }
        }
    };
    NewClass.prototype.createDamage = function (pos) {
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos;
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2;
        // let damage = cc.instantiate(this.preDamage)
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528");
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos;
        damagefx.scale = 1.4;
        this.boss.getComponent("boss").attacked(90);
    };
    NewClass.prototype.createDamageBoss = function (pos) {
        console.log("create dame");
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos;
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 3;
        // let damage = cc.instantiate(this.preDamage)
        var valueDamage = rd + 800;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#F59022");
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos;
        damagefx.scale = 1.4;
        this.boss.getComponent("boss").attacked(107);
    };
    NewClass.prototype.onEndGame = function () {
        cc.audioEngine.play(this.soundVictory, false, 0.8);
        this.unscheduleAllCallbacks();
        this.bloodBar.active = false;
        this.sceneBattle.getChildByName("endGame2").active = true;
        this.linkToStore.active = true;
        for (var _i = 0, _a = this.listHero2.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent("hero").stopG();
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "eff_summon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnStart", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnStart2", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "uiCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "gate", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHero1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHero2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHeroDefault", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "heroNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "tree2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preFxAtk", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listTree", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "unlockNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "missionBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sceneBattle", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bloodBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundChop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoddy", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundWoodOut", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundQuestComplete", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSword", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundLight", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundVictory", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGameNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuide", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bossBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "warning", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iconGG", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "scene1", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDie", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild2", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skillLight", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skillSword", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "popHero", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtBQUNuQixvQ0FBMkI7QUFHckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwbUJDO1FBdm1CRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFBO1FBRXJCLGVBQVMsR0FBYyxJQUFJLENBQUE7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQTtRQUcxQixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFDcEIsTUFBTTtRQUVOLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLHdCQUFrQixHQUFpQixJQUFJLENBQUM7UUFFeEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNULGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxLQUFLLENBQUE7UUFDbEIsY0FBUSxHQUFHLEtBQUssQ0FBQTtRQThGaEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQWdWWixXQUFLLEdBQUcsS0FBSyxDQUFBOztJQStFakIsQ0FBQztJQTVmRyx5QkFBTSxHQUFOO1FBQ0ksMENBQTBDO1FBRDlDLGlCQVlDO1FBVEcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUMzRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBR0Qsd0JBQUssR0FBTDtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0Msd0JBQXdCO0lBQzVCLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0MsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLGtDQUFrQztnQkFFbEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDZCx1QkFBdUI7Z0JBQ3ZCLHNDQUFzQztnQkFFdEMsSUFBSTtnQkFDSixTQUFTO2dCQUNULG9DQUFvQztnQkFFcEMsSUFBSTtnQkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDdEIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUU7b0JBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUUzQjthQUdKO1NBQ0o7YUFDSTtZQUVELGtDQUFrQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1NBQ2xCO0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQTRCQztRQTNCRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDakUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO2dCQUNqRSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDakIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ1Y7YUFDSTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2dCQUNuRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDdEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFFZCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2Ysd0JBQXdCO1lBRTVCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNSO1FBQ0QsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUcvQixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLElBQUk7UUFBYixpQkFvQkM7UUFuQkcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUE7UUFDbEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRTFCLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFBO1lBRWpCLHVHQUF1RztZQUV2RyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzNDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7SUFFTCxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDL0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsT0FBTztRQUFqQixpQkF1QkM7UUF0QkcsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQTtnQ0FDakIsQ0FBQztZQUNOLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBSyxPQUFPLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQUssTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1lBQ2hCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUN2RSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDbkQsQ0FBQyxDQUFDO2lCQUNHLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQUssSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNSLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtpQkFDcEI7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9DLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ3JDLENBQUMsS0FBSyxFQUFFLENBQUE7OztRQW5CakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQWpCLENBQUM7U0FvQlQ7SUFDTCxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLE9BQU87UUFBbEIsaUJBNEJDO1FBM0JHLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUE7Z0NBQ2pCLENBQUM7WUFDTixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQUssS0FBSyxDQUFBO29DQUN0QyxDQUFDO2dCQUNOLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBSyxPQUFPLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFLLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtnQkFDaEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ25FLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDdEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ25ELENBQUMsQ0FBQztxQkFDRyxRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM1RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO3FCQUNyQjtvQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQy9DLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ3JDLENBQUMsS0FBSyxFQUFFLENBQUE7O1lBbkJqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFBakIsQ0FBQzthQW9CVDs7O1FBdEJMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUFqQixDQUFDO1NBdUJUO0lBR0wsQ0FBQztJQUNELDhCQUFXLEdBQVg7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBRXRELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBRVgsQ0FBQztJQUNELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3pELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFdEQsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDN0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWhDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFBQSxpQkF5Q0M7UUF4Q0csSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUVWLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzNDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztZQUNoQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1lBQ25DLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1lBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDWCxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtnQkFFdEQsS0FBSyxFQUFFLENBQUE7YUFDVjtpQkFDSTtnQkFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFBO2FBQ1o7WUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUVoRCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzdDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMzQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDaEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JELEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1lBQ2pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMzQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDaEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JELEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFFbEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFBQSxpQkFrQkM7Z0NBakJZLEtBQUs7WUFDVixLQUFLLENBQUMsWUFBWSxDQUFDLGNBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNqRCxPQUFLLFlBQVksQ0FBQztnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDcEYsS0FBSSxDQUFDLFFBQVEsQ0FBQztvQkFDVixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBRTVDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDUCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7UUFUVCxLQUFrQixVQUF1QixFQUF2QixLQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUF2QixjQUF1QixFQUF2QixJQUF1QjtZQUFwQyxJQUFJLEtBQUssU0FBQTtvQkFBTCxLQUFLO1NBVWI7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUlULENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDcEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM1RCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzNELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRWhDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUVYLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsS0FBSztRQUNaLG1CQUFtQjtRQUVuQixzQ0FBc0M7UUFDdEMseURBQXlEO1FBRXpELGlDQUFpQztRQUNqQyxrQ0FBa0M7UUFDbEMsK0NBQStDO1FBQy9DLDhCQUE4QjtRQUM5QixtREFBbUQ7UUFDbkQsNEJBQTRCO1FBQzVCLG1DQUFtQztRQUNuQyw4RUFBOEU7UUFDOUUsZ0NBQWdDO1FBQ2hDLHNFQUFzRTtRQUN0RSxjQUFjO1FBQ2QsZ0NBQWdDO1FBQ2hDLHFFQUFxRTtRQUNyRSxjQUFjO1FBQ2QsZ0ZBQWdGO1FBQ2hGLFVBQVU7SUFFZCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUFBLGlCQW9DQztRQW5DRyxLQUFrQixVQUF1QixFQUF2QixLQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUF2QixjQUF1QixFQUF2QixJQUF1QixFQUFFO1lBQXRDLElBQUksS0FBSyxTQUFBO1lBQ1YsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUN6QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQzVELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFHeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDN0IsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNyQyxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO2dCQUM5QyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUN0RSxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2dCQUVuRCxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzNFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNQLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUVYLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUFmLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQzFCLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzNELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUE7UUFDOUIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFM0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdB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O0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBckdQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwbUI1QjtJQUFELGVBQUM7Q0ExbUJELEFBMG1CQyxDQTFtQnFDLEVBQUUsQ0FBQyxTQUFTLEdBMG1CakQ7a0JBMW1Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuZ2xvYmFsVGhpcy5nb2xkID0gMFxuaW1wb3J0IEggZnJvbSBcIi4vaGVyby9oZXJvXCJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZWZmX3N1bW1vbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blN0YXJ0MjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgdWlDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2F0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0SGVybzE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RIZXJvMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEhlcm9EZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZXJvTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdHJlZTI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVEYW1hZ2U6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUZ4QXRrOiBjYy5QcmVmYWIgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0VHJlZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdW5sb2NrTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVXb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlV29vZDI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWlzc2lvbkJhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2NlbmVCYXR0bGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb29kQmFyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJvc3M6IGNjLk5vZGUgPSBudWxsXG4gICAgLy9uaGFjXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRDaG9wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRXb2RkeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kV29vZGluOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRXb29kT3V0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRRdWVzdENvbXBsZXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTd29yZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kTGlnaHQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVmljdG9yeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZEdhbWVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZXh0R3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmtUb1N0b3JlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3NzQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0QnRuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb25HRzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2NlbmUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZURpZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBndWlsZDI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBza2lsbExpZ2h0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2tpbGxTd29yZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3BIZXJvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpc0VuZEdhbWUgPSBmYWxzZTtcbiAgICBpc1B1cyA9IDBcbiAgICBpc1BhdXNlR2FtZSA9IGZhbHNlO1xuICAgIGhlcm9Db21wID0gbnVsbDtcbiAgICBpc1N0ZXAgPSAxO1xuICAgIGlzTW92aW5nID0gZmFsc2U7XG4gICAgaXN2ZXJ0aWNhbCA9IGZhbHNlXG4gICAgaXNab29tZWQgPSBmYWxzZVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5tYWtlUmVzcG9uc2l2ZSgpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCZywgdHJ1ZSwgMC41KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0VHJlZVswXS5nZXRDaGlsZEJ5TmFtZShcImFycm93MVwiKS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH0sIDAuNSlcbiAgICB9XG5cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMuaGVyb0NvbXAgPSB0aGlzLmhlcm8uZ2V0Q29tcG9uZW50KCdoZXJvJyk7XG4gICAgICAgIC8vIHRoaXMuaGVyby56SW5kZXggPSAzO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKC03MCwgNTApKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcblxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXN2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDIuMlxuXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1B1cyA9IDBcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc1pvb21lZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS4xXG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxXG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uR0cuc2NhbGUgPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5jb2luQmFyLnNjYWxlID0gMVxuICAgICAgICAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDIuMlxuICAgICAgICAgICAgdGhpcy5pc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pY29uR0cuc2NhbGUgPSAxLjNcbiAgICAgICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDEuM1xuICAgICAgICAgICAgdGhpcy5pc1B1cyA9IDgwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidG5Db2xsZWN0KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBpZiAodGhpcy5pc1N0ZXAgPCAyKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VHJlZVt0aGlzLmlzU3RlcF0uZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvdzFcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFRyZWVbdGhpcy5pc1N0ZXBdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0ZXArK1xuICAgICAgICAgICAgfSwgMS44KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibWlzc2lvbl9jb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFF1ZXN0Q29tcGxldGUsIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikucmVzZXQoMSlcbiAgICAgICAgICAgIH0sIDIuNylcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhbTEoKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgICB9LCAzKVxuICAgICAgICB9XG4gICAgICAgIGxldCB0cmVlID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgdHJlZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgdHJlZS5nZXRDaGlsZEJ5TmFtZShcImFycm93MVwiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmhlcm9Db21wLm1vdmVQb3ModHJlZSlcblxuXG4gICAgfVxuICAgIGlzUGhhc2UgPSAxO1xuICAgIG1vdmVXb29kKHdvb2QpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZGluLCBmYWxzZSwgMSlcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubWlzc2lvbkJhci5wb3NpdGlvblxuICAgICAgICBwb3MgPSBwb3MuYWRkKGNjLnYzKC01MCwgMCkpXG4gICAgICAgIGxldCBwb3MyID0gd29vZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHdvb2QucG9zaXRpb24pO1xuICAgICAgICBwb3MyID0gdGhpcy51aU5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMilcbiAgICAgICAgaWYgKHRoaXMuaXNQaGFzZSA9PSAxKSB7XG4gICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMudWlOb2RlO1xuXG4gICAgICAgICAgICB3b29kLnNjYWxlICo9IDEuM1xuXG4gICAgICAgICAgICAvLyB3b29kLnBvc2l0aW9uID0gcG9zMi5hZGQoY2MudjMoLXRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uLngsIC10aGlzLm1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi55KSk7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuNCwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lvbkJhci5nZXRDb21wb25lbnQoXCJ1cGRhdGVCYXJcIikudXBkYXRlQmFyKCk7XG4gICAgICAgICAgICAgICAgd29vZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwXCIpXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kV29vZE91dCwgZmFsc2UsIDEpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBtb3ZlQ2FtMSgpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcblxuICAgICAgICB0aGlzLmhlcm9Db21wLm1vdmVUb1BvcyhjYy52MygtNDUwLCAtMTIwKSwgMS4yKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMS4yLCB7IHBvc2l0aW9uOiBjYy52MygtODM0LCAtNS4zKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkuYnkoMS4yLCB7IHpvb21SYXRpbzogMC4zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc1dvb2QodGhpcy5nYXRlKVxuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuICAgIHRyYW5zV29vZChub2RlRW5kKSB7XG4gICAgICAgIGxldCBwb3MgPSBub2RlRW5kLnBvc2l0aW9uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlV29vZCk7XG4gICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMuc2NlbmUxO1xuICAgICAgICAgICAgd29vZC5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbjtcbiAgICAgICAgICAgIHdvb2Quc2NhbGUgPSAxLjJcbiAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52MigodGhpcy5oZXJvLnggKyBwb3MueCArIDkwKSAvIDIsICh0aGlzLmhlcm8ueSArIDIwMCkpXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gcG9zLmFkZChjYy52MygwLCAwKSlcblxuICAgICAgICAgICAgY2MudHdlZW4od29vZCkuZGVsYXkoaSAqIDAuMDgpLnNldCh7IG9wYWNpdHk6IDI1NSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC4zLCBjYy52Mih0aGlzLmhlcm8ueCwgdGhpcy5oZXJvLnkpLCBtaWRQb3MsIGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VtbW9uSGVybygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3b29kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJleHBcIilcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4zLCB7IGFuZ2xlOiAzNjAgfSlcbiAgICAgICAgICAgICAgICApLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmFuc1dvb2QyKG5vZGVFbmQpIHtcbiAgICAgICAgbGV0IHBvcyA9IG5vZGVFbmQucG9zaXRpb25cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAyOyBrKyspIHtcbiAgICAgICAgICAgIGxldCBwcmVIZXJvID0gKGsgPT0gMCkgPyB0aGlzLmhlcm8gOiB0aGlzLmhlcm8yXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKTtcbiAgICAgICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMuc2NlbmUxO1xuICAgICAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSBwcmVIZXJvLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHdvb2Quc2NhbGUgPSAxLjJcbiAgICAgICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHByZUhlcm8ueCArIHBvcy54ICsgOTApIC8gMiwgKHByZUhlcm8ueSArIDIwMCkpXG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvcyA9IHBvcy5hZGQoY2MudjMoMCwgMCkpXG5cbiAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5kZWxheShpICogMC4wOCkuc2V0KHsgb3BhY2l0eTogMjU1IH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRXb29kaW4sIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMC4zLCBjYy52MihwcmVIZXJvLngsIHRoaXMuaGVyby55KSwgbWlkUG9zLCBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkpKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA3ICYmIGsgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1vbkhlcm8yKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29vZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiZXhwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4zLCB7IGFuZ2xlOiAzNjAgfSlcbiAgICAgICAgICAgICAgICAgICAgKS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIHN1bW1vbkhlcm8yKCkge1xuICAgICAgICB0aGlzLnBvcEhlcm8uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcInBvcF9jbG9zZVwiKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RIZXJvRGVmYXVsdC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdENvbXBsZXRlLCBmYWxzZSwgMilcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYnRuX1N0YXJ0MigpXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGFydDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICB9LCAwLjUpXG5cbiAgICB9XG4gICAgYnRuX1N0YXJ0MihldmVudCkge1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmdldENoaWxkQnlOYW1lKFwiZW5kR2FtZVwiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdENvbXBsZXRlLCBmYWxzZSwgMSlcblxuICAgICAgICAvLyB0aGlzLmVuZEdhbWVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEhlcm8xLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8gPSAxO1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdEhlcm8yLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuYmxvb2RCYXIuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB9LCAwLjMpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZUhlcm8yKClcbiAgICAgICAgfSwgMC40NSlcbiAgICB9XG4gICAgc2hvd1NraWxsKCkge1xuICAgICAgICBsZXQgYXJyUG9zID0gW2NjLnYzKDAsIDApLCBjYy52MygtMzAwLCAtNTApLCBjYy52MygtMTUwLCAtMTApLCBjYy52MygtMjAwLCAyMCksIGNjLnYzKC0xMDAsIC0zMCldXG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2tpbGxMaWdodClcbiAgICAgICAgICAgIGxpZ2h0LnBhcmVudCA9IHRoaXMuc2NlbmVCYXR0bGU7XG4gICAgICAgICAgICBsaWdodC5wb3NpdGlvbiA9IHRoaXMuYm9zcy5wb3NpdGlvblxuICAgICAgICAgICAgbGlnaHQuekluZGV4ID0gMTBcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgICBsaWdodC5wb3NpdGlvbiA9IHRoaXMuYm9zcy5wb3NpdGlvbi5hZGQoYXJyUG9zW2NvdW50XSlcblxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kTGlnaHQsIGZhbHNlLCAwLjgpXG5cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURhbWFnZUJvc3ModGhpcy5ib3NzLnBvc2l0aW9uKVxuICAgICAgICAgICAgfSwgMC40KVxuICAgICAgICB9LCAwLjYpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBsaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2tpbGxTd29yZClcbiAgICAgICAgICAgIGxpZ2h0LnBhcmVudCA9IHRoaXMuc2NlbmVCYXR0bGU7XG4gICAgICAgICAgICBsaWdodC5wb3NpdGlvbiA9IHRoaXMuYm9zcy5wb3NpdGlvbi5hZGQoY2MudjMoLTIsIDApKVxuICAgICAgICAgICAgbGlnaHQuekluZGV4ID0gMTBcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFN3b3JkLCBmYWxzZSwgMC44KVxuICAgICAgICB9LCAyKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGlnaHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNraWxsU3dvcmQpXG4gICAgICAgICAgICBsaWdodC5wYXJlbnQgPSB0aGlzLnNjZW5lQmF0dGxlO1xuICAgICAgICAgICAgbGlnaHQucG9zaXRpb24gPSB0aGlzLmJvc3MucG9zaXRpb24uYWRkKGNjLnYzKC0yLCAwKSlcbiAgICAgICAgICAgIGxpZ2h0LnpJbmRleCA9IDEwXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3dvcmQsIGZhbHNlLCAxKVxuXG4gICAgICAgICAgICB9LCAwLjMpXG5cbiAgICAgICAgfSwgNClcbiAgICB9XG4gICAgbW92ZUhlcm8yKCkge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmxpc3RIZXJvMi5jaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEgpLm1vdmVCeVBvcyhjYy52MygwLCAzMDApLCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwID0gKGNoaWxkLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5zY2FsZVggPiAwKSA/IGNjLnYzKC0xMDAsIDgwKSA6IGNjLnYzKDEwMCwgODApXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRGFtYWdlKGNoaWxkLnBvc2l0aW9uLmFkZChwKSlcblxuICAgICAgICAgICAgICAgIH0sIDAuOClcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURhbWFnZShjaGlsZC5wb3NpdGlvbi5hZGQocCkpXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NraWxsKClcbiAgICAgICAgfSwgMSlcblxuXG5cbiAgICB9XG4gICAgc3VtbW9uSGVybygpIHtcbiAgICAgICAgdGhpcy5lZmZfc3VtbW9uLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtaXNzaW9uX2NvbXBsZXRlMlwiKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRRdWVzdENvbXBsZXRlLCBmYWxzZSwgMilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZXJvMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5taXNzaW9uQmFyLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0sIDAuMylcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZXJvMi5nZXRDb21wb25lbnQoSCkubW92ZVRvUG9zKGNjLnYzKC01OTUsIC0xNjApLCAwLjgpXG4gICAgICAgICAgICB0aGlzLmhlcm8uZ2V0Q29tcG9uZW50KEgpLm1vdmVUb1BvcyhjYy52MygtNTE5LCAtMTU0KSwgMC44KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSwgMC43KVxuICAgICAgICB9LCAwLjgpXG5cbiAgICB9XG4gICAgYnRuX2JhdHRsZShldmVudCkge1xuICAgICAgICAvLyB0aGlzLmlzUGhhc2UgPSAyXG5cbiAgICAgICAgLy8gZXZlbnQuY3VycmVudFRhcmdldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kUXVlc3RDb21wbGV0ZSwgZmFsc2UsIDEpXG5cbiAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDE7XG4gICAgICAgIC8vIHRoaXMuc2NlbmVCYXR0bGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKTtcbiAgICAgICAgLy8gdGhpcy53YXJuaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGxldCBwb3MgPSBbY2MudjMoMTQ2LCAtMTA2KSwgY2MudjMoLTEwMiwgLTEzNCldO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmJsb29kQmFyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmxpc3RIZXJvMS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSCkubW92ZVRvUG9zKGNjLnYzKDE0NiwgLTApLCAxKVxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubGlzdEhlcm8xLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChIKS5za2lsbDEoXCJhcnRodXJcIilcbiAgICAgICAgLy8gICAgIH0sIDAuOClcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmxpc3RIZXJvMS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoSCkuc2tpbGwxKFwid29vZHlcIilcbiAgICAgICAgLy8gICAgIH0sIDAuOClcbiAgICAgICAgLy8gICAgIHRoaXMubGlzdEhlcm8xLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChIKS5tb3ZlVG9Qb3MoY2MudjMoLTEwMiwgLTMwKSwgMSlcbiAgICAgICAgLy8gfSwgMC4zKVxuXG4gICAgfVxuICAgIGVuZFBoYXNlMSgpIHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0SGVybzEuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBjaGlsZC5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBkaWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURpZSk7XG4gICAgICAgICAgICBkaWUucGFyZW50ID0gdGhpcy5saXN0SGVybzEucGFyZW50O1xuICAgICAgICAgICAgZGllLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MygwLCA1MCkpXG4gICAgICAgICAgICBkaWUuekluZGV4ID0gM1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdEhlcm8xLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RIZXJvMS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZUJhdHRsZS5nZXRDaGlsZEJ5TmFtZShcImVuZEdhbWVcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9LCAwLjUpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJlZTIuYWN0aXZlID0gdHJ1ZVxuXG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmVCYXR0bGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJsb29kQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyby5wb3NpdGlvbiA9IGNjLnYzKDUyLCAtMTA5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm8yLnBvc2l0aW9uID0gY2MudjMoMTEwLCAtOTIpXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvMi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuc2NhbGVYID0gMS4zXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvLmdldENoaWxkQnlOYW1lKFwiZnhBcHBlYXJcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuaGVyby5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGVybzIuZ2V0Q2hpbGRCeU5hbWUoXCJmeEFwcGVhclwiKS5hY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB0aGlzLmhlcm8yLmdldENoaWxkQnlOYW1lKFwiZnhBcHBlYXJcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICB9LCAwLjIpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlsZDIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfSwgMC40KVxuXG4gICAgICAgIH0sIDEuMylcblxuICAgIH1cbiAgICBidG5QaGFzZTIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24gPSB0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKC03MCwgNTApKVxuICAgICAgICB0aGlzLmd1aWxkMi5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcEhlcm8uYWN0aXZlID0gdHJ1ZVxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICBsZXQgdHJlZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICAgLy8gdGhpcy5oZXJvQ29tcC5tb3ZlVG9Qb3ModHJlZSlcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5tb3ZlVG9Qb3MoY2MudjMoLTUxLCAtMTEzKSwgMC42KVxuICAgICAgICB0aGlzLmhlcm8yLmdldENvbXBvbmVudChIKS5tb3ZlVG9Qb3MoY2MudjMoLTE4LCAtMTMpLCAwLjYpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVyb0NvbXAuY2hvcChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy5oZXJvMi5nZXRDb21wb25lbnQoSCkuY2hvcCh0aGlzLnRyZWUyLmNoaWxkcmVuWzBdKVxuXG4gICAgICAgIH0sIDAuNilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlQ2FtMigpXG4gICAgICAgIH0sIDIpXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxuICAgIH1cbiAgICBtb3ZlQ2FtMigpIHtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcbiAgICAgICAgdGhpcy5oZXJvMi5nZXRDb21wb25lbnQoSCkubW92ZVRvUG9zKGNjLnYzKC00NTUsIC05MCksIDEuNylcbiAgICAgICAgdGhpcy5oZXJvQ29tcC5tb3ZlVG9Qb3MoY2MudjMoLTQ4NSwgLTEyMCksIDEuNylcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpLnRvKDEuNywgeyBwb3NpdGlvbjogY2MudjMoLTgzNCwgLTUuMykgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmJ5KDEuNywgeyB6b29tUmF0aW86IDAuMiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNXb29kMih0aGlzLmdhdGUpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG4gICAgLy8gbW92ZUNhbTIoKSB7XG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYS5ub2RlKS50bygwLjM1LCB7IHBvc2l0aW9uOiBjYy52MygzNTAsIDAgKyB0aGlzLmlzUHVzKSB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuZW5lbXlOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLndhcm5pbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH0sIDAuNSlcbiAgICAvLyAgICAgfSkuZGVsYXkoMC42KS50bygwLjQsIHsgcG9zaXRpb246IGNjLnYzKDI2MCwgMCArIHRoaXMuaXNQdXMpIH0pLnN0YXJ0KClcbiAgICAvLyAgICAgbGV0IHpvb20gPSAodGhpcy5pc3ZlcnRpY2FsKSA/IDEuMSA6IDIuMlxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmRlbGF5KDEuMSkudG8oMC40LCB7IHpvb21SYXRpbzogem9vbSB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNab29tZWQgPSB0cnVlXG4gICAgLy8gICAgICAgICB0aGlzLmVuZW15Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikub3BhY2l0eSA9IDI1NVxuICAgIC8vICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5taXNzaW9uQmFyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ1bmxvY2tfc2hvd3VwXCIpXG5cbiAgICAvLyAgICAgfSkuc3RhcnQoKVxuXG5cbiAgICAvLyB9XG5cbiAgICBtYWtlUmVzcG9uc2l2ZSgpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IGRldmljZVJlc29sdXRpb24gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuXG4gICAgICAgIC8vIGNhbGN1bHRlIGRlc2lnbiByYXRpb1xuICAgICAgICBsZXQgZGVzaXJlZFJhdGlvID0gY2FudmFzLmRlc2lnblJlc29sdXRpb24ud2lkdGggLyBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgIC8vIGNhbGN1bHRlIGRldmljZSByYXRpb1xuICAgICAgICBsZXQgZGV2aWNlUmF0aW8gPSBkZXZpY2VSZXNvbHV0aW9uLndpZHRoIC8gZGV2aWNlUmVzb2x1dGlvbi5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKGRldmljZVJhdGlvID49IGRlc2lyZWRSYXRpbykge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChkZXZpY2VSYXRpbyA8IGRlc2lyZWRSYXRpbykge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVIZXJvKGhlcm9QcmUsIHZhbHVlKSB7XG4gICAgICAgIGxldCBoZXJvID0gY2MuaW5zdGFudGlhdGUoaGVyb1ByZSlcbiAgICAgICAgaGVyby5wYXJlbnQgPSB0aGlzLmhlcm9Ob2RlO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5oZXJvLnBvc2l0aW9uXG4gICAgICAgIGhlcm8ucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKDUwLCA1MCkpXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxIHx8IHZhbHVlID09IDIpIHtcbiAgICAgICAgICAgIGhlcm8uZ2V0Q29tcG9uZW50KFwiaGVyb1wiKS5za2lsbEljZUFycm93KClcbiAgICAgICAgICAgIC8vIGhlcm8uZ2V0Q29tcG9uZW50KFwiaGVyb1wiKS5pZGxlKClcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBoZXJvLmdldENvbXBvbmVudChcImhlcm9cIikuY2hlY2sxKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwLjQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNSZWQgPSBmYWxzZVxuICAgIHVwZGF0ZUJvc3NCYXIoKSB7XG4gICAgICAgIGxldCBiYXIgPSB0aGlzLmJvc3NCYXIuZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGJhci5maWxsUmFuZ2UgLT0gMC4wMTU7XG4gICAgICAgIGxldCBpY29uQm9zcyA9IHRoaXMuYm9zc0Jhci5nZXRDaGlsZEJ5TmFtZShcImljb25Cb3NzXCIpXG4gICAgICAgIGxldCB2YWx1ZSA9IC02XG5cbiAgICAgICAgaWYgKGljb25Cb3NzLnggLSA1IDwgLTE2OCkge1xuICAgICAgICAgICAgaWNvbkJvc3MueCA9IC0xNjhcbiAgICAgICAgICAgIHZhbHVlID0gMFxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKGljb25Cb3NzKS5ieSgwLjIsIHsgcG9zaXRpb246IGNjLnYzKHZhbHVlLCAwKSB9KS5zdGFydCgpXG4gICAgICAgIGlmIChiYXIuZmlsbFJhbmdlIDw9IDAuMykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuYm9zc0Jhci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicmVkX2JhclwiKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlKHBvcykge1xuICAgICAgICBsZXQgZGFtYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYW1hZ2UpO1xuICAgICAgICBkYW1hZ2UucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIGRhbWFnZS5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgbGV0IHJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMClcbiAgICAgICAgZGFtYWdlLnNjYWxlID0gMlxuICAgICAgICAvLyBsZXQgZGFtYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYW1hZ2UpXG4gICAgICAgIGxldCB2YWx1ZURhbWFnZSA9IHJkICsgMTAwMFxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzIzNkREXCIpXG5cbiAgICAgICAgaWYgKHZhbHVlRGFtYWdlID4gMTIwMCkge1xuICAgICAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0MyMzZERFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZURhbWFnZSA+IDE1MDApIHtcbiAgICAgICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDNTM1MjhcIilcbiAgICAgICAgfVxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgdmFsdWVEYW1hZ2UudG9TdHJpbmcoKVxuXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS40XG5cbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChcImJvc3NcIikuYXR0YWNrZWQoOTApXG5cblxuICAgIH1cbiAgICBjcmVhdGVEYW1hZ2VCb3NzKHBvcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBkYW1lXCIpXG4gICAgICAgIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSk7XG4gICAgICAgIGRhbWFnZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAzXG4gICAgICAgIC8vIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSlcbiAgICAgICAgbGV0IHZhbHVlRGFtYWdlID0gcmQgKyA4MDBcbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0Y1OTAyMlwiKVxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgdmFsdWVEYW1hZ2UudG9TdHJpbmcoKVxuXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMS40XG5cbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChcImJvc3NcIikuYXR0YWNrZWQoMTA3KVxuXG5cbiAgICB9XG4gICAgb25FbmRHYW1lKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRWaWN0b3J5LCBmYWxzZSwgMC44KVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxuICAgICAgICB0aGlzLmJsb29kQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lQmF0dGxlLmdldENoaWxkQnlOYW1lKFwiZW5kR2FtZTJcIikuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5saXN0SGVybzIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChcImhlcm9cIikuc3RvcEcoKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/kaboom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cf1bFirdpNe6szzD0hTpXk', 'kaboom');
// script/kaboom.ts

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
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodySkeleton = null;
        _this.bodyCollider = null;
        _this.rangeCollider = null;
        _this.heroBullet = null;
        _this.effect = null;
        _this.kameBeam = null;
        // @property(cc.Prefab)
        // heroKnife: cc.Prefab = null;
        // @property(cc.Prefab)
        // heroArrow: cc.Prefab = null;
        // @property(cc.Prefab)
        // fireBall: cc.Prefab = null;
        _this.blood = null;
        _this.hp = 500;
        _this.damage = 50;
        _this.atkSound = null;
        _this.moveDir = null;
        _this.directionX = null;
        _this.isRun = false;
        _this.isDie = false;
        _this.speed = 250;
        _this.maxHp = 0;
        _this.enemyArr = [];
        _this.isAttack = false;
        _this.gamePlay = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.maxHp = this.hp;
        this.gamePlay = cc.Canvas.instance.node.getComponent('GamePlay_2');
    };
    NewClass.prototype.run = function () {
        if (!this.isRun && !this.isDie) {
            this.isRun = true;
            this.bodySkeleton.setAnimation(0, 'fly', true);
            this.kameBeam.active = true;
        }
    };
    NewClass.prototype.idle = function () {
        if (!this.isRun && !this.isDie) {
            this.bodySkeleton.setAnimation(0, 'fly idle', true);
            this.kameBeam.active = false;
        }
    };
    NewClass.prototype.stop = function () {
        if (!this.isDie) {
            this.isRun = false;
            this.bodySkeleton.setAnimation(0, 'idle', true);
            this.kameBeam.active = false;
        }
    };
    NewClass.prototype.attack = function () {
        var _this = this;
        if (this.enemyArr.length > 0) {
            if (!this.isAttack) {
                this.isAttack = true;
                this.bodySkeleton.schedule(function () {
                    //ss2 skill Flame
                    _this.Flame();
                }, 2, cc.macro.REPEAT_FOREVER, 0);
            }
        }
    };
    NewClass.prototype.attacked = function (damage) {
        if (this.isDie)
            return;
        this.hp -= damage;
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.node.getChildByName('holyRing').active = false;
            this.bodySkeleton.setAnimation(0, 'die', false);
            this.unscheduleAllCallbacks();
            this.bodySkeleton.unscheduleAllCallbacks();
            this.changeAnimation();
            this.gamePlay.joyStick.getComponent('Joystick').touchEndEvent();
            this.gamePlay.joyStick.active = false;
            // cc.Canvas.instance.node.emit(Constant.EVENT.END_GAME, false);
        }
        this.blood.fillRange = this.hp / this.maxHp;
    };
    NewClass.prototype.removeEnemy = function (idEnemy) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy._id == idEnemy)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.idle();
        }
    };
    NewClass.prototype.Flame = function () {
        this.showEffect("flame_2", this.node);
        if (this.enemyArr.length > 0) {
            for (var j = 0; j < this.enemyArr.length; j++) {
                cc.audioEngine.play(this.atkSound, false, 0.5);
                this.showEffect("flame_3", this.enemyArr[j]);
            }
        }
    };
    NewClass.prototype.showEffect = function (name, parent) {
        // if (this.isEnd) return;
        var effect = cc.instantiate(this.effect);
        parent.addChild(effect);
        effect.getComponent("effect").play(name);
        effect.zIndex = 100;
        return effect;
    };
    // shootKnife() {
    //     this.bodySkeleton.schedule(() => {
    //         for (let i = 0; i < 1; i++) {
    //             if (this.enemyArr.length > 1) {
    //                 let bullet = cc.instantiate(this.heroKnife);
    //                 let pos2 = this.enemyArr[1].position.add(cc.v3(50 * i, 50 * i));
    //                 let pos = (this.bodySkeleton.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
    //                 let angle = this.checkAngle(this.enemyArr[1])
    //                 this.createBullet(bullet, angle, pos, pos2,0.35)
    //             }
    //         }
    //     }, 0.25, cc.macro.REPEAT_FOREVER, 0.5)
    // }
    // skillFireBall() {
    //     this.schedule(() => {
    //         for (let i = 0; i < 1; i++) {
    //             if (this.enemyArr.length > 1) {
    //                 let bullet = cc.instantiate(this.fireBall);
    //                 bullet.zIndex = 5;
    //                 bullet.scaleX = (this.enemyArr[1].position.x < 0) ? 0.1 : -0.1
    //                 let pos2 = this.enemyArr[1].position;
    //                 let pos = this.enemyArr[1].position.add(cc.v3((this.enemyArr[1].position.x < 0) ? 500 : -500, (this.enemyArr[1].position.y < 0) ? 500 : 500))
    //                 let angle = 0
    //                 this.createBullet(bullet, angle, pos, pos2, 0.75)
    //             }
    //         }
    //     }, 0.4, cc.macro.REPEAT_FOREVER, 0);
    // }
    // skillKnife(pos) {
    //     for (let i = 0; i < 4; i++) {
    //         let bullet = cc.instantiate(this.heroKnife);
    //         let angle = -135 + 90 * i
    //         let angleR = angle * (Math.PI) / 180
    //         // bullet.angle = angle * 180 / Math.PI + 90;
    //         bullet.getComponent('bullet').isKnife = false;
    //         bullet.getComponent(cc.CircleCollider).enabled = false;
    //         let param = (bullet.scaleX < 0) ? -1000 : 1000
    //         let pos2 = pos.add(cc.v3(param * Math.cos(angleR), param * Math.sin(angleR)))
    //         this.scheduleOnce(() => {
    //             bullet.getComponent(cc.CircleCollider).enabled = true;
    //         }, 0.15)
    //         this.createBullet(bullet, angle, pos, pos2, 1);
    //     }
    // }
    // skillIceArrow() {
    //     this.schedule(() => {
    //         for (let i = 0; i < 10; i++) {
    //             let bullet = cc.instantiate(this.heroArrow);
    //             let angleR = (-Math.PI) + (Math.PI * i / 5);
    //             let pos = this.node.position.add(cc.v3(0, 30));
    //             let angle = angleR * 180 / Math.PI
    //             let param = (bullet.scaleX < 0) ? -1000 : 1000
    //             let pos2 = pos.add(cc.v3(param * Math.cos(angleR), param * Math.sin(angleR)))
    //             this.createBullet(bullet, angle, pos, pos2, 1);
    //         }
    //     }, 1, cc.macro.REPEAT_FOREVER, 1);
    // }
    NewClass.prototype.createBullet = function (bullet, angle, pos, pos2, speed) {
        var _this = this;
        if (speed === void 0) { speed = 0.25; }
        this.node.parent.addChild(bullet);
        // bullet.getComponent('bulletHeroListener').setDame(this.damage);
        bullet.angle = angle;
        bullet.setPosition(pos);
        // console.log(angle);
        var param = (this.bodySkeleton.node.scaleX < 0) ? -1000 : 1000;
        this.scheduleOnce(function () {
            bullet.getChildByName('trail1').active = true;
        }, 0.05);
        cc.tween(bullet).to(speed, { position: pos2 }).call(function () {
            bullet.getChildByName('explode').active = true;
            bullet.getChildByName('icon').active = false;
            _this.scheduleOnce(function () {
                bullet.destroy();
            }, 0.12);
        }).start();
    };
    NewClass.prototype.checkAngle = function (targetEnemy) {
        if (this.enemyArr.length > 0 && this.enemyArr) {
            var target = targetEnemy;
            var tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (this.node.x <= target.x) ? angle : angle + 180;
            return angle;
        }
    };
    NewClass.prototype.changeAnimation = function () {
        var _this = this;
        this.bodySkeleton.setCompleteListener(function (track) {
            var anim = (track.animation) ? track.animation.name : '';
            if (anim == 'die') {
                _this.node.active = false;
                cc.Canvas.instance.node.emit(Constant_1.Constant.EVENT.END_GAME, false);
            }
        });
    };
    NewClass.prototype.update = function (dt) {
        if (this.moveDir && this.directionX && this.isRun && !this.isDie) {
            var newPos = this.node.position.add(this.moveDir.mul(this.speed / 60));
            this.node.setPosition(newPos.clampf(cc.v3(-700, -750), cc.v3(700, 750)));
        }
        if (this.enemyArr.length > 0 && this.enemyArr && !this.isDie) {
            var target = this.enemyArr[0];
            if (target.x >= this.node.x + 20) {
                this.bodySkeleton.node.scaleX = -0.1;
            }
            else {
                this.bodySkeleton.node.scaleX = 0.1;
            }
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], NewClass.prototype, "bodySkeleton", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "bodyCollider", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "rangeCollider", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "heroBullet", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "effect", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kameBeam", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "blood", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "hp", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxrYWJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ1FDO1FBN1BHLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUdqQyxrQkFBWSxHQUFzQixJQUFJLENBQUM7UUFHdkMsbUJBQWEsR0FBc0IsSUFBSSxDQUFDO1FBR3hDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6Qix1QkFBdUI7UUFDdkIsK0JBQStCO1FBRS9CLHVCQUF1QjtRQUN2QiwrQkFBK0I7UUFFL0IsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUc5QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFFBQUUsR0FBRyxHQUFHLENBQUM7UUFHVCxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBR1osY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLFdBQUssR0FBRyxLQUFLLENBQUM7UUFFZCxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVaLFdBQUssR0FBRyxDQUFDLENBQUM7UUFFVixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXVNcEIsQ0FBQztJQXBNRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7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O2FBQ3ZDO1NBQ0o7SUFDTCxDQUFDO0lBNVBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ1c7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQztrREFDVztJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO21EQUNZO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBWXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDWjtJQUdUO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ1Q7SUFHWjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBdkNiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnUTVCO0lBQUQsZUFBQztDQWhRRCxBQWdRQyxDQWhRcUMsRUFBRSxDQUFDLFNBQVMsR0FnUWpEO2tCQWhRb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGJvZHlTa2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIGJvZHlDb2xsaWRlcjogY2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIHJhbmdlQ29sbGlkZXI6IGNjLkNpcmNsZUNvbGxpZGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaGVyb0J1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZWZmZWN0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2FtZUJlYW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICAvLyBoZXJvS25pZmU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIC8vIGhlcm9BcnJvdzogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gZmlyZUJhbGw6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJsb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgaHAgPSA1MDA7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSA1MDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBtb3ZlRGlyID0gbnVsbDtcblxuICAgIGRpcmVjdGlvblggPSBudWxsO1xuXG4gICAgaXNSdW4gPSBmYWxzZTtcblxuICAgIGlzRGllID0gZmFsc2U7XG5cbiAgICBzcGVlZCA9IDI1MDtcblxuICAgIG1heEhwID0gMDtcblxuICAgIGVuZW15QXJyID0gW107XG5cbiAgICBpc0F0dGFjayA9IGZhbHNlO1xuXG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubWF4SHAgPSB0aGlzLmhwO1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KCdHYW1lUGxheV8yJyk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVuICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICB0aGlzLmlzUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm9keVNrZWxldG9uLnNldEFuaW1hdGlvbigwLCAnZmx5JywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmthbWVCZWFtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWRsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVuICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlTa2VsZXRvbi5zZXRBbmltYXRpb24oMCwgJ2ZseSBpZGxlJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmthbWVCZWFtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgdGhpcy5pc1J1biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsICdpZGxlJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmthbWVCZWFtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24uc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL3NzMiBza2lsbCBGbGFtZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZsYW1lKCk7XG4gICAgICAgICAgICAgICAgfSwgMiwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RpZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZTtcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5ocCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJvZHlDb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdob2x5UmluZycpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsICdkaWUnLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuYm9keVNrZWxldG9uLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmpveVN0aWNrLmdldENvbXBvbmVudCgnSm95c3RpY2snKS50b3VjaEVuZEV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmpveVN0aWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5FTkRfR0FNRSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvb2QuZmlsbFJhbmdlID0gdGhpcy5ocCAvIHRoaXMubWF4SHA7XG4gICAgfVxuICAgIHJlbW92ZUVuZW15KGlkRW5lbXkpIHtcbiAgICAgICAgdGhpcy5lbmVteUFyci5mb3JFYWNoKChlbmVteSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbmVteS5faWQgPT0gaWRFbmVteSkgdGhpcy5lbmVteUFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5pZGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBGbGFtZSgpIHtcbiAgICAgICAgdGhpcy5zaG93RWZmZWN0KFwiZmxhbWVfMlwiLCB0aGlzLm5vZGUpO1xuICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZW5lbXlBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXRrU291bmQsIGZhbHNlLCAwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdChcImZsYW1lXzNcIiwgdGhpcy5lbmVteUFycltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93RWZmZWN0KG5hbWUsIHBhcmVudCkge1xuICAgICAgICAvLyBpZiAodGhpcy5pc0VuZCkgcmV0dXJuO1xuICAgICAgICBsZXQgZWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5lZmZlY3QpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcbiAgICAgICAgZWZmZWN0LmdldENvbXBvbmVudChcImVmZmVjdFwiKS5wbGF5KG5hbWUpO1xuICAgICAgICBlZmZlY3QuekluZGV4ID0gMTAwO1xuICAgICAgICByZXR1cm4gZWZmZWN0O1xuICAgIH1cblxuICAgIC8vIHNob290S25pZmUoKSB7XG4gICAgLy8gICAgIHRoaXMuYm9keVNrZWxldG9uLnNjaGVkdWxlKCgpID0+IHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5oZXJvS25pZmUpO1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMuZW5lbXlBcnJbMV0ucG9zaXRpb24uYWRkKGNjLnYzKDUwICogaSwgNTAgKiBpKSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBwb3MgPSAodGhpcy5ib2R5U2tlbGV0b24ubm9kZS5zY2FsZVggPCAwKSA/IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzApKSA6IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMzApKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRoaXMuZW5lbXlBcnJbMV0pXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMiwwLjM1KVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSwgMC4yNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDAuNSlcbiAgICAvLyB9XG4gICAgLy8gc2tpbGxGaXJlQmFsbCgpIHtcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDEpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmlyZUJhbGwpO1xuICAgIC8vICAgICAgICAgICAgICAgICBidWxsZXQuekluZGV4ID0gNTtcbiAgICAvLyAgICAgICAgICAgICAgICAgYnVsbGV0LnNjYWxlWCA9ICh0aGlzLmVuZW15QXJyWzFdLnBvc2l0aW9uLnggPCAwKSA/IDAuMSA6IC0wLjFcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLmVuZW15QXJyWzFdLnBvc2l0aW9uO1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5lbmVteUFyclsxXS5wb3NpdGlvbi5hZGQoY2MudjMoKHRoaXMuZW5lbXlBcnJbMV0ucG9zaXRpb24ueCA8IDApID8gNTAwIDogLTUwMCwgKHRoaXMuZW5lbXlBcnJbMV0ucG9zaXRpb24ueSA8IDApID8gNTAwIDogNTAwKSlcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gMFxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChidWxsZXQsIGFuZ2xlLCBwb3MsIHBvczIsIDAuNzUpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9LCAwLjQsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwKTtcbiAgICAvLyB9XG4gICAgLy8gc2tpbGxLbmlmZShwb3MpIHtcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAvLyAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhlcm9LbmlmZSk7XG4gICAgLy8gICAgICAgICBsZXQgYW5nbGUgPSAtMTM1ICsgOTAgKiBpXG4gICAgLy8gICAgICAgICBsZXQgYW5nbGVSID0gYW5nbGUgKiAoTWF0aC5QSSkgLyAxODBcbiAgICAvLyAgICAgICAgIC8vIGJ1bGxldC5hbmdsZSA9IGFuZ2xlICogMTgwIC8gTWF0aC5QSSArIDkwO1xuICAgIC8vICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnYnVsbGV0JykuaXNLbmlmZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgbGV0IHBhcmFtID0gKGJ1bGxldC5zY2FsZVggPCAwKSA/IC0xMDAwIDogMTAwMFxuICAgIC8vICAgICAgICAgbGV0IHBvczIgPSBwb3MuYWRkKGNjLnYzKHBhcmFtICogTWF0aC5jb3MoYW5nbGVSKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZVIpKSlcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH0sIDAuMTUpXG4gICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChidWxsZXQsIGFuZ2xlLCBwb3MsIHBvczIsIDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIHNraWxsSWNlQXJyb3coKSB7XG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVyb0Fycm93KTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgYW5nbGVSID0gKC1NYXRoLlBJKSArIChNYXRoLlBJICogaSAvIDUpO1xuICAgIC8vICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSk7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGFuZ2xlID0gYW5nbGVSICogMTgwIC8gTWF0aC5QSVxuICAgIC8vICAgICAgICAgICAgIGxldCBwYXJhbSA9IChidWxsZXQuc2NhbGVYIDwgMCkgPyAtMTAwMCA6IDEwMDBcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9zMiA9IHBvcy5hZGQoY2MudjMocGFyYW0gKiBNYXRoLmNvcyhhbmdsZVIpLCBwYXJhbSAqIE1hdGguc2luKGFuZ2xlUikpKVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMiwgMSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0sIDEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAxKTtcbiAgICAvLyB9XG4gICAgY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMiwgc3BlZWQgPSAwLjI1KSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgLy8gYnVsbGV0LmdldENvbXBvbmVudCgnYnVsbGV0SGVyb0xpc3RlbmVyJykuc2V0RGFtZSh0aGlzLmRhbWFnZSk7XG4gICAgICAgIGJ1bGxldC5hbmdsZSA9IGFuZ2xlXG4gICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhbmdsZSk7XG4gICAgICAgIGxldCBwYXJhbSA9ICh0aGlzLmJvZHlTa2VsZXRvbi5ub2RlLnNjYWxlWCA8IDApID8gLTEwMDAgOiAxMDAwO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ3RyYWlsMScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sIDAuMDUpXG4gICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkudG8oc3BlZWQsIHsgcG9zaXRpb246IHBvczIgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ2V4cGxvZGUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYnVsbGV0LmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIDAuMTIpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBjaGVja0FuZ2xlKHRhcmdldEVuZW15KSB7XG4gICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFycikge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRhcmdldEVuZW15O1xuICAgICAgICAgICAgbGV0IHRhbiA9ICh0YXJnZXQueCAtIHRoaXMubm9kZS54ICE9PSAwKSA/ICh0YXJnZXQueSAtIHRoaXMubm9kZS55IC0gMzApIC8gKHRhcmdldC54IC0gdGhpcy5ub2RlLngpIDogMFxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuKHRhbikgKiAoMTgwIC8gKE1hdGguUEkpKTtcbiAgICAgICAgICAgIGFuZ2xlID0gKHRoaXMubm9kZS54IDw9IHRhcmdldC54KSA/IGFuZ2xlIDogYW5nbGUgKyAxODBcbiAgICAgICAgICAgIHJldHVybiBhbmdsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYm9keVNrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIodHJhY2sgPT4ge1xuICAgICAgICAgICAgbGV0IGFuaW0gPSAodHJhY2suYW5pbWF0aW9uKSA/IHRyYWNrLmFuaW1hdGlvbi5uYW1lIDogJyc7XG4gICAgICAgICAgICBpZiAoYW5pbSA9PSAnZGllJykge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KENvbnN0YW50LkVWRU5ULkVORF9HQU1FLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5kaXJlY3Rpb25YICYmIHRoaXMuaXNSdW4gJiYgIXRoaXMuaXNEaWUpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMubW92ZURpci5tdWwodGhpcy5zcGVlZCAvIDYwKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zLmNsYW1wZihjYy52MygtNzAwLCAtNzUwKSwgY2MudjMoNzAwLCA3NTApKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCAmJiB0aGlzLmVuZW15QXJyICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5lbmVteUFyclswXTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQueCA+PSB0aGlzLm5vZGUueCArIDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24ubm9kZS5zY2FsZVggPSAtMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5U2tlbGV0b24ubm9kZS5zY2FsZVggPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/laser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f100s33xhGvpFUCITV0fbf', 'laser');
// script/laser.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.positionXY = function (event) {
        var playerPosition = cc.v2(this.node.position.x, this.node.position.y);
        var mousePosition = event.getLocation();
        mousePosition = this.node.parent.parent.convertToNodeSpaceAR(mousePosition);
        var angle = mousePosition.signAngle(playerPosition);
        var angleD = cc.misc.radiansToDegrees(angle);
        angleD = (angleD * -1) + 45;
        this.node.angle = angleD;
    };
    NewClass.prototype.onLoad = function () {
        this.node.parent.parent.on('mousemove', this.positionXY, this);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFzQkEsQ0FBQztJQXBCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXhDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFuQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzQjVCO0lBQUQsZUFBQztDQXRCRCxBQXNCQyxDQXRCcUMsRUFBRSxDQUFDLFNBQVMsR0FzQmpEO2tCQXRCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHBvc2l0aW9uWFkoZXZlbnQpIHtcbiAgICAgICAgdmFyIHBsYXllclBvc2l0aW9uID0gY2MudjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xuXG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgdmFyIGFuZ2xlID0gbW91c2VQb3NpdGlvbi5zaWduQW5nbGUocGxheWVyUG9zaXRpb24pO1xuXG4gICAgICAgIHZhciBhbmdsZUQgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoYW5nbGUpO1xuICAgICAgICBhbmdsZUQgPSAoYW5nbGVEICogLTEpICsgNDVcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGVEO1xuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQucGFyZW50Lm9uKCdtb3VzZW1vdmUnLCB0aGlzLnBvc2l0aW9uWFksIHRoaXMpXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/status.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50c469ZTxFJ0o6BVzVQD4D6', 'status');
// script/status.ts

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
        _this.lbEnemyName = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.setName = function (name) {
        this.lbEnemyName.string = name;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbEnemyName", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFZQztRQVRHLGlCQUFXLEdBQWEsSUFBSSxDQUFBOztRQVE1QixpQkFBaUI7SUFDckIsQ0FBQztJQVBHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsMEJBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDbEMsQ0FBQztJQVBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1M7SUFIWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBWTVCO0lBQUQsZUFBQztDQVpELEFBWUMsQ0FacUMsRUFBRSxDQUFDLFNBQVMsR0FZakQ7a0JBWm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiRW5lbXlOYW1lOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBzZXROYW1lKG5hbWUpIHtcclxuICAgICAgICB0aGlzLmxiRW5lbXlOYW1lLnN0cmluZyA9IG5hbWVcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/rangeHeroListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bc09FawitI6oRiq1LqEXeV', 'rangeHeroListener');
// script/rangeHeroListener.ts

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
var hero_1 = require("./hero/hero");
var enemyListener_1 = require("./enemyListener");
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
        if (other.node.getComponent(enemyListener_1.default) && other.node.getComponent(enemyListener_1.default).target) {
            if (this.target.getComponent(hero_1.default)) {
                this.target.getComponent(hero_1.default).enemyArr.push(other.node.getComponent(enemyListener_1.default).target);
            }
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.node.getComponent(enemyListener_1.default) && other.node.getComponent(enemyListener_1.default).target) {
            if (this.target.getComponent(hero_1.default)) {
                this.target.getComponent(hero_1.default).removeEnemy(other.node._id);
            }
        }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        if (this.target.getComponent(hero_1.default)) {
            if (other.node.getComponent(enemyListener_1.default) && other.node.getComponent(enemyListener_1.default).target && this.target.getComponent(hero_1.default).isAttack == false) {
                this.target.getComponent(hero_1.default).attack();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyYW5nZUhlcm9MaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBK0I7QUFFL0IsaURBQWlDO0FBRTNCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0NDO1FBbkNHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFHLElBQUksQ0FBQzs7UUFnQ2pCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0JHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFFcEY7U0FDSjtJQUNMLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFOUQ7U0FDSjtJQUNMLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBRSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO2dCQUV2SCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUUzQztTQUNKO0lBQ0wsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBSE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNDNUI7SUFBRCxlQUFDO0NBdENELEFBc0NDLENBdENxQyxFQUFFLENBQUMsU0FBUyxHQXNDakQ7a0JBdENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8vaGVybyc7XG5pbXBvcnQgZW5lbXkgZnJvbSAnLi9lbmVteSc7XG5pbXBvcnQgRUwgZnJvbSAnLi9lbmVteUxpc3RlbmVyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBjbGFzc05hbWUgPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpc1tcIl9fY2xhc3NuYW1lX19cIl1cbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpICYmIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVMKS50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykuZW5lbXlBcnIucHVzaChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkudGFyZ2V0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpICYmIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVMKS50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykucmVtb3ZlRW5lbXkob3RoZXIubm9kZS5faWQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Db2xsaXNpb25TdGF5KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkgJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCAmJiB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoaGVybykuaXNBdHRhY2sgPT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmdldENvbXBvbmVudChoZXJvKS5hdHRhY2soKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e322GVUqlIHqHeZJRuo0AW', 'tree');
// script/tree.ts

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
        _this.preWood = null;
        _this.preWhellTree = 100;
        _this.heal = 100;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.heal = this.preWhellTree;
    };
    NewClass.prototype.attacked = function (damage) {
        this.heal -= damage;
        if (this.node.getChildByName("heroaura")) {
            this.node.getChildByName("heroaura").active = false;
            this.node.getChildByName("tree_yellow").active = false;
        }
        if (this.heal <= 0) {
            this.anim.play("tree_cutted");
            this.addWood();
        }
        else {
            this.anim.play("tree_cutting");
        }
    };
    NewClass.prototype.addWood = function () {
        var _this = this;
        for (var i = 0; i < 3; i++) {
            this.scheduleOnce(function () {
                var wood = cc.instantiate(_this.preWood);
                wood.parent = _this.node;
                wood.position = cc.v3(0, 50);
                _this.scheduleOnce(function () {
                    cc.Canvas.instance.node.getComponent("Game17").moveWood(wood);
                }, 0.8);
            }, i * 0.1);
        }
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "preWhellTree", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNENDO1FBMUNHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBRyxHQUFHLENBQUE7UUFDbEIsVUFBSSxHQUFHLEdBQUcsQ0FBQTs7UUFvQ1YsaUJBQWlCO0lBQ3JCLENBQUM7SUFuQ0csd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQTtRQUNuQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMxRDtRQUdELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBRWpCO2FBQ0k7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtTQUNqQztJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBYUM7UUFaRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDNUIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtTQUVkO0lBRUwsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNHO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztrREFDSDtJQU5ELFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QzVCO0lBQUQsZUFBQztDQTVDRCxBQTRDQyxDQTVDcUMsRUFBRSxDQUFDLFNBQVMsR0E0Q2pEO2tCQTVDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVdvb2Q6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcHJlV2hlbGxUcmVlID0gMTAwXG4gICAgaGVhbCA9IDEwMFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaGVhbCA9IHRoaXMucHJlV2hlbGxUcmVlXG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICB0aGlzLmhlYWwgLT0gZGFtYWdlXG4gICAgICAgIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhlcm9hdXJhXCIpKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhlcm9hdXJhXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJlZV95ZWxsb3dcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIFxuXG4gICAgICAgIGlmICh0aGlzLmhlYWwgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJ0cmVlX2N1dHRlZFwiKVxuICAgICAgICAgICAgdGhpcy5hZGRXb29kKClcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJ0cmVlX2N1dHRpbmdcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRXb29kKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKVxuICAgICAgICAgICAgICAgIHdvb2QucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSBjYy52MygwLCA1MClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWUxN1wiKS5tb3ZlV29vZCh3b29kKVxuICAgICAgICAgICAgICAgIH0sIDAuOClcbiAgICAgICAgICAgIH0sIGkgKiAwLjEpXG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/updateBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00640rtX/pCuIYFAk2ViewZ', 'updateBar');
// script/updateBar.ts

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
        _this.lbCount = null;
        _this.fillbar = null;
        _this.text = null;
        _this.iconRuby = null;
        _this.count = 0;
        _this.mission = 10;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.updateBar = function () {
        this.count = this.count + 2;
        this.lbCount.node.getComponent(cc.Animation).play("text_animation");
        this.lbCount.string = this.count.toString() + "/" + this.mission.toString();
        this.fillbar.fillRange = this.count / this.mission;
    };
    NewClass.prototype.reset = function (mission) {
        this.count = 0;
        this.mission = mission;
        this.lbCount.string = this.count.toString() + "/" + this.mission.toString();
        this.fillbar.fillRange = 0;
    };
    NewClass.prototype.setMission2 = function () {
        this.text.string = "Collect 10 Ruby";
        this.node.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.iconRuby;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCount", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "fillbar", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "iconRuby", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1cGRhdGVCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxQ0M7UUFsQ0csYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsY0FBUSxHQUFtQixJQUFJLENBQUE7UUFDL0IsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBRyxFQUFFLENBQUE7O1FBeUJaLGlCQUFpQjtJQUNyQixDQUFDO0lBekJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZELENBQUM7SUFDRCx3QkFBSyxHQUFMLFVBQU0sT0FBTztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU1RSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3RGLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQVRkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxQzVCO0lBQUQsZUFBQztDQXJDRCxBQXFDQyxDQXJDcUMsRUFBRSxDQUFDLFNBQVMsR0FxQ2pEO2tCQXJDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGZpbGxiYXI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRleHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgaWNvblJ1Ynk6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxuICAgIGNvdW50ID0gMDtcbiAgICBtaXNzaW9uID0gMTBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgdXBkYXRlQmFyKCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5jb3VudCArIDI7XG4gICAgICAgIHRoaXMubGJDb3VudC5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0ZXh0X2FuaW1hdGlvblwiKVxuICAgICAgICB0aGlzLmxiQ291bnQuc3RyaW5nID0gdGhpcy5jb3VudC50b1N0cmluZygpICsgXCIvXCIgKyB0aGlzLm1pc3Npb24udG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5maWxsYmFyLmZpbGxSYW5nZSA9IHRoaXMuY291bnQgLyB0aGlzLm1pc3Npb247XG4gICAgfVxuICAgIHJlc2V0KG1pc3Npb24pIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHRoaXMubWlzc2lvbiA9IG1pc3Npb247XG4gICAgICAgIHRoaXMubGJDb3VudC5zdHJpbmcgPSB0aGlzLmNvdW50LnRvU3RyaW5nKCkgKyBcIi9cIiArIHRoaXMubWlzc2lvbi50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuZmlsbGJhci5maWxsUmFuZ2UgPSAwO1xuICAgIH1cbiAgICBzZXRNaXNzaW9uMigpIHtcbiAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IFwiQ29sbGVjdCAxMCBSdWJ5XCJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLmljb25SdWJ5XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PH_21/Game21.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8946kv3XFKoJpl24s1ht7I', 'Game21');
// script/PH_21/Game21.ts

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
globalThis.gold = 0;
globalThis.wood = 10;
var hero_1 = require("../hero/hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrow = null;
        _this.circle = null;
        _this.mainCamera = null;
        _this.mainCamera2 = null;
        _this.hero = null;
        // @property(cc.Node)
        // goku: cc.Node = null;
        _this.kazetsu = null;
        _this.arthur = null;
        _this.lucia = null;
        _this.mako = null;
        _this.mechaman = null;
        _this.auriel = null;
        _this.listChest = null;
        // @property(cc.Node)
        // listCard: cc.Node = null
        _this.heroNode = null;
        _this.coinBar = null;
        _this.preDamage = null;
        _this.preBonus = null;
        _this.preFxAtk = null;
        _this.preCoin = null;
        _this.preWood = null;
        _this.preEnemies = null;
        _this.preEnemies2 = null;
        _this.listEnemy = null;
        _this.linkToStore = null;
        _this.bgSOund = null;
        _this.soundGem = null;
        _this.soundCard = null;
        _this.soundComfirm = null;
        _this.soundEnd = null;
        _this.soundEnemyDie = null;
        _this.soundUpdate = null;
        _this.soundBtn = null;
        _this.soundput = null;
        _this.JoyStick = null;
        _this.uiNode = null;
        _this.endGameNode = null;
        _this.preMeat = null;
        _this.listHero = null;
        _this.guild = null;
        _this.house1 = null;
        _this.logo = null;
        _this.currency = null;
        _this.preEnemyDie = null;
        _this.boss = null;
        _this.listEnemy2 = null;
        _this.block = null;
        _this.fxtele = null;
        _this.fxXuatHien = null;
        _this.bloodBar = null;
        _this.chest = null;
        _this.adChanel = '{{__adv_channels_adapter__}}';
        _this.isMoving = false;
        _this.isvertical = false;
        _this.heroComp = null;
        _this.isPauseGame = false;
        _this.isCountEnemiesDie = 0;
        // isPhase2 = false
        _this.isSound = false;
        _this.isMain = null;
        _this.isEndGame = false;
        _this.isCountFollow = 0;
        _this.isCountHero = 0;
        _this.arrHero = [];
        _this.listArrPos = [cc.v3(-600 + 509, -80 + 70), cc.v3(-611 + 510, 36 + 10), cc.v3(-415 + 509, 17 + 61), cc.v3(-415 + 509, 17 - 61)];
        _this.isPhase2 = false;
        _this.isUdcircle = 0;
        _this.isCountUnlock = 0;
        _this.isCountHeroDie = 0;
        _this.isScale = 1;
        _this.isMag = 0;
        return _this;
    }
    // protected onLoad(): void {
    // }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // let manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // // Enabled draw collider
        // manager.enabledDebugDraw = true;
        // // Enabled draw collider bounding box
        // manager.enabledDrawBoundingBox = true;
        this.arrHero.push(this.hero);
    };
    NewClass.prototype.start = function () {
        var _this = this;
        // this.reponsive()
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.bgSOund, true, 0.4);
        this.isMain = this.heroComp;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.heroComp = this.hero.getComponent(hero_1.default);
        this.isMoving = true;
        cc.tween(this.mainCamera.node).delay(1.2).to(0.5, { position: this.hero.position.add(cc.v3(50, 50)) }).delay(0.3).call(function () {
            _this.guild.active = true;
            _this.JoyStick.active = true;
            _this.isMoving = false;
        }).start();
        cc.tween(this.mainCamera2.node).delay(1.2).to(0.5, { position: this.hero.position.add(cc.v3(50, 50)) }).delay(0.3).call(function () {
            _this.guild.active = true;
            _this.JoyStick.active = true;
            _this.isMoving = false;
        }).start();
    };
    NewClass.prototype.showRuong = function () { };
    NewClass.prototype.phase2 = function () {
        var _this = this;
        this.offJoyStick();
        console.log("check");
        this.isMoving = true;
        this.boss.active = true;
        this.listEnemy2.active = true;
        this.listEnemy.active = false;
        var _loop_1 = function (child) {
            if (child.active == true) {
                var fx = cc.instantiate(this_1.fxtele);
                fx.parent = this_1.node;
                fx.position = child.position;
                this_1.scheduleOnce(function () {
                    child.opacity = 0;
                }, 0.3);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.arrHero; _i < _a.length; _i++) {
            var child = _a[_i];
            _loop_1(child);
        }
        cc.tween(this.logo).by(0.2, { opacity: -255, position: cc.v3(0, -100) }).start();
        cc.tween(this.currency).by(0.2, { opacity: -255, position: cc.v3(0, -100) }).start();
        cc.tween(this.circle).to(0.3, { opacity: 0 }).start();
        this.scheduleOnce(function () {
            _this.isMag = 100;
            cc.tween(_this.mainCamera.node).to(0.7, { position: cc.v3(1050 + 50 + _this.isMag, 900 + 50) }).call(function () {
            }).start();
            cc.tween(_this.mainCamera2.node).to(0.7, { position: cc.v3(1050 + 50 + _this.isMag, 900 + 50) }).call(function () {
            }).start();
            cc.tween(_this.mainCamera).by(0.7, { zoomRatio: -0.25 }).start();
            cc.tween(_this.mainCamera2).by(0.7, { zoomRatio: -0.25 }).start();
            // this.hero.position.add(cc.v3(50 + this.isMag, 50)
            _this.scheduleOnce(function () {
                _this.bloodBar.active = true;
                _this.hero.position = cc.v3(1050, 900);
                _this.block.active = true;
                _this.isMoving = false;
                _this.house1.active = false;
                _this.scheduleOnce(function () {
                    _this.circle.opacity = 255;
                    var _loop_2 = function (child) {
                        if (child.active == true) {
                            console.log("move");
                            var fx = cc.instantiate(_this.fxXuatHien);
                            fx.parent = _this.node;
                            fx.position = child.position;
                            _this.scheduleOnce(function () {
                                child.opacity = 255;
                            }, 0.3);
                        }
                    };
                    for (var _i = 0, _a = _this.arrHero; _i < _a.length; _i++) {
                        var child = _a[_i];
                        _loop_2(child);
                    }
                    _this.onJoyStick();
                }, 0.2);
                _this.scheduleOnce(function () {
                });
                _this.isPhase2 = true;
            }, 0.7);
        }, 0.3);
    };
    NewClass.prototype.onBoss = function () {
        this.boss.getComponent(cc.CircleCollider).enabled = true;
        this.boss.getChildByName("range").getComponent(cc.CircleCollider).enabled = true;
    };
    NewClass.prototype.spawEnemy1 = function () {
        var _this = this;
        this.spawEnemies(20);
        this.scheduleOnce(function () {
            _this.spawEnemies(30);
        }, 2);
        this.scheduleOnce(function () {
            _this.spawEnemies(30);
        }, 4);
    };
    NewClass.prototype.spawEnemies = function (value) {
        for (var i = 0; i < value; i++) {
            var posX = Math.floor(Math.random() * -400) + Math.floor(Math.random() * 400);
            var posY = Math.floor(Math.random() * -550) + Math.floor(Math.random() * 550);
            var param = Math.floor(Math.random() * 2) + 1;
            var pos = null;
            if (i % 2 == 0)
                pos = this.hero.position.add(cc.v3(posX + i * 20, ((param % 2 == 0) ? -550 - i * 10 : 550 + i * 10)));
            else
                pos = this.hero.position.add(cc.v3((param % 2 == 0) ? -400 - i * 10 : 400 + i * 10, posY + i * 20));
            var enemy = this.createEnemy('enemy1', pos);
            enemy.getComponent('enemy').freeze = false;
            enemy.getComponent('enemy').run();
        }
    };
    NewClass.prototype.createEnemy = function (name, pos) {
        var enemy = null;
        var rd = Math.floor(Math.random() * 2);
        if (rd == 0) {
            enemy = cc.instantiate(this.preEnemies);
        }
        else {
            enemy = cc.instantiate(this.preEnemies2);
        }
        // switch (name) {
        //     case 'enemy1':
        //         enemy = cc.instantiate(this.preEnemies)
        //         break;
        // }
        this.listEnemy.addChild(enemy);
        enemy.setPosition(pos);
        // enemy.scaleX = enemy.scaleX * ((enemy.x < 0) ? 1 : -1);
        return enemy;
    };
    NewClass.prototype.updateHouse = function (value) {
        var _this = this;
        this.offJoyStick();
        cc.audioEngine.play(this.soundput, false, 1);
        this.arrow.active = false;
        var _loop_3 = function (i) {
            this_2.scheduleOnce(function () {
                var wood = cc.instantiate(_this.preWood);
                wood.parent = _this.node;
                wood.position = _this.hero.position;
                wood.scale = 0.5;
                var startPos = cc.v2(wood.x, wood.y);
                var posEnd = _this.house1.parent.convertToWorldSpaceAR(_this.house1.position);
                posEnd = _this.node.convertToNodeSpaceAR(posEnd);
                // posEnd=cc.v2(posEnd.x,posEnd.y)
                var midPos = cc.v2((startPos.x + posEnd.x) / 2, (startPos.y + posEnd.y) / 2 + 400);
                cc.tween(wood).bezierTo(0.5, startPos, midPos, cc.v2(posEnd.x, posEnd.y + 200)).call(function () {
                    wood.destroy();
                    // if (this.house1.getComponent("house").isUpdate == 0) {
                    //     globalThis.wood--
                    // }
                    // else {
                    //     globalThis.gold -= 4
                    // }
                    switch (_this.house1.getComponent("house").isUpdate) {
                        case 0:
                            globalThis.wood--;
                            break;
                        case 1:
                            globalThis.gold -= 4;
                            break;
                        case 2:
                            globalThis.gold -= 16;
                            break;
                    }
                    _this.house1.getComponent("house").updateValue();
                    if (i == value - 1) {
                        cc.audioEngine.play(_this.soundEnd, false, 1);
                        _this.onJoyStick();
                        _this.house1.getComponent("house").updateHouse();
                    }
                }).start();
                cc.tween(wood).to(0.5, { scale: 0.7 }).start();
            }, i * 0.05);
        };
        var this_2 = this;
        for (var i = 0; i < value; i++) {
            _loop_3(i);
        }
    };
    NewClass.prototype.updateHouse2 = function (value) {
        var _this = this;
        this.offJoyStick();
        cc.audioEngine.play(this.soundput, false, 1);
        var _loop_4 = function (i) {
            this_3.scheduleOnce(function () {
                var wood = cc.instantiate(_this.preMeat);
                wood.parent = _this.node;
                wood.position = _this.hero.position;
                wood.scale = 0.5;
                var startPos = cc.v2(wood.x, wood.y);
                var posEnd = _this.house1.parent.convertToWorldSpaceAR(_this.house1.position);
                posEnd = _this.node.convertToNodeSpaceAR(posEnd);
                // posEnd=cc.v2(posEnd.x,posEnd.y)
                var midPos = cc.v2((startPos.x + posEnd.x) / 2, (startPos.y + posEnd.y) / 2 + 400);
                cc.tween(wood).bezierTo(0.5, startPos, midPos, cc.v2(posEnd.x, posEnd.y + 200)).call(function () {
                    wood.destroy();
                    switch (_this.house1.getComponent("house").isUpdate) {
                        case 2:
                            globalThis.gold -= 2;
                            break;
                    }
                    _this.house1.getComponent("house").updateValue();
                    if (i == value - 1) {
                        _this.onJoyStick();
                        cc.audioEngine.play(_this.soundEnd, false, 1);
                        _this.house1.getComponent("house").updateHouse();
                    }
                }).start();
                cc.tween(wood).to(0.5, { scale: 0.7 }).start();
            }, i * 0.05);
        };
        var this_3 = this;
        for (var i = 0; i < value; i++) {
            _loop_4(i);
        }
    };
    NewClass.prototype.addHero = function () {
        console.log("add Hero");
        if (this.isCountHero > 3)
            return;
        cc.audioEngine.play(this.soundCard, false, 0.8);
        // this.listCard.children[0].children[this.isCountHero].active = true;
        this.offJoyStick();
        // let pos = this.listArrPos[this.isCountHero]
        // this.isCountHero++
        // let hero = null;
        // switch (this.isCountHero) {
        //     case 1:
        //         hero = this.lucia;
        //         break;
        //     case 2:
        //         hero = this.kazetsu;
        //         break;
        //     case 3:
        //         hero = this.arthur;
        //         break;
        // }
        // this.arrHero.push(hero);
        // hero.getComponent("hero").localPos = pos;
        // hero.position = this.hero.position.add(pos);
        // hero.active = true;
    };
    NewClass.prototype.btn_Claim = function (event, value) {
        var _this = this;
        // let btn = event.currentTarget.parent.parent
        cc.audioEngine.play(this.soundComfirm, false, 0.8);
        // this.isScale = true
        // cc.tween(btn).to(0.3, { scale: 0 }).delay(0.2).call(() => {
        // this.isScale = false
        var pos = this.listArrPos[this.isCountHero];
        this.isCountHero++;
        var hero = null;
        switch (value) {
            case "1":
                hero = this.lucia;
                this.scheduleOnce(function () {
                    _this.phase2();
                }, 0.3);
                break;
            case "2":
                hero = this.kazetsu;
                break;
            case "3":
                hero = this.mechaman;
                break;
            case "4":
                hero = this.arthur;
                break;
            case 5:
                hero = this.mako;
                break;
        }
        this.arrHero.push(hero);
        hero.getComponent("hero").localPos = pos;
        hero.position = this.hero.position.add(pos);
        hero.active = true;
        this.onJoyStick();
        var val = 0.12;
        if (this.isUdcircle != 0) {
            val = 0.02;
        }
        else {
            this.spawEnemy1();
        }
        // this.spawEnemies(30)
        // th (this.isUdcircle) {
        //     case 1:
        //         val=0
        this.isUdcircle++;
        this.house1.getComponent("house").isMoving = false;
        console.log("ud");
        // }
        cc.tween(this.circle).by(0.2, { scale: val }).start();
        // }).start()
    };
    NewClass.prototype.clickChest = function (value) {
        // console.log(value)
        // switch (value) {
        //     case 1:
        this.offJoyStick();
        this.transCoin(value);
        // break;
        // }
    };
    NewClass.prototype.transCoin = function (value) {
        var _this = this;
        console.log("transcoin");
        var chest = this.listChest.children[value - 1];
        var _loop_5 = function (i) {
            this_4.scheduleOnce(function () {
                cc.audioEngine.play(_this.soundGem, false, 0.5);
                var rewardNode = cc.instantiate(_this.preCoin);
                rewardNode.position = _this.hero.position;
                rewardNode.parent = _this.node;
                rewardNode.scale = 0;
                var startPos = cc.v2(_this.hero.x, _this.hero.y);
                var endPos = cc.v2(chest.x, chest.y);
                var midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 400);
                cc.tween(rewardNode).to(0.3, { scale: 1 }).start();
                cc.tween(rewardNode).bezierTo(0.3, startPos, midPos, endPos).call(function () {
                    rewardNode.destroy();
                    if (i == 7) {
                        _this.addHero();
                    }
                }).start();
            }, 0.12 * i);
        };
        var this_4 = this;
        for (var i = 0; i < 8; i++) {
            _loop_5(i);
        }
    };
    // checkLock(value) {
    // }
    NewClass.prototype.offJoyStick = function () {
        this.JoyStick.active = false;
        this.JoyStick.getComponent("JoyStick").touchEndEvent();
    };
    NewClass.prototype.onJoyStick = function () {
        this.JoyStick.active = true;
    };
    NewClass.prototype.startGame = function () {
        this.hero.getComponent(cc.Collider).enabled = true;
        this.circle.getComponent(cc.PolygonCollider).enabled = true;
    };
    NewClass.prototype.countDie = function (pos) {
        this.isCountEnemiesDie++;
        this.createCoin(pos);
        var preDie = cc.instantiate(this.preEnemyDie);
        preDie.parent = this.node;
        preDie.position = pos;
    };
    NewClass.prototype.createCoin = function (pos) {
        var _this = this;
        var _loop_6 = function (i) {
            var rewardNode = cc.instantiate(this_5.preCoin);
            var nodeScale = rewardNode.scale;
            rewardNode.scale = 0;
            pos = this_5.listEnemy.convertToWorldSpaceAR(pos);
            pos = this_5.hero.convertToNodeSpaceAR(pos);
            rewardNode.parent = this_5.hero;
            cc.tween(rewardNode).delay(0.15 * i).call(function () {
                cc.audioEngine.play(_this.soundGem, false, 0.5);
            }).set({ active: true, scale: 0, position: pos }).to(0.1, { scale: 0.5 })
                .to(0.4, { position: cc.v3(0, 50) }).call(function () {
                globalThis.gold += 5;
                rewardNode.destroy();
                var bonus = cc.instantiate(_this.preBonus);
                bonus.parent = _this.hero;
                bonus.position = cc.v3(0, 50);
                bonus.scaleX = (_this.hero.scaleX > 0) ? 1 : -1;
            })
                .start();
        };
        var this_5 = this;
        for (var i = 0; i < 1; i++) {
            _loop_6(i);
        }
    };
    NewClass.prototype.countHeroDie = function () {
        this.isCountHeroDie++;
        // if (this.isCountHeroDie == 4) {
        //     this.onEndGame()
        // }
    };
    NewClass.prototype.moveHeroToBoss = function () {
        this.heroComp.moveByPos(cc.v3(80, 50), 0.3);
        this.kazetsu.getComponent(hero_1.default).moveByPos(cc.v3(400, 50), 0.3);
        // this.goku.getComponent(H).moveByPos(cc.v3(100, 50), 0.3)
        // this.mako.getComponent(H).moveByPos(cc.v3(50, 20), 0.1)
    };
    // touchEndEvent(event) {
    //     let pos = event.getLocation();
    //     // pos=this.scene1.convertToWorldSpaceAR(pos)
    //     pos = this.boss.parent.convertToNodeSpaceAR(pos)
    //     pos = pos.add(this.mainCamera.node.position)
    //     let posBoss = this.boss.position.add(cc.v3(0, 80))
    //     if (this.boss.position.sub(pos).mag() <= 300) {
    //         console.log("atk boss");
    //         cc.tween(this.boss.children[0]).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
    //         if (this.isFirst == false) {
    //             this.isFirst = true
    //             this.scheduleOnce(() => {
    //                 this.boss.getChildByName("hand").active = false;
    //             }, 1)
    //             this.moveHeroToBoss()
    //         }
    //         this.createDamageBoss(pos)
    //     }
    // }
    NewClass.prototype.spawEnenmy = function () {
        // this.listIconHero[0].active = true;
        // this.listIconHero[2].active = true;
    };
    NewClass.prototype.onEndGame = function () {
        if (this.isEndGame)
            return;
        this.isEndGame = true;
        // let chest = this.listChest.children[1]
        this.linkToStore.active = true;
        this.offJoyStick();
        // this.boxIcon.active = false
        // cc.tween(this.mainCamera).by(0.5, { zoomRatio: -0.3 }).start()
        // this.hero.position = cc.v3(1045, -209)
        // for (let i = 1; i < this.listArrPos.length; i++) {
        //     this.hero.parent.children[i].position = this.hero.position.add(this.listArrPos[i - 1])
        // }
        // for (let i = 0; i < 8; i++) {
        //     this.scheduleOnce(() => {
        //         cc.audioEngine.play(this.soundGem, false, 0.5)
        //         let rewardNode = cc.instantiate(this.preCoin);
        //         rewardNode.position = this.hero.position;
        //         rewardNode.parent = this.node;
        //         rewardNode.scale = 0
        //         let startPos = cc.v2(this.hero.x, this.hero.y);
        //         let endPos = cc.v2(chest.x, chest.y)
        //         let midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 400)
        //         cc.tween(rewardNode).to(0.3, { scale: 1 }).start()
        //         cc.tween(rewardNode).bezierTo(0.3, startPos, midPos, endPos).call(() => {
        //             rewardNode.destroy();
        //             if (i == 7) {
        //                 // this.addHero();
        //                 let chests = chest.children[0].getChildByName("chest")
        //                 // chest.children[0].getChildByName("icon").active = false;
        //                 chest.children[0].getChildByName("currentcy").active = false
        //                 chest.children[0].getChildByName("bang").active = false
        //                 chests.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', chests.getComponent(cc.Sprite)));
        //                 this.linkToStore.active = true;
        //             }
        //         }).start()
        //     }, 0.12 * i)
        // }
        // cc.audioEngine.play(this.soundEnd, false, 1)
        // this.endGameNode.active = true;
        // this.linkToStore.active = true;
    };
    NewClass.prototype.createMeat = function (pos) {
        var meat = cc.instantiate(this.preMeat);
        meat.parent = this.node;
        meat.position = pos;
        meat.scale = 0.8;
    };
    NewClass.prototype.createDamage = function (pos) {
        var _this = this;
        if (this.isSound == false) {
            this.isSound = true;
            cc.audioEngine.play(this.soundEnemyDie, false, 1);
            this.scheduleOnce(function () {
                _this.isSound = false;
            }, 0.15);
        }
        var rdx = Math.floor(Math.random() * 200) - 100;
        var rdy = Math.floor(Math.random() * 100) + 80;
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos.add(cc.v3(0, 0));
        ;
        damagefx.scale = 1;
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos.add(cc.v3(0, 0));
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 1.5;
        damage.zIndex = cc.macro.MAX_ZINDEX;
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528");
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
    };
    NewClass.prototype.createDamageBoss = function (pos) {
        var _this = this;
        if (this.isSound == false) {
            this.isSound = true;
            cc.audioEngine.play(this.soundEnemyDie, false, 1);
            this.scheduleOnce(function () {
                _this.isSound = false;
            }, 0.15);
        }
        var rdx = Math.floor(Math.random() * 200) - 100;
        var rdy = Math.floor(Math.random() * 100) + 80;
        var damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node;
        damagefx.position = pos.add(cc.v3(rdx, rdy + 100));
        ;
        damagefx.scale = 1;
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos.add(cc.v3(rdx, rdy + 100));
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2;
        damage.zIndex = cc.macro.MAX_ZINDEX;
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528");
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
    };
    NewClass.prototype.bossDie = function (pos) {
        var _this = this;
        this.offJoyStick();
        this.chest.active = true;
        this.isMoving = true;
        this.scheduleOnce(function () {
            var preDie = cc.instantiate(_this.preEnemyDie);
            preDie.parent = _this.node;
            preDie.position = pos;
            preDie.scale = 4;
            _this.linkToStore.active = true;
            _this.chest.getChildByName("hand").active = true;
        }, 0.3);
        cc.tween(this.mainCamera.node).to(0.4, { position: cc.v3(1360, 1200) }).start();
        cc.tween(this.mainCamera2.node).to(0.4, { position: cc.v3(1360, 1200) }).start();
        cc.tween(this.mainCamera).by(0.4, { zoomRatio: 0.8 }).start();
        cc.tween(this.mainCamera2).by(0.4, { zoomRatio: 0.8 }).start();
        cc.tween(this.bloodBar).by(0.3, { opacity: -255, position: cc.v3(0, 80) }).call(function () { _this.bloodBar.active = false; }).start();
    };
    NewClass.prototype.reponsive = function () {
        // let canvas = this.node.getComponent(cc.Canvas);
        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.coinBar.scale = 1
        //         this.endGameNode.position = cc.v3(0, 0)
        //         this.endGameNode.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;
        //         }
        //         this.mainCamera.zoomRatio = 0.9
        //     }
        // }
        // else {
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.coinBar.scale = 1.3
        //     this.endGameNode.position = cc.v3(0, -100)
        //     this.endGameNode.scale = 1.2
        //     this.mainCamera.zoomRatio = 1.3
        // }
    };
    NewClass.prototype.update = function () {
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(50 + this.isMag, 50)));
            this.mainCamera2.node.setPosition(this.hero.position.add(cc.v3(50 + this.isMag, 50)));
            // if (!this.isEndGame) {
            // }
        }
        // let canvas = this.node.getComponent(cc.Canvas);
        var deviceResolution = cc.view.getFrameSize();
        var check2 = (deviceResolution.width / 640);
        if (deviceResolution.width < deviceResolution.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // if (cc.winSize.height / cc.winSize.width < 1.35) {
                //     canvas.fitHeight = true;
                // }
            }
            // this.mainCamera.zoomRatio = 1;
            this.isScale = 1;
            // this.listCard.position = cc.v3(0, 0)
            this.logo.scale = 0.9;
            // this.logo.position=cc.v3(-200,419*check-50)
            // this.logo.getComponent(cc.Widget).left = 110
            // this.listCard.scale = 1
            this.currency.scale = 1;
            // this.currency.getComponent(cc.Widget).right = 83
            this.logo.position = cc.v3(-200, 500);
            this.currency.position = cc.v3(236, 550);
            this.mainCamera.node.active = true;
            this.mainCamera2.node.active = false;
            if (deviceResolution.height / deviceResolution.width < 1.35) {
                this.logo.position = cc.v3(-200, 419);
                this.currency.position = cc.v3(236, 474);
            }
        }
        else {
            this.isvertical = false;
            this.currency.scale = 1.3;
            // this.currency.getComponent(cc.Widget).right = 120
            this.isScale = 1.3;
            // this.listCard.scale = 1.3
            // this.listCard.position = cc.v3(0, -70)
            // this.mainCamera.zoomRatio = 1.3
            this.mainCamera.node.active = false;
            this.mainCamera2.node.active = true;
            this.logo.scale = 1.2;
            // this.logo.getComponent(cc.Widget).left = 200
            this.logo.position = cc.v3(-500 + 50, 419);
            this.currency.position = cc.v3(500, 474);
            // this.logo.getComponent(cc.Widget).h=300
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arrow", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "circle", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "kazetsu", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "arthur", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lucia", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mako", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mechaman", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "auriel", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listChest", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "heroNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "coinBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBonus", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preFxAtk", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preCoin", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preEnemies", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preEnemies2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listEnemy", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bgSOund", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundGem", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundCard", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundComfirm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnd", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundEnemyDie", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundUpdate", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundBtn", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundput", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "JoyStick", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "uiNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endGameNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preMeat", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listHero", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "house1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "currency", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preEnemyDie", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boss", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "listEnemy2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "block", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxtele", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "fxXuatHien", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bloodBar", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "chest", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQSF8yMVxcR2FtZTIxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBR3BCLHFDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW15QkM7UUFoeUJHLFdBQUssR0FBWSxJQUFJLENBQUE7UUFFckIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBRzNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FB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Q0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRixDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFVCxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM5RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsR0FB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QUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQTNHTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbXlCNUI7SUFBRCxlQUFDO0NBbnlCRCxBQW15QkMsQ0FueUJxQyxFQUFFLENBQUMsU0FBUyxHQW15QmpEO2tCQW55Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWxUaGlzLmdvbGQgPSAwXG5nbG9iYWxUaGlzLndvb2QgPSAxMFxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuaW1wb3J0IEggZnJvbSAnLi4vaGVyby9oZXJvJ1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFycm93OiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNpcmNsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgbWFpbkNhbWVyYTI6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVybzogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZ29rdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAga2F6ZXRzdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXJ0aHVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsdWNpYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFrbzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWVjaGFtYW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGF1cmllbDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENoZXN0OiBjYy5Ob2RlID0gbnVsbFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGxpc3RDYXJkOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVyb05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvaW5CYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlRGFtYWdlOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlQm9udXM6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVGeEF0azogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUNvaW46IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVXb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlRW5lbWllczogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZUVuZW1pZXMyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEVuZW15OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5rVG9TdG9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBiZ1NPdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZEdlbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ2FyZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kQ29tZmlybTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kRW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRFbmVteURpZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVXBkYXRlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRCdG46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzb3VuZHB1dDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBKb3lTdGljazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5kR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVNZWF0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEhlcm86IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ3VpbGQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvdXNlMTogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2dvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjdXJyZW5jeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVFbmVteURpZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3NzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0RW5lbXkyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBibG9jazogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGZ4dGVsZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGZ4WHVhdEhpZW46IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmxvb2RCYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoZXN0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGFkQ2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXG4gICAgaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICBpc3ZlcnRpY2FsID0gZmFsc2U7XG4gICAgaGVyb0NvbXAgPSBudWxsO1xuICAgIGlzUGF1c2VHYW1lID0gZmFsc2U7XG4gICAgaXNDb3VudEVuZW1pZXNEaWUgPSAwO1xuICAgIC8vIGlzUGhhc2UyID0gZmFsc2VcbiAgICBpc1NvdW5kID0gZmFsc2VcbiAgICBpc01haW4gPSBudWxsO1xuICAgIGlzRW5kR2FtZSA9IGZhbHNlO1xuICAgIGlzQ291bnRGb2xsb3cgPSAwO1xuICAgIGlzQ291bnRIZXJvID0gMDtcbiAgICBhcnJIZXJvID0gW107XG4gICAgbGlzdEFyclBvcyA9IFtjYy52MygtNjAwICsgNTA5LCAtODAgKyA3MCksIGNjLnYzKC02MTEgKyA1MTAsIDM2ICsgMTApLCBjYy52MygtNDE1ICsgNTA5LCAxNyArIDYxKSwgY2MudjMoLTQxNSArIDUwOSwgMTcgLSA2MSldXG5cbiAgICAvLyBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuXG4gICAgLy8gfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG5cbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyAvLyBFbmFibGVkIGRyYXcgY29sbGlkZXJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcblxuICAgICAgICAvLyAvLyBFbmFibGVkIGRyYXcgY29sbGlkZXIgYm91bmRpbmcgYm94XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG4gICAgICAgIHRoaXMuYXJySGVyby5wdXNoKHRoaXMuaGVybylcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMucmVwb25zaXZlKClcbiAgICAgICAgaWYgKHRoaXMuYWRDaGFuZWwgPT0gJ01pbnRlZ3JhbCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NPdW5kLCB0cnVlLCAwLjQpXG4gICAgICAgIHRoaXMuaXNNYWluID0gdGhpcy5oZXJvQ29tcDtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGVyb0NvbXAgPSB0aGlzLmhlcm8uZ2V0Q29tcG9uZW50KEgpO1xuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkuZGVsYXkoMS4yKS50bygwLjUsIHsgcG9zaXRpb246IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQoY2MudjMoNTAsIDUwKSkgfSkuZGVsYXkoMC4zKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3VpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuSm95U3RpY2suYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMi5ub2RlKS5kZWxheSgxLjIpLnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5oZXJvLnBvc2l0aW9uLmFkZChjYy52Myg1MCwgNTApKSB9KS5kZWxheSgwLjMpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ndWlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2VcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH1cbiAgICBzaG93UnVvbmcoKSB7IH1cbiAgICBpc1BoYXNlMiA9IGZhbHNlO1xuICAgIHBoYXNlMigpIHtcbiAgICAgICAgdGhpcy5vZmZKb3lTdGljaygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tcIilcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcbiAgICAgICAgdGhpcy5ib3NzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEVuZW15Mi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RFbmVteS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5hcnJIZXJvKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZnggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ4dGVsZSlcbiAgICAgICAgICAgICAgICBmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgICAgICAgICBmeC5wb3NpdGlvbiA9IGNoaWxkLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5vcGFjaXR5ID0gMFxuICAgICAgICAgICAgICAgIH0sIDAuMylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nbykuYnkoMC4yLCB7IG9wYWNpdHk6IC0yNTUsIHBvc2l0aW9uOiBjYy52MygwLCAtMTAwKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVuY3kpLmJ5KDAuMiwgeyBvcGFjaXR5OiAtMjU1LCBwb3NpdGlvbjogY2MudjMoMCwgLTEwMCkgfSkuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbih0aGlzLmNpcmNsZSkudG8oMC4zLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTWFnID0gMTAwO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC43LCB7IHBvc2l0aW9uOiBjYy52MygxMDUwICsgNTAgKyB0aGlzLmlzTWFnLCA5MDAgKyA1MCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyLm5vZGUpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjMoMTA1MCArIDUwICsgdGhpcy5pc01hZywgOTAwICsgNTApIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhKS5ieSgwLjcsIHsgem9vbVJhdGlvOiAtMC4yNSB9KS5zdGFydCgpXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEyKS5ieSgwLjcsIHsgem9vbVJhdGlvOiAtMC4yNSB9KS5zdGFydCgpXG4gICAgICAgICAgICAvLyB0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKDUwICsgdGhpcy5pc01hZywgNTApXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9vZEJhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyby5wb3NpdGlvbiA9IGNjLnYzKDEwNTAsIDkwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaG91c2UxLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZS5vcGFjaXR5ID0gMjU1XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYXJySGVybykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5meFh1YXRIaWVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4LnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4LnBvc2l0aW9uID0gY2hpbGQucG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLm9wYWNpdHkgPSAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSm95U3RpY2soKVxuXG4gICAgICAgICAgICAgICAgfSwgMC4yKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BoYXNlMiA9IHRydWVcbiAgICAgICAgICAgIH0sIDAuNylcbiAgICAgICAgfSwgMC4zKVxuXG4gICAgfVxuICAgIG9uQm9zcygpIHtcbiAgICAgICAgdGhpcy5ib3NzLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9zcy5nZXRDaGlsZEJ5TmFtZShcInJhbmdlXCIpLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHNwYXdFbmVteTEoKSB7XG4gICAgICAgIHRoaXMuc3Bhd0VuZW1pZXMoMjApXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Bhd0VuZW1pZXMoMzApXG4gICAgICAgIH0sIDIpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Bhd0VuZW1pZXMoMzApXG4gICAgICAgIH0sIDQpXG5cbiAgICB9XG4gICAgc3Bhd0VuZW1pZXModmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIC00MDApICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDAwKTtcbiAgICAgICAgICAgIGxldCBwb3NZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogLTU1MCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1NTApO1xuICAgICAgICAgICAgbGV0IHBhcmFtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgICAgICAgICAgbGV0IHBvcyA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT0gMCkgcG9zID0gdGhpcy5oZXJvLnBvc2l0aW9uLmFkZChjYy52Myhwb3NYICsgaSAqIDIwLCAoKHBhcmFtICUgMiA9PSAwKSA/IC01NTAgLSBpICogMTAgOiA1NTAgKyBpICogMTApKSk7XG4gICAgICAgICAgICBlbHNlIHBvcyA9IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQoY2MudjMoKHBhcmFtICUgMiA9PSAwKSA/IC00MDAgLSBpICogMTAgOiA0MDAgKyBpICogMTAsIHBvc1kgKyBpICogMjApKTtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHRoaXMuY3JlYXRlRW5lbXkoJ2VuZW15MScsIHBvcyk7XG4gICAgICAgICAgICBlbmVteS5nZXRDb21wb25lbnQoJ2VuZW15JykuZnJlZXplID0gZmFsc2VcbiAgICAgICAgICAgIGVuZW15LmdldENvbXBvbmVudCgnZW5lbXknKS5ydW4oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNyZWF0ZUVuZW15KG5hbWUsIHBvcykge1xuICAgICAgICBsZXQgZW5lbXkgPSBudWxsO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuXG4gICAgICAgIGlmIChyZCA9PSAwKSB7XG4gICAgICAgICAgICBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRW5lbWllcylcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVuZW1pZXMyKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgJ2VuZW15MSc6XG4gICAgICAgIC8vICAgICAgICAgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVuZW1pZXMpXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmxpc3RFbmVteS5hZGRDaGlsZChlbmVteSk7XG4gICAgICAgIGVuZW15LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIC8vIGVuZW15LnNjYWxlWCA9IGVuZW15LnNjYWxlWCAqICgoZW5lbXkueCA8IDApID8gMSA6IC0xKTtcbiAgICAgICAgcmV0dXJuIGVuZW15O1xuICAgIH1cblxuICAgIHVwZGF0ZUhvdXNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMub2ZmSm95U3RpY2soKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRwdXQsIGZhbHNlLCAxKVxuICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKTtcbiAgICAgICAgICAgICAgICB3b29kLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSB0aGlzLmhlcm8ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgd29vZC5zY2FsZSA9IDAuNVxuICAgICAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKHdvb2QueCwgd29vZC55KTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zRW5kID0gdGhpcy5ob3VzZTEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmhvdXNlMS5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICBwb3NFbmQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zRW5kKTtcbiAgICAgICAgICAgICAgICAvLyBwb3NFbmQ9Y2MudjIocG9zRW5kLngscG9zRW5kLnkpXG4gICAgICAgICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChzdGFydFBvcy54ICsgcG9zRW5kLngpIC8gMiwgKHN0YXJ0UG9zLnkgKyBwb3NFbmQueSkgLyAyICsgNDAwKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS5iZXppZXJUbygwLjUsIHN0YXJ0UG9zLCBtaWRQb3MsIGNjLnYyKHBvc0VuZC54LCBwb3NFbmQueSArIDIwMCkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3b29kLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KFwiaG91c2VcIikuaXNVcGRhdGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZ2xvYmFsVGhpcy53b29kLS1cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGdsb2JhbFRoaXMuZ29sZCAtPSA0XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoXCJob3VzZVwiKS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMud29vZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCAtPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCAtPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoXCJob3VzZVwiKS51cGRhdGVWYWx1ZSgpXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IHZhbHVlIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kLCBmYWxzZSwgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkpveVN0aWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2UxLmdldENvbXBvbmVudChcImhvdXNlXCIpLnVwZGF0ZUhvdXNlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih3b29kKS50bygwLjUsIHsgc2NhbGU6IDAuNyB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCBpICogMC4wNSlcblxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUhvdXNlMih2YWx1ZSkge1xuICAgICAgICB0aGlzLm9mZkpveVN0aWNrKClcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kcHV0LCBmYWxzZSwgMSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgd29vZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTWVhdCk7XG4gICAgICAgICAgICAgICAgd29vZC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgICAgICAgICB3b29kLnBvc2l0aW9uID0gdGhpcy5oZXJvLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHdvb2Quc2NhbGUgPSAwLjVcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBjYy52Mih3b29kLngsIHdvb2QueSk7XG4gICAgICAgICAgICAgICAgbGV0IHBvc0VuZCA9IHRoaXMuaG91c2UxLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ob3VzZTEucG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcG9zRW5kID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc0VuZCk7XG4gICAgICAgICAgICAgICAgLy8gcG9zRW5kPWNjLnYyKHBvc0VuZC54LHBvc0VuZC55KVxuICAgICAgICAgICAgICAgIGxldCBtaWRQb3MgPSBjYy52Migoc3RhcnRQb3MueCArIHBvc0VuZC54KSAvIDIsIChzdGFydFBvcy55ICsgcG9zRW5kLnkpIC8gMiArIDQwMCk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4od29vZCkuYmV6aWVyVG8oMC41LCBzdGFydFBvcywgbWlkUG9zLCBjYy52Mihwb3NFbmQueCwgcG9zRW5kLnkgKyAyMDApKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd29vZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmhvdXNlMS5nZXRDb21wb25lbnQoXCJob3VzZVwiKS5pc1VwZGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5nb2xkIC09IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KFwiaG91c2VcIikudXBkYXRlVmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB2YWx1ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Kb3lTdGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmQsIGZhbHNlLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZTEuZ2V0Q29tcG9uZW50KFwiaG91c2VcIikudXBkYXRlSG91c2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHdvb2QpLnRvKDAuNSwgeyBzY2FsZTogMC43IH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIGkgKiAwLjA1KVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIZXJvKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBIZXJvXCIpXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnRIZXJvID4gMykgcmV0dXJuO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDYXJkLCBmYWxzZSwgMC44KVxuICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RoaXMuaXNDb3VudEhlcm9dLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2ZmSm95U3RpY2soKVxuICAgICAgICAvLyBsZXQgcG9zID0gdGhpcy5saXN0QXJyUG9zW3RoaXMuaXNDb3VudEhlcm9dXG4gICAgICAgIC8vIHRoaXMuaXNDb3VudEhlcm8rK1xuICAgICAgICAvLyBsZXQgaGVybyA9IG51bGw7XG4gICAgICAgIC8vIHN3aXRjaCAodGhpcy5pc0NvdW50SGVybykge1xuICAgICAgICAvLyAgICAgY2FzZSAxOlxuICAgICAgICAvLyAgICAgICAgIGhlcm8gPSB0aGlzLmx1Y2lhO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSAyOlxuICAgICAgICAvLyAgICAgICAgIGhlcm8gPSB0aGlzLmthemV0c3U7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIDM6XG4gICAgICAgIC8vICAgICAgICAgaGVybyA9IHRoaXMuYXJ0aHVyO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuYXJySGVyby5wdXNoKGhlcm8pO1xuICAgICAgICAvLyBoZXJvLmdldENvbXBvbmVudChcImhlcm9cIikubG9jYWxQb3MgPSBwb3M7XG4gICAgICAgIC8vIGhlcm8ucG9zaXRpb24gPSB0aGlzLmhlcm8ucG9zaXRpb24uYWRkKHBvcyk7XG4gICAgICAgIC8vIGhlcm8uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgYnRuX0NsYWltKGV2ZW50LCB2YWx1ZSkge1xuICAgICAgICAvLyBsZXQgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnQucGFyZW50XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENvbWZpcm0sIGZhbHNlLCAwLjgpXG4gICAgICAgIC8vIHRoaXMuaXNTY2FsZSA9IHRydWVcbiAgICAgICAgLy8gY2MudHdlZW4oYnRuKS50bygwLjMsIHsgc2NhbGU6IDAgfSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5pc1NjYWxlID0gZmFsc2VcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubGlzdEFyclBvc1t0aGlzLmlzQ291bnRIZXJvXVxuICAgICAgICB0aGlzLmlzQ291bnRIZXJvKytcbiAgICAgICAgbGV0IGhlcm8gPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgIGhlcm8gPSB0aGlzLmx1Y2lhO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waGFzZTIoKVxuXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBoZXJvID0gdGhpcy5rYXpldHN1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICBoZXJvID0gdGhpcy5tZWNoYW1hbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgaGVybyA9IHRoaXMuYXJ0aHVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGhlcm8gPSB0aGlzLm1ha287XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJIZXJvLnB1c2goaGVybyk7XG4gICAgICAgIGhlcm8uZ2V0Q29tcG9uZW50KFwiaGVyb1wiKS5sb2NhbFBvcyA9IHBvcztcbiAgICAgICAgaGVyby5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQocG9zKTtcbiAgICAgICAgaGVyby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uSm95U3RpY2soKTtcbiAgICAgICAgbGV0IHZhbCA9IDAuMTJcbiAgICAgICAgaWYgKHRoaXMuaXNVZGNpcmNsZSAhPSAwKSB7XG4gICAgICAgICAgICB2YWwgPSAwLjAyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwYXdFbmVteTEoKVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnNwYXdFbmVtaWVzKDMwKVxuXG4gICAgICAgIC8vIHRoICh0aGlzLmlzVWRjaXJjbGUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgMTpcbiAgICAgICAgLy8gICAgICAgICB2YWw9MFxuXG4gICAgICAgIHRoaXMuaXNVZGNpcmNsZSsrXG4gICAgICAgIHRoaXMuaG91c2UxLmdldENvbXBvbmVudChcImhvdXNlXCIpLmlzTW92aW5nID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJ1ZFwiKVxuICAgICAgICAvLyB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2lyY2xlKS5ieSgwLjIsIHsgc2NhbGU6IHZhbCB9KS5zdGFydCgpXG4gICAgICAgIC8vIH0pLnN0YXJ0KClcblxuICAgIH1cbiAgICBpc1VkY2lyY2xlID0gMFxuICAgIGNsaWNrQ2hlc3QodmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIC8vIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5vZmZKb3lTdGljaygpXG4gICAgICAgIHRoaXMudHJhbnNDb2luKHZhbHVlKVxuICAgICAgICAvLyBicmVhaztcblxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHRyYW5zQ29pbih2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zY29pblwiKVxuICAgICAgICBsZXQgY2hlc3QgPSB0aGlzLmxpc3RDaGVzdC5jaGlsZHJlblt2YWx1ZSAtIDFdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2VtLCBmYWxzZSwgMC41KVxuICAgICAgICAgICAgICAgIGxldCByZXdhcmROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcbiAgICAgICAgICAgICAgICByZXdhcmROb2RlLnBvc2l0aW9uID0gdGhpcy5oZXJvLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHJld2FyZE5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuc2NhbGUgPSAwXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2MudjIodGhpcy5oZXJvLngsIHRoaXMuaGVyby55KTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIoY2hlc3QueCwgY2hlc3QueSlcbiAgICAgICAgICAgICAgICBsZXQgbWlkUG9zID0gY2MudjIoKHN0YXJ0UG9zLnggKyBlbmRQb3MueCkgLyAyLCAoc3RhcnRQb3MueSArIGVuZFBvcy55KSAvIDIgKyA0MDApXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocmV3YXJkTm9kZSkudG8oMC4zLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2VlbihyZXdhcmROb2RlKS5iZXppZXJUbygwLjMsIHN0YXJ0UG9zLCBtaWRQb3MsIGVuZFBvcykuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhlcm8oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIDAuMTIgKiBpKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2tMb2NrKHZhbHVlKSB7XG5cbiAgICAvLyB9XG5cbiAgICBvZmZKb3lTdGljaygpIHtcbiAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLkpveVN0aWNrLmdldENvbXBvbmVudChcIkpveVN0aWNrXCIpLnRvdWNoRW5kRXZlbnQoKVxuICAgIH1cblxuXG4gICAgb25Kb3lTdGljaygpIHtcbiAgICAgICAgdGhpcy5Kb3lTdGljay5hY3RpdmUgPSB0cnVlXG4gICAgfVxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5oZXJvLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2lyY2xlLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgY291bnREaWUocG9zKSB7XG4gICAgICAgIHRoaXMuaXNDb3VudEVuZW1pZXNEaWUrK1xuICAgICAgICB0aGlzLmNyZWF0ZUNvaW4ocG9zKVxuICAgICAgICBsZXQgcHJlRGllID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVFbmVteURpZSk7XG4gICAgICAgIHByZURpZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHByZURpZS5wb3NpdGlvbiA9IHBvcztcblxuXG4gICAgfVxuXG4gICAgY3JlYXRlQ29pbihwb3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXdhcmROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVDb2luKTtcbiAgICAgICAgICAgIGxldCBub2RlU2NhbGUgPSByZXdhcmROb2RlLnNjYWxlO1xuICAgICAgICAgICAgcmV3YXJkTm9kZS5zY2FsZSA9IDBcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubGlzdEVuZW15LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmhlcm8uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICAgICAgcmV3YXJkTm9kZS5wYXJlbnQgPSB0aGlzLmhlcm87XG4gICAgICAgICAgICBjYy50d2VlbihyZXdhcmROb2RlKS5kZWxheSgwLjE1ICogaSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kR2VtLCBmYWxzZSwgMC41KVxuXG4gICAgICAgICAgICB9KS5zZXQoeyBhY3RpdmU6IHRydWUsIHNjYWxlOiAwLCBwb3NpdGlvbjogcG9zIH0pLnRvKDAuMSwgeyBzY2FsZTogMC41IH0pXG5cbiAgICAgICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygwLCA1MCkgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZ29sZCArPSA1XG4gICAgICAgICAgICAgICAgICAgIHJld2FyZE5vZGUuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBib251cyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQm9udXMpXG4gICAgICAgICAgICAgICAgICAgIGJvbnVzLnBhcmVudCA9IHRoaXMuaGVybztcbiAgICAgICAgICAgICAgICAgICAgYm9udXMucG9zaXRpb24gPSBjYy52MygwLCA1MClcblxuICAgICAgICAgICAgICAgICAgICBib251cy5zY2FsZVggPSAodGhpcy5oZXJvLnNjYWxlWCA+IDApID8gMSA6IC0xXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0NvdW50VW5sb2NrID0gMFxuICAgIGlzQ291bnRIZXJvRGllID0gMFxuICAgIGNvdW50SGVyb0RpZSgpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50SGVyb0RpZSsrO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQ291bnRIZXJvRGllID09IDQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMub25FbmRHYW1lKClcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG1vdmVIZXJvVG9Cb3NzKCkge1xuICAgICAgICB0aGlzLmhlcm9Db21wLm1vdmVCeVBvcyhjYy52Myg4MCwgNTApLCAwLjMpXG4gICAgICAgIHRoaXMua2F6ZXRzdS5nZXRDb21wb25lbnQoSCkubW92ZUJ5UG9zKGNjLnYzKDQwMCwgNTApLCAwLjMpXG4gICAgICAgIC8vIHRoaXMuZ29rdS5nZXRDb21wb25lbnQoSCkubW92ZUJ5UG9zKGNjLnYzKDEwMCwgNTApLCAwLjMpXG4gICAgICAgIC8vIHRoaXMubWFrby5nZXRDb21wb25lbnQoSCkubW92ZUJ5UG9zKGNjLnYzKDUwLCAyMCksIDAuMSlcblxuICAgIH1cbiAgICAvLyB0b3VjaEVuZEV2ZW50KGV2ZW50KSB7XG4gICAgLy8gICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgIC8vICAgICAvLyBwb3M9dGhpcy5zY2VuZTEuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcylcbiAgICAvLyAgICAgcG9zID0gdGhpcy5ib3NzLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgIHBvcyA9IHBvcy5hZGQodGhpcy5tYWluQ2FtZXJhLm5vZGUucG9zaXRpb24pXG4gICAgLy8gICAgIGxldCBwb3NCb3NzID0gdGhpcy5ib3NzLnBvc2l0aW9uLmFkZChjYy52MygwLCA4MCkpXG4gICAgLy8gICAgIGlmICh0aGlzLmJvc3MucG9zaXRpb24uc3ViKHBvcykubWFnKCkgPD0gMzAwKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImF0ayBib3NzXCIpO1xuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5ib3NzLmNoaWxkcmVuWzBdKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5pc0ZpcnN0ID09IGZhbHNlKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ib3NzLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIC8vICAgICAgICAgICAgIH0sIDEpXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5tb3ZlSGVyb1RvQm9zcygpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZURhbWFnZUJvc3MocG9zKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyB9XG4gICAgc3Bhd0VuZW5teSgpIHtcbiAgICAgICAgLy8gdGhpcy5saXN0SWNvbkhlcm9bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5saXN0SWNvbkhlcm9bMl0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkVuZEdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5kR2FtZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IHRydWU7XG4gICAgICAgIC8vIGxldCBjaGVzdCA9IHRoaXMubGlzdENoZXN0LmNoaWxkcmVuWzFdXG4gICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vZmZKb3lTdGljaygpXG4gICAgICAgIC8vIHRoaXMuYm94SWNvbi5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEpLmJ5KDAuNSwgeyB6b29tUmF0aW86IC0wLjMgfSkuc3RhcnQoKVxuICAgICAgICAvLyB0aGlzLmhlcm8ucG9zaXRpb24gPSBjYy52MygxMDQ1LCAtMjA5KVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubGlzdEFyclBvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgdGhpcy5oZXJvLnBhcmVudC5jaGlsZHJlbltpXS5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5saXN0QXJyUG9zW2kgLSAxXSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEdlbSwgZmFsc2UsIDAuNSlcbiAgICAgICAgLy8gICAgICAgICBsZXQgcmV3YXJkTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQ29pbik7XG4gICAgICAgIC8vICAgICAgICAgcmV3YXJkTm9kZS5wb3NpdGlvbiA9IHRoaXMuaGVyby5wb3NpdGlvbjtcbiAgICAgICAgLy8gICAgICAgICByZXdhcmROb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgLy8gICAgICAgICByZXdhcmROb2RlLnNjYWxlID0gMFxuICAgICAgICAvLyAgICAgICAgIGxldCBzdGFydFBvcyA9IGNjLnYyKHRoaXMuaGVyby54LCB0aGlzLmhlcm8ueSk7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKGNoZXN0LngsIGNoZXN0LnkpXG4gICAgICAgIC8vICAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKChzdGFydFBvcy54ICsgZW5kUG9zLngpIC8gMiwgKHN0YXJ0UG9zLnkgKyBlbmRQb3MueSkgLyAyICsgNDAwKVxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHJld2FyZE5vZGUpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4ocmV3YXJkTm9kZSkuYmV6aWVyVG8oMC4zLCBzdGFydFBvcywgbWlkUG9zLCBlbmRQb3MpLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICByZXdhcmROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGkgPT0gNykge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRIZXJvKCk7XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBjaGVzdHMgPSBjaGVzdC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImNoZXN0XCIpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjaGVzdC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjaGVzdC5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImN1cnJlbnRjeVwiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2hlc3QuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJiYW5nXCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjaGVzdHMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZVdpdGhCdWlsdGluKCcyZC1ncmF5LXNwcml0ZScsIGNoZXN0cy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpbmtUb1N0b3JlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIC8vICAgICB9LCAwLjEyICogaSlcblxuICAgICAgICAvLyB9XG5cblxuXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEVuZCwgZmFsc2UsIDEpXG4gICAgICAgIC8vIHRoaXMuZW5kR2FtZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBjcmVhdGVNZWF0KHBvcykge1xuICAgICAgICBsZXQgbWVhdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlTWVhdCk7XG4gICAgICAgIG1lYXQucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIG1lYXQucG9zaXRpb24gPSBwb3M7XG4gICAgICAgIG1lYXQuc2NhbGUgPSAwLjhcbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlKHBvcykge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzU291bmQgPSB0cnVlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmVteURpZSwgZmFsc2UsIDEpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gZmFsc2VcblxuICAgICAgICAgICAgfSwgMC4xNSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSAtIDEwMFxuICAgICAgICBsZXQgcmR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSArIDgwXG4gICAgICAgIGxldCBkYW1hZ2VmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRnhBdGspO1xuICAgICAgICBkYW1hZ2VmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlZngucG9zaXRpb24gPSBwb3MuYWRkKGNjLnYzKDAsIDApKTs7XG4gICAgICAgIGRhbWFnZWZ4LnNjYWxlID0gMVxuICAgICAgICBsZXQgZGFtYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVEYW1hZ2UpO1xuICAgICAgICBkYW1hZ2UucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIGRhbWFnZS5wb3NpdGlvbiA9IHBvcy5hZGQoY2MudjMoMCwgMCkpO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAxLjVcbiAgICAgICAgZGFtYWdlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVhcbiAgICAgICAgbGV0IHZhbHVlRGFtYWdlID0gcmQgKyAxMDAwXG4gICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDMjM2RERcIilcblxuICAgICAgICBpZiAodmFsdWVEYW1hZ2UgPiAxMjAwKSB7XG4gICAgICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzIzNkREXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlRGFtYWdlID4gMTUwMCkge1xuICAgICAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0M1MzUyOFwiKVxuICAgICAgICB9XG4gICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyB2YWx1ZURhbWFnZS50b1N0cmluZygpXG5cbiAgICB9XG4gICAgY3JlYXRlRGFtYWdlQm9zcyhwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pc1NvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5lbXlEaWUsIGZhbHNlLCAxKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTb3VuZCA9IGZhbHNlXG5cbiAgICAgICAgICAgIH0sIDAuMTUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMCkgLSAxMDBcbiAgICAgICAgbGV0IHJkeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyA4MFxuICAgICAgICBsZXQgZGFtYWdlZnggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUZ4QXRrKTtcbiAgICAgICAgZGFtYWdlZngucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIGRhbWFnZWZ4LnBvc2l0aW9uID0gcG9zLmFkZChjYy52MyhyZHgsIHJkeSArIDEwMCkpOztcbiAgICAgICAgZGFtYWdlZnguc2NhbGUgPSAxXG4gICAgICAgIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSk7XG4gICAgICAgIGRhbWFnZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgZGFtYWdlLnBvc2l0aW9uID0gcG9zLmFkZChjYy52MyhyZHgsIHJkeSArIDEwMCkpO1xuICAgICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuICAgICAgICBkYW1hZ2Uuc2NhbGUgPSAyXG4gICAgICAgIGRhbWFnZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYXG4gICAgICAgIGxldCB2YWx1ZURhbWFnZSA9IHJkICsgMTAwMFxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzIzNkREXCIpXG5cbiAgICAgICAgaWYgKHZhbHVlRGFtYWdlID4gMTIwMCkge1xuICAgICAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0MyMzZERFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZURhbWFnZSA+IDE1MDApIHtcbiAgICAgICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDNTM1MjhcIilcbiAgICAgICAgfVxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgdmFsdWVEYW1hZ2UudG9TdHJpbmcoKVxuXG4gICAgfVxuICAgIGJvc3NEaWUocG9zKSB7XG4gICAgICAgIHRoaXMub2ZmSm95U3RpY2soKVxuICAgICAgICB0aGlzLmNoZXN0LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcmVEaWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVuZW15RGllKTtcbiAgICAgICAgICAgIHByZURpZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBwcmVEaWUucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICBwcmVEaWUuc2NhbGUgPSA0O1xuICAgICAgICAgICAgdGhpcy5saW5rVG9TdG9yZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGVzdC5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSwgMC4zKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm1haW5DYW1lcmEubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygxMzYwLCAxMjAwKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYTIubm9kZSkudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MygxMzYwLCAxMjAwKSB9KS5zdGFydCgpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubWFpbkNhbWVyYSkuYnkoMC40LCB7IHpvb21SYXRpbzogMC44IH0pLnN0YXJ0KClcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhMikuYnkoMC40LCB7IHpvb21SYXRpbzogMC44IH0pLnN0YXJ0KClcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmJsb29kQmFyKS5ieSgwLjMsIHsgb3BhY2l0eTogLTI1NSwgcG9zaXRpb246IGNjLnYzKDAsIDgwKSB9KS5jYWxsKCgpID0+IHsgdGhpcy5ibG9vZEJhci5hY3RpdmUgPSBmYWxzZSB9KS5zdGFydCgpXG4gICAgfVxuICAgIHJlcG9uc2l2ZSgpIHtcbiAgICAgICAgLy8gbGV0IGNhbnZhcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgLy8gaWYgKGNjLndpblNpemUud2lkdGggPCBjYy53aW5TaXplLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDFcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVuZEdhbWVOb2RlLnNjYWxlID0gMVxuICAgICAgICAvLyAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC45XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzdmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLmNvaW5CYXIuc2NhbGUgPSAxLjNcbiAgICAgICAgLy8gICAgIHRoaXMuZW5kR2FtZU5vZGUucG9zaXRpb24gPSBjYy52MygwLCAtMTAwKVxuICAgICAgICAvLyAgICAgdGhpcy5lbmRHYW1lTm9kZS5zY2FsZSA9IDEuMlxuICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGlzU2NhbGUgPSAxXG4gICAgaXNNYWcgPSAwXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuaGVyby5wb3NpdGlvbi5hZGQoY2MudjMoNTAgKyB0aGlzLmlzTWFnLCA1MCkpKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYTIubm9kZS5zZXRQb3NpdGlvbih0aGlzLmhlcm8ucG9zaXRpb24uYWRkKGNjLnYzKDUwICsgdGhpcy5pc01hZywgNTApKSk7XG5cbiAgICAgICAgICAgIC8vIGlmICghdGhpcy5pc0VuZEdhbWUpIHtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgZGV2aWNlUmVzb2x1dGlvbiA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGxldCBjaGVjazIgPSAoZGV2aWNlUmVzb2x1dGlvbi53aWR0aCAvIDY0MClcbiAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24ud2lkdGggPCBkZXZpY2VSZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzdmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNjLndpblNpemUuaGVpZ2h0IC8gY2Mud2luU2l6ZS53aWR0aCA8IDEuMzUpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDE7XG4gICAgICAgICAgICB0aGlzLmlzU2NhbGUgPSAxXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLnBvc2l0aW9uID0gY2MudjMoMCwgMClcbiAgICAgICAgICAgIHRoaXMubG9nby5zY2FsZSA9IDAuOVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dvLnBvc2l0aW9uPWNjLnYzKC0yMDAsNDE5KmNoZWNrLTUwKVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAxMTBcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdENhcmQuc2NhbGUgPSAxXG4gICAgICAgICAgICB0aGlzLmN1cnJlbmN5LnNjYWxlID0gMVxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW5jeS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDgzXG4gICAgICAgICAgICB0aGlzLmxvZ28ucG9zaXRpb24gPSBjYy52MygtMjAwLCA1MDApXG4gICAgICAgICAgICB0aGlzLmN1cnJlbmN5LnBvc2l0aW9uID0gY2MudjMoMjM2LCA1NTApXG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGRldmljZVJlc29sdXRpb24uaGVpZ2h0IC8gZGV2aWNlUmVzb2x1dGlvbi53aWR0aCA8IDEuMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ28ucG9zaXRpb24gPSBjYy52MygtMjAwLCA0MTkpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeS5wb3NpdGlvbiA9IGNjLnYzKDIzNiwgNDc0KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW5jeS5zY2FsZSA9IDEuM1xuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW5jeS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5yaWdodCA9IDEyMFxuICAgICAgICAgICAgdGhpcy5pc1NjYWxlID0gMS4zXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLnNjYWxlID0gMS4zXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RDYXJkLnBvc2l0aW9uID0gY2MudjMoMCwgLTcwKVxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDEuM1xuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9nby5zY2FsZSA9IDEuMlxuICAgICAgICAgICAgLy8gdGhpcy5sb2dvLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAyMDBcbiAgICAgICAgICAgIHRoaXMubG9nby5wb3NpdGlvbiA9IGNjLnYzKC01MDAgKyA1MCwgNDE5KVxuICAgICAgICAgICAgdGhpcy5jdXJyZW5jeS5wb3NpdGlvbiA9IGNjLnYzKDUwMCwgNDc0KVxuXG4gICAgICAgICAgICAvLyB0aGlzLmxvZ28uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaD0zMDBcblxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '934d3QUS1hFOIjCPakyv9Vg', 'Constant');
// script/Constant.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = exports.ELEMENT = void 0;
exports.ELEMENT = {
    ABYSS: "abyss",
    DARK: "dark",
    FIRE: "fire",
    LIGHT: "light",
    NATURE: "nature",
    WATER: "water",
};
exports.Constant = {
    EVENT: {
        ENEMY_DIE: "ENEMY_DIE",
        END_GAME: "END_GAME",
        CHANGE_SPEED: "CHANGE_SPEED",
        SPAWN_ENEMY: "SPAWN_ENEMY",
        COUNT_GEM: "COUNT_GEM"
    },
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLE9BQU8sR0FBRztJQUNuQixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFDVyxRQUFBLFFBQVEsR0FBRztJQUNwQixLQUFLLEVBQUU7UUFDSCxTQUFTLEVBQUMsV0FBVztRQUNyQixRQUFRLEVBQUMsVUFBVTtRQUNuQixZQUFZLEVBQUMsY0FBYztRQUMzQixXQUFXLEVBQUMsYUFBYTtRQUN6QixTQUFTLEVBQUMsV0FBVztLQUN4QjtDQUNKLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRUxFTUVOVCA9IHtcbiAgICBBQllTUzogXCJhYnlzc1wiLFxuICAgIERBUks6IFwiZGFya1wiLFxuICAgIEZJUkU6IFwiZmlyZVwiLFxuICAgIExJR0hUOiBcImxpZ2h0XCIsXG4gICAgTkFUVVJFOiBcIm5hdHVyZVwiLFxuICAgIFdBVEVSOiBcIndhdGVyXCIsXG59O1xuZXhwb3J0IGNvbnN0IENvbnN0YW50ID0ge1xuICAgIEVWRU5UOiB7XG4gICAgICAgIEVORU1ZX0RJRTpcIkVORU1ZX0RJRVwiLFxuICAgICAgICBFTkRfR0FNRTpcIkVORF9HQU1FXCIsXG4gICAgICAgIENIQU5HRV9TUEVFRDpcIkNIQU5HRV9TUEVFRFwiLFxuICAgICAgICBTUEFXTl9FTkVNWTpcIlNQQVdOX0VORU1ZXCIsXG4gICAgICAgIENPVU5UX0dFTTpcIkNPVU5UX0dFTVwiXG4gICAgfSxcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d515YP+RtP2KXVOZDa0utO', 'AdManager');
// script/common/AdManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    androidLink: {
      "default": ''
    },
    iosLink: {
      "default": ''
    },
    defaultLink: {
      "default": ''
    }
  },
  openAdUrl: function openAdUrl() {
    //google instant
    // cc.androidInstant.showInstallPrompt('https://play.google.com/store/apps/details?id=com.game.space.shooter2')
    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink;
    var adchanel = '{{__adv_channels_adapter__}}';

    if (window.openAdUrl) {
      console.log(adchanel);
      window.openAdUrl(adchanel);
    } else {
      window.open();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEFkTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFuZHJvaWRMaW5rIiwiaW9zTGluayIsImRlZmF1bHRMaW5rIiwib3BlbkFkVXJsIiwiY2xpY2tUYWciLCJ3aW5kb3ciLCJhZGNoYW5lbCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQSxLQURMO0FBSVJDLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTO0FBREosS0FKRDtBQU9SQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUztBQURBO0FBUEwsR0FIUDtBQWVMQyxFQUFBQSxTQUFTLEVBQUUscUJBQVU7QUFDakI7QUFDQTtBQUNBLFFBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0wsV0FBUCxHQUFxQixLQUFLQSxXQUExQjtBQUNBSyxJQUFBQSxNQUFNLENBQUNKLE9BQVAsR0FBaUIsS0FBS0EsT0FBdEI7QUFDQUksSUFBQUEsTUFBTSxDQUFDSCxXQUFQLEdBQXFCLEtBQUtBLFdBQTFCO0FBQ0EsUUFBSUksUUFBUSxHQUFHLDhCQUFmOztBQUNBLFFBQUdELE1BQU0sQ0FBQ0YsU0FBVixFQUFxQjtBQUNqQkksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQUQsTUFBQUEsTUFBTSxDQUFDRixTQUFQLENBQWlCRyxRQUFqQjtBQUVILEtBSkQsTUFJTztBQUNIRCxNQUFBQSxNQUFNLENBQUNJLElBQVA7QUFDSDtBQUNKO0FBOUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFuZHJvaWRMaW5rOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpb3NMaW5rOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0TGluazoge1xuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvcGVuQWRVcmw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vZ29vZ2xlIGluc3RhbnRcbiAgICAgICAgLy8gY2MuYW5kcm9pZEluc3RhbnQuc2hvd0luc3RhbGxQcm9tcHQoJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZ2FtZS5zcGFjZS5zaG9vdGVyMicpXG4gICAgICAgIHZhciBjbGlja1RhZyA9ICcnO1xuICAgICAgICB3aW5kb3cuYW5kcm9pZExpbmsgPSB0aGlzLmFuZHJvaWRMaW5rO1xuICAgICAgICB3aW5kb3cuaW9zTGluayA9IHRoaXMuaW9zTGluaztcbiAgICAgICAgd2luZG93LmRlZmF1bHRMaW5rID0gdGhpcy5kZWZhdWx0TGluaztcbiAgICAgICAgbGV0IGFkY2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXG4gICAgICAgIGlmKHdpbmRvdy5vcGVuQWRVcmwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkY2hhbmVsKTtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQWRVcmwoYWRjaGFuZWwpO1xuICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/chimera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c3f3lDTO9Cd7QfUiTKBrTr', 'chimera');
// script/enemy/chimera.ts

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
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skill2Node = null;
        _this.skill1Node = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.thunderPre = null;
        _this.soundThunder = null;
        _this.soundSkill1 = null;
        _this.soundSkill2 = null;
        _this.isCountDowskill = false;
        _this.isAtk = false;
        return _this;
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        if (this.isAtk)
            return;
        this.isAtk = true;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.atkList();
    };
    NewClass.prototype.atkList = function () {
        this.countAtk++;
        switch (this.countAtk) {
            case 1:
                cc.audioEngine.play(this.atkSOund, false, 1);
                this.anim.play("atk");
                break;
            case 2:
                this.skill1();
                break;
            case 3:
                this.skill2();
                this.countAtk = 0;
                break;
            default:
                // this.countAtk++;
                // this.skill1()
                break;
        }
    };
    NewClass.prototype.skill1 = function () {
        var _this = this;
        if (this.isSkill)
            return;
        this.isSkill = true;
        this.anim.play("skill1");
        cc.audioEngine.play(this.soundSkill1, false, 1);
        this.scheduleOnce(function () {
            var thunder = cc.instantiate(_this.thunderPre);
            thunder.parent = _this.node.parent;
            thunder.position = cc.v3(60, 180);
            cc.audioEngine.play(_this.soundThunder, false, 1);
            // thunder.position=cc.v3(0,0)
        }, 0.7);
    };
    NewClass.prototype.skill2 = function () {
        if (this.isSkill)
            return;
        cc.audioEngine.play(this.soundSkill2, false, 1);
        this.isSkill = true;
        this.anim.play("skill2");
    };
    NewClass.prototype.completeEvent = function (type) {
        this.isSkill = false;
        switch (type) {
            case "skill2":
                this.atkList();
                console.log("skill2");
                break;
            case "skill1":
                this.atkList();
                console.log("skill1");
                break;
            case "atk":
                this.atkList();
                console.log("atk");
                break;
        }
    };
    NewClass.prototype.addEvent = function (type) {
        switch (type) {
            case "skill2":
                this.skill2Node.getComponent(cc.Animation).play();
                break;
            case "skill1":
                this.skill1Node.getComponent(cc.Animation).play();
                break;
        }
    };
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isSkill = false;
            this.isMeet = false;
            this.isAtk = false;
            this.anim.play("idle");
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill2Node", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill1Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "thunderPre", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThunder", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSkill1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSkill2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(enemy_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcY2hpbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrQ0FBNEI7QUFDdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQUs7SUFBM0M7UUFBQSxxRUF5SEM7UUF2SEcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsa0JBQVksR0FBaUIsSUFBSSxDQUFBO1FBRWpDLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFDaEMscUJBQWUsR0FBRyxLQUFLLENBQUE7UUFDdkIsV0FBSyxHQUFHLEtBQUssQ0FBQTs7SUFzR2pCLENBQUM7SUFyR0cseUJBQU0sR0FBTixVQUFPLE1BQU07UUFBYixpQkFTQztRQVJHLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xC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SHFDLGVBQUssR0F5SDFDO2tCQXpIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGVuZW15IGZyb20gXCIuLi9lbmVteVwiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBlbmVteSB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2tpbGwyTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2tpbGwxTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHRodW5kZXJQcmU6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVGh1bmRlcjogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTa2lsbDE6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kU2tpbGwyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgaXNDb3VudERvd3NraWxsID0gZmFsc2VcbiAgICBpc0F0ayA9IGZhbHNlXG4gICAgYXR0YWNrKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5pc0F0aykgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzQXRrID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzTWVldCA9IHRydWU7XG4gICAgICAgIGxldCB0YXJnZXRDb21wID0gdGFyZ2V0LmdldENvbXBvbmVudCgnaGVybycpO1xuICAgICAgICB0aGlzLmFuaW0uc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICB9LCAwLjMpXG4gICAgICAgIHRoaXMuYXRrTGlzdCgpXG4gICAgfVxuICAgIGF0a0xpc3QoKSB7XG5cbiAgICAgICAgdGhpcy5jb3VudEF0aysrXG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmNvdW50QXRrKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF0a1NPdW5kLGZhbHNlLDEpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsgPSAwXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY291bnRBdGsrKztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBza2lsbDEoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2tpbGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDFcIik7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNraWxsMSxmYWxzZSwxKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGh1bmRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGh1bmRlclByZSlcbiAgICAgICAgICAgIHRodW5kZXIucGFyZW50PXRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgICAgIHRodW5kZXIucG9zaXRpb249Y2MudjMoNjAsMTgwKVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGh1bmRlcixmYWxzZSwxKVxuICAgICAgICAgICAgLy8gdGh1bmRlci5wb3NpdGlvbj1jYy52MygwLDApXG4gICAgICAgIH0sMC43KVxuXG4gICAgfVxuICAgIHNraWxsMigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTa2lsbCkgcmV0dXJuO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTa2lsbDIsZmFsc2UsMSlcblxuICAgICAgICB0aGlzLmlzU2tpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcInNraWxsMlwiKTtcblxuICAgIH1cbiAgICBjb21wbGV0ZUV2ZW50KHR5cGUpIHtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hdGtMaXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJza2lsbDJcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmF0a0xpc3QoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2tpbGwxXCIpXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhdGtcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmF0a0xpc3QoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXRrXCIpXG5cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50KHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDJOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpdFRhcmdldCgpIHtcblxuICAgICAgICBpZiAodGhpcy5hcnJIZXJvLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2tpbGwgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc01lZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNBdGsgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKVxuICAgICAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/dragon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f75feJxmx9PNaQGrE464aVQ', 'dragon');
// script/enemy/dragon.ts

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
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Prefab)
        // atk_around: cc.Prefab = null;
        // @property(cc.Prefab)
        // atk_down: cc.Prefab = null;
        _this.skill2Node = null;
        _this.skill1Pre = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.isCountDowskill = false;
        return _this;
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.skill2();
    };
    NewClass.prototype.atkList = function () {
        var _this = this;
        this.anim.play("atk");
        if (!this.isCountDowskill) {
            this.isCountDowskill = true;
            // cc.audioEngine.play(this.atkSOund, false, 0.8)
            this.scheduleOnce(function () {
                _this.isCountDowskill = false;
            }, 0.2);
        }
        switch (this.countAtk) {
            case 2:
                this.countAtk = 0;
                this.skill1();
                break;
            case 1:
                this.countAtk++;
                this.skill2();
                break;
            default:
                this.countAtk++;
                this.skill1();
                break;
        }
    };
    NewClass.prototype.skill1 = function () {
        var _this = this;
        if (this.isSkill)
            return;
        this.isSkill = true;
        var arrBullet = [cc.v3(-231, -510), cc.v3(-126, -637), cc.v3(-325, -623), cc.v3(-142, -515),
            cc.v3(-428, -579), cc.v3(-314, -530), cc.v3(-217, -601), cc.v3(0, -534), cc.v3(-390, -540), cc.v3(50, -500),
        ];
        var _loop_1 = function (i) {
            var delay = i % 2;
            delay = delay * 0.4;
            this_1.scheduleOnce(function () {
                var bullet = cc.instantiate(_this.skill1Pre);
                bullet.parent = _this.node.parent;
                bullet.position = arrBullet[i].add(cc.v3(0, 100));
                cc.tween(bullet).by(0.5, { position: cc.v3(0, -500) }).call(function () {
                    if (bullet.getChildByName('explode')) {
                        bullet.getComponent(cc.CircleCollider).enabled = false;
                        bullet.stopAllActions();
                        bullet.getChildByName('explode').active = true;
                        // bullet.getChildByName('trail1').active = false;
                        bullet.getChildByName('icon').active = false;
                    }
                }).start();
            }, delay);
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            _this.isSkill = false;
            _this.skill2();
        }, 0.5);
    };
    NewClass.prototype.skill2 = function () {
        if (this.isSkill)
            return;
        this.isSkill = true;
        this.anim.play("skill2");
    };
    NewClass.prototype.completeEvent = function (type) {
        this.isSkill = false;
        switch (type) {
            case "skill2":
                // this.atkList();
                this.skill1();
                break;
            case "skill1":
                // this.atkList()
                this.skill2();
                break;
        }
    };
    NewClass.prototype.addEvent = function (type) {
        switch (type) {
            case "skill2":
                // this.skill2();
                this.skill2Node.getComponent(cc.Animation).play();
                break;
            case "skill1":
                this.skill1();
                break;
        }
    };
    NewClass.prototype.exitTarget = function () {
        this.isSkill = false;
        this.isMeet = false;
        this.anim.play("idle");
        this.anim.unscheduleAllCallbacks();
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill2Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skill1Pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(enemy_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZHJhZ29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBSztJQUEzQztRQUFBLHFFQTZIQztRQTVIRyx1QkFBdUI7UUFDdkIsZ0NBQWdDO1FBQ2hDLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFFOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixxQkFBZSxHQUFHLEtBQUssQ0FBQTs7SUErRzNCLENBQUM7SUE5R0cseUJBQU0sR0FBTixVQUFPLE1BQU07UUFBYixpQkFTQztRQVJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVAsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lB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QUNqRCxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtnQkFDYixNQUFLO1NBQ1o7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEVBQU87SUFFZCxDQUFDO0lBckhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFiYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkg1QjtJQUFELGVBQUM7Q0E3SEQsQUE2SEMsQ0E3SHFDLGVBQUssR0E2SDFDO2tCQTdIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGVuZW15IGZyb20gXCIuLi9lbmVteVwiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBlbmVteSB7XG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICAvLyBhdGtfYXJvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gYXRrX2Rvd246IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2tpbGwyTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBza2lsbDFQcmU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgaXNDb3VudERvd3NraWxsID0gZmFsc2VcbiAgICBhdHRhY2sodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaXNNZWV0ID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRhcmdldENvbXAgPSB0YXJnZXQuZ2V0Q29tcG9uZW50KCdoZXJvJyk7XG4gICAgICAgIHRoaXMuYW5pbS5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0Q29tcC5hdHRhY2tlZCh0aGlzLmRhbWFnZSk7XG5cbiAgICAgICAgfSwgMC4zKVxuICAgICAgXG4gICAgICAgIHRoaXMuc2tpbGwyKClcbiAgICB9XG4gICAgYXRrTGlzdCgpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgaWYgKCF0aGlzLmlzQ291bnREb3dza2lsbCkge1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93c2tpbGwgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF0a1NPdW5kLCBmYWxzZSwgMC44KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd3NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuY291bnRBdGspIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrKytcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMigpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsrKztcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2tpbGwxKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NraWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNTa2lsbCA9IHRydWU7XG4gICAgICAgIGxldCBhcnJCdWxsZXQgPSBbY2MudjMoLTIzMSwgLTUxMCksIGNjLnYzKC0xMjYsIC02MzcpLCBjYy52MygtMzI1LCAtNjIzKSwgY2MudjMoLTE0MiwgLTUxNSksXG4gICAgICAgIGNjLnYzKC00MjgsIC01NzkpLCBjYy52MygtMzE0LCAtNTMwKSwgY2MudjMoLTIxNywgLTYwMSksIGNjLnYzKDAsIC01MzQpLCBjYy52MygtMzkwLCAtNTQwKSxjYy52Myg1MCwgLTUwMCksXG4gICAgICAgIF1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVsYXkgPSBpICUgMjtcbiAgICAgICAgICAgIGRlbGF5ID0gZGVsYXkgKiAwLjRcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNraWxsMVByZSk7XG4gICAgICAgICAgICAgICAgYnVsbGV0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgYnVsbGV0LnBvc2l0aW9uID0gYXJyQnVsbGV0W2ldLmFkZChjYy52MygwLCAxMDApKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtNTAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ3RyYWlsMScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCBkZWxheSlcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICB9LCAwLjUpXG4gICAgXG4gICAgfVxuICAgIHNraWxsMigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTa2lsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzU2tpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcInNraWxsMlwiKTtcblxuICAgIH1cbiAgICBjb21wbGV0ZUV2ZW50KHR5cGUpIHtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hdGtMaXN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDEoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMVwiOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYXRrTGlzdCgpXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRXZlbnQodHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDJcIjpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNraWxsMigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwyTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIGV4aXRUYXJnZXQoKSB7XG4gICAgICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNNZWV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKVxuICAgICAgICB0aGlzLmFuaW0udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuICBcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/eventBossListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '765dbvRKaxGD6g9BNgbkSCX', 'eventBossListener');
// script/enemy/eventBossListener.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.completeEvent = function (type) {
        this.node.parent.getComponent("enemy").completeEvent(type);
    };
    NewClass.prototype.addEvent = function (type) {
        this.node.parent.getComponent("enemy").addEvent(type);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZXZlbnRCb3NzTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBZUEsQ0FBQztJQVhHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsZ0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUQsQ0FBQztJQWJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZTVCO0lBQUQsZUFBQztDQWZELEFBZUMsQ0FmcUMsRUFBRSxDQUFDLFNBQVMsR0FlakQ7a0JBZm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgY29tcGxldGVFdmVudCh0eXBlKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiZW5lbXlcIikuY29tcGxldGVFdmVudCh0eXBlKTtcbiAgICB9XG4gICAgYWRkRXZlbnQodHlwZSkge1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImVuZW15XCIpLmFkZEV2ZW50KHR5cGUpO1xuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/giantRock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8d3c7Vz8pEqYExnJwTZ8pq', 'giantRock');
// script/enemy/giantRock.ts

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
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skill2Node = null;
        _this.skill1Node = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.isCountDowskill = false;
        _this.isAtk = false;
        return _this;
        // btn_skillCircle() {
        //     // for (let i = 0; i < 12; i++) {
        //     //     let rd = Math.floor(Math.random() * 2)
        //     //     let bullet = cc.instantiate(this.preBullet);
        //     //     let angle = (-Math.PI) + (Math.PI * i / 6);
        //     //     let pos = cc.v3(0, 0);
        //     //     this.node.addChild(bullet);
        //     //     bullet.zIndex=cc.macro.MIN_ZINDEX
        //     //     bullet.setPosition(pos.add(cc.v3(0, -50)));
        //     //     // bullet.getChildByName("circle").children[0].color = new cc.Color().fromHEX("#4ED3EC");
        //     //     bullet.scale = 0.4
        //     //     let param = (this.node.scaleX < 0) ? (-400 - 50 * rd) : (400 + 50 * rd)
        //     //     cc.tween(bullet).to(1, { position: cc.v3(param * Math.cos(angle), param * Math.sin(angle)).add(cc.v3(0, -50)) }).call(() => {
        //     //         // bullet.getComponent(cc.Animation).play()
        //     //    bullet.destroy()
        //     //     }).start();
        //     // }
        // }
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        if (this.isAtk)
            return;
        this.isAtk = true;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.atkList();
    };
    NewClass.prototype.atkList = function () {
        var _this = this;
        this.anim.play("atk");
        if (!this.isCountDowskill) {
            this.isCountDowskill = true;
            // cc.audioEngine.play(this.atkSOund, false, 0.8)
            this.scheduleOnce(function () {
                _this.isCountDowskill = false;
            }, 0.2);
        }
        switch (this.countAtk) {
            case 2:
                this.countAtk = 0;
                this.skill1();
                break;
            case 1:
                this.countAtk++;
                this.skill2();
                break;
            default:
                this.countAtk++;
                this.skill1();
                break;
        }
    };
    NewClass.prototype.skill1 = function () {
        if (this.isSkill)
            return;
        this.anim.play("skill1");
        this.isSkill = true;
        // this.scheduleOnce(() => {
        //     this.isSkill = false;
        //     this.skill2()
        // }, 0.5)
    };
    NewClass.prototype.skill2 = function () {
        if (this.isSkill)
            return;
        this.isSkill = true;
        this.anim.play("skill2");
    };
    NewClass.prototype.completeEvent = function (type) {
        this.isSkill = false;
        switch (type) {
            case "skill2":
                // this.atkList();
                this.skill1();
                break;
            case "skill1":
                // this.atkList()
                this.skill2();
                break;
        }
    };
    NewClass.prototype.addEvent = function (type) {
        switch (type) {
            case "skill2":
                // this.skill2();
                this.skill2Node.getComponent(cc.Animation).play();
                break;
            case "skill1":
                this.skill1();
                break;
        }
    };
    // doubleAtk(target) {
    //     for (let i = 0; i < 2; i++) {
    //         let atk = cc.instantiate(this.atk_down)
    //         atk.parent = this.node.parent;
    //         let pos = target.parent.convertToWorldSpaceAR(target.position);
    //         pos = this.node.parent.convertToNodeSpaceAR(pos)
    //         atk.position = pos
    //         atk.scaleX = ((i == 0) ? -1 : 1) * atk.scaleX
    //         atk.zIndex = 2
    //     }
    // }
    // createAtkDown(target) {
    //     let atk = cc.instantiate(this.atk_down)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.scaleX = ((pos.x > this.node.x) ? -1 : 1) * atk.scaleX
    //     atk.position = pos
    //     atk.zIndex = 2
    // }
    // createAtkAround(target) {
    //     let atk = cc.instantiate(this.atk_around)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.position = pos
    //     atk.zIndex = 2
    // }
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isAtk = false;
            this.isSkill = false;
            this.isMeet = false;
            this.anim.play("idle");
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill2Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skill1Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(enemy_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZ2lhbnRSb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBSztJQUEzQztRQUFBLHFFQWtLQztRQS9KRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixxQkFBZSxHQUFHLEtBQUssQ0FBQTtRQUN2QixXQUFLLEdBQUMsS0FBSyxDQUFBOztRQWtJWCxzQkFBc0I7UUFDdEIsd0NBQXdDO1FBQ3hDLG9EQUFvRDtRQUVwRCwwREFBMEQ7UUFDMUQseURBQXlEO1FBQ3pELG9DQUFvQztRQUNwQyx5Q0FBeUM7UUFDekMsK0NBQStDO1FBQy9DLHlEQUF5RDtRQUN6RCx1R0FBdUc7UUFDdkcsZ0NBQWdDO1FBQ2hDLHFGQUFxRjtRQUNyRiwySUFBMkk7UUFDM0ksNkRBQTZEO1FBQzdELDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsV0FBVztRQUVYLElBQUk7SUFDUixDQUFDO0lBckpHLHlCQUFNLEdBQU4sVUFBTyxNQUFNO1FBQWIsaUJBV0M7UUFWRyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFD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cUM7SUFDckMsc0VBQXNFO0lBQ3RFLHVEQUF1RDtJQUN2RCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLElBQUk7SUFDSiw2QkFBVSxHQUFWO1FBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFFbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdEIsOENBQThDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUN0QztJQUVMLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBTztJQUVkLENBQUM7SUExSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQVZiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrSzVCO0lBQUQsZUFBQztDQWxLRCxBQWtLQyxDQWxLcUMsZUFBSyxHQWtLMUM7a0JBbEtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZW5lbXkgZnJvbSBcIi4uL2VuZW15XCJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGVuZW15IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBza2lsbDJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNraWxsMU5vZGU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgaXNDb3VudERvd3NraWxsID0gZmFsc2VcbiAgICBpc0F0az1mYWxzZVxuICAgIGF0dGFjayh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdGspIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0F0ayA9IHRydWVcbiAgICAgICAgdGhpcy5pc01lZXQgPSB0cnVlO1xuICAgICAgICBsZXQgdGFyZ2V0Q29tcCA9IHRhcmdldC5nZXRDb21wb25lbnQoJ2hlcm8nKTtcbiAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcblxuICAgICAgICB9LCAwLjMpXG4gICAgICBcbiAgICAgICAgdGhpcy5hdGtMaXN0KClcbiAgICB9XG4gICAgYXRrTGlzdCgpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgaWYgKCF0aGlzLmlzQ291bnREb3dza2lsbCkge1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93c2tpbGwgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF0a1NPdW5kLCBmYWxzZSwgMC44KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd3NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH0sIDAuMilcblxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3VudEF0aykge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxKClcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsrK1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwyKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudEF0aysrO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBza2lsbDEoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2tpbGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDFcIilcblxuICAgICAgICB0aGlzLmlzU2tpbGwgPSB0cnVlO1xuXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICAvLyB9LCAwLjUpXG4gIFxuICAgIH1cbiAgICBza2lsbDIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2tpbGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDJcIik7XG5cbiAgICB9XG4gICAgY29tcGxldGVFdmVudCh0eXBlKSB7XG4gICAgICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMlwiOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYXRrTGlzdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmF0a0xpc3QoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwyKClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50KHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5za2lsbDIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMk5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwxXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDEoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZG91YmxlQXRrKHRhcmdldCkge1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgIC8vICAgICAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Rvd24pXG4gICAgLy8gICAgICAgICBhdGsucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXQucG9zaXRpb24pO1xuICAgIC8vICAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgICAgICBhdGsucG9zaXRpb24gPSBwb3NcbiAgICAvLyAgICAgICAgIGF0ay5zY2FsZVggPSAoKGkgPT0gMCkgPyAtMSA6IDEpICogYXRrLnNjYWxlWFxuICAgIC8vICAgICAgICAgYXRrLnpJbmRleCA9IDJcblxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gY3JlYXRlQXRrRG93bih0YXJnZXQpIHtcbiAgICAvLyAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Rvd24pXG4gICAgLy8gICAgIGF0ay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgIC8vICAgICBsZXQgcG9zID0gdGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0LnBvc2l0aW9uKTtcbiAgICAvLyAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgIGF0ay5zY2FsZVggPSAoKHBvcy54ID4gdGhpcy5ub2RlLngpID8gLTEgOiAxKSAqIGF0ay5zY2FsZVhcbiAgICAvLyAgICAgYXRrLnBvc2l0aW9uID0gcG9zXG4gICAgLy8gICAgIGF0ay56SW5kZXggPSAyXG5cblxuICAgIC8vIH1cbiAgICAvLyBjcmVhdGVBdGtBcm91bmQodGFyZ2V0KSB7XG4gICAgLy8gICAgIGxldCBhdGsgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmF0a19hcm91bmQpXG4gICAgLy8gICAgIGF0ay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgIC8vICAgICBsZXQgcG9zID0gdGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0LnBvc2l0aW9uKTtcbiAgICAvLyAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgIGF0ay5wb3NpdGlvbiA9IHBvc1xuICAgIC8vICAgICBhdGsuekluZGV4ID0gMlxuICAgIC8vIH1cbiAgICBleGl0VGFyZ2V0KCkge1xuICAgICAgICBpZih0aGlzLmFyckhlcm8ubGVuZ3RoPD0wKXtcbiAgICAgICAgICAgIHRoaXMuaXNBdGsgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5pc1NraWxsID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNNZWV0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImlkbGVcIilcbiAgICAgICAgICAgIC8vIHRoaXMuYm9keVNrZWxldG9uLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuICAgIC8vIGJ0bl9za2lsbENpcmNsZSgpIHtcbiAgICAvLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgLy8gICAgIC8vICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuXG4gICAgLy8gICAgIC8vICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCdWxsZXQpO1xuICAgIC8vICAgICAvLyAgICAgbGV0IGFuZ2xlID0gKC1NYXRoLlBJKSArIChNYXRoLlBJICogaSAvIDYpO1xuICAgIC8vICAgICAvLyAgICAgbGV0IHBvcyA9IGNjLnYzKDAsIDApO1xuICAgIC8vICAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJ1bGxldCk7XG4gICAgLy8gICAgIC8vICAgICBidWxsZXQuekluZGV4PWNjLm1hY3JvLk1JTl9aSU5ERVhcbiAgICAvLyAgICAgLy8gICAgIGJ1bGxldC5zZXRQb3NpdGlvbihwb3MuYWRkKGNjLnYzKDAsIC01MCkpKTtcbiAgICAvLyAgICAgLy8gICAgIC8vIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZShcImNpcmNsZVwiKS5jaGlsZHJlblswXS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNEVEM0VDXCIpO1xuICAgIC8vICAgICAvLyAgICAgYnVsbGV0LnNjYWxlID0gMC40XG4gICAgLy8gICAgIC8vICAgICBsZXQgcGFyYW0gPSAodGhpcy5ub2RlLnNjYWxlWCA8IDApID8gKC00MDAgLSA1MCAqIHJkKSA6ICg0MDAgKyA1MCAqIHJkKVxuICAgIC8vICAgICAvLyAgICAgY2MudHdlZW4oYnVsbGV0KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MyhwYXJhbSAqIE1hdGguY29zKGFuZ2xlKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZSkpLmFkZChjYy52MygwLCAtNTApKSB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgLy8gICAgICAgICAvLyBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgLy8gICAgIC8vICAgIGJ1bGxldC5kZXN0cm95KClcbiAgICAvLyAgICAgLy8gICAgIH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgIC8vIH1cblxuICAgIC8vIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/bulletEnemyListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21120Z7HulMSpPkoS4fHUd1', 'bulletEnemyListener');
// script/enemy/bulletEnemyListener.ts

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
var bullet_1 = require("../bullet");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletNode = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    // setDame(damage) {
    //     this.damage = damage;
    // }
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.getComponent('heroListener')) {
            var target = other.node.getComponent('heroListener').target;
            var bulletComp = this.bulletNode.getComponent(bullet_1.default);
            target.getComponent('hero').attacked(bulletComp.damage);
            // if (!bulletComp.isShuriken) {
            this.scheduleOnce(function () {
                if (self.node.getChildByName('explode')) {
                    self.node.getComponent(cc.CircleCollider).enabled = false;
                    self.node.stopAllActions();
                    self.node.getChildByName('explode').active = true;
                    // self.node.getChildByName('trail1').active = false;
                    self.node.getChildByName('icon').active = false;
                }
            }, 0.01);
            this.scheduleOnce(function () {
                self.node.destroy();
            }, 0.12);
        }
        if (other.node.name == "wall1") {
            this.scheduleOnce(function () {
                if (self.node.getChildByName('explode')) {
                    self.node.getComponent(cc.CircleCollider).enabled = false;
                    self.node.stopAllActions();
                    self.node.getChildByName('explode').active = true;
                    // self.node.getChildByName('trail1').active = false;
                    self.node.getChildByName('icon').active = false;
                }
            }, 0.01);
            this.scheduleOnce(function () {
                self.node.destroy();
            }, 0.12);
        }
        // }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bulletNode", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;
// update (dt) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcYnVsbGV0RW5lbXlMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBOEI7QUFDeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvREM7UUFqREcsZ0JBQVUsR0FBWSxJQUFJLENBQUE7O0lBaUQ5QixDQUFDO0lBL0NHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLElBQUk7SUFDSixtQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDNUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbEQscURBQXFEO29CQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNuRDtZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtRQUVELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsT0FBTyxFQUFFO1lBRTFCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2xELHFEQUFxRDtvQkFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDbkQ7WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7UUFDRCxJQUFJO0lBQ1IsQ0FBQztJQWhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBSFQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9ENUI7SUFBRCxlQUFDO0NBcERELEFBb0RDLENBcERxQyxFQUFFLENBQUMsU0FBUyxHQW9EakQ7a0JBcERvQixRQUFRO0FBc0Q3QixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVsbGV0IGZyb20gJy4uL2J1bGxldCdcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidWxsZXROb2RlOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIC8vIHNldERhbWUoZGFtYWdlKSB7XG4gICAgLy8gICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgIC8vIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudCgnaGVyb0xpc3RlbmVyJykpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnaGVyb0xpc3RlbmVyJykudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGJ1bGxldENvbXAgPSB0aGlzLmJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KGJ1bGxldCk7XG4gICAgICAgICAgICB0YXJnZXQuZ2V0Q29tcG9uZW50KCdoZXJvJykuYXR0YWNrZWQoYnVsbGV0Q29tcC5kYW1hZ2UpO1xuICAgICAgICAgICAgLy8gaWYgKCFidWxsZXRDb21wLmlzU2h1cmlrZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCd0cmFpbDEnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC4wMSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIDAuMTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG90aGVyLm5vZGUubmFtZT09XCJ3YWxsMVwiKSB7XG4gICAgICAgXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGYubm9kZS5nZXRDaGlsZEJ5TmFtZSgndHJhaWwxJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAuMDEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAwLjEyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG4vLyB1cGRhdGUgKGR0KSB7fVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/rangeTargetEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d6e5SADCFOmIawX7BwqX7p', 'rangeTargetEnemy');
// script/enemy/rangeTargetEnemy.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.getComponent('heroListener')) {
            this.node.parent.getComponent("enemy").isFreeze = false;
            this.node.parent.getComponent("enemy").run();
        }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        if (other.node.getComponent('heroListener')) {
            this.node.parent.getComponent("enemy").isFreeze = false;
        }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxccmFuZ2VUYXJnZXRFbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFzQkEsQ0FBQztJQW5CRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBRXpDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtTQUUvQztJQUNMLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7U0FHMUQ7SUFDTCxDQUFDO0lBckJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0I1QjtJQUFELGVBQUM7Q0F0QkQsQUFzQkMsQ0F0QnFDLEVBQUUsQ0FBQyxTQUFTLEdBc0JqRDtrQkF0Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgIFxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoJ2hlcm9MaXN0ZW5lcicpKSB7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiZW5lbXlcIikuaXNGcmVlemUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5ydW4oKVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Db2xsaXNpb25TdGF5KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudCgnaGVyb0xpc3RlbmVyJykpIHtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5pc0ZyZWV6ZSA9IGZhbHNlXG4gICAgICAgICBcblxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/chest/Chest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9fab3/PvPZEMrurmDmn/82u', 'Chest');
// script/chest/Chest.ts

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
        _this.current = 0;
        _this.gamePlay = null;
        _this.tag = 0;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    };
    NewClass.prototype.clickChest = function () {
        var _this = this;
        if (globalThis.gold >= this.current) {
            this.node.getComponent(cc.CircleCollider).enabled = false;
            console.log("clickchest");
            globalThis.gold -= this.current;
            this.gamePlay.clickChest(this.tag);
            this.scheduleOnce(function () {
                var chest = _this.node.children[0].getChildByName("chest");
                _this.node.children[0].getChildByName("icon").active = false;
                _this.node.children[0].getChildByName("New Label").active = false;
                _this.node.children[0].getChildByName("bang").active = false;
                chest.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', chest.getComponent(cc.Sprite)));
            }, 0.6);
        }
        else {
            this.notEnoughGold();
        }
    };
    NewClass.prototype.notEnoughGold = function () {
        this.node.getComponent(cc.Animation).play();
    };
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "current", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "tag", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjaGVzdFxcQ2hlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQ0M7UUFsQ0csYUFBTyxHQUFHLENBQUMsQ0FBQTtRQUNYLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsU0FBRyxHQUFHLENBQUMsQ0FBQTs7UUE4QlAsaUJBQWlCO0lBQ3JCLENBQUM7SUE5Qkcsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUVsRSxDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBRXpCLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3pELEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM1RCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDaEUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBRTNELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEksQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1NBRVQ7YUFDSTtZQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUN2QjtJQUNMLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDVjtJQUdYO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ2Q7SUFMVSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0M1QjtJQUFELGVBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0NqRDtrQkFwQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgY3VycmVudCA9IDBcbiAgICBnYW1lUGxheSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgdGFnID0gMFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZTIxXCIpXG5cbiAgICB9XG4gICAgY2xpY2tDaGVzdCgpIHtcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuZ29sZCA+PSB0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tjaGVzdFwiKVxuXG4gICAgICAgICAgICBnbG9iYWxUaGlzLmdvbGQgLT0gdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgdGhpcy5nYW1lUGxheS5jbGlja0NoZXN0KHRoaXMudGFnKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgbGV0IGNoZXN0ID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiY2hlc3RcIilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImJhbmdcIikuYWN0aXZlID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIGNoZXN0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsVmFyaWFudC5jcmVhdGVXaXRoQnVpbHRpbignMmQtZ3JheS1zcHJpdGUnLCBjaGVzdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xuICAgICAgICAgICAgfSwwLjYpXG4gICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vdEVub3VnaEdvbGQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG5vdEVub3VnaEdvbGQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/Goku.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '960a48AA/1JKJwrEvxE56GC', 'Goku');
// script/hero/Goku.ts

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
var hero_1 = require("./hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.skill1 = function () {
        var _this = this;
        this.anim.play("skill1");
        cc.audioEngine.play(this.skill1Sound, false, 1);
        this.isSKill = true;
        var target = this.enemyArr[0];
        if (target) {
            var parent_1 = target.parent;
            var posx_1 = target.position;
            this.scheduleOnce(function () {
                var fx = cc.instantiate(_this.preSkill1);
                fx.parent = _this.node.parent;
                fx.position = fx.getComponent("Skill").posStart;
                var posHero = _this.node.position;
                var pos2 = posx_1;
                pos2 = parent_1.convertToWorldSpaceAR(pos2);
                pos2 = _this.node.parent.convertToNodeSpaceAR(pos2);
                var pos = _this.node.position;
                var tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0;
                var angle = Math.atan(tan) * (180 / (Math.PI));
                angle = (pos.x <= pos2.x) ? angle : angle + 180;
                var param = 190;
                var angle2 = _this.checkAngle2(posHero, pos2);
                angle2 = cc.misc.degreesToRadians(angle2);
                var pos3 = posHero.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)));
                fx.position = pos3;
                fx.angle = angle;
                _this.arrFxSkill.push(fx);
            }, 0.2);
        }
    };
    NewClass.prototype.skill2 = function () {
        this.anim.play("skill2");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(hero_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxHb2t1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBSTtJQUExQzs7SUF3Q0EsQ0FBQztJQXBDRyx5QkFBTSxHQUFOO1FBQUEsaUJBOEJDO1FBN0JHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBRW5CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLFFBQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksTUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdkMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtnQkFDNUIsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDaEQsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLElBQUksSUFBSSxHQUFHLE1BQUksQ0FBQztnQkFDaEIsSUFBSSxHQUFHLFFBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtnQkFDNUIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDL0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNoRCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUM1QyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDakYsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ2xCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO2dCQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUM1QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDVjtJQUNMLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQXJDZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdDNUI7SUFBRCxlQUFDO0NBeENELEFBd0NDLENBeENxQyxjQUFJLEdBd0N6QztrQkF4Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIEhlcm8ge1xuXG5cblxuICAgIHNraWxsMSgpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDFcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNraWxsMVNvdW5kLCBmYWxzZSwgMSlcbiAgICAgICAgdGhpcy5pc1NLaWxsID0gdHJ1ZVxuXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmVuZW15QXJyWzBdO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGFyZ2V0LnBhcmVudDtcbiAgICAgICAgICAgIGxldCBwb3N4ID0gdGFyZ2V0LnBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlU2tpbGwxKVxuICAgICAgICAgICAgICAgIGZ4LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgICAgICAgICBmeC5wb3NpdGlvbiA9IGZ4LmdldENvbXBvbmVudChcIlNraWxsXCIpLnBvc1N0YXJ0O1xuICAgICAgICAgICAgICAgIGxldCBwb3NIZXJvID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBwb3MyID0gcG9zeDtcbiAgICAgICAgICAgICAgICBwb3MyID0gcGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MyKTtcbiAgICAgICAgICAgICAgICBwb3MyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgbGV0IHRhbiA9IChwb3MyLnggLSBwb3MueCAhPT0gMCkgPyAocG9zMi55IC0gcG9zLnkgLSAzMCkgLyAocG9zMi54IC0gcG9zLngpIDogMFxuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbih0YW4pICogKDE4MCAvIChNYXRoLlBJKSk7XG4gICAgICAgICAgICAgICAgYW5nbGUgPSAocG9zLnggPD0gcG9zMi54KSA/IGFuZ2xlIDogYW5nbGUgKyAxODA7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtID0gMTkwO1xuICAgICAgICAgICAgICAgIGxldCBhbmdsZTIgPSB0aGlzLmNoZWNrQW5nbGUyKHBvc0hlcm8sIHBvczIpXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlMilcbiAgICAgICAgICAgICAgICBsZXQgcG9zMyA9IHBvc0hlcm8uYWRkKGNjLnYzKHBhcmFtICogTWF0aC5jb3MoYW5nbGUyKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZTIpKSlcbiAgICAgICAgICAgICAgICBmeC5wb3NpdGlvbiA9IHBvczNcbiAgICAgICAgICAgICAgICBmeC5hbmdsZSA9IGFuZ2xlXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJGeFNraWxsLnB1c2goZngpXG4gICAgICAgICAgICB9LCAwLjIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2tpbGwyKCkge1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcInNraWxsMlwiKVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/EventHeroListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7d1epbIZBFY4N/wqTMWOgH', 'EventHeroListener');
// script/hero/EventHeroListener.ts

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
        _this.target = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.eventListener = function (name) {
    };
    NewClass.prototype.eventComplete = function (name) {
        this.target.getComponent("hero").eventComplete(name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxFdmVudEhlcm9MaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWFDO1FBWEcsWUFBTSxHQUFZLElBQUksQ0FBQTs7UUFVdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFWRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELGdDQUFhLEdBQWIsVUFBYyxJQUFJO0lBRWxCLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBVEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUZMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGxcbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBldmVudExpc3RlbmVyKG5hbWUpIHtcblxuICAgIH1cbiAgICBldmVudENvbXBsZXRlKG5hbWUpIHtcbiAgICAgICAgdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KFwiaGVyb1wiKS5ldmVudENvbXBsZXRlKG5hbWUpXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/Wukong.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b9f7NnYxVEk6ExSX6FlYWF', 'Wukong');
// script/hero/Wukong.ts

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
var hero_1 = require("./hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.skill1 = function () {
        var _this = this;
        if (this.isSKill)
            return;
        this.isSKill = true;
        this.anim.play("skill1");
        cc.audioEngine.play(this.skill1Sound, false, 1);
        console.log("skill1");
        this.scheduleOnce(function () {
            var fx = cc.instantiate(_this.preSkill1);
            fx.parent = _this.node;
            fx.position = fx.getComponent("Skill").posStart;
        }, 0.55);
    };
    NewClass.prototype.skill2 = function () {
        this.anim.play("skill2");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(hero_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxXdWtvbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXlCO0FBRW5CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFJO0lBQTFDOztJQXFCQSxDQUFDO0lBakJHLHlCQUFNLEdBQU47UUFBQSxpQkFZQztRQVhHLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3ZDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQTtZQUNyQixFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQ25ELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVaLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQW5CZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFCNUI7SUFBRCxlQUFDO0NBckJELEFBcUJDLENBckJxQyxjQUFJLEdBcUJ6QztrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIEhlcm8ge1xuXG5cbiAgXG4gICAgc2tpbGwxKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NLaWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNTS2lsbCA9IHRydWVcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDFcIilcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNraWxsMVNvdW5kLCBmYWxzZSwgMSlcbiAgICAgICAgY29uc29sZS5sb2coXCJza2lsbDFcIilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVTa2lsbDEpXG4gICAgICAgICAgICBmeC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgICAgIGZ4LnBvc2l0aW9uID0gZnguZ2V0Q29tcG9uZW50KFwiU2tpbGxcIikucG9zU3RhcnRcbiAgICAgICAgfSwgMC41NSlcblxuICAgIH1cbiAgICBza2lsbDIoKSB7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwic2tpbGwyXCIpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b94ebH0ncNCRrcLi74sFldk', 'Game');
// script/Game.ts

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
        _this.mainCamera = null;
        _this.hero = null;
        _this.preDamage = null;
        _this.preBonusAmmo = null;
        _this.statusAtk = null;
        _this.endcard = null;
        _this.linkToStore = null;
        // @property(cc.Node)
        // miniMap: cc.Node = null
        _this.isPauseGame = false;
        _this.heroComp = null;
        _this.isCountDie = 0;
        _this.isMoving = false;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.start = function () {
        this.heroComp = this.hero.getComponent('hero');
    };
    NewClass.prototype.createAmmo = function (pos) {
        var box = cc.instantiate(this.preBonusAmmo);
        box.parent = this.node;
        box.position = pos;
    };
    NewClass.prototype.countDie = function () {
        var _this = this;
        this.isCountDie++;
        if (this.isCountDie == 1) {
            this.statusAtk.getComponent("status").setName("FIZZ");
        }
        if (this.isCountDie == 2) {
            this.statusAtk.getComponent("status").setName("ORN");
        }
        if (this.isCountDie == 3) {
            this.statusAtk.getComponent("status").setName("THANOS");
        }
        if (this.isCountDie == 3) {
            this.statusAtk.getComponent("status").setName("JINX");
        }
        if (this.isCountDie == 3) {
            this.statusAtk.getComponent("status").setName("GAM");
        }
        this.statusAtk.active = true;
        this.statusAtk.children[0].getComponent(cc.Animation).play();
        if (this.isCountDie == 5) {
            this.scheduleOnce(function () {
                _this.endcard.active = true;
                _this.linkToStore.active = true;
            }, 1);
        }
    };
    NewClass.prototype.update = function (dt) {
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(0, 100)));
        }
        var canvas = this.node.getComponent(cc.Canvas);
        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         // this.mainCamera.zoomRatio = 2.2
        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.isPus = 0
        //         // if (this.isZoomed) {
        //         //     this.mainCamera.zoomRatio = 1.1
        //         // }
        //         // else {
        //         //     this.mainCamera.zoomRatio = 1
        //         // }
        //         this.iconGG.scale = 1
        //         this.coinBar.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;
        //         }
        //     }
        // }
        // else {
        //     // this.mainCamera.zoomRatio = 2.2
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.iconGG.scale = 1.3
        //     this.coinBar.scale = 1.3
        //     this.isPus = 80
        // }
    };
    NewClass.prototype.createDamage = function (pos) {
        var damage = cc.instantiate(this.preDamage);
        damage.parent = this.node;
        damage.position = pos;
        var rd = Math.floor(Math.random() * 1000);
        damage.scale = 2;
        // let damage = cc.instantiate(this.preDamage)
        var valueDamage = rd + 1000;
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD");
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528");
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString();
        // let damagefx = cc.instantiate(this.preFxAtk);
        // damagefx.parent = this.node
        // damagefx.position = pos;
        // damagefx.scale = 1.4
        // this.boss.getComponent("boss").attacked(90)
        // update (dt) {}
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "hero", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBonusAmmo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "statusAtk", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endcard", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "linkToStore", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0lDO1FBdElHLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBRTVCLFVBQUksR0FBWSxJQUFJLENBQUE7UUFFcEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFBO1FBNkNkLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBd0VwQixDQUFDO0lBcEhhLHlCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLEdBQUc7UUFDVixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMzQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7SUFDdEIsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFBQSxpQkEyQkM7UUExQkcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBRWpCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUMxRDtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDdkQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFT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QztRQUc5QyxpQkFBaUI7SUFDckIsQ0FBQztJQXJJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBZFgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdJNUI7SUFBRCxlQUFDO0NBeElELEFBd0lDLENBeElxQyxFQUFFLENBQUMsU0FBUyxHQXdJakQ7a0JBeElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgbWFpbkNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoZXJvOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZURhbWFnZTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVCb251c0FtbW86IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHN0YXR1c0F0azogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kY2FyZDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlua1RvU3RvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBtaW5pTWFwOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgaXNQYXVzZUdhbWUgPSBmYWxzZTtcclxuICAgIGhlcm9Db21wID0gbnVsbDtcclxuICAgIGlzQ291bnREaWUgPSAwXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmhlcm9Db21wID0gdGhpcy5oZXJvLmdldENvbXBvbmVudCgnaGVybycpO1xyXG5cclxuICAgIH1cclxuICAgIGNyZWF0ZUFtbW8ocG9zKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQm9udXNBbW1vKVxyXG4gICAgICAgIGJveC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYm94LnBvc2l0aW9uID0gcG9zXHJcbiAgICB9XHJcbiAgICBjb3VudERpZSgpIHtcclxuICAgICAgICB0aGlzLmlzQ291bnREaWUrK1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50RGllID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXNBdGsuZ2V0Q29tcG9uZW50KFwic3RhdHVzXCIpLnNldE5hbWUoXCJGSVpaXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnREaWUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1c0F0ay5nZXRDb21wb25lbnQoXCJzdGF0dXNcIikuc2V0TmFtZShcIk9STlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50RGllID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXNBdGsuZ2V0Q29tcG9uZW50KFwic3RhdHVzXCIpLnNldE5hbWUoXCJUSEFOT1NcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3VudERpZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQXRrLmdldENvbXBvbmVudChcInN0YXR1c1wiKS5zZXROYW1lKFwiSklOWFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0NvdW50RGllID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXNBdGsuZ2V0Q29tcG9uZW50KFwic3RhdHVzXCIpLnNldE5hbWUoXCJHQU1cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0dXNBdGsuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc3RhdHVzQXRrLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQ291bnREaWUgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGNhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua1RvU3RvcmUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuaGVyby5wb3NpdGlvbi5hZGQoY2MudjMoMCwgMTAwKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG5cclxuICAgICAgICAvLyBpZiAoY2Mud2luU2l6ZS53aWR0aCA8IGNjLndpblNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5pc3ZlcnRpY2FsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzdmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDIuMlxyXG5cclxuICAgICAgICAvLyAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzUHVzID0gMFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKHRoaXMuaXNab29tZWQpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMS4xXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5tYWluQ2FtZXJhLnpvb21SYXRpbyA9IDFcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmljb25HRy5zY2FsZSA9IDFcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDFcclxuICAgICAgICAvLyAgICAgICAgIGlmIChjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPCAxLjM1KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMi4yXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXN2ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaWNvbkdHLnNjYWxlID0gMS4zXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29pbkJhci5zY2FsZSA9IDEuM1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzUHVzID0gODBcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVEYW1hZ2UocG9zKSB7XHJcbiAgICAgICAgbGV0IGRhbWFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlRGFtYWdlKTtcclxuICAgICAgICBkYW1hZ2UucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgZGFtYWdlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgIGxldCByZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApXHJcbiAgICAgICAgZGFtYWdlLnNjYWxlID0gMlxyXG4gICAgICAgIC8vIGxldCBkYW1hZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZURhbWFnZSlcclxuICAgICAgICBsZXQgdmFsdWVEYW1hZ2UgPSByZCArIDEwMDBcclxuICAgICAgICBkYW1hZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjQzIzNkREXCIpXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZURhbWFnZSA+IDEyMDApIHtcclxuICAgICAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0MyMzZERFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWVEYW1hZ2UgPiAxNTAwKSB7XHJcbiAgICAgICAgICAgIGRhbWFnZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNDNTM1MjhcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZGFtYWdlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHZhbHVlRGFtYWdlLnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgLy8gbGV0IGRhbWFnZWZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVGeEF0ayk7XHJcbiAgICAgICAgLy8gZGFtYWdlZngucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgLy8gZGFtYWdlZngucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgLy8gZGFtYWdlZnguc2NhbGUgPSAxLjRcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ib3NzLmdldENvbXBvbmVudChcImJvc3NcIikuYXR0YWNrZWQoOTApXHJcblxyXG5cclxuICAgICAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/Mako.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bb3eKUcsdIxITjvks5nTBs', 'Mako');
// script/hero/Mako.ts

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
var hero_1 = require("./hero");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.skill1 = function () {
        this.anim.play("skill1");
        // cc.audioEngine.play(this.skill1Sound, false, 1)
    };
    NewClass.prototype.skill2 = function () {
        this.anim.play("skill1");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(hero_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxNYWtvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF5QjtBQUVuQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBSTtJQUExQzs7SUFhQSxDQUFDO0lBVEcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hCLGtEQUFrRDtJQUV0RCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFYZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWE1QjtJQUFELGVBQUM7Q0FiRCxBQWFDLENBYnFDLGNBQUksR0FhekM7a0JBYm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIEhlcm8ge1xuXG5cbiAgIFxuICAgIHNraWxsMSgpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDFcIilcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNraWxsMVNvdW5kLCBmYWxzZSwgMSlcblxuICAgIH1cbiAgICBza2lsbDIoKSB7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwic2tpbGwxXCIpXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/Arthur.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f134pUqUxIraV/OASqIm3r', 'Arthur');
// script/hero/Arthur.ts

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
var hero_1 = require("./hero");
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.skill1 = function () {
        var _this = this;
        // this.anim.play("skill1")
        this.anim.play("skill2");
        cc.audioEngine.play(this.skill1Sound, false, 1);
        this.scheduleOnce(function () {
            var dame = _this.damage;
            if (_this.enemyArr[0]) {
                _this.enemyArr[0].getComponent(enemy_1.default).attacked(dame);
            }
        }, 0.2);
    };
    NewClass.prototype.skill2 = function () {
        this.anim.play("skill2");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(hero_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxBcnRodXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXlCO0FBQ3pCLGtDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBSTtJQUExQzs7SUFzQkEsQ0FBQztJQWxCRyx5QkFBTSxHQUFOO1FBQUEsaUJBWUM7UUFYRywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUE7WUFFdEIsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDdEQ7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFWCxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTVCLENBQUM7SUFwQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzQjVCO0lBQUQsZUFBQztDQXRCRCxBQXNCQyxDQXRCcUMsY0FBSSxHQXNCekM7a0JBdEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm8gZnJvbSAnLi9oZXJvJ1xuaW1wb3J0IEVuZW15IGZyb20gJy4uL2VuZW15J1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBIZXJvIHtcblxuXG5cbiAgICBza2lsbDEoKSB7XG4gICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwic2tpbGwxXCIpXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwic2tpbGwyXCIpXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5za2lsbDFTb3VuZCwgZmFsc2UsIDEpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW1lID0gdGhpcy5kYW1hZ2VcblxuICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnJbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15QXJyWzBdLmdldENvbXBvbmVudChFbmVteSkuYXR0YWNrZWQoZGFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC4yKVxuXG4gICAgfVxuICAgIHNraWxsMigpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDJcIilcblxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/bulletHeroListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a615KUuTxNLpC2TMRDkDVV', 'bulletHeroListener');
// script/hero/bulletHeroListener.ts

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
var bullet_1 = require("../bullet");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletNode = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    // setDame(damage) {
    //     this.damage = damage;
    // }
    NewClass.prototype.onCollisionEnter = function (other, self) {
        var heroComp = cc.Canvas.instance.node.getComponent('Game').heroComp;
        if (other.node.getComponent('enemyListener') && self.node.getComponent('bulletHeroListener')) {
            var target = other.node.getComponent('enemyListener').target;
            var bulletComp = this.bulletNode.getComponent(bullet_1.default);
            target.getComponent('enemy').attacked(bulletComp.damage);
            if (!bulletComp.isShuriken) {
                this.scheduleOnce(function () {
                    if (self.node.getChildByName('explode')) {
                        self.node.getComponent(cc.CircleCollider).enabled = false;
                        self.node.stopAllActions();
                        self.node.getChildByName('explode').active = true;
                        // self.node.getChildByName('trail1').active = false;
                        self.node.getChildByName('icon').active = false;
                    }
                }, 0.01);
                this.scheduleOnce(function () {
                    self.node.destroy();
                }, 0.12);
            }
        }
        if (other.node.name == "wall1") {
            this.scheduleOnce(function () {
                if (self.node.getChildByName('explode')) {
                    self.node.getComponent(cc.CircleCollider).enabled = false;
                    self.node.stopAllActions();
                    self.node.getChildByName('explode').active = true;
                    // self.node.getChildByName('trail1').active = false;
                    self.node.getChildByName('icon').active = false;
                }
            }, 0.01);
            this.scheduleOnce(function () {
                self.node.destroy();
            }, 0.12);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bulletNode", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;
// update (dt) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxidWxsZXRIZXJvTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQThCO0FBQ3hCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdURDO1FBcERHLGdCQUFVLEdBQVksSUFBSSxDQUFBOztJQW9EOUIsQ0FBQztJQWxERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0Qsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixJQUFJO0lBQ0osbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQ3BFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUMxRixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDN0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6RCxJQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDbEQscURBQXFEO3dCQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUNuRDtnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDWjtTQUdKO1FBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxPQUFPLEVBQUU7WUFFMUIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbEQscURBQXFEO29CQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNuRDtZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUhULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RDVCO0lBQUQsZUFBQztDQXZERCxBQXVEQyxDQXZEcUMsRUFBRSxDQUFDLFNBQVMsR0F1RGpEO2tCQXZEb0IsUUFBUTtBQXlEekIsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1bGxldCBmcm9tICcuLi9idWxsZXQnXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnVsbGV0Tm9kZTogY2MuTm9kZSA9IG51bGxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICAvLyBzZXREYW1lKGRhbWFnZSkge1xuICAgIC8vICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcbiAgICAvLyB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBsZXQgaGVyb0NvbXAgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoJ0dhbWUnKS5oZXJvQ29tcFxuICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoJ2VuZW15TGlzdGVuZXInKSAmJiBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KCdidWxsZXRIZXJvTGlzdGVuZXInKSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdlbmVteUxpc3RlbmVyJykudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGJ1bGxldENvbXAgPSB0aGlzLmJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KGJ1bGxldCk7XG4gICAgICAgICAgICB0YXJnZXQuZ2V0Q29tcG9uZW50KCdlbmVteScpLmF0dGFja2VkKGJ1bGxldENvbXAuZGFtYWdlKTtcblxuICAgICAgICAgICAgaWYoIWJ1bGxldENvbXAuaXNTaHVyaWtlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGYubm9kZS5nZXRDaGlsZEJ5TmFtZSgndHJhaWwxJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDAuMDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9LCAwLjEyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lPT1cIndhbGwxXCIpIHtcbiAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCd0cmFpbDEnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC4wMSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIDAuMTIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/listener/skillListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f8faGIr1dIdKWfbtbF5nMj', 'skillListener');
// script/listener/skillListener.ts

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
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsaXN0ZW5lclxcc2tpbGxMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero/hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dca7QRyN9LfKFIkDZl5K0r', 'hero');
// script/hero/hero.ts

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
// import { Constant } from "./Constant";
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.bodyCollider = null;
        _this.rangeCollider = null;
        _this.heroBullet = null;
        _this.blood = null;
        _this.bloodSub = null;
        _this.preDamage = null;
        _this.levelNode = null;
        _this.isHaveSkill = true;
        _this.hp = 500;
        _this.damage = 50;
        _this.countDown = 0.4;
        _this.isAD = false;
        _this.isAuto = false;
        _this.atkSound = null;
        _this.chopSound = null;
        _this.skill1Sound = null;
        _this.preSkill1 = null;
        _this.preSkill2 = null;
        _this.lbHP = null;
        _this.isLocalScale = 1;
        _this.isMain = false;
        _this.isSKill = false;
        _this.moveDir = null;
        _this.directionX = null;
        _this.isRun = false;
        _this.isDie = false;
        _this.speed = 300;
        _this.maxHp = 0;
        _this.enemyArr = [];
        _this.isAttack = false;
        _this.isChop = false;
        _this.gamePlay = null;
        _this.isCountAtk = 0;
        _this.arrPosFollow = [cc.v3(-238, -261), cc.v3(-43, -351), cc.v3(-170, -405), cc.v3(-101, 67)];
        _this.isCountFollow = 0;
        _this.localPos = cc.v3(0, 0);
        _this.arrHero = [];
        _this.arrFxSkill = [];
        _this.isEnd = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.maxHp = this.hp;
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
        // this.arrHero = cc.Canvas.instance.node.getComponent('Game21').arrHero
    };
    NewClass.prototype.run = function () {
        if (this.isSKill)
            return;
        if (!this.isRun && !this.isDie) {
            this.isRun = true;
            // this.anim.play("move")
            // this.isAttack = false;
        }
    };
    NewClass.prototype.idle = function () {
        if (!this.isRun && !this.isDie) {
            // this.anim.play("idle")
            this.isSKill = false;
        }
    };
    NewClass.prototype.onColider = function () {
        this.bodyCollider.enabled = true;
        this.rangeCollider.enabled = true;
    };
    NewClass.prototype.offColider = function () {
        this.node.active = true;
        this.bodyCollider.enabled = false;
        this.rangeCollider.enabled = false;
        this.node.scaleX = -1;
        this.isAuto = false;
        this.isRun = false;
        this.isEnd = true;
        this.unscheduleAllCallbacks();
        this.node.stopAllActions();
        this.node.getChildByName("hpBar").active = true;
        this.idle();
        this.node.getChildByName("fxAppear").getComponent(cc.Animation).play();
    };
    NewClass.prototype.stop = function () {
        if (this.isSKill)
            return;
        if (!this.isDie) {
            // this.isAttack = false
            this.isRun = false;
            if (this.enemyArr.length > 0) {
                this.attack();
            }
            else {
                if (!this.isSKill) {
                    // this.anim.play("idle");
                }
            }
        }
    };
    NewClass.prototype.showNoti = function () {
        this.node.getChildByName("preNoti").getComponent(cc.Animation).play();
    };
    NewClass.prototype.attack = function () {
        // console.log(this.isRun,this.enemyArr.length)
        // this.enemyArr.push(enemy)
        var _this = this;
        // if (this.isRun) return;
        if (this.enemyArr.length > 0) {
            if (!this.isAttack) {
                this.isAttack = true;
                this.node.stopAllActions();
                this.isRun = false;
                this.schedule(function () {
                    _this.shoot();
                }, 0.3);
            }
        }
        else {
            if (this.enemyArr.length == 0) {
                if (this.isAuto) {
                    this.anim.unscheduleAllCallbacks();
                    this.isAttack = false;
                    this.idle();
                }
            }
        }
    };
    NewClass.prototype.setDefault = function () {
        this.node.stopAllActions();
        this.isAttack = false;
        this.isRun = false;
        this.idle();
        this.node.getChildByName("fxAppear").getComponent(cc.Animation).play();
    };
    NewClass.prototype.reload = function () {
        var _this = this;
        this.node.getChildByName("napdan").getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
            _this.gamePlay.createAmmo(_this.node.position.add(cc.v3(-50, 50)));
        }, 0.2);
    };
    NewClass.prototype.moveToPos = function (pos, time) {
        var _this = this;
        this.anim.play("move");
        cc.tween(this.node).to(time, { position: pos }).call(function () {
            _this.idle();
        }).start();
    };
    NewClass.prototype.moveByPos = function (pos, time) {
        var _this = this;
        this.anim.play("move");
        cc.tween(this.node).by(time, { position: pos }).call(function () {
            _this.anim.play("idle");
            _this.onColider();
        }).start();
    };
    NewClass.prototype.attacked = function (damage) {
        if (this.isDie)
            return;
        this.hp -= damage;
        this.lbHP.string = this.hp.toString();
        this.blood.fillRange = this.hp / this.maxHp;
        this.node.getComponent(cc.Animation).play();
        if (this.hp <= 100)
            return;
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
            this.node.destroy();
        }
    };
    // checkAngle2(pos1, pos2) {
    //     let tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
    //     if (pos2.y == pos1.y) {
    //         if (pos2.x > pos1.x) return 0;
    //         if (pos2.x < pos1.x) return 180;
    //     }
    //     if (pos2.x == pos1.x) {
    //         if (pos2.y > pos1.y) return 90;
    //         if (pos2.y < pos1.y) return -90;
    //     }
    //     if (pos1.x == pos2.x && pos1.y == pos2.y) return 0;
    //     if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
    //         if (pos2.x > pos1.x && pos2.y > pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan));
    //         if (pos2.x > pos1.x && pos2.y < pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
    //         if (pos2.x < pos1.x && pos2.y > pos1.y) return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
    //         if (pos2.x < pos1.x && pos2.y < pos1.y) return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
    //     }
    // }
    NewClass.prototype.removeEnemy = function (idEnemy) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy._id == idEnemy)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.isAttack = false;
            if (this.isSKill == false) {
            }
        }
    };
    NewClass.prototype.removeEnemy2 = function (node) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy == node)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.node.stopAllActions();
            this.isAttack = false;
        }
    };
    NewClass.prototype.check1 = function () {
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.isAttack = false;
        }
    };
    NewClass.prototype.skill1 = function () {
    };
    NewClass.prototype.skill2 = function () {
    };
    NewClass.prototype.shoot = function () {
        if (this.isSKill)
            return;
        // if (this.isRun) return;
        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
            var bullet = 1;
            // this.anim.play("atk")
            if (this.isAD) {
                if (this.enemyArr[0] && this.enemyArr[0].position) {
                    var posE = this.enemyArr[0].position;
                    // this.node.scaleX = (this.node.x > posE.x) ? this.isLocalScale : -this.isLocalScale;
                    this.anim.node.angle = this.checkAngle(this.enemyArr[0]) - 90;
                    for (var i = 0; i < bullet; i++) {
                        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                            cc.audioEngine.play(this.atkSound, false, 0.5);
                            var bullet_1 = cc.instantiate(this.heroBullet);
                            var pos2 = posE.add(cc.v3(50 * i, 50 * i));
                            // let pos = (this.anim.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
                            var pos = this.anim.node.convertToWorldSpaceAR(cc.v3(0, 167));
                            pos = this.node.parent.convertToNodeSpaceAR(pos);
                            var angle = this.checkAngle(this.enemyArr[0]);
                            this.createBullet(bullet_1, angle, pos, pos2);
                        }
                    }
                }
            }
            else {
                if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                    this.isCountAtk++;
                    if (this.isCountAtk > 4) {
                        this.isCountAtk = 0;
                    }
                    if (!this.isHaveSkill) {
                        this.isCountAtk = 0;
                    }
                    cc.audioEngine.play(this.atkSound, false, 1);
                    var randomRate = Math.floor(Math.random() * 100) + 1;
                    var dame = this.damage;
                    this.node.scaleX = (this.node.x > this.enemyArr[0].x) ? this.isLocalScale : -this.isLocalScale;
                    if (this.isCountAtk == 4) {
                        this.skill1();
                        this.isCountAtk = 0;
                    }
                    else {
                        this.anim.play("atk");
                        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                            cc.audioEngine.play(this.atkSound, false, 0.5);
                            var bullet_2 = cc.instantiate(this.heroBullet);
                            var pos2 = this.enemyArr[0].position.add(cc.v3(50 * 0, 50 * 0));
                            var pos = (this.anim.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
                            var angle = this.checkAngle(this.enemyArr[0]);
                            if (this.node.name == "mechaman") {
                                // pos = this.node.position.add(cc.v3(187 - 69, 32 - 15))
                                pos = (this.node.scaleX < 0) ? this.node.position.add(cc.v3(200 - 69, 32 - 15)) : this.node.position.add(cc.v3(-200 + 69, 32 - 15));
                            }
                            this.createBullet(bullet_2, angle, pos, pos2);
                        }
                    }
                }
            }
        }
        else {
            this.isAttack = false;
            this.isSKill = false;
            this.idle();
        }
    };
    NewClass.prototype.checkTimePos = function (pos1, pos2) {
        var time = pos1.sub(pos2).mag() / 200;
        return time;
    };
    // moveToPos(){}
    NewClass.prototype.eventComplete = function (name) {
        switch (name) {
            case "atk":
                if (this.enemyArr.length == 0) {
                    this.idle();
                }
                else {
                    this.shoot();
                }
                if (this.enemyArr[0]) {
                    this.enemyArr[0].getComponent(enemy_1.default).attacked(this.damage);
                }
                break;
            case "skill1":
                this.isSKill = false;
                if (this.enemyArr.length == 0) {
                    this.idle();
                }
                else {
                    this.shoot();
                }
                if (this.enemyArr[0]) {
                    this.enemyArr[0].getComponent(enemy_1.default).attacked(this.damage);
                }
                break;
            case "skill2":
                this.isSKill = false;
                if (this.enemyArr.length == 0) {
                    this.idle();
                }
                else {
                    this.shoot();
                }
                break;
        }
    };
    NewClass.prototype.stopG = function () {
        this.unscheduleAllCallbacks();
        this.anim.unscheduleAllCallbacks();
        this.anim.play("idle");
        this.isRun = false;
    };
    NewClass.prototype.createBullet = function (bullet, angle, pos, pos2, speed) {
        if (speed === void 0) { speed = 0.35; }
        this.node.parent.addChild(bullet);
        if (this.node.name != "kazetsu") {
            bullet.angle = angle;
        }
        bullet.setPosition(pos);
        var param = 1500;
        var angle2 = this.checkAngle2(this.node.position, pos2);
        angle2 = cc.misc.degreesToRadians(angle2);
        var pos3 = this.node.position.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)));
        cc.tween(bullet).to(1.5, { position: pos3 }).call(function () {
            bullet.destroy();
            // if (bullet.getChildByName('explode')) {
            //     bullet.getChildByName('explode').active = true;
            // }
            // bullet.getChildByName('icon').active = false;
        }).start();
    };
    NewClass.prototype.checkAngle = function (targetEnemy) {
        if (this.enemyArr.length > 0 && this.enemyArr && this.enemyArr[0]) {
            var target = targetEnemy;
            var tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (this.node.x <= target.x) ? angle : angle + 180;
            return angle;
        }
    };
    NewClass.prototype.update = function (dt) {
        if (!this.isEnd) {
            if (this.moveDir && this.directionX && this.isRun && !this.isDie) {
                var newPos = this.node.position.add(this.moveDir.mul(this.speed / 60));
                // this.node.angle = this.checkAngle1(newPos);
                if (this.enemyArr.length == 0) {
                    this.node.getChildByName("icon").angle = this.checkAngle2(this.node.position, newPos) - 90;
                }
                this.node.setPosition(newPos);
                // if (this.moveDir && !this.isSKill) {
                //     if (this.moveDir.x > 0) {
                //         this.node.scaleX = -this.isLocalScale;
                //     }
                //     else {
                //         this.node.scaleX = this.isLocalScale;
                //     }
                // }
            }
            else {
                if (this.isMain == false && this.isRun) {
                    this.node.angle = this.checkAngle1(this.gamePlay.hero.position.add(this.localPos));
                    this.node.position = this.gamePlay.hero.position.add(this.localPos);
                }
            }
            // if (this.isRun == false) {
            //     if (this.enemyArr.length > 0 && this.enemyArr && !this.isDie) {
            //         let target = this.enemyArr[0];
            //     }
            // }
            // if (this.levelNode) {
            //     this.levelNode.scaleX = (this.node.scaleX > 0) ? 1 : -1;
            // }
            // if (this.localPos) {
            //     this.node.position = this.gamePlay.hero.position.add(this.localPos)
            // }
            // if (this.node.getChildByName("preNoti")) {
            //     this.node.getChildByName("preNoti").scaleX = (this.node.scaleX > 0) ? 1 : -1;
            // }
        }
    };
    NewClass.prototype.checkAngle1 = function (posTarget) {
        // let posHero = this.node.position
        // let pos2 = target.position.add(cc.v3(-this.camera.position.x,- this.camera.position.y))
        var pos2 = posTarget;
        // pos2 = target.parent.convertToWorldSpaceAR(pos2);
        // pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
        var pos = this.node.position;
        var tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0;
        var angle = Math.atan(tan) * (180 / (Math.PI));
        angle = (pos.x <= pos2.x) ? angle : angle + 180;
        // let param = 5
        // let angle2 = this.checkAngle2(posHero, pos2)
        // angle2 = cc.misc.degreesToRadians(angle2)
        // console.log()
        // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
        return angle;
    };
    NewClass.prototype.checkPos = function (posTarget) {
        // let target = this.target;
        var son = this.node.parent;
        var pos2 = posTarget;
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
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "bodyCollider", void 0);
    __decorate([
        property(cc.CircleCollider)
    ], NewClass.prototype, "rangeCollider", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "heroBullet", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "blood", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "bloodSub", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preDamage", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "levelNode", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isHaveSkill", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "hp", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "countDown", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isAD", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isAuto", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "chopSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "skill1Sound", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preSkill1", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preSkill2", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbHP", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "isLocalScale", void 0);
    __decorate([
        property(cc.Boolean)
    ], NewClass.prototype, "isMain", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoZXJvXFxoZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF5QztBQUN6QyxrQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtZ0JDO1FBaGdCRyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixrQkFBWSxHQUFzQixJQUFJLENBQUM7UUFHdkMsbUJBQWEsR0FBc0IsSUFBSSxDQUFDO1FBR3hDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFHekIsaUJBQVcsR0FBRyxJQUFJLENBQUE7UUFFbEIsUUFBRSxHQUFHLEdBQUcsQ0FBQztRQUVULFlBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWhCLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFYixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLFlBQU0sR0FBRyxLQUFLLENBQUE7UUFFZCxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixnQkFBVSxHQUFHLElBQUks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LEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTt3QkFDYixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtxQkFDdEI7eUJBQ0k7d0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUMvQyxJQUFJLFFBQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDcEgsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlDLElBQUksSUFB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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuaW1wb3J0IEVuZW15IGZyb20gJy4uL2VuZW15J1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2hlcm8vaGVyb1wiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIGJvZHlDb2xsaWRlcjogY2MuQ2lyY2xlQ29sbGlkZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkNpcmNsZUNvbGxpZGVyKVxuICAgIHJhbmdlQ29sbGlkZXI6IGNjLkNpcmNsZUNvbGxpZGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaGVyb0J1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJsb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgYmxvb2RTdWI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVEYW1hZ2U6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsZXZlbE5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBpc0hhdmVTa2lsbCA9IHRydWVcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBocCA9IDUwMDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSA1MDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBjb3VudERvd24gPSAwLjQ7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaXNBRCA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxuICAgIGlzQXV0byA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBjaG9wU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBza2lsbDFTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVNraWxsMTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVNraWxsMjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJIUDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIGlzTG9jYWxTY2FsZSA9IDE7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgaXNNYWluID0gZmFsc2VcblxuICAgIGlzU0tpbGwgPSBmYWxzZTtcbiAgICBtb3ZlRGlyID0gbnVsbDtcbiAgICBkaXJlY3Rpb25YID0gbnVsbDtcbiAgICBpc1J1biA9IGZhbHNlO1xuICAgIGlzRGllID0gZmFsc2U7XG4gICAgc3BlZWQgPSAzMDA7XG4gICAgbWF4SHAgPSAwO1xuICAgIGVuZW15QXJyID0gW107XG4gICAgaXNBdHRhY2sgPSBmYWxzZTtcbiAgICBpc0Nob3AgPSBmYWxzZTtcbiAgICBnYW1lUGxheSA9IG51bGw7XG4gICAgaXNDb3VudEF0ayA9IDA7XG4gICAgYXJyUG9zRm9sbG93ID0gW2NjLnYzKC0yMzgsIC0yNjEpLCBjYy52MygtNDMsIC0zNTEpLCBjYy52MygtMTcwLCAtNDA1KSwgY2MudjMoLTEwMSwgNjcpXTtcbiAgICBpc0NvdW50Rm9sbG93ID0gMDtcblxuICAgIGxvY2FsUG9zID0gY2MudjMoMCwgMCk7XG4gICAgYXJySGVybyA9IFtdO1xuICAgIGFyckZ4U2tpbGwgPSBbXVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm1heEhwID0gdGhpcy5ocDtcbiAgICAgICAgdGhpcy5nYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudCgnR2FtZScpO1xuICAgICAgICAvLyB0aGlzLmFyckhlcm8gPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoJ0dhbWUyMScpLmFyckhlcm9cbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NLaWxsKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzUnVuICYmICF0aGlzLmlzRGllKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaXNSdW4gPSB0cnVlO1xuICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJtb3ZlXCIpXG4gICAgICAgICAgICAvLyB0aGlzLmlzQXR0YWNrID0gZmFsc2U7XG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIGlkbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1J1biAmJiAhdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5hbmltLnBsYXkoXCJpZGxlXCIpXG4gICAgICAgICAgICB0aGlzLmlzU0tpbGwgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29saWRlcigpIHtcbiAgICAgICAgdGhpcy5ib2R5Q29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmFuZ2VDb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaXNFbmQgPSBmYWxzZVxuICAgIG9mZkNvbGlkZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMuYm9keUNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yYW5nZUNvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xXG4gICAgICAgIHRoaXMuaXNBdXRvID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSdW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaHBCYXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pZGxlKCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZ4QXBwZWFyXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NLaWxsKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5pc0RpZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5pc0F0dGFjayA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTS2lsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheShcImlkbGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc2hvd05vdGkoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByZU5vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgfVxuICAgIGF0dGFjaygpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzUnVuLHRoaXMuZW5lbXlBcnIubGVuZ3RoKVxuICAgICAgICAvLyB0aGlzLmVuZW15QXJyLnB1c2goZW5lbXkpXG5cbiAgICAgICAgLy8gaWYgKHRoaXMuaXNSdW4pIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcblxuICAgICAgICAgICAgICAgIH0sIDAuMylcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F0dGFjayA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXREZWZhdWx0KCkge1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5pc0F0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUnVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWRsZSgpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmeEFwcGVhclwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibmFwZGFuXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmNyZWF0ZUFtbW8odGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MygtNTAsIDUwKSkpXG5cbiAgICAgICAgfSwgMC4yKVxuICAgIH1cbiAgICBtb3ZlVG9Qb3MocG9zLCB0aW1lKSB7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKHRpbWUsIHsgcG9zaXRpb246IHBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIG1vdmVCeVBvcyhwb3MsIHRpbWUpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJtb3ZlXCIpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkodGltZSwgeyBwb3NpdGlvbjogcG9zIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJpZGxlXCIpXG4gICAgICAgICAgICB0aGlzLm9uQ29saWRlcigpXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RpZSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xuICAgICAgICB0aGlzLmxiSFAuc3RyaW5nID0gdGhpcy5ocC50b1N0cmluZygpXG4gICAgICAgIHRoaXMuYmxvb2QuZmlsbFJhbmdlID0gdGhpcy5ocCAvIHRoaXMubWF4SHA7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICBpZiAodGhpcy5ocCA8PSAxMDApIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5ocCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJvZHlDb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW0udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrQW5nbGUyKHBvczEsIHBvczIpIHtcbiAgICAvLyAgICAgbGV0IHRhbiA9IE1hdGguYWJzKHBvczIueSAtIHBvczEueSkgLyBNYXRoLmFicyhwb3MyLnggLSBwb3MxLngpO1xuICAgIC8vICAgICBpZiAocG9zMi55ID09IHBvczEueSkge1xuICAgIC8vICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCkgcmV0dXJuIDA7XG4gICAgLy8gICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54KSByZXR1cm4gMTgwO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgaWYgKHBvczIueCA9PSBwb3MxLngpIHtcbiAgICAvLyAgICAgICAgIGlmIChwb3MyLnkgPiBwb3MxLnkpIHJldHVybiA5MDtcbiAgICAvLyAgICAgICAgIGlmIChwb3MyLnkgPCBwb3MxLnkpIHJldHVybiAtOTA7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHBvczEueCA9PSBwb3MyLnggJiYgcG9zMS55ID09IHBvczIueSkgcmV0dXJuIDA7XG4gICAgLy8gICAgIGlmIChwb3MxLnggIT09IHBvczIueCAmJiBwb3MxLnkgIT09IHBvczIueSkge1xuICAgIC8vICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPiBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpO1xuICAgIC8vICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPCBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpICogLTE7XG4gICAgLy8gICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54ICYmIHBvczIueSA+IHBvczEueSkgcmV0dXJuICgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAvLyAgICAgICAgIGlmIChwb3MyLnggPCBwb3MxLnggJiYgcG9zMi55IDwgcG9zMS55KSByZXR1cm4gLSgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICByZW1vdmVFbmVteShpZEVuZW15KSB7XG4gICAgICAgIHRoaXMuZW5lbXlBcnIuZm9yRWFjaCgoZW5lbXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5lbXkuX2lkID09IGlkRW5lbXkpIHRoaXMuZW5lbXlBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNrID0gZmFsc2VcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU0tpbGwgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUVuZW15Mihub2RlKSB7XG4gICAgICAgIHRoaXMuZW5lbXlBcnIuZm9yRWFjaCgoZW5lbXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5lbXkgPT0gbm9kZSkgdGhpcy5lbmVteUFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNrID0gZmFsc2U7XG5cblxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrMSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNrID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBza2lsbDEoKSB7XG5cbiAgICB9XG4gICAgc2tpbGwyKCkge1xuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NLaWxsKSByZXR1cm47XG4gICAgICAgIC8vIGlmICh0aGlzLmlzUnVuKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IDE7XG4gICAgICAgICAgICAvLyB0aGlzLmFuaW0ucGxheShcImF0a1wiKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBRCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyWzBdICYmIHRoaXMuZW5lbXlBcnJbMF0ucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0UgPSB0aGlzLmVuZW15QXJyWzBdLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnggPiBwb3NFLngpID8gdGhpcy5pc0xvY2FsU2NhbGUgOiAtdGhpcy5pc0xvY2FsU2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5ub2RlLmFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRoaXMuZW5lbXlBcnJbMF0pIC0gOTA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVsbGV0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdGtTb3VuZCwgZmFsc2UsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVyb0J1bGxldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSBwb3NFLmFkZChjYy52Myg1MCAqIGksIDUwICogaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBwb3MgPSAodGhpcy5hbmltLm5vZGUuc2NhbGVYIDwgMCkgPyB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSkgOiB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuYW5pbS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAxNjcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY2hlY2tBbmdsZSh0aGlzLmVuZW15QXJyWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ291bnRBdGsrK1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvdW50QXRrID4gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50QXRrID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0hhdmVTa2lsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50QXRrID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdGtTb3VuZCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tUmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGFtZSA9IHRoaXMuZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnggPiB0aGlzLmVuZW15QXJyWzBdLngpID8gdGhpcy5pc0xvY2FsU2NhbGUgOiAtdGhpcy5pc0xvY2FsU2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ291bnRBdGsgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbDEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50QXRrID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA+IDAgJiYgdGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdGtTb3VuZCwgZmFsc2UsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVyb0J1bGxldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLmVuZW15QXJyWzBdLnBvc2l0aW9uLmFkZChjYy52Myg1MCAqIDAsIDUwICogMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSAodGhpcy5hbmltLm5vZGUuc2NhbGVYIDwgMCkgPyB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSkgOiB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDAsIDMwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlKHRoaXMuZW5lbXlBcnJbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIm1lY2hhbWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MygxODcgLSA2OSwgMzIgLSAxNSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9ICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkgPyB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKDIwMCAtIDY5LCAzMiAtIDE1KSkgOiB0aGlzLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKC0yMDAgKyA2OSwgMzIgLSAxNSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJ1bGxldCwgYW5nbGUsIHBvcywgcG9zMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNBdHRhY2sgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc1NLaWxsID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tUaW1lUG9zKHBvczEsIHBvczIpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBwb3MxLnN1Yihwb3MyKS5tYWcoKSAvIDIwMDtcbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfVxuICAgIC8vIG1vdmVUb1Bvcygpe31cblxuICAgIGV2ZW50Q29tcGxldGUobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhdGtcIjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUFyclswXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15QXJyWzBdLmdldENvbXBvbmVudChFbmVteSkuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmlzU0tpbGwgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlBcnJbMF0uZ2V0Q29tcG9uZW50KEVuZW15KS5hdHRhY2tlZCh0aGlzLmRhbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTS2lsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW15QXJyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcEcoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXG4gICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKClcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJpZGxlXCIpXG4gICAgICAgIHRoaXMuaXNSdW4gPSBmYWxzZVxuICAgIH1cblxuICAgIGNyZWF0ZUJ1bGxldChidWxsZXQsIGFuZ2xlLCBwb3MsIHBvczIsIHNwZWVkID0gMC4zNSkge1xuXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lICE9IFwia2F6ZXRzdVwiKSB7XG4gICAgICAgICAgICBidWxsZXQuYW5nbGUgPSBhbmdsZVxuXG4gICAgICAgIH1cblxuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgbGV0IHBhcmFtID0gMTUwMDtcbiAgICAgICAgbGV0IGFuZ2xlMiA9IHRoaXMuY2hlY2tBbmdsZTIodGhpcy5ub2RlLnBvc2l0aW9uLCBwb3MyKVxuICAgICAgICBhbmdsZTIgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUyKVxuICAgICAgICBsZXQgcG9zMyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMocGFyYW0gKiBNYXRoLmNvcyhhbmdsZTIpLCBwYXJhbSAqIE1hdGguc2luKGFuZ2xlMikpKVxuXG4gICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkudG8oMS41LCB7IHBvc2l0aW9uOiBwb3MzIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKVxuICAgICAgICAgICAgLy8gaWYgKGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpKSB7XG4gICAgICAgICAgICAvLyAgICAgYnVsbGV0LmdldENoaWxkQnlOYW1lKCdleHBsb2RlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGNoZWNrQW5nbGUodGFyZ2V0RW5lbXkpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCAmJiB0aGlzLmVuZW15QXJyICYmIHRoaXMuZW5lbXlBcnJbMF0pIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0YXJnZXRFbmVteTtcbiAgICAgICAgICAgIGxldCB0YW4gPSAodGFyZ2V0LnggLSB0aGlzLm5vZGUueCAhPT0gMCkgPyAodGFyZ2V0LnkgLSB0aGlzLm5vZGUueSAtIDMwKSAvICh0YXJnZXQueCAtIHRoaXMubm9kZS54KSA6IDBcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbih0YW4pICogKDE4MCAvIChNYXRoLlBJKSk7XG4gICAgICAgICAgICBhbmdsZSA9ICh0aGlzLm5vZGUueCA8PSB0YXJnZXQueCkgPyBhbmdsZSA6IGFuZ2xlICsgMTgwXG4gICAgICAgICAgICByZXR1cm4gYW5nbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuZCkge1xuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5kaXJlY3Rpb25YICYmIHRoaXMuaXNSdW4gJiYgIXRoaXMuaXNEaWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh0aGlzLm1vdmVEaXIubXVsKHRoaXMuc3BlZWQgLyA2MCkpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuY2hlY2tBbmdsZTEobmV3UG9zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmFuZ2xlID0gdGhpcy5jaGVja0FuZ2xlMih0aGlzLm5vZGUucG9zaXRpb24sIG5ld1BvcykgLSA5MDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLm1vdmVEaXIgJiYgIXRoaXMuaXNTS2lsbCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5tb3ZlRGlyLnggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLXRoaXMuaXNMb2NhbFNjYWxlO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuaXNMb2NhbFNjYWxlO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01haW4gPT0gZmFsc2UgJiYgdGhpcy5pc1J1bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSB0aGlzLmNoZWNrQW5nbGUxKHRoaXMuZ2FtZVBsYXkuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5sb2NhbFBvcykpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuZ2FtZVBsYXkuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5sb2NhbFBvcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzUnVuID09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuZW5lbXlBcnIubGVuZ3RoID4gMCAmJiB0aGlzLmVuZW15QXJyICYmICF0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmVuZW15QXJyWzBdO1xuXG5cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5sZXZlbE5vZGUpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxldmVsTm9kZS5zY2FsZVggPSAodGhpcy5ub2RlLnNjYWxlWCA+IDApID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5sb2NhbFBvcykge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuZ2FtZVBsYXkuaGVyby5wb3NpdGlvbi5hZGQodGhpcy5sb2NhbFBvcylcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcmVOb3RpXCIpKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJlTm90aVwiKS5zY2FsZVggPSAodGhpcy5ub2RlLnNjYWxlWCA+IDApID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgY2hlY2tBbmdsZTEocG9zVGFyZ2V0KSB7XG4gICAgICAgIC8vIGxldCBwb3NIZXJvID0gdGhpcy5ub2RlLnBvc2l0aW9uXG4gICAgICAgIC8vIGxldCBwb3MyID0gdGFyZ2V0LnBvc2l0aW9uLmFkZChjYy52MygtdGhpcy5jYW1lcmEucG9zaXRpb24ueCwtIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkpKVxuICAgICAgICBsZXQgcG9zMiA9IHBvc1RhcmdldFxuXG4gICAgICAgIC8vIHBvczIgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MyKTtcbiAgICAgICAgLy8gcG9zMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMik7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb25cbiAgICAgICAgbGV0IHRhbiA9IChwb3MyLnggLSBwb3MueCAhPT0gMCkgPyAocG9zMi55IC0gcG9zLnkgLSAzMCkgLyAocG9zMi54IC0gcG9zLngpIDogMFxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4odGFuKSAqICgxODAgLyAoTWF0aC5QSSkpO1xuICAgICAgICBhbmdsZSA9IChwb3MueCA8PSBwb3MyLngpID8gYW5nbGUgOiBhbmdsZSArIDE4MDtcbiAgICAgICAgLy8gbGV0IHBhcmFtID0gNVxuICAgICAgICAvLyBsZXQgYW5nbGUyID0gdGhpcy5jaGVja0FuZ2xlMihwb3NIZXJvLCBwb3MyKVxuICAgICAgICAvLyBhbmdsZTIgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUyKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWCA9IChwb3MueCA8PSB0YXJnZXQueCkgPyAwLjUgOiAtMC41O1xuICAgICAgICByZXR1cm4gYW5nbGU7XG5cblxuXG5cbiAgICB9XG4gICAgY2hlY2tQb3MocG9zVGFyZ2V0KSB7XG4gICAgICAgIC8vIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgbGV0IHNvbiA9IHRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgbGV0IHBvczIgPSBwb3NUYXJnZXRcblxuXG4gICAgfVxuICAgIGNoZWNrQW5nbGUyKHBvczEsIHBvczIpIHtcbiAgICAgICAgbGV0IHRhbiA9IE1hdGguYWJzKHBvczIueSAtIHBvczEueSkgLyBNYXRoLmFicyhwb3MyLnggLSBwb3MxLngpO1xuICAgICAgICBpZiAocG9zMi55ID09IHBvczEueSkge1xuICAgICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCkgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54KSByZXR1cm4gMTgwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvczIueCA9PSBwb3MxLngpIHtcbiAgICAgICAgICAgIGlmIChwb3MyLnkgPiBwb3MxLnkpIHJldHVybiA5MDtcbiAgICAgICAgICAgIGlmIChwb3MyLnkgPCBwb3MxLnkpIHJldHVybiAtOTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvczEueCA9PSBwb3MyLnggJiYgcG9zMS55ID09IHBvczIueSkgcmV0dXJuIDA7XG4gICAgICAgIGlmIChwb3MxLnggIT09IHBvczIueCAmJiBwb3MxLnkgIT09IHBvczIueSkge1xuICAgICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPiBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpO1xuICAgICAgICAgICAgaWYgKHBvczIueCA+IHBvczEueCAmJiBwb3MyLnkgPCBwb3MxLnkpIHJldHVybiBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpICogLTE7XG4gICAgICAgICAgICBpZiAocG9zMi54IDwgcG9zMS54ICYmIHBvczIueSA+IHBvczEueSkgcmV0dXJuICgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAgICAgICAgIGlmIChwb3MyLnggPCBwb3MxLnggJiYgcG9zMi55IDwgcG9zMS55KSByZXR1cm4gLSgxODAgLSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKHRhbikpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
