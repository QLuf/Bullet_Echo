
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