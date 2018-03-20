import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar';

describe('NavBar suite', () => {
  it('should render the NavBar component', () => {
    const component = shallow(<NavBar />);
    expect(component).toBeDefined();
  });
});
