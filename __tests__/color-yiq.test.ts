import yiq, { YiqOptions } from '../lib'

const equal = (array: string[], param: string) =>
  array.map((value) => yiq(value)).every((color) => color === param)

describe('yiq', () => {
  it('should return #fff when a dark color is passed', () => {
    expect(equal(['#000', '#000000', '#111', '#111111'], '#fff')).toBe(true)
  })

  it('should return #000 when a light color is passed', () => {
    expect(equal(['#fff', '#ffffff', '#fed', '#ffeedd'], '#000')).toBe(true)
  })

  it('should throw an error when an invalid hex is passed', () => {
    expect(() => yiq('#FalseHex')).toThrow(Error)
  })

  it('should use the options passed by the user over the default ones', () => {
    const options: YiqOptions = {
      white: '#ddd',
      black: '#333'
    }

    expect(yiq('#fff', options)).toBe('#333')
    expect(yiq('#000', options)).toBe('#ddd')
  })
})
