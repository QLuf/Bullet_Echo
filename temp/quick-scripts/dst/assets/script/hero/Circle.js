
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