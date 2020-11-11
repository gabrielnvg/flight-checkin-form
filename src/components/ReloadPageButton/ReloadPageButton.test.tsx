import React from 'react';
import { shallow } from '../../setupTests';

import ReloadPageButton from './ReloadPageButton';

describe('ReloadPageButton component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReloadPageButton />);
    expect(wrapper).toHaveLength(1);
  });
});
