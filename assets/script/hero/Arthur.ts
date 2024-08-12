import Hero from './hero'
import Enemy from '../enemy'

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends Hero {



    skill1() {
        // this.anim.play("skill1")
        this.anim.play("skill2")
        cc.audioEngine.play(this.skill1Sound, false, 1)
        this.scheduleOnce(() => {
            let dame = this.damage

            if (this.enemyArr[0]) {
                this.enemyArr[0].getComponent(Enemy).attacked(dame)
            }
        }, 0.2)

    }
    skill2() {
        this.anim.play("skill2")

    }
    // update (dt) {}
}
