import Colors from '../styles/colors'

export const getBackgroundColor = value => {
  if (isNaN(value)) return Colors.yellow

  return value % 2 !== 0 ? Colors.red : Colors.green
}
