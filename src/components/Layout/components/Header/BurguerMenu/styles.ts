import styled from 'styled-components'

interface BurguerMenuContainerProps {
  open: boolean
}

export const BurguerMenuContainer = styled.div<BurguerMenuContainerProps>`
  height: 25px;
  right: 20px;
  display: none;
  position: absolute;

  div {
    width: 22px;
    height: 2px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
    position: static;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`
