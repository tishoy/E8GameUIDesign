/**
 * create by 18tech
 * 位图原材料
 */
class E8BitmapRaw extends egret.Bitmap {
    public arg;
    protected getTexture() {
        return this.texture;
    }

    public setTexture(value) {
        this.texture = value;
    }

    public copy() {
        let cp = new egret.Bitmap();
        cp.texture = this.getTexture();
        return cp;
    }

} 