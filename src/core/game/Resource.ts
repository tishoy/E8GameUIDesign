/**
 * 
 */
class Resource {

    constructor() {

    }

    private static instance = null;

    public static get Instance() {
        if (this.instance == null) {
            this.instance = new Resource();
        }
        return this.instance;
    }

    public static async loadRes(data, root) {
        await RES.loadConfig(data, root);
    }
}