
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Skill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5103etcHLZD8rySdIeY94Iw', 'Skill');
// script/Skill.ts

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
var enemyListener_1 = require("./enemyListener");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.posStart = cc.v3(0, 0, 0);
        _this.skillColider = null;
        _this.damage = 100;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onColider = function (value) {
        this.skillColider.enabled = value;
    };
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.getComponent(enemyListener_1.default) && other.node.getComponent(enemyListener_1.default).target) {
            other.node.getComponent("enemy").attacked(this.damage);
        }
    };
    NewClass.prototype.onCollisionStay = function (other, self) {
        // if (other.node.getComponent(EL) && other.node.getComponent(EL).target) {
        //     other.node.getComponent("enemy").attacked(this.damage)
        //     console.log("atk skill")
        // }
    };
    NewClass.prototype.onCollisionExit = function (other, self) {
        if (other.node.getComponent(enemyListener_1.default) && other.node.getComponent(enemyListener_1.default).target) {
        }
    };
    __decorate([
        property(cc.Vec3)
    ], NewClass.prototype, "posStart", void 0);
    __decorate([
        property(cc.BoxCollider)
    ], NewClass.prototype, "skillColider", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "damage", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTa2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxpREFBaUM7QUFHakM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4QkM7UUE1QkcsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUV6QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsWUFBTSxHQUFHLEdBQUcsQ0FBQTs7SUF3QmhCLENBQUM7SUF2Qkcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUNyQyxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUN6RDtJQUNMLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLDJFQUEyRTtRQUMzRSw2REFBNkQ7UUFDN0QsK0JBQStCO1FBQy9CLElBQUk7SUFDUixDQUFDO0lBQ0Qsa0NBQWUsR0FBZixVQUFnQixLQUFLLEVBQUUsSUFBSTtRQUN2QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1NBRXRFO0lBQ0wsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FDVDtJQU5LLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QjVCO0lBQUQsZUFBQztDQTlCRCxBQThCQyxDQTlCcUMsRUFBRSxDQUFDLFNBQVMsR0E4QmpEO2tCQTlCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEVMIGZyb20gJy4vZW5lbXlMaXN0ZW5lcic7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlZlYzMpXG4gICAgcG9zU3RhcnQgPSBjYy52MygwLCAwLCAwKVxuICAgIEBwcm9wZXJ0eShjYy5Cb3hDb2xsaWRlcilcbiAgICBza2lsbENvbGlkZXI6IGNjLkJveENvbGxpZGVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkYW1hZ2UgPSAxMDBcbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBvbkNvbGlkZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5za2lsbENvbGlkZXIuZW5hYmxlZCA9IHZhbHVlXG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEVMKSAmJiBvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkudGFyZ2V0KSB7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChcImVuZW15XCIpLmF0dGFja2VkKHRoaXMuZGFtYWdlKVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZil7XG4gICAgICAgIC8vIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkgJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCkge1xuICAgICAgICAvLyAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJlbmVteVwiKS5hdHRhY2tlZCh0aGlzLmRhbWFnZSlcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYXRrIHNraWxsXCIpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChFTCkgJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoRUwpLnRhcmdldCkge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==