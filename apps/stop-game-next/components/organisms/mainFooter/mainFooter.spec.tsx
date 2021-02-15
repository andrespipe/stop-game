import React from 'react';
import { render } from '@testing-library/react';

import MainFooter from './mainFooter';

describe('MainFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainFooter />);
    expect(baseElement).toBeTruthy();
  });
});
