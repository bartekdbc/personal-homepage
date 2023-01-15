import styled from "styled-components";
import { ReactComponent as Sun } from "./sun.svg";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const StyledThemeSwitcher = styled.button`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  border: none;
  background: transparent;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0px;
  cursor: pointer;
`;

export const Text = styled.span`
  margin-right: 12px;
`;

export const Switcher = styled.span`
  width: 48px;
  background-color: ${({ theme }) => theme.color.mercury};
  border: 1px solid ${({ theme }) => theme.color.underlineGray};
  border-radius: 13px;
  padding: 3px;
  display: flex;
`;

export const SunBackground = styled.span`
  padding: 3px;
  background-color: ${({ theme }) => theme.color.slateGray};
  border-radius: 50%;
  display: flex;
`;

export const SunIcon = styled(Sun)`
  color: ${({ theme }) => theme.color.white};
`;
