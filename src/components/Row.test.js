import React from 'react';
import {shallow} from 'enzyme';

import Gameboard from './Gameboard';

describe('Row', () => {
  it('Should render Gameboard contain 4 Rows', () => {
    const gameboardWrapper = shallow(<Gameboard rows={4} columns={4} />);
    expect(gameboardWrapper.find('Row').exists()).toBe(true);
    expect(gameboardWrapper.find('Row').length).toBe(4);
  });
});
