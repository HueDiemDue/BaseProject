import renderer from 'react-test-renderer'
import React from 'react'
import { Button } from '../../source/components'

describe('Components > Button', () => {
  it('Render a snapshot for Button use renderer', () => {
    const tree = renderer.create(<Button />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})