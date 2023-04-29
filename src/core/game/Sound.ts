/**
 * 
 */
class Sound {

    private soundChannel: egret.SoundChannel;

    private _SoundPlaying;

    private map: { [key: string]: egret.Sound; } = {};

    private static instance: Sound = null;

    public static get Instance() {
        if (this.instance == null) {
            this.instance = new Sound();
        }
        return this.instance;
    }


    private loadSound(res) {
        var sound = new egret.Sound();
        this.map[res] = sound;
        var url: string = "resource/assets/sound/" + res.replace("_mp3", ".mp3");
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadSoundComplete, this);
        //开始加载
        sound.load(url);
    }

    private onLoadSoundComplete(event: Event) {
        // console.log("load complete" + event);
    }

    public playSound(sound_res, loop: number = 1) {
        if (this.SoundPlaying) {
            let sound: egret.Sound = this.map[sound_res];
            if (sound === undefined || sound === null) {
                this.loadSound(sound_res);
                return;
            }
            this.soundChannel = sound.play(0, loop);
        }
    }

    public set SoundPlaying(value) {
        this._SoundPlaying = value;
    }

    // public genSound() {

    //     // 设置参数
    //     var freq = 440; // 频率为 440Hz
    //     var duration = 0.3; // 音频时长为 0.3 秒
    //     var sampleRate = 44100; // 采样率为 44100Hz
    //     var amp = 0.1; // 音频振幅为 0.1

    //     // 创建 AudioContext
    //     var audioCtx = new window.AudioContext();

    //     // 创建 AudioBuffer
    //     var numSamples = duration * sampleRate;
    //     var audioBuffer = audioCtx.createBuffer(1, numSamples, sampleRate);
    //     var channelData = audioBuffer.getChannelData(0);

    //     // 生成音频数据
    //     for (var i = 0; i < numSamples; i++) {
    //         channelData[i] = Math.sin(2 * Math.PI * freq * i / sampleRate) * amp;
    //     }

    //     // 创建 Blob
    //     var blob = new Blob([this.createWavBlob(audioBuffer)], { type: "audio/wav" });

    //     // 下载 WAV 文件
    //     var url = window.URL.createObjectURL(blob);
    //     var link = document.createElement("a");
    //     link.href = url;
    //     link.download = "440hz.wav";
    //     link.click();
    // }

    // public createWavBlob(audioBuffer) {
    //     var numChannels = audioBuffer.numberOfChannels;
    //     var sampleRate = audioBuffer.sampleRate;
    //     var numSamples = audioBuffer.length;
    //     var bytesPerSample = 2;
    //     var blockAlign = numChannels * bytesPerSample;
    //     var byteRate = sampleRate * blockAlign;
    //     var dataSize = numSamples * blockAlign;
    //     var buffer = new ArrayBuffer(44 + dataSize);
    //     var view = new DataView(buffer);
    //     var pos = 0;

    //     // RIFF标识符
    //     this.writeString(view, pos, 'RIFF');
    //     pos += 4;

    //     // 数据大小
    //     view.setUint32(pos, 36 + dataSize, true);
    //     pos += 4;

    //     // WAVE格式标识符
    //     this.writeString(view, pos, 'WAVE');
    //     pos += 4;

    //     // fmt子块
    //     this.writeString(view, pos, 'fmt ');
    //     pos += 4;

    //     // fmt子块长度
    //     view.setUint32(pos, 16, true);
    //     pos += 4;

    //     // 音频格式，这里是PCM
    //     view.setUint16(pos, 1, true);
    //     pos += 2;

    //     // 声道数
    //     view.setUint16(pos, numChannels, true);
    //     pos += 2;

    //     // 采样率
    //     view.setUint32(pos, sampleRate, true);
    //     pos += 4;

    //     // 每秒数据字节数
    //     view.setUint32(pos, byteRate, true);
    //     pos += 4;

    //     // 数据块对齐单位
    //     view.setUint16(pos, blockAlign, true);
    //     pos += 2;

    //     // 采样位数
    //     view.setUint16(pos, bytesPerSample * 8, true);
    //     pos += 2;

    //     // 数据块
    //     this.writeString(view, pos, 'data');
    //     pos += 4;

    //     // 数据长度
    //     view.setUint32(pos, dataSize, true);
    //     pos += 4;

    //     // 写入采样数据
    //     if (numChannels === 2) {
    //         var channel1 = audioBuffer.getChannelData(0);
    //         var channel2 = audioBuffer.getChannelData(1);
    //         for (var i = 0; i < numSamples; i++) {
    //             view.setInt16(pos, channel1[i] * (0x7FFF * 2), true);
    //             pos += 2;
    //             view.setInt16(pos, channel2[i] * (0x7FFF * 2), true);
    //             pos += 2;
    //         }
    //     } else {
    //         var channel = audioBuffer.getChannelData(0);
    //         for (var i = 0; i < numSamples; i++) {
    //             view.setInt16(pos, channel[i] * (0x7FFF * 2), true);
    //             pos += 2;
    //         }
    //     }

    //     return new Blob([view], { type: 'audio/wav' });
    // }

    // public writeString(view, pos, str) {
    //     for (var i = 0; i < str.length; i++) {
    //         view.setUint8(pos + i, str.charCodeAt(i));
    //     }
    // }

    public genAudio() {
        let source = "C3s D3s E3s F3s G3s G3h r G3q F3q E3q D3q C3q C3h r";
        this.playScore(source);
    }

    // public audioContext = new AudioContext();
    // public duration = 0.5; // 每个音符的时长，单位为秒
    // public tempo = 120; // 曲子速度（每分钟多少拍）
    // public noteLength = 60 / this.tempo * this.duration; // 计算每个音符的长度
    // public notePattern = /([A-G])(#|b)?(\d*)([a-z]*)/i; // 匹配音符的正则表达式
    // public baseFreq = 440; // 音调 A4 的频率
    // public octaveScale = Math.pow(2, 1 / 12); // 十二平均律，每个半音的频率比例
    // public amplitude = 0.2;// 振幅

    // static SAMPLE_RATE = 44100;

    // // 将一个音符转换为频率
    // public noteToFreq(note) {
    //     const match = this.notePattern.exec(note);
    //     const noteName = match[1].toUpperCase();
    //     const accidental = match[2];
    //     const octave = parseInt(match[3]) || 4;
    //     const durationModifier = match[4];
    //     let freq = this.baseFreq * Math.pow(this.octaveScale, (noteName.charCodeAt(0) - 65) + (octave - 4) * 12);
    //     if (accidental === '#') {
    //         freq *= Math.pow(this.octaveScale, 1);
    //     } else if (accidental === 'b') {
    //         freq /= Math.pow(this.octaveScale, 1);
    //     }
    //     if (durationModifier === 's') {
    //         freq *= 1.5;
    //     } else if (durationModifier === 't') {
    //         freq *= 2 / 3;
    //     }
    //     return freq;
    // }

    // // 将一个音符转换为音频数据
    // public noteToData(note) {
    //     const freq = this.noteToFreq(note);
    //     const sampleRate = this.audioContext.sampleRate;
    //     const numSamples = sampleRate * this.noteLength;
    //     const t = new Float32Array(numSamples);
    //     for (let i = 0; i < numSamples; i++) {
    //         t[i] = Math.sin(2 * Math.PI * freq * i / sampleRate) * this.amplitude * (0.5 - 0.5 * Math.cos(2 * Math.PI * i / numSamples));
    //     }
    //     const audioBuffer = this.audioContext.createBuffer(1, numSamples, sampleRate);
    //     audioBuffer.getChannelData(0).set(t);
    //     return audioBuffer;
    // }

    // // 将一个 score 转换为音频数据
    // public scoreToData(score) {
    //     const notes = score.trim().split(/\s+/);
    //     const numNotes = notes.length;
    //     const audioBuffer = this.audioContext.createBuffer(1, this.audioContext.sampleRate * this.duration * numNotes, this.audioContext.sampleRate);
    //     let offset = 0;
    //     for (let i = 0; i < numNotes; i++) {
    //         const noteData = this.noteToData(notes[i]);
    //         audioBuffer.getChannelData(0).set(noteData.getChannelData(0), offset);
    //         offset += noteData.length;
    //     }
    //     return audioBuffer;
    // }

    // // 播放一个 score
    // public playScore(score) {
    //     const audioBuffer = this.scoreToData(score);
    //     const audioSource = this.audioContext.createBufferSource();
    //     audioSource.buffer = audioBuffer;
    //     audioSource.connect(this.audioContext.destination);
    //     audioSource.start();
    // }

    // public generateWaveCos(freq: number, duration: number, rest: boolean = false, amplitude: number = 1.0): Int16Array {
    //     const numSamples: number = Math.floor(duration * Sound.SAMPLE_RATE);
    //     let waveData: Float64Array = new Float64Array(numSamples);
    //     if (!rest) {
    //         const t: Float64Array = new Float64Array(numSamples);
    //         for (let i = 0; i < numSamples; i++) {
    //             t[i] = i / Sound.SAMPLE_RATE;
    //         }
    //         waveData = new Float64Array(numSamples);
    //         for (let i = 0; i < numSamples; i++) {
    //             waveData[i] = amplitude * Math.sin(2 * Math.PI * freq * t[i]) * (0.5 - 0.5 * Math.cos(2 * Math.PI * i / numSamples));
    //         }
    //     }
    //     return new Int16Array(waveData);
    // }

    public generate_wave_cos(freq: number, duration: number, rest = false, amplitude = 1.0): Int16Array {
        const num_samples = Math.round(duration * 44100);
        const wave_data = new Float32Array(num_samples);
        if (!rest) {
            const t = new Float32Array(num_samples);
            const step = 1 / 44100;
            for (let i = 0; i < num_samples; i++) {
                t[i] = i * step;
            }
            const wave = new Float32Array(num_samples);
            for (let i = 0; i < num_samples; i++) {
                wave[i] = Math.sin(2.0 * Math.PI * freq * t[i]);
            }
            const window = new Float32Array(num_samples);
            for (let i = 0; i < num_samples; i++) {
                window[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / num_samples);
            }
            for (let i = 0; i < num_samples; i++) {
                wave_data[i] = Math.round(wave[i] * window[i] * amplitude * 32767);
            }
        }
        return wave_data;
    }

    public parse_score(score: string, bpm = 120): [number | null, number][] {
        const notes: { [key: string]: number } = { 'C': 261.63, 'D': 293.66, 'E': 329.63, 'F': 349.23, 'G': 392.00, 'A': 440.00, 'B': 493.88 };
        const duration: { [key: string]: number } = { "w": 4, "h": 2, "q": 1, "e": 0.5, "s": 0.25, "t": 0.125 };
        const beat_duration = 60 / bpm;
        const parsed_score: [number | null, number][] = [];
        const notesList = score.split(" ");
        for (let i = 0; i < notesList.length; i++) {
            const note = notesList[i];
            if (note.toLowerCase() === "r") {
                parsed_score.push([null, beat_duration]);
            } else {
                const note_duration = duration[note.slice(-1)];
                let freq;
                if (note.length === 2) {
                    freq = notes[note[0]]
                } else {
                    freq = notes[note[0]] * Math.pow(2, parseInt(note[1]) - 4);
                }
                parsed_score.push([freq, beat_duration * note_duration]);
            }
        }
        return parsed_score;
    }

    public async playWave(waveData: Float32Array) {
        const context = new AudioContext();
        let gain = context.createGain();
        gain.gain.value = 0.00005;
        gain.connect(context.destination)
        const buffer = context.createBuffer(1, waveData.length, 44100);
        buffer.copyToChannel(waveData, 0, 0);
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(gain);
        source.start();
        await new Promise(resolve => setTimeout(resolve, buffer.duration * 1000));
    }

    public async playScore(score: string) {
        const waveData: Float32Array[] = [];
        const parsedScore = this.parse_score(score, 120);
        for (const note of parsedScore) {
            if (note[0] === null) {
                waveData.push(this.generate_wave_cos(440, 0.5, true));
            } else {
                const freq = note[0];
                const duration = note[1];
                waveData.push(this.generate_wave_cos(freq, duration));
            }
        }
        const mergedWaveData = new Float32Array(waveData.reduce((acc, cur) => {
            return acc + cur.length;
        }, 0));
        let offset = 0;
        waveData.forEach(data => {
            mergedWaveData.set(data, offset);
            offset += data.length;
        });
        await this.playWave(mergedWaveData);
    }


    public playStandardTone() {
        const audioContext = new AudioContext();
        const duration = 1; // seconds
        const frequency = 261; // Hz
        const sampleRate = audioContext.sampleRate;
        const length = duration * sampleRate;
        const buffer = audioContext.createBuffer(1, length, sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < length; i++) {
            data[i] = Math.sin(2 * Math.PI * frequency * (i / sampleRate));
        }

        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
    }
}