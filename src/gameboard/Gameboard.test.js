import React from 'react';
import {shallow, mount} from 'enzyme';

import Gameboard from './Gameboard';

describe('Gameboard', () => {
  it('should render gameboard', () => {
    const boardWrapper = shallow(<Gameboard rows={4} columns={4} />);
    expect(boardWrapper.exists()).toBe(true);
  });

  it('should render gameboard with 5 rows and 6 columns', () => {
    const boardWrapper = mount(<Gameboard rows={5} columns={6} />);
    const board = boardWrapper.find('tbody').children();
    const row = boardWrapper
      .find('tr')
      .first()
      .children();

    expect(board.length).toEqual(5);
    expect(row.length).toEqual(6);
  });

  it('Should not render the Winner component by default', () => {
    const boardWrapper = shallow(<Gameboard />);
    expect(boardWrapper.find('Winner').exists()).toBe(false);
  });
});
