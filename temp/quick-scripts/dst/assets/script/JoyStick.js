
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/JoyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e138tFidRDnLPhU89XWAAw', 'JoyStick');
// script/JoyStick.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dot = null;
        _this.ring = null;
        _this.guild = null;
        _this.textName = null;
        _this.radius = null;
        _this.stickPos = null;
        _this.touchLocation = null;
        _this.gamePlay = null;
        _this.offGuide = false;
        _this.isMove = false;
        _this.textGuild = null;
        _this.isFirst = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.radius = this.ring.width / 2;
        this.initTouchEvent();
        this.gamePlay = cc.Canvas.instance.node.getComponent('Game');
    };
    NewClass.prototype.initTouchEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    NewClass.prototype.touchStartEvent = function (event) {
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
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.stickPos = this.ring.getPosition();
        var distance = touchPos.sub(this.ring.getPosition().mag());
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
    };
    // isFirstENd = false
    NewClass.prototype.touchMoveEvent = function (event) {
        if (this.touchLocation === event.getLocation()) {
            return false;
        }
        this.isMove = true;
        this.textName.active = false;
        var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.mag();
        var posX = this.stickPos.x + touchPos.x;
        var posY = this.stickPos.y + touchPos.y;
        var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
        if (this.radius > distance) {
            this.dot.setPosition(cc.v2(posX, posY));
        }
        else {
            var x = this.stickPos.x + p.x * this.radius;
            var y = this.stickPos.y + p.y * this.radius;
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
    };
    NewClass.prototype.touchEndEvent = function () {
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
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ring", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "guild", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textName", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "textGuild", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKb3lTdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1JQztRQWhJRyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixhQUFPLEdBQUcsS0FBSyxDQUFBOztJQWdIbkIsQ0FBQztJQS9HRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWpFLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFD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UUFDOUMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QiwwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLDZEQUE2RDtRQUM3RCxJQUFJO1FBQ0osNkNBQTZDO1FBQzdDLG9DQUFvQztRQUVwQyxJQUFJO1FBQ0oseURBQXlEO0lBRTdELENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtJQUNULENBQUM7SUEvSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQVN6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBbEJSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtSTVCO0lBQUQsZUFBQztDQW5JRCxBQW1JQyxDQW5JcUMsRUFBRSxDQUFDLFNBQVMsR0FtSWpEO2tCQW5Jb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuaW1wb3J0IEggZnJvbSBcIi4vaGVyby9oZXJvXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG90OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByaW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBndWlsZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGV4dE5hbWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcmFkaXVzID0gbnVsbDtcbiAgICBzdGlja1BvcyA9IG51bGw7XG4gICAgdG91Y2hMb2NhdGlvbiA9IG51bGw7XG4gICAgZ2FtZVBsYXkgPSBudWxsO1xuICAgIG9mZkd1aWRlID0gZmFsc2U7XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGV4dEd1aWxkOiBjYy5Ob2RlID0gbnVsbFxuICAgIGlzRmlyc3QgPSBmYWxzZVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLnJpbmcud2lkdGggLyAyO1xuICAgICAgICB0aGlzLmluaXRUb3VjaEV2ZW50KCk7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoJ0dhbWUnKTtcblxuICAgIH1cbiAgICBpbml0VG91Y2hFdmVudCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICB9XG4gICAgdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5vZmZHdWlkZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5vZmZHdWlkZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmd1aWxkLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVQbGF5LnN0YXJ0R2FtZSgpXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5pc0ZpcnN0KSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZVxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMudGV4dEd1aWxkKS50bygwLjIsIHsgc2NhbGU6IDAuNyB9KS5zdGFydCgpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICAvLyBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5lbWl0KENvbnN0YW50LkVWRU5ULlNQQVdOX0VORU1ZKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lUGxheS5pc1BoYXNlMikge1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lUGxheS5pc1BoYXNlMiA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lUGxheS5vbkJvc3MoKVxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHRvdWNoUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICB0aGlzLnN0aWNrUG9zID0gdGhpcy5yaW5nLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3Muc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpLm1hZygpKTtcbiAgICAgICAgLy8gaWYgKHRoaXMucmFkaXVzID4gZGlzdGFuY2UpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAuZGlyZWN0aW9uWCA9ICh0aGlzLmRvdC54ID4gMCkgPyAtMSA6IDE7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAucnVuKCk7XG4gICAgICAgIC8vIHRoaXMuc3RpY2tQb3MgPSB0b3VjaFBvcztcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMudG91Y2hMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5nYW1lUGxheS5hcnJIZXJvKSB7XG4gICAgICAgIC8vICAgICBpZiAoIXRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAuaXNTS2lsbCkge1xuXG4gICAgICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEgpLmRpcmVjdGlvblggPSAodGhpcy5kb3QueCA+IDApID8gLTEgOiAxO1xuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChIKS5ydW4oKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLnJpbmcuc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuICAgICAgICAvLyB0aGlzLmRvdC5zZXRQb3NpdGlvbih0b3VjaFBvcyk7XG5cbiAgICB9XG4gICAgLy8gaXNGaXJzdEVOZCA9IGZhbHNlXG4gICAgdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hMb2NhdGlvbiA9PT0gZXZlbnQuZ2V0TG9jYXRpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlXG4gICAgICAgIHRoaXMudGV4dE5hbWUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLnJpbmcuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3MubWFnKCk7XG4gICAgICAgIGNvbnN0IHBvc1ggPSB0aGlzLnN0aWNrUG9zLnggKyB0b3VjaFBvcy54O1xuICAgICAgICBjb25zdCBwb3NZID0gdGhpcy5zdGlja1Bvcy55ICsgdG91Y2hQb3MueTtcblxuICAgICAgICBjb25zdCBwID0gY2MudjIocG9zWCwgcG9zWSkuc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKTtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHBvc1gsIHBvc1kpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLnN0aWNrUG9zLnggKyBwLnggKiB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLnN0aWNrUG9zLnkgKyBwLnkgKiB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLnJ1bigpO1xuICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLm1vdmVEaXIgPSBwO1xuICAgICAgICB0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLmRpcmVjdGlvblggPSAodGhpcy5kb3QueCA+IDApID8gLTEgOiAxO1xuXG4gICAgICAgIC8vIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuZ2FtZVBsYXkuYXJySGVybykge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLmdhbWVQbGF5Lmhlcm9Db21wLmlzU0tpbGwpIHtcbiAgICAgICAgLy8gICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoSCkuZGlyZWN0aW9uWCA9ICh0aGlzLmRvdC54ID4gMCkgPyAtMSA6IDE7XG4gICAgICAgIC8vICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KEgpLnJ1bigpO1xuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChIKS5tb3ZlRGlyID0gcDtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyB9XG5cbiAgICB9XG4gICAgdG91Y2hFbmRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24odGhpcy5yaW5nLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXkuaGVyb0NvbXAuc3RvcCgpO1xuICAgICAgICB0aGlzLnRleHROYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGlmICghdGhpcy5pc0ZpcnN0RU5kKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmlzRmlyc3RFTmQgPSB0cnVlXG4gICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLnRleHRHdWlsZCkudG8oMC4yLCB7IHNjYWxlOiAwIH0pLnN0YXJ0KClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmdhbWVQbGF5LmFyckhlcm8pIHtcbiAgICAgICAgLy8gICAgIGNoaWxkLmdldENvbXBvbmVudChIKS5zdG9wKCk7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmdhbWVQbGF5LmNpcmNsZS5nZXRDb21wb25lbnQoXCJDaXJjbGVcIikuY2hlY2tBdGsoKVxuXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgfVxufVxuIl19