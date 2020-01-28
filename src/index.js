const hello = require('./hello');
const world = require('./world');
import a from 'lib/say'
import(
  /*
  webpackChunkName: 'layzz-name'
  */
  './layzz'
).then(layzz => void(console.log(layzz)))
// console.log(layzz)
console.log(`${hello} ${world}`);
