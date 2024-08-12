"use strict";
cc._RF.push(module, '936b5N+F35Bvor1whG6l4d+', 'arrow');
// script/PH_21/arrow.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.target = null;
        _this.param = 100;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.checkAngle = function () {
        if (this.target != null) {
            var posHero = cc.Canvas.instance.node.getComponent("Game21").hero.position;
            var target = this.target;
            // let pos2 = target.position.add(cc.v3(-this.camera.position.x,- this.camera.position.y))
            var pos2 = target.position;
            pos2 = target.parent.convertToWorldSpaceAR(pos2);
            pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
            var pos = this.node.position;
            var tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0;
            var angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (pos.x <= pos2.x) ? angle : angle + 180;
            var param = this.param;
            var angle2 = this.checkAngle2(posHero, pos2);
            angle2 = cc.misc.degreesToRadians(angle2);
            var pos3 = posHero.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)));
            this.node.position = pos3;
            // console.log()
            // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            return angle;
        }
    };
    NewClass.prototype.checkPos = function () {
        var target = this.target;
        var son = this.node.parent;
        var pos2 = target.position;
        pos2 = target.parent.convertToWorldSpaceAR(pos2);
        pos2 = son.parent.convertToNodeSpaceAR(pos2);
        // if(son.y>=pos2.y){
        // if (son.x <= pos2.x) {
        // this.node.position = cc.v3(138, 66)
        // } else if (son.x > pos2.x) {
        // }
        // this.node.position = cc.v3(165, 66)
        // }
        // else{
        //     if (son.x > pos2.x) {
        //         this.node.position = cc.v3(138, 66)
        //     } else if (son.x < pos2.x) {
        //         this.node.position = cc.v3(165, 66)
        //     }
        // }
    };
    NewClass.prototype.checkAngle2 = function (pos1, pos2) {
        var tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
        if (pos2.y == pos1.y) {
            if (pos2.x > pos1.x)
                return 0;
            if (pos2.x < pos1.x)
                return 180;
        }
        if (pos2.x == pos1.x) {
            if (pos2.y > pos1.y)
                return 90;
            if (pos2.y < pos1.y)
                return -90;
        }
        if (pos1.x == pos2.x && pos1.y == pos2.y)
            return 0;
        if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
            if (pos2.x > pos1.x && pos2.y > pos1.y)
                return cc.misc.radiansToDegrees(Math.atan(tan));
            if (pos2.x > pos1.x && pos2.y < pos1.y)
                return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
            if (pos2.x < pos1.x && pos2.y > pos1.y)
                return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
            if (pos2.x < pos1.x && pos2.y < pos1.y)
                return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
        }
    };
    NewClass.prototype.update = function (dt) {
        this.node.angle = this.checkAngle();
        // this.checkPos()
        // this.icon.angle = -this.node.angle;
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