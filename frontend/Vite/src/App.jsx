
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ArticlesPage } from './pages/Articles';
import { HistoryPage } from './pages/History';
import { NoFoundPage } from './pages/404';
import { MythsPage } from './pages/Myths';
import { AboutPage } from './pages/About';
import { ArticlePage } from './pages/Article';
import { ProjectsPage } from './pages/Projects';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/myths" element={<MythsPage/>} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/article/:id" element={<ArticlePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/*" element={<NoFoundPage/>} />
      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
