
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
    var family = req.agent.family
      , os = req.agent.os;
    req.agent.family = { name: family, machine: machine(family) };
    req.agent.os = { name: os, machine: machine(os) };
    next();
  }
}

/**
 * Convert the given `str` to a machine-readable string
 * suitable for use as an html class name etc.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function machine(str) {
  return str
    .toLowerCase()
    .replace(/ +/g, '-');
}