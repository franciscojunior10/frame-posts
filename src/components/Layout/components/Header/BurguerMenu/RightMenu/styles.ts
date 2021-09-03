import { Link } from 'react-router-dom'

import styled, { css } from 'styled-components'

interface RightMenuContainerProps {
  open: boolean
}

interface ItensProps {
  active: boolean
}

export const RightMenuContainer = styled.ul<RightMenuContainerProps>`
  display: flex;
  flex-flow: row nowrap;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.common.white};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 225px;
    align-items: flex-start;
    z-index: 10000;
    transition: transform 0.25s ease-in-out;
    border-left: 1px solid #dbdbdb;
  }
`

export const RightMenuItems = styled(Link)<ItensProps>`
  display: inline-block;
  position: relative;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};

  ${({ active }) =>
    active &&
    css`
      ::after {
        content: '';
        position: absolute;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.primary.main};
        width: 100%;
        left: 0;
        top: 36px;
      }
    `}

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary.main};
    padding: 8px 0;

    ${({ active }) =>
      active &&
      css`
        ::after {
          content: '';
          position: absolute;
          height: 3px;
          background-color: transparent;
          width: 100%;
          left: 0;
          top: 28px;
        }
      `}

    & + a {
      border-top: 1.5px solid #323238;
    }

    :first-child {
      padding-top: 20px;
    }
  }
`
