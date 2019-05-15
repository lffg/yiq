import { isValidHex } from '../lib'

describe('isValidHex validator', () => {
  it('should return true when a valid hex is passed', () => {
    expect(isValidHex('#3399cc')).toBe(true)
    expect(isValidHex('#39c')).toBe(true)
  })

  it('should return false when a invalid hex is passed', () => {
    expect(isValidHex('#IAmInvalid')).toBe(false)
  })
})
