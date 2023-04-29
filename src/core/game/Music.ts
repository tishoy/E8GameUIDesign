/**
 * 
 */
class Music {

    private static instance: Music = null;


    private bgmChannel: egret.SoundChannel;

    private _isPlaying = false;

    private bgm: egret.Sound;

    public static get Instance(): Music {
        if (this.instance === null) {
            this.instance = new Music();
        }
        return this.instance;
    }

    private loadBGM() {
        var sound = new egret.Sound();
        var url: string = "resource/assets/sound/bg.mp3";
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //开始加载
        sound.load(url);
    }

    private onLoadComplete(event) {
        this.bgm = <egret.Sound>event.target;
        //播放音乐
        // this.bgmChannel = this.bgm.play(0, 0);
        this.playBGM();
    }

    playBGM() {
        if (this._isPlaying) {
            if (this.bgm === undefined || this.bgm === null) {
                this.loadBGM();
                // this.bgm = RES.getRes(SoundEnum.BG_MP3);
                return;
            }
            if (!this.isPlaying) {
                this.isPlaying = true;
                this.bgmChannel = this.bgm.play(0, 0);
                this.bgmChannel.volume = 1;
            }
        }

    }

    public stopBGM(): void {
        this.isPlaying = false;
        if (this.bgmChannel !== undefined) {
            this.bgmChannel.stop();
        }
    }

    public set isPlaying(value) {
        this._isPlaying = value;
    }
}