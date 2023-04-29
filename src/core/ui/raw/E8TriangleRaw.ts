/**
 * create by 18tech
 * 三角原材料
 */
class E8TriangleRaw extends egret.Sprite {
    private config;
    public arg;
    constructor(config = undefined) {
        super();
        if (typeof config == "string") {
            config = RES.getRes(config);
        }
        if (config == undefined) {
            config = {
                x: 0,
                y: 0,
                width: 70,
                height: 80,
                color: "MILKY_WHITE",
                border: 10,
                borderColor: "BLACK",
                radius: 5,
                shadow: 1,
                direction: "right"
            }
        }

        var x = config.x != undefined ? config.x : 0;
        var y = config.y != undefined ? config.y : 0;
        var w = config.width != undefined ? config.width : 200;
        var h = config.height != undefined ? config.height : 50;
        var radius = config.radius != undefined ? config.radius * 2 : config.height / 15 * 2;
        var color = config.color != undefined ? ColorEnum[config.color] : 0xffffff;
        var direction = config.direction != undefined ? config.direction : "right";
        var shadowRatio = config.shadow != undefined ? config.shadow : 0;
        var shadow = h / 20 * shadowRatio;

        x = x + radius / 2;
        y = y + radius / 2;
        w = w - radius;
        h = h - radius;

        var points = [
            { x: 0 + x, y: 0 + y },
            { x: w + x, y: h / 2 + y },
            { x: 0 + x, y: h + y }
        ];

        if (direction == "right") {
            points = [
                { x: 0 + x, y: 0 + y },
                { x: w + x, y: h / 2 + y },
                { x: 0 + x, y: h + y }
            ];
        }
        if (direction == "left") {
            points = [
                { x: 0 + x, y: h / 2 + y },
                { x: w + x, y: 0 + y },
                { x: w + x, y: h + y }
            ];
        }
        if (direction == "up") {
            points = [
                { x: w / 2 + x, y: 0 + y },
                { x: w + x, y: h + y },
                { x: 0 + x, y: h + y }
            ];
        }
        if (direction == "down") {
            points = [
                { x: 0 + x, y: 0 + y },
                { x: w + x, y: 0 + y },
                { x: w / 2 + x, y: h + y }
            ];
        }

        if (shadow != 0) {
            var sshape: egret.Shape = new egret.Shape();
            sshape.graphics.beginFill(0x000000);
            sshape.graphics.lineStyle(radius, 0x000000);
            sshape.graphics.moveTo(points[0].x, points[0].y + shadow);
            sshape.graphics.lineTo(points[1].x, points[1].y + shadow);
            sshape.graphics.lineTo(points[2].x, points[2].y + shadow);
            sshape.graphics.lineTo(points[0].x, points[0].y + shadow);
            sshape.graphics.endFill();
            this.addChild(sshape);
        }

        if (config.border != undefined) {
            if (config.border != 0) {
                var border = config.border * 2;
                var bcolor = ColorEnum[config.borderColor];
                /*** border fill ***/
                var bshape: egret.Shape = new egret.Shape();
                bshape.graphics.beginFill(bcolor);
                bshape.graphics.lineStyle(radius, bcolor);
                bshape.graphics.moveTo(points[0].x, points[0].y);
                bshape.graphics.lineTo(points[1].x, points[1].y);
                bshape.graphics.lineTo(points[2].x, points[2].y);
                bshape.graphics.lineTo(points[0].x, points[0].y);
                bshape.graphics.endFill();
                this.addChild(bshape);

                x = x + border;
                y = y + border;
                w = w - border * 2;
                h = h - border * 2;

                radius = radius - border;
            }
        }

        var shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.lineStyle(radius, color);
        shape.graphics.moveTo(points[0].x, points[0].y);
        shape.graphics.lineTo(points[1].x, points[1].y);
        shape.graphics.lineTo(points[2].x, points[2].y);
        shape.graphics.lineTo(points[0].x, points[0].y);
        shape.graphics.endFill();
        this.addChild(shape);

        this.cacheAsBitmap;
    }

    public copy() {
        return new E8TriangleRaw(this.config);
    }
}