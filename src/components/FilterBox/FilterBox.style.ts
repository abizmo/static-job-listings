import styled from 'styled-components';

export const Wrapper = styled.div.attrs({
  'aria-label': 'filter-box',
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes[4]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes[20]};

  @media (min-width: 50rem) {
    padding: ${({ theme }) => `${theme.sizes[20]} ${theme.sizes[40]}`};
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes[16]};
`;
