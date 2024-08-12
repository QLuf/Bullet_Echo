
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Camera)
    mainCamera: cc.Camera = null
    @property(cc.Node)
    hero: cc.Node = null
    @property(cc.Prefab)
    preDamage: cc.Prefab = null;
    @property(cc.Prefab)
    preBonusAmmo: cc.Prefab = null;
    @property(cc.Node)
    statusAtk: cc.Node = null
    @property(cc.Node)
    endcard: cc.Node = null
    @property(cc.Node)
    linkToStore: cc.Node = null;
    // @property(cc.Node)
    // miniMap: cc.Node = null
    isPauseGame = false;
    heroComp = null;
    isCountDie = 0
    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true;
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }
    start() {

        this.heroComp = this.hero.getComponent('hero');

    }
    createAmmo(pos) {
        let box = cc.instantiate(this.preBonusAmmo)
        box.parent = this.node;
        box.position = pos
    }
    countDie() {
        this.isCountDie++

        if (this.isCountDie == 1) {
            this.statusAtk.getComponent("status").setName("FIZZ")
        }
        if (this.isCountDie == 2) {
            this.statusAtk.getComponent("status").setName("ORN")
        }
        if (this.isCountDie == 3) {
            this.statusAtk.getComponent("status").setName("THANOS")
        }
        if (this.isCountDie == 3) {
            this.statusAtk.getComponent("status").setName("JINX")
        }
        if (this.isCountDie == 3) {
            this.statusAtk.getComponent("status").setName("GAM")
        }
        this.statusAtk.active = true
        this.statusAtk.children[0].getComponent(cc.Animation).play()
        if (this.isCountDie == 5) {
            this.scheduleOnce(() => {
                this.endcard.active = true;
                this.linkToStore.active = true
            }, 1)
        }

    }

    isMoving = false
    update(dt) {
        if (!this.isMoving) {
            this.mainCamera.node.setPosition(this.hero.position.add(cc.v3(0, 100)));
        }
        let canvas = this.node.getComponent(cc.Canvas);

        // if (cc.winSize.width < cc.winSize.height) {
        //     if (!this.isvertical) {
        //         this.isvertical = true;
        //         // this.mainCamera.zoomRatio = 2.2

        //         canvas.fitHeight = false;
        //         canvas.fitWidth = true;
        //         this.isPus = 0
        //         // if (this.isZoomed) {
        //         //     this.mainCamera.zoomRatio = 1.1

        //         // }
        //         // else {
        //         //     this.mainCamera.zoomRatio = 1

        //         // }
        //         this.iconGG.scale = 1
        //         this.coinBar.scale = 1
        //         if (cc.winSize.height / cc.winSize.width < 1.35) {
        //             canvas.fitHeight = true;

        //         }


        //     }
        // }
        // else {

        //     // this.mainCamera.zoomRatio = 2.2
        //     this.isvertical = false;
        //     canvas.fitHeight = true;
        //     canvas.fitWidth = false;
        //     this.iconGG.scale = 1.3
        //     this.coinBar.scale = 1.3
        //     this.isPus = 80
        // }
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

        // let damagefx = cc.instantiate(this.preFxAtk);
        // damagefx.parent = this.node
        // damagefx.position = pos;
        // damagefx.scale = 1.4

        // this.boss.getComponent("boss").attacked(90)


        // update (dt) {}
    }
}
