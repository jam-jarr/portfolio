import styled from 'styled-components';

type ButtonProps = {
  secondary?: boolean;
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
    background: white;
    color: #0074d9;
  `}
`;

export default Button;
