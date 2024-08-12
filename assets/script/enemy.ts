// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Constant } from "./Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.CircleCollider)
    bodyCollider: cc.CircleCollider = null;

    @property(cc.PhysicsCircleCollider)
    bodyPhysicsCollider: cc.PhysicsCircleCollider = null;

    @property(cc.Sprite)
    blood: cc.Sprite = null;
    @property(cc.Prefab)
    bulletPrefab: cc.Prefab = null;
    @property(cc.Vec3)
    bulletPos = cc.v3(0, 0, 0)
    @property(cc.Boolean)
    isAD = false
    @property(cc.Boolean)
    isBoss = false
    @property(cc.Integer)
    timeSpeed = 0;
    @property(cc.Integer)
    hp = 0;
    @property(cc.Integer)
    timeBullet = 400;
    @property(cc.Integer)
    damage = 0;
    @property(cc.Integer)
    tag = 0;
    @property(cc.Label)
    lbHP: cc.Label = null;
    isMeet = false
    isDie = false;
    isFreeze = false;
    maxHp = 0;
    gamePlay = null;
    isSkill = false
    arrHero = []
    isAttack = false
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
        // this.node.zIndex = 2;
        this.maxHp = this.hp
        this.isFreeze = true;
        if(this.tag==1){
            this.moveIdle1()
        }
        if(this.tag==2){
            this.moveIdle2()
        }
    }

    run() {
        // this.anim.play("move")
    }
    moveIdle1() {
        cc.tween(this.node).repeatForever(
            cc.tween().set({ position: cc.v3(-166, 759) }).call(() => {
                this.anim.node.angle = -90
            }).to(1, { position: cc.v3(205, 700) }).call(() => {
                this.anim.node.angle = 180
            }).delay(0.8).call(() => {
                this.anim.node.angle = 90
            }).to(1, { position: cc.v3(-166, 759) }).delay(1)
        ).start()
    }
    moveIdle2() {
        cc.tween(this.node).repeatForever(
            cc.tween().set({ position: cc.v3(-705.211, 497.407) }).call(() => {
                this.anim.node.angle = 180
            }).to(1, { position: cc.v3(-654.008, 67.024) }).call(() => {
                this.anim.node.angle = 180
            }).delay(0.8).call(() => {
                this.anim.node.angle = 0
            }).to(1, { position: cc.v3(-705.211, 497.407) }).delay(1)
        ).start()
    }
    attacked(damage) {
        if (this.isDie) return;
        this.node.getComponent(cc.Animation).play()
        this.hp -= damage;
        this.lbHP.string = this.hp.toString()

        if (this.gamePlay != null) {
            this.gamePlay.createDamage(this.node.position)
            if (this.isBoss) {
                this.gamePlay.createDamageBoss(this.node.position)
                this.node.getComponent(cc.Animation).play()
            }
        }

        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
            // this.gamePlay.heroComp.removeEnemy2(this.node);
            // if (this.gamePlay != null) {
            //     if (this.isBoss) {

            //         this.gamePlay.bossDie(this.node.position)
            //     }
            //     else{
            this.gamePlay.countDie(this.node.position);

            //     }
            // }
            // this.gamePlay.createMeat(this.node.position);
            this.node.active = false;
            this.scheduleOnce(() => {
                this.node.active=false

            }, 0.3)

        }
        this.blood.fillRange = this.hp / this.maxHp;
    }
    completeEvent(type) {

    }
    addEvent(type) {

    }
    checkAngle(targetEnemy) {
        let target = targetEnemy;
        let tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0
        let angle = Math.atan(tan) * (180 / (Math.PI));
        angle = (this.node.x <= target.x) ? angle : angle + 180
        return angle;
    }
    attack(target) {
        if (this.isAttack) return;
        this.isMeet = true;
        this.isAttack = false
        if (this.arrHero[0]) {
            target = this.arrHero[0]

        }
        let targetComp = target.getComponent('hero');
        if (this.isAD) {
            // this.anim.play("atk")
            this.anim.scheduleOnce(() => {
                this.anim.node.angle = this.checkAngle(target) - 90;

                this.createBullet(target, targetComp)

            }, 0.4)
            this.anim.schedule(() => {
                // this.anim.play("atk")
                this.anim.scheduleOnce(() => {
                    this.anim.node.angle = this.checkAngle(target) - 90;

                    this.createBullet(target, targetComp)

                }, 0.4)
            }, 1, cc.macro.REPEAT_FOREVER, 0.5)
        }
        else {
            // this.anim.play("atk")
            this.anim.scheduleOnce(() => {
                targetComp.attacked(this.damage);
            }, 0.3)


            this.anim.schedule(() => {
                // this.anim.play("atk")
                this.anim.scheduleOnce(() => {
                    targetComp.attacked(this.damage);
                }, 0.3)
            }, 0.8, cc.macro.REPEAT_FOREVER, 0.5)
        }

        // this.anim.schedule(() => {
        //     if (this.isMeet) {
        //         targetComp.attacked(this.damage);
        //     }
        // }, 1, cc.macro.REPEAT_FOREVER, 0.5);
    }
    createBullet(target, targetComp) {
        let bullet = cc.instantiate(this.bulletPrefab);
        this.node.parent.addChild(bullet);
        bullet.zIndex = 10
        bullet.opacity = 0
        let pos = this.anim.node.convertToWorldSpaceAR(cc.v3(0, 167))
        pos = this.node.parent.convertToNodeSpaceAR(pos)
        // let bulletPos = (this.node.scaleX > 0) ? this.bulletPos : cc.v3(-this.bulletPos.x, this.bulletPos.y)
        bullet.position = pos
        let time = this.checkTimePos(bullet.position, target.position.add(cc.v3(0, 30)))



        let param = 1500;
        let angle2 = this.checkAngle2(this.node.position, target.position)
        angle2 = cc.misc.degreesToRadians(angle2)
        let pos3 = this.node.position.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)))
        cc.tween(bullet).set({ opacity: 255 }).call(() => { bullet.getChildByName("trial").active = true }).to(1, { position: pos3 }).call(() => {
            targetComp.attacked(this.damage);
            bullet.getChildByName("explode").active = true
bullet.destroy()
        }).start()
    }
    checkTimePos(pos1, pos2) {
        let time = pos1.sub(pos2).mag() / this.timeBullet
        return time
    }
    exitTarget(idHero) {


        this.arrHero.forEach((enemy, index) => {
            if (enemy._id == idHero) this.arrHero.splice(index, 1);
        })
        // this.isTarget = false
        if (this.arrHero.length == 0) {
            this.isMeet = false;
            this.isSkill = false;
            // this.anim.play("move");
            this.anim.unscheduleAllCallbacks();

        }





    }
    freeze() {
        this.isFreeze = true;
        this.node.getChildByName('snow').active = true;
        this.bodyPhysicsCollider.enabled = false;
        this.node.zIndex = 1;
        this.scheduleOnce(() => {
            this.isFreeze = false;
            this.bodyPhysicsCollider.enabled = true;
            this.node.getChildByName('snow').active = false;
            this.node.zIndex = 2;
        }, 2);
    }
    onPause(isPause) {
        if (!this.isFreeze) {
            // this.bodySkeleton.paused = isPause;
        }
        this.bodyCollider.enabled = !isPause;
        // this.bodySkeleton.unscheduleAllCallbacks();
    }
    checkAngle2(pos1, pos2) {
        let tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
        if (pos2.y == pos1.y) {
            if (pos2.x > pos1.x) return 0;
            if (pos2.x < pos1.x) return 180;
        }

        if (pos2.x == pos1.x) {
            if (pos2.y > pos1.y) return 90;
            if (pos2.y < pos1.y) return -90;
        }
        if (pos1.x == pos2.x && pos1.y == pos2.y) return 0;
        if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
            if (pos2.x > pos1.x && pos2.y > pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan));
            if (pos2.x > pos1.x && pos2.y < pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
            if (pos2.x < pos1.x && pos2.y > pos1.y) return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
            if (pos2.x < pos1.x && pos2.y < pos1.y) return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
        }
    }
    update(dt) {
        if (!this.isFreeze && !this.gamePlay.isPauseGame && this.isMeet == false && !this.isDie) {
            let hero = this.gamePlay.hero;
            // let localPos = this.node.position
            // this.node.scaleX = (this.node.x <= hero.x + 10) ? -1 : 1;
            let distance = Math.sqrt(Math.pow((this.node.x - hero.x), 2) + Math.pow((this.node.y - hero.y), 2))
            this.node.x = this.node.x + (dt * ((this.node.x < hero.x) ? 1 : -1)) * (Math.abs(this.node.x - hero.x) * 10 / this.timeSpeed);
            this.node.y = this.node.y + (dt * ((this.node.y < hero.y) ? 1 : -1)) * (Math.abs(this.node.y - hero.y) * 10 / this.timeSpeed);
            this.node.getChildByName("icon").angle = this.checkAngle2(this.node.position, this.gamePlay.hero.position) - 90;

        }
        if (this.gamePlay.isPauseGame) {
            this.onPause(true);
        }
        if (!this.gamePlay.isPauseGame) {
            this.onPause(false);
        }

    }
}
