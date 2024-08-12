
import enemy from "../enemy"
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends enemy {
    
    @property(cc.Node)
    skill2Node: cc.Node = null;
    @property(cc.Prefab)
    skill1Node: cc.Prefab = null;
    @property(cc.Prefab)
    preBullet: cc.Prefab = null;
    countAtk = 0;
    @property(cc.AudioClip)
    atkSOund: cc.AudioClip = null;
    isCountDowskill = false
    isAtk=false
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
        this.anim.play("atk")
        if (!this.isCountDowskill) {
            this.isCountDowskill = true;
            // cc.audioEngine.play(this.atkSOund, false, 0.8)
            this.scheduleOnce(() => {
                this.isCountDowskill = false;

            }, 0.2)

        }
        switch (this.countAtk) {
            case 2:
                this.countAtk = 0;
                this.skill1()

                break;
            case 1:
                this.countAtk++
                this.skill2()
                break;
            default:
                this.countAtk++;
                this.skill1()
                break;
        }
    }
    skill1() {
        if (this.isSkill) return;
        this.anim.play("skill1")

        this.isSkill = true;

        // this.scheduleOnce(() => {
        //     this.isSkill = false;
        //     this.skill2()
        // }, 0.5)
  
    }
    skill2() {
        if (this.isSkill) return;
        this.isSkill = true;
        this.anim.play("skill2");

    }
    completeEvent(type) {
        this.isSkill = false;

        switch (type) {
            case "skill2":
                // this.atkList();
                this.skill1()
                break;
            case "skill1":
                // this.atkList()
                this.skill2()
                break
        }
    }
    addEvent(type) {
        switch (type) {
            case "skill2":
                // this.skill2();
                this.skill2Node.getComponent(cc.Animation).play()
                break;
            case "skill1":
                this.skill1()
                break
        }
    }
    // doubleAtk(target) {
    //     for (let i = 0; i < 2; i++) {
    //         let atk = cc.instantiate(this.atk_down)
    //         atk.parent = this.node.parent;
    //         let pos = target.parent.convertToWorldSpaceAR(target.position);
    //         pos = this.node.parent.convertToNodeSpaceAR(pos)
    //         atk.position = pos
    //         atk.scaleX = ((i == 0) ? -1 : 1) * atk.scaleX
    //         atk.zIndex = 2

    //     }
    // }

    // createAtkDown(target) {
    //     let atk = cc.instantiate(this.atk_down)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.scaleX = ((pos.x > this.node.x) ? -1 : 1) * atk.scaleX
    //     atk.position = pos
    //     atk.zIndex = 2


    // }
    // createAtkAround(target) {
    //     let atk = cc.instantiate(this.atk_around)
    //     atk.parent = this.node.parent;
    //     let pos = target.parent.convertToWorldSpaceAR(target.position);
    //     pos = this.node.parent.convertToNodeSpaceAR(pos)
    //     atk.position = pos
    //     atk.zIndex = 2
    // }
    exitTarget() {
        if(this.arrHero.length<=0){
            this.isAtk = false;

            this.isSkill = false
            this.isMeet = false;
            this.anim.play("idle")
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
        }

    }
    update(dt: any): void {

    }
    // btn_skillCircle() {
    //     // for (let i = 0; i < 12; i++) {
    //     //     let rd = Math.floor(Math.random() * 2)

    //     //     let bullet = cc.instantiate(this.preBullet);
    //     //     let angle = (-Math.PI) + (Math.PI * i / 6);
    //     //     let pos = cc.v3(0, 0);
    //     //     this.node.addChild(bullet);
    //     //     bullet.zIndex=cc.macro.MIN_ZINDEX
    //     //     bullet.setPosition(pos.add(cc.v3(0, -50)));
    //     //     // bullet.getChildByName("circle").children[0].color = new cc.Color().fromHEX("#4ED3EC");
    //     //     bullet.scale = 0.4
    //     //     let param = (this.node.scaleX < 0) ? (-400 - 50 * rd) : (400 + 50 * rd)
    //     //     cc.tween(bullet).to(1, { position: cc.v3(param * Math.cos(angle), param * Math.sin(angle)).add(cc.v3(0, -50)) }).call(() => {
    //     //         // bullet.getComponent(cc.Animation).play()
    //     //    bullet.destroy()
    //     //     }).start();
    //     // }

    // }
}
