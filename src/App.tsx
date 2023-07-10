import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { defaultTheme } from './themes/default'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
