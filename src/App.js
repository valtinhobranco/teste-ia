
//? components
import { Ia } from './components/Ia/index.js';
import { PaginaIntroducao } from './components/PaginaIntroducao/index.js';
import { PaginaLogin } from './components/PaginaLogin/index.js';


//? styles
import './App.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">
     <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaIntroducao />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Ia" element={<Ia />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
