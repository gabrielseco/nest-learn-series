import React from 'react';
import { shallow } from 'enzyme';

import OverlayMenu from './OverlayMenu';

describe('OverlayMenu suite', () => {
  it('should render the OverlayMenu component', () => {
    const component = shallow(<OverlayMenu />);
    expect(component).toBeDefined();
  });
});
