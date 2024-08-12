"use strict";
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