import { isValidHex, isValidRgbPart, isValidRgb } from '../src'

describe('isValidHex validator', () => {
  it('should return true when a valid hex is passed', () => {
    expect(isValidHex('#3399cc')).toBe(true)
    expect(isValidHex('#39c')).toBe(true)
  })

  it('should return false when a invalid hex is passed', () => {
    expect(isValidHex('#IAmInvalid')).toBe(false)
  })
})

describe('isValidRgbPart validator', () => {
  it('should return true when a valid "part" is passed', () => {
    expect(isValidRgbPart(0)).toBe(true)
    expect(isValidRgbPart(1)).toBe(true)
    expect(isValidRgbPart(254)).toBe(true)
    expect(isValidRgbPart(255)).toBe(true)
  })

  it('should return false when a invalid "part" is passed', () => {
    expect(isValidRgbPart(-1)).toBe(false)
    expect(isValidRgbPart(256)).toBe(false)
    expect(isValidRgbPart(NaN)).toBe(false)
  })
})

describe('isValidRgb validator', () => {
  it('should return true when a valid rgb is passed', () => {
    expect(isValidRgb(0, 1, 2)).toBe(true)
    expect(isValidRgb(253, 254, 255)).toBe(true)
  })

  it('should return false when a invalid rgb is passed', () => {
    expect(isValidRgb(-1, 2, 3)).toBe(false)
    expect(isValidRgb(254, 255, 256)).toBe(false)
    expect(isValidRgb(1, 2, NaN)).toBe(false)
  })
})
