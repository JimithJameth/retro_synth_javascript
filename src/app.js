const Pizzicato = require('pizzicato');
const Pitch = require('./pitch.js');
const Volume = require('./volume.js')

window.onload = () => {

  var osc1 = new Pizzicato.Sound({ 
    source: 'wave',
    options: {
      type: 'sawtooth',
      volume: 0.1,
          frequency: 261.63 // note C
        }
      });

  var osc2 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'square',
      volume:0.1,
      frequency: 329.63 // note E
    }
  });

  var osc3 = new Pizzicato.Sound({
    source: 'wave',
    options: {
     type: 'sine',
     volume:0.1,
     frequency: 392.00 // note G
   }
 });

  var hash = {
    a: 261.63, // c
    s: 293.66, // d
    d: 329.63, // e
    f: 349.23, // f
    g: 392.00, // g
    h: 440.00, // a
    j: 493.88, // b 
    k: 523.25, // c
  }

  const pitchSlider = document.getElementById('pitchOsc1');
  // const pitchOsc1 = new Pitch(osc1, pitchSlider);
  const volumeSlider = document.getElementById('volumeOsc1');
  const osc1Volume = new Volume(osc1, volumeSlider);

  const pitchSliderOsc2 = document.getElementById('pitchOsc2');
  const pitchOsc2 = new Pitch(osc2, pitchSliderOsc2);
  const volumeSlider2 = document.getElementById('volumeOsc2');
  const osc2Volume = new Volume(osc2, volumeSlider2);

  const pitchSliderOsc3 = document.getElementById('pitchOsc3');
  const pitchOsc3 = new Pitch(osc3, pitchSliderOsc3);
  const volumeSlider3 = document.getElementById('volumeOsc3');
  const osc3Volume = new Volume(osc3, volumeSlider3);

  // sawtoothWave.play();  /stacked ocsilators work
  // squareWave.play();
  // sineWave.play();

  // const vol = document.getElementById('volume');
  // let volValue = 0.1;

  // vol.addEventListener('change', function(event) {
  //   volValue = parseFloat(event.target.value);

  //   sawtoothWave.volume = volValue;

  //   })


  const body = document.getElementById('body');
  let currentSound = null;

  body.addEventListener('keydown', function(event) {

    if(hash[event.key] !== null && hash[event.key] !== undefined) {
      osc1.sourceNode.frequency.value = hash[event.key];
      osc1.play();
      osc2.sourceNode.frequency.value = hash[event.key];
      osc2.play();
      osc3.sourceNode.frequency.value = hash[event.key];
      osc3.play();
    }

    // if(event.key === 'c') {
    //   osc1.sourceNode.frequency.value = hash[event.key];
    //  //  currentSound = new Pizzicato.Sound({ 
    //  //  source: 'wave',
    //  //    options: {
    //  //        type: 'sawtooth',
    //  //        volume: osc1Volume.volumeValue,
    //  //        frequency: 261
    //  //    }
    //  // });
    //      osc1.play();
    // }else if(event.key === 'e') {

    // }


     })

  body.addEventListener('keyup', function(event) {
    // if(currentSound !== null) {
    //   currentSound = null;
    // }

    osc1.stop();
    osc2.stop();
    osc3.stop();
  });

     body.addEventListener('keydown', function(event) {
         if(event.key === 's' && currentSound === null) {
           currentSound = new Pizzicato.Sound({ 
           source: 'wave',
             options: {
                 type: 'sawtooth',
                 volume: osc1Volume.volumeValue,
                 frequency: 293.66
             }
          });

      currentSound.play();
    }
  })

  body.addEventListener('keyup', function(event) {
      if(currentSound !== null) {
        currentSound.stop();
        currentSound = null;
      }
    });


  //    body.addEventListener('keydown', function(event) {
  //        if(event.key === 'd' && currentSound === null) {
  //          currentSound = new Pizzicato.Sound({ 
  //          source: 'wave',
  //            options: {
  //                type: 'sawtooth',
  //                volume: osc1Volume.volumeValue,
  //                frequency: 329.63
  //            }
  //         });

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
