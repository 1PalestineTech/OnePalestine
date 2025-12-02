
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { HistoryPage } from './pages/History';
import { NoFoundPage } from './pages/404';
import { MythsPage } from './pages/Myths';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/myths" element={<MythsPage/>} />
        <Route path="/*" element={<NoFoundPage/>} />
      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
