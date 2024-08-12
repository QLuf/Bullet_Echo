
import bullet from '../bullet'
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.PolygonCollider)
    skillColider: cc.PolygonCollider = null;
    @property(cc.Integer)
    damage = 100
    start() {

    }
    onColider(value) {
        this.skillColider.enabled = value
    }
    onCollisionEnter(other, self) {

    }
    onCollisionStay(other, self) {
        if (other.node.getComponent('heroListener')) {
            let target = other.node.getComponent('heroListener').target;
            target.getComponent('hero').attacked(this.damage);
        }
    }
 
}
