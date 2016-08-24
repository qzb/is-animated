'use strict'

var gif = require('./types/gif')
var png = require('./types/png')

/**
 * Checks if buffer contains animated image
 *
 * @param {Buffer} buffer
 * @returns {boolean}
 */
function isAnimated (buffer) {
  if (gif.isGIF(buffer)) {
    return gif.isAnimated(buffer)
  }

  if (png.isPNG(buffer)) {
    return png.isAnimated(buffer)
  }

  return false
}

module.exports = isAnimated
