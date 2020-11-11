import React from 'react';
import { shallow } from '../../setupTests';

import DialogContainer from './DialogContainer';

describe('DialogContainer component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <DialogContainer
        dialogState={{
          isOpen: true,
          title: '',
          body: '',
          confirmButtonText: '',
        }}
        handleCloseDialog={() => {}}
      />,
    );
    expect(wrapper).toHaveLength(1);
  });
});
