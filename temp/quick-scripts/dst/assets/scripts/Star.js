
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f731ezIdlpKNoxn7nzQLo74', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角与星星之间距离小于这个就视为吃到
    pickRidius: 5 // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },
  getPlayerDistance: function getPlayerDistance() {
    // 根据player节点位置获取位置
    var playerPos = this.game.player.getPosition(); // 计算出该星星和player之间的距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPick: function onPick() {
    // 增加得分
    this.game.gainScore(); // 当星星被收集时 创建新星星

    this.game.createNewStar(); // 并销毁当前星星节点

    this.node.destroy();
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    // 每帧调用中检车星星与player之间距离关系
    if (this.getPlayerDistance() < this.pickRidius) {
      // 小于配置的碰撞距离 执行碰撞方法
      this.onPick();
      return;
    } // 根据game中的计时器更新星星的透明度


    var minOpacity = 0;
    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSaWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2siLCJnYWluU2NvcmUiLCJjcmVhdGVOZXdTdGFyIiwiZGVzdHJveSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJtaW5PcGFjaXR5Iiwib3BhY2l0eVJhdGlvIiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJvcGFjaXR5IiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGSixDQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqQlEsR0FIUDtBQXVCTEMsRUFBQUEsaUJBdkJLLCtCQXVCZTtBQUNoQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCLENBRmdCLENBR2hCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCUCxTQUF2QixFQUFrQ1EsR0FBbEMsRUFBWDtBQUVBLFdBQU9KLElBQVA7QUFDSCxHQTlCSTtBQWdDTEssRUFBQUEsTUFoQ0ssb0JBZ0NJO0FBQ0w7QUFDQSxTQUFLUixJQUFMLENBQVVTLFNBQVYsR0FGSyxDQUdMOztBQUNBLFNBQUtULElBQUwsQ0FBVVUsYUFBVixHQUpLLENBS0w7O0FBQ0EsU0FBS04sSUFBTCxDQUFVTyxPQUFWO0FBQ0gsR0F2Q0k7QUF5Q0w7QUFFQTtBQUVBQyxFQUFBQSxLQTdDSyxtQkE2Q0csQ0FFUCxDQS9DSTtBQWlETEMsRUFBQUEsTUFqREssa0JBaURHQyxFQWpESCxFQWlETztBQUNSO0FBQ0EsUUFBRyxLQUFLaEIsaUJBQUwsS0FBMkIsS0FBS0QsVUFBbkMsRUFBK0M7QUFDM0M7QUFDQSxXQUFLVyxNQUFMO0FBQ0E7QUFDSCxLQU5PLENBUVI7OztBQUNBLFFBQUlPLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFFBQUlDLFlBQVksR0FBRyxJQUFJLEtBQUtoQixJQUFMLENBQVVpQixLQUFWLEdBQWtCLEtBQUtqQixJQUFMLENBQVVrQixZQUFuRDtBQUVBLFNBQUtkLElBQUwsQ0FBVWUsT0FBVixHQUFvQkosVUFBVSxHQUFHSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsWUFBWSxJQUFJLE1BQU1ELFVBQVYsQ0FBdkIsQ0FBakM7QUFDSDtBQTlESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5Li76KeS5LiO5pif5pif5LmL6Ze06Led56a75bCP5LqO6L+Z5Liq5bCx6KeG5Li65ZCD5YiwXHJcbiAgICAgICAgcGlja1JpZGl1czogNSxcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2UoKSB7XHJcbiAgICAgICAgLy8g5qC55o2ucGxheWVy6IqC54K55L2N572u6I635Y+W5L2N572uXHJcbiAgICAgICAgbGV0IHBsYXllclBvcyA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyDorqHnrpflh7ror6XmmJ/mmJ/lkoxwbGF5ZXLkuYvpl7TnmoTot53nprtcclxuICAgICAgICBsZXQgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyUG9zKS5tYWcoKVxyXG5cclxuICAgICAgICByZXR1cm4gZGlzdFxyXG4gICAgfSxcclxuXHJcbiAgICBvblBpY2soKSB7XHJcbiAgICAgICAgLy8g5aKe5Yqg5b6X5YiGXHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgICAgIC8vIOW9k+aYn+aYn+iiq+aUtumbhuaXtiDliJvlu7rmlrDmmJ/mmJ9cclxuICAgICAgICB0aGlzLmdhbWUuY3JlYXRlTmV3U3RhcigpO1xyXG4gICAgICAgIC8vIOW5tumUgOavgeW9k+WJjeaYn+aYn+iKgueCuVxyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyDmr4/luKfosIPnlKjkuK3mo4DovabmmJ/mmJ/kuI5wbGF5ZXLkuYvpl7Tot53nprvlhbPns7tcclxuICAgICAgICBpZih0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLnBpY2tSaWRpdXMpIHtcclxuICAgICAgICAgICAgLy8g5bCP5LqO6YWN572u55qE56Kw5pKe6Led56a7IOaJp+ihjOeisOaSnuaWueazlVxyXG4gICAgICAgICAgICB0aGlzLm9uUGljaygpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOagueaNrmdhbWXkuK3nmoTorqHml7blmajmm7TmlrDmmJ/mmJ/nmoTpgI/mmI7luqZcclxuICAgICAgICBsZXQgbWluT3BhY2l0eSA9IDBcclxuICAgICAgICBsZXQgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lciAvIHRoaXMuZ2FtZS5zdGFyRHVyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gbWluT3BhY2l0eSArIE1hdGguZmxvb3Iob3BhY2l0eVJhdGlvICogKDI1NSAtIG1pbk9wYWNpdHkpKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=