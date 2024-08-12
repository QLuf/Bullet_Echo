
import { Constant } from "./Constant";
import H from "./hero/hero";
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    dot: cc.Node = null;
    @property(cc.Node)
    ring: cc.Node = null;
    @property(cc.Node)
    guild: cc.Node = null;
    @property(cc.Node)
    textName: cc.Node = null;

    radius = null;
    stickPos = null;
    touchLocation = null;
    gamePlay = null;
    offGuide = false;
    isMove = false;
    @property(cc.Node)
    textGuild: cc.Node = null
    isFirst = false
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.radius = this.ring.width / 2;
        this.initTouchEvent();
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');

    }
    initTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    }
    touchStartEvent(event) {
        // if (!this.offGuide) {
        //     this.offGuide = true;
        //     this.guild.active = false
        //     this.gamePlay.startGame()
        //     this.node.opacity = 255;
        //     if (!this.isFirst) {
        //         this.isFirst = true
        //         cc.tween(this.textGuild).to(0.2, { scale: 0.7 }).start()
        //     }
        //     // cc.Canvas.instance.node.emit(Constant.EVENT.SPAWN_ENEMY);
        // }
        // if (this.gamePlay.isPhase2) {
        //     this.gamePlay.isPhase2 = false;
        //     this.gamePlay.onBoss()
        // }
        const touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        const distance = touchPos.sub(this.ring.getPosition().mag());
        // if (this.radius > distance) {
        //     this.dot.setPosition(touchPos)
        // }
        this.gamePlay.heroComp.directionX = (this.dot.x > 0) ? -1 : 1;
        this.gamePlay.heroComp.run();
        // this.stickPos = touchPos;
        this.node.opacity = 255;
        this.touchLocation = event.getLocation();

        // for (let child of this.gamePlay.arrHero) {
        //     if (!this.gamePlay.heroComp.isSKill) {

        //         child.getComponent(H).directionX = (this.dot.x > 0) ? -1 : 1;
        //         child.getComponent(H).run();
        //     }
        // }
        // this.ring.setPosition(touchPos);
        // this.dot.setPosition(touchPos);

    }
    // isFirstENd = false
    touchMoveEvent(event) {
        if (this.touchLocation === event.getLocation()) {
            return false;
        }

        this.isMove = true
        this.textName.active = false
        const touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        const distance = touchPos.mag();
        const posX = this.stickPos.x + touchPos.x;
        const posY = this.stickPos.y + touchPos.y;

        const p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
        if (this.radius > distance) {
            this.dot.setPosition(cc.v2(posX, posY));
        }
        else {
            const x = this.stickPos.x + p.x * this.radius;
            const y = this.stickPos.y + p.y * this.radius;
            this.dot.setPosition(cc.v2(x, y));
        }
        this.gamePlay.heroComp.run();
        this.gamePlay.heroComp.moveDir = p;
        this.gamePlay.heroComp.directionX = (this.dot.x > 0) ? -1 : 1;

        // for (let child of this.gamePlay.arrHero) {
        //     if (!this.gamePlay.heroComp.isSKill) {
        //         child.getComponent(H).directionX = (this.dot.x > 0) ? -1 : 1;
        //         child.getComponent(H).run();
        //         child.getComponent(H).moveDir = p;
        //     }

        // }

    }
    touchEndEvent() {
        this.dot.setPosition(this.ring.getPosition());
        // this.node.opacity = 0;
        this.isMove = false;
        this.gamePlay.heroComp.stop();
        this.textName.active = true;
        // if (!this.isFirstENd) {
        //     this.isFirstENd = true
        //     cc.tween(this.textGuild).to(0.2, { scale: 0 }).start()
        // }
        // for (let child of this.gamePlay.arrHero) {
        //     child.getComponent(H).stop();

        // }
        // this.gamePlay.circle.getComponent("Circle").checkAtk()

    }

    update(dt) {
    }
}
