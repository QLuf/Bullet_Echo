
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/darkOctopus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '296c2kQR8NJe62OUx72go0Y', 'darkOctopus');
// script/enemy/darkOctopus.ts

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
var enemy_1 = require("../enemy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atk_around = null;
        _this.atk_down = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.isCountDowskill = false;
        return _this;
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        // targetComp.attacked(this.damage);
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.atkList(target);
        this.anim.schedule(function () {
            if (_this.isMeet) {
                _this.atkList(target);
                _this.anim.scheduleOnce(function () {
                    targetComp.attacked(_this.damage);
                }, 0.3);
            }
        }, 1.2, cc.macro.REPEAT_FOREVER, 0.6);
    };
    NewClass.prototype.atkList = function (target) {
        var _this = this;
        this.anim.play("atk");
        if (!this.isCountDowskill) {
            this.isCountDowskill = true;
            cc.audioEngine.play(this.atkSOund, false, 0.8);
            this.scheduleOnce(function () {
                _this.isCountDowskill = false;
            }, 0.2);
        }
        switch (this.countAtk) {
            case 2:
                this.countAtk = 0;
                this.doubleAtk(target);
                break;
            case 1:
                this.countAtk++;
                this.createAtkAround(target);
                this.btn_skillCircle();
                break;
            default:
                this.countAtk++;
                this.createAtkDown(target);
                break;
        }
    };
    NewClass.prototype.doubleAtk = function (target) {
        for (var i = 0; i < 2; i++) {
            var atk = cc.instantiate(this.atk_down);
            atk.parent = this.node.parent.parent.parent;
            var pos = target.parent.convertToWorldSpaceAR(target.position);
            pos = this.node.parent.parent.parent.convertToNodeSpaceAR(pos);
            atk.position = pos;
            atk.scaleX = ((i == 0) ? -1 : 1) * atk.scaleX;
            atk.zIndex = 2;
        }
    };
    NewClass.prototype.createAtkDown = function (target) {
        var atk = cc.instantiate(this.atk_down);
        atk.parent = this.node.parent.parent;
        var pos = target.parent.convertToWorldSpaceAR(target.position);
        pos = this.node.parent.parent.convertToNodeSpaceAR(pos);
        atk.scaleX = ((pos.x > this.node.x) ? -1 : 1) * atk.scaleX;
        atk.position = pos;
        atk.zIndex = 2;
    };
    NewClass.prototype.createAtkAround = function (target) {
        var atk = cc.instantiate(this.atk_around);
        atk.parent = this.node.parent.parent;
        var pos = target.parent.convertToWorldSpaceAR(target.position);
        pos = this.node.parent.parent.convertToNodeSpaceAR(pos);
        atk.position = pos;
        atk.zIndex = 2;
    };
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isMeet = false;
            this.anim.play("idle");
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    NewClass.prototype.btn_skillCircle = function () {
        // for (let i = 0; i < 12; i++) {
        //     let rd = Math.floor(Math.random() * 2)
        //     let bullet = cc.instantiate(this.preBullet);
        //     let angle = (-Math.PI) + (Math.PI * i / 6);
        //     let pos = cc.v3(0, 0);
        //     this.node.addChild(bullet);
        //     bullet.zIndex=cc.macro.MIN_ZINDEX
        //     bullet.setPosition(pos.add(cc.v3(0, -50)));
        //     // bullet.getChildByName("circle").children[0].color = new cc.Color().fromHEX("#4ED3EC");
        //     bullet.scale = 0.4
        //     let param = (this.node.scaleX < 0) ? (-400 - 50 * rd) : (400 + 50 * rd)
        //     cc.tween(bullet).to(1, { position: cc.v3(param * Math.cos(angle), param * Math.sin(angle)).add(cc.v3(0, -50)) }).call(() => {
        //         // bullet.getComponent(cc.Animation).play()
        //    bullet.destroy()
        //     }).start();
        // }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "atk_around", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "atk_down", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(enemy_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZGFya09jdG9wdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0NBQTRCO0FBQ3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFLO0lBQTNDO1FBQUEscUVBMEhDO1FBeEhHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFDN0IscUJBQWUsR0FBRyxLQUFLLENBQUE7O0lBZ0gzQixDQUFDO0lBOUdHLHlCQUFNLEdBQU4sVUFBTyxNQUFNO1FBQWIsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0Msb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDZixJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ25CLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0s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a0NBQWUsR0FBZjtRQUNJLGlDQUFpQztRQUNqQyw2Q0FBNkM7UUFFN0MsbURBQW1EO1FBQ25ELGtEQUFrRDtRQUNsRCw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLHdDQUF3QztRQUN4QyxrREFBa0Q7UUFDbEQsZ0dBQWdHO1FBQ2hHLHlCQUF5QjtRQUN6Qiw4RUFBOEU7UUFDOUUsb0lBQW9JO1FBQ3BJLHNEQUFzRDtRQUN0RCxzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLElBQUk7SUFFUixDQUFDO0lBdkhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ007SUFUWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEg1QjtJQUFELGVBQUM7Q0ExSEQsQUEwSEMsQ0ExSHFDLGVBQUssR0EwSDFDO2tCQTFIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGVuZW15IGZyb20gXCIuLi9lbmVteVwiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBlbmVteSB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBhdGtfYXJvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYXRrX2Rvd246IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBpc0NvdW50RG93c2tpbGwgPSBmYWxzZVxuXG4gICAgYXR0YWNrKHRhcmdldCkge1xuICAgICAgICB0aGlzLmlzTWVldCA9IHRydWU7XG4gICAgICAgIGxldCB0YXJnZXRDb21wID0gdGFyZ2V0LmdldENvbXBvbmVudCgnaGVybycpO1xuICAgICAgICAvLyB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcblxuICAgICAgICB9LCAwLjMpXG4gICAgICAgIHRoaXMuYXRrTGlzdCh0YXJnZXQpXG5cbiAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWVldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXRrTGlzdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxLjIsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwLjYpO1xuICAgIH1cbiAgICBhdGtMaXN0KHRhcmdldCkge1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcImF0a1wiKVxuICAgICAgICBpZiAoIXRoaXMuaXNDb3VudERvd3NraWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3dza2lsbCA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXRrU091bmQsIGZhbHNlLCAwLjgpXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93c2tpbGwgPSBmYWxzZTtcblxuICAgICAgICAgICAgfSwgMC4yKVxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3VudEF0aykge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZG91YmxlQXRrKHRhcmdldClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrKytcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUF0a0Fyb3VuZCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fc2tpbGxDaXJjbGUoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrKys7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBdGtEb3duKHRhcmdldClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb3VibGVBdGsodGFyZ2V0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXRrID0gY2MuaW5zdGFudGlhdGUodGhpcy5hdGtfZG93bik7XG4gICAgICAgICAgICBhdGsucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldC5wb3NpdGlvbik7XG4gICAgICAgICAgICBwb3MgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgIGF0ay5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIGF0ay5zY2FsZVggPSAoKGkgPT0gMCkgPyAtMSA6IDEpICogYXRrLnNjYWxlWDtcbiAgICAgICAgICAgIGF0ay56SW5kZXggPSAyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQXRrRG93bih0YXJnZXQpIHtcbiAgICAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Rvd24pXG4gICAgICAgIGF0ay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudDtcbiAgICAgICAgbGV0IHBvcyA9IHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldC5wb3NpdGlvbik7XG4gICAgICAgIHBvcyA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcbiAgICAgICAgYXRrLnNjYWxlWCA9ICgocG9zLnggPiB0aGlzLm5vZGUueCkgPyAtMSA6IDEpICogYXRrLnNjYWxlWFxuICAgICAgICBhdGsucG9zaXRpb24gPSBwb3NcbiAgICAgICAgYXRrLnpJbmRleCA9IDJcblxuXG4gICAgfVxuICAgIGNyZWF0ZUF0a0Fyb3VuZCh0YXJnZXQpIHtcbiAgICAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Fyb3VuZClcbiAgICAgICAgYXRrLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgICBsZXQgcG9zID0gdGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0LnBvc2l0aW9uKTtcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKVxuICAgICAgICBhdGsucG9zaXRpb24gPSBwb3NcbiAgICAgICAgYXRrLnpJbmRleCA9IDJcbiAgICB9XG4gICAgZXhpdFRhcmdldCgpIHtcbiAgICAgIFxuXG4gICAgICAgIGlmKHRoaXMuYXJySGVyby5sZW5ndGg8PTApe1xuICAgICAgICAgICAgdGhpcy5pc01lZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKVxuICAgICAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuICAgIGJ0bl9za2lsbENpcmNsZSgpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuXG4gICAgICAgIC8vICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCdWxsZXQpO1xuICAgICAgICAvLyAgICAgbGV0IGFuZ2xlID0gKC1NYXRoLlBJKSArIChNYXRoLlBJICogaSAvIDYpO1xuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IGNjLnYzKDAsIDApO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJ1bGxldCk7XG4gICAgICAgIC8vICAgICBidWxsZXQuekluZGV4PWNjLm1hY3JvLk1JTl9aSU5ERVhcbiAgICAgICAgLy8gICAgIGJ1bGxldC5zZXRQb3NpdGlvbihwb3MuYWRkKGNjLnYzKDAsIC01MCkpKTtcbiAgICAgICAgLy8gICAgIC8vIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZShcImNpcmNsZVwiKS5jaGlsZHJlblswXS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNEVEM0VDXCIpO1xuICAgICAgICAvLyAgICAgYnVsbGV0LnNjYWxlID0gMC40XG4gICAgICAgIC8vICAgICBsZXQgcGFyYW0gPSAodGhpcy5ub2RlLnNjYWxlWCA8IDApID8gKC00MDAgLSA1MCAqIHJkKSA6ICg0MDAgKyA1MCAqIHJkKVxuICAgICAgICAvLyAgICAgY2MudHdlZW4oYnVsbGV0KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MyhwYXJhbSAqIE1hdGguY29zKGFuZ2xlKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZSkpLmFkZChjYy52MygwLCAtNTApKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAvLyBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgIC8vICAgIGJ1bGxldC5kZXN0cm95KClcbiAgICAgICAgLy8gICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIC8vIH1cblxuICAgIH1cbn1cbiJdfQ==