
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