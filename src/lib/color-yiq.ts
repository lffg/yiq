import { YiqOptions, YiqUserOptions } from './utils/types';
import { isValidHex, isValidThreshold } from './utils/validation';

const defaultOptions: YiqOptions = {
  white: '#fff',
  black: '#000',
  threshold: 128
};

export function colorYiq(colorHex: string, userOptions?: YiqUserOptions) {
  const options = { ...defaultOptions, ...userOptions };

  if (!isValidHex(colorHex)) {
    throw new Error(`The value "${colorHex}" is not a valid hex color string.`);
  }

  if (!isValidThreshold(options.threshold)) {
    throw new Error(
      `The threshold option "${options.threshold}" must be between 0 and 255.`
    );
  }

  if (colorHex.length === 4) {
    colorHex = colorHex.replace(/^#(.)(.)(.)/i, '#$1$1$2$2$3$3');
  }

  const n = parseInt(colorHex.slice(1), 16);

  const r = (n & 0xff0000) >> 16;
  const g = (n & 0xff00) >> 8;
  const b = n & 0xff;

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= options.threshold ? options.black : options.white;
}
