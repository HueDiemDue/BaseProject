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

  // describe('componentDidMount', () => {
  //   let wrapper

  //   beforeEach(() => {
  //     wrapper = mount(<SplashScreen />)
  //   })
  //   test('should call componentDidMount lifecycle method', () => {
  //     // const instance = wrapper.instance()
  //     // // instance.componentDidMount = jest.fn()
  //     // const spy = jest.spyOn(instance, 'directScreen')
  //     // wrapper.instance().forceUpdate()
  //     // // wrapper.update()
  //     // // instance.componentDidMount()

  //     // expect(spy).toHaveBeenCalledTimes(1)

  //   })
  // })
})

// afterEach(() => {
//   spy.mockClear()
// })
