

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    target: cc.Node = null
    start() {

    }
    eventListener(name) {

    }
    eventComplete(name) {
        this.target.getComponent("hero").eventComplete(name)
    }
    // update (dt) {}
}
