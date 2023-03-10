import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: -30px; // that's height of the theme switch
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  max-width: 1097px;
  margin-bottom: 63px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-gap: 32px;
    margin-bottom: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    min-width: 128px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding-top: 12px;
  }
`;

export const MiniTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.content.text};
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  padding: 12px 0 35px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 30px;
    padding: 8px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.content.text};
  padding: 0 0 32px;
  line-height: 1.4;
  margin: 0;
  max-width: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 12px 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 17px;
    padding: 4px 0 24px;
    max-width: 570px;
  }
`;

export const MessageIcon = styled.img`
  align-self: center;
`;
