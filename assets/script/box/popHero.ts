

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    icon: cc.Node = null;
    @property(cc.Node)
    target: cc.Node = null;
    @property(cc.Node)
    camera: cc.Node = null;
    start() {

    }
    checkAngle() {
        if (this.target != null) {
            // let target = this.target;
            // let pos2 = target.position.add(cc.v3(this.camera.position.x, -this.camera.position.y))
            // pos2 = target.parent.convertToWorldSpaceAR(target.position);
            // pos2 = this.node.convertToNodeSpaceAR(pos2);
            // let pos = this.node.position.add(cc.v3(this.camera.position.x, -this.camera.position.y))
            // pos = pos2
            // let tan = (target.x - pos.x !== 0) ? (target.y - pos.y - 30) / (target.x - pos.x) : 0
            // let angle = Math.atan(tan) * (180 / (Math.PI));
            // angle = (pos.x <= target.x) ? angle : angle + 180;
            // // console.log()
            // // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            // return angle;
            
            let target = this.target;
            let pos2 = target.position.add(cc.v3(-this.camera.position.x,- this.camera.position.y))
            pos2 = target.parent.convertToWorldSpaceAR(pos2);
            pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
            let pos = this.node.position
            let tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0
            let angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (pos.x <= pos2.x) ? angle : angle + 180;
            // console.log()
            // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            return angle;




        }
    }
    update(dt) {
        this.node.angle = this.checkAngle();
        this.icon.angle = -this.node.angle;

    }
}
