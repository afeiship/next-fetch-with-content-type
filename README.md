# weibo2res
> Get weibo response.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/weibo2res
```

## usage
```js
import weibo2res from '@jswork/weibo2res';
const res = weibo2res(...);
/*
// success
{
  code: 'A00006',
  format: 'jpg',
  width: 1504,
  size: 161645,
  ret: 1,
  height: 400,
  name: 'pic_1',
  pid: 'da432263gy1hbzptofvp4j215s0b4tct',
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/weibo2res/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/weibo2res
[version-url]: https://npmjs.org/package/@jswork/weibo2res

[license-image]: https://img.shields.io/npm/l/@jswork/weibo2res
[license-url]: https://github.com/afeiship/weibo2res/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/weibo2res
[size-url]: https://github.com/afeiship/weibo2res/blob/master/dist/weibo2res.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/weibo2res
[download-url]: https://www.npmjs.com/package/@jswork/weibo2res
