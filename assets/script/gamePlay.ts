
globalThis.gold = 0
import H from "./hero/hero"
declare const window: any;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    hero: cc.Node = null;
    @property(cc.Node)
    hero2: cc.Node = null;
    @property(cc.Node)
    eff_summon: cc.Node = null;
    @property(cc.Node)
    btnStart: cc.Node = null;
    @property(cc.Node)
    btnStart2: cc.Node = null;
    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    @property(cc.Camera)
    uiCamera: cc.Camera = null;
    @property(cc.Node)
    gate: cc.Node = null;

    @property(cc.Node)
    listHero1: cc.Node = null;
    @property(cc.Node)
    listHero2: cc.Node = null;
    @property(cc.Node)
    listHeroDefault: cc.Node = null;
    @property(cc.Node)
    heroNode: cc.Node = null;
    @property(cc.Node)
    tree2: cc.Node = null
    @property(cc.Prefab)
    preDamage: cc.Prefab = null
    @property(cc.Prefab)
    preFxAtk: cc.Prefab = null

    @property(cc.Node)
    listTree: cc.Node[] = [];
    @property(cc.Node)
    unlockNode: cc.Node = null;
    @property(cc.Prefab)
    preWood: cc.Prefab = null;
    @property(cc.Prefab)
    preWood2: cc.Prefab = null;
    @property(cc.Node)
    missionBar: cc.Node = null;
    @property(cc.Node)
    sceneBattle: cc.Node = null;
    @property(cc.Node)
    bloodBar: cc.Node = null
    @property(cc.Node)
    boss: cc.Node = null
    //nhac
    @property(cc.AudioClip)
    soundBg: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundChop: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWoddy: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWoodin: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundWoodOut: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundQuestComplete: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundSword: cc.AudioClip = null;
    @property(cc.AudioClip)
    soundLight: cc.AudioClip = null;

    @property(cc.AudioClip)
    soundVictory: cc.AudioClip = null;

    @property(cc.Node)
    endGameNode: cc.Node = null;
    @property(cc.Node)
    textGuide: cc.Node = null;
    @property(cc.Node)
    linkToStore: cc.Node = null;
    @property(cc.Node)
    coinBar: cc.Node = null;
    @property(cc.Node)
    bossBar: cc.Node = null;
    @property(cc.Node)
    listBtn: cc.Node = null;
    @property(cc.Node)
    uiNode: cc.Node = null;
    @property(cc.Node)
    warning: cc.Node = null;
    @property(cc.Node)
    iconGG: cc.Node = null;
    @property(cc.Node)
    scene1: cc.Node = null;
    @property(cc.Prefab)
    preDie: cc.Prefab = null;
    @property(cc.Node)
    guild2: cc.Node = null;

    @property(cc.Prefab)
    skillLight: cc.Prefab = null;
    @property(cc.Prefab)
    skillSword: cc.Prefab = null;
    @property(cc.Node)
    popHero: cc.Node = null;
    isEndGame = false;
    isPus = 0
    isPauseGame = false;
    heroComp = null;
    isStep = 1;
    isMoving = false;
    isvertical = false
    isZoomed = false
    onLoad() {
        // window.gameReady && window.gameReady();

        cc.director.getPhysicsManager().enabled = true;
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.makeResponsive();
        cc.audioEngine.play(this.soundBg, true, 0.5);
        this.scheduleOnce(() => {
            this.listTree[0].getChildByName("arrow1").active = true
        }, 0.5)
    }


    start() {

        this.heroComp = this.hero.getComponent('hero');
        // this.hero.zIndex = 3;
    }
    update(dt) {
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(-70, 50)));
        }
        let canvas = this.node.getComponent(cc.Canvas);

        if (cc.winSize.width < cc.winSize.height) {
            if (!this.isvertical) {
                this.isvertical = true;
                // this.mainCamera.zoomRatio = 2.2

                canvas.fitHeight = false;
                canvas.fitWidth = true;
                this.isPus = 0
                // if (this.isZoomed) {
                //     this.mainCamera.zoomRatio = 1.1

                // }
                // else {
                //     this.mainCamera.zoomRatio = 1

                // }
                this.iconGG.scale = 1
                this.coinBar.scale = 1
                if (cc.winSize.height / cc.winSize.width < 1.35) {
                    canvas.fitHeight = true;

                }


            }
        }
        else {

            // this.mainCamera.zoomRatio = 2.2
            this.isvertical = false;
            canvas.fitHeight = true;
            canvas.fitWidth = false;
            this.iconGG.scale = 1.3
            this.coinBar.scale = 1.3
            this.isPus = 80
        }
    }

    btnCollect(event) {
        console.log(event)
        if (this.isStep < 2) {
            this.scheduleOnce(() => {
                this.listTree[this.isStep].getChildByName("arrow1").active = true
                this.listTree[this.isStep].getComponent(cc.Button).enabled = true
                this.isStep++
            }, 1.8)
        }
        else {
            this.scheduleOnce(() => {
                this.missionBar.getComponent(cc.Animation).play("mission_complete")
                cc.audioEngine.play(this.soundQuestComplete, false, 1)
                this.missionBar.getComponent("updateBar").reset(1)
            }, 2.7)
            this.scheduleOnce(() => {

                this.moveCam1()
                // this.isMoving = false

            }, 3)
        }
        let tree = event.currentTarget;
        tree.getComponent(cc.Button).enabled = false
        tree.getChildByName("arrow1").active = false
        this.heroComp.movePos(tree)


    }
    isPhase = 1;
    moveWood(wood) {
        cc.audioEngine.play(this.soundWoodin, false, 1)
        let pos = this.missionBar.position
        pos = pos.add(cc.v3(-50, 0))
        let pos2 = wood.parent.convertToWorldSpaceAR(wood.position);
        pos2 = this.uiNode.convertToNodeSpaceAR(pos2)
        if (this.isPhase == 1) {
            wood.parent = this.uiNode;

            wood.scale *= 1.3

            // wood.position = pos2.add(cc.v3(-this.mainCamera.node.position.x, -this.mainCamera.node.position.y));

            cc.tween(wood).to(0.4, { position: pos }).call(() => {
                this.missionBar.getComponent("updateBar").updateBar();
                wood.getComponent(cc.Animation).play("exp")
                cc.audioEngine.play(this.soundWoodOut, false, 1)
            }).start()
        }

    }
    moveCam1() {
        this.isMoving = true

        this.heroComp.moveToPos(cc.v3(-450, -120), 1.2)
        cc.tween(this.mainCamera.node).to(1.2, { position: cc.v3(-834, -5.3) }).start()
        cc.tween(this.mainCamera).by(1.2, { zoomRatio: 0.3 }).call(() => {
            this.transWood(this.gate)
        }).start()
    }
    transWood(nodeEnd) {
        let pos = nodeEnd.position
        for (let i = 0; i < 8; i++) {
            let wood = cc.instantiate(this.preWood);
            wood.parent = this.scene1;
            wood.position = this.hero.position;
            wood.scale = 1.2
            let midPos = cc.v2((this.hero.x + pos.x + 90) / 2, (this.hero.y + 200))
            let endPos = pos.add(cc.v3(0, 0))

            cc.tween(wood).delay(i * 0.08).set({ opacity: 255 }).call(() => {
                cc.audioEngine.play(this.soundWoodin, false, 1)
            })
                .parallel(
                    cc.tween().bezierTo(0.3, cc.v2(this.hero.x, this.hero.y), midPos, cc.v2(endPos.x, endPos.y)).call(() => {
                        if (i == 7) {
                            this.summonHero()
                        }
                        wood.getComponent(cc.Animation).play("exp")
                    }),
                    cc.tween().by(0.3, { angle: 360 })
                ).start()
        }
    }
    transWood2(nodeEnd) {
        let pos = nodeEnd.position
        for (let k = 0; k < 2; k++) {
            let preHero = (k == 0) ? this.hero : this.hero2
            for (let i = 0; i < 8; i++) {
                let wood = cc.instantiate(this.preWood);
                wood.parent = this.scene1;
                wood.position = preHero.position;
                wood.scale = 1.2
                let midPos = cc.v2((preHero.x + pos.x + 90) / 2, (preHero.y + 200))
                let endPos = pos.add(cc.v3(0, 0))

                cc.tween(wood).delay(i * 0.08).set({ opacity: 255 }).call(() => {
                    cc.audioEngine.play(this.soundWoodin, false, 1)
                })
                    .parallel(
                        cc.tween().bezierTo(0.3, cc.v2(preHero.x, this.hero.y), midPos, cc.v2(endPos.x, endPos.y)).call(() => {
                            if (i == 7 && k == 1) {
                                this.summonHero2()
                            }
                            wood.getComponent(cc.Animation).play("exp")
                        }),
                        cc.tween().by(0.3, { angle: 360 })
                    ).start()
            }
        }


    }
    summonHero2() {
        this.popHero.getComponent(cc.Animation).play("pop_close")
        this.scheduleOnce(() => {
            this.listHeroDefault.active = true
            cc.audioEngine.play(this.soundQuestComplete, false, 2)

            this.scheduleOnce(() => {
                // this.btn_Start2()
                this.btnStart2.active = true
            }, 0.4)
        }, 0.5)

    }
    btn_Start2(event) {
        this.sceneBattle.getChildByName("endGame").active = false
        cc.audioEngine.play(this.soundQuestComplete, false, 1)

        // this.endGameNode.active = false;
        this.sceneBattle.active = true;
        this.listHero1.active = false
        event.currentTarget.active = false;
        this.mainCamera.zoomRatio = 1;
        this.sceneBattle.active = true;
        this.mainCamera.node.position = cc.v3(0, 0);
        this.scheduleOnce(() => {
            this.listHero2.active = true
            this.bloodBar.active = true;

        }, 0.3)
        this.scheduleOnce(() => {
            this.moveHero2()
        }, 0.45)
    }
    showSkill() {
        let arrPos = [cc.v3(0, 0), cc.v3(-300, -50), cc.v3(-150, -10), cc.v3(-200, 20), cc.v3(-100, -30)]
        let count = 0
        this.schedule(() => {

            let light = cc.instantiate(this.skillLight)
            light.parent = this.sceneBattle;
            light.position = this.boss.position
            light.zIndex = 10
            if (count < 5) {
                light.position = this.boss.position.add(arrPos[count])

                count++
            }
            else {
                count = 0
            }
            cc.audioEngine.play(this.soundLight, false, 0.8)

            this.scheduleOnce(() => {
                this.createDamageBoss(this.boss.position)
            }, 0.4)
        }, 0.6)
        this.scheduleOnce(() => {
            let light = cc.instantiate(this.skillSword)
            light.parent = this.sceneBattle;
            light.position = this.boss.position.add(cc.v3(-2, 0))
            light.zIndex = 10
            cc.audioEngine.play(this.soundSword, false, 0.8)
        }, 2)
        this.scheduleOnce(() => {
            let light = cc.instantiate(this.skillSword)
            light.parent = this.sceneBattle;
            light.position = this.boss.position.add(cc.v3(-2, 0))
            light.zIndex = 10
            this.scheduleOnce(() => {
                cc.audioEngine.play(this.soundSword, false, 1)

            }, 0.3)

        }, 4)
    }
    moveHero2() {
        for (let child of this.listHero2.children) {
            child.getComponent(H).moveByPos(cc.v3(0, 300), 1)
            this.scheduleOnce(() => {
                let p = (child.getChildByName("icon").scaleX > 0) ? cc.v3(-100, 80) : cc.v3(100, 80)
                this.schedule(() => {
                    this.createDamage(child.position.add(p))

                }, 0.8)
                this.createDamage(child.position.add(p))
            }, 1)
        }
        this.scheduleOnce(() => {
            this.showSkill()
        }, 1)



    }
    summonHero() {
        this.eff_summon.active = true
        this.missionBar.getComponent(cc.Animation).play("mission_complete2")
        cc.audioEngine.play(this.soundQuestComplete, false, 2)
        this.scheduleOnce(() => {
            this.hero2.active = true;
            this.missionBar.active = false
        }, 0.3)
        this.scheduleOnce(() => {
            this.hero2.getComponent(H).moveToPos(cc.v3(-595, -160), 0.8)
            this.hero.getComponent(H).moveToPos(cc.v3(-519, -154), 0.8)
            this.scheduleOnce(() => {
                this.btnStart.active = true;

            }, 0.7)
        }, 0.8)

    }
    btn_battle(event) {
        // this.isPhase = 2

        // event.currentTarget.active = false;
        // cc.audioEngine.play(this.soundQuestComplete, false, 1)

        // this.mainCamera.zoomRatio = 1;
        // this.sceneBattle.active = true;
        // this.mainCamera.node.position = cc.v3(0, 0);
        // this.warning.active = true;
        // let pos = [cc.v3(146, -106), cc.v3(-102, -134)];
        // this.scheduleOnce(() => {
        //     this.bloodBar.active = true;
        //     this.listHero1.children[0].getComponent(H).moveToPos(cc.v3(146, -0), 1)
        //     this.scheduleOnce(() => {
        //         this.listHero1.children[0].getComponent(H).skill1("arthur")
        //     }, 0.8)
        //     this.scheduleOnce(() => {
        //         this.listHero1.children[1].getComponent(H).skill1("woody")
        //     }, 0.8)
        //     this.listHero1.children[1].getComponent(H).moveToPos(cc.v3(-102, -30), 1)
        // }, 0.3)

    }
    endPhase1() {
        for (let child of this.listHero1.children) {
            let pos = child.position;
            let die = cc.instantiate(this.preDie);
            die.parent = this.listHero1.parent;
            die.position = pos.add(cc.v3(0, 50))
            die.zIndex = 3
        }
        this.listHero1.children[0].active = false;
        this.listHero1.children[1].active = false;
        this.scheduleOnce(() => {
            this.sceneBattle.getChildByName("endGame").active = true
        }, 0.5)
        this.scheduleOnce(() => {
            this.tree2.active = true


            this.sceneBattle.active = false;
            this.warning.active = false;
            this.bloodBar.active = false;
            this.scheduleOnce(() => {
                this.hero.position = cc.v3(52, -109);
                this.hero2.position = cc.v3(110, -92)
                this.hero2.getChildByName("icon").scaleX = 1.3
                this.hero.getChildByName("fxAppear").active = true
                this.hero.getChildByName("fxAppear").getComponent(cc.Animation).play()
                this.hero2.getChildByName("fxAppear").active = true

                this.hero2.getChildByName("fxAppear").getComponent(cc.Animation).play()
            }, 0.2)
            this.scheduleOnce(() => {
                this.guild2.active = true
            }, 0.4)

        }, 1.3)

    }
    btnPhase2(event) {
        this.mainCamera.node.position = this.hero.position.add(cc.v3(-70, 50))
        this.guild2.active = false
        this.popHero.active = true
        event.currentTarget.getComponent(cc.Button).enabled = false
        let tree = event.currentTarget
        // this.heroComp.moveToPos(tree)
        this.heroComp.moveToPos(cc.v3(-51, -113), 0.6)
        this.hero2.getComponent(H).moveToPos(cc.v3(-18, -13), 0.6)
        this.scheduleOnce(() => {
            this.heroComp.chop(event.currentTarget)
            this.hero2.getComponent(H).chop(this.tree2.children[0])

        }, 0.6)
        this.scheduleOnce(() => {
            this.moveCam2()
        }, 2)
        this.isMoving = false
    }
    moveCam2() {
        this.isMoving = true
        this.hero2.getComponent(H).moveToPos(cc.v3(-455, -90), 1.7)
        this.heroComp.moveToPos(cc.v3(-485, -120), 1.7)
        cc.tween(this.mainCamera.node).to(1.7, { position: cc.v3(-834, -5.3) }).start()
        cc.tween(this.mainCamera).by(1.7, { zoomRatio: 0.2 }).call(() => {
            this.transWood2(this.gate)
        }).start()
    }
    // moveCam2() {
    //     cc.tween(this.mainCamera.node).to(0.35, { position: cc.v3(350, 0 + this.isPus) }).call(() => {
    //         this.enemyNode.active = true
    //         this.scheduleOnce(() => {
    //             this.warning.active = true;
    //         }, 0.5)
    //     }).delay(0.6).to(0.4, { position: cc.v3(260, 0 + this.isPus) }).start()
    //     let zoom = (this.isvertical) ? 1.1 : 2.2
    //     cc.tween(this.mainCamera).delay(1.1).to(0.4, { zoomRatio: zoom }).call(() => {
    //         this.isZoomed = true
    //         this.enemyNode.getChildByName("hand").opacity = 255
    //         this.linkToStore.active = true;
    //         this.missionBar.getComponent(cc.Animation).play("unlock_showup")

    //     }).start()


    // }

    makeResponsive() {
        let canvas = this.node.getComponent(cc.Canvas);
        let deviceResolution = cc.view.getFrameSize();

        // calculte design ratio
        let desiredRatio = canvas.designResolution.width / canvas.designResolution.height;
        // calculte device ratio
        let deviceRatio = deviceResolution.width / deviceResolution.height;

        if (deviceRatio >= desiredRatio) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        } else if (deviceRatio < desiredRatio) {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    }
    createHero(heroPre, value) {
        let hero = cc.instantiate(heroPre)
        hero.parent = this.heroNode;
        let pos = this.hero.position
        hero.position = pos.add(cc.v3(50, 50))
        if (value == 1 || value == 2) {
            hero.getComponent("hero").skillIceArrow()
            // hero.getComponent("hero").idle()
            this.scheduleOnce(() => {
                if (value == 2) {
                    hero.getComponent("hero").check1()
                }
            }, 0.4)
        }
    }
    isRed = false
    updateBossBar() {
        let bar = this.bossBar.getChildByName("bar").getComponent(cc.Sprite);
        bar.fillRange -= 0.015;
        let iconBoss = this.bossBar.getChildByName("iconBoss")
        let value = -6

        if (iconBoss.x - 5 < -168) {
            iconBoss.x = -168
            value = 0
        }
        cc.tween(iconBoss).by(0.2, { position: cc.v3(value, 0) }).start()
        if (bar.fillRange <= 0.3) {
            if (this.isRed == false) {
                this.isRed = true
                this.bossBar.getComponent(cc.Animation).play("red_bar");

            }

        }
    }
    createDamage(pos) {
        let damage = cc.instantiate(this.preDamage);
        damage.parent = this.node
        damage.position = pos;
        let rd = Math.floor(Math.random() * 1000)
        damage.scale = 2
        // let damage = cc.instantiate(this.preDamage)
        let valueDamage = rd + 1000
        damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")

        if (valueDamage > 1200) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C236DD")
        }
        if (valueDamage > 1500) {
            damage.getChildByName("count").color = new cc.Color().fromHEX("#C53528")
        }
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString()

        let damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node
        damagefx.position = pos;
        damagefx.scale = 1.4

        this.boss.getComponent("boss").attacked(90)


    }
    createDamageBoss(pos) {
        console.log("create dame")
        let damage = cc.instantiate(this.preDamage);
        damage.parent = this.node
        damage.position = pos;
        let rd = Math.floor(Math.random() * 1000)
        damage.scale = 3
        // let damage = cc.instantiate(this.preDamage)
        let valueDamage = rd + 800
        damage.getChildByName("count").color = new cc.Color().fromHEX("#F59022")
        damage.getChildByName("count").getComponent(cc.Label).string = "-" + valueDamage.toString()

        let damagefx = cc.instantiate(this.preFxAtk);
        damagefx.parent = this.node
        damagefx.position = pos;
        damagefx.scale = 1.4

        this.boss.getComponent("boss").attacked(107)


    }
    onEndGame() {
        cc.audioEngine.play(this.soundVictory, false, 0.8)
        this.unscheduleAllCallbacks()
        this.bloodBar.active = false;
        this.sceneBattle.getChildByName("endGame2").active = true
        this.linkToStore.active = true
        for (let child of this.listHero2.children) {
            child.getComponent("hero").stopG()
        }
    }
}
