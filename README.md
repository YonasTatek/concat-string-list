# concat-string-list
Concat string found in array or list

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i concat-string-list --save
```


## Usage

```js
var add-concat-string-list = require('concat-string-list');

concat_string_list()(10,"SSh",90,[10,10],[[4.4,["FF"]]]);
//=> 10SSh9010104.4FF
```

If you pass parameter add then it will be added in between those value(optional) :

```js
console.log(concat_string_list({add:"hi"})(10,"SSh",90,[10,10],[[4.4,["FF"]]]))
//=> 10hiSShhi90hi10hi10hi4.4hiFF
```

If you pass parameter only_string with value true then it will concat only string :

```js
concat_string_list({add:"hi",only_string:true})(10,"SSh",90,[10,10],[[4.4,["FF"]]])
//=> SShhiFF
```


If you pass parameter only_number with value true then it will add number found :

```js
concat_string_list({add:"hi",only_number:true})(10,"SSh",90,[10,10],[[4.4,["FF"]]])
//=> 124.4
```
