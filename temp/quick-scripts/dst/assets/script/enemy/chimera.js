
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/chimera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c3f3lDTO9Cd7QfUiTKBrTr', 'chimera');
// script/enemy/chimera.ts

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
        _this.thunderPre = null;
        _this.soundThunder = null;
        _this.soundSkill1 = null;
        _this.soundSkill2 = null;
        _this.isCountDowskill = false;
        _this.isAtk = false;
        return _this;
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
        this.countAtk++;
        switch (this.countAtk) {
            case 1:
                cc.audioEngine.play(this.atkSOund, false, 1);
                this.anim.play("atk");
                break;
            case 2:
                this.skill1();
                break;
            case 3:
                this.skill2();
                this.countAtk = 0;
                break;
            default:
                // this.countAtk++;
                // this.skill1()
                break;
        }
    };
    NewClass.prototype.skill1 = function () {
        var _this = this;
        if (this.isSkill)
            return;
        this.isSkill = true;
        this.anim.play("skill1");
        cc.audioEngine.play(this.soundSkill1, false, 1);
        this.scheduleOnce(function () {
            var thunder = cc.instantiate(_this.thunderPre);
            thunder.parent = _this.node.parent;
            thunder.position = cc.v3(60, 180);
            cc.audioEngine.play(_this.soundThunder, false, 1);
            // thunder.position=cc.v3(0,0)
        }, 0.7);
    };
    NewClass.prototype.skill2 = function () {
        if (this.isSkill)
            return;
        cc.audioEngine.play(this.soundSkill2, false, 1);
        this.isSkill = true;
        this.anim.play("skill2");
    };
    NewClass.prototype.completeEvent = function (type) {
        this.isSkill = false;
        switch (type) {
            case "skill2":
                this.atkList();
                console.log("skill2");
                break;
            case "skill1":
                this.atkList();
                console.log("skill1");
                break;
            case "atk":
                this.atkList();
                console.log("atk");
                break;
        }
    };
    NewClass.prototype.addEvent = function (type) {
        switch (type) {
            case "skill2":
                this.skill2Node.getComponent(cc.Animation).play();
                break;
            case "skill1":
                this.skill1Node.getComponent(cc.Animation).play();
                break;
        }
    };
    NewClass.prototype.exitTarget = function () {
        if (this.arrHero.length <= 0) {
            this.isSkill = false;
            this.isMeet = false;
            this.isAtk = false;
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
        property(cc.Node)
    ], NewClass.prototype, "skill1Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preBullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "atkSOund", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "thunderPre", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundThunder", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSkill1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "soundSkill2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcY2hpbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrQ0FBNEI7QUFDdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQUs7SUFBM0M7UUFBQSxxRUF5SEM7UUF2SEcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsY0FBUSxHQUFpQixJQUFJLENBQUE7UUFFN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUE7UUFFNUIsa0JBQVksR0FBaUIsSUFBSSxDQUFBO1FBRWpDLGlCQUFXLEdBQWlCLElBQUksQ0FBQTtRQUVoQyxpQkFBVyxHQUFpQixJQUFJLENBQUE7UUFDaEMscUJBQWUsR0FBRyxLQUFLLENBQUE7UUFDdkIsV0FBSyxHQUFHLEtBQUssQ0FBQTs7SUFzR2pCLENBQUM7SUFyR0cseUJBQU0sR0FBTixVQUFPLE1BQU07UUFBYixpQkFTQztRQVJHLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xC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SHFDLGVBQUssR0F5SDFDO2tCQXpIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGVuZW15IGZyb20gXCIuLi9lbmVteVwiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBlbmVteSB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2tpbGwyTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2tpbGwxTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHRodW5kZXJQcmU6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kVGh1bmRlcjogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc291bmRTa2lsbDE6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHNvdW5kU2tpbGwyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgaXNDb3VudERvd3NraWxsID0gZmFsc2VcbiAgICBpc0F0ayA9IGZhbHNlXG4gICAgYXR0YWNrKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5pc0F0aykgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzQXRrID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzTWVldCA9IHRydWU7XG4gICAgICAgIGxldCB0YXJnZXRDb21wID0gdGFyZ2V0LmdldENvbXBvbmVudCgnaGVybycpO1xuICAgICAgICB0aGlzLmFuaW0uc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldENvbXAuYXR0YWNrZWQodGhpcy5kYW1hZ2UpO1xuICAgICAgICB9LCAwLjMpXG4gICAgICAgIHRoaXMuYXRrTGlzdCgpXG4gICAgfVxuICAgIGF0a0xpc3QoKSB7XG5cbiAgICAgICAgdGhpcy5jb3VudEF0aysrXG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmNvdW50QXRrKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF0a1NPdW5kLGZhbHNlLDEpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsgPSAwXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY291bnRBdGsrKztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBza2lsbDEoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2tpbGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJza2lsbDFcIik7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNraWxsMSxmYWxzZSwxKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGh1bmRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGh1bmRlclByZSlcbiAgICAgICAgICAgIHRodW5kZXIucGFyZW50PXRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgICAgIHRodW5kZXIucG9zaXRpb249Y2MudjMoNjAsMTgwKVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kVGh1bmRlcixmYWxzZSwxKVxuICAgICAgICAgICAgLy8gdGh1bmRlci5wb3NpdGlvbj1jYy52MygwLDApXG4gICAgICAgIH0sMC43KVxuXG4gICAgfVxuICAgIHNraWxsMigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTa2lsbCkgcmV0dXJuO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTa2lsbDIsZmFsc2UsMSlcblxuICAgICAgICB0aGlzLmlzU2tpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcInNraWxsMlwiKTtcblxuICAgIH1cbiAgICBjb21wbGV0ZUV2ZW50KHR5cGUpIHtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hdGtMaXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJza2lsbDJcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmF0a0xpc3QoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2tpbGwxXCIpXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhdGtcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmF0a0xpc3QoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXRrXCIpXG5cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50KHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDJOb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwxTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpdFRhcmdldCgpIHtcblxuICAgICAgICBpZiAodGhpcy5hcnJIZXJvLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2tpbGwgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc01lZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNBdGsgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKVxuICAgICAgICAgICAgLy8gdGhpcy5ib2R5U2tlbGV0b24udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5hbmltLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuXG59XG4iXX0=