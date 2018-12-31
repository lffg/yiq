/**
 * Module exports.
 *
 * @public
 */
module.exports = yiq

/**
 * Get the YIQ value of an hex color.
 * 
 * @param   {string} colorHex 
 * @param   {object} options
 * @return  {string} 
 */
function yiq (colorHex, options = {}) {
  if (! (options instanceof Object)) {
    throw new TypeError('The param options must be of the type object.')
  }

  const white = options.white || '#fff'
  const dark  = options.dark || '#000'

  if (! /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorHex)) {
    console.warn(`You provided an invalid Hex color value`);
    return white
  }

  if (colorHex.length === 4) {
    colorHex = colorHex.replace(/^#(.)(.)(.)/i, '#$1$1$2$2$3$3')
  }

  const r = parseInt(colorHex.substr(1, 2), 16)
  const g = parseInt(colorHex.substr(3, 2), 16)
  const b = parseInt(colorHex.substr(5, 2), 16)

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

  return yiq >= 128 ? dark : white
}
