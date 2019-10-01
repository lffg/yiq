import { YiqOptions } from './utils/types';
import { isValidHex } from './utils/validation';

const defaultOptions: YiqOptions = {
  white: '#fff',
  black: '#000'
};

export function colorYiq(colorHex: string, userOptions?: YiqOptions) {
  const options = { ...defaultOptions, ...userOptions };

  if (!isValidHex(colorHex)) {
    throw new Error(`The value "${colorHex}" is not a valid hex color string.`);
  }

  if (colorHex.length === 4) {
    colorHex = colorHex.replace(/^#(.)(.)(.)/i, '#$1$1$2$2$3$3');
  }

  const n = parseInt(colorHex.slice(1), 16);

  const r = (n & 0xff0000) >> 16;
  const g = (n & 0xff00) >> 8;
  const b = n & 0xff;

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? options.black : options.white;
}
