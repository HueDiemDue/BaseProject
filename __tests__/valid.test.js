import { validateNumber } from '../source/utils/ValidateHelper'

describe('check validate number', () => {
  it('should be true validate number ', () => {
    expect(validateNumber(123)).toBe(true)
  })

  it('should be false validate number ', () => {
    expect(validateNumber('123dnf')).toBe(false)
  })

  it('should be false validate number', () => {
    expect(validateNumber('_123@####')).toBe(false)
  })
})