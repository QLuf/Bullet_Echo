
import hero from './hero/hero';
import enemy from './enemy';
import EL from './enemyListener';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    className = null;

    start() {
        this.className = this["__classname__"]
    }
    onCollisionEnter(other, self) {
        if (other.node.getComponent(EL) && other.node.getComponent(EL).target) {
            if (this.target.getComponent(hero)) {
                this.target.getComponent(hero).enemyArr.push(other.node.getComponent(EL).target);

            }
        }
    }
    onCollisionExit(other, self) {
        if (other.node.getComponent(EL) && other.node.getComponent(EL).target) {
            if (this.target.getComponent(hero)) {
                this.target.getComponent(hero).removeEnemy(other.node._id);

            }
        }
    }
    onCollisionStay(other, self) {
        if (this.target.getComponent(hero)) {
            if (other.node.getComponent(EL) && other.node.getComponent(EL).target && this.target.getComponent(hero).isAttack == false) {

                this.target.getComponent(hero).attack();

            }
        }
    }


    // update (dt) {}
}
