
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    damage = 0;

    @property(cc.Boolean)
    isKnife = false;

    @property(cc.Boolean)
    isArrow = false;

    @property(cc.Boolean)
    isShuriken = false;

    // @property(cc.Boolean)
    // isHolyRingCircle = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
