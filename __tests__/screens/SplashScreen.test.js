import React from 'react'
import { shallow, mount } from 'enzyme'
import SplashScreen from '../../src/screens/splash/SplashScreen'

describe('Screens > SplashScreen', () => {
  describe('render', () => {
    test('Render a snapshot for SplashScreen use renderer', () => {

      const wrapper = mount(<SplashScreen />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  
})