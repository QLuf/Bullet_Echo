

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    positionXY(event) {
        var playerPosition = cc.v2(this.node.position.x, this.node.position.y);
        var mousePosition = event.getLocation();

        mousePosition = this.node.parent.parent.convertToNodeSpaceAR(mousePosition);
        var angle = mousePosition.signAngle(playerPosition);

        var angleD = cc.misc.radiansToDegrees(angle);
        angleD = (angleD * -1) + 45
        this.node.angle = angleD;
    }
    onLoad() {
        this.node.parent.parent.on('mousemove', this.positionXY, this)
    }

    // update (dt) {}
}
