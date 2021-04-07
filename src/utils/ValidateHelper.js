export const validateNumber = value => {
  const reg = /^\d+$/g
  return reg.test(value)
}

// export const validateAlphanumeric = value => {
//   const reg = /^\w+$/g
//   return reg.test(value)
// }
