const apiKey = '';


const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

let local_name, lat, lon = null;

const getLocation = async (cityName, countryName, limit=1) => {
  const response = await fetch(`http://api.openweathermap.org//geo/1.0/direct?q=${cityName},${countryName}&limit=${limit}&appid=${apiKey}`, requestOptions)
  const data = await response.json();
  console.log(data);

  if (data.length > 0) {
    local_name = data[0].name;
    lat = data[0].lat;
    lon = data[0].lon;
    getWeather(lat, lon);
  } else {
    console.log('No data found');
  }

};


const getWeather = async (lat, lon) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${apiKey}`, requestOptions)
  const data = await response.json();
  console.log(data);
};


getLocation('Antalya', 'Turkey')