import React from 'react';
import { render } from '@testing-library/react';

import MainToolbar from './mainToolbar';

describe('MainToolbar', () => {
  it('should render', () => {
    const { baseElement } = render(<MainToolbar/>);
    expect(baseElement).toBeTruthy();
  });
});
