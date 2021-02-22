// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let Sprite = cc.Class({
    name: "sprite"
})

cc.Class({
    extends: cc.Component,

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
            default: null,
            type: cc.AudioClip
        },
        // foo: {
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

    runJumpAction() {
        // 跳跃上升
        let jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'easeOut' });

        // 跳跃下降
        let jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'easeIn' });

        // 创建一个缓动 按照跳跃 下降的顺序执行
        let tween = cc.tween()
                    .sequence(jumpUp, jumpDown)
                    // 添加一个回调函数， 在前面的动作都结束时调用我们定义的playJumpSound方法播放音效
                    .call(this.playJumpSound, this);

        // 不断重复
        return cc.tween().repeatForever(tween);

    },

    playJumpSound() {
        cc.audioEngine.playEffect(this.jumpAudio, false)
    },

    // 键入
    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true
                break;
            case cc.macro.KEY.d:
                this.accRight = true
                break;
            default:
                break;
        }
    },

    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false
                break;
            case cc.macro.KEY.d:
                this.accRight = false
                break;
            default:
                break;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 初始无限跳跃
        let jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();

        // 加速度开关
        this.accLeft = false
        this.accRight = false
        // 水平方向位移
        this.xSpeed = 0

        // 监听键盘
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
    },

    onDestroy() {
        // 取消键盘监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
    },

    start() {
        
    },

    update (dt) {
        // 根据当前加速度方向更新每帧速度
        if(this.accLeft) {
            this.xSpeed -= this.accel * dt
        }

        if(this.accRight) {
            this.xSpeed += this.accel * dt
        }

        if(Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // 超过最大速度
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed)
        }

        this.node.x += this.xSpeed * dt
    },
});
