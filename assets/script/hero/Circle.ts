
import hero from './hero';
import enemy from '../enemy';
import EL from '../enemyListener';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    targetHero: cc.Node = null
    enemyArr = [];
    gamePlay = null;
    start() {
        this.gamePlay = cc.Canvas.instance.node.getComponent("Game21")
    }
    checkAtk() {
        if (this.enemyArr.length > 0) {
            console.log("atk", this.gamePlay.arrHero)

            for (let child of this.gamePlay.arrHero) {
                child.getComponent(hero).enemyArr = this.enemyArr
                child.getComponent(hero).attack(this.enemyArr[0])
            }
            // this.attack()
        }
        else {
            for (let child of this.gamePlay.arrHero) {
                child.getComponent(hero).stop()
            }
        }
    }
    onCollisionEnter(other, self) {
        if (other.node.name == "circleUpdate") {
            other.node.color = cc.Color.GREEN;
            other.node.parent.getComponent("house").checkUpdate()
        }
    }
 


    onCollisionExit(other, self) {
        if (other.node.name == "circleUpdate") {
            other.node.color = cc.Color.WHITE
            // this.enemyArr.push(other.node);
            // this.target.getComponent(hero).enemyArr.push(other.node.getComponent(EL).target);
        }
        // if (other.node.getComponent(EL)) {
        //     for (let child of this.gamePlay.arrHero) {

        //         child.getComponent(hero).removeEnemy(other.node._id);
        //     }
        //     this.removeEnemy(other.node._id);
        //     if (this.enemyArr.length == 0) {
        //         this.node.color = cc.color().fromHEX("#98DBF5")

        //     }
        // }
    }
    onCollisionStay(other, self) {
        // if (other.node.getComponent(EL) && other.node.getComponent(EL).target && this.target.getComponent(hero).isAttack == false) {
        //     // this.target.getComponent(hero).attack();
        // }
        if (other.node.name == "circleUpdate") {
            other.node.parent.getComponent("house").checkUpdate()
        }
    }
    removeEnemy(idEnemy) {
        this.enemyArr.forEach((enemy, index) => {
            if (enemy._id == idEnemy) this.enemyArr.splice(index, 1);
        })
        if (this.enemyArr.length == 0) {

            for (let child of this.gamePlay.arrHero) {
                child.getComponent(hero).stop()
            }
        }
    }
    update(dt) {
        this.node.position = this.targetHero.position
    }
}
