/**
 * create by 18tech
 * 盒子原材料
 */
class E8BoxRaw extends egret.Shape {
    public arg;
    private config;

    private scaleRate;

    constructor(config = undefined) {
        super();
        if (typeof config == "string") {
            config = RES.getRes(config);
        }
        if (config == undefined) {
            config = {
                x: 0, y: 0, width: 200, height: 50, radius: 10, background: 0xffffff
            }
        }

        // var shape = new egret.Shape();
        this.config = config;
        this.scaleRate = Math.max(Math.floor(config.width / 600), Math.floor(config.height / 600), 1);
        var x = config.x != undefined ? config.x : 0;
        var y = config.y != undefined ? config.y : 0;
        var w = config.width != undefined ? config.width / this.scaleRate : 200;
        var h = config.height != undefined ? config.height / this.scaleRate : 50;
        var diameter = config.radius != undefined ? config.radius * 2 / this.scaleRate : 10 * 2 / this.scaleRate;
        var color = config.background != undefined ? ColorEnum[config.background] : 0xffffff;


        if (config["border"] != undefined) {
            if (config["border"] != 0) {
                var border = Number(config["border"]) / this.scaleRate;
                var bcolor = ColorEnum[config["borderColor"]];
                /*** border fill ***/
                this.graphics.beginFill(bcolor, 1);
                this.graphics.drawRoundRect(x, y, w, h, diameter, diameter);
                this.graphics.endFill();
                x = x + border;
                y = y + border;
                w = w - border * 2;
                h = h - border * 2;
                diameter = diameter - border;
            }
        }
        if (config["topPadding"] != undefined) {
            if (config["topPadding"] != 0) {
                var tborder = Number(config["topPadding"]) / this.scaleRate;
                var tcolor = ColorEnum[config["topPaddingColor"]];
                /*** toppadding fill ***/
                this.graphics.beginFill(tcolor, 1);
                this.graphics.drawRoundRect(x, y, w, h, diameter, diameter);
                this.graphics.endFill();
                x = x;
                y = y + tborder;
                w = w;
                h = h - tborder;
                diameter = diameter - tborder / 4;
            }
        }
        if (config["bottomPadding"] != undefined) {
            if (config["bottomPadding"] != 0) {
                var fborder = Number(config["bottomPadding"]) / this.scaleRate;
                var fcolor = ColorEnum[config["bottomPaddingColor"]];
                /*** bottomPadding fill ***/
                this.graphics.beginFill(fcolor, 1);
                this.graphics.drawRoundRect(x, y, w, h, diameter, diameter);
                this.graphics.endFill();
                x = x;
                y = y;
                w = w;
                h = h - fborder;
                diameter = diameter - fborder / 4;
            }
        }
        if (config["leftPadding"] != undefined) {
            if (config["leftPadding"] != 0) {
                var lborder = Number(config["leftPadding"]) / this.scaleRate;
                var lcolor = ColorEnum[config["leftPaddingColor"]];
                /*** leftPadding fill ***/
                this.graphics.beginFill(lcolor, 1);
                this.graphics.drawRoundRect(x, y, w, h, diameter, diameter);
                this.graphics.endFill();
                x = x + lborder;
                y = y;
                w = w - lborder;
                h = h;
                diameter = diameter - lborder / 4;
            }
        }
        if (config["rightPadding"] != undefined) {
            if (config["rightPadding"] != 0) {
                var rborder = Number(config["rightPadding"]) / this.scaleRate;
                var rcolor = ColorEnum[config["rightPaddingColor"]];
                /*** rightPadding fill ***/
                this.graphics.beginFill(rcolor, 1);
                this.graphics.drawRoundRect(x, y, w, h, diameter, diameter);
                this.graphics.endFill();
                x = x;
                y = y;
                w = w - rborder;
                h = h;
                diameter = diameter - rborder / 4;
            }
        }
        /*** background fill ***/
        this.graphics.beginFill(color, 1);
        this.graphics.drawRoundRect(x, y, w, h, diameter, diameter);
        this.graphics.endFill();
        this.scaleX = 1;
        this.scaleY = 1;
        // this.addChild(shape);
        this.cacheAsBitmap;

        // let renderTexture = new egret.RenderTexture();
        // renderTexture.drawToTexture(shape);
        // this.bitmap = new egret.Bitmap();
        // this.bitmap.texture = renderTexture;
        // this.bitmap.scaleX = this.bitmap.scaleY = scaleRate;
        // this.addChild(this.bitmap);
    }

    public asBitmap() {
        let renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(this);
        return new egret.Bitmap(renderTexture);
    }

    public copy() {
        return new E8BoxRaw(this.config);
    }

    public $setScaleX(value) {
        super.$setScaleX(value * this.scaleRate);
    }

    public $setScaleY(value) {
        super.$setScaleY(value * this.scaleRate);
    }
}