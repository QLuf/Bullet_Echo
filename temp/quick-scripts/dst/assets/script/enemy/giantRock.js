
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/giantRock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8d3c7Vz8pEqYExnJwTZ8pq', 'giantRock');
// script/enemy/giantRock.ts

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
        _this.skill2Node = null;
        _this.skill1Node = null;
        _this.preBullet = null;
        _this.countAtk = 0;
        _this.atkSOund = null;
        _this.isCountDowskill = false;
        _this.isAtk = false;
        return _this;
        // btn_skillCircle() {
        //     // for (let i = 0; i < 12; i++) {
        //     //     let rd = Math.floor(Math.random() * 2)
        //     //     let bullet = cc.instantiate(this.preBullet);
        //     //     let angle = (-Math.PI) + (Math.PI * i / 6);
        //     //     let pos = cc.v3(0, 0);
        //     //     this.node.addChild(bullet);
        //     //     bullet.zIndex=cc.macro.MIN_ZINDEX
        //     //     bullet.setPosition(pos.add(cc.v3(0, -50)));
        //     //     // bullet.getChildByName("circle").children[0].color = new cc.Color().fromHEX("#4ED3EC");
        //     //     bullet.scale = 0.4
        //     //     let param = (this.node.scaleX < 0) ? (-400 - 50 * rd) : (400 + 50 * rd)
        //     //     cc.tween(bullet).to(1, { position: cc.v3(param * Math.cos(angle), param * Math.sin(angle)).add(cc.v3(0, -50)) }).call(() => {
        //     //         // bullet.getComponent(cc.Animation).play()
        //     //    bullet.destroy()
        //     //     }).start();
        //     // }
        // }
    }
    NewClass.prototype.attack = function (target) {
        var _this = this;
        if (this.isAtk)
            return;
        this.isAtk = true;
        this.isMeet = true;
        var targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.atkList();
    };
    NewClass.prototype.atkList = function () {
        var _this = this;
        this.anim.play("atk");
        if (!this.isCountDowskill) {
            this.isCountDowskill = true;
            // cc.audioEngine.play(this.atkSOund, false, 0.8)
            this.scheduleOnce(function () {
                _this.isCountDowskill = false;
            }, 0.2);
        }
        switch (this.countAtk) {
            case 2:
                this.countAtk = 0;
                this.skill1();
                break;
            case 1:
                this.countAtk++;
                this.skill2();
                break;
            default:
                this.countAtk++;
                this.skill1();
                break;
        }
    };
    NewClass.prototype.skill1 = function () {
        if (this.isSkill)
            return;
        this.anim.play("skill1");
        this.isSkill = true;
        // this.scheduleOnce(() => {
        //     this.isSkill = false;
        //     this.skill2()
        // }, 0.5)
    };
    NewClass.prototype.skill2 = function () {
        if (this.isSkill)
            return;
        this.isSkill = true;
        this.anim.play("skill2");
    };
    NewClass.prototype.completeEvent = function (type) {
        this.isSkill = false;
        switch (type) {
            case "skill2":
                // this.atkList();
                this.skill1();
                break;
            case "skill1":
                // this.atkList()
                this.skill2();
                break;
        }
    };
    NewClass.prototype.addEvent = function (type) {
        switch (type) {
            case "skill2":
                // this.skill2();
                this.skill2Node.getComponent(cc.Animation).play();
                break;
            case "skill1":
                this.skill1();
                break;
        }
    };
    // doubleAtk(target) {
    //     for (let i = 0; i < 2; i++) {
    //         let atk = cc.instantiate(this.atk_down)
    //         atk.parent = this.node.parent;
    //         let pos = target.parent.convertToWorldSpaceAR(target.position);
    //         pos = this.node.parent.convertToNodeSpaceAR(pos)
    //         atk.position = pos
    //         atk.scaleX = ((i == 0) ? -1 : 1) * atk.scaleX
    //         atk.zIndex = 2
    //     }
    // }
    // createAtkDown(target) {
    //     let atk = cc.instantiate(this.atk_down)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.scaleX = ((pos.x > this.node.x) ? -1 : 1) * atk.scaleX
    //     atk.position = pos
    //     atk.zIndex = 2
    // }
    // createAtkAround(target) {
    //     let atk = cc.instantiate(this.atk_around)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.position = pos
    //     atk.zIndex = 2
    // }
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isAtk = false;
            this.isSkill = false;
            this.isMeet = false;
            this.anim.play("idle");
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill2Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skill1Node", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZ2lhbnRSb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBSztJQUEzQztRQUFBLHFFQWtLQztRQS9KRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixxQkFBZSxHQUFHLEtBQUssQ0FBQTtRQUN2QixXQUFLLEdBQUMsS0FBSyxDQUFBOztRQWtJWCxzQkFBc0I7UUFDdEIsd0NBQXdDO1FBQ3hDLG9EQUFvRDtRQUVwRCwwREFBMEQ7UUFDMUQseURBQXlEO1FBQ3pELG9DQUFvQztRQUNwQyx5Q0FBeUM7UUFDekMsK0NBQStDO1FBQy9DLHlEQUF5RDtRQUN6RCx1R0FBdUc7UUFDdkcsZ0NBQWdDO1FBQ2hDLHFGQUFxRjtRQUNyRiwySUFBMkk7UUFDM0ksNkRBQTZEO1FBQzdELDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsV0FBVztRQUVYLElBQUk7SUFDUixDQUFDO0lBckpHLHlCQUFNLEdBQU4sVUFBTyxNQUFNO1FBQWIsaUJBV0M7UUFWRyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFD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cUM7SUFDckMsc0VBQXNFO0lBQ3RFLHVEQUF1RDtJQUN2RCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLElBQUk7SUFDSiw2QkFBVSxHQUFWO1FBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFFbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdEIsOENBQThDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUN0QztJQUVMLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBTztJQUVkLENBQUM7SUExSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQVZiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrSzVCO0lBQUQsZUFBQztDQWxLRCxBQWtLQyxDQWxLcUMsZUFBSyxHQWtLMUM7a0JBbEtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZW5lbXkgZnJvbSBcIi4uL2VuZW15XCJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGVuZW15IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBza2lsbDJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNraWxsMU5vZGU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgaXNDb3VudERvd3NraWxsID0gZmFsc2VcbiAgICBpc0F0az1mYWxzZVxuICAgIGF0dGFjayh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdGspIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0F0ayA9IHRydWVcbiAgICAgICAgdGhpcy5pc01lZXQgPSB0cnVlO1xuICAgICAgICBsZXQgdGFyZ2V0Q29tcCA9IHRhcmdldC5nZXRDb21wb25lbnQoJ2hlcm8nKTtcbiAgICAgICAgdGhpcy5hbmltLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRDb21wLmF0dGFja2VkKHRoaXMuZGFtYWdlKTtcblxuICAgICAgICB9LCAwLjMpXG4gICAgICBcbiAgICAgICAgdGhpcy5hdGtMaXN0KClcbiAgICB9XG4gICAgYXRrTGlzdCgpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgaWYgKCF0aGlzLmlzQ291bnREb3dza2lsbCkge1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93c2tpbGwgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF0a1NPdW5kLCBmYWxzZSwgMC44KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd3NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH0sIDAuMilcblxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3VudEF0aykge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxKClcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsrK1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwyKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudEF0aysrO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBza2lsbDEoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2tpbGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDFcIilcblxuICAgICAgICB0aGlzLmlzU2tpbGwgPSB0cnVlO1xuXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICAvLyB9LCAwLjUpXG4gIFxuICAgIH1cbiAgICBza2lsbDIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2tpbGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDJcIik7XG5cbiAgICB9XG4gICAgY29tcGxldGVFdmVudCh0eXBlKSB7XG4gICAgICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMlwiOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYXRrTGlzdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmF0a0xpc3QoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwyKClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50KHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5za2lsbDIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMk5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwxXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDEoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZG91YmxlQXRrKHRhcmdldCkge1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgIC8vICAgICAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Rvd24pXG4gICAgLy8gICAgICAgICBhdGsucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAvLyAgICAgICAgIGxldCBwb3MgPSB0YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0YXJnZXQucG9zaXRpb24pO1xuICAgIC8vICAgICAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgICAgICBhdGsucG9zaXRpb24gPSBwb3NcbiAgICAvLyAgICAgICAgIGF0ay5zY2FsZVggPSAoKGkgPT0gMCkgPyAtMSA6IDEpICogYXRrLnNjYWxlWFxuICAgIC8vICAgICAgICAgYXRrLnpJbmRleCA9IDJcblxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gY3JlYXRlQXRrRG93bih0YXJnZXQpIHtcbiAgICAvLyAgICAgbGV0IGF0ayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXRrX2Rvd24pXG4gICAgLy8gICAgIGF0ay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgIC8vICAgICBsZXQgcG9zID0gdGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0LnBvc2l0aW9uKTtcbiAgICAvLyAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgIGF0ay5zY2FsZVggPSAoKHBvcy54ID4gdGhpcy5ub2RlLngpID8gLTEgOiAxKSAqIGF0ay5zY2FsZVhcbiAgICAvLyAgICAgYXRrLnBvc2l0aW9uID0gcG9zXG4gICAgLy8gICAgIGF0ay56SW5kZXggPSAyXG5cblxuICAgIC8vIH1cbiAgICAvLyBjcmVhdGVBdGtBcm91bmQodGFyZ2V0KSB7XG4gICAgLy8gICAgIGxldCBhdGsgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmF0a19hcm91bmQpXG4gICAgLy8gICAgIGF0ay5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgIC8vICAgICBsZXQgcG9zID0gdGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0LnBvc2l0aW9uKTtcbiAgICAvLyAgICAgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXG4gICAgLy8gICAgIGF0ay5wb3NpdGlvbiA9IHBvc1xuICAgIC8vICAgICBhdGsuekluZGV4ID0gMlxuICAgIC8vIH1cbiAgICBleGl0VGFyZ2V0KCkge1xuICAgICAgICBpZih0aGlzLmFyckhlcm8ubGVuZ3RoPD0wKXtcbiAgICAgICAgICAgIHRoaXMuaXNBdGsgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5pc1NraWxsID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNNZWV0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImlkbGVcIilcbiAgICAgICAgICAgIC8vIHRoaXMuYm9keVNrZWxldG9uLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuICAgIC8vIGJ0bl9za2lsbENpcmNsZSgpIHtcbiAgICAvLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgLy8gICAgIC8vICAgICBsZXQgcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuXG4gICAgLy8gICAgIC8vICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCdWxsZXQpO1xuICAgIC8vICAgICAvLyAgICAgbGV0IGFuZ2xlID0gKC1NYXRoLlBJKSArIChNYXRoLlBJICogaSAvIDYpO1xuICAgIC8vICAgICAvLyAgICAgbGV0IHBvcyA9IGNjLnYzKDAsIDApO1xuICAgIC8vICAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJ1bGxldCk7XG4gICAgLy8gICAgIC8vICAgICBidWxsZXQuekluZGV4PWNjLm1hY3JvLk1JTl9aSU5ERVhcbiAgICAvLyAgICAgLy8gICAgIGJ1bGxldC5zZXRQb3NpdGlvbihwb3MuYWRkKGNjLnYzKDAsIC01MCkpKTtcbiAgICAvLyAgICAgLy8gICAgIC8vIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZShcImNpcmNsZVwiKS5jaGlsZHJlblswXS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNEVEM0VDXCIpO1xuICAgIC8vICAgICAvLyAgICAgYnVsbGV0LnNjYWxlID0gMC40XG4gICAgLy8gICAgIC8vICAgICBsZXQgcGFyYW0gPSAodGhpcy5ub2RlLnNjYWxlWCA8IDApID8gKC00MDAgLSA1MCAqIHJkKSA6ICg0MDAgKyA1MCAqIHJkKVxuICAgIC8vICAgICAvLyAgICAgY2MudHdlZW4oYnVsbGV0KS50bygxLCB7IHBvc2l0aW9uOiBjYy52MyhwYXJhbSAqIE1hdGguY29zKGFuZ2xlKSwgcGFyYW0gKiBNYXRoLnNpbihhbmdsZSkpLmFkZChjYy52MygwLCAtNTApKSB9KS5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgLy8gICAgICAgICAvLyBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpXG4gICAgLy8gICAgIC8vICAgIGJ1bGxldC5kZXN0cm95KClcbiAgICAvLyAgICAgLy8gICAgIH0pLnN0YXJ0KCk7XG4gICAgLy8gICAgIC8vIH1cblxuICAgIC8vIH1cbn1cbiJdfQ==