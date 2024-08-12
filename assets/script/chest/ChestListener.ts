
const { ccclass, property } = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    gamePlay = null;
    @property(cc.Boolean)
    isEnd = false

    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    }
    onCollisionEnter(other, self) {

    }
    isDelay = false
    onCollisionStay(other, self) {
        if (this.isEnd == false) {
            if (other.node.getComponent('heroListener')) {
                console.log("haveChest")
                this.node.getComponent("Chest").clickChest()

            }
        } else {
            if (other.node.getComponent('heroListener')) {
                console.log("end task")
                if (globalThis.gold >= 500) {
                    this.node.getComponent(cc.CircleCollider).enabled = false;
                    this.gamePlay.onEndGame()
                }
                else {
                    if (!this.isDelay) {
                        this.node.getComponent("Chest").notEnoughGold()
                        this.isDelay = true
                        this.scheduleOnce(() => {
                            this.isDelay = false
                        }, 0.7)
                    }
                }


            }
        }

    }
}
