import React from 'react';
import { shallow } from '../../../setupTests';

import SearchFlight from './SearchFlight';

describe('SearchFlight component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchFlight handleSubmitSuccess={() => {}} />);
    expect(wrapper).toHaveLength(1);
  });
});
