import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="danger" />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="primary" />
      <GlobalStyle />
    </ThemeProvider>
  )
}