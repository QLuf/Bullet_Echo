import Hero from './hero'

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends Hero {


   
    skill1() {
        this.anim.play("skill1")
        // cc.audioEngine.play(this.skill1Sound, false, 1)

    }
    skill2() {
        this.anim.play("skill1")
    }
    // update (dt) {}
}
