class PlayerData {
    private _id;
    public login;
    private _uid;
    private _nickName;
    private _avatarUrl
    private _mapId;
    private _plane;

    constructor() {
        this.login = false;
    }


    public setData(data) {
        for (let key in data) {
            this[key] = data[key];
        }
    }

    public set avatarUrl(value) {
        this._avatarUrl = value;
    }

    public get avatarUrl() {
        return this._avatarUrl;
    }

    public set nickName(value) {
        this._nickName = value;
    }

    public get nickName() {
        if (this._nickName == undefined) {
            return "匿名玩家"
        }
        return this._nickName;
    }

    public set id(id) {
        this._mapId = id;
    }

    public get id() {
        return this._mapId;
    }

    public set mapId(id) {
        this._mapId = id;
    }

    public get mapId() {
        return this._mapId;
    }

    public set uid(value) {
        this._uid = value;
    }

    public get uid() {
        return this._uid;
    }

    public get plane() {
        return this._plane;
    }

    public set plane(value) {
        this._plane = value;
    }

    public getDataString() {
        return JSON.stringify({
            "uid": this._uid,
            "nickName": this._nickName,
            "avatarUrl": this._avatarUrl,
            "login": this.login,
            "plane": this.plane
        })
    }
}