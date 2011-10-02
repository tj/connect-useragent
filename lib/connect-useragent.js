
/*!
 * connect-useragent
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var ua = require('useragent');

/**
 * Expose the middleware.
 */

module.exports = useragent;

/**
 * Parse the user-agent string when available and `next()`.
 *
 * @api public
 */

function useragent() {
  return function(req, res, next){
    req.agent = ua.parse(req.headers['user-agent'] || '');
    next();
  }
}