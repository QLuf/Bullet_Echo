
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e322GVUqlIHqHeZJRuo0AW', 'tree');
// script/tree.ts

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
        _this.anim = null;
        _this.preWood = null;
        _this.preWhellTree = 100;
        _this.heal = 100;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.heal = this.preWhellTree;
    };
    NewClass.prototype.attacked = function (damage) {
        this.heal -= damage;
        if (this.node.getChildByName("heroaura")) {
            this.node.getChildByName("heroaura").active = false;
            this.node.getChildByName("tree_yellow").active = false;
        }
        if (this.heal <= 0) {
            this.anim.play("tree_cutted");
            this.addWood();
        }
        else {
            this.anim.play("tree_cutting");
        }
    };
    NewClass.prototype.addWood = function () {
        var _this = this;
        for (var i = 0; i < 3; i++) {
            this.scheduleOnce(function () {
                var wood = cc.instantiate(_this.preWood);
                wood.parent = _this.node;
                wood.position = cc.v3(0, 50);
                _this.scheduleOnce(function () {
                    cc.Canvas.instance.node.getComponent("Game17").moveWood(wood);
                }, 0.8);
            }, i * 0.1);
        }
    };
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "preWood", void 0);
    __decorate([
        property(cc.Integer)
    ], NewClass.prototype, "preWhellTree", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNENDO1FBMUNHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBRyxHQUFHLENBQUE7UUFDbEIsVUFBSSxHQUFHLEdBQUcsQ0FBQTs7UUFvQ1YsaUJBQWlCO0lBQ3JCLENBQUM7SUFuQ0csd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQTtRQUNuQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMxRDtRQUdELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBRWpCO2FBQ0k7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtTQUNqQztJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQO1FBQUEsaUJBYUM7UUFaRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDNUIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtTQUVkO0lBRUwsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNHO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztrREFDSDtJQU5ELFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QzVCO0lBQUQsZUFBQztDQTVDRCxBQTRDQyxDQTVDcUMsRUFBRSxDQUFDLFNBQVMsR0E0Q2pEO2tCQTVDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZVdvb2Q6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcHJlV2hlbGxUcmVlID0gMTAwXG4gICAgaGVhbCA9IDEwMFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaGVhbCA9IHRoaXMucHJlV2hlbGxUcmVlXG4gICAgfVxuICAgIGF0dGFja2VkKGRhbWFnZSkge1xuICAgICAgICB0aGlzLmhlYWwgLT0gZGFtYWdlXG4gICAgICAgIGlmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhlcm9hdXJhXCIpKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhlcm9hdXJhXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHJlZV95ZWxsb3dcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIFxuXG4gICAgICAgIGlmICh0aGlzLmhlYWwgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJ0cmVlX2N1dHRlZFwiKVxuICAgICAgICAgICAgdGhpcy5hZGRXb29kKClcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJ0cmVlX2N1dHRpbmdcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRXb29kKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3b29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVXb29kKVxuICAgICAgICAgICAgICAgIHdvb2QucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIHdvb2QucG9zaXRpb24gPSBjYy52MygwLCA1MClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIkdhbWUxN1wiKS5tb3ZlV29vZCh3b29kKVxuICAgICAgICAgICAgICAgIH0sIDAuOClcbiAgICAgICAgICAgIH0sIGkgKiAwLjEpXG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=