
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3445byRqzBKLJ3pv0SeFYG7', 'Game');
// scripts/Game.js

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
    // 得分label
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 星星预载素材
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星消失后的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点 为展示星星的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player节点 为获取弹跳、高度 以及控制主角活动开关
    player: {
      "default": null,
      type: cc.Node
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    } // foo: {
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
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 初始化计时器
    this.timer = 0; // 初始化计时器时长

    this.starDuration = 0; // 初始化分数

    this.score = 0; // 获取平面y坐标

    this.groundY = this.ground.y + this.ground.height / 2; // 生成一个新星星

    this.createNewStar();
  },
  gameOver: function gameOver() {
    // 游戏结束 停止所有动画
    this.player.stopAllActions(); // 重新加载Game sence

    cc.director.loadScene('Game');
  },
  gainScore: function gainScore() {
    // 累加得分
    this.score += 1;
    this.scoreDisplay.string = "Score: " + this.score; // 得分音效

    cc.audioEngine.playEffect(this.scoreAudio, this);
  },
  createNewStar: function createNewStar() {
    // 初始化这个星星的可存在碰撞时间、计时器
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0; // 给定模板中生成一个新节点

    var newStar = cc.instantiate(this.starPrefab); // 插入到场景中

    this.node.addChild(newStar); // 设置位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星组件上保存Game对象的引用

    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据平面位置和星星高度 随机得到一个星星的y坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度随机得到一个x坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回坐标

    return cc.v2(randX, randY);
  },
  start: function start() {},
  update: function update(dt) {
    // 超时没有清除duration时间 停止游戏
    if (this.timer >= this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JlRGlzcGxheSIsInR5cGUiLCJMYWJlbCIsInN0YXJQcmVmYWIiLCJQcmVmYWIiLCJtYXhTdGFyRHVyYXRpb24iLCJtaW5TdGFyRHVyYXRpb24iLCJncm91bmQiLCJOb2RlIiwicGxheWVyIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwic2NvcmUiLCJncm91bmRZIiwieSIsImhlaWdodCIsImNyZWF0ZU5ld1N0YXIiLCJnYW1lT3ZlciIsInN0b3BBbGxBY3Rpb25zIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJNYXRoIiwicmFuZG9tIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsInN0YXJ0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkMsS0FGTjtBQU1SO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNR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Q0FPakI7O0FBQ0EsV0FBTzdDLEVBQUUsQ0FBQytDLEVBQUgsQ0FBTUwsS0FBTixFQUFhQyxLQUFiLENBQVA7QUFDSCxHQTdHSTtBQStHTEssRUFBQUEsS0EvR0ssbUJBK0dHLENBRVAsQ0FqSEk7QUFtSExDLEVBQUFBLE1BbkhLLGtCQW1IR0MsRUFuSEgsRUFtSE87QUFDUjtBQUNBLFFBQUcsS0FBS2pDLEtBQUwsSUFBYyxLQUFLQyxZQUF0QixFQUFvQztBQUNoQyxXQUFLTSxRQUFMO0FBQ0E7QUFDSDs7QUFDRCxTQUFLUCxLQUFMLElBQWNpQyxFQUFkO0FBQ0g7QUExSEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOW+l+WIhmxhYmVsXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmmJ/mmJ/pooTovb3ntKDmnZBcclxuICAgICAgICBzdGFyUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOaYn+aYn+a2iOWkseWQjueahOmaj+acuuiMg+WbtFxyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXHJcblxyXG4gICAgICAgIC8vIOWcsOmdouiKgueCuSDkuLrlsZXnpLrmmJ/mmJ/nmoTpq5jluqZcclxuICAgICAgICBncm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHBsYXllcuiKgueCuSDkuLrojrflj5blvLnot7PjgIHpq5jluqYg5Lul5Y+K5o6n5Yi25Li76KeS5rS75Yqo5byA5YWzXHJcbiAgICAgICAgcGxheWVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjb3JlQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMluiuoeaXtuWZqFxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIC8vIOWIneWni+WMluiuoeaXtuWZqOaXtumVv1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuICAgICAgICAvLyDliJ3lp4vljJbliIbmlbBcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICAvLyDojrflj5blubPpnaJ55Z2Q5qCHXHJcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodCAvIDJcclxuICAgICAgICAvLyDnlJ/miJDkuIDkuKrmlrDmmJ/mmJ9cclxuICAgICAgICB0aGlzLmNyZWF0ZU5ld1N0YXIoKVxyXG4gICAgfSxcclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICAvLyDmuLjmiI/nu5PmnZ8g5YGc5q2i5omA5pyJ5Yqo55S7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIC8vIOmHjeaWsOWKoOi9vUdhbWUgc2VuY2VcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKVxyXG4gICAgfSxcclxuXHJcbiAgICBnYWluU2NvcmUoKSB7XHJcbiAgICAgICAgLy8g57Sv5Yqg5b6X5YiGXHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XHJcbiAgICAgICAgLy8g5b6X5YiG6Z+z5pWIXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVOZXdTdGFyKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMlui/meS4quaYn+aYn+eahOWPr+WtmOWcqOeisOaSnuaXtumXtOOAgeiuoeaXtuWZqFxyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuXHJcbiAgICAgICAgLy8g57uZ5a6a5qih5p2/5Lit55Sf5oiQ5LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgbGV0IG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG5cclxuICAgICAgICAvLyDmj5LlhaXliLDlnLrmma/kuK1cclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3RhcilcclxuXHJcbiAgICAgICAgLy8g6K6+572u5L2N572uXHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKVxyXG5cclxuICAgICAgICAvLyDlnKjmmJ/mmJ/nu4Tku7bkuIrkv53lrZhHYW1l5a+56LGh55qE5byV55SoXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpc1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHJhbmRYID0gMFxyXG4gICAgICAgIC8vIOagueaNruW5s+mdouS9jee9ruWSjOaYn+aYn+mrmOW6piDpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoR55Z2Q5qCHXHJcbiAgICAgICAgbGV0IHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwXHJcbiAgICAgICAgLy8g5qC55o2u5bGP5bmV5a695bqm6ZqP5py65b6X5Yiw5LiA5LiqeOWdkOagh1xyXG4gICAgICAgIGxldCBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8gMlxyXG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIG1heFhcclxuICAgICAgICAvLyDov5Tlm57lnZDmoIdcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyDotoXml7bmsqHmnInmuIXpmaRkdXJhdGlvbuaXtumXtCDlgZzmraLmuLjmiI9cclxuICAgICAgICBpZih0aGlzLnRpbWVyID49IHRoaXMuc3RhckR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHRcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5686MQhJ5JJrIAwKOlUuta', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Sprite = cc.Class({
  name: "sprite"
});
cc.Class({
  "extends": cc.Component,
  properties: {
    // 跳跃高度
    jumpHeight: 0,
    // 跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    // 跳跃音效
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    } // foo: {
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
  runJumpAction: function runJumpAction() {
    // 跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'easeOut'
    }); // 跳跃下降

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'easeIn'
    }); // 创建一个缓动 按照跳跃 下降的顺序执行

    var tween = cc.tween().sequence(jumpUp, jumpDown) // 添加一个回调函数， 在前面的动作都结束时调用我们定义的playJumpSound方法播放音效
    .call(this.playJumpSound, this); // 不断重复

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  // 键入
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;

      default:
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;

      default:
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 初始无限跳跃
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start(); // 加速度开关

    this.accLeft = false;
    this.accRight = false; // 水平方向位移

    this.xSpeed = 0; // 监听键盘

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    // 根据当前加速度方向更新每帧速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    }

    if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // 超过最大速度
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }

    this.node.x += this.xSpeed * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbIlNwcml0ZSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImp1bXBIZWlnaHQiLCJqdW1wRHVyYXRpb24iLCJtYXhNb3ZlU3BlZWQiLCJhY2NlbCIsImp1bXBBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJydW5KdW1wQWN0aW9uIiwianVtcFVwIiwidHdlZW4iLCJieSIsInkiLCJlYXNpbmciLCJqdW1wRG93biIsInNlcXVlbmNlIiwiY2FsbCIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiYWNjTGVmdCIsImQiLCJhY2NSaWdodCIsIm9uS2V5VXAiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwibm9kZSIsInRoZW4iLCJzdGFydCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwiS0VZX1VQIiwib25EZXN0cm95Iiwib2ZmIiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2xCQyxFQUFBQSxJQUFJLEVBQUU7QUFEWSxDQUFULENBQWI7QUFJQUYsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNHLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFLENBRko7QUFHUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FKTjtBQUtSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQU5O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QjtBQUNIO0FBL0hJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5sZXQgU3ByaXRlID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZTogXCJzcHJpdGVcIlxyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDot7Pot4Ppq5jluqZcclxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgIC8vIOi3s+i3g+aMgee7reaXtumXtFxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXHJcbiAgICAgICAgLy8g5Yqg6YCf5bqmXHJcbiAgICAgICAgYWNjZWw6IDAsXHJcbiAgICAgICAgLy8g6Lez6LeD6Z+z5pWIXHJcbiAgICAgICAganVtcEF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHJ1bkp1bXBBY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g6Lez6LeD5LiK5Y2HXHJcbiAgICAgICAgbGV0IGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnZWFzZU91dCcgfSk7XHJcblxyXG4gICAgICAgIC8vIOi3s+i3g+S4i+mZjVxyXG4gICAgICAgIGxldCBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogLXRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogJ2Vhc2VJbicgfSk7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqCDmjInnhafot7Pot4Mg5LiL6ZmN55qE6aG65bqP5omn6KGMXHJcbiAgICAgICAgbGV0IHR3ZWVuID0gY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jCDlnKjliY3pnaLnmoTliqjkvZzpg73nu5PmnZ/ml7bosIPnlKjmiJHku6zlrprkuYnnmoRwbGF5SnVtcFNvdW5k5pa55rOV5pKt5pS+6Z+z5pWIXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwodGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g5LiN5pat6YeN5aSNXHJcbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5SnVtcFNvdW5kKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDplK7lhaVcclxuICAgIG9uS2V5RG93bihldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5peg6ZmQ6Lez6LeDXHJcbiAgICAgICAgbGV0IGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLy8g5Yqg6YCf5bqm5byA5YWzXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2VcclxuICAgICAgICAvLyDmsLTlubPmlrnlkJHkvY3np7tcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgLy8g55uR5ZCs6ZSu55uYXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcylcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyDlj5bmtojplK7nm5jnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcylcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIOagueaNruW9k+WJjeWKoOmAn+W6puaWueWQkeabtOaWsOavj+W4p+mAn+W6plxyXG4gICAgICAgIGlmKHRoaXMuYWNjTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWNjUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCkge1xyXG4gICAgICAgICAgICAvLyDotoXov4fmnIDlpKfpgJ/luqZcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkIC8gTWF0aC5hYnModGhpcy54U3BlZWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
