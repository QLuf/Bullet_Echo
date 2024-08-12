

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Animation)
    anim: cc.Animation = null;
    @property(cc.Prefab)
    preWood: cc.Prefab = null;
    @property(cc.Integer)
    preWhellTree = 100
    heal = 100

    start() {
        this.heal = this.preWhellTree
    }
    attacked(damage) {
        this.heal -= damage
        if(this.node.getChildByName("heroaura")){
            this.node.getChildByName("heroaura").active = false;
            this.node.getChildByName("tree_yellow").active = false;
        }
      

        if (this.heal <= 0) {
            this.anim.play("tree_cutted")
            this.addWood()

        }
        else {
            this.anim.play("tree_cutting")
        }
    }
    addWood() {
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let wood = cc.instantiate(this.preWood)
                wood.parent = this.node;
                wood.position = cc.v3(0, 50)
                this.scheduleOnce(() => {
                    cc.Canvas.instance.node.getComponent("Game17").moveWood(wood)
                }, 0.8)
            }, i * 0.1)

        }

    }
    // update (dt) {}
}
