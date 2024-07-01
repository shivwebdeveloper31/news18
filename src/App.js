
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from "./Components/SideBar";
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Network_issue from './Components/Pages/Network_issue';
import GA_issue from './Components/Pages/GA_issue';
import Technical_issue from './Components/Pages/Technical_issue';
import Purged from './Components/Pages/Purged';
import Human from './Components/Pages/Human_Error';
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
              <Route path="/network" element={<Network_issue />} />
              <Route path="ga" element={<GA_issue/>} />
              <Route path="technical" element={<Technical_issue/>} />
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
