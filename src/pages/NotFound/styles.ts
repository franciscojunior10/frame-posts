import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 29px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
    margin: 50px 0;
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
    }
    img {
      display: none;
    }
  }
`
