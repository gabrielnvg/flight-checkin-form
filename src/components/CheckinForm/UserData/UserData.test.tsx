import React from 'react';
import { shallow, render } from '../../../setupTests';

import UserData from './UserData';

describe('UserData component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <UserData userStoredData={{}} handleSubmitSuccess={() => {}} />,
    );
    expect(wrapper).toHaveLength(1);
  });

  it('contains a button with the text "Continue"', () => {
    const wrapper = render(
      <UserData userStoredData={{}} handleSubmitSuccess={() => {}} />,
    );

    expect(wrapper.find('button > span').text().toLowerCase()).toBe('continue');
  });
});
