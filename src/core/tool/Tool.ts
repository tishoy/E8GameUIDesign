class Tool {

    static isArr(origin: any): boolean {
        let str = '[object Array]'
        return Object.prototype.toString.call(origin) == str ? true : false
    }


    static deepClone(origin, target?: Record<string, any>) {
        let tar = target || {}

        for (const key in origin) {
            if (Object.prototype.hasOwnProperty.call(origin, key)) {
                if (typeof origin[key] === 'object' && origin[key] !== null) {
                    tar[key] = Tool.isArr(origin[key]) ? [] : {}
                    Tool.deepClone(origin[key], tar[key])
                } else {
                    tar[key] = origin[key]
                }
            }
        }

        return tar
    }

}
