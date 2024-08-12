
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d515YP+RtP2KXVOZDa0utO', 'AdManager');
// script/common/AdManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    androidLink: {
      "default": ''
    },
    iosLink: {
      "default": ''
    },
    defaultLink: {
      "default": ''
    }
  },
  openAdUrl: function openAdUrl() {
    //google instant
    // cc.androidInstant.showInstallPrompt('https://play.google.com/store/apps/details?id=com.game.space.shooter2')
    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink;
    var adchanel = '{{__adv_channels_adapter__}}';

    if (window.openAdUrl) {
      console.log(adchanel);
      window.openAdUrl(adchanel);
    } else {
      window.open();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEFkTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFuZHJvaWRMaW5rIiwiaW9zTGluayIsImRlZmF1bHRMaW5rIiwib3BlbkFkVXJsIiwiY2xpY2tUYWciLCJ3aW5kb3ciLCJhZGNoYW5lbCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQSxLQURMO0FBSVJDLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTO0FBREosS0FKRDtBQU9SQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUztBQURBO0FBUEwsR0FIUDtBQWVMQyxFQUFBQSxTQUFTLEVBQUUscUJBQVU7QUFDakI7QUFDQTtBQUNBLFFBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0wsV0FBUCxHQUFxQixLQUFLQSxXQUExQjtBQUNBSyxJQUFBQSxNQUFNLENBQUNKLE9BQVAsR0FBaUIsS0FBS0EsT0FBdEI7QUFDQUksSUFBQUEsTUFBTSxDQUFDSCxXQUFQLEdBQXFCLEtBQUtBLFdBQTFCO0FBQ0EsUUFBSUksUUFBUSxHQUFHLDhCQUFmOztBQUNBLFFBQUdELE1BQU0sQ0FBQ0YsU0FBVixFQUFxQjtBQUNqQkksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQUQsTUFBQUEsTUFBTSxDQUFDRixTQUFQLENBQWlCRyxRQUFqQjtBQUVILEtBSkQsTUFJTztBQUNIRCxNQUFBQSxNQUFNLENBQUNJLElBQVA7QUFDSDtBQUNKO0FBOUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFuZHJvaWRMaW5rOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpb3NMaW5rOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0TGluazoge1xuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvcGVuQWRVcmw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vZ29vZ2xlIGluc3RhbnRcbiAgICAgICAgLy8gY2MuYW5kcm9pZEluc3RhbnQuc2hvd0luc3RhbGxQcm9tcHQoJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZ2FtZS5zcGFjZS5zaG9vdGVyMicpXG4gICAgICAgIHZhciBjbGlja1RhZyA9ICcnO1xuICAgICAgICB3aW5kb3cuYW5kcm9pZExpbmsgPSB0aGlzLmFuZHJvaWRMaW5rO1xuICAgICAgICB3aW5kb3cuaW9zTGluayA9IHRoaXMuaW9zTGluaztcbiAgICAgICAgd2luZG93LmRlZmF1bHRMaW5rID0gdGhpcy5kZWZhdWx0TGluaztcbiAgICAgICAgbGV0IGFkY2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXG4gICAgICAgIGlmKHdpbmRvdy5vcGVuQWRVcmwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkY2hhbmVsKTtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQWRVcmwoYWRjaGFuZWwpO1xuICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXX0=