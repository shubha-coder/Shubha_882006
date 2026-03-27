function Home() {
  return (
    <div className="page-container">
      <h1 className="page-title">🏠 Home</h1>
      <div className="page-card">
        <p className="page-description">
          Welcome to the <strong>React Router Navigation Lab</strong>. This is the 
          Home page. Notice how clicking the buttons changes the URL without any 
          full page refresh — that's the power of client-side routing!
        </p>
        <ul className="feature-list">
          <li>✨ Seamless navigation with React Router</li>
          <li>⚡ No full page reloads, blazing fast transitions</li>
          <li>📌 URL stays in sync with the displayed content</li>
        </ul>
        <div className="demo-badge">
          ⚡ Current view: Home dashboard
        </div>
      </div>
    </div>
  );
}

export default Home;