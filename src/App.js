import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './components/contexts/theme-context';
import fundo from './components/images/fundo.png'


function App() {
  return (
    <ThemeProvider>
      <CreateGlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>
  );
}

const CreateGlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none; 
  }
  body{
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
  }  
`

export default App;
