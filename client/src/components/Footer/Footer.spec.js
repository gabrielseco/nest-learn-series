import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer suite', () => {
  it('should render the Footer component', () => {
    const component = shallow(<Footer />);
    expect(component).toBeDefined();
  });
});
