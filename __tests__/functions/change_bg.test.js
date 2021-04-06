import { getBackgroundColor } from '../../src/utils/Helper'
import Colors from '../../src/styles/colors'

describe('check number value to change background view', () => {
  let value = 10

  it('should be backgroud red', () => {
    expect(getBackgroundColor(value)).toBe(Colors.green)
  })

  it('should be backgroud green', () => {
    value = 101
    expect(getBackgroundColor(value)).toBe(Colors.red)
  })

  it('should be backgroud yellow', () => {
    value = '2dd'
    expect(getBackgroundColor(value)).toBe(Colors.yellow)
  })
})
