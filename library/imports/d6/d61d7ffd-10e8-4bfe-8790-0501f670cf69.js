"use strict";
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