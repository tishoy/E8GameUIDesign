/**
 * 
 */
class E8Factory {

    static pool = {};
    static tree = [];

    static sort(raws = []) {
        let sort = raws.sort((a, b) => {
            return a.z - b.z;
        })
        return sort;
    }

    static create(raw?) {
        switch (raw.type) {
            case E8RawEnum.IMAGE:
                return this.createBitmap(raw);

            case E8RawEnum.BOX:
                return this.createBox(raw);

            case E8RawEnum.TEXT:
                return this.createText(raw);

            case E8RawEnum.TRIANGLE:
                return this.createTriangle(raw);

            default:
                return this.createComponent(raw);
        }
        
    }

    static createBitmap(raw) {
        let bitmap = new E8BitmapRaw(RES.getRes(raw.url));
        bitmap.arg = raw.arg;
        return bitmap;
    }

    static createBox(raw) {
        let box = new E8BoxRaw(raw.config);
        box.arg = raw.arg;
        return box;
    }

    static createTriangle(raw) {
        let triangle = new E8TriangleRaw(raw.config);
        triangle.arg = raw.arg;
        return triangle;
    }

    static createAnimate(raw) {
        let factory = new egret.MovieClipDataFactory(RES.getRes(raw.data), RES.getRes(raw.url))
        let movieClip = new E8AnimateRaw(factory);
        return movieClip;
    }

    static createText(raw) {
        let text = new E8TextRaw(raw.config);
        text.arg = raw.arg;
        return text;
    }

    static createComponent(raw = undefined, arg?) {
        let component = new Product();
        let data;
        if (raw.url != undefined) {
            if (this.tree.indexOf(raw.url) != -1) {
                console.error("循环引用了componnet" + raw.url);
                this.tree = [];
                return null;
            }
            this.tree.push(raw.url);
            data = RES.getRes(raw.url);
            if (raw.arg != undefined) {
                data.arg = raw.arg;
            }
        } else {
            data = raw;
        }
        if (arg != undefined) {
            data.arg = arg;
        }

        component.assemble(data);
        if (raw.url != undefined) {
            this.tree.pop();
        }
        return component;
    }
}