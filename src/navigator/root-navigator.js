import { Navigation } from 'react-native-navigation'
import ScreenName from '../screen-configs/screens-name'

export const setRootSplashScreen = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            id: 'splash',
            name: ScreenName.splash,
            options: {
              statusBar: {
                drawBehind: true,
                visible: false,
              },
              layout: {
                orientation: ['portrait'],
              },
            }
          }
        }
      ],
      options: {
        statusBar: {
          visible: true,
          style: 'dark'
        },
        animations: {
          // pop: popAnimations,
        },
      }
    }
  }
})

export const setRootHomeScreen = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'bottomTabs',
      children: loadChildren()
    },
    waitForRender: true,
    animate: true
  }
})

export const setBottomTabByIndex = (index) => {
  Navigation.mergeOptions('bottomTabs', {
    bottomTabs: {
      currentTabIndex: index
    }
  });
}

const loadChildren = () => [
  {
    stack: {
      children: [{
        component: {
          name: ScreenName.home,
          id: 'home',
          options: {
            statusBar: {
              drawBehind: true
            },
          }
        }
      }],
      options: {
        bottomTab: {
          text: 'Home',
          // icon: Images.tabbar_home,
        },
        animations: {
          // pop: popAnimations,
        }
      }
    }
  },
  {
    stack: {
      children: [{
        component: {
          name: ScreenName.setting,
          id: 'event',
          options: {
            statusBar: {
              drawBehind: true
            },
          }
        }
      }],
      options: {
        bottomTab: {
          text: 'Settings',
          // icon: Images.tabbar_event,
        },
        animations: {
          // pop: popAnimations,
        }
      }
    }
  },
]