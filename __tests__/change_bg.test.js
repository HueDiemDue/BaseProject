import { getBackgroundColor } from '../source/utils/Helper'
import Colors from '../source/styles/colors'

describe('check number value to change background view', () => {
  it('should be backgroud red', () => {
    expect(getBackgroundColor(10)).toBe(Colors.green)
  })

  it('should be backgroud green', () => {
    expect(getBackgroundColor(101)).toBe(Colors.red)
  })
})
