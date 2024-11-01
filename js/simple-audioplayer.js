// check for supported audio codecs in the browser
// taken from here: http://diveintohtml5.info/everything.html
var a = document.createElement('audio');
var _canMP3 = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
var _canOGG = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));

document.addEventListener('click', function(e) {
    if(e.target.localName === 'path') { e = e.target.parentElement; } else { e = e.target; }
    if(e.getAttribute('class') == 'btn-play') { playAudio(e); }
    if(e.getAttribute('class') == 'btn-pause') { pauseAudio(e); }
    if(e.getAttribute('class') == 'btn-stop') { stopAudio(e); }
    if(e.getAttribute('class') == 'btn-vol-down') { volumeDown(e); }
    if(e.getAttribute('class') == 'btn-vol-up') { volumeUp(e); }
 });


function createSimpleAudioplayer(player, mp3, ogg) {
    var audio = new Audio();
    audio.id = player;

    var _MP3 = mp3;
    var _OGG = ogg;

    if(_canOGG && (_OGG.length > 0)) {
        // seems like we have an OGG file and OGG support
        // will use OGG then, for its better compression
        audio.src = _OGG;
    } else {
        // fallback to MP3 which is universally supported
        audio.src = _MP3;
    }

    // initialize time and volume
    audio.addEventListener("loadeddata", function() {
        updateTime(this);
        updateVolume(this);
    });

    // update time regularly
    audio.addEventListener("timeupdate", function() { updateTime(this); });

    // finished playing? reset player
    audio.addEventListener("ended", function() { stopAudio(this); });

    return audio;
}

function playAudio(e) {
    var _id = e.parentElement.parentElement.getAttribute('id');
    var _player = SimpleAudioplayers.find(element => element.id == _id);
    SimpleAudioplayers.forEach(element => { pauseAudio(element); });
    _player.play();
    document.querySelectorAll('#' + _id + ' .btn-play')[0].style.display = 'none';
    document.querySelectorAll('#' + _id + ' .btn-pause')[0].style.display = 'inherit';
    updateTime(e);
}

function pauseAudio(e) { 
    if(e.tagName === "AUDIO") {
        var _id = e.id;
        var _player = e;
    } else {
        var _id = e.parentElement.parentElement.getAttribute('id');
        var _player = SimpleAudioplayers.find(element => element.id == _id);
    }
    _player.pause();
    document.querySelectorAll('#' + _id + ' .btn-pause')[0].style.display = 'none';
    document.querySelectorAll('#' + _id + ' .btn-play')[0].style.display = 'inherit';
    updateTime(e);
}

function stopAudio(e) { 
    var _id = e.parentElement.parentElement.getAttribute('id');
    var _player = SimpleAudioplayers.find(element => element.id == _id);
    _player.pause();
    _player.currentTime = 0;
    document.querySelectorAll('#' + _id + ' .btn-pause')[0].style.display = 'none';
    document.querySelectorAll('#' + _id + ' .btn-play')[0].style.display = 'inherit';
    updateTime(e);
}

function volumeDown(e) { 
    var _id = e.parentElement.parentElement.getAttribute('id');
    var _player = SimpleAudioplayers.find(element => element.id == _id);
    if(_player.volume >= 0) { 
        _player.volume -= 0.05;
        updateVolume(e);
    }
}

function volumeUp(e) { 
    var _id = e.parentElement.parentElement.getAttribute('id');
    var _player = SimpleAudioplayers.find(element => element.id == _id);
    if(_player.volume < 1) { 
        _player.volume += 0.05;
        updateVolume(e);
    }
}

function updateVolume(e) {
    if(e.tagName === "AUDIO") {
        var _id = e.id;
        var _player = e;
    } else {
        var _id = e.parentElement.parentElement.getAttribute('id');
        var _player = SimpleAudioplayers.find(element => element.id == _id);
    }
    var volume = (_player.volume*100).toFixed(0);
    document.querySelectorAll('#' + _id + ' .vol-value')[0].innerHTML = volume + "%";
}

function updateTime(e) {
    if(e.tagName === "AUDIO") {
        var _id = e.id;
        var _player = e;
    } else {
        var _id = e.parentElement.parentElement.getAttribute('id');
        var _player = SimpleAudioplayers.find(element => element.id == _id);
    }
    var _secs = Math.floor(_player.currentTime);
    var _dura = Math.floor(_player.duration);
    document.querySelectorAll('#' + _id + ' .time')[0].innerHTML = formatSeconds(_secs) + " / " + formatSeconds(_dura);
}

function formatSeconds(secs) {
    var h = String(Math.floor((secs/3600)));
    var m = String(Math.floor(((secs-(h*3600))/60)));
    var s = String((secs % 60));

    var _s = "";
    if(h > 0) { 
        h = h.padStart(2, "0");
        _s += h + ":";
    }
    m = m.padStart(2, "0");
    s = s.padStart(2, "0");

    _s += m + ":" + s;

    return _s;
}