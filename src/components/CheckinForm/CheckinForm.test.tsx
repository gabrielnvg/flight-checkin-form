import React from 'react';
import { shallow } from '../../setupTests';

import CheckinForm from './CheckinForm';

describe('CheckinForm component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <CheckinForm
        formStep={1}
        userStoredData={{}}
        handleSearchFlightSubmit={() => {}}
        handleUserDataSubmit={() => {}}
      />,
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('contains the text "Welcome to your web check-in"', () => {
    expect(wrapper.find('div > div').text()).toBe(
      'Welcome to your web check-in',
    );
  });
});
