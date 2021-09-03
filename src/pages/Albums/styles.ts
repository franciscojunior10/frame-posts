import styled from 'styled-components'

export const AlbumsContainer = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary.main};
    margin: 20px 0;
  }

  > div {
    border-bottom: 1px solid #323238;
    margin-top: 20px;
  }
`
