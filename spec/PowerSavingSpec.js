'use strict';

describe("PowerSaving", function() {

  var powersavingmode;

  beforeEach(function(){
    powersavingmode = new PowerSaving;
  });
  
  it('powersavingmode is true by default', function(){
    expect(powersavingmode.currentMode()).toEqual(true)
  });

});