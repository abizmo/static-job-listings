import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

test('render and match snapshot', () => {
  const { asFragment } = render(<Footer />);

  expect(asFragment()).toMatchSnapshot();
});
test('has to links FrontendMentor.io and abizmo.dev', () => {
  render(<Footer />);
  const frontedMentorLink = screen.getByText(/frontend mentor/i);
  expect(frontedMentorLink).toBeInTheDocument();
  expect(frontedMentorLink).toHaveAttribute(
    'href',
    'https://www.frontendmentor.io/?ref=challenge'
  );

  const abizmoLink = screen.getByText(/abián izquierdo/i);
  expect(abizmoLink).toBeInTheDocument();
  expect(abizmoLink).toHaveAttribute('href', 'https://www.abizmo.dev');
});
