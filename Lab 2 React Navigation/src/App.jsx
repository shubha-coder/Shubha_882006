import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Home Component
function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
      <p>This is the main content area.</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>This is the About page content.</p>
      <p>Learn more about us here.</p>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>Get in touch with us!</p>
      <p>Email: contact@example.com</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "nav-btn active" : "nav-btn"
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "nav-btn active" : "nav-btn"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "nav-btn active" : "nav-btn"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Content Area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Lab Task Description */}
        <div className="lab-task">
          <p><strong>Lab Task:</strong> Click the buttons above. Notice how the URL changes without the page refreshing.</p>
        </div>

        {/* Quick Concept Recap */}
        <div className="concept-recap">
          <h3>Quick Concept Recap:</h3>
          <ul>
            <li><strong>BrowserRouter:</strong> Keeps your UI in sync with the URL.</li>
            <li><strong>Routes &amp; Route:</strong> Map a specific path (like /about) to a component.</li>
            <li><strong>Link:</strong> Used instead of <code>&lt;a&gt;</code> tags to prevent full page reloads.</li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;