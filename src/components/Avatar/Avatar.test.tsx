import { render, screen } from '@testing-library/react';
import React from 'react';

import Avatar from './Avatar';

describe('Avatar test', () => {
  test('should render and have alt label', () => {
    render(<Avatar alt='photosnap' src='./images/photosnap.svg' />);

    expect(screen.getByAltText(/photosnap/i)).toBeInTheDocument();
  });
});
