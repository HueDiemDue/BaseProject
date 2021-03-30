import Colors from '../constants/colors'

export const defaultOptions = {
  statusBar: {
    backgroundColor: Colors.transparent,
    style: 'dark',
    drawBehind: true,
    visible: true,
  },
  bottomTabs: {
    titleDisplayMode: 'alwaysShow',
    backgroundColor: Colors.white,
  },
  bottomTab: {
    fontSize: 12,
    selectedTextColor: Colors.green,
    selectedIconColor: Colors.green,
    iconColor: Colors.black,
    textColor: Colors.black
  },
  animations: {
    setRoot: {
      waitForRender: true
    },
  },
  topBar: {
    visible: false,
  }
}