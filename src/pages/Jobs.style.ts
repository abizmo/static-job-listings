import styled from 'styled-components';
import DesktopHeader from '../assets/images/bg-header-desktop.svg';
import MobileHeader from '../assets/images/bg-header-mobile.svg';

export const Container = styled.main`
  padding: 0 16px;
  margin: 0px auto 0;
  max-width: 1110px;
  width: 100%;
`;

export const JobList = styled.ul`
  list-style: none;
  margin: 56px 0;

  & > li + li {
    margin-top: 40px;
  }

  @media (min-width: 50rem) {
    margin-top: 80px;
    & > li + li {
      margin-top: 24px;
    }
  }
`;

export const Header = styled.div`
  background-image: url(${MobileHeader});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors[500]};
  height: 156px;

  @media (min-width: 50rem) {
    background-image: url(${DesktopHeader});
  }
`;
