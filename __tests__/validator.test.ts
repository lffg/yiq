import { isValidHex, isValidThreshold } from '../src/yiq';

describe('isValidHex validator', () => {
  it('should return true when a valid hex is passed', () => {
    expect(isValidHex('#3399cc')).toBe(true);
    expect(isValidHex('#39c')).toBe(true);
  });

  it('should return false when a invalid hex is passed', () => {
    expect(isValidHex('#IAmInvalid')).toBe(false);
  });
});

describe('isValidThreshold validator', () => {
  it('should return true when a value between 0 and 255 is passed', () => {
    expect(isValidThreshold(0)).toBe(true);
    expect(isValidThreshold(255)).toBe(true);
    expect(isValidThreshold(128)).toBe(true);
    expect(isValidThreshold(60)).toBe(true);
    expect(isValidThreshold(160)).toBe(true);
  });

  it('should return false a value below 0 or over 255 is passed', () => {
    expect(isValidThreshold(-1)).toBe(false);
    expect(isValidThreshold(256)).toBe(false);
  });
});
