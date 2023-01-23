import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 88px auto 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 44px auto 0;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.portfolio.text};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 160px;
  height: 160px;
  border: 11px solid ${({ theme }) => theme.colors.portfolio.spinner};
  border-radius: 50%;
  border-right-color: ${({ theme }) => theme.colors.portfolio.spinnerColor};
  animation: spin 1.2s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 80px;
    width: 80px;
    border-width: 6px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
