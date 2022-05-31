import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors[600]};
  cursor: pointer;
  font-size: ${({theme}) => theme.fontSizes[600]};
  padding: ${({ theme }) => theme.sizes[4]};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors[500]};
    text-decoration: underline;
  }
`;

export default Button;
