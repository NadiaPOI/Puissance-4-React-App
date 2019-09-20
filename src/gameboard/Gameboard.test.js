import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import Gameboard from './Gameboard';

describe('Gameboard', () => {
  it('should render gameboard with 5 rows and 6 columns', () => {
    delete window.location;
    window.location = {
      href: 'http://localhost.com/gameboard?row=5&col=6'
    };

    const boardWrapper = mount(<Gameboard />);

    const board = boardWrapper.find('tbody').children();
    const row = boardWrapper
      .find('tr')
      .first()
      .children();

    expect(board.length).toEqual(5);
    expect(row.length).toEqual(6);
  });

  it('Should add a yellow pawn when a empty column is clicked', () => {
    window.location = {
      href: 'http://localhost.com/gameboard?row=4&col=4'
    };

    const boardWrapper = mount(<Gameboard />);

    const clickedCell = boardWrapper.find('td').last();

    expect(clickedCell.find('img').html()).toEqual(
      '<img src="empty.png" alt="img">'
    );

    clickedCell.simulate('click');

    expect(clickedCell.find('img').html()).toEqual(
      '<img src="yellow.png" alt="img">'
    );
  });

  it('Should not render the Winner component by default', () => {
    const boardWrapper = shallow(<Gameboard />);

    expect(boardWrapper.find('Winner').exists()).toBe(false);
  });

  it('Should render the Winner component when a player win', () => {
    window.location = {
      href: 'http://localhost.com/gameboard?row=4&col=4'
    };

    const boardWrapper = mount(
      <Router>
        <Gameboard />
      </Router>
    );

    const clickedCell = boardWrapper.find('img').last();

    clickedCell.simulate('click');
    clickedCell.simulate('click');
    clickedCell.simulate('click');
    clickedCell.simulate('click');

    expect(boardWrapper.find('Winner').exists()).toBe(true);
  });
});
