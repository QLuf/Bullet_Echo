
// import { Constant } from "./Constant";
import Enemy from '../enemy'
import Hero from "../hero/hero"
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.CircleCollider)
    bodyCollider: cc.CircleCollider = null;

    @property(cc.CircleCollider)
    rangeCollider: cc.CircleCollider = null;

    @property(cc.Prefab)
    heroBullet: cc.Prefab = null;
    @property(cc.Sprite)
    blood: cc.Sprite = null;
    @property(cc.Sprite)
    bloodSub: cc.Sprite = null;
    @property(cc.Prefab)
    preDamage: cc.Prefab = null
    @property(cc.Node)
    levelNode: cc.Node = null

    @property(cc.Boolean)
    isHaveSkill = true
    @property(cc.Integer)
    hp = 500;
    @property(cc.Integer)
    damage = 50;
    @property(cc.Integer)
    countDown = 0.4;
    @property(cc.Boolean)
    isAD = false;
    @property(cc.Boolean)
    isAuto = false;
    @property(cc.AudioClip)
    atkSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    chopSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    skill1Sound: cc.AudioClip = null;
    @property(cc.Prefab)
    preSkill1: cc.Prefab = null;
    @property(cc.Prefab)
    preSkill2: cc.Prefab = null;
    @property(cc.Label)
    lbHP: cc.Label = null;
    @property(cc.Integer)
    isLocalScale = 1;
    @property(cc.Boolean)
    isMain = false

    isSKill = false;
    moveDir = null;
    directionX = null;
    isRun = false;
    isDie = false;
    speed = 300;
    maxHp = 0;
    enemyArr = [];
    isAttack = false;
    isChop = false;
    gamePlay = null;
    isCountAtk = 0;
    arrPosFollow = [cc.v3(-238, -261), cc.v3(-43, -351), cc.v3(-170, -405), cc.v3(-101, 67)];
    isCountFollow = 0;

    localPos = cc.v3(0, 0);
    arrHero = [];
    arrFxSkill = []
    start() {
        this.maxHp = this.hp;
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
        // this.arrHero = cc.Canvas.instance.node.getComponent('Game21').arrHero
    }
    run() {
        if (this.isSKill) return;

        if (!this.isRun && !this.isDie) {

            this.isRun = true;
            // this.anim.play("move")
            // this.isAttack = false;


        }
    }
    idle() {
        if (!this.isRun && !this.isDie) {
            // this.anim.play("idle")
            this.isSKill = false
        }
    }
    onColider() {
        this.bodyCollider.enabled = true;
        this.rangeCollider.enabled = true;
    }
    isEnd = false
    offColider() {
        this.node.active = true
        this.bodyCollider.enabled = false;
        this.rangeCollider.enabled = false;
        this.node.scaleX = -1
        this.isAuto = false;
        this.isRun = false;
        this.isEnd = true
        this.unscheduleAllCallbacks()
        this.node.stopAllActions()
        this.node.getChildByName("hpBar").active = true;
        this.idle();
        this.node.getChildByName("fxAppear").getComponent(cc.Animation).play()
    }
    stop() {
        if (this.isSKill) return;
        if (!this.isDie) {
            // this.isAttack = false
            this.isRun = false;

            if (this.enemyArr.length > 0) {
                this.attack()
            }
            else {
                if (!this.isSKill) {
                    // this.anim.play("idle");
                }
            }
        }

    }
    showNoti() {
        this.node.getChildByName("preNoti").getComponent(cc.Animation).play()
    }
    attack() {

        // console.log(this.isRun,this.enemyArr.length)
        // this.enemyArr.push(enemy)

        // if (this.isRun) return;
        if (this.enemyArr.length > 0) {
            if (!this.isAttack) {
                this.isAttack = true;
                this.node.stopAllActions()
                this.isRun = false;
                this.schedule(() => {
                    this.shoot();

                }, 0.3)

            }
        }
        else {
            if (this.enemyArr.length == 0) {
                if (this.isAuto) {
                    this.anim.unscheduleAllCallbacks();
                    this.isAttack = false
                    this.idle();
                }
            }
        }
    }
    setDefault() {
        this.node.stopAllActions();
        this.isAttack = false;
        this.isRun = false;
        this.idle();
        this.node.getChildByName("fxAppear").getComponent(cc.Animation).play();
    }
    reload() {
        this.node.getChildByName("napdan").getComponent(cc.Animation).play()
        this.scheduleOnce(() => {
            this.gamePlay.createAmmo(this.node.position.add(cc.v3(-50, 50)))

        }, 0.2)
    }
    moveToPos(pos, time) {
        this.anim.play("move")
        cc.tween(this.node).to(time, { position: pos }).call(() => {
            this.idle()
        }).start();
    }
    moveByPos(pos, time) {
        this.anim.play("move")
        cc.tween(this.node).by(time, { position: pos }).call(() => {
            this.anim.play("idle")
            this.onColider()
        }).start();
    }
    attacked(damage) {
        if (this.isDie) return;

        this.hp -= damage;
        this.lbHP.string = this.hp.toString()
        this.blood.fillRange = this.hp / this.maxHp;

        this.node.getComponent(cc.Animation).play()
        if (this.hp <= 100) return;
        if (this.hp <= 0) {
            this.hp = 0;
            this.bodyCollider.enabled = false;
            this.isDie = true;
            this.node.stopAllActions();
            this.unscheduleAllCallbacks();
            this.anim.unscheduleAllCallbacks();
            this.node.destroy()
        }
    }
    // checkAngle2(pos1, pos2) {
    //     let tan = Math.abs(pos2.y - pos1.y) / Math.abs(pos2.x - pos1.x);
    //     if (pos2.y == pos1.y) {
    //         if (pos2.x > pos1.x) return 0;
    //         if (pos2.x < pos1.x) return 180;
    //     }

    //     if (pos2.x == pos1.x) {
    //         if (pos2.y > pos1.y) return 90;
    //         if (pos2.y < pos1.y) return -90;
    //     }
    //     if (pos1.x == pos2.x && pos1.y == pos2.y) return 0;
    //     if (pos1.x !== pos2.x && pos1.y !== pos2.y) {
    //         if (pos2.x > pos1.x && pos2.y > pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan));
    //         if (pos2.x > pos1.x && pos2.y < pos1.y) return cc.misc.radiansToDegrees(Math.atan(tan)) * -1;
    //         if (pos2.x < pos1.x && pos2.y > pos1.y) return (180 - cc.misc.radiansToDegrees(Math.atan(tan)));
    //         if (pos2.x < pos1.x && pos2.y < pos1.y) return -(180 - cc.misc.radiansToDegrees(Math.atan(tan)));
    //     }
    // }
    removeEnemy(idEnemy) {
        this.enemyArr.forEach((enemy, index) => {
            if (enemy._id == idEnemy) this.enemyArr.splice(index, 1);
        })
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.isAttack = false
            if (this.isSKill == false) {
            }

        }
    }
    removeEnemy2(node) {
        this.enemyArr.forEach((enemy, index) => {
            if (enemy == node) this.enemyArr.splice(index, 1);
        })
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.node.stopAllActions()
            this.isAttack = false;


        }
    }
    check1() {
        if (this.enemyArr.length == 0) {
            this.anim.unscheduleAllCallbacks();
            this.isAttack = false
        }
    }
    skill1() {

    }
    skill2() {
    }

    shoot() {
        if (this.isSKill) return;
        // if (this.isRun) return;
        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
            let bullet = 1;
            // this.anim.play("atk")
            if (this.isAD) {
                if (this.enemyArr[0] && this.enemyArr[0].position) {
                    let posE = this.enemyArr[0].position
                    // this.node.scaleX = (this.node.x > posE.x) ? this.isLocalScale : -this.isLocalScale;
                    this.anim.node.angle = this.checkAngle(this.enemyArr[0]) - 90;
                    for (let i = 0; i < bullet; i++) {
                        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                            cc.audioEngine.play(this.atkSound, false, 0.5);
                            let bullet = cc.instantiate(this.heroBullet);
                            let pos2 = posE.add(cc.v3(50 * i, 50 * i));
                            // let pos = (this.anim.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
                            let pos = this.anim.node.convertToWorldSpaceAR(cc.v3(0, 167))
                            pos = this.node.parent.convertToNodeSpaceAR(pos)
                            let angle = this.checkAngle(this.enemyArr[0]);

                            this.createBullet(bullet, angle, pos, pos2)
                        }
                    }
                }



            }
            else {
                if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                    this.isCountAtk++
                    if (this.isCountAtk > 4) {
                        this.isCountAtk = 0
                    }
                    if (!this.isHaveSkill) {
                        this.isCountAtk = 0
                    }
                    cc.audioEngine.play(this.atkSound, false, 1);
                    let randomRate = Math.floor(Math.random() * 100) + 1;
                    let dame = this.damage
                    this.node.scaleX = (this.node.x > this.enemyArr[0].x) ? this.isLocalScale : -this.isLocalScale;
                    if (this.isCountAtk == 4) {
                        this.skill1()
                        this.isCountAtk = 0
                    }
                    else {
                        this.anim.play("atk")
                        if (this.enemyArr.length > 0 && this.enemyArr[0]) {
                            cc.audioEngine.play(this.atkSound, false, 0.5);
                            let bullet = cc.instantiate(this.heroBullet);
                            let pos2 = this.enemyArr[0].position.add(cc.v3(50 * 0, 50 * 0));
                            let pos = (this.anim.node.scaleX < 0) ? this.node.position.add(cc.v3(0, 30)) : this.node.position.add(cc.v3(0, 30));
                            let angle = this.checkAngle(this.enemyArr[0]);
                            if (this.node.name == "mechaman") {
                                // pos = this.node.position.add(cc.v3(187 - 69, 32 - 15))
                                pos = (this.node.scaleX < 0) ? this.node.position.add(cc.v3(200 - 69, 32 - 15)) : this.node.position.add(cc.v3(-200 + 69, 32 - 15))
                            }
                            this.createBullet(bullet, angle, pos, pos2)
                        }
                    }
                }
            }
        }
        else {
            this.isAttack = false
            this.isSKill = false
            this.idle()
        }
    }
    checkTimePos(pos1, pos2) {
        let time = pos1.sub(pos2).mag() / 200;
        return time;
    }
    // moveToPos(){}

    eventComplete(name) {
        switch (name) {
            case "atk":
                if (this.enemyArr.length == 0) {
                    this.idle()
                }
                else {
                    this.shoot();
                }
                if (this.enemyArr[0]) {
                    this.enemyArr[0].getComponent(Enemy).attacked(this.damage);
                }
                break;
            case "skill1":
                this.isSKill = false
                if (this.enemyArr.length == 0) {
                    this.idle()
                }
                else {
                    this.shoot();
                }
                if (this.enemyArr[0]) {
                    this.enemyArr[0].getComponent(Enemy).attacked(this.damage);
                }
                break;
            case "skill2":
                this.isSKill = false;
                if (this.enemyArr.length == 0) {
                    this.idle()
                }
                else {
                    this.shoot();

                }
                break;
        }
    }
    stopG() {
        this.unscheduleAllCallbacks()
        this.anim.unscheduleAllCallbacks()
        this.anim.play("idle")
        this.isRun = false
    }

    createBullet(bullet, angle, pos, pos2, speed = 0.35) {

        this.node.parent.addChild(bullet);
        if (this.node.name != "kazetsu") {
            bullet.angle = angle

        }

        bullet.setPosition(pos);
        let param = 1500;
        let angle2 = this.checkAngle2(this.node.position, pos2)
        angle2 = cc.misc.degreesToRadians(angle2)
        let pos3 = this.node.position.add(cc.v3(param * Math.cos(angle2), param * Math.sin(angle2)))

        cc.tween(bullet).to(1.5, { position: pos3 }).call(() => {
            bullet.destroy()
            // if (bullet.getChildByName('explode')) {
            //     bullet.getChildByName('explode').active = true;
            // }
            // bullet.getChildByName('icon').active = false;

        }).start();
    }
    checkAngle(targetEnemy) {
        if (this.enemyArr.length > 0 && this.enemyArr && this.enemyArr[0]) {
            let target = targetEnemy;
            let tan = (target.x - this.node.x !== 0) ? (target.y - this.node.y - 30) / (target.x - this.node.x) : 0
            let angle = Math.atan(tan) * (180 / (Math.PI));
            angle = (this.node.x <= target.x) ? angle : angle + 180
            return angle;
        }
    }
    update(dt) {
        if (!this.isEnd) {


            if (this.moveDir && this.directionX && this.isRun && !this.isDie) {
                let newPos = this.node.position.add(this.moveDir.mul(this.speed / 60));
                // this.node.angle = this.checkAngle1(newPos);
                if (this.enemyArr.length == 0) {
                    this.node.getChildByName("icon").angle = this.checkAngle2(this.node.position, newPos) - 90;

                }
                this.node.setPosition(newPos);

                // if (this.moveDir && !this.isSKill) {
                //     if (this.moveDir.x > 0) {
                //         this.node.scaleX = -this.isLocalScale;
                //     }
                //     else {
                //         this.node.scaleX = this.isLocalScale;
                //     }

                // }
            }
            else {
                if (this.isMain == false && this.isRun) {
                    this.node.angle = this.checkAngle1(this.gamePlay.hero.position.add(this.localPos));

                    this.node.position = this.gamePlay.hero.position.add(this.localPos)
                }
            }

            // if (this.isRun == false) {
            //     if (this.enemyArr.length > 0 && this.enemyArr && !this.isDie) {
            //         let target = this.enemyArr[0];


            //     }
            // }
            // if (this.levelNode) {
            //     this.levelNode.scaleX = (this.node.scaleX > 0) ? 1 : -1;

            // }
            // if (this.localPos) {
            //     this.node.position = this.gamePlay.hero.position.add(this.localPos)
            // }
            // if (this.node.getChildByName("preNoti")) {
            //     this.node.getChildByName("preNoti").scaleX = (this.node.scaleX > 0) ? 1 : -1;

            // }
        }


    }

    checkAngle1(posTarget) {
        // let posHero = this.node.position
        // let pos2 = target.position.add(cc.v3(-this.camera.position.x,- this.camera.position.y))
        let pos2 = posTarget

        // pos2 = target.parent.convertToWorldSpaceAR(pos2);
        // pos2 = this.node.parent.convertToNodeSpaceAR(pos2);
        let pos = this.node.position
        let tan = (pos2.x - pos.x !== 0) ? (pos2.y - pos.y - 30) / (pos2.x - pos.x) : 0
        let angle = Math.atan(tan) * (180 / (Math.PI));
        angle = (pos.x <= pos2.x) ? angle : angle + 180;
        // let param = 5
        // let angle2 = this.checkAngle2(posHero, pos2)
        // angle2 = cc.misc.degreesToRadians(angle2)

        // console.log()
        // this.node.scaleX = (pos.x <= target.x) ? 0.5 : -0.5;
        return angle;




    }
    checkPos(posTarget) {
        // let target = this.target;
        let son = this.node.parent
        let pos2 = posTarget


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
}
