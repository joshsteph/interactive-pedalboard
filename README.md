# Interactive Pedalboard

<p align="center">
  <img width="500" height="400" src="https://github.com/joshsteph/interactive-pedalboard/blob/master/PedalsDemo/img/demo-screenshot.png">
</p>

I've always geeked out over guitar pedals and especially review videos of the latest gear. I wanted to explore another way to showcase gear online with a simple interactive pedalboard. So I rigged up my pedals, recorded a few things, took some pictures, and tried to figure out how to put it all together. I knew I wanted a loop to play while the user clicked through each pedal to hear how it is affected. 

This project uses [howler.js](https://github.com/goldfire/howler.js/) to handle the audio component requiring no outside dependencies other than a simple JavaScript file. 

## Recording the loops

First, mic'd an Orange Rocker 32 with a Shure SM57 into Logic Pro X and recorded a short guitar phrase. By a process called "reamping," I ran the audio out of the computer back into the pedals and again recorded the phrase through each pedal. After these were all trimmed to the same length, I exported each individually to eventually trigger from the control panel. 

## Playback

The following creates a Howler instance for each audio clip

```
var files = ['Clean', 'JHS_Muff', 'Drive', 'Reverb', 'Eventide', 'StoneDeaf', 'Delay', 'Tremolo'];
var howls = {};
for (var i=0; i<files.length; i++) {
    howls[files[i]] = new Howl({
        src: ['audio/'+ files[i] + '.mp3'],
        volume: 0.5,
        loop: true,
    });
};
```
Using the available howler [methods](https://github.com/goldfire/howler.js#methods), another simple function was created to keep the audio in sync so each selected effect pedal would start playing from the current position of the last pedal selected. 

```
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
```

## Visuals

Changes to the pedalboard image were accomplished via image masks in a free photo editing tool, [PhotoscapeX](http://x.photoscape.org/) 
