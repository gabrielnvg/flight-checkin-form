import React from 'react';
import { shallow } from '../../setupTests';

import InfoMessage from './InfoMessage';

describe('InfoMessage component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<InfoMessage message="" />);
    expect(wrapper).toHaveLength(1);
  });
});
