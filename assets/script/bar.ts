

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.String)
    tag = ""
    @property(cc.Label)
    lbCurrent: cc.Label = null;
    start() {

    }

    update(dt) {
        switch (this.tag) {
            case "coin":
                this.lbCurrent.string = globalThis.gold.toString()
                break;
            case "wood":
                this.lbCurrent.string = globalThis.wood.toString()
                break;
        }

    }
}
