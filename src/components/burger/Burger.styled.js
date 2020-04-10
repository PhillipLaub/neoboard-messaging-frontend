// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  left: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3.2rem;
  height: 3.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 3.2rem;
    height: 0.4rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
