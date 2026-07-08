// 課題3-2: 天気データをコンソールに出力する
function print(data) {
    console.log('都市名: ' + data.name);
    console.log('天気: ' + data.weather[0].description);
    console.log('最低気温: ' + data.main.temp_min);
    console.log('最高気温: ' + data.main.temp_max);
    console.log('湿度: ' + data.main.humidity);
    console.log('経度: ' + data.coord.lon);
    console.log('緯度: ' + data.coord.lat);
    console.log('風速: ' + data.wind.speed);
    console.log('風向: ' + data.wind.deg);
}

// 課題5-1: 天気データをページに表示する
function printDom(data) {
    let city = document.querySelector('#city-name');
    if (city === null) {
        return;
    }

    city.textContent = data.name;
    document.querySelector('#weather-desc').textContent = data.weather[0].description;
    document.querySelector('#temp-min').textContent = data.main.temp_min + '℃';
    document.querySelector('#temp-max').textContent = data.main.temp_max + '℃';
    document.querySelector('#humidity').textContent = data.main.humidity + '%';
    document.querySelector('#lon').textContent = data.coord.lon;
    document.querySelector('#lat').textContent = data.coord.lat;
    document.querySelector('#wind-speed').textContent = data.wind.speed + ' m/s';
    document.querySelector('#wind-deg').textContent = data.wind.deg + '°';
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let requestButton = document.querySelector('#sendRequest');
if (requestButton !== null) {
    requestButton.addEventListener('click', sendRequest);
}



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';
    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    print(data);
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

print(data);
printDom(data);
