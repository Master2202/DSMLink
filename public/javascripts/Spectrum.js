/**
 * Created by master2202 on 12.6.2017..
 */

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

analyser.getByteTimeDomainData(dataArray);