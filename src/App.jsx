// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'About': return <About />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent hover:scrollbar-thumb-purple-400 transition-all duration-300">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
