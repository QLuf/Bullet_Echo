"use strict";
cc._RF.push(module, '848935Cp+JKcKGS69AwYcRd', 'popHero');
// script/box/popHero.ts

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
        _this.icon = null;
        _this.target = null;
        _this.camera = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.checkAngle = function () {
        if (this.target != null) {
            // let target = this.target;
            // let pos2 = target.position.add(cc.v3(this.camera.position.x, -this.camera.position.y))
            // pos2 = target.parent.convertToWorldSpaceAR(target.position);
            // pos2 = this.node.convertToNodeSpaceAR(pos2);
            // let pos = this.node.position.add(cc.v3(this.camera.position.x, -this.camera.position.y))
            // pos = pos2
            // let tan = (target.x - pos.x !== 0) ? (target.y - pos.y - 30) / (target.x - pos.x) : 0
            // let angle = Math.atan(tan) * (180 / (Math.PI));
            // angle = (pos.x <= target.x) ? angle : angle + 180;
            // // console.log()
            // // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            // return angle;
            var target = this.target;
            var pos2 = target.position.add(cc.v3(-this.camera.position.x, -this.camera.position.y));
            pos2 = target.parent.convertToWorldSpaceAR(pos2);
            pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
            var pos = this.node.position;
            var tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (pos.x <= pos2.x) ? angle : angle + 180;
            // console.log()
            // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            return angle;
        }
    };
    NewClass.prototype.update = function (dt) {
        this.node.angle = this.checkAngle();
        this.icon.angle = -this.node.angle;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "camera", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();