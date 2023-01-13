import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  max-width: 1097px;
  margin-bottom: 63px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 16px;
  }
`;

export const Image = styled.img`
  width: 33vw;
  max-width: 398px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 50vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding-top: 0px;
  }
`;

export const MiniTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  padding: 12px 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  padding: 32px 0;
  line-height: 1.4;
  margin: 0;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 12px 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 17px;
    padding: 4px 0 24px;
  }
`;

export const Button = styled.a`
  color: ${({ theme }) => theme.color.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  transition: box-shadow 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }
`;

export const MessageIcon = styled.img`
  align-self: center;
`;
