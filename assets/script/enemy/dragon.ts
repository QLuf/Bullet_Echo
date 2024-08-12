
import enemy from "../enemy"
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends enemy {
    // @property(cc.Prefab)
    // atk_around: cc.Prefab = null;
    // @property(cc.Prefab)
    // atk_down: cc.Prefab = null;
    @property(cc.Node)
    skill2Node: cc.Node = null;
    @property(cc.Prefab)
    skill1Pre: cc.Prefab = null;
    @property(cc.Prefab)
    preBullet: cc.Prefab = null;
    countAtk = 0;
    @property(cc.AudioClip)
    atkSOund: cc.AudioClip = null;
    isCountDowskill = false
    attack(target) {
        this.isMeet = true;
        let targetComp = target.getComponent('hero');
        this.anim.scheduleOnce(() => {
            targetComp.attacked(this.damage);

        }, 0.3)
      
        this.skill2()
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
        this.isSkill = true;
        let arrBullet = [cc.v3(-231, -510), cc.v3(-126, -637), cc.v3(-325, -623), cc.v3(-142, -515),
        cc.v3(-428, -579), cc.v3(-314, -530), cc.v3(-217, -601), cc.v3(0, -534), cc.v3(-390, -540),cc.v3(50, -500),
        ]
        for (let i = 0; i < 10; i++) {
            let delay = i % 2;
            delay = delay * 0.4
            this.scheduleOnce(() => {

                let bullet = cc.instantiate(this.skill1Pre);
                bullet.parent = this.node.parent;
                bullet.position = arrBullet[i].add(cc.v3(0, 100))
                cc.tween(bullet).by(0.5, { position: cc.v3(0, -500) }).call(() => {
                    if (bullet.getChildByName('explode')) {
                        bullet.getComponent(cc.CircleCollider).enabled = false;
                        bullet.stopAllActions();
                        bullet.getChildByName('explode').active = true;
                        // bullet.getChildByName('trail1').active = false;
                        bullet.getChildByName('icon').active = false;
                    }
                }).start()
            }, delay)

        }
        this.scheduleOnce(() => {
            this.isSkill = false;
            this.skill2()
        }, 0.5)
    
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
   
    exitTarget() {
        this.isSkill = false
        this.isMeet = false;
        this.anim.play("idle")
        this.anim.unscheduleAllCallbacks();
    }
    update(dt: any): void {

    }
  
}
