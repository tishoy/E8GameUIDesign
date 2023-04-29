/**
 * 
 */
class Save {
    constructor() {
    }

    private static instance: Save = null;

    public static get Instance() {
        if (this.instance == null) {
            this.instance = new Save();
        }
        return this.instance;
    }

    public getFromLocal(tag): string {
        let saved = egret.localStorage.getItem(tag);
        if (saved == undefined || saved == "" || saved == null) {
            return undefined
        }
        return JSON.parse(decodeURI(Encrypt.atob(saved)));
    }

    public saveToLocal(tag, data) {
        egret.localStorage.setItem(tag, Encrypt.btoa(encodeURI(JSON.stringify(data))));
    }

    public clearLocal() {
        egret.localStorage.clear();
    }


    /**
     * 语言设置
     */
    public getLang() {
        return egret.localStorage.getItem("lang")
    }

    public setLang(lang) {
        egret.localStorage.setItem("lang", lang);
    }

    /**
     * 震动
     * @param status 
     */
    public saveVibrateStatus(status) {
        egret.localStorage.setItem("vibrate", status);
    }

    public getVibrateStatus() {
        return egret.localStorage.getItem("vibrate");
    }

    /**
     * 背景音
     * status: "1" playing "0" silence
     */
    public saveBgmStatus(status) {
        egret.localStorage.setItem("bgmPlaying", status);
    }

    public getBgmStatus() {
        return egret.localStorage.getItem("bgmPlaying");
    }

    /**
     * 音效存储
     * status: "1" playing "0" silence
     */
    public saveSoundStatus(status) {
        egret.localStorage.setItem("soundPlaying", status);
    }

    public getSoundStatus() {
        return egret.localStorage.getItem("soundPlaying");
    }

    /**
 * 版本号
 * @returns 
 */
    public getVersion() {
        return egret.localStorage.getItem("version");
    }

    public setVersion(version) {
        egret.localStorage.setItem("version", version);
    }


    public savePlayerData(data) {
        egret.localStorage.setItem("player", data);
    }

    public getPlayerData() {
        return egret.localStorage.getItem("player")
    }

}