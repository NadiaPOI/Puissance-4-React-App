import React from 'react';
import {shallow} from 'enzyme';

import GameForm from './GameForm';

describe('GameForm', () => {
  let formWrapper;

  beforeEach(() => {
    const props = {
      statusDisplay: jest.fn(),
      valueRows: jest.fn(),
      valueColumns: jest.fn(),
      mockSubmit: jest.fn()
    };

    formWrapper = shallow(<GameForm {...props} />);
  });

  it('Should render a form with 2 InputForm components', () => {
    expect(formWrapper.find('InputForm').length).toEqual(2);
  });

  it('Should call preventDefault when submit form', () => {
    const preventDefault = jest.fn();

    formWrapper.find('form').simulate('submit', {preventDefault});
    expect(preventDefault).toBeCalled();
  });
});
