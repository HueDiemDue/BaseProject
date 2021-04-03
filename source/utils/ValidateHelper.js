const validateNumber = value => {
  const reg = /^\d+$/g
  return reg.test(value)
}

const validateAlphanumeric = value => {
  const reg = /^\w+$/g
  return reg.test(value)
}

export default {
  validateNumber,
  validateAlphanumeric,
}