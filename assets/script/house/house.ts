

const { ccclass, property } = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    house1: cc.Node = null;
    @property(cc.Node)
    house2: cc.Node = null;
    @property(cc.Label)
    currentLabel: cc.Label = null
    @property(cc.Node)
    pop1: cc.Node = null
    @property(cc.Node)
    pop2: cc.Node = null
    @property(cc.Node)
    pop3: cc.Node = null
    @property(cc.Node)
    pop4: cc.Node = null
    @property(cc.Node)
    circle: cc.Node = null;

    isUpdate = 0
    valueUpdate = 10
    gamePlay = null
    isStep = 0;
    isMoving = false
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21");
    }
    checkUpdate() {

        if (this.isMoving) return;
        if (globalThis.wood >= this.valueUpdate && this.isUpdate == 0 && this.isStep == 0) {
            // this.updateHouse(this.valueUpdate)
            this.gamePlay.updateHouse(this.valueUpdate)
            this.isStep = 1;
            this.isMoving = true
        }
        else if (globalThis.gold >= this.valueUpdate && this.isUpdate == 1 && this.isStep == 1) {
            this.gamePlay.updateHouse2(20)
            this.isStep = 2;
            this.isMoving = true

        }
        else if (globalThis.gold >= this.valueUpdate && this.isUpdate == 2 && this.isStep == 2) {
            this.gamePlay.updateHouse2(20)
            this.isStep = 3;
            this.isMoving = true

        }
        else if (globalThis.gold >= this.valueUpdate && this.isUpdate == 3 && this.isStep == 3) {
            this.gamePlay.updateHouse2(20)
            this.isStep = 4;
            this.isMoving = true

        }
        else {
            this.gamePlay.heroComp.showNoti()
        }
    }
    updateValue() {
        this.valueUpdate--
        this.currentLabel.string = this.valueUpdate.toString();
        let fill = this.pop1.getChildByName("bg").getComponent(cc.Sprite)
        let check = fill.fillRange
        cc.tween(fill).to(0.1, { fillRange: check + 0.5 }).start()
    }
    updateHouse() {
        this.gamePlay.arrow.active = false
        if (this.isUpdate == 0) {
            this.pop1.active = false
            this.house1.active = false;
            this.house2.active = true;
            this.valueUpdate = 80
            this.isUpdate = 1
            this.circle.scale = 0.22
            this.scheduleOnce(() => {
                this.pop2.active = true
                cc.tween(this.pop2).to(0.3, { scale: 1 }).start()
                this.pop1 = this.pop2
            }, 0.5)
            this.gamePlay.spawEnemies(30)
            this.isMoving = false
        }
        else if (this.isUpdate == 1) {
            // this.gamePlay.listCard.children[0].scale = 1
            // this.gamePlay.listCard.children[0].children[0].active = true;
            this.gamePlay.btn_Claim(null, "2")
            this.pop2.active = false;
            this.isUpdate = 2;

            this.valueUpdate = 150;
            this.scheduleOnce(() => {
                this.pop3.active = true
                cc.tween(this.pop3).to(0.3, { scale: 1 }).start()
                this.pop1 = this.pop3
            }, 0.5)
            this.gamePlay.arrow.getComponent("arrow").param = 130

        }
        else if (this.isUpdate == 2) {
            this.gamePlay.btn_Claim(null, "4")

            this.gamePlay.arrow.getComponent("arrow").param = 180
            // this.gamePlay.listCard.scale=this.gamePlay.isScale
            // this.gamePlay.listCard.children[0].scale = 1

            this.pop3.active = false

            // this.gamePlay.listCard.children[0].children[1].active = true;
            this.isUpdate = 3
            this.valueUpdate = 500
            this.scheduleOnce(() => {
                this.pop4.active = true
                cc.tween(this.pop4).to(0.3, { scale: 1 }).start()
                this.pop1 = this.pop4
            }, 0.5)
        }
        else if (this.isUpdate == 3) {
            this.gamePlay.btn_Claim(null, "1")

            // this.gamePlay.listCard.children[0].scale = 1
            this.gamePlay.arrow.getComponent("arrow").param = 200
            // this.gamePlay.listCard.children[0].children[2].active = true;
            this.isUpdate = 4
            this.valueUpdate = 1000
            this.scheduleOnce(() => {
                this.pop4.active = true
                cc.tween(this.pop4).to(0.3, { scale: 1 }).start()
                // this.gamePlay.onEndGame()
                this.pop1 = this.pop4
            }, 0.5)
        }
    }
    checkSuccess() {
        if (this.isUpdate == 1 && globalThis.gold >= 80) {
            this.gamePlay.arrow.active = true
        }
        else if (this.isUpdate == 2 && globalThis.gold >= 150) {
            this.gamePlay.arrow.active = true
        }
        else if (this.isUpdate == 3 && globalThis.gold >= 500) {

            this.gamePlay.arrow.active = true
        }
    }
    protected update(dt: number): void {
        this.checkSuccess()
    }
}
