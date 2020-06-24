export function isValidHex(hex: string) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
}

export function isValidThreshold(threshold: number) {
  return threshold >= 0 && threshold <= 255;
}
