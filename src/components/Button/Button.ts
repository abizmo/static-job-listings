import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors[600]};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1;
  padding: 4px;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors[500]};
    text-decoration: underline;
  }
`;

export default Button;
