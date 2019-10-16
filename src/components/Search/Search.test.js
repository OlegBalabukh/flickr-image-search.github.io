import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';

import Search from './Search';

configure({ adapter: new Adapter() });

describe('<Search />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should render input field', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('by default input field should be empty', () => {
    expect(wrapper.find('value')).toHaveLength(0);
  });
});