import styled from 'styled-components';

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors[800]};
  font-size: ${({ theme }) => theme.fontSizes[900]};
  &:hover {
    color: ${({ theme }) => theme.colors[500]};
    cursor: pointer;
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  & div + div {
    margin-left: 8px;
  }
`;

export const Company = styled.h2(({ theme }) => ({
  fontSize: theme.fontSizes[500],
  '@media (min-width: 50rem)': {
    fontSize: theme.fontSizes[700],
  },
}));

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes[16]};
  list-style: none;
  &.bullet li {
    color: ${({ theme }) => theme.colors[600]};
    font-size: ${({ theme }) => theme.fontSizes[600]};
    font-weight: 500;
    @media (min-width: 50rem) {
      font-size: ${({ theme }) => theme.fontSizes[700]};
    }
  }
  &.bullet li + li {
    position: relative;
  }
  &.bullet li + li::before {
    background-color: ${({ theme }) => theme.colors[600]};
    border-radius: 50%;
    content: '';
    height: 4px;
    left: -10px;
    top: 50%;
    position: absolute;
    transform: translateY(-100%);
    width: 4px;
  }
`;

export const Wrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: theme.sizes[4],
  boxShadow: theme.boxShadow,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.sizes[16],
  padding: `${theme.sizes[32]} ${theme.sizes[24]} ${theme.sizes[24]}`,
  position: 'relative',
  overflow: 'hidden',
  '&>div': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.sizes[16],
  },
  '&>ul': {
    borderTop: `1px solid ${theme.colors[600]}`,
    paddingTop: '1rem',
  },
  '&.feat::before': {
    backgroundColor: theme.colors[500],
    content: '""',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '5px',
  },
  '@media(min-width: 50rem)': {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&>ul': {
      borderTop: 'none',
      paddingTop: 0,
    },
  },
}));
