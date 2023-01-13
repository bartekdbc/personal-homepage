import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  max-width: 1097px;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 30vw;
  max-width: 398px;
  border-radius: 50%;
`;

export const Content = styled.div`
  padding-top: 68px;
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
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  padding: 32px 0;
  margin: 0;
`;

export const Button = styled.button`
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
`;

export const MessageIcon = styled.img`
  align-self: center;
`;
