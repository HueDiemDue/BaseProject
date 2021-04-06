import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Navigation } from 'react-native-navigation'
import { BackHandler } from 'react-native'
import _ from 'lodash'

export const useNavigationAppearEvents = (screenComponentId, events, deps = []) => {
  const { componentDidAppear, componentDidDisappear } = events || {}

  useEffect(() => {
    const didAppearListener = Navigation.events().registerComponentDidAppearListener(({ componentId }) => {
      if (componentDidAppear && screenComponentId === componentId) {
        componentDidAppear()
      }
    })

    const didDisappearListener = Navigation.events().registerComponentDidDisappearListener(({ componentId }) => {
      if (componentDidDisappear && screenComponentId === componentId) {
        componentDidDisappear()
      }
    })

    return () => {
      didAppearListener.remove()
      didDisappearListener.remove()
    }
  }, deps)
}

export const useAndroidBackButtonHandler = callback => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', callback)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', callback)
    }
  }, [])
}
