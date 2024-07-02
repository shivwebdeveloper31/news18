
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from "./Components/SideBar";
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import NetworkIssue from './Components/Pages/NetworkIssue';
import GAIssue from './Components/Pages/GAIssue';
import TechnicalIssue from './Components/Pages/TechnicalIssue';
import Purged from './Components/Pages/Purged';
import Human from './Components/Pages/HumanError';
import Cache from './Components/Pages/Cache';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='Section'>
          <div className='Sidebar_Section'>
            <SideBar />
          </div>
          <div className='Display_Section'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/network" element={<NetworkIssue />} />
              <Route path="ga" element={<GAIssue/>} />
              <Route path="technical" element={<TechnicalIssue/>} />
              <Route path="purged" element={<Purged/>} />
              <Route path="human" element={<Human/>} />
              <Route path="cache" element={<Cache/>} />
            </Routes>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
