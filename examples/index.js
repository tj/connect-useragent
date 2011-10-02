
/**
 * Module dependencies.
 */

var connect = require('connect')
  , useragent = require('../');

connect()
  .use(connect.logger('dev'))
  .use(useragent())
  .use(function(req, res){
    console.log(req.agent);
  })
  .listen(3000);