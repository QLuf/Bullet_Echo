
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7051gWBttNSLf+INoI17fA', 'bar');
// script/bar.ts

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
        _this.tag = "";
        _this.lbCurrent = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        switch (this.tag) {
            case "coin":
                this.lbCurrent.string = globalThis.gold.toString();
                break;
            case "wood":
                this.lbCurrent.string = globalThis.wood.toString();
                break;
        }
    };
    __decorate([
        property(cc.String)
    ], NewClass.prototype, "tag", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCurrent", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxQkM7UUFsQkcsU0FBRyxHQUFHLEVBQUUsQ0FBQTtRQUVSLGVBQVMsR0FBYSxJQUFJLENBQUM7O0lBZ0IvQixDQUFDO0lBZkcsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNkLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNsRCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2xELE1BQU07U0FDYjtJQUVMLENBQUM7SUFqQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDWjtJQUVSO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFMVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgdGFnID0gXCJcIlxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkN1cnJlbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMudGFnKSB7XG4gICAgICAgICAgICBjYXNlIFwiY29pblwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGJDdXJyZW50LnN0cmluZyA9IGdsb2JhbFRoaXMuZ29sZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid29vZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGJDdXJyZW50LnN0cmluZyA9IGdsb2JhbFRoaXMud29vZC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==