/**
 * 
 */
class Product extends egret.DisplayObjectContainer {
    protected product_name = "";
    protected raws = [];
    protected manual;
    protected default;
    protected type = "";
    protected data;
    public arg;

    constructor() {
        super();
    }

    protected testManual(manual) {
        if (manual.type == undefined) {
            return false;
        }
    }

    protected productSetArg(key, raw, product) {
        let argKey = product[key].slice(1, product[key].length);
        if (this.arg != undefined && this.arg[argKey] != undefined) {
            raw[key] = this.arg[argKey];
        } else {
            raw[key] = this.default[argKey];
        }
    }

    protected productSetValue(key, raw, value, rawName) {
        if (typeof value == "number") {
            raw[key] = value;
        } else {
            console.error("设置属性值错误" + this.product_name + "文件的" + rawName + "的" + key + "值")
        }
    }

    public assemble(data) {
        this.testManual(data);
        this.data = data;
        this.product_name = data.name;

        this.width = data.width;
        this.height = data.height;

        // let container = new egret.Shape();
        // container.graphics.beginFill(0xffffff, 0)
        // container.graphics.drawRect(0, 0, 100, 1600);
        // container.graphics.endFill();
        // this.addChild(container);

        this.default = data.default;
        this.raws = data.raws;
        this.arg = data.arg;
        this.manual = data.manual;
        if (this.manual.product.length == 0) {
            return;
        }
        let products = this.sortRaws(this.manual.product);
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let rawName: string;
            rawName = product.rawName;

            let raw;
            raw = this.loadRaw(rawName);

            if (product.key !== undefined) {
                this[product.key] = raw;
            }
            if (typeof (product.x) == "string" && product.x.indexOf("$") == 0) {
                this.productSetArg("x", raw, product)
            } else {
                this.productSetValue("x", raw, product.x, rawName)
            }
            if (typeof (product.y) == "string" && product.y.indexOf("$") == 0) {
                this.productSetArg("y", raw, product)
            } else {
                this.productSetValue("y", raw, product.y, rawName)
            }
            if (product.anchor != undefined) {
                if (typeof (product.anchor) == "string" && product.anchor.indexOf("$") == 0) {
                    this.productSetArg("anchor", raw, product)
                } else {
                    this.productSetValue("anchor", raw, product.anchor, rawName)
                }
                switch (product.anchor) {
                    case 1:
                        raw.anchorOffsetX = 0;
                        raw.anchorOffsetY = raw.height;
                        break;
                    case 2:
                        raw.anchorOffsetX = raw.width / 2;
                        raw.anchorOffsetY = raw.height;
                        break;
                    case 3:
                        raw.anchorOffsetX = raw.width;
                        raw.anchorOffsetY = raw.height;
                        break;
                    case 4:
                        raw.anchorOffsetX = 0;
                        raw.anchorOffsetY = raw.height / 2;
                        break;
                    case 5:
                        raw.anchorOffsetX = raw.width / 2;
                        raw.anchorOffsetY = raw.height / 2;
                        break;
                    case 6:
                        raw.anchorOffsetX = raw.width;
                        raw.anchorOffsetY = raw.height / 2;
                        break;
                    case 7:
                        raw.anchorOffsetX = 0;
                        raw.anchorOffsetY = 0;
                        break;
                    case 8:
                        raw.anchorOffsetX = raw.width / 2;
                        raw.anchorOffsetY = 0;
                        break;

                    case 9:
                        raw.anchorOffsetX = raw.width;
                        raw.anchorOffsetY = 0;
                        break;
                }
            }
            if (product.scale9Grid != undefined) {
                if (typeof (product.scale9Grid) == "string" && product.scale9Grid.indexOf("$") == 0) {
                    this.productSetArg("scale9Grid", raw, product)
                } else {
                    raw.scale9Grid = new egret.Rectangle(
                        product.scale9Grid[0],
                        product.scale9Grid[1],
                        product.scale9Grid[2],
                        product.scale9Grid[3]
                    )
                }
            }
            if (product.width != undefined) {
                if (typeof (product.width) == "string" && product.width.indexOf("$") == 0) {
                    this.productSetArg("width", raw, product)
                } else {
                    this.productSetValue("width", raw, product.width, rawName)
                }
            }
            if (product.height != undefined) {
                if (typeof (product.height) == "string" && product.height.indexOf("$") == 0) {
                    this.productSetArg("height", raw, product)
                } else {
                    this.productSetValue("height", raw, product.height, rawName)
                }
            }
            if (product.alpha != undefined) {
                if (typeof (product.alpha) == "string" && product.alpha.indexOf("$") == 0) {
                    this.productSetArg("alpha", raw, product)
                } else {
                    this.productSetValue("alpha", raw, product.alpha, rawName)
                }
            }
            if (product.anchorOffsetX != undefined) {
                if (typeof (product.anchorOffsetX) == "string" && product.anchorOffsetX.indexOf("$") == 0) {
                    this.productSetArg("anchorOffsetX", raw, product)
                } else {
                    this.productSetValue("anchorOffsetX", raw, product.anchorOffsetX, rawName)
                }
            }
            if (product.anchorOffsetY != undefined) {
                if (typeof (product.anchorOffsetY) == "string" && product.anchorOffsetY.indexOf("$") == 0) {
                    this.productSetArg("anchorOffsetY", raw, product)
                } else {
                    this.productSetValue("anchorOffsetY", raw, product.anchorOffsetY, rawName)
                }
            }
            if (product.scaleX != undefined) {
                if (typeof (product.scaleX) == "string" && product.scaleX.indexOf("$") == 0) {
                    this.productSetArg("scaleX", raw, product)
                } else {
                    this.productSetValue("scaleX", raw, product.scaleX, rawName)
                }
            }
            if (product.scaleY != undefined) {
                if (typeof (product.scaleY) == "string" && product.scaleY.indexOf("$") == 0) {
                    this.productSetArg("scaleY", raw, product)
                } else {
                    this.productSetValue("scaleY", raw, product.scaleY, rawName)
                }
            }
            if (product.skewX != undefined) {
                if (typeof (product.skewX) == "string" && product.skewX.indexOf("$") == 0) {
                    this.productSetArg("skewX", raw, product)
                } else {
                    this.productSetValue("skewX", raw, product.skewX, rawName)
                }
            }
            if (product.skewY != undefined) {
                if (typeof (product.skewY) == "string" && product.skewY.indexOf("$") == 0) {
                    this.productSetArg("skewY", raw, product)
                } else {
                    this.productSetValue("skewY", raw, product.skewY, rawName)
                }
            }
            if (product.rotation != undefined) {
                if (typeof (product.rotation) == "string" && product.rotation.indexOf("$") == 0) {
                    this.productSetArg("rotation", raw, product)
                } else {
                    this.productSetValue("rotation", raw, product.rotation, rawName)
                }
            }
            if (product.visible != undefined) {
                if (typeof (product.visible) == "string" && product.visible.indexOf("$") == 0) {
                    this.productSetArg("visible", raw, product)
                } else {
                    if (typeof product.visible == "boolean") {
                        raw["visible"] = product.visible;
                    } else {
                        console.error("设置属性值错误" + this.product_name + "文件的" + rawName + "的visible值")
                    }
                }
            }
            if (data.resize != undefined) {
                if (data.resize) {
                    E8Adapt.adapt(raw, product.position, product.mode, product.cWidth, product.cHeight, raw.width, raw.height, product.x, product.y);
                }
            }
            this.addChild(raw);
        }
    }

    protected loadRaw(rawName) {
        let raw;
        for (let i = 0; i < this.raws.length; i++) {
            let copy = {};
            Tool.deepClone(this.raws[i], copy);
            if (this.raws[i].name == rawName) {
                if (this.raws[i]["url"] != undefined) {
                    if (typeof (this.raws[i]["url"]) == "string" && this.raws[i]["url"].indexOf("$") == 0) {
                        let argKey = this.raws[i]["url"].slice(1, this.raws[i]["url"].length);
                        // console.log("该类型设置arg" + JSON.stringify(this.arg));
                        if (this.arg != undefined && this.arg[argKey] != undefined) {
                            copy["url"] = this.arg[argKey];
                        } else {
                            if (this.default == undefined) {
                                console.error(rawName + ",url:" + this.raws[i]["url"] + ",没有设置默认参数值");
                            } else {
                                if (this.default[argKey] == undefined) {
                                    console.error(rawName + ",url:" + this.raws[i]["url"] + ",缺少默认的参数值");
                                } else {
                                    copy["url"] = this.default[argKey];
                                }
                            }
                        }
                    }
                }
                if (this.raws[i]["config"] != undefined) {
                    let config;
                    if (typeof (this.raws[i]["config"]) == "string") {
                        config = {}
                        copy["config"] = Tool.deepClone(RES.getRes(this.raws[i]["config"]), config);;
                    } else {
                        config = this.raws[i]["config"];
                    }
                    for (let key in config) {
                        if (typeof (config[key]) == "string") {
                            if (config[key].indexOf("$") == 0) {
                                let argKey = config[key].slice(1, config[key].length);
                                if (this.arg != undefined && this.arg[argKey] != undefined) {
                                    copy["config"][key] = this.arg[argKey];
                                } else {
                                    if (this.default == undefined) {
                                        console.error(rawName + ",url:" + this.raws[i]["url"] + ",没有设置默认参数值");
                                    } else {
                                        if (this.default[argKey] == undefined) {
                                            console.error(rawName + ",url:" + this.raws[i]["url"] + ",缺少默认的参数值");
                                        } else {
                                            copy["config"][key] = this.default[argKey];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.raws[i]["arg"] != undefined) {
                    let arg;
                    if (typeof (this.raws[i]["arg"]) == "string") {
                        arg = {}
                        copy["arg"] = Tool.deepClone(RES.getRes(this.raws[i]["arg"]), arg);;

                    } else {
                        arg = this.raws[i]["arg"];
                    }
                    for (let key in arg) {
                        if (typeof (arg[key]) == "string") {
                            if (arg[key].indexOf("$") == 0) {
                                let argKey = arg[key].slice(1, arg[key].length);
                                if (this.arg != undefined && this.arg[argKey] != undefined) {
                                    copy["arg"][key] = this.arg[argKey];
                                } else {
                                    if (this.default == undefined) {
                                        console.error(rawName + ",url:" + this.raws[i]["url"] + ",没有设置默认参数值");
                                    } else {
                                        if (this.default[argKey] == undefined) {
                                            console.error(rawName + ",url:" + this.raws[i]["url"] + ",缺少默认的参数值");
                                        } else {
                                            copy["arg"][key] = this.default[argKey];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                raw = E8Factory.create(copy);
                break;
            }
        }
        if (raw == undefined) {
            console.error("没有相应的raw:" + rawName);
        }
        return raw;
    }

    protected sortRaws(raws) {
        return raws.sort((a, b) => {
            return a.z - b.z;
        })
    }

    protected copy() {
        let c = new Product();
        return c.assemble(this.data);
    }

}