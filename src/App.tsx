import { ThemeProvider } from 'styled-components';

import { PostsProvider } from './contexts/PostsContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      
      <PostsProvider>
        <Home />
      </PostsProvider>

      <GlobalStyle />
    </ThemeProvider>    
  )
}
