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