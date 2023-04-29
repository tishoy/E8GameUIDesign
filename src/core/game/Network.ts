/**
 * 
 *
 */
class Network {
    constructor() {

    }

    private static address = "";
    private static cb = null;


    public static instance: Network = null
    public static get Instance() {
        return this.instance;
    }

    public static send(func, data) {
        let encodeData = Encrypt.encode(data);
        const httpRequest = new egret.HttpRequest();
        httpRequest.setRequestHeader('X-Parse-Application-Id', 'wsplane');
        httpRequest.open(this.address + func + "?data=" + encodeData, egret.HttpMethod.POST);
        httpRequest.addEventListener(egret.Event.COMPLETE, Network.onGetComplete, this);
        httpRequest.addEventListener(egret.IOErrorEvent.IO_ERROR, Network.onGetIOError, this);
        httpRequest.addEventListener(egret.ProgressEvent.PROGRESS, Network.onGetProgress, this);
        httpRequest.send();
    }

    private static onGetComplete(event: egret.Event): void {
        var request = <egret.HttpRequest>event.currentTarget;
        egret.log("get data : ", request.response);
        let response = JSON.parse(request.response);
        let data = Encrypt.decode(response.result.data);
        Network.cb(data);
    }

    private static onGetIOError(event: egret.IOErrorEvent): void {
        egret.log("get error : " + event);
    }

    private static onGetProgress(event: egret.ProgressEvent): void {
        egret.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

    public set SERVER_ADDRESS(address) {
        Network.address = address;
    }

    public get SERVER_ADDRESS() {
        return Network.address;
    }

    public set onComplete(cb) {
        Network.cb = cb;
    }
}