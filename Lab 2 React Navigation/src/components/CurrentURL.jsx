// Add this component to show the current URL
function CurrentURL() {
  const location = useLocation();
  
  return (
    <div className="url-display">
      <strong>Current URL:</strong> {window.location.origin}
      <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
        {location.pathname === '/' ? '/' : location.pathname}
      </span>
    </div>
  );
}

