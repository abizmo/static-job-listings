import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  font-size: 11px;
  text-align: center;

  & a {
    color: hsl(228, 45%, 44%);
  }
`;

function Footer() {
  return (
    <Wrapper>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor
      </a>
      Coded by <a href='https://www.abizmo.dev'>Abián Izquierdo</a>.
    </Wrapper>
  );
}

export default Footer;
