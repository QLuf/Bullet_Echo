// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    target:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    onCollisionEnter(other, self) {
        if (self.node.getComponent('enemyListener') && other.node.getComponent('heroListener')) {
            let target = self.node.getComponent('enemyListener').target;

            target.getComponent('enemy').attack(other.node);
            target.getComponent('enemy').arrHero.push(other.node)
        }
    }
    onCollisionExit(other, self) {
        if (self.node.getComponent('enemyListener') && other.node.getComponent('heroListener')) {
            let target = self.node.getComponent('enemyListener').target;
            target.getComponent('enemy').exitTarget(other.node._id);
        }


        // if(other.node.getComponent(EL)&& other.node.getComponent(EL).target) {
        //     this.target.getComponent(hero).removeEnemy(other.node._id);
        // }

    }

    // update (dt) {}
}
