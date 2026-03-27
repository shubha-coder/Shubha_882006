import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav-bar">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active-link' : ''}`
        }
        end
      >
        🏠 Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active-link' : ''}`
        }
      >
        📖 About
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active-link' : ''}`
        }
      >
        ✉️ Contact
      </NavLink>
    </div>
  );
}

export default Navigation;