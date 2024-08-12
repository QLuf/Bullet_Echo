// import { Constant } from "./Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.SpriteFrame)
    card_frame_arr: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    card_face_down_frame: cc.SpriteFrame = null;

    card_name = null;

    isRunning = false;

    isOpen = false;

    // onLoad () {}

    start() {
        this.addListener();
        // this.appear();
    }

    appear() {
        let t = cc.tween;
        t(this.node).set({ scale: 0 }).to(0.5, { scale: 1.1 }).start();
    }

    changeIconOpen() {
        // if (this.card_name) {
        //     // let Global = cc.Global;
        this.node.getChildByName("block").active=false
        //     // this.icon.spriteFrame = Global.getDataByName(this.card_frame_arr, this.card_name);
        // }
    }

    changeIconClose() {
        this.icon.spriteFrame = this.card_face_down_frame;
    }

    addListener() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        // cc.Canvas.instance.node.on(Constant.EVENT.CLOSE_CARD, this.onCloseCard, this);
    }

    onTouchStart(e) {
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
    }

    finishOpen() {
        this.isOpen = true;
        this.isRunning = false;
        // this.checkSameCard();
    }

    finishClose() {
        this.isOpen = false;
        this.isRunning = false;
    }

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

    onCloseCard(check_card_arr) {
        if (check_card_arr.indexOf(this) == -1) {
            return;
        }
        this.isRunning = true;
        this.anim.play("close_card");
        // cc.Canvas.instance.node.emit(Constant.EVENT.SOUND.CARD_CLOSE);
    }

    // update (dt) {}
}
