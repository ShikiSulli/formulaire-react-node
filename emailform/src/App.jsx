import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Formulaire from './pages/formulaire/formulaire';
import Connexion from './pages/connexion/connexion';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Formulaire/>}/>
      <Route path="/connexion" element={<Connexion/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
