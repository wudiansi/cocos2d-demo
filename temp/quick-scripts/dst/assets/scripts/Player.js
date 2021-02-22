
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