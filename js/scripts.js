// console.log("Sanity Check")

// apiKey is loading inside of config.js

$(document).ready(()=>{
	$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
	$('#weather-form').submit((event)=>{
		event.preventDefault();
		// console.log("User submitted the form");
		var zipCode = $('#zip-code').val();
		// console.log(zipCode);
		var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`;
		// console.log(weatherUrl)
		// getJSON: 
		// 1. WHERE
		// 2. Function when back
		$.getJSON(weatherUrl,(weatherData)=>{
			// console.log(weatherData);
			var currTemp = weatherData.main.temp;
			var temps = {
				curr: weatherData.main.temp,
				max: weatherData.main.temp_max,
				min: weatherData.main.temp_min,
			}
			var wind = weatherData.wind.speed
			var windDeg = weatherData.wind.deg
			var name = weatherData.name;
			$("#name").html(`${name}`)
			var icon = weatherData.weather[0].icon;
			var newHTML = `<div><img src="http://openweathermap.org/img/w/${icon}.png"></div>`
			newHTML += `<div>The temp is currently ${currTemp}&deg;.`
			newHTML += `<div>The daily high is ${temps.max}&deg;.`
			newHTML += `<div>The daily low is ${temps.min}&deg;.`
			newHTML += `<div>The wind is ${wind} mph`;
			$('#temp-info').html(newHTML);

		});
	});
});
