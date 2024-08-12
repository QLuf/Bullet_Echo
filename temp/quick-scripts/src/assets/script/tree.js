"use strict";
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