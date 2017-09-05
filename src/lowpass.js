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