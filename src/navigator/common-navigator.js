import { Navigation } from 'react-native-navigation'

export function enablePopGesture(componentId, popGesture) {
  Navigation.mergeOptions(componentId, {
    popGesture,
  })
}

export function pushScreen() {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      id,
      passProps: {
        data,
        options,
        callback
      },
      options: {
        modalPresentationStyle: 'fullScreen',
        topBar: {
          drawBehind: true,
          visible: false,
        },
      }
    },
  })
}

export function back(componentId, popToRoot) {
  if (popToRoot) {
    Navigation.popToRoot(componentId)
  } else {
    Navigation.pop(componentId)
  }
}

export function showModal(screenName, data, options, callback, componentId) {
  const cId = componentId ? { id: componentId } : null

  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            ...cId,
            name: screenName,
            passProps: {
              data,
              options,
              callback
            },
            options: {
              modalPresentationStyle: 'fullScreen',
              topBar: {
                drawBehind: true,
                visible: false,
              },
            }
          },
        },
      ],
    },
  })
}

export async function dismissModal(componentId) {
  try {
    await Navigation.dismissModal(componentId)
    return Promise.resolve()
  } catch (e) {
    return Promise.reject(e)
  }
}
