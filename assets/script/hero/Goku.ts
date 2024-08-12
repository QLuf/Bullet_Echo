import Hero from './hero'

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends Hero {



    skill1() {
        this.anim.play("skill1")
        cc.audioEngine.play(this.skill1Sound, false, 1)
        this.isSKill = true

        let target = this.enemyArr[0];
        if (target) {
            let parent = target.parent;
            let posx = target.position;
            this.scheduleOnce(() => {
                let fx = cc.instantiate(this.preSkill1)
                fx.parent = this.node.parent
                fx.position = fx.getComponent("Skill").posStart;
                let posHero = this.node.position;
                let pos2 = posx;
                pos2 = parent.convertToWorldSpaceAR(pos2);
                pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
                let pos = this.node.position
                let tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0
                let angle = Math.atan(tan) * (180 / (Math.PI));
                angle = (pos.x <= pos2.x) ? angle : angle + 180;
                let param = 190;
                let angle2 = this.checkAngle2(posHero, pos2)
                angle2 = cc.misc.degreesToRadians(angle2)
                let pos3 = posHero.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)))
                fx.position = pos3
                fx.angle = angle
                this.arrFxSkill.push(fx)
            }, 0.2)
        }
    }
    skill2() {
        this.anim.play("skill2")
    }

    // update (dt) {}
}
