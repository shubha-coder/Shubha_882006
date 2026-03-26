import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './App.css';

// Home Component
function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Welcome to the Home page content.</p>
      <p>This is where the main information would go.</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>Information about this application.</p>
      <p>This demonstrates React Router navigation.</p>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>Contact us at: example@email.com</p>
      <p>Phone: (555) 123-4567</p>
    </div>
  );
}

// Component to show current URL
function URLDisplay() {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '/' : location.pathname;
  
  return (
    <div className="url-display">
      Current URL: <span className="url-path">{window.location.origin}{currentPath}</span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navigation Buttons - Using NavLink for active styling */}
        <div className="nav-container">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Content Area */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <URLDisplay />
        </div>

        {/* Lab Task Box */}
        <div className="lab-task-box">
          <p><strong>Lab Task:</strong> Click the buttons above. Notice how the URL changes without the page refreshing.</p>
        </div>

        {/* Concept Recap Box */}
        <div className="concept-box">
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