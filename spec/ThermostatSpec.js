'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  it('starts at 20 degree', function(){
    expect(thermostat.currentTemp()).toEqual("20 degree")
  });

  it('can increase the temp', function(){
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual("21 degree")
  });

  it('can decrease the temp', function(){
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual("19 degree")
  });

  it('minimum temp is 10 degree - throw error at down', function(){
    for (var i = 0; i < 10; i++) {
      thermostat.down();}
    expect( function(){ thermostat.down(); }).toThrowError('minimum temperature is 10 degree :(')
   });

   // it('maximum temp is 32 degree - throw error at up', function(){
   //  for (var i = 0; i < 12; i++) {
   //    thermostat.up();}
   //  expect( function(){ thermostat.up(); }).toThrowError('maximum temperature is 32 degree :(')
   // });

  it('power saving mode on by default', function(){
    expect(thermostat.currentMode()).toEqual(true);
  });

  it('power saving mode can be switch', function(){
    expect(thermostat.switchMode()).toEqual(false);
  });

  it('can reset to 20 degree', function(){
    for (var i = 0; i < 3; i++) {
      thermostat.down();}
    expect(thermostat.reset()).toEqual("20 degree")
  });

  describe("when PSM is on", function(){
    it('maximum temp is 25 degree - throw error at up', function(){
      for (var i = 0; i < 5; i++) {
        thermostat.up();}
      expect( function(){ thermostat.up(); }).toThrowError('error for PSM on')
    });    
  });

  describe("when PSM is off", function(){
    it('maximum temp is 32 degree - throw error at up', function(){
      thermostat.switchMode();
      expect(thermostat.currentMode()).toEqual(false);
      for (var i = 0; i < 12; i++) {
        thermostat.up();};
      expect( function(){ thermostat.up(); }).toThrowError('error for PSM off')
    });  
  });

  describe("test energy usage", function(){

    it('indicate low energy usage when temp is below 17', function(){
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      };
      expect(thermostat.currentUsage()).toEqual('energy usage: low-usage');
    });

    it('indicate midium energy usage when temp is below 18', function(){
      for (var i = 0; i < 2; i++) {
        thermostat.down();
      };
      expect(thermostat.currentUsage()).toEqual('energy usage: midium-usage');
    });

    it('indicate midium energy usage when temp is 24', function(){
      for(var i = 0; i < 4; i++){
        thermostat.up();
      };
      expect(thermostat.currentUsage()).toEqual('energy usage: midium-usage');
    });

    it('indicate high energy usage when temp is 25', function(){
      for(var i = 0; i < 5; i++){
        thermostat.up();
      };
      expect(thermostat.currentUsage()).toEqual('energy usage: high-usage');
    });
  });

});
