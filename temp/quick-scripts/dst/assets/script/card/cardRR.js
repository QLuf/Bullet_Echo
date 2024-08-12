
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/card/cardRR.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd17edV3MrJK64VP9BAZUOhr', 'cardRR');
// script/card/cardRR.ts

"use strict";
// import { Constant } from "./Constant";
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
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.anim = null;
        _this.card_frame_arr = [];
        _this.card_face_down_frame = null;
        _this.card_name = null;
        _this.isRunning = false;
        _this.isOpen = false;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Card.prototype.start = function () {
        this.addListener();
        // this.appear();
    };
    Card.prototype.appear = function () {
        var t = cc.tween;
        t(this.node).set({ scale: 0 }).to(0.5, { scale: 1.1 }).start();
    };
    Card.prototype.changeIconOpen = function () {
        // if (this.card_name) {
        //     // let Global = cc.Global;
        this.node.getChildByName("block").active = false;
        //     // this.icon.spriteFrame = Global.getDataByName(this.card_frame_arr, this.card_name);
        // }
    };
    Card.prototype.changeIconClose = function () {
        this.icon.spriteFrame = this.card_face_down_frame;
    };
    Card.prototype.addListener = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        // cc.Canvas.instance.node.on(Constant.EVENT.CLOSE_CARD, this.onCloseCard, this);
    };
    Card.prototype.onTouchStart = function (e) {
        if (this.isRunning || this.isOpen) {
            return;
        }
        // cc.Canvas.instance.node.emit(Constant.EVENT.SOUND.CARD_OPEN);
        // cc.Canvas.instance.node.emit(Constant.EVENT.OFF_GUIDE);
        // let Global = cc.Global;
        // if (!this.card_name) {
        //     this.card_name = Global.CARD_ARR[Global.COUNT_CARD];
        //     Global.COUNT_CARD++;
        // }
        // this.anim.play("open_card");
        this.isRunning = true;
    };
    Card.prototype.finishOpen = function () {
        this.isOpen = true;
        this.isRunning = false;
        // this.checkSameCard();
    };
    Card.prototype.finishClose = function () {
        this.isOpen = false;
        this.isRunning = false;
    };
    // checkSameCard () {
    //     let Global = cc.Global;
    //     let check_card_arr = Global.CHECK_CARD_ARR;
    //     check_card_arr.push(this);
    //     if (check_card_arr.length == 2) {
    //         let card1 = check_card_arr[0];
    //         let card2 = check_card_arr[1];
    //         if (card1.card_name !== card2.card_name) {
    //             cc.Canvas.instance.node.emit(Constant.EVENT.CLOSE_CARD, check_card_arr);
    //             Global.CHECK_CARD_ARR = [];
    //         } else {
    //             // cc.Canvas.instance.node.emit(Constant.EVENT.SHOW_HERO);
    //             cc.Canvas.instance.node.emit(Constant.EVENT.SHOW_HERO, card1.node, card2.node);
    //         }
    //     }
    // }
    Card.prototype.onCloseCard = function (check_card_arr) {
        if (check_card_arr.indexOf(this) == -1) {
            return;
        }
        this.isRunning = true;
        this.anim.play("close_card");
        // cc.Canvas.instance.node.emit(Constant.EVENT.SOUND.CARD_CLOSE);
    };
    __decorate([
        property(cc.Sprite)
    ], Card.prototype, "icon", void 0);
    __decorate([
        property(cc.Animation)
    ], Card.prototype, "anim", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Card.prototype, "card_frame_arr", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Card.prototype, "card_face_down_frame", void 0);
    Card = __decorate([
        ccclass
    ], Card);
    return Card;
}(cc.Component));
exports.default = Card;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjYXJkXFxjYXJkUlIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBc0dDO1FBbkdHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBR3RDLDBCQUFvQixHQUFtQixJQUFJLENBQUM7UUFFNUMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUVqQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFlBQU0sR0FBRyxLQUFLLENBQUM7O1FBbUZmLGlCQUFpQjtJQUNyQixDQUFDO0lBbEZHLGVBQWU7SUFFZixvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLGlCQUFpQjtJQUNyQixDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDSSx3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUE7UUFDOUMsNEZBQTRGO1FBQzVGLElBQUk7SUFDUixDQUFDO0lBRUQsOEJBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLGlGQUFpRjtJQUNyRixDQUFDO0lBRUQsMkJBQVksR0FBWixVQUFhLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMvQixPQUFPO1NBQ1Y7UUFDRCxnRUFBZ0U7UUFDaEUsMERBQTBEO1FBQzFELDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsMkRBQTJEO1FBQzNELDJCQUEyQjtRQUMzQixJQUFJO1FBQ0osK0JBQStCO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsd0JBQXdCO0lBQzVCLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsa0RBQWtEO0lBQ2xELGlDQUFpQztJQUNqQyx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6QyxxREFBcUQ7SUFDckQsdUZBQXVGO0lBQ3ZGLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIseUVBQXlFO0lBQ3pFLDhGQUE4RjtJQUM5RixZQUFZO0lBQ1osUUFBUTtJQUNSLElBQUk7SUFFSiwwQkFBVyxHQUFYLFVBQVksY0FBYztRQUN0QixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsaUVBQWlFO0lBQ3JFLENBQUM7SUFoR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NDQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ2E7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDbUI7SUFaM0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNHeEI7SUFBRCxXQUFDO0NBdEdELEFBc0dDLENBdEdpQyxFQUFFLENBQUMsU0FBUyxHQXNHN0M7a0JBdEdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgY2FyZF9mcmFtZV9hcnI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBjYXJkX2ZhY2VfZG93bl9mcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgY2FyZF9uYW1lID0gbnVsbDtcblxuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gICAgICAgIC8vIHRoaXMuYXBwZWFyKCk7XG4gICAgfVxuXG4gICAgYXBwZWFyKCkge1xuICAgICAgICBsZXQgdCA9IGNjLnR3ZWVuO1xuICAgICAgICB0KHRoaXMubm9kZSkuc2V0KHsgc2NhbGU6IDAgfSkudG8oMC41LCB7IHNjYWxlOiAxLjEgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VJY29uT3BlbigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY2FyZF9uYW1lKSB7XG4gICAgICAgIC8vICAgICAvLyBsZXQgR2xvYmFsID0gY2MuR2xvYmFsO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJibG9ja1wiKS5hY3RpdmU9ZmFsc2VcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IEdsb2JhbC5nZXREYXRhQnlOYW1lKHRoaXMuY2FyZF9mcmFtZV9hcnIsIHRoaXMuY2FyZF9uYW1lKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGNoYW5nZUljb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkX2ZhY2VfZG93bl9mcmFtZTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKENvbnN0YW50LkVWRU5ULkNMT1NFX0NBUkQsIHRoaXMub25DbG9zZUNhcmQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZyB8fCB0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmVtaXQoQ29uc3RhbnQuRVZFTlQuU09VTkQuQ0FSRF9PUEVOKTtcbiAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5PRkZfR1VJREUpO1xuICAgICAgICAvLyBsZXQgR2xvYmFsID0gY2MuR2xvYmFsO1xuICAgICAgICAvLyBpZiAoIXRoaXMuY2FyZF9uYW1lKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmNhcmRfbmFtZSA9IEdsb2JhbC5DQVJEX0FSUltHbG9iYWwuQ09VTlRfQ0FSRF07XG4gICAgICAgIC8vICAgICBHbG9iYWwuQ09VTlRfQ0FSRCsrO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuYW5pbS5wbGF5KFwib3Blbl9jYXJkXCIpO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZmluaXNoT3BlbigpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmNoZWNrU2FtZUNhcmQoKTtcbiAgICB9XG5cbiAgICBmaW5pc2hDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGVja1NhbWVDYXJkICgpIHtcbiAgICAvLyAgICAgbGV0IEdsb2JhbCA9IGNjLkdsb2JhbDtcbiAgICAvLyAgICAgbGV0IGNoZWNrX2NhcmRfYXJyID0gR2xvYmFsLkNIRUNLX0NBUkRfQVJSO1xuICAgIC8vICAgICBjaGVja19jYXJkX2Fyci5wdXNoKHRoaXMpO1xuICAgIC8vICAgICBpZiAoY2hlY2tfY2FyZF9hcnIubGVuZ3RoID09IDIpIHtcbiAgICAvLyAgICAgICAgIGxldCBjYXJkMSA9IGNoZWNrX2NhcmRfYXJyWzBdO1xuICAgIC8vICAgICAgICAgbGV0IGNhcmQyID0gY2hlY2tfY2FyZF9hcnJbMV07XG4gICAgLy8gICAgICAgICBpZiAoY2FyZDEuY2FyZF9uYW1lICE9PSBjYXJkMi5jYXJkX25hbWUpIHtcbiAgICAvLyAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KENvbnN0YW50LkVWRU5ULkNMT1NFX0NBUkQsIGNoZWNrX2NhcmRfYXJyKTtcbiAgICAvLyAgICAgICAgICAgICBHbG9iYWwuQ0hFQ0tfQ0FSRF9BUlIgPSBbXTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZW1pdChDb25zdGFudC5FVkVOVC5TSE9XX0hFUk8pO1xuICAgIC8vICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmVtaXQoQ29uc3RhbnQuRVZFTlQuU0hPV19IRVJPLCBjYXJkMS5ub2RlLCBjYXJkMi5ub2RlKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIG9uQ2xvc2VDYXJkKGNoZWNrX2NhcmRfYXJyKSB7XG4gICAgICAgIGlmIChjaGVja19jYXJkX2Fyci5pbmRleE9mKHRoaXMpID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShcImNsb3NlX2NhcmRcIik7XG4gICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmVtaXQoQ29uc3RhbnQuRVZFTlQuU09VTkQuQ0FSRF9DTE9TRSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==