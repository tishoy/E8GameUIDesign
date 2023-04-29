/**
 * create by 18tech
 * 动画原材料
 */
class E8AnimateRaw extends egret.MovieClip {
    //egret 的动画工厂
    public factory: egret.MovieClipDataFactory;

    constructor(factory) {
        super(factory.generateMovieClipData());
        this.factory = factory;
    }

    public copy() {
        return new E8AnimateRaw(this.factory);
    }
}