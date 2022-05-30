import { render, screen } from '@testing-library/react';
import React from 'react';

import Avatar from './Avatar';

describe('Avatar test', () => {
  test('should render and have alt label', () => {
    render(<Avatar $name='photosnap' />);

    expect(screen.getByAltText(/photosnap/i)).toBeInTheDocument();
  });
});
