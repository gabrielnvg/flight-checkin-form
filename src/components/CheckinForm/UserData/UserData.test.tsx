import React from 'react';
import { shallow } from '../../../setupTests';

import UserData from './UserData';

describe('UserData component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <UserData userStoredData={{}} handleSubmitSuccess={() => {}} />,
    );
    expect(wrapper).toHaveLength(1);
  });
});
