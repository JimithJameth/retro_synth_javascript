/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Pizzicato = __webpack_require__(1);
const Pitch = __webpack_require__(4);
const Volume = __webpack_require__(5);
const LowpassFilter = __webpack_require__(6)

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e){"use strict";function t(e,t){this.options={},e=e||this.options;var i={frequency:350,peak:1};this.inputNode=this.filterNode=s.context.createBiquadFilter(),this.filterNode.type=t,this.outputNode=o.context.createGain(),this.filterNode.connect(this.outputNode);for(var n in i)this[n]=e[n],this[n]=void 0===this[n]||null===this[n]?i[n]:this[n]}function i(){var e,t,i=s.context.sampleRate*this.time,n=o.context.createBuffer(2,i,s.context.sampleRate),a=n.getChannelData(0),r=n.getChannelData(1);for(t=0;i>t;t++)e=this.reverse?i-t:t,a[t]=(2*Math.random()-1)*Math.pow(1-e/i,this.decay),r[t]=(2*Math.random()-1)*Math.pow(1-e/i,this.decay);this.reverbNode.buffer=n}function n(e){for(var t=s.context.sampleRate,i=new Float32Array(t),n=Math.PI/180,o=0;t>o;o++){var a=2*o/t-1;i[o]=(3+e)*a*20*n/(Math.PI+e*Math.abs(a))}return i}var o={},s=o,a="object"==typeof module&&module.exports,r="function"=="function"&&__webpack_require__(3);a?module.exports=o:r?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e.Pizzicato=e.Pz=o;var c=e.AudioContext||e.webkitAudioContext;if(!c)return void console.error("No AudioContext found in this environment. Please ensure your window or global object contains a working AudioContext constructor function.");o.context=new c;var h=o.context.createGain();h.connect(o.context.destination),o.Util={isString:function(e){return"[object String]"===toString.call(e)},isObject:function(e){return"[object Object]"===toString.call(e)},isFunction:function(e){return"[object Function]"===toString.call(e)},isNumber:function(e){return"[object Number]"===toString.call(e)&&e===+e},isArray:function(e){return"[object Array]"===toString.call(e)},isInRange:function(e,t,i){return s.Util.isNumber(e)&&s.Util.isNumber(t)&&s.Util.isNumber(i)?e>=t&&i>=e:!1},isBool:function(e){return"boolean"==typeof e},isOscillator:function(e){return e&&"[object OscillatorNode]"===e.toString()},isAudioBufferSourceNode:function(e){return e&&"[object AudioBufferSourceNode]"===e.toString()},isSound:function(e){return e instanceof s.Sound},isEffect:function(e){for(var t in o.Effects)if(e instanceof o.Effects[t])return!0;return!1},normalize:function(e,t,i){return s.Util.isNumber(e)&&s.Util.isNumber(t)&&s.Util.isNumber(i)?(i-t)*e/1+t:void 0},getDryLevel:function(e){return!s.Util.isNumber(e)||e>1||0>e?0:.5>=e?1:1-2*(e-.5)},getWetLevel:function(e){return!s.Util.isNumber(e)||e>1||0>e?0:e>=.5?1:1-2*(.5-e)}};var u=o.context.createGain(),d=Object.getPrototypeOf(Object.getPrototypeOf(u)),l=d.connect;d.connect=function(e){var t=s.Util.isEffect(e)?e.inputNode:e;return l.call(this,t),e},Object.defineProperty(o,"volume",{enumerable:!0,get:function(){return h.gain.value},set:function(e){s.Util.isInRange(e,0,1)&&h&&(h.gain.value=e)}}),Object.defineProperty(o,"masterGainNode",{enumerable:!1,get:function(){return h},set:function(e){console.error("Can't set the master gain node")}}),o.Events={on:function(e,t,i){if(e&&t){this._events=this._events||{};var n=this._events[e]||(this._events[e]=[]);n.push({callback:t,context:i||this,handler:this})}},trigger:function(e){if(e){var t,i,n,o;if(this._events=this._events||{},t=this._events[e]||(this._events[e]=[])){for(i=Math.max(0,arguments.length-1),n=[],o=0;i>o;o++)n[o]=arguments[o+1];for(o=0;o<t.length;o++)t[o].callback.apply(t[o].context,n)}}},off:function(e){e?this._events[e]=void 0:this._events={}}},o.Sound=function(e,t){function i(e){var t=["wave","file","input","script","sound"];if(e&&!d.isFunction(e)&&!d.isString(e)&&!d.isObject(e))return"Description type not supported. Initialize a sound using an object, a function or a string.";if(d.isObject(e)){if(!d.isString(e.source)||-1===t.indexOf(e.source))return"Specified source not supported. Sources can be wave, file, input or script";if(!("file"!==e.source||e.options&&e.options.path))return"A path is needed for sounds with a file source";if(!("script"!==e.source||e.options&&e.options.audioFunction))return"An audio function is needed for sounds with a script source"}}function n(e,t){e=e||{},this.getRawSourceNode=function(){var t=this.sourceNode?this.sourceNode.frequency.value:e.frequency,i=o.context.createOscillator();return i.type=e.type||"sine",i.frequency.value=t||440,i},this.sourceNode=this.getRawSourceNode(),this.sourceNode.gainSuccessor=s.context.createGain(),this.sourceNode.connect(this.sourceNode.gainSuccessor),d.isFunction(t)&&t()}function a(e,t){e=d.isArray(e)?e:[e];var i=new XMLHttpRequest;i.open("GET",e[0],!0),i.responseType="arraybuffer",i.onload=function(i){o.context.decodeAudioData(i.target.response,function(e){u.getRawSourceNode=function(){var t=o.context.createBufferSource();return t.loop=this.loop,t.buffer=e,t},d.isFunction(t)&&t()}.bind(u),function(i){return console.error("Error decoding audio file "+e[0]),e.length>1?(e.shift(),void a(e,t)):(i=i||new Error("Error decoding audio file "+e[0]),void(d.isFunction(t)&&t(i)))}.bind(u))},i.onreadystatechange=function(t){4===i.readyState&&200!==i.status&&console.error("Error while fetching "+e[0]+". "+i.statusText)},i.send()}function r(e,t){return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia?void navigator.getUserMedia({audio:!0},function(e){u.getRawSourceNode=function(){return o.context.createMediaStreamSource(e)},d.isFunction(t)&&t()}.bind(u),function(e){d.isFunction(t)&&t(e)}):void console.error("Your browser does not support getUserMedia")}function c(e,t){var i=d.isFunction(e)?e:e.audioFunction,n=d.isObject(e)&&e.bufferSize?e.bufferSize:null;if(!n)try{o.context.createScriptProcessor()}catch(s){n=2048}this.getRawSourceNode=function(){var e=o.context.createScriptProcessor(n,1,1);return e.onaudioprocess=i,e}}function h(e,t){this.getRawSourceNode=e.sound.getRawSourceNode,e.sound.sourceNode&&s.Util.isOscillator(e.sound.sourceNode)&&(this.sourceNode=this.getRawSourceNode(),this.frequency=e.sound.frequency)}var u=this,d=o.Util,l=i(e),f=d.isObject(e)&&d.isObject(e.options),p=.04,v=.04;if(l)throw console.error(l),new Error("Error initializing Pizzicato Sound: "+l);this.detached=f&&e.options.detached,this.masterVolume=o.context.createGain(),this.fadeNode=o.context.createGain(),this.fadeNode.gain.value=0,this.detached||this.masterVolume.connect(o.masterGainNode),this.lastTimePlayed=0,this.effects=[],this.effectConnectors=[],this.playing=this.paused=!1,this.loop=f&&e.options.loop,this.attack=f&&d.isNumber(e.options.attack)?e.options.attack:p,this.volume=f&&d.isNumber(e.options.volume)?e.options.volume:1,f&&d.isNumber(e.options.release)?this.release=e.options.release:f&&d.isNumber(e.options.sustain)?(console.warn("'sustain' is deprecated. Use 'release' instead."),this.release=e.options.sustain):this.release=v,e?d.isString(e)?a.bind(this)(e,t):d.isFunction(e)?c.bind(this)(e,t):"file"===e.source?a.bind(this)(e.options.path,t):"wave"===e.source?n.bind(this)(e.options,t):"input"===e.source?r.bind(this)(e,t):"script"===e.source?c.bind(this)(e.options,t):"sound"===e.source&&h.bind(this)(e.options,t):n.bind(this)({},t)},o.Sound.prototype=Object.create(o.Events,{play:{enumerable:!0,value:function(e,t){this.playing||(s.Util.isNumber(t)||(t=this.offsetTime||0),s.Util.isNumber(e)||(e=0),this.playing=!0,this.paused=!1,this.sourceNode=this.getSourceNode(),this.applyAttack(),s.Util.isFunction(this.sourceNode.start)&&(this.lastTimePlayed=o.context.currentTime-t,this.sourceNode.start(s.context.currentTime+e,t)),this.trigger("play"))}},stop:{enumerable:!0,value:function(){(this.paused||this.playing)&&(this.paused=this.playing=!1,this.stopWithRelease(),this.offsetTime=0,this.trigger("stop"))}},pause:{enumerable:!0,value:function(){if(!this.paused&&this.playing){this.paused=!0,this.playing=!1,this.stopWithRelease();var e=s.context.currentTime-this.lastTimePlayed;this.sourceNode.buffer?this.offsetTime=e%(this.sourceNode.buffer.length/s.context.sampleRate):this.offsetTime=e,this.trigger("pause")}}},clone:{enumerable:!0,value:function(){for(var e=new o.Sound({source:"sound",options:{loop:this.loop,attack:this.attack,release:this.release,volume:this.volume,sound:this}}),t=0;t<this.effects.length;t++)e.addEffect(this.effects[t]);return e}},onEnded:{enumerable:!0,value:function(e){return function(){this.sourceNode&&this.sourceNode!==e||(this.playing&&this.stop(),this.paused||this.trigger("end"))}}},addEffect:{enumerable:!0,value:function(e){if(!s.Util.isEffect(e))return console.error("The object provided is not a Pizzicato effect."),this;this.effects.push(e);var t=this.effectConnectors.length>0?this.effectConnectors[this.effectConnectors.length-1]:this.fadeNode;t.disconnect(),t.connect(e);var i=s.context.createGain();return this.effectConnectors.push(i),e.connect(i),i.connect(this.masterVolume),this}},removeEffect:{enumerable:!0,value:function(e){var t=this.effects.indexOf(e);if(-1===t)return console.warn("Cannot remove effect that is not applied to this sound."),this;var i=this.playing;i&&this.pause();var n=0===t?this.fadeNode:this.effectConnectors[t-1];n.disconnect();var o=this.effectConnectors[t];o.disconnect(),e.disconnect(o),this.effectConnectors.splice(t,1),this.effects.splice(t,1);var s;return s=t>this.effects.length-1||0===this.effects.length?this.masterVolume:this.effects[t],n.connect(s),i&&this.play(),this}},connect:{enumerable:!0,value:function(e){return this.masterVolume.connect(e),this}},disconnect:{enumerable:!0,value:function(e){return this.masterVolume.disconnect(e),this}},connectEffects:{enumerable:!0,value:function(){for(var e=[],t=0;t<this.effects.length;t++){var i=t===this.effects.length-1,n=i?this.masterVolume:this.effects[t+1].inputNode;e[t]=s.context.createGain(),this.effects[t].outputNode.disconnect(this.effectConnectors[t]),this.effects[t].outputNode.connect(n)}}},volume:{enumerable:!0,get:function(){return this.masterVolume?this.masterVolume.gain.value:void 0},set:function(e){s.Util.isInRange(e,0,1)&&this.masterVolume&&(this.masterVolume.gain.value=e)}},frequency:{enumerable:!0,get:function(){return this.sourceNode&&s.Util.isOscillator(this.sourceNode)?this.sourceNode.frequency.value:null},set:function(e){this.sourceNode&&s.Util.isOscillator(this.sourceNode)&&(this.sourceNode.frequency.value=e)}},sustain:{enumerable:!0,get:function(){return console.warn("'sustain' is deprecated. Use 'release' instead."),this.release},set:function(e){console.warn("'sustain' is deprecated. Use 'release' instead."),s.Util.isInRange(e,0,10)&&(this.release=e)}},getSourceNode:{enumerable:!0,value:function(){if(this.sourceNode){var e=this.sourceNode;e.gainSuccessor.gain.setValueAtTime(e.gainSuccessor.gain.value,s.context.currentTime),e.gainSuccessor.gain.linearRampToValueAtTime(1e-4,s.context.currentTime+.2),setTimeout(function(){e.disconnect(),e.gainSuccessor.disconnect()},200)}var t=this.getRawSourceNode();return t.gainSuccessor=s.context.createGain(),t.connect(t.gainSuccessor),t.gainSuccessor.connect(this.fadeNode),this.fadeNode.connect(this.getInputNode()),s.Util.isAudioBufferSourceNode(t)&&(t.onended=this.onEnded(t).bind(this)),t}},getInputNode:{enumerable:!0,value:function(){return this.effects.length>0?this.effects[0].inputNode:this.masterVolume}},applyAttack:{enumerable:!1,value:function(){var e=this.fadeNode.gain.value;if(this.fadeNode.gain.cancelScheduledValues(s.context.currentTime),this.fadeNode.gain.setValueAtTime(e,s.context.currentTime),!this.attack)return void this.fadeNode.gain.setValueAtTime(1,o.context.currentTime);var t=(1-this.fadeNode.gain.value)*this.attack;this.fadeNode.gain.setValueAtTime(this.fadeNode.gain.value,o.context.currentTime),this.fadeNode.gain.linearRampToValueAtTime(1,o.context.currentTime+t)}},stopWithRelease:{enumerable:!1,value:function(e){var t=this.sourceNode,i=function(){return s.Util.isFunction(t.stop)?t.stop(0):t.disconnect()},n=this.fadeNode.gain.value;if(this.fadeNode.gain.cancelScheduledValues(s.context.currentTime),this.fadeNode.gain.setValueAtTime(n,s.context.currentTime),!this.release)return void i();var a=this.fadeNode.gain.value*this.release;this.fadeNode.gain.setValueAtTime(this.fadeNode.gain.value,o.context.currentTime),this.fadeNode.gain.linearRampToValueAtTime(1e-5,o.context.currentTime+a),window.setTimeout(function(){i()},1e3*a)}}}),o.Group=function(e){e=e||[],this.mergeGainNode=s.context.createGain(),this.masterVolume=s.context.createGain(),this.sounds=[],this.effects=[],this.effectConnectors=[],this.mergeGainNode.connect(this.masterVolume),this.masterVolume.connect(s.masterGainNode);for(var t=0;t<e.length;t++)this.addSound(e[t])},o.Group.prototype=Object.create(s.Events,{connect:{enumerable:!0,value:function(e){return this.masterVolume.connect(e),this}},disconnect:{enumerable:!0,value:function(e){return this.masterVolume.disconnect(e),this}},addSound:{enumerable:!0,value:function(e){return s.Util.isSound(e)?this.sounds.indexOf(e)>-1?void console.warn("The Pizzicato.Sound object was already added to this group"):(e.detached&&console.warn("Groups do not support detached sounds. You can manually create an audio graph to group detached sounds together."),e.disconnect(s.masterGainNode),e.connect(this.mergeGainNode),void this.sounds.push(e)):void console.error("You can only add Pizzicato.Sound objects")}},removeSound:{enumerable:!0,value:function(e){var t=this.sounds.indexOf(e);return-1===t?void console.warn("Cannot remove a sound that is not part of this group."):(e.disconnect(this.mergeGainNode),e.connect(s.masterGainNode),void this.sounds.splice(t,1))}},volume:{enumerable:!0,get:function(){return this.masterVolume?this.masterVolume.gain.value:void 0},set:function(e){s.Util.isInRange(e,0,1)&&(this.masterVolume.gain.value=e)}},play:{enumerable:!0,value:function(){for(var e=0;e<this.sounds.length;e++)this.sounds[e].play();this.trigger("play")}},stop:{enumerable:!0,value:function(){for(var e=0;e<this.sounds.length;e++)this.sounds[e].stop();this.trigger("stop")}},pause:{enumerable:!0,value:function(){for(var e=0;e<this.sounds.length;e++)this.sounds[e].pause();this.trigger("pause")}},addEffect:{enumerable:!0,value:function(e){if(!s.Util.isEffect(e))return console.error("The object provided is not a Pizzicato effect."),this;this.effects.push(e);var t=this.effectConnectors.length>0?this.effectConnectors[this.effectConnectors.length-1]:this.mergeGainNode;t.disconnect(),t.connect(e);var i=s.context.createGain();return this.effectConnectors.push(i),e.connect(i),i.connect(this.masterVolume),this}},removeEffect:{enumerable:!0,value:function(e){var t=this.effects.indexOf(e);if(-1===t)return console.warn("Cannot remove effect that is not applied to this group."),this;var i=0===t?this.mergeGainNode:this.effectConnectors(t-1);i.disconnect();var n=this.effectConnectors[t];n.disconnect(),e.disconnect(n),this.effectConnectors.splice(t,1),this.effects.splice(t,1);var o;return o=t>this.effects.length-1||0===this.effects.length?this.masterVolume:this.effects[t],i.connect(o),this}}}),o.Effects={};var f=Object.create(null,{connect:{enumerable:!0,value:function(e){return this.outputNode.connect(e),this}},disconnect:{enumerable:!0,value:function(e){return this.outputNode.disconnect(e),this}}});o.Effects.Delay=function(e){this.options={},e=e||this.options;var t={feedback:.5,time:.3,mix:.5};this.inputNode=o.context.createGain(),this.outputNode=o.context.createGain(),this.dryGainNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.feedbackGainNode=o.context.createGain(),this.delayNode=o.context.createDelay(),this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode),this.delayNode.connect(this.feedbackGainNode),this.feedbackGainNode.connect(this.delayNode),this.inputNode.connect(this.delayNode),this.delayNode.connect(this.wetGainNode),this.wetGainNode.connect(this.outputNode);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.Delay.prototype=Object.create(f,{mix:{enumerable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}},time:{enumerable:!0,get:function(){return this.options.time},set:function(e){s.Util.isInRange(e,0,180)&&(this.options.time=e,this.delayNode.delayTime.value=e)}},feedback:{enumerable:!0,get:function(){return this.options.feedback},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.feedback=parseFloat(e,10),this.feedbackGainNode.gain.value=this.feedback)}}}),o.Effects.Compressor=function(e){this.options={},e=e||this.options;var t={threshold:-24,knee:30,attack:.003,release:.25,ratio:12};this.inputNode=this.compressorNode=o.context.createDynamicsCompressor(),this.outputNode=o.context.createGain(),this.compressorNode.connect(this.outputNode);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.Compressor.prototype=Object.create(f,{threshold:{enumerable:!0,get:function(){return this.compressorNode.threshold.value},set:function(e){o.Util.isInRange(e,-100,0)&&(this.compressorNode.threshold.value=e)}},knee:{enumerable:!0,get:function(){return this.compressorNode.knee.value},set:function(e){o.Util.isInRange(e,0,40)&&(this.compressorNode.knee.value=e)}},attack:{enumerable:!0,get:function(){return this.compressorNode.attack.value},set:function(e){o.Util.isInRange(e,0,1)&&(this.compressorNode.attack.value=e)}},release:{enumerable:!0,get:function(){return this.compressorNode.release.value},set:function(e){o.Util.isInRange(e,0,1)&&(this.compressorNode.release.value=e)}},ratio:{enumerable:!0,get:function(){return this.compressorNode.ratio.value},set:function(e){o.Util.isInRange(e,1,20)&&(this.compressorNode.ratio.value=e)}},getCurrentGainReduction:function(){return this.compressorNode.reduction}}),o.Effects.LowPassFilter=function(e){t.call(this,e,"lowpass")},o.Effects.HighPassFilter=function(e){t.call(this,e,"highpass")};var p=Object.create(f,{frequency:{enumerable:!0,get:function(){return this.filterNode.frequency.value},set:function(e){o.Util.isInRange(e,10,22050)&&(this.filterNode.frequency.value=e)}},peak:{enumerable:!0,get:function(){return this.filterNode.Q.value},set:function(e){o.Util.isInRange(e,1e-4,1e3)&&(this.filterNode.Q.value=e)}}});o.Effects.LowPassFilter.prototype=p,o.Effects.HighPassFilter.prototype=p,o.Effects.Distortion=function(e){this.options={},e=e||this.options;var t={gain:.5};this.waveShaperNode=o.context.createWaveShaper(),this.inputNode=this.outputNode=this.waveShaperNode;for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.Distortion.prototype=Object.create(f,{gain:{enumerable:!0,get:function(){return this.options.gain},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.gain=e,this.adjustGain())}},adjustGain:{writable:!1,configurable:!1,enumerable:!1,value:function(){for(var e,t=s.Util.isNumber(this.options.gain)?parseInt(100*this.options.gain,10):50,i=44100,n=new Float32Array(i),o=Math.PI/180,a=0;i>a;++a)e=2*a/i-1,n[a]=(3+t)*e*20*o/(Math.PI+t*Math.abs(e));this.waveShaperNode.curve=n}}}),o.Effects.Flanger=function(e){this.options={},e=e||this.options;var t={time:.45,speed:.2,depth:.1,feedback:.1,mix:.5};this.inputNode=o.context.createGain(),this.outputNode=o.context.createGain(),this.inputFeedbackNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.dryGainNode=o.context.createGain(),this.delayNode=o.context.createDelay(),this.oscillatorNode=o.context.createOscillator(),this.gainNode=o.context.createGain(),this.feedbackNode=o.context.createGain(),this.oscillatorNode.type="sine",this.inputNode.connect(this.inputFeedbackNode),this.inputNode.connect(this.dryGainNode),this.inputFeedbackNode.connect(this.delayNode),this.inputFeedbackNode.connect(this.wetGainNode),this.delayNode.connect(this.wetGainNode),this.delayNode.connect(this.feedbackNode),this.feedbackNode.connect(this.inputFeedbackNode),this.oscillatorNode.connect(this.gainNode),this.gainNode.connect(this.delayNode.delayTime),this.dryGainNode.connect(this.outputNode),this.wetGainNode.connect(this.outputNode),this.oscillatorNode.start(0);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.Flanger.prototype=Object.create(f,{time:{enumberable:!0,get:function(){return this.options.time},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.time=e,this.delayNode.delayTime.value=s.Util.normalize(e,.001,.02))}},speed:{enumberable:!0,get:function(){return this.options.speed},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.speed=e,this.oscillatorNode.frequency.value=s.Util.normalize(e,.5,5))}},depth:{enumberable:!0,get:function(){return this.options.depth},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.depth=e,this.gainNode.gain.value=s.Util.normalize(e,5e-4,.005))}},feedback:{enumberable:!0,get:function(){return this.options.feedback},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.feedback=e,this.feedbackNode.gain.value=s.Util.normalize(e,0,.8))}},mix:{enumberable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}}}),o.Effects.StereoPanner=function(e){this.options={},e=e||this.options;var t={pan:0};this.inputNode=o.context.createGain(),this.outputNode=o.context.createGain(),o.context.createStereoPanner?(this.pannerNode=o.context.createStereoPanner(),this.inputNode.connect(this.pannerNode),this.pannerNode.connect(this.outputNode)):this.inputNode.connect(this.outputNode);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.StereoPanner.prototype=Object.create(f,{pan:{enumerable:!0,get:function(){return this.options.pan},set:function(e){s.Util.isInRange(e,-1,1)&&(this.options.pan=e,this.pannerNode&&(this.pannerNode.pan.value=e))}}}),o.Effects.Convolver=function(e,t){this.options={},e=e||this.options;var i=this,n=new XMLHttpRequest,a={mix:.5};this.callback=t,this.inputNode=o.context.createGain(),this.convolverNode=o.context.createConvolver(),this.outputNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.dryGainNode=o.context.createGain(),this.inputNode.connect(this.convolverNode),this.convolverNode.connect(this.wetGainNode),this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode),this.wetGainNode.connect(this.outputNode);for(var r in a)this[r]=e[r],this[r]=void 0===this[r]||null===this[r]?a[r]:this[r];return e.impulse?(n.open("GET",e.impulse,!0),n.responseType="arraybuffer",n.onload=function(e){var t=e.target.response;o.context.decodeAudioData(t,function(e){i.convolverNode.buffer=e,i.callback&&s.Util.isFunction(i.callback)&&i.callback()},function(e){e=e||new Error("Error decoding impulse file"),i.callback&&s.Util.isFunction(i.callback)&&i.callback(e)})},n.onreadystatechange=function(t){4===n.readyState&&200!==n.status&&console.error("Error while fetching "+e.impulse+". "+n.statusText)},void n.send()):void console.error("No impulse file specified.")},o.Effects.Convolver.prototype=Object.create(f,{mix:{enumerable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}}}),o.Effects.PingPongDelay=function(e){this.options={},e=e||this.options;var t={feedback:.5,time:.3,mix:.5};this.inputNode=o.context.createGain(),this.outputNode=o.context.createGain(),this.delayNodeLeft=o.context.createDelay(),this.delayNodeRight=o.context.createDelay(),this.dryGainNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.feedbackGainNode=o.context.createGain(),this.channelMerger=o.context.createChannelMerger(2),this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode),this.delayNodeLeft.connect(this.channelMerger,0,0),this.delayNodeRight.connect(this.channelMerger,0,1),this.delayNodeLeft.connect(this.delayNodeRight),this.feedbackGainNode.connect(this.delayNodeLeft),this.delayNodeRight.connect(this.feedbackGainNode),this.inputNode.connect(this.feedbackGainNode),this.channelMerger.connect(this.wetGainNode),this.wetGainNode.connect(this.outputNode);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.PingPongDelay.prototype=Object.create(f,{mix:{enumerable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}},time:{enumerable:!0,get:function(){return this.options.time},set:function(e){s.Util.isInRange(e,0,180)&&(this.options.time=e,this.delayNodeLeft.delayTime.value=e,this.delayNodeRight.delayTime.value=e)}},feedback:{enumerable:!0,get:function(){return this.options.feedback},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.feedback=parseFloat(e,10),this.feedbackGainNode.gain.value=this.feedback)}}}),o.Effects.Reverb=function(e){this.options={},e=e||this.options;var t={mix:.5,time:.01,decay:.01,reverse:!1};this.inputNode=o.context.createGain(),this.reverbNode=o.context.createConvolver(),this.outputNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.dryGainNode=o.context.createGain(),this.inputNode.connect(this.reverbNode),this.reverbNode.connect(this.wetGainNode),this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode),this.wetGainNode.connect(this.outputNode);for(var n in t)this[n]=e[n],this[n]=void 0===this[n]||null===this[n]?t[n]:this[n];i.bind(this)()},o.Effects.Reverb.prototype=Object.create(f,{mix:{enumerable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}},time:{enumerable:!0,get:function(){return this.options.time},set:function(e){s.Util.isInRange(e,1e-4,10)&&(this.options.time=e,i.bind(this)())}},decay:{enumerable:!0,get:function(){return this.options.decay},set:function(e){s.Util.isInRange(e,1e-4,10)&&(this.options.decay=e,i.bind(this)())}},reverse:{enumerable:!0,get:function(){return this.options.reverse},set:function(e){s.Util.isBool(e)&&(this.options.reverse=e,i.bind(this)())}}}),o.Effects.Tremolo=function(e){this.options={},e=e||this.options;var t={speed:4,depth:1,mix:.8};this.inputNode=o.context.createGain(),this.outputNode=o.context.createGain(),this.dryGainNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.tremoloGainNode=o.context.createGain(),this.tremoloGainNode.gain.value=0,this.lfoNode=o.context.createOscillator(),this.shaperNode=o.context.createWaveShaper(),this.shaperNode.curve=new Float32Array([0,1]),this.shaperNode.connect(this.tremoloGainNode.gain),this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode),this.lfoNode.connect(this.shaperNode),this.lfoNode.type="sine",this.lfoNode.start(0),this.inputNode.connect(this.tremoloGainNode),this.tremoloGainNode.connect(this.wetGainNode),this.wetGainNode.connect(this.outputNode);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.Tremolo.prototype=Object.create(f,{mix:{enumerable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}},speed:{enumerable:!0,get:function(){return this.options.speed},set:function(e){s.Util.isInRange(e,0,20)&&(this.options.speed=e,this.lfoNode.frequency.value=e)}},depth:{enumerable:!0,get:function(){return this.options.depth},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.depth=e,this.shaperNode.curve=new Float32Array([1-e,1]))}}}),o.Effects.DubDelay=function(e){this.options={},e=e||this.options;var t={feedback:.6,time:.7,mix:.5,cutoff:700};this.inputNode=o.context.createGain(),this.outputNode=o.context.createGain(),this.dryGainNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.feedbackGainNode=o.context.createGain(),this.delayNode=o.context.createDelay(),this.bqFilterNode=o.context.createBiquadFilter(),this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode),this.inputNode.connect(this.wetGainNode),this.inputNode.connect(this.feedbackGainNode),this.feedbackGainNode.connect(this.bqFilterNode),this.bqFilterNode.connect(this.delayNode),this.delayNode.connect(this.feedbackGainNode),this.delayNode.connect(this.wetGainNode),this.wetGainNode.connect(this.outputNode);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]},o.Effects.DubDelay.prototype=Object.create(f,{mix:{enumerable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}},time:{enumerable:!0,get:function(){return this.options.time},set:function(e){s.Util.isInRange(e,0,180)&&(this.options.time=e,this.delayNode.delayTime.value=e)}},feedback:{enumerable:!0,get:function(){return this.options.feedback},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.feedback=parseFloat(e,10),this.feedbackGainNode.gain.value=this.feedback)}},cutoff:{enumerable:!0,get:function(){return this.options.cutoff},set:function(e){s.Util.isInRange(e,0,4e3)&&(this.options.cutoff=e,this.bqFilterNode.frequency.value=this.cutoff)}}}),o.Effects.RingModulator=function(e){this.options={},e=e||this.options;var t={speed:30,distortion:1,mix:.5};this.inputNode=o.context.createGain(),this.outputNode=o.context.createGain(),this.dryGainNode=o.context.createGain(),this.wetGainNode=o.context.createGain(),this.vIn=o.context.createOscillator(),this.vIn.start(0),this.vInGain=o.context.createGain(),this.vInGain.gain.value=.5,this.vInInverter1=o.context.createGain(),this.vInInverter1.gain.value=-1,this.vInInverter2=o.context.createGain(),this.vInInverter2.gain.value=-1,this.vInDiode1=new v(o.context),this.vInDiode2=new v(o.context),this.vInInverter3=o.context.createGain(),this.vInInverter3.gain.value=-1,this.vcInverter1=o.context.createGain(),this.vcInverter1.gain.value=-1,this.vcDiode3=new v(o.context),this.vcDiode4=new v(o.context),this.outGain=o.context.createGain(),this.outGain.gain.value=3,this.compressor=o.context.createDynamicsCompressor(),this.compressor.threshold.value=-24,this.compressor.ratio.value=16,this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode),this.inputNode.connect(this.vcInverter1),this.inputNode.connect(this.vcDiode4.node),this.vcInverter1.connect(this.vcDiode3.node),this.vIn.connect(this.vInGain),this.vInGain.connect(this.vInInverter1),this.vInGain.connect(this.vcInverter1),this.vInGain.connect(this.vcDiode4.node),this.vInInverter1.connect(this.vInInverter2),this.vInInverter1.connect(this.vInDiode2.node),this.vInInverter2.connect(this.vInDiode1.node),this.vInDiode1.connect(this.vInInverter3),this.vInDiode2.connect(this.vInInverter3),this.vInInverter3.connect(this.compressor),this.vcDiode3.connect(this.compressor),this.vcDiode4.connect(this.compressor),this.compressor.connect(this.outGain),this.outGain.connect(this.wetGainNode),this.wetGainNode.connect(this.outputNode);for(var i in t)this[i]=e[i],this[i]=void 0===this[i]||null===this[i]?t[i]:this[i]};var v=function(e){this.context=e,this.node=this.context.createWaveShaper(),this.vb=.2,this.vl=.4,this.h=1,this.setCurve()};return v.prototype.setDistortion=function(e){return this.h=e,this.setCurve()},v.prototype.setCurve=function(){var e,t,i,n,o,s,a,r;for(t=1024,o=new Float32Array(t),e=s=0,a=o.length;a>=0?a>s:s>a;e=a>=0?++s:--s)i=(e-t/2)/(t/2),i=Math.abs(i),n=i<=this.vb?0:this.vb<i&&i<=this.vl?this.h*(Math.pow(i-this.vb,2)/(2*this.vl-2*this.vb)):this.h*i-this.h*this.vl+this.h*(Math.pow(this.vl-this.vb,2)/(2*this.vl-2*this.vb)),o[e]=n;return r=this.node.curve=o},v.prototype.connect=function(e){
return this.node.connect(e)},o.Effects.RingModulator.prototype=Object.create(f,{mix:{enumerable:!0,get:function(){return this.options.mix},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.mix=e,this.dryGainNode.gain.value=o.Util.getDryLevel(this.mix),this.wetGainNode.gain.value=o.Util.getWetLevel(this.mix))}},speed:{enumerable:!0,get:function(){return this.options.speed},set:function(e){s.Util.isInRange(e,0,2e3)&&(this.options.speed=e,this.vIn.frequency.value=e)}},distortion:{enumerable:!0,get:function(){return this.options.distortion},set:function(e){if(s.Util.isInRange(e,.2,50)){this.options.distortion=parseFloat(e,10);for(var t=[this.vInDiode1,this.vInDiode2,this.vcDiode3,this.vcDiode4],i=0,n=t.length;n>i;i++)t[i].setDistortion(e)}}}}),o.Effects.Quadrafuzz=function(e){this.options={},e=e||this.options;var t={lowGain:.6,midLowGain:.8,midHighGain:.5,highGain:.6};this.inputNode=s.context.createGain(),this.outputNode=s.context.createGain(),this.dryGainNode=s.context.createGain(),this.wetGainNode=s.context.createGain(),this.lowpassLeft=s.context.createBiquadFilter(),this.lowpassLeft.type="lowpass",this.lowpassLeft.frequency.value=147,this.lowpassLeft.Q.value=.7071,this.bandpass1Left=s.context.createBiquadFilter(),this.bandpass1Left.type="bandpass",this.bandpass1Left.frequency.value=587,this.bandpass1Left.Q.value=.7071,this.bandpass2Left=s.context.createBiquadFilter(),this.bandpass2Left.type="bandpass",this.bandpass2Left.frequency.value=2490,this.bandpass2Left.Q.value=.7071,this.highpassLeft=s.context.createBiquadFilter(),this.highpassLeft.type="highpass",this.highpassLeft.frequency.value=4980,this.highpassLeft.Q.value=.7071,this.overdrives=[];for(var i=0;4>i;i++)this.overdrives[i]=s.context.createWaveShaper(),this.overdrives[i].curve=n();this.inputNode.connect(this.wetGainNode),this.inputNode.connect(this.dryGainNode),this.dryGainNode.connect(this.outputNode);var o=[this.lowpassLeft,this.bandpass1Left,this.bandpass2Left,this.highpassLeft];for(i=0;i<o.length;i++)this.wetGainNode.connect(o[i]),o[i].connect(this.overdrives[i]),this.overdrives[i].connect(this.outputNode);for(var a in t)this[a]=e[a],this[a]=void 0===this[a]||null===this[a]?t[a]:this[a]},o.Effects.Quadrafuzz.prototype=Object.create(f,{lowGain:{enumerable:!0,get:function(){return this.options.lowGain},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.lowGain=e,this.overdrives[0].curve=n(s.Util.normalize(this.lowGain,0,150)))}},midLowGain:{enumerable:!0,get:function(){return this.options.midLowGain},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.midLowGain=e,this.overdrives[1].curve=n(s.Util.normalize(this.midLowGain,0,150)))}},midHighGain:{enumerable:!0,get:function(){return this.options.midHighGain},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.midHighGain=e,this.overdrives[2].curve=n(s.Util.normalize(this.midHighGain,0,150)))}},highGain:{enumerable:!0,get:function(){return this.options.highGain},set:function(e){s.Util.isInRange(e,0,1)&&(this.options.highGain=e,this.overdrives[3].curve=n(s.Util.normalize(this.highGain,0,150)))}}}),o}("undefined"!=typeof window?window:global);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const Pitch = function(sound, element) {
  this.pitchValue = 50;
  this.sound = sound;
  element.addEventListener('change', this.watchSlider.bind(this) )
}

Pitch.prototype.watchSlider = function(event) {
  this.pitchValue = parseFloat(event.target.value);
  this.sound.sourceNode.frequency.value = this.pitchValue;
}

module.exports = Pitch;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

const Volume = function(sound,element) {
  this.volumeValue = 0.1;
  this.sound = sound;
    element.addEventListener('change', this.watchVolSlider.bind(this) )
}

Volume.prototype.watchVolSlider = function(event){
  this.volumeValue = parseFloat(event.target.value);
  this.sound.volume = this.volumeValue;
}

module.exports = Volume;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

const LowpassFilter = function(sound, element) {
  this.lowpassFilterValue = 250;
  this.sound = sound;
  element.addEventListener('change', this.watchFilterSlider.bind(this) )
}
console.log(this);

LowpassFilter.prototype.watchFilterSlider = function(event) {
  this.lowPassFilterValue = parseFloat(event.target.value);
  this.sound.filterNode.frequency.value = this.lowpassFilterValue;
}

module.exports = LowpassFilter;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map