"use strict";
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