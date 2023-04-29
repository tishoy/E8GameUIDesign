module Encrypt {
    export const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    export function encode(data) {
        let str = JSON.stringify(data);
        let stosb = Encrypt.charToCode(Encrypt.btoa(encodeURI(str)));
        let encode = Encrypt.btoa(encodeURI(stosb));
        return encode;
    }

    export function decode(data) {
        let bin = decodeURI(Encrypt.atob(data));
        let decodeStr = decodeURI(Encrypt.atob(Encrypt.charToCode(bin)));
        return JSON.parse(decodeStr);
    }

    export function charToCode(data) {
        var buf = new ArrayBuffer(data.length * 2);
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLength = data.length; i < strLength; i++) {
            // console.log(str.charCodeAt(i));
            bufView[i] = 127 - data.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }

    export function codeToChar(char) {
        var buf = new ArrayBuffer(char.length * 2);
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLength = char.length; i < strLength; i++) {
            // console.log(str.charCodeAt(i));
            bufView[i] = 127 - char.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }

    export function btoa(input) {
        var str = String(input);
        for (
            var block, charCode, idx = 0, map = Encrypt.chars, output = '';

            str.charAt(idx | 0) || (map = '=', idx % 1);
            output += map.charAt(63 & block >> 8 - idx % 1 * 8)
        ) {
            charCode = str.charCodeAt(idx += 3 / 4);
            if (charCode > 0xFF) {
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }
            block = block << 8 | charCode;
        }
        return output;
    }

    export function atob(input) {
        var str = (String(input)).replace(/[=]+$/, ''); // #31: ExtendScript bad parse of /=
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
            var bc = 0, bs, buffer, idx = 0, output = '';
            buffer = str.charAt(idx++);
            ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
        ) {
            buffer = Encrypt.chars.indexOf(buffer);
        }
        return output;
    }
}