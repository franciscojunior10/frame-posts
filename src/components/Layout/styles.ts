import styled from 'styled-components'

export const MainContainer = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
`
export const MainContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 30px;
  overflow-x: hidden;
  overflow-y: hidden;
`

export const TitlePage = styled.h3`
  font-size: 29px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
  margin: 90px 0 25px 0;
`
