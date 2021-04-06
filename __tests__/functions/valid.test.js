import { validateNumber } from '../../src/utils/ValidateHelper'

describe('check validate number', () => {
  let x = 124

  it('should be true validate number ', () => {
    expect(validateNumber(x)).toBe(true)
  })

  it('should be false validate number ', () => {
    x = '123dnf'
    expect(validateNumber(x)).toBe(false)
  })

  it('should be false validate number', () => {
    x = '_123@####'
    expect(validateNumber(x)).toBe(false)
  })
})
