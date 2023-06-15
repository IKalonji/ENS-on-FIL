import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EnsLinkPage from './Pages/ens-link.page';
import HomePage from './Pages/Home.Page';
import {Navbar} from './Components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ens-link' element={<EnsLinkPage />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
