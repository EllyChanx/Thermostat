function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 35;
  this.MAX_TEMP_PSM = 25;
  this.isPowerSavingMode = true;
  this.LOW_USE_LIM = 18;
  this.MID_USE_LIM = 25;
}

Thermostat.prototype.currentTemp = function() {
  return this.temperature
};

Thermostat.prototype.down = function() {
  if (this.temperature == 10 ) {
    throw new Error('minimum temperature is 10 degree :(');
  }
  this.temperature --
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  return this.temperature + " degree"
};

Thermostat.prototype.currentMode = function() {
  return this.isPowerSavingMode
};

Thermostat.prototype.switchMode = function() {
  return (this.isPowerSavingMode = !(this.isPowerSavingMode))
};

Thermostat.prototype.up = function() {
  if (this.isPowerSavingMode === true && this.temperature >= 25){
    throw new Error ('error for PSM on');
  } else if (this.temperature >= 32) {
    throw new Error ('error for PSM off');
  } else {this.temperature ++};
};

Thermostat.prototype.currentUsage = function() {
  if (this.temperature < this.LOW_USE_LIM) {
    return 'low-usage'
  } else if (this.temperature < this.MID_USE_LIM) {
    return 'medium-usage'
  } else { return 'high-usage'}
};


