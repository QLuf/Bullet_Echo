
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