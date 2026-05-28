
// 課題3-2 のプログラムはこの関数の中に記述すること
//  function print(data) {
//   data["coord"]["lon"];
//   data["coord"]["lat"];
//   data["weather"]["description"];
//   data["main"]["temp_min"];
//   data["main"]["temp_max"];
//   data["main"]["humidity"]
//   data["wind"]["speed"];
//   data["wind"]["deg"];
//   data["name"];
//   console.log("緯度:",data["coord"]["lon"]);
//   console.log("経度:",data["coord"]["lat"]);
//   console.log("天気:",data["weather"][0]["description"]);
//   console.log("最低気温:",data["main"]["temp_min"]);
//   console.log("最高気温:",data["main"]["temp_max"]); 
//   console.log("湿度:",data["main"]["humidity"]);
//   console.log("風速:",data["wind"]["speed"]);
//   console.log("風向:",data["wind"]["deg"]);
//   console.log("都市名:",data["name"]); 
//   console.log(world);
//  }
let b = document.querySelector('button#sendRequest');
b.addEventListener('click',sendRequest);
// 課題5-1 の関数 printDom() はここに記述すること
let count = 0;
function printDom(data) {
  let q = document.querySelector('div#result');
  if(count !== 0){
    q.remove();
  }
  count = count + 1;
  let r = document.querySelector("body");
  let result = document.createElement("div");
  result.setAttribute('id', 'result');   
  let x = document.createElement('ul');
  result.insertAdjacentElement('beforeend', x);
  r.insertAdjacentElement('beforeend', result)
  let a = document.createElement('li');
  a.textContent = '緯度'+"　"+data["coord"]["lon"];
  x.insertAdjacentElement('beforeend', a);
  let c = document.createElement('li');
  c.textContent = '経度'+"　"+data["coord"]["lat"];
  x.insertAdjacentElement('beforeend', c);
  let d = document.createElement('li');
  d.textContent = '天気'+"　"+data["weather"][0]["description"];
  x.insertAdjacentElement('beforeend', d);
  let e = document.createElement('li');
  e.textContent = '最低気温'+"　"+data["main"]["temp_min"];
  x.insertAdjacentElement('beforeend', e);
  let f = document.createElement('li');
  f.textContent = '最高気温'+"　"+data["main"]["temp_max"];
  x.insertAdjacentElement('beforeend', f);
  let g = document.createElement('li');
  g.textContent = '湿度'+"　"+data["main"]["humidity"];
  x.insertAdjacentElement('beforeend', g);
  let h = document.createElement('li');
  h.textContent = '風速'+"　"+data["wind"]["speed"];
  x.insertAdjacentElement('beforeend', h);
  let i = document.createElement('li');
  i.textContent = '風向'+"　"+data["wind"]["deg"];
  x.insertAdjacentElement('beforeend', i);
  let j = document.createElement('li');
  j.textContent = '都市名'+"　"+data["name"];
  x.insertAdjacentElement('beforeend', j);
}
 
// 課題6-1 のイベントハンドラ登録処理は以下に記述
// b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
let s = document.querySelector('select#city');
let idx = s.selectedIndex;  
let os = s.querySelectorAll('option');  
let o = os.item(idx); 
let country = o.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+country+'.json';
  console.log(url);
  axios.get(url)
       .then(showResult)
       .catch(showError)
       .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if(typeof data === 'string'){
    data = JSON.parse(data);
  }
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
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

