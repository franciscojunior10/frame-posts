import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  z-index: 1;
  top: 0;
  background-color: ${({ theme }) => theme.colors.common.white};
  position: fixed;
  height: 60px;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  display: flex;
  width: 100%;
  padding: 0;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`
