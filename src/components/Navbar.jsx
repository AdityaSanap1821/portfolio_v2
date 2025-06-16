// File: src/components/Navbar.jsx
const tabs = ['Home', 'About', 'Projects', 'Contact', 'Download CV'];

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="w-full bg-black text-white py-4 shadow-sm border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo / Icon */}
        <button
          onClick={() => setActivePage('Home')}
          className="text-2xl font-bold tracking-widest hover:text-white transition duration-300 text-gray-300"
        >
          AS
        </button>

        {/* Nav Tabs */}
        <div className="flex space-x-6">
          {tabs.map((tab) =>
            tab === 'Download CV' ? (
              <a
                key={tab}
                href="https://drive.google.com/file/d/1oJQej0cuXPHucOk4dArAMWMUxAlBskkU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-3 py-1 text-sm md:text-base font-medium text-gray-400 hover:text-white transition-colors duration-300"
              >
                {tab}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ) : (
              <button
                key={tab}
                onClick={() => setActivePage(tab)}
                className={`relative px-3 py-1 text-sm md:text-base font-medium transition-colors duration-300 
                  ${activePage === tab ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {tab}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-white transform transition-transform duration-300 
                    ${activePage === tab ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `}
                />
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

