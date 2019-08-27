import React from 'react';
import {shallow} from 'enzyme';

import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('Should render a button Start a Game"', () => {
    expect(wrapper.find('button').hasClass('start')).toBe(true);
  });

  it('Should not render GameForm component when you unclick on the button', () => {
    expect(wrapper.find('GameForm').exists()).toBe(false);
  });

  it('Should render GameForm component when you click on the button ', () => {
    const btn = wrapper.find('button');

    btn.simulate('click');
    expect(wrapper.find('GameForm').exists()).toBe(true);
  });
});
