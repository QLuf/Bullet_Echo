"use strict";
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