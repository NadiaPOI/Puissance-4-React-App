import React from 'react';
import {shallow} from 'enzyme';

import Row from './Row';

describe('Row', () => {
  it('Should render Rows', () => {
    const props = {
      row: new Array(5)
    };
    const rowWrapper = shallow(<Row {...props} />);
    expect(rowWrapper.exists()).toBe(true);
  });
});
