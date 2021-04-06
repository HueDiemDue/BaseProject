import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'react-native-mock-render/mock'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-native', () => require('react-native-mock-render'), {virtual: true})

console.error = message => {
  return message
}

// enzyme
// global.shallow = shallow
// global.render = render
// global.mount = mount