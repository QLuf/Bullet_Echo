"use strict";
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