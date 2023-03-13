# ipCheckerSan

IP確認さん

javascript でユーザーの IP を確認したい方はどうぞ

## 仕組み

https://ipinfo.io/?callback にアクセスして各種情報を取得したり少々の整形をしているだけです

<br>

## 使い方

```js
const ipChecker = new IpCheckerSan()
```

### ip()

IPアドレスを取得

```js
const ip = ipChecker.ip();
console.log(ip);
// 192.168.0.1
```

<br>

### hostname()

ホストネームを取得

```js
const hostname = ipChecker.hostname();
console.log(hostname);
// ap-northeast-1.compute.amazonaws.com
```

<br>


### city

都道府県を取得

```js
const city = ipChecker.city();
console.log(city);
// Tokyo
```

<br>

### region()

地域を取得

```js
const region = ipChecker.region();
console.log(region);
// Tokyo
```

<br>

### country()

国を取得

```js
const country = ipChecker.country();
console.log(country);
// JP
```

<br>

### location()

座標値をカンマ区切りで取得

```js
const location = ipChecker.location();
console.log(location);
// 34.7051,140.8647
```

<br>

### latitude()

緯度を取得


```js
const latitude = ipChecker.latitude();
console.log(latitude);
// 34.7051
```

<br>

### longitude()

経度を取得

```js
const longitude = ipChecker.longitude();
console.log(longitude);
// 140.8647
```

<br>

### organization()

組織情報を取得

```js
const organization = ipChecker.organization();
console.log(organization);
// Amazon.com, Inc
```

<br>

### postcode()

郵便番号を取得

```js
const postcode = ipChecker.postcode();
console.log(postcode);
// 000-0000
```

<br>

### timezone()

タイムゾーンを取得

```js
const timezone = ipChecker.timezone();
console.log(timezone);
// Asia/Tokyo
```

<br>

### all()

https://ipinfo.io/?callback のレスポンスを全て取得する

```js
const all = ipChecker.all();
console.log(all);
// {
//   "ip": "192.168.0.1",
//   "hostname": "ap-northeast-1.compute.amazonaws.com",
//   "city": "Tokyo",
//   "region": "Tokyo",
//   "country": "JP",
//   "loc": "34.7051,140.8647",
//   "org": "Amazon.com, Inc.",
//   "postal": "000-0000",
//   "timezone": "Asia/Tokyo",
//   "readme": "https://ipinfo.io/missingauth"
// }
```

