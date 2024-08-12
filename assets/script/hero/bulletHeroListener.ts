import bullet from '../bullet'
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    bulletNode: cc.Node = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    // setDame(damage) {
    //     this.damage = damage;
    // }
    onCollisionEnter(other, self) {
        let heroComp = cc.Canvas.instance.node.getComponent('Game').heroComp
        if (other.node.getComponent('enemyListener') && self.node.getComponent('bulletHeroListener')) {
            let target = other.node.getComponent('enemyListener').target;
            let bulletComp = this.bulletNode.getComponent(bullet);
            target.getComponent('enemy').attacked(bulletComp.damage);

            if(!bulletComp.isShuriken) {
                this.scheduleOnce(() => {
                    if(self.node.getChildByName('explode')) {
                        self.node.getComponent(cc.CircleCollider).enabled = false;
                        self.node.stopAllActions();
                        self.node.getChildByName('explode').active = true;
                        // self.node.getChildByName('trail1').active = false;
                        self.node.getChildByName('icon').active = false;
                    }
                }, 0.01);
                this.scheduleOnce(() => {
                    self.node.destroy();
                }, 0.12);
            }
           
            
        }
        if (other.node.name=="wall1") {
       
            this.scheduleOnce(() => {
                if (self.node.getChildByName('explode')) {
                    self.node.getComponent(cc.CircleCollider).enabled = false;
                    self.node.stopAllActions();
                    self.node.getChildByName('explode').active = true;
                    // self.node.getChildByName('trail1').active = false;
                    self.node.getChildByName('icon').active = false;
                }
            }, 0.01);
            this.scheduleOnce(() => {
                self.node.destroy();
            }, 0.12);
        }
    }
}

    // update (dt) {}

