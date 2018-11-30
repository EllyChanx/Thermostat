$(document).ready(function() {

  var thermostat = new Thermostat();
  
  updateTemp();

  $('.left-arrow').on('click', function () {
    thermostat.down();
    updateTemp();
  })

  $('.right-arrow').on('click', function () {
    thermostat.up();
    updateTemp();
  })

  $('.reset_button').on('click', function () {
    thermostat.reset();
    updateTemp();
  })

  var PSM_on = 'url(./materials/PSM_on_double.png)';
  var PSM_off = 'url(./materials/PSM_off_double.png)';

  $('.PSM_button').click(function(){
    thermostat.switchMode();
    $('.PSM_button').toggleClass('PSM_off');

  })


  $('.usage').hover(function() {
    $('#panel').slideToggle("slow").text(thermostat.currentUsage()).attr('class', thermostat.currentUsage());
  })

  // function updateUsage(){
  //   $('.usage').attr('class', thermostat.currentUsage());
  // }
  // this function make the usage go to middel because the 3 color classes are under html, which has center align

  displayWeather(2643743);

  $('.city_id').change(function(){
    var city = $('.city_id').val();
    displayWeather(city);
  })

  function displayWeather(city_id){
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + city_id;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#out_temp').text(data.main.temp);
      // https://openweathermap.org/current#data for api
    })
  }

  function updateTemp() {
    $('.cur_temp').text(thermostat.temperature);
    // $('#thermostat').attr('class', thermostat.currentUsage());
  }

})