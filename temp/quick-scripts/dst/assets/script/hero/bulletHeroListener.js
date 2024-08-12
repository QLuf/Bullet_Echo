
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