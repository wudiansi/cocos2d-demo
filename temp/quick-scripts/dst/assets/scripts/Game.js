
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