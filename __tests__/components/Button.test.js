import renderer from 'react-test-renderer'
import React from 'react'
import { Button } from '../../src/components'
// import { shallow } from 'enzyme'

const props = {
  text: 'Click me',
  onClick: () => { console.log('click button') },
}
// let wrapped = shallow(<Button {...props}>{'Hello'}</Button>)

describe('Components > Button', () => {
  describe('render', () => {
    it('Render a snapshot for Button use renderer', () => {
      // expect(wrapped).toMatchSnapshot()
      const tree = renderer.create(<Button>Hi</Button>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  // describe('props', () => {
   
  //   expect(wrapped.find(''))
  // })
})