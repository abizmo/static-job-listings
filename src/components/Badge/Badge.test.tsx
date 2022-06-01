import { render, screen } from '@testing-library/react';
import React from 'react';
import Theme from '../../Theme';

import Badge from './Badge';

describe('Badge test', () => {
  test('should contains New!', () => {
    render(
      <Theme>
        <Badge type='new' />
      </Theme>
    );

    expect(screen.getByText(/new!/i)).toBeInTheDocument();
    expect(screen.getByText(/new!/i)).toHaveStyle(
      'background-color: hsl(180, 29%, 50%)'
    );
  });

  test('should contains Featured', () => {
    render(
      <Theme>
        <Badge type='feat' />
      </Theme>
    );

    expect(screen.getByText(/featured/i)).toBeInTheDocument();
    expect(screen.getByText(/featured/i)).toHaveStyle(
      'background-color: hsl(180, 14%, 20%)'
    );
  });
});
