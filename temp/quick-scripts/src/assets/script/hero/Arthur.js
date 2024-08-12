"use strict";
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