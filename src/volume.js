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