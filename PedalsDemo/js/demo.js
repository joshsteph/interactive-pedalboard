
// Create Howl instances for each sound file 
var files = ['Clean', 'JHS_Muff', 'Drive', 'Reverb', 'Eventide', 'StoneDeaf', 'Delay', 'Tremolo'];
var howls = {};
for (var i=0; i<files.length; i++) {
    howls[files[i]] = new Howl({
        src: ['audio/'+ files[i] + '.mp3'],
        volume: 0.5,
        loop: true,
    });
};

// Check each Howl, if playing, save current time to start next sound from when changed. New sound starts at 0 otherwise. 
function clearPlaying() {
  for (var x=0; x<files.length; x++) {
      if (howls[files[x]].playing()) {
        time = howls[files[x]].seek();
        howls[files[x]].stop();
        return time;
      }
      else {
        time = 0;
      };
  };
return time
};

function mainPlay() {
    howls[files[0]].play();
  };


function showPause() {
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";
};

function showPlay() {
  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
};

function playClean() {
  howls[files[0]].play();
};

document.getElementById('play').onclick= function(){
  showPause();
  mainPlay();
  showPedal('pedals1');
  showDesc('clean-desc');
};

document.getElementById('pause').onclick= function(){
  showPlay();
  clearPlaying();
  showPedal('pedals1');
  showDesc('clean-desc');
};

document.getElementById('cleanbtn').onclick= function(){
  clearPlaying();
  showPause();
  howls[files[0]].seek(time);
  howls[files[0]].play();
  showPedal('pedals1');
  showDesc('clean-desc');
};

document.getElementById('jhsbtn').onclick= function(){ 
  clearPlaying();
  howls[files[1]].seek(time);
  howls[files[1]].play();
  showPause();
  showPedal('jhs');
  showDesc('jhs-desc');
};

document.getElementById('drivebtn').onclick= function(){
  clearPlaying();
  howls[files[2]].seek(time);
  howls[files[2]].play();
  showPause();
  showPedal('drive');
  showDesc('drive-desc');
};

document.getElementById('reverbbtn').onclick= function(){
  clearPlaying();
  howls[files[3]].seek(time);
  howls[files[3]].play();
  showPause();
  showPedal('reverb');
  showDesc('reverb-desc');
};

document.getElementById('eventidebtn').onclick= function(){
  clearPlaying();
  howls[files[4]].seek(time);
  howls[files[4]].play();
  showPause();
  showPedal('eventide');
  showDesc('eventide-desc');
};

document.getElementById('stonedeafbtn').onclick= function(){
  clearPlaying();
  howls[files[5]].seek(time);
  howls[files[5]].play();
  showPause();
  showPedal('stonedeaf');
  showDesc('stonedeaf-desc');
};

document.getElementById('delaybtn').onclick= function(){
  clearPlaying();
  howls[files[6]].seek(time);
  howls[files[6]].play();
  showPause();
  showPedal('delay');
  showDesc('delay-desc');
};

document.getElementById('tremolobtn').onclick= function(){
  clearPlaying();
  howls[files[7]].seek(time);
  howls[files[7]].play();
  showPause();
  showPedal('tremolo');
  showDesc('tremolo-desc');
};


var pedals = ['delay','drive','jhs','reverb','stonedeaf','tremolo','eventide','pedals1'];
var visiblePedal = null;

function showPedal(pedalId) {
  visiblePedal = pedalId;
  for (i = 0; i < pedals.length; i++) {
    pedalId = pedals[i];
    pedal = document.getElementById(pedalId);
    if (visiblePedal === pedalId) {
      pedal.style.display = "block";
    }
    else {
      pedal.style.display = "none";
    }
  } 
};

var desc = ['delay-desc','drive-desc','jhs-desc','reverb-desc','stonedeaf-desc','tremolo-desc','eventide-desc','clean-desc'];
var visibleDesc = null;

function showDesc(descId) {
  visibleDesc = descId;
  for (i = 0; i < desc.length; i++) {
    descId = desc[i];
    description = document.getElementById(descId);
    if (visibleDesc === descId) {
      description.style.display = "block";
    }
    else {
      description.style.display = "none";
    }
  } 
};
