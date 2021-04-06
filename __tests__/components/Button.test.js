import renderer from 'react-test-renderer'
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Button } from '../../src/components'
import { shallow, mount } from 'enzyme'

describe('Components > Button', () => {
  describe('render', () => {
    test('Render a snapshot for Button use renderer', () => {

      const wrapped = mount(<Button />)
      expect(wrapped).toMatchSnapshot()
    })

    describe('props', () => {
      test('should pass props down', () => {
        const props = {
          title: 'Click me',
          onPress: jest.fn()
        }
        const wrapped = mount(
          <Button
            {...props}
          />
        )
        expect(wrapped.length).toBe(1)
        const text = wrapped.find('Text')
        expect(text).toHaveLength(1) // find component has 1 text 
        // expect(text.render().text()).toBe('Click me')
        expect(wrapped.props().title).toBe('Click me')
        expect(wrapped.props().style).toBe(null)
        expect(wrapped.props().onPress).toBe(props.onPress)
      })
    })

    describe('action', () => {
      test('should call onClick when button clicked', () => {
        const mockOnClick = jest.fn()
        const wrapper = shallow(
          <Button
            onPress={mockOnClick}
            title={'Hello'}
          />
        )
        const button = wrapper.find('TouchableOpacity')
        button.simulate('press')
        expect(mockOnClick).toHaveBeenCalled()
        expect(mockOnClick).toHaveBeenCalledTimes(1)
      })
    })
  })

})