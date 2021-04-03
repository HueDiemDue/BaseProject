import AsyncStorage from '@react-native-community/async-storage'

const APP_PREFIX = 'BASE_'

const saveValue = async (value, key) => {
  const app_key = `${APP_PREFIX}${key}`

  try {
    if (value) {
      await AsyncStorage.setItem(app_key, value.toString());
    } else {
      await AsyncStorage.removeItem(app_key)
    }
    return Promise.resolve(true)
  } catch (error) {
    return Promise.reject(false)
  }
}

const getValue = async (key) => {
  const app_key = `${APP_PREFIX}${key}`
  let value = null;

  try {
    value = await AsyncStorage.getItem(app_key);
    if (value) {
      return Promise.resolve(value)
    }
  } catch (error) {

  }

  return Promise.reject(value)
}

export default {
  getValue,
  saveValue,
}