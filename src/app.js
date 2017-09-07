const Pizzicato = require('pizzicato');
const Pitch = require('./pitch.js');
const Volume = require('./volume.js');
const LowpassFilter = require('./lowpass.js')

window.onload = () => {

  var osc1 = new Pizzicato.Sound({ 
    source: 'wave',
    options: {
      type: 'sawtooth',
      volume: 0.1,
      frequency: 261.63,
      attack: 0.2,
          release: 0.2 // note C
        }
      });
  var reverb = new Pizzicato.Effects.Reverb({
    time: 1,
    decay: 0.8,
    reverse: true,
    mix: 0.5
  });
  osc1.addEffect(reverb);


  var osc2 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sawtooth',
      volume:0.1,
      frequency: 329.63 // note E
    }
  });

  var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 1000,
    peak: 10
  });
  osc1.addEffect(lowPassFilter);

  var reverb = new Pizzicato.Effects.Reverb({
    time: 1,
    decay: 0.8,
    reverse: true,
    mix: 0.5
  });
  osc2.addEffect(reverb);

  var pingPongDelay = new Pizzicato.Effects.PingPongDelay({
    feedback: 0.75,
    time: 0.6,
    mix: 0.5
  });

  osc2.addEffect(pingPongDelay);

  var osc3 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sawtooth',
     volume:0.1,
     frequency: 392.00 // note G
   }
 });


  var osc1Hash = {
    a: 130.81, // c
    w: 138.59, // c#
    s: 146.83, // d
    e: 155.56, // d#
    d: 164.81, // e
    f: 174.61, // f
    t: 185.00, // f#
    g: 196.00, // g
    y: 207.65, // g#
    h: 220.00, // a
    u: 233.08, // a#
    j: 246.94, // b 
    k: 261.63, // c
  }

  var osc2Hash = {
    a: 329.63, // e
    w: 349.23, // f
    s: 369.99, // f#
    e: 392.00, // g
    d: 415.30, // g#
    f: 440.00, // a
    t: 466.16, // a#
    g: 493.88, // b 
    y: 523.25, // c
    h: 554.37, // c#
    u: 587.33, // d
    j: 622.25, // d#
    k: 659.25, // e
  }

  var osc3Hash = {
    a: 392.00, // g
    w: 415.30, // g#
    s: 440.00, // a
    e: 466.16, // a#
    d: 493.88, // b 
    f: 523.25, // c
    t: 554.37, // c#
    g: 587.33, // d
    y: 622.25, // d#
    h: 659.25, // e
    u: 698.46, // f
    j: 739.99, // f#
    k: 783.99, // g
  }

  const volumeSlider = document.getElementById('volumeOsc1');
  const osc1Volume = new Volume(osc1, volumeSlider);

  const lowpassFilterSlider = document.getElementById("lowpassFilter")
  const osc1LowpassFilter = new LowpassFilter(osc1, lowpassFilterSlider);

  const pitchSliderOsc2 = document.getElementById('pitchOsc2');
  const pitchOsc2 = new Pitch(osc2, pitchSliderOsc2);
  const volumeSlider2 = document.getElementById('volumeOsc2');
  const osc2Volume = new Volume(osc2, volumeSlider2);

  const pitchSliderOsc3 = document.getElementById('pitchOsc3');
  const pitchOsc3 = new Pitch(osc3, pitchSliderOsc3);
  const volumeSlider3 = document.getElementById('volumeOsc3');
  const osc3Volume = new Volume(osc3, volumeSlider3);


  const body = document.getElementById('body');
  let currentSound = null;

  body.addEventListener('keydown', function(event) {


    if(osc1Hash[event.key] !== null && osc1Hash[event.key] !== undefined) {
      osc1.sourceNode.frequency.value = osc1Hash[event.key];
      // osc2.sourceNode.frequency.value = osc2Hash[event.key];
      // osc3.sourceNode.frequency.value = osc3Hash[event.key];

      osc1.play();
      osc2.play();
      osc3.play();

      console.log(osc2Hash)
    }
  })

  body.addEventListener('keyup', function(event) {

    osc1.stop();
    osc2.stop();
    osc3.stop();
  });


  body.addEventListener('keyup', function(event) {
    if(currentSound !== null) {
      currentSound.stop();
      currentSound = null;
    }
  });
}
