import React from 'react';
import { shallow } from 'enzyme'
import AdminLogin from './AdminLogin'

describe('Admin Login component', () => {
  it('it should render admin component', () => {
    const component = shallow(<AdminLogin/>)
    const wrapper = component.find('.AdminLogin')
    expect(wrapper).toBe(1)
  })
})
