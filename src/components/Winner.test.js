import React from 'react';
import {shallow} from 'enzyme';
import Winner from './Winner';

describe('Winner', () => {
  it('Should render Winner component', () => {
    const winnerWrapper = shallow(<Winner />);
    expect(winnerWrapper.exists()).toBe(true);
  });

  it('Should render at text contain yellow player win when player is Y', () => {
    const winnerWrapper = shallow(<Winner player='Y' />);
    expect(winnerWrapper.find('p').text()).toBe('Great !! Yellow player win !');
  });

  it('Should render at text contain red player win when player is R', () => {
    const winnerWrapper = shallow(<Winner player='R' />);
    expect(winnerWrapper.find('p').text()).toBe('Great !! Red player win !');
  });
});
