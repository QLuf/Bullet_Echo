
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy/dragon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f75feJxmx9PNaQGrE464aVQ', 'dragon');
// script/enemy/dragon.ts

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
        // @property(cc.Prefab)
        // atk_around: cc.Prefab = null;
        // @property(cc.Prefab)
        // atk_down: cc.Prefab = null;
        _this.skill2Node = null;
        _this.skill1Pre = null;
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
        this.anim.scheduleOnce(function () {
            targetComp.attacked(_this.damage);
        }, 0.3);
        this.skill2();
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
        var _this = this;
        if (this.isSkill)
            return;
        this.isSkill = true;
        var arrBullet = [cc.v3(-231, -510), cc.v3(-126, -637), cc.v3(-325, -623), cc.v3(-142, -515),
            cc.v3(-428, -579), cc.v3(-314, -530), cc.v3(-217, -601), cc.v3(0, -534), cc.v3(-390, -540), cc.v3(50, -500),
        ];
        var _loop_1 = function (i) {
            var delay = i % 2;
            delay = delay * 0.4;
            this_1.scheduleOnce(function () {
                var bullet = cc.instantiate(_this.skill1Pre);
                bullet.parent = _this.node.parent;
                bullet.position = arrBullet[i].add(cc.v3(0, 100));
                cc.tween(bullet).by(0.5, { position: cc.v3(0, -500) }).call(function () {
                    if (bullet.getChildByName('explode')) {
                        bullet.getComponent(cc.CircleCollider).enabled = false;
                        bullet.stopAllActions();
                        bullet.getChildByName('explode').active = true;
                        // bullet.getChildByName('trail1').active = false;
                        bullet.getChildByName('icon').active = false;
                    }
                }).start();
            }, delay);
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            _this.isSkill = false;
            _this.skill2();
        }, 0.5);
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
    NewClass.prototype.exitTarget = function () {
        this.isSkill = false;
        this.isMeet = false;
        this.anim.play("idle");
        this.anim.unscheduleAllCallbacks();
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "skill2Node", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "skill1Pre", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteVxcZHJhZ29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtDQUE0QjtBQUN0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBSztJQUEzQztRQUFBLHFFQTZIQztRQTVIRyx1QkFBdUI7UUFDdkIsZ0NBQWdDO1FBQ2hDLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFFOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixxQkFBZSxHQUFHLEtBQUssQ0FBQTs7SUErRzNCLENBQUM7SUE5R0cseUJBQU0sR0FBTixVQUFPLE1BQU07UUFBYixpQkFTQztRQVJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVAsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBeUJDO1FBeEJHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lB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QUNqRCxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtnQkFDYixNQUFLO1NBQ1o7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEVBQU87SUFFZCxDQUFDO0lBckhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFiYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkg1QjtJQUFELGVBQUM7Q0E3SEQsQUE2SEMsQ0E3SHFDLGVBQUssR0E2SDFDO2tCQTdIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGVuZW15IGZyb20gXCIuLi9lbmVteVwiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBlbmVteSB7XG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICAvLyBhdGtfYXJvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gYXRrX2Rvd246IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2tpbGwyTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBza2lsbDFQcmU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVCdWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgY291bnRBdGsgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXRrU091bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgaXNDb3VudERvd3NraWxsID0gZmFsc2VcbiAgICBhdHRhY2sodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaXNNZWV0ID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRhcmdldENvbXAgPSB0YXJnZXQuZ2V0Q29tcG9uZW50KCdoZXJvJyk7XG4gICAgICAgIHRoaXMuYW5pbS5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0Q29tcC5hdHRhY2tlZCh0aGlzLmRhbWFnZSk7XG5cbiAgICAgICAgfSwgMC4zKVxuICAgICAgXG4gICAgICAgIHRoaXMuc2tpbGwyKClcbiAgICB9XG4gICAgYXRrTGlzdCgpIHtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJhdGtcIilcbiAgICAgICAgaWYgKCF0aGlzLmlzQ291bnREb3dza2lsbCkge1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93c2tpbGwgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF0a1NPdW5kLCBmYWxzZSwgMC44KVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd3NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuY291bnRBdGspIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QXRrKytcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMigpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRBdGsrKztcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2tpbGwxKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NraWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNTa2lsbCA9IHRydWU7XG4gICAgICAgIGxldCBhcnJCdWxsZXQgPSBbY2MudjMoLTIzMSwgLTUxMCksIGNjLnYzKC0xMjYsIC02MzcpLCBjYy52MygtMzI1LCAtNjIzKSwgY2MudjMoLTE0MiwgLTUxNSksXG4gICAgICAgIGNjLnYzKC00MjgsIC01NzkpLCBjYy52MygtMzE0LCAtNTMwKSwgY2MudjMoLTIxNywgLTYwMSksIGNjLnYzKDAsIC01MzQpLCBjYy52MygtMzkwLCAtNTQwKSxjYy52Myg1MCwgLTUwMCksXG4gICAgICAgIF1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVsYXkgPSBpICUgMjtcbiAgICAgICAgICAgIGRlbGF5ID0gZGVsYXkgKiAwLjRcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNraWxsMVByZSk7XG4gICAgICAgICAgICAgICAgYnVsbGV0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgYnVsbGV0LnBvc2l0aW9uID0gYXJyQnVsbGV0W2ldLmFkZChjYy52MygwLCAxMDApKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ1bGxldCkuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MygwLCAtNTAwKSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnZXhwbG9kZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ3RyYWlsMScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCBkZWxheSlcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICB9LCAwLjUpXG4gICAgXG4gICAgfVxuICAgIHNraWxsMigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTa2lsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzU2tpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcInNraWxsMlwiKTtcblxuICAgIH1cbiAgICBjb21wbGV0ZUV2ZW50KHR5cGUpIHtcbiAgICAgICAgdGhpcy5pc1NraWxsID0gZmFsc2U7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2tpbGwyXCI6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hdGtMaXN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDEoKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNraWxsMVwiOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYXRrTGlzdCgpXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbDIoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRXZlbnQodHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDJcIjpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNraWxsMigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwyTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsMSgpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIGV4aXRUYXJnZXQoKSB7XG4gICAgICAgIHRoaXMuaXNTa2lsbCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNNZWV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKVxuICAgICAgICB0aGlzLmFuaW0udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuICBcbn1cbiJdfQ==