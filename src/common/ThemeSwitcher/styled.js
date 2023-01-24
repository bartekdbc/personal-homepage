import styled, { css } from "styled-components";
import { ReactComponent as Sun } from "./sun.svg";

export const Container = styled.div`
  display: flex;
  place-self: flex-start flex-end;
  position: absolute;
`;

export const StyledThemeSwitcher = styled.button`
  color: ${({ theme }) => theme.colors.themeSwitcher.text};
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

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const Switcher = styled.span`
  width: 48px;
  background-color: ${({ theme }) => theme.colors.themeSwitcher.background};
  border: 1px solid ${({ theme }) => theme.colors.themeSwitcher.border};
  border-radius: 13px;
  padding: 3px;
  display: flex;
`;

export const SunBackground = styled.span`
  padding: 3px;
  background-color: ${({ theme }) => theme.colors.themeSwitcher.text};
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `};
`;

export const SunIcon = styled(Sun)`
  color: ${({ theme }) => theme.colors.themeSwitcher.icon};
`;
