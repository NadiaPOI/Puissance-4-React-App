import React from 'react';
import {shallow} from 'enzyme';

import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('Should render a Link', () => {
    expect(wrapper.find('Link').exists()).toBe(true);
  });
});
