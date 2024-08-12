
import enemy from "../enemy"
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends enemy {
    @property(cc.Node)
    skill2Node: cc.Node = null;
    @property(cc.Node)
    skill1Node: cc.Node = null;
    @property(cc.Prefab)
    preBullet: cc.Prefab = null;
    countAtk = 0;
    @property(cc.AudioClip)
    atkSOund: cc.AudioClip = null
    @property(cc.Prefab)
    thunderPre: cc.Prefab = null
    @property(cc.AudioClip)
    soundThunder: cc.AudioClip = null
    @property(cc.AudioClip)
    soundSkill1: cc.AudioClip = null
    @property(cc.AudioClip)
    soundSkill2: cc.AudioClip = null
    isCountDowskill = false
    isAtk = false
    attack(target) {
        if (this.isAtk) return;
        this.isAtk = true
        this.isMeet = true;
        let targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(() => {
            targetComp.attacked(this.damage);
        }, 0.3)
        this.atkList()
    }
    atkList() {

        this.countAtk++

        switch (this.countAtk) {
            case 1:
                cc.audioEngine.play(this.atkSOund,false,1)
                this.anim.play("atk")
                break;
            case 2:
                this.skill1()
                break;
            case 3:
                this.skill2()
                this.countAtk = 0
                break;
            default:
                // this.countAtk++;
                // this.skill1()
                break;
        }

    }
    skill1() {
        if (this.isSkill) return;
        this.isSkill = true;
        this.anim.play("skill1");
        cc.audioEngine.play(this.soundSkill1,false,1)
        this.scheduleOnce(() => {
            let thunder = cc.instantiate(this.thunderPre)
            thunder.parent=this.node.parent
            thunder.position=cc.v3(60,180)
            cc.audioEngine.play(this.soundThunder,false,1)
            // thunder.position=cc.v3(0,0)
        },0.7)

    }
    skill2() {
        if (this.isSkill) return;
        cc.audioEngine.play(this.soundSkill2,false,1)

        this.isSkill = true;
        this.anim.play("skill2");

    }
    completeEvent(type) {
        this.isSkill = false;

        switch (type) {
            case "skill2":
                this.atkList();
                console.log("skill2")
                break;
            case "skill1":
                this.atkList()
                console.log("skill1")

                break;
            case "atk":
                this.atkList()
                console.log("atk")

                break
        }
    }
    addEvent(type) {
        switch (type) {
            case "skill2":
                this.skill2Node.getComponent(cc.Animation).play()
                break;
            case "skill1":
                this.skill1Node.getComponent(cc.Animation).play()
                break
        }
    }

    exitTarget() {

        if (this.arrHero.length <= 0) {
            this.isSkill = false
            this.isMeet = false;
            this.isAtk = false;
            this.anim.play("idle")
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }
    }
    update(dt: any): void {

    }

}
