// eslint-disable-next-line
import styles, { css } from "styled-components/macro";
import React from "react";
import { useThemeProvider } from "../../context/ThemeProvider";
import { ThemeToggleStyled } from "./styles/ThemeToggleStyles";

export default function ThemeToggle(props) {
  const { theme, setTheme } = useThemeProvider();

  function toggleTheme() {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <button
      css={ThemeToggleStyled}
      onClick={toggleTheme}
      aria-label="theme toggle"
      className={theme === "dark" ? "toggle" : null}
    ></button>
  );
}
