"use strict";
cc._RF.push(module, 'd6454C1o/5IrbFDTrPsrykv', 'Circle');
// script/hero/Circle.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetHero = null;
        _this.enemyArr = [];
        _this.gamePlay = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    };
    NewClass.prototype.checkAtk = function () {
        if (this.enemyArr.length > 0) {
            console.log("atk", this.gamePlay.arrHero);
            for (var _i = 0, _a = this.gamePlay.arrHero; _i < _a.length; _i++) {
                var child = _a[_i];
                child.getComponent(hero_1.default).enemyArr = this.enemyArr;
                child.getComponent(hero_1.default).attack(this.enemyArr[0]);
            }
            // this.attack()
        }
        else {
            for (var _b = 0, _c = this.gamePlay.arrHero; _b < _c.length; _b++) {
                var child = _c[_b];
                child.getComponent(hero_1.default).stop();
            }
        }
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.name == "circleUpdate") {
            other.node.color = cc.Color.GREEN;
            other.node.parent.getComponent("house").checkUpdate();
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.node.name == "circleUpdate") {
            other.node.color = cc.Color.WHITE;
            // this.enemyArr.push(other.node);
            // this.target.getComponent(hero).enemyArr.push(other.node.getComponent(EL).target);
        }
        // if (other.node.getComponent(EL)) {
        //     for (let child of this.gamePlay.arrHero) {
        //         child.getComponent(hero).removeEnemy(other.node._id);
        //     }
        //     this.removeEnemy(other.node._id);
        //     if (this.enemyArr.length == 0) {
        //         this.node.color = cc.color().fromHEX("#98DBF5")
        //     }
        // }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        // if (other.node.getComponent(EL) && other.node.getComponent(EL).target && this.target.getComponent(hero).isAttack == false) {
        //     // this.target.getComponent(hero).attack();
        // }
        if (other.node.name == "circleUpdate") {
            other.node.parent.getComponent("house").checkUpdate();
        }
    };
    NewClass.prototype.removeEnemy = function (idEnemy) {
        var _this = this;
        this.enemyArr.forEach(function (enemy, index) {
            if (enemy._id == idEnemy)
                _this.enemyArr.splice(index, 1);
        });
        if (this.enemyArr.length == 0) {
            for (var _i = 0, _a = this.gamePlay.arrHero; _i < _a.length; _i++) {
                var child = _a[_i];
                child.getComponent(hero_1.default).stop();
            }
        }
    };
    NewClass.prototype.update = function (dt) {
        this.node.position = this.targetHero.position;
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "targetHero", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();