
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