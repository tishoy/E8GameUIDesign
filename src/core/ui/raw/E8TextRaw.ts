/**
 * create by 18tech
 * 文本原材料
 */
class E8TextRaw extends egret.Sprite {
    private config;
    public arg;

    constructor(config = undefined) {
        super();
        if (typeof config == "string") {
            config = RES.getRes(config);
        }
        if (config == undefined) {
            config = {
                "content": "E8Tech",
                "size": 10,
                "color": "WHITE",
                "bcolor": "BLACK",
                "weight": 1,
                "border": 1,
                "shadow": 1,
                "width": undefined,
                "height": undefined,
                "position": 7
            }
        }

        this.config = config;
        var content = config["content"] != undefined ? config["content"] : "E8Tech";
        var sizePoint = config["size"] != undefined ? config["size"] : 8;
        var colorCode = config["color"] != undefined ? ColorEnum[config["color"]] : 0x000000;
        var bColorCode = config["bcolor"] != undefined ? ColorEnum[config["bcolor"]] : 0x000000;
        var weightRatio = config["weight"] != undefined ? config["weight"] : 0;
        var borderRatio = config["border"] != undefined ? config["border"] : 0;
        var shadowRatio = config["shadow"] != undefined ? config["shadow"] : 0;
        var position = config["position"] != undefined ? config["position"] : 7;
        var lineSpacingRatio = 1.3;

        /*** 参数处理 ***/
        var size = 4 * sizePoint;
        var weight = size / 36 * weightRatio;
        var border = size / 24 * borderRatio;
        var shadow = size / 20 * shadowRatio;
        var width = config["width"] != undefined ? config["width"] : undefined;
        var height = config["height"] != undefined ? config["height"] - shadow : undefined;
        var hAlign = egret.HorizontalAlign.CENTER;
        var vAlign = egret.VerticalAlign.MIDDLE;
        if (position == 1) {
            hAlign = egret.HorizontalAlign.LEFT;
            vAlign = egret.VerticalAlign.BOTTOM;
        } else if (position == 2) {
            hAlign = egret.HorizontalAlign.CENTER;
            vAlign = egret.VerticalAlign.BOTTOM;
        } else if (position == 3) {
            hAlign = egret.HorizontalAlign.RIGHT;
            vAlign = egret.VerticalAlign.BOTTOM;
        } else if (position == 4) {
            hAlign = egret.HorizontalAlign.LEFT;
            vAlign = egret.VerticalAlign.MIDDLE;
        } else if (position == 5) {
            hAlign = egret.HorizontalAlign.CENTER;
            vAlign = egret.VerticalAlign.MIDDLE;
        } else if (position == 6) {
            hAlign = egret.HorizontalAlign.RIGHT;
            vAlign = egret.VerticalAlign.MIDDLE;
        } else if (position == 7) {
            hAlign = egret.HorizontalAlign.LEFT;
            vAlign = egret.VerticalAlign.TOP;
        } else if (position == 8) {
            hAlign = egret.HorizontalAlign.CENTER;
            vAlign = egret.VerticalAlign.TOP;
        } else if (position == 9) {
            hAlign = egret.HorizontalAlign.RIGHT;
            vAlign = egret.VerticalAlign.TOP;
        }
        /*** 阴影 ***/
        this.stext = new egret.TextField();
        this.stext.text = content;
        this.stext.size = size;
        this.stext.stroke = weight + border;
        this.stext.textColor = bColorCode;
        this.stext.strokeColor = bColorCode;
        this.stext.lineSpacing = size * (lineSpacingRatio - 1);
        this.stext.y = shadow;
        this.stext.width = width;
        this.stext.height = height;
        this.stext.textAlign = hAlign;
        this.stext.verticalAlign = vAlign;
        this.addChild(this.stext);

        /*** 边 ***/
        this.btext = new egret.TextField();
        this.btext.text = content;
        this.btext.size = size;
        this.btext.textColor = bColorCode;
        this.btext.stroke = weight + border;
        this.btext.strokeColor = bColorCode;
        this.btext.lineSpacing = size * (lineSpacingRatio - 1);
        this.btext.width = width;
        this.btext.height = height;
        this.btext.textAlign = hAlign;
        this.btext.verticalAlign = vAlign;
        this.addChild(this.btext);

        /*** 文字 ***/
        this.mtext = new egret.TextField();
        this.mtext.text = content;
        this.mtext.size = size;
        this.mtext.textColor = colorCode;
        this.mtext.stroke = weight;
        this.mtext.strokeColor = colorCode;
        this.mtext.lineSpacing = size * (lineSpacingRatio - 1);
        this.mtext.width = width;
        this.mtext.height = height;
        this.mtext.textAlign = hAlign;
        this.mtext.verticalAlign = vAlign;
        this.addChild(this.mtext);
    }

    private stext: egret.TextField;
    private btext: egret.TextField;
    private mtext: egret.TextField;

    set text(value) {
        this.stext.text = value;
        this.btext.text = value;
        this.mtext.text = value;
    }

    set wordWrap(value) {
        this.stext.wordWrap = value;
        this.btext.wordWrap = value;
        this.mtext.wordWrap = value;
    }

    public copy() {
        return new E8BoxRaw(this.config);
    }
}