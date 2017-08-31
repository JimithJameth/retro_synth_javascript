const Pizzicato = require('pizzicato');
const Pitch = require('./pitch.js');
const Volume = require('./volume.js')

window.onload = () => {

  var sawtoothWave = new Pizzicato.Sound({ 
    source: 'wave',
    options: {
      type: 'sawtooth',
      volume: 0.1,
          frequency: 261.63 // note C
        }
      });

  var squareWave = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'square',
      volume:0.1,
      frequency: 329.63 // note E
    }
  });

  var sineWave = new Pizzicato.Sound({
    source: 'wave',
    options: {
     type: 'sine',
     volume:0.1,
     frequency: 392.00 // note G
   }
 });

  const pitchSlider = document.getElementById('pitchOsc1');
  const pitchOsc1 = new Pitch(sawtoothWave, pitchSlider);
  const vol = document.getElementById('volumeOsc1');
    let volumeValue = 0.1;

  const pitchSliderOsc2 = document.getElementById('pitchOsc2');
  const pitchOsc2 = new Pitch(squareWave, pitchSliderOsc2);

  const pitchSliderOsc3 = document.getElementById('pitchOsc3');
  const pitchOsc3 = new Pitch(sineWave, pitchSliderOsc3);

  sawtoothWave.play();  
  squareWave.play();
  sineWave.play();

  // const vol = document.getElementById('volume');
  // let volValue = 0.1;

  // vol.addEventListener('change', function(event) {
  //   volValue = parseFloat(event.target.value);

  //   sawtoothWave.volume = volValue;

  //   })


  // const body = document.getElementById('body');
  // let currentSound = null;

  // body.addEventListener('keydown', function(event) {
  //   if(event.key === 'c' && currentSound === null) {
  //     currentSound = new Pizzicato.Sound({ 
  //     source: 'wave',
  //       options: {
  //           type: 'sawtooth',
  //           volume: volValue,
  //           frequency: 261
  //       }
  //    });

  //     currentSound.play();
  //   }
  // })

  // body.addEventListener('keyup', function(event) {
  //     if(currentSound !== null) {
  //       currentSound.stop();
  //       currentSound = null;
  //     }
  //   });
}
