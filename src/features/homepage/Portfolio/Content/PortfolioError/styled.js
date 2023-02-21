import styled from "styled-components";
import { ReactComponent as Error } from "./error.svg";

export const Wrapper = styled.div`
  margin: 88px auto 0;
  text-align: center;
  max-width: 420px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 44px auto 0;
  }
`;

export const ErrorIcon = styled(Error)`
  margin: 0 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 40px;
    margin: 0 0 12px;
  }
`;

export const ErrorText = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
    margin: 0 0 16px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 32px;
  padding: 0 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
    margin: 0 0 16px;
  }
`;
