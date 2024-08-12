

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    card1Node: cc.Animation = null;
    @property(cc.Animation)
    card2Node: cc.Animation = null;

    start() {

    }
    card1() {
        this.card1Node.play("card_tut")
    }
    card2() {
        this.card2Node.play("card_tut")
    }
    // update (dt) {}
}
