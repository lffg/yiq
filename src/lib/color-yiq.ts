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

  const r = parseInt(colorHex.substr(1, 2), 16);
  const g = parseInt(colorHex.substr(3, 2), 16);
  const b = parseInt(colorHex.substr(5, 2), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? options.black : options.white;
}
