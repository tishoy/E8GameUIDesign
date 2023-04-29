/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {
    name: string;
    openDataContext;
    // 初始化
    initSDK();

    initAnalytics(): Object;

    analytics(key, value);

    onShow(func);

    getLaunchOption();

    share(title, onShare, type, extendInfo): Promise<any>;

    login(loading, onLogin): Promise<any>;

    openSetting();

    getUserInfo(onSuccess): Promise<any>;

    getRank(key): Promise<any>;

    uploadRank(key, score): Promise<any>;

    fetchBanner(): Promise<any>;

    showBanner(banner): Promise<any>;

    hideBanner(banner): Promise<any>;

    fetchVedio(): Promise<any>;

    reloadVedio(vedio);

    vedioPlay(vedio, onPlay, onEnd): Promise<any>;

    fetchInterstitial(): Promise<any>;

    showInterstitial(interstitialAd): Promise<any>;

    navigateToMiniProgram(appId)

    exit();

    restart(onFail);

    getGameRecorderManager();

    stopRecord();

    pauseRecord();

    resumeRecord();

    startRecord();

    abortRecord();

    hasShareVedioSDK();

    shareVedio(onShare);

    showShareButton();

    hideShareButton();

    shareCapture();

    showTip(title, successFunc, failFunc);

    loadFont(): Promise<any>;

    vibrateShort();
    /**
     * 游戏服务器
     */
    getGameServerManager();

    gameServerLogin(svr, onLogin, onError);

    startMatch(svr, isMissles, onMatch, onSuccess, onError, onJoin);

    cancelMatch(svr, isMissles, onCancel, onError);

    startGame(svr, onStart, onSyncFrame, onEnd);

    endGame(svr);

    uploadFrame(svr, action);

}

class DebugPlatform implements Platform {
    name;
    initSDK() {

    }

    onShow(func) {

    }

    async initAnalytics() {
        return {
            gameKey: "",
            secretKey: ""
        };
    }

    async analytics(key, value) {
    }

    async getRank(key) {
        return [];
    }

    async share(title, onShare, type, extendInfo) {
        console.log(title);
        onShare();
    }

    async uploadRank(key, score) {
        return score;
    }
    async getUserInfo(onSuccess) {
        onSuccess({ nickName: "username" })
        return { nickName: "username" }
    }

    async login(loading, onLogin) {
        loading();
        onLogin(false, {}, 0);
    }

    async openSetting() {

    }

    async fetchBanner() {
        return null;
    }
    async showBanner(banner) {

    }
    async hideBanner(banner) {

    }
    async fetchInterstitial() {
        return null
    }
    async showInterstitial(interstitialAd) {

    }
    async setInterstitialCloseCallBack(interstitialAd, cb) {

    }
    async fetchVedio() {
        return null
    }
    async reloadVedio(vedio) {

    }
    async vedioPlay(vedio, onPlay, onEnd) {
        onEnd(true);
    }
    /**获得文件内容 */
    async getSaveData(fileName) {
        return { key: "key" }
    }
    /**文件中写入 */
    async setSaveData(fileName, data) {

    }
    async rankView(show) {
        // UIManager.getInstance().toRankScene();
    }



    getGameRecorderManager() {
        return null;
    }
    hasShareVedioSDK() {
        return false;
    }

    shareVedio(onShare) {

    }
    shareCapture() {
    }
    showShareButton() {

    }
    hideShareButton() {

    }
    showTip(title) {

    }
    stopRecord() {
    }

    pauseRecord() {
    }

    resumeRecord() {
    }

    startRecord() {
    }

    abortRecord() {

    }

    async loadFont() {

    }

    getLaunchOption() {
        return {};
    }

    vibrateShort() {

    }

    navigateToMiniProgram(appId) {

    }

    exit() {

    }

    restart(onFail) {
        onFail();
        return;
    }

    getGameServerManager() {
        return null;
    }

    gameServerLogin(svr, onLogin, onError) {

    }

    startMatch(svr, isMissles, onStart, onSuccess, onError, onJoin) { }

    cancelMatch(svr, onCancel, onError) { }

    startGame(svr, onStart, onSyncFrame, onEnd) { }

    endGame(svr) { }

    uploadFrame(svr, action) { }

    openDataContext
}

if (!window.platform) {
    window.platform = new DebugPlatform();
    window.platform.name = "web";
}



declare let platform: Platform;

declare interface Window {
    platform: Platform
}





