import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Notification from './pages/Notification.jsx';
import Time from './pages/Time.jsx';
import Analytics from './pages/Analytics.jsx';
import Task from './pages/Task.jsx';
import Eye from "./pages/Eye.jsx"
import Team from './pages/Team.jsx'




const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Notification />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Time" element={<Time />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Eye" element={<Eye />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Team" element={<Team />} />
      
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;