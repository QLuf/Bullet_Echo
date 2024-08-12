

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start() {

    }
    finish() {
        this.node.destroy()
    }
    finishParent(){
        this.node.parent.destroy()
    }
    // update (dt) {}
}
