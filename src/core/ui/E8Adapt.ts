/**
 * 
 */
class E8Adapt {
    static get aspect_rate() {
        return egret.MainContext.instance.stage.stageWidth / egret.MainContext.instance.stage.stageHeight;
    }

    static get width() {
        return egret.MainContext.instance.stage.stageWidth;
    }

    static get height() {
        return egret.MainContext.instance.stage.stageHeight;
    }

    static get centerX() {
        return egret.MainContext.instance.stage.stageWidth / 2;
    }

    static get centerY() {
        return egret.MainContext.instance.stage.stageHeight / 2;
    }

    static setToArea(ui, area, w, h, adaptWidth = this.width, adaptHeight = this.height) {
        switch (area) {
            case E8Area.A:
                ui.anchorOffsetX = w / 2;
                ui.anchorOffsetY = h / 2;
                ui.x = adaptWidth / 2;
                ui.y = adaptHeight / 2;
                break;

            case E8Area.L_T:
                ui.anchorOffsetX = 0;
                ui.anchorOffsetY = 0;
                ui.x = 0;
                ui.y = 0;
                break;

            case E8Area.T:
                ui.anchorOffsetX = w / 2;
                ui.anchorOffsetY = 0;
                ui.x = adaptWidth / 2;
                ui.y = 0;
                break;

            case E8Area.R_T:
                ui.anchorOffsetX = w;
                ui.anchorOffsetY = 0;
                ui.x = adaptWidth;
                ui.y = 0;
                break;

            case E8Area.L:
                ui.anchorOffsetX = 0;
                ui.anchorOffsetY = h / 2;
                ui.x = 0;
                ui.y = adaptHeight / 2;
                break;

            case E8Area.M:
                ui.anchorOffsetX = w / 2;
                ui.anchorOffsetY = h / 2;
                ui.x = adaptWidth / 2;
                ui.y = adaptHeight / 2;
                break;

            case E8Area.R:
                ui.anchorOffsetX = w;
                ui.anchorOffsetY = h / 2;
                ui.x = adaptWidth;
                ui.y = adaptHeight / 2;
                break;

            case E8Area.L_B:
                ui.anchorOffsetX = 0;
                ui.anchorOffsetY = h;
                ui.x = 0;
                ui.y = adaptHeight;
                break;

            case E8Area.B:
                ui.anchorOffsetX = w / 2;
                ui.anchorOffsetY = h;
                ui.x = adaptWidth / 2;
                ui.y = adaptHeight;
                break;

            case E8Area.R_B:
                ui.anchorOffsetX = w;
                ui.anchorOffsetY = h;
                ui.x = adaptWidth;
                ui.y = adaptHeight;
                break;

            case -E8Area.L_T:
                ui.anchorOffsetX = w;
                ui.anchorOffsetY = h;
                ui.x = 0;
                ui.y = 0;
                break;

            case -E8Area.T:
                ui.anchorOffsetX = w / 2;
                ui.anchorOffsetY = h;
                ui.x = adaptWidth / 2;
                ui.y = 0;
                break;

            case -E8Area.R_T:
                ui.anchorOffsetX = 0;
                ui.anchorOffsetY = h;
                ui.x = adaptWidth;
                ui.y = 0;
                break;

            case -E8Area.L:
                ui.anchorOffsetX = w;
                ui.anchorOffsetY = h / 2;
                ui.x = 0;
                ui.y = adaptHeight / 2;
                break;

            case -E8Area.M:
                ui.anchorOffsetX = w / 2;
                ui.anchorOffsetY = h / 2;
                ui.x = adaptWidth / 2;
                ui.y = adaptHeight / 2;
                break;

            case -E8Area.R:
                ui.anchorOffsetX = 0;
                ui.anchorOffsetY = h / 2;
                ui.x = adaptWidth;
                ui.y = adaptHeight / 2;
                break;

            case -E8Area.L_B:
                ui.anchorOffsetX = w;
                ui.anchorOffsetY = 0;
                ui.x = 0;
                ui.y = adaptHeight;
                break;

            case -E8Area.B:
                ui.anchorOffsetX = w / 2;
                ui.anchorOffsetY = 0;
                ui.x = adaptWidth / 2;
                ui.y = adaptHeight
                break;

            case -E8Area.R_B:
                ui.anchorOffsetX = 0;
                ui.anchorOffsetY = 0;
                ui.x = adaptWidth;
                ui.y = adaptHeight;
                break;
        }
    }

    static adapt(ui: egret.DisplayObject, position = E8Area.A, scale_mode = E8ScaleMode.NO_SCALE,
        area_w = this.width, area_h = this.height, ui_w = 0, ui_h = 0, ui_x = 0, ui_y = 0, adaptWidth = this.width, adaptHeight = this.height) {
        if (area_w == undefined) {
            area_w = this.width;
        }
        if (area_h == undefined) {
            area_h = this.height;
        }
        if (adaptWidth == undefined) {
            adaptWidth = this.width;
        }
        if (adaptHeight == undefined) {
            adaptHeight == this.height;
        }
        this.setToArea(ui, position, ui_w, ui_h, adaptWidth, adaptHeight);
        ui.x += ui_x;
        ui.y += ui_y;
        switch (scale_mode) {
            case E8ScaleMode.NO_SCALE:
                ui.scaleX = ui.scaleY = 1;
                break;
            case E8ScaleMode.SHOW_ALL:
                if (ui_w / ui_h > area_w / area_h) {
                    ui.scaleX = ui.scaleY = adaptWidth / area_w;
                } else {
                    ui.scaleX = ui.scaleY = adaptHeight / area_h;
                };
                break;
            case E8ScaleMode.NO_BORDER:
                if (ui_w / ui_h > adaptWidth / adaptHeight) {
                    ui.scaleX = ui.scaleY = adaptHeight / area_h;
                } else {
                    ui.scaleX = ui.scaleY = adaptWidth / area_w;
                };
                break;
            case E8ScaleMode.FIXED_WIDTH:
                ui.scaleX = ui.scaleY = adaptWidth / area_w;
                break;
            case E8ScaleMode.FIXED_HEIGHT:
                ui.scaleX = ui.scaleY = adaptHeight / area_h;
                break;
            case E8ScaleMode.FIXED_NARROW:
                break;
            case E8ScaleMode.FIXED_WIDE:
                break;
            case E8ScaleMode.EXACT_FIT:
                ui.scaleX = adaptWidth / area_w;
                ui.scaleY = adaptHeight / area_h;
                break;
            case E8ScaleMode.SCALE_X:
                ui.scaleX = adaptWidth / area_w;
                ui.scaleY = 1;
                break;
            case E8ScaleMode.SCALE_Y:
                ui.scaleX = 1;
                ui.scaleY = adaptHeight / area_h;
                break;


        }

    }

}