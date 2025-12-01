
import './App.css';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'

import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
        <Navbar />
      <Footer /></>} />
      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
