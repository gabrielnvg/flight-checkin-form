import React from 'react';
import { shallow } from '../../setupTests';

import CheckinForm from './CheckinForm';

describe('CheckinForm component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CheckinForm
        formStep={1}
        userStoredData={{}}
        handleSearchFlightSubmit={() => {}}
        handleUserDataSubmit={() => {}}
      />,
    );
    expect(wrapper).toHaveLength(1);
  });
});
