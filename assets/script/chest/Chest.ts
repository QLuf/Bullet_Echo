
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Integer)
    current = 0
    gamePlay = null;
    @property(cc.Integer)
    tag = 0
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21")

    }
    clickChest() {
        if (globalThis.gold >= this.current) {
            this.node.getComponent(cc.CircleCollider).enabled = false;
            console.log("clickchest")

            globalThis.gold -= this.current;
            this.gamePlay.clickChest(this.tag);
            this.scheduleOnce(()=>{
                let chest = this.node.children[0].getChildByName("chest")
                this.node.children[0].getChildByName("icon").active = false;
                this.node.children[0].getChildByName("New Label").active = false
                this.node.children[0].getChildByName("bang").active = false

                chest.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', chest.getComponent(cc.Sprite)));
            },0.6)
       
        }
        else {
            this.notEnoughGold()
        }
    }
    
    notEnoughGold() {
        this.node.getComponent(cc.Animation).play();
    }
    // update (dt) {}
}
