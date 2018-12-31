export interface IOptions {
  white?: string
  black?: string
}

const DEFAULT_OPTIONS: IOptions = {
  white: '#fff',
  black: '#000'
}

/**
 * Checks if the given hex code is valid.
 */
export function isValidHex(hex: string) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex)
}

/**
 * Validates a hex code and returns its YIQ value.
 */
export function colorYiq(colorHex: string, options?: IOptions) {
  // Assigns the defaults if an option is not given:
  options = { ...DEFAULT_OPTIONS, ...options }

  if (!isValidHex(colorHex)) {
    throw new Error(`The value ${colorHex} is not a valid hex color value.`)
  }

  if (colorHex.length === 4) {
    colorHex = colorHex.replace(/^#(.)(.)(.)/i, '#$1$1$2$2$3$3')
  }

  const r = parseInt(colorHex.substr(1, 2), 16)
  const g = parseInt(colorHex.substr(3, 2), 16)
  const b = parseInt(colorHex.substr(5, 2), 16)

  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  return yiq >= 128 ? options.black : options.white
}
