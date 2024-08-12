

const { ccclass, property } = cc._decorator;
import EL from './enemyListener';

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Vec3)
    posStart = cc.v3(0, 0, 0)
    @property(cc.BoxCollider)
    skillColider: cc.BoxCollider = null;
    @property(cc.Integer)
    damage = 100
    start() {

    }
    onColider(value) {
        this.skillColider.enabled = value
    }
    onCollisionEnter(other, self) {
        if (other.node.getComponent(EL) && other.node.getComponent(EL).target) {
            other.node.getComponent("enemy").attacked(this.damage)
        }
    }
    onCollisionStay(other, self){
        // if (other.node.getComponent(EL) && other.node.getComponent(EL).target) {
        //     other.node.getComponent("enemy").attacked(this.damage)
        //     console.log("atk skill")
        // }
    }
    onCollisionExit(other, self) {
        if (other.node.getComponent(EL) && other.node.getComponent(EL).target) {

        }
    }

}
