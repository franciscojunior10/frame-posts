import styled from 'styled-components'

import { ButtonProps } from './props'

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  color: ${({ theme }) => theme.colors.common.white};
  padding: 10px 55px;
  border-radius: 8px;
  font: 700 16px 'Montserrat', sans-serif;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`
