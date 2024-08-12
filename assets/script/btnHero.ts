

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    value = 25;
    gamePlay = null;
    isSuccess=false;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent('gamePlay');
    }
    card_on() {
        this.node.getChildByName("circle").active = true;
        this.node.getComponent(cc.Animation).play("card_on");

    }
    click(event, customEventData) {
        // console.log("click", customEventData)
        if (globalThis.gold >= this.value) {
            this.scheduleOnce(() => {
                this.node.getChildByName("vfx").active = true;
            }, 1)
            this.scheduleOnce(()=>{
                this.node.getComponent(cc.Animation).play("card_success")

            },1.2)
            this.node.getComponent(cc.Button).enabled = false;
            globalThis.gold -= this.value
            switch (customEventData) {
                case "1":
                    console.log("add")
                    this.gamePlay.btn_spawRenna()
                    break;
                case "2":
                    this.gamePlay.btn_spawWereWolf();
                    break;
                case "3":
                    this.gamePlay.btn_spawRacher();
                    break;

                default:
                    break;
            }
            this.isSuccess=true
        }
    }
    update(dt) {
        if(this.isSuccess==false){
            if (globalThis.gold >= this.value) {
                this.node.getComponent(cc.Button).enabled = true;
                this.card_on()
            }
            else {
    
                this.node.getComponent(cc.Button).enabled = false;
    
            }
        }
       
    }
    // update (dt) {}
}
