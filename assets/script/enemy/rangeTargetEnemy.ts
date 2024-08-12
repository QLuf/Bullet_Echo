// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
   

    start() {

    }
    onCollisionEnter(other, self) {
        if (other.node.getComponent('heroListener')) {

            this.node.parent.getComponent("enemy").isFreeze = false
            this.node.parent.getComponent("enemy").run()

        }
    }
    onCollisionStay(other, self) {
        if (other.node.getComponent('heroListener')) {

            this.node.parent.getComponent("enemy").isFreeze = false
         

        }
    }
}
