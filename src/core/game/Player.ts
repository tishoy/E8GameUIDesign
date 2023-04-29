/**
 * 
 */
class Player {
    private static instance: Player = null;

    private _data: PlayerData = null;

    public getData() {
        if (this._data == undefined) {
            this._data = new PlayerData();
            let saved = Save.Instance.getPlayerData();
            if (saved == undefined || saved == "" || saved == null) {
            } else {
                this._data.setData(JSON.parse(saved));
            }
            this.saveData();
        }
        return this._data;
    }

    public saveData() {
        Save.Instance..savePlayerData(this._data.getDataString());
    }

    private _userInfo;

    public get userInfo() {
        return this._userInfo;
    }

    public set userInfo(value) {
        this._userInfo = value;
    }

    constructor() {
        this.init();
    }

    private init() {

    }

    private _register = false;
    private _hasLogin = false;

    public static get Instance() {
        if (this.instance == null) {
            this.instance = new Player();
        }
        return this.instance;
    }

    public register() {
        this._register = true;
    }

    public login() {
        this._hasLogin = true;
    }

    public get hasLogin() {
        return this._hasLogin;
    }

}