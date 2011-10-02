
# connect-useragent

  A small Connect user-agent middleware exposing user-agent details to your application and views. A good idea by @guille backed by @3rd-Eden's [useragent](https://github.com/3rd-Eden/useragent) module.

## Installation

    $ npm install connect-useragent

## Example

```js
var connect = require('connect')
  , useragent = require('connect-useragent');

connect()
  .use(connect.logger('dev'))
  .use(useragent())
  .use(function(req, res){
    console.log(req.agent);
  })
  .listen(3000);
```

provides details such as the following:

```js
{ family: 'Chrome',
  major: '16',
  minor: '0',
  patch: '891',
  os: 'Mac OS X' }
```

## License 

(The MIT License)

Copyright (c) 2011 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.