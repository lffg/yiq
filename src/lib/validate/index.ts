/**
 * Checks if the given hex code is valid.
 */
export function isValidHex(hex: string) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex)
}
