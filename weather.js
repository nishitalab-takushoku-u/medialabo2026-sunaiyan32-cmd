function print(data) {
  console.log("都市名:", data.name);
  console.log("天気:", data.weather[0].description);
  console.log("最低気温:", data.main.temp_min);
  console.log("最高気温:", data.main.temp_max);
  console.log("湿度:", data.main.humidity);
  console.log("経度:", data.coord.lon);
  console.log("緯度:", data.coord.lat);
  console.log("風速:", data.wind.speed);
  console.log("風向:", data.wind.deg);
}

function printDom(data) {
  let city = document.querySelector("#city-name");
  if (!city) {
    return;
  }

  city.textContent = data.name;
  document.querySelector("#weather-desc").textContent = data.weather[0].description;
  document.querySelector("#temp-min").textContent = data.main.temp_min + "℃";
  document.querySelector("#temp-max").textContent = data.main.temp_max + "℃";
  document.querySelector("#humidity").textContent = data.main.humidity + "%";
  document.querySelector("#lon").textContent = data.coord.lon;
  document.querySelector("#lat").textContent = data.coord.lat;
  document.querySelector("#wind-speed").textContent = data.wind.speed + " m/s";
  document.querySelector("#wind-deg").textContent = data.wind.deg + "°";
}

let data = {
  coord: {
    lon: 116.3972,
    lat: 39.9075
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "曇りがち",
      icon: "04d"
    }
  ],
  main: {
    temp_min: 9.94,
    temp_max: 9.94,
    humidity: 14
  },
  wind: {
    speed: 2.65,
    deg: 197
  },
  name: "北京市"
};

print(data);
printDom(data);
