// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    lbCount: cc.Label = null;
    @property(cc.Sprite)
    fillbar: cc.Sprite = null;
    @property(cc.Label)
    text: cc.Label = null;
    @property(cc.SpriteFrame)
    iconRuby: cc.SpriteFrame = null
    count = 0;
    mission = 10
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    updateBar() {
        this.count = this.count + 2;
        this.lbCount.node.getComponent(cc.Animation).play("text_animation")
        this.lbCount.string = this.count.toString() + "/" + this.mission.toString();
        this.fillbar.fillRange = this.count / this.mission;
    }
    reset(mission) {
        this.count = 0;
        this.mission = mission;
        this.lbCount.string = this.count.toString() + "/" + this.mission.toString();

        this.fillbar.fillRange = 0;
    }
    setMission2() {
        this.text.string = "Collect 10 Ruby"
        this.node.getChildByName("icon").getComponent(cc.Sprite).spriteFrame=this.iconRuby
    }
    // update (dt) {}
}
