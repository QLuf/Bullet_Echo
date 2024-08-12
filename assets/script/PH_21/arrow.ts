// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null
    param = 100
    start() {

    }

    checkAngle() {
        if (this.target != null) {
            let posHero = cc.Canvas.instance.node.getComponent("Game21").hero.position
            let target = this.target;
            // let pos2 = target.position.add(cc.v3(-this.camera.position.x,- this.camera.position.y))
            let pos2 = target.position

            pos2 = target.parent.convertToWorldSpaceAR(pos2);
            pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
            let pos = this.node.position
            let tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0
            let angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (pos.x <= pos2.x) ? angle : angle + 180;
            let param = this.param;
            let angle2 = this.checkAngle2(posHero, pos2)
            angle2 = cc.misc.degreesToRadians(angle2)
            let pos3 = posHero.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)))
            this.node.position = pos3
            // console.log()
            // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
            return angle;




        }
    }
    checkPos() {
        let target = this.target;
        let son = this.node.parent
        let pos2 = target.position

        pos2 = target.parent.convertToWorldSpaceAR(pos2);
        pos2 = son.parent.convertToNodeSpaceAR(pos2);




        // if(son.y>=pos2.y){
        // if (son.x <= pos2.x) {
        // this.node.position = cc.v3(138, 66)

        // } else if (son.x > pos2.x) {
        // }
        // this.node.position = cc.v3(165, 66)

        // }
        // else{
        //     if (son.x > pos2.x) {
        //         this.node.position = cc.v3(138, 66)

        //     } else if (son.x < pos2.x) {
        //         this.node.position = cc.v3(165, 66)
        //     }
        // }


    }
    checkAngle2(pos1, pos2) {
        let tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
        if (pos2.y == pos1.y) {
            if (pos2.x > pos1.x) return 0;
            if (pos2.x < pos1.x) return 180;
        }

        if (pos2.x == pos1.x) {
            if (pos2.y > pos1.y) return 90;
            if (pos2.y < pos1.y) return -90;
        }
        if (pos1.x == pos2.x && pos1.y == pos2.y) return 0;
        if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
            if (pos2.x > pos1.x && pos2.y > pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan));
            if (pos2.x > pos1.x && pos2.y < pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
            if (pos2.x < pos1.x && pos2.y > pos1.y) return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
            if (pos2.x < pos1.x && pos2.y < pos1.y) return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
        }
    }
    update(dt) {
        this.node.angle = this.checkAngle();
        // this.checkPos()
        // this.icon.angle = -this.node.angle;

    }
}
