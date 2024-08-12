globalThis.gold = 0
globalThis.wood = 10
declare const window: any;

import H from '../hero/hero'
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    arrow: cc.Node = null
    @property(cc.Node)
    circle: cc.Node = null;
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Camera)
    mainCamera2: cc.Camera = null;
    @property(cc.Node)
    hero: cc.Node = null;
    // @property(cc.Node)
    // goku: cc.Node = null;
    @property(cc.Node)
    kazetsu: cc.Node = null;
    @property(cc.Node)
    arthur: cc.Node = null;
    @property(cc.Node)
    lucia: cc.Node = null;
    @property(cc.Node)
    mako: cc.Node = null;
    @property(cc.Node)
    mechaman: cc.Node = null;
    @property(cc.Node)
    auriel: cc.Node = null;
    @property(cc.Node)
    listChest: cc.Node = null
    // @property(cc.Node)
    // listCard: cc.Node = null

    @property(cc.Node)
    heroNode: cc.Node = null;
    @property(cc.Node)
    coinBar: cc.Node = null;
    @property(cc.Prefab)
    preDamage: cc.Prefab = null;
    @property(cc.Prefab)
    preBonus: cc.Prefab = null;
    @property(cc.Prefab)
    preFxAtk: cc.Prefab = null;
    @property(cc.Prefab)
    preCoin: cc.Prefab = null;
    @property(cc.Prefab)
    preWood: cc.Prefab = null;
    @property(cc.Prefab)
    preEnemies: cc.Prefab = null;
    @property(cc.Prefab)
    preEnemies2: cc.Prefab = null;

    @property(cc.Node)
    listEnemy: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.AudioClip)
    bgSOund: cc.AudioClip = null
    @property(cc.AudioClip)
    soundGem: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundCard: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundComfirm: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundEnd: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundEnemyDie: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundUpdate: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundBtn: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundput: cc.AudioClip = null;
    @property(cc.Node)
    JoyStick: cc.Node = null;

    @property(cc.Node)
    uiNode: cc.Node = null
    @property(cc.Node)
    endGameNode: cc.Node = null
    @property(cc.Prefab)
    preMeat: cc.Prefab = null;

    @property(cc.Node)
    listHero: cc.Node = null
    @property(cc.Node)
    guild: cc.Node = null;
    @property(cc.Node)
    house1: cc.Node = null
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    currency: cc.Node = null;
    @property(cc.Prefab)
    preEnemyDie: cc.Prefab = null;
    @property(cc.Node)
    boss: cc.Node = null;
    @property(cc.Node)
    listEnemy2: cc.Node = null;
    @property(cc.Node)
    block: cc.Node = null
    @property(cc.Prefab)
    fxtele: cc.Prefab = null;
    @property(cc.Prefab)
    fxXuatHien: cc.Prefab = null;
    @property(cc.Node)
    bloodBar: cc.Node = null;
    @property(cc.Node)
    chest: cc.Node = null;

    adChanel = '{{__adv_channels_adapter__}}'
    isMoving = false;
    isvertical = false;
    heroComp = null;
    isPauseGame = false;
    isCountEnemiesDie = 0;
    // isPhase2 = false
    isSound = false
    isMain = null;
    isEndGame = false;
    isCountFollow = 0;
    isCountHero = 0;
    arrHero = [];
    listArrPos = [cc.v3(-600 + 509, -80 + 70), cc.v3(-611 + 510, 36 + 10), cc.v3(-415 + 509, 17 + 61), cc.v3(-415 + 509, 17 - 61)]

    // protected onLoad(): void {

    // }
    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        // let manager = cc.director.getCollisionManager();

        // manager.enabled = true;

        // // Enabled draw collider
        // manager.enabledDebugDraw = true;

        // // Enabled draw collider bounding box
        // manager.enabledDrawBoundingBox = true;
        this.arrHero.push(this.hero)
    }
    start() {
        // this.reponsive()
        if (this.adChanel == 'Mintegral') {
            window.gameReady && window.gameReady();
        }
        cc.audioEngine.play(this.bgSOund, true, 0.4)
        this.isMain = this.heroComp;
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.heroComp = this.hero.getComponent(H);
        this.isMoving = true
        cc.tween(this.mainCamera.node).delay(1.2).to(0.5, { position: this.hero.position.add(cc.v3(50, 50)) }).delay(0.3).call(() => {
            this.guild.active = true;
            this.JoyStick.active = true
            this.isMoving = false
        }).start()
        cc.tween(this.mainCamera2.node).delay(1.2).to(0.5, { position: this.hero.position.add(cc.v3(50, 50)) }).delay(0.3).call(() => {
            this.guild.active = true;
            this.JoyStick.active = true
            this.isMoving = false
        }).start()
    }
    showRuong() { }
    isPhase2 = false;
    phase2() {
        this.offJoyStick()
        console.log("check")
        this.isMoving = true
        this.boss.active = true;
        this.listEnemy2.active = true;
        this.listEnemy.active = false;
        for (let child of this.arrHero) {
            if (child.active == true) {
                let fx = cc.instantiate(this.fxtele)
                fx.parent = this.node
                fx.position = child.position
                this.scheduleOnce(() => {
                    child.opacity = 0
                }, 0.3)
            }

        }
        cc.tween(this.logo).by(0.2, { opacity: -255, position: cc.v3(0, -100) }).start()
        cc.tween(this.currency).by(0.2, { opacity: -255, position: cc.v3(0, -100) }).start()
        cc.tween(this.circle).to(0.3, { opacity: 0 }).start()
        this.scheduleOnce(() => {
            this.isMag = 100;

            cc.tween(this.mainCamera.node).to(0.7, { position: cc.v3(1050 + 50 + this.isMag, 900 + 50) }).call(() => {
            }).start()
            cc.tween(this.mainCamera2.node).to(0.7, { position: cc.v3(1050 + 50 + this.isMag, 900 + 50) }).call(() => {
            }).start()
            cc.tween(this.mainCamera).by(0.7, { zoomRatio: -0.25 }).start()
            cc.tween(this.mainCamera2).by(0.7, { zoomRatio: -0.25 }).start()
            // this.hero.position.add(cc.v3(50 + this.isMag, 50)
            this.scheduleOnce(() => {
                this.bloodBar.active = true;
                this.hero.position = cc.v3(1050, 900);
                this.block.active = true;
                this.isMoving = false
                this.house1.active = false;

                this.scheduleOnce(() => {
                    this.circle.opacity = 255
                    for (let child of this.arrHero) {
                        if (child.active == true) {
                            console.log("move")
                            let fx = cc.instantiate(this.fxXuatHien)
                            fx.parent = this.node
                            fx.position = child.position
                            this.scheduleOnce(() => {
                                child.opacity = 255
                            }, 0.3)
                        }

                    }
                    this.onJoyStick()

                }, 0.2)
                this.scheduleOnce(() => {

                })
                this.isPhase2 = true
            }, 0.7)
        }, 0.3)

    }
    onBoss() {
        this.boss.getComponent(cc.CircleCollider).enabled = true;
        this.boss.getChildByName("range").getComponent(cc.CircleCollider).enabled = true;
    }
    spawEnemy1() {
        this.spawEnemies(20)
        this.scheduleOnce(() => {
            this.spawEnemies(30)
        }, 2)
        this.scheduleOnce(() => {
            this.spawEnemies(30)
        }, 4)

    }
    spawEnemies(value) {
        for (let i = 0; i < value; i++) {
            let posX = Math.floor(Math.random() * -400) + Math.floor(Math.random() * 400);
            let posY = Math.floor(Math.random() * -550) + Math.floor(Math.random() * 550);
            let param = Math.floor(Math.random() * 2) + 1;
            let pos = null;
            if (i % 2 == 0) pos = this.hero.position.add(cc.v3(posX + i * 20, ((param % 2 == 0) ? -550 - i * 10 : 550 + i * 10)));
            else pos = this.hero.position.add(cc.v3((param % 2 == 0) ? -400 - i * 10 : 400 + i * 10, posY + i * 20));
            let enemy = this.createEnemy('enemy1', pos);
            enemy.getComponent('enemy').freeze = false
            enemy.getComponent('enemy').run();
        }

    }
    createEnemy(name, pos) {
        let enemy = null;
        let rd = Math.floor(Math.random() * 2)

        if (rd == 0) {
            enemy = cc.instantiate(this.preEnemies)

        }
        else {
            enemy = cc.instantiate(this.preEnemies2)

        }

        // switch (name) {
        //     case 'enemy1':
        //         enemy = cc.instantiate(this.preEnemies)
        //         break;

        // }
        this.listEnemy.addChild(enemy);
        enemy.setPosition(pos);
        // enemy.scaleX = enemy.scaleX * ((enemy.x < 0) ? 1 : -1);
        return enemy;
    }

    updateHouse(value) {
        this.offJoyStick()
        cc.audioEngine.play(this.soundput, false, 1)
        this.arrow.active = false
        for (let i = 0; i < value; i++) {
            this.scheduleOnce(() => {
                let wood = cc.instantiate(this.preWood);
                wood.parent = this.node
                wood.position = this.hero.position;
                wood.scale = 0.5
                let startPos = cc.v2(wood.x, wood.y);
                let posEnd = this.house1.parent.convertToWorldSpaceAR(this.house1.position)
                posEnd = this.node.convertToNodeSpaceAR(posEnd);
                // posEnd=cc.v2(posEnd.x,posEnd.y)
                let midPos = cc.v2((startPos.x + posEnd.x) / 2, (startPos.y + posEnd.y) / 2 + 400);
                cc.tween(wood).bezierTo(0.5, startPos, midPos, cc.v2(posEnd.x, posEnd.y + 200)).call(() => {
                    wood.destroy()
                    // if (this.house1.getComponent("house").isUpdate == 0) {
                    //     globalThis.wood--
                    // }
                    // else {
                    //     globalThis.gold -= 4
                    // }
                    switch (this.house1.getComponent("house").isUpdate) {
                        case 0:
                            globalThis.wood--;
                            break;
                        case 1:
                            globalThis.gold -= 4;
                            break;
                        case 2:
                            globalThis.gold -= 16;
                            break;
                    }
                    this.house1.getComponent("house").updateValue()
                    if (i == value - 1) {
                        cc.audioEngine.play(this.soundEnd, false, 1)

                        this.onJoyStick()
                        this.house1.getComponent("house").updateHouse()
                    }
                }).start()
                cc.tween(wood).to(0.5, { scale: 0.7 }).start()
            }, i * 0.05)

        }
    }
    updateHouse2(value) {
        this.offJoyStick()
        cc.audioEngine.play(this.soundput, false, 1)

        for (let i = 0; i < value; i++) {
            this.scheduleOnce(() => {
                let wood = cc.instantiate(this.preMeat);
                wood.parent = this.node
                wood.position = this.hero.position;
                wood.scale = 0.5
                let startPos = cc.v2(wood.x, wood.y);
                let posEnd = this.house1.parent.convertToWorldSpaceAR(this.house1.position)
                posEnd = this.node.convertToNodeSpaceAR(posEnd);
                // posEnd=cc.v2(posEnd.x,posEnd.y)
                let midPos = cc.v2((startPos.x + posEnd.x) / 2, (startPos.y + posEnd.y) / 2 + 400);
                cc.tween(wood).bezierTo(0.5, startPos, midPos, cc.v2(posEnd.x, posEnd.y + 200)).call(() => {
                    wood.destroy()
                    switch (this.house1.getComponent("house").isUpdate) {

                        case 2:
                            globalThis.gold -= 2;
                            break;
                    }
                    this.house1.getComponent("house").updateValue()
                    if (i == value - 1) {
                        this.onJoyStick()
                        cc.audioEngine.play(this.soundEnd, false, 1)
                        this.house1.getComponent("house").updateHouse()
                    }
                }).start()
                cc.tween(wood).to(0.5, { scale: 0.7 }).start()
            }, i * 0.05)

        }
    }

    addHero() {
        console.log("add Hero")
        if (this.isCountHero > 3) return;
        cc.audioEngine.play(this.soundCard, false, 0.8)
        // this.listCard.children[0].children[this.isCountHero].active = true;
        this.offJoyStick()
        // let pos = this.listArrPos[this.isCountHero]
        // this.isCountHero++
        // let hero = null;
        // switch (this.isCountHero) {
        //     case 1:
        //         hero = this.lucia;
        //         break;
        //     case 2:
        //         hero = this.kazetsu;
        //         break;
        //     case 3:
        //         hero = this.arthur;
        //         break;
        // }
        // this.arrHero.push(hero);
        // hero.getComponent("hero").localPos = pos;
        // hero.position = this.hero.position.add(pos);
        // hero.active = true;
    }
    btn_Claim(event, value) {
        // let btn = event.currentTarget.parent.parent
        cc.audioEngine.play(this.soundComfirm, false, 0.8)
        // this.isScale = true
        // cc.tween(btn).to(0.3, { scale: 0 }).delay(0.2).call(() => {
        // this.isScale = false
        let pos = this.listArrPos[this.isCountHero]
        this.isCountHero++
        let hero = null;
        switch (value) {
            case "1":
                hero = this.lucia;
                this.scheduleOnce(() => {
                    this.phase2()

                }, 0.3)
                break;
            case "2":
                hero = this.kazetsu;
                break;
            case "3":
                hero = this.mechaman;
                break;
            case "4":
                hero = this.arthur;
                break;
            case 5:
                hero = this.mako;
                break;
        }
        this.arrHero.push(hero);
        hero.getComponent("hero").localPos = pos;
        hero.position = this.hero.position.add(pos);
        hero.active = true;
        this.onJoyStick();
        let val = 0.12
        if (this.isUdcircle != 0) {
            val = 0.02
        }
        else {
            this.spawEnemy1()

        }

        // this.spawEnemies(30)

        // th (this.isUdcircle) {
        //     case 1:
        //         val=0

        this.isUdcircle++
        this.house1.getComponent("house").isMoving = false
        console.log("ud")
        // }
        cc.tween(this.circle).by(0.2, { scale: val }).start()
        // }).start()

    }
    isUdcircle = 0
    clickChest(value) {
        // console.log(value)
        // switch (value) {
        //     case 1:
        this.offJoyStick()
        this.transCoin(value)
        // break;

        // }
    }
    transCoin(value) {
        console.log("transcoin")
        let chest = this.listChest.children[value - 1]
        for (let i = 0; i < 8; i++) {
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundGem, false, 0.5)
                let rewardNode = cc.instantiate(this.preCoin);
                rewardNode.position = this.hero.position;
                rewardNode.parent = this.node;
                rewardNode.scale = 0
                let startPos = cc.v2(this.hero.x, this.hero.y);
                let endPos = cc.v2(chest.x, chest.y)
                let midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 400)
                cc.tween(rewardNode).to(0.3, { scale: 1 }).start()
                cc.tween(rewardNode).bezierTo(0.3, startPos, midPos, endPos).call(() => {
                    rewardNode.destroy();
                    if (i == 7) {
                        this.addHero();
                    }
                }).start()
            }, 0.12 * i)

        }
    }
    // checkLock(value) {

    // }

    offJoyStick() {
        this.JoyStick.active = false
        this.JoyStick.getComponent("JoyStick").touchEndEvent()
    }


    onJoyStick() {
        this.JoyStick.active = true
    }
    startGame() {
        this.hero.getComponent(cc.Collider).enabled = true;
        this.circle.getComponent(cc.PolygonCollider).enabled = true;
    }


    countDie(pos) {
        this.isCountEnemiesDie++
        this.createCoin(pos)
        let preDie = cc.instantiate(this.preEnemyDie);
        preDie.parent = this.node;
        preDie.position = pos;


    }

    createCoin(pos) {
        for (let i = 0; i < 1; i++) {
            let rewardNode = cc.instantiate(this.preCoin);
            let nodeScale = rewardNode.scale;
            rewardNode.scale = 0
            pos = this.listEnemy.convertToWorldSpaceAR(pos)
            pos = this.hero.convertToNodeSpaceAR(pos)
            rewardNode.parent = this.hero;
            cc.tween(rewardNode).delay(0.15 * i).call(() => {
                cc.audioEngine.play(this.soundGem, false, 0.5)

            }).set({ active: true, scale: 0, position: pos }).to(0.1, { scale: 0.5 })

                .to(0.4, { position: cc.v3(0, 50) }).call(() => {
                    globalThis.gold += 5
                    rewardNode.destroy();

                    let bonus = cc.instantiate(this.preBonus)
                    bonus.parent = this.hero;
                    bonus.position = cc.v3(0, 50)

                    bonus.scaleX = (this.hero.scaleX > 0) ? 1 : -1
                })
                .start();
        }
    }
    isCountUnlock = 0
    isCountHeroDie = 0
    countHeroDie() {
        this.isCountHeroDie++;

        // if (this.isCountHeroDie == 4) {
        //     this.onEndGame()
        // }
    }

    moveHeroToBoss() {
        this.heroComp.moveByPos(cc.v3(80, 50), 0.3)
        this.kazetsu.getComponent(H).moveByPos(cc.v3(400, 50), 0.3)
        // this.goku.getComponent(H).moveByPos(cc.v3(100, 50), 0.3)
        // this.mako.getComponent(H).moveByPos(cc.v3(50, 20), 0.1)

    }
    // touchEndEvent(event) {
    //     let pos = event.getLocation();
    //     // pos=this.scene1.convertToWorldSpaceAR(pos)
    //     pos = this.boss.parent.convertToNodeSpaceAR(pos)
    //     pos = pos.add(this.mainCamera.node.position)
    //     let posBoss = this.boss.position.add(cc.v3(0, 80))
    //     if (this.boss.position.sub(pos).mag() <= 300) {
    //         console.log("atk boss");
    //         cc.tween(this.boss.children[0]).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
    //         if (this.isFirst == false) {
    //             this.isFirst = true
    //             this.scheduleOnce(() => {
    //                 this.boss.getChildByName("hand").active = false;

    //             }, 1)
    //             this.moveHeroToBoss()
    //         }
    //         this.createDamageBoss(pos)
    //     }

    // }
    spawEnenmy() {
        // this.listIconHero[0].active = true;
        // this.listIconHero[2].active = true;
    }

    onEndGame() {
        if (this.isEndGame) return;
        this.isEndGame = true;
        // let chest = this.listChest.children[1]
        this.linkToStore.active = true;
        this.offJoyStick()
        // this.boxIcon.active = false
        // cc.tween(this.mainCamera).by(0.5, { zoomRatio: -0.3 }).start()
        // this.hero.position = cc.v3(1045, -209)
        // for (let i = 1; i < this.listArrPos.length; i++) {
        //     this.hero.parent.children[i].position = this.hero.position.add(this.listArrPos[i - 1])
        // }
        // for (let i = 0; i < 8; i++) {
        //     this.scheduleOnce(() => {
        //         cc.audioEngine.play(this.soundGem, false, 0.5)
        //         let rewardNode = cc.instantiate(this.preCoin);
        //         rewardNode.position = this.hero.position;
        //         rewardNode.parent = this.node;
        //         rewardNode.scale = 0
        //         let startPos = cc.v2(this.hero.x, this.hero.y);
        //         let endPos = cc.v2(chest.x, chest.y)
        //         let midPos = cc.v2((startPos.x + endPos.x) / 2, (startPos.y + endPos.y) / 2 + 400)
        //         cc.tween(rewardNode).to(0.3, { scale: 1 }).start()
        //         cc.tween(rewardNode).bezierTo(0.3, startPos, midPos, endPos).call(() => {
        //             rewardNode.destroy();
        //             if (i == 7) {
        //                 // this.addHero();

        //                 let chests = chest.children[0].getChildByName("chest")
        //                 // chest.children[0].getChildByName("icon").active = false;
        //                 chest.children[0].getChildByName("currentcy").active = false
        //                 chest.children[0].getChildByName("bang").active = false
        //                 chests.getComponent(cc.Sprite).setMaterial(0, cc.MaterialVariant.createWithBuiltin('2d-gray-sprite', chests.getComponent(cc.Sprite)));

        //                 this.linkToStore.active = true;
        //             }
        //         }).start()
        //     }, 0.12 * i)

        // }



        // cc.audioEngine.play(this.soundEnd, false, 1)
        // this.endGameNode.active = true;
        // this.linkToStore.active = true;
    }
    createMeat(pos) {
        let meat = cc.instantiate(this.preMeat);
        meat.parent = this.node
        meat.position = pos;
        meat.scale = 0.8
    }
    createDamage(pos) {
        if (this.isSound == false) {
            this.isSound = true
            cc.audioEngine.play(this.soundEnemyDie, false, 1)
            this.scheduleOnce(() => {
                this.isSound = false

            }, 0.15)
        }
        let rdx = Math.floor(Math.random() * 200) - 100
        let rdy = Math.floor(Math.random() * 100) + 80
        let damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node
        damagefx.position = pos.add(cc.v3(0, 0));;
        damagefx.scale = 1
        let damage = cc.instantiate(this.preDamage);
        damage.parent = this.node
        damage.position = pos.add(cc.v3(0, 0));
        let rd = Math.floor(Math.random() * 1000)
        damage.scale = 1.5
        damage.zIndex = cc.macro.MAX_ZINDEX
        let valueDamage = rd + 1000
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")

        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528")
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString()

    }
    createDamageBoss(pos) {
        if (this.isSound == false) {
            this.isSound = true
            cc.audioEngine.play(this.soundEnemyDie, false, 1)
            this.scheduleOnce(() => {
                this.isSound = false

            }, 0.15)
        }
        let rdx = Math.floor(Math.random() * 200) - 100
        let rdy = Math.floor(Math.random() * 100) + 80
        let damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node
        damagefx.position = pos.add(cc.v3(rdx, rdy + 100));;
        damagefx.scale = 1
        let damage = cc.instantiate(this.preDamage);
        damage.parent = this.node
        damage.position = pos.add(cc.v3(rdx, rdy + 100));
        let rd = Math.floor(Math.random() * 1000)
        damage.scale = 2
        damage.zIndex = cc.macro.MAX_ZINDEX
        let valueDamage = rd + 1000
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")

        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528")
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString()

    }
    bossDie(pos) {
        this.offJoyStick()
        this.chest.active = true
        this.isMoving = true;
        this.scheduleOnce(() => {
            let preDie = cc.instantiate(this.preEnemyDie);
            preDie.parent = this.node;
            preDie.position = pos;
            preDie.scale = 4;
            this.linkToStore.active = true;
            this.chest.getChildByName("hand").active = true;
        }, 0.3)
        cc.tween(this.mainCamera.node).to(0.4, { position: cc.v3(1360, 1200) }).start()
        cc.tween(this.mainCamera2.node).to(0.4, { position: cc.v3(1360, 1200) }).start()
        cc.tween(this.mainCamera).by(0.4, { zoomRatio: 0.8 }).start()
        cc.tween(this.mainCamera2).by(0.4, { zoomRatio: 0.8 }).start()

        cc.tween(this.bloodBar).by(0.3, { opacity: -255, position: cc.v3(0, 80) }).call(() => { this.bloodBar.active = false }).start()
    }
    reponsive() {
        // let canvas = this.node.getComponent(cc.Canvas);
        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.coinBar.scale = 1
        //         this.endGameNode.position = cc.v3(0, 0)
        //         this.endGameNode.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;
        //         }
        //         this.mainCamera.zoomRatio = 0.9
        //     }
        // }
        // else {
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.coinBar.scale = 1.3
        //     this.endGameNode.position = cc.v3(0, -100)
        //     this.endGameNode.scale = 1.2
        //     this.mainCamera.zoomRatio = 1.3
        // }
    }
    isScale = 1
    isMag = 0
    update() {
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(50 + this.isMag, 50)));
            this.mainCamera2.node.setPosition(this.hero.position.add(cc.v3(50 + this.isMag, 50)));

            // if (!this.isEndGame) {
            // }
        }
        // let canvas = this.node.getComponent(cc.Canvas);
        let deviceResolution = cc.view.getFrameSize();
        let check2 = (deviceResolution.width / 640)
        if (deviceResolution.width < deviceResolution.height) {
            if (!this.isvertical) {
                this.isvertical = true;

                // if (cc.winSize.height / cc.winSize.width < 1.35) {
                //     canvas.fitHeight = true;
                // }
            }
            // this.mainCamera.zoomRatio = 1;
            this.isScale = 1
            // this.listCard.position = cc.v3(0, 0)
            this.logo.scale = 0.9
            // this.logo.position=cc.v3(-200,419*check-50)
            // this.logo.getComponent(cc.Widget).left = 110
            // this.listCard.scale = 1
            this.currency.scale = 1
            // this.currency.getComponent(cc.Widget).right = 83
            this.logo.position = cc.v3(-200, 500)
            this.currency.position = cc.v3(236, 550)
            this.mainCamera.node.active = true;
            this.mainCamera2.node.active = false;
            if (deviceResolution.height / deviceResolution.width < 1.35) {
                this.logo.position = cc.v3(-200, 419)
                this.currency.position = cc.v3(236, 474)

            }

        }
        else {
            this.isvertical = false;
            this.currency.scale = 1.3
            // this.currency.getComponent(cc.Widget).right = 120
            this.isScale = 1.3
            // this.listCard.scale = 1.3
            // this.listCard.position = cc.v3(0, -70)
            // this.mainCamera.zoomRatio = 1.3
            this.mainCamera.node.active = false;
            this.mainCamera2.node.active = true;
            this.logo.scale = 1.2
            // this.logo.getComponent(cc.Widget).left = 200
            this.logo.position = cc.v3(-500 + 50, 419)
            this.currency.position = cc.v3(500, 474)

            // this.logo.getComponent(cc.Widget).h=300

        }
    }
}
