import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";

export const Wrapper = styled.div`
  margin: 0;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  padding: 0 0 16px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`;

export const List = styled.ul`
  font-size: 18px;
  color: ${({ theme }) => theme.color.slateGray};
  padding: 0;
  margin: 32px 0 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
`;

export const Item = styled.li`
  line-height: 1.4;
  list-style: none;
`;

export const Bullet = styled(BulletIcon)`
  margin-right: 16px;
  height: auto;
`;
