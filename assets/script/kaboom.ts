
import { Constant } from "./Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    bodySkeleton: sp.Skeleton = null;

    @property(cc.CircleCollider)
    bodyCollider: cc.CircleCollider = null;

    @property(cc.CircleCollider)
    rangeCollider: cc.CircleCollider = null;

    @property(cc.Prefab)
    heroBullet: cc.Prefab = null;

    @property(cc.Prefab)
    effect: cc.Prefab = null;

    @property(cc.Node)
    kameBeam: cc.Node = null;

    // @property(cc.Prefab)
    // heroKnife: cc.Prefab = null;

    // @property(cc.Prefab)
    // heroArrow: cc.Prefab = null;

    // @property(cc.Prefab)
    // fireBall: cc.Prefab = null;

    @property(cc.Sprite)
    blood: cc.Sprite = null;

    @property(cc.Integer)
    hp = 500;

    @property(cc.Integer)
    damage = 50;

    @property(cc.AudioClip)
    atkSound: cc.AudioClip = null;

    moveDir = null;

    directionX = null;

    isRun = false;

    isDie = false;

    speed = 250;

    maxHp = 0;

    enemyArr = [];

    isAttack = false;

    gamePlay = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.maxHp = this.hp;
        this.gamePlay = cc.Canvas.instance.node.getComponent('GamePlay_2');
    }
    run() {
        if (!this.isRun && !this.isDie) {
            this.isRun = true;
            this.bodySkeleton.setAnimation(0, 'fly', true);
            this.kameBeam.active = true;
        }
    }
    idle() {
        if (!this.isRun && !this.isDie) {
            this.bodySkeleton.setAnimation(0, 'fly idle', true);
            this.kameBeam.active = false;
        }
    }
    stop() {
        if (!this.isDie) {
            this.isRun = false;
            this.bodySkeleton.setAnimation(0, 'idle', true);
            this.kameBeam.active = false;
        }
    }
    attack() {
        if (this.enemyArr.length > 0) {
            if (!this.isAttack) {
                this.isAttack = true;
                this.bodySkeleton.schedule(() => {
                    //ss2 skill Flame
                    this.Flame();
                }, 2, cc.macro.REPEAT_FOREVER, 0);
            }
        }
    }
    attacked(damage) {
        if (this.isDie) return;
        this.hp -= damage;
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.node.getChildByName('holyRing').active = false;
            this.bodySkeleton.setAnimation(0, 'die', false);
            this.unscheduleAllCallbacks();
            this.bodySkeleton.unscheduleAllCallbacks();
            this.changeAnimation();
            this.gamePlay.joyStick.getComponent('Joystick').touchEndEvent();
            this.gamePlay.joyStick.active = false;
            // cc.Canvas.instance.node.emit(Constant.EVENT.END_GAME, false);
        }
        this.blood.fillRange = this.hp / this.maxHp;
    }
    removeEnemy(idEnemy) {
        this.enemyArr.forEach((enemy, index) => {
            if (enemy._id == idEnemy) this.enemyArr.splice(index, 1);
        })
        if (this.enemyArr.length == 0) {
            // this.bodySkeleton.unscheduleAllCallbacks();
            this.idle();
        }
    }

    Flame() {
        this.showEffect("flame_2", this.node);
        if (this.enemyArr.length > 0) {
            for (let j = 0; j < this.enemyArr.length; j++) {
                cc.audioEngine.play(this.atkSound, false, 0.5);
                this.showEffect("flame_3", this.enemyArr[j]);
            }
        }
    }

    showEffect(name, parent) {
        // if (this.isEnd) return;
        let effect = cc.instantiate(this.effect);
        parent.addChild(effect);
        effect.getComponent("effect").play(name);
        effect.zIndex = 100;
        return effect;
    }

    // shootKnife() {
    //     this.bodySkeleton.schedule(() => {
    //         for (let i = 0; i < 1; i++) {
    //             if (this.enemyArr.length > 1) {
    //                 let bullet = cc.instantiate(this.heroKnife);
    //                 let pos2 = this.enemyArr[1].position.add(cc.v3(50 * i, 50 * i));
    //                 let pos = (this.bodySkeleton.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
    //                 let angle = this.checkAngle(this.enemyArr[1])
    //                 this.createBullet(bullet, angle, pos, pos2,0.35)
    //             }
    //         }
    //     }, 0.25, cc.macro.REPEAT_FOREVER, 0.5)
    // }
    // skillFireBall() {
    //     this.schedule(() => {
    //         for (let i = 0; i < 1; i++) {
    //             if (this.enemyArr.length > 1) {
    //                 let bullet = cc.instantiate(this.fireBall);
    //                 bullet.zIndex = 5;
    //                 bullet.scaleX = (this.enemyArr[1].position.x < 0) ? 0.1 : -0.1
    //                 let pos2 = this.enemyArr[1].position;
    //                 let pos = this.enemyArr[1].position.add(cc.v3((this.enemyArr[1].position.x < 0) ? 500 : -500, (this.enemyArr[1].position.y < 0) ? 500 : 500))
    //                 let angle = 0
    //                 this.createBullet(bullet, angle, pos, pos2, 0.75)
    //             }
    //         }
    //     }, 0.4, cc.macro.REPEAT_FOREVER, 0);
    // }
    // skillKnife(pos) {
    //     for (let i = 0; i < 4; i++) {
    //         let bullet = cc.instantiate(this.heroKnife);
    //         let angle = -135 + 90 * i
    //         let angleR = angle * (Math.PI) / 180
    //         // bullet.angle = angle * 180 / Math.PI + 90;
    //         bullet.getComponent('bullet').isKnife = false;
    //         bullet.getComponent(cc.CircleCollider).enabled = false;
    //         let param = (bullet.scaleX < 0) ? -1000 : 1000
    //         let pos2 = pos.add(cc.v3(param * Math.cos(angleR), param * Math.sin(angleR)))
    //         this.scheduleOnce(() => {
    //             bullet.getComponent(cc.CircleCollider).enabled = true;
    //         }, 0.15)
    //         this.createBullet(bullet, angle, pos, pos2, 1);
    //     }
    // }
    // skillIceArrow() {
    //     this.schedule(() => {
    //         for (let i = 0; i < 10; i++) {
    //             let bullet = cc.instantiate(this.heroArrow);
    //             let angleR = (-Math.PI) + (Math.PI * i / 5);
    //             let pos = this.node.position.add(cc.v3(0, 30));
    //             let angle = angleR * 180 / Math.PI
    //             let param = (bullet.scaleX < 0) ? -1000 : 1000
    //             let pos2 = pos.add(cc.v3(param * Math.cos(angleR), param * Math.sin(angleR)))
    //             this.createBullet(bullet, angle, pos, pos2, 1);
    //         }
    //     }, 1, cc.macro.REPEAT_FOREVER, 1);
    // }
    createBullet(bullet, angle, pos, pos2, speed = 0.25) {
        this.node.parent.addChild(bullet);
        // bullet.getComponent('bulletHeroListener').setDame(this.damage);
        bullet.angle = angle
        bullet.setPosition(pos);
        // console.log(angle);
        let param = (this.bodySkeleton.node.scaleX < 0) ? -1000 : 1000;
        this.scheduleOnce(() => {
            bullet.getChildByName('trail1').active = true;
        }, 0.05)
        cc.tween(bullet).to(speed, { position: pos2 }).call(() => {
            bullet.getChildByName('explode').active = true;
            bullet.getChildByName('icon').active = false;
            this.scheduleOnce(() => {
                bullet.destroy();
            }, 0.12);
        }).start();
    }
    checkAngle(targetEnemy) {
        if (this.enemyArr.length > 0 && this.enemyArr) {
            let target = targetEnemy;
            let tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0
            let angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (this.node.x <= target.x) ? angle : angle + 180
            return angle;
        }
    }
    changeAnimation() {
        this.bodySkeleton.setCompleteListener(track => {
            let anim = (track.animation) ? track.animation.name : '';
            if (anim == 'die') {
                this.node.active = false;
                cc.Canvas.instance.node.emit(Constant.EVENT.END_GAME, false);
            }
        })
    }

    update(dt) {
        if (this.moveDir && this.directionX && this.isRun && !this.isDie) {
            let newPos = this.node.position.add(this.moveDir.mul(this.speed / 60));
            this.node.setPosition(newPos.clampf(cc.v3(-700, -750), cc.v3(700, 750)));
        }
        if (this.enemyArr.length > 0 && this.enemyArr && !this.isDie) {
            let target = this.enemyArr[0];
            if (target.x >= this.node.x + 20) {
                this.bodySkeleton.node.scaleX = -0.1;
            }
            else {
                this.bodySkeleton.node.scaleX = 0.1;
            }
        }
    }
}
