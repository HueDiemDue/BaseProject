import { saveValue, getValue } from '../../src/stores/DataManager'

const STRING_KEY = 'STRING'
const VALUE = 'huent-1493'


beforeEach(() => {
  jest.mock('@react-native-community/async-storage', () => MockedAsyncStorage)
})

describe('save value from async/storage', () => {

  test('should be save value  true', async () => {
    await expect(saveValue(VALUE, STRING_KEY)).resolves.toBe(true)
  })

  test('should be save value false', async () => {
    await expect(saveValue()).resolves.toBe(true)
  })
})

describe('get value from async/storage', () => {
  test('should be get value', async () => {
    await expect(getValue(STRING_KEY)).resolves.toBe(VALUE)
  })

  test('should be get value', async () => {
    // return getValue().catch(error => {
    //   expect(error).toBe(null)
    // })
    await expect(getValue()).rejects.toBe(null)
  })
})

