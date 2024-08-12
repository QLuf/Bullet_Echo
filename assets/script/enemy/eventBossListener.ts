
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {



    start() {

    }
    completeEvent(type) {
        this.node.parent.getComponent("enemy").completeEvent(type);
    }
    addEvent(type) {
        this.node.parent.getComponent("enemy").addEvent(type);

    }
    // update (dt) {}
}
