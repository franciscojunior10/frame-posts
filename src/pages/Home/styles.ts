import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 768px) {
    justify-content: center;
    padding-bottom: 20px;
  }
`

export const ContentText = styled.div`
  margin-top: 187px;

  h2 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 24px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary.main};
    line-height: 50px;
    margin-top: 40px;
    max-width: 300px;
  }

  h3 {
    font-size: 20px;
    margin: 40px 0;
    color: ${({ theme }) => theme.colors.common.text};
  }

  @media (max-width: 768px) {
    margin-top: 10px;

    button {
      width: 100%;
    }
  }
`

export const ContentImageEbook = styled.div`
  img {
    margin: 80px 0 0 30px;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`
