
const { ccclass, property } = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.CircleCollider)
    collider: cc.CircleCollider = null;

    gamePlay = null;

    type = null;

    // onLoad () {}

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent('game');
    }

    setAnim(name) {
    }

    finish() {
        this.node.parent.destroy();
    }

    play(name, position = cc.v3(0, 0)) {
        this.collider.enabled = false;
        switch (name) {
            case 'moon_aura':
                this.getAnim(name).speed = 0.4
                // this.node.angle = 90;
                this.node.position = position
                this.node.scale = 2;
                break;
            case 'skill_1_boss':
                this.getAnim(name).speed = 0.3
                this.node.position = position
                break;
            case 'skill1_fx':
                this.getAnim(name).speed = 0.5
                this.node.angle = 90;
                this.node.position = position
                break;

            case 'flame_2':
                this.getAnim(name).speed = 0.7
                this.node.scale = 0.7;
                this.node.position = position
                break;

            case 'flame_3':
                this.getAnim(name).speed = 0.5
                this.node.scale = 0.3;
                this.node.position = position
                break;

            default:
                break;
        }
        this.anim.play(name);
    }

    getAnim(name) {
        for (let i = 0; i < this.anim.getClips().length; i++) {
            if (this.anim.getClips()[i].name == name) {
                return this.anim.getClips()[i];
            }
        }
        return null;
    }

    // update (dt) {}
}
