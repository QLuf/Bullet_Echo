

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    target: cc.Node = null;
    @property(cc.Node)
    map: cc.Node = null
    start() {

    }

    update(dt) {
        if (this.target != null && this.target.position && this.target.active == true) {
            this.node.position = this.target.position

        } else {
            this.node.active = false
        }
        if (this.map && this.map.name == "miniMap") {
            this.map.position =cc.v3(-this.node.x,-this.node.y) 

        }
    }
}
