import React from 'react';
import { shallow } from 'enzyme';

import HamburguerMenu from './HamburguerMenu';

describe('HamburguerMenu suite', () => {
  it('should render the HamburguerMenu component', () => {
    const component = shallow(<HamburguerMenu />);
    expect(component).toBeDefined();
  });
});
