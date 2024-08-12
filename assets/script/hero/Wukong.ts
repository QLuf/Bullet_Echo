import Hero from './hero'

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends Hero {


  
    skill1() {
        if (this.isSKill) return;
        this.isSKill = true
        this.anim.play("skill1")
        cc.audioEngine.play(this.skill1Sound, false, 1)
        console.log("skill1")
        this.scheduleOnce(() => {
            let fx = cc.instantiate(this.preSkill1)
            fx.parent = this.node
            fx.position = fx.getComponent("Skill").posStart
        }, 0.55)

    }
    skill2() {
        this.anim.play("skill2");
    }
    // update (dt) {}
}
