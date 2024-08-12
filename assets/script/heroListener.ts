

import { Constant } from "./Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;


    start() {

    }
    onCollisionEnter(other, self) {
        let heroComp = this.node.getComponent("hero");
        if (self.node.getComponent('heroListener') && other.node.name == "bulletBox") {
            other.node.active=false
            heroComp.reload();

        }
    }


    // update (dt) {}
}
