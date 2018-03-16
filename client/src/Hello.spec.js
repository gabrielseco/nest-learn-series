import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('Hello suite', () => {
  it('should render the Hello component', () => {
    const component = shallow(<Hello name="Nico" />);
    expect(component).toBeDefined();
    expect(component.find('h1').text()).toBe('Hello my name is Nico');
  });
});
