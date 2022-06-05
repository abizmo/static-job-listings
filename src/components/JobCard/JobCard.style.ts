import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes[16]};
  list-style: none;
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
