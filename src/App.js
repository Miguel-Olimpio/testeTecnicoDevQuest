import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './components/contexts/theme-context';

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
    background-image: linear-gradient(
      
      45deg,#D3D3D3,#F0FFFF
      );
  }  
`

export default App;
