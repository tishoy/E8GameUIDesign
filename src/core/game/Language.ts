class i18n {
    public static langData = null;
    public static Lang;

    public static getLanguage(word) {
        if (this.langData == null) {
            this.langData = RES.getRes("language_json");
        }
        return i18n.langData[i18n.Lang][word];
    }

    public static getNoSpaceLanguage(word) {
        let langWord = i18n.langData[i18n.Lang][word];
        while (langWord.indexOf(" ") != -1) {
            langWord = langWord.replace(" ", "");
        }
        return langWord;
    }
}