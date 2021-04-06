import renderer from 'react-test-renderer'
import React from 'react'
import { LoadingIndicator } from '../../src/components'

describe('Components > LoadingIndicator', () => {
  describe('render', () => {
    it('Render a snapshot for LoadingIndicator use renderer', () => {
      const tree = renderer.create(<LoadingIndicator />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})