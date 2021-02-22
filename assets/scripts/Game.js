// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 得分label
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        // 星星预载素材
        starPrefab: {
            default: null,
            type: cc.Prefab
        },

        // 星星消失后的随机范围
        maxStarDuration: 0,
        minStarDuration: 0,

        // 地面节点 为展示星星的高度
        ground: {
            default: null,
            type: cc.Node
        },

        // player节点 为获取弹跳、高度 以及控制主角活动开关
        player: {
            default: null,
            type: cc.Node
        },
        scoreAudio: {
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

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 初始化计时器
        this.timer = 0;
        // 初始化计时器时长
        this.starDuration = 0;
        // 初始化分数
        this.score = 0;
        // 获取平面y坐标
        this.groundY = this.ground.y + this.ground.height / 2
        // 生成一个新星星
        this.createNewStar()
    },

    gameOver() {
        // 游戏结束 停止所有动画
        this.player.stopAllActions()
        // 重新加载Game sence
        cc.director.loadScene('Game')
    },

    gainScore() {
        // 累加得分
        this.score += 1;
        this.scoreDisplay.string = `Score: ${this.score}`;
        // 得分音效
        cc.audioEngine.playEffect(this.scoreAudio, this);
    },

    createNewStar() {
        // 初始化这个星星的可存在碰撞时间、计时器
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);

        this.timer = 0;

        // 给定模板中生成一个新节点
        let newStar = cc.instantiate(this.starPrefab);

        // 插入到场景中
        this.node.addChild(newStar)

        // 设置位置
        newStar.setPosition(this.getNewStarPosition())

        // 在星星组件上保存Game对象的引用
        newStar.getComponent('Star').game = this
    },

    getNewStarPosition() {
        let randX = 0
        // 根据平面位置和星星高度 随机得到一个星星的y坐标
        let randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50
        // 根据屏幕宽度随机得到一个x坐标
        let maxX = this.node.width / 2
        randX = (Math.random() - 0.5) * 2 * maxX
        // 返回坐标
        return cc.v2(randX, randY)
    },

    start() {

    },

    update (dt) {
        // 超时没有清除duration时间 停止游戏
        if(this.timer >= this.starDuration) {
            this.gameOver();
            return
        }
        this.timer += dt
    },
});
