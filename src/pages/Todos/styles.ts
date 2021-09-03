import styled from 'styled-components'

export const TodosContainer = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  h3 {
    margin: 20px 0;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.common.text};
  }

  > div {
    border-bottom: 1px solid #323238;
    margin-bottom: 20px;
  }
`
