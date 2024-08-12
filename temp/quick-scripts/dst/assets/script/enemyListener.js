
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemyListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34607e8qldE4p0kUXlNOEAT', 'enemyListener');
// script/enemyListener.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.target = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (self.node.getComponent('enemyListener') && other.node.getComponent('heroListener')) {
            var target = self.node.getComponent('enemyListener').target;
            target.getComponent('enemy').attack(other.node);
            target.getComponent('enemy').arrHero.push(other.node);
        }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (self.node.getComponent('enemyListener') && other.node.getComponent('heroListener')) {
            var target = self.node.getComponent('enemyListener').target;
            target.getComponent('enemy').exitTarget(other.node._id);
        }
        // if(other.node.getComponent(EL)&& other.node.getComponent(EL).target) {
        //     this.target.getComponent(hero).removeEnemy(other.node._id);
        // }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "target", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteUxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0NDO1FBL0JHLFlBQU0sR0FBVyxJQUFJLENBQUM7O1FBOEJ0QixpQkFBaUI7SUFDckIsQ0FBQztJQTdCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDcEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTVELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3hEO0lBQ0wsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNwRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDNUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzRDtRQUdELHlFQUF5RTtRQUN6RSxrRUFBa0U7UUFDbEUsSUFBSTtJQUVSLENBQUM7SUE1QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUhMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQzVCO0lBQUQsZUFBQztDQWxDRCxBQWtDQyxDQWxDcUMsRUFBRSxDQUFDLFNBQVMsR0FrQ2pEO2tCQWxDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDpjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAoc2VsZi5ub2RlLmdldENvbXBvbmVudCgnZW5lbXlMaXN0ZW5lcicpICYmIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdoZXJvTGlzdGVuZXInKSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoJ2VuZW15TGlzdGVuZXInKS50YXJnZXQ7XG5cbiAgICAgICAgICAgIHRhcmdldC5nZXRDb21wb25lbnQoJ2VuZW15JykuYXR0YWNrKG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudCgnZW5lbXknKS5hcnJIZXJvLnB1c2gob3RoZXIubm9kZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKHNlbGYubm9kZS5nZXRDb21wb25lbnQoJ2VuZW15TGlzdGVuZXInKSAmJiBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnaGVyb0xpc3RlbmVyJykpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KCdlbmVteUxpc3RlbmVyJykudGFyZ2V0O1xuICAgICAgICAgICAgdGFyZ2V0LmdldENvbXBvbmVudCgnZW5lbXknKS5leGl0VGFyZ2V0KG90aGVyLm5vZGUuX2lkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gaWYob3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCkge1xuICAgICAgICAvLyAgICAgdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KGhlcm8pLnJlbW92ZUVuZW15KG90aGVyLm5vZGUuX2lkKTtcbiAgICAgICAgLy8gfVxuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==