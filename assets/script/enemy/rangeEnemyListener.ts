
import hero from '../hero/hero';
import enemy from '../enemy';
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
        if (other.node.getComponent(hero)) {
            this.target.getComponent(enemy).attack(other.node);
            this.target.getComponent(enemy).arrHero.push(other.node)

        }
    }
    onCollisionExit(other, self) {
        if (other.node.getComponent(hero)) {
            this.target.getComponent(enemy).exitTarget(other.node._id);
            // this.target.getComponent(hero).removeEnemy(other.node._id);
        }
    }

    // update (dt) {}
}
