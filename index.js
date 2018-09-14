'use strict';

const UNLENGTH_TYPE = [ 'number', 'boolean' ];
const NULL_OR_UNDEF = [ null, undefined ];

/**
 * @description Get length in safety
 * Safety length function to avoid invoke fatal error, such as beblow:
 * > null.length
 * TypeError: Cannot read property 'length' of null
 * @param {any} v 
 * @return {Number} >= 0
 */
const length = (v) => {
  // typeof null === 'object'
  if (NULL_OR_UNDEF.indexOf(v) >= 0) {
    return 0;
  }

  if (UNLENGTH_TYPE.indexOf(typeof(v)) >= 0) {
    return 0;
  }

  if (Array.isArray(v) || Buffer.isBuffer(v)) {
    return v.length;
  }

  if (typeof(v) === 'object') {
    return (v.__proto__ === Map.prototype || v.__proto__ === Set.prototype) ? v.size : 0;
  }

  return v.length;
}

exports = module.exports = { length };