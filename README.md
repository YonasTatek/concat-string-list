# concat-string-array
Concat string found in array or list

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i concat-string-array --save
```


## Usage

```js
var concat-string-array = require('concat-string-array');

concat-string-array()(10,"SSh",90,[10,10],[[4.4,["FF"]]]);
//=> 10SSh9010104.4FF
```

(optional) If you pass parameter add then it will be added in between those value:

```js
console.log(concat-string-array({add:"hi"})(10,"SSh",90,[10,10],[[4.4,["FF"]]]))
//=> 10hiSShhi90hi10hi10hi4.4hiFF
```

(optional) If you pass parameter only_string with value true then it will concat only string :

```js
concat-string-array({add:"hi",only_string:true})(10,"SSh",90,[10,10],[[4.4,["FF"]]])
//=> SShhiFF
```


(optional) If you pass parameter only_number with value true then it will add number found :

```js
concat-string-array({add:"hi",only_number:true})(10,"SSh",90,[10,10],[[4.4,["FF"]]])
//=> 124.4
```
