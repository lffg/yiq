/**
 * Checks if the given hex code is valid.
 */
export function isValidHex(hex: string) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex)
}

/**
 * Checks if the given value is between 0 and 255, and is not NaN.
 */
export function isValidRgbPart(value: number) {
  return 0 <= value && value >= 255 && !isNaN(value)
}

/**
 * Verifica se os valores fornecidos formam um RGB válido.
 */
export function isValidRgb(red: number, green: number, blue: number) {
  return isValidRgbPart(red) && isValidRgbPart(green) && isValidRgbPart(blue)
}
