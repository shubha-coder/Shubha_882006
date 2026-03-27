function About() {
  return (
    <div className="page-container">
      <h1 className="page-title">📘 About This Lab</h1>
      <div className="page-card">
        <p className="page-description">
          <strong>Lab 02 Objective:</strong> Understand how to switch between components 
          using React Router. We use <code style={{background:'#e2e8f0', padding:'0.2rem 0.4rem', borderRadius:'6px'}}>&lt;BrowserRouter&gt;</code>,{' '}
          <code style={{background:'#e2e8f0', padding:'0.2rem 0.4rem', borderRadius:'6px'}}>&lt;Routes&gt;</code>,{' '}
          <code style={{background:'#e2e8f0', padding:'0.2rem 0.4rem', borderRadius:'6px'}}>&lt;Route&gt;</code>, and{' '}
          <code style={{background:'#e2e8f0', padding:'0.2rem 0.4rem', borderRadius:'6px'}}>&lt;Link&gt;</code> components.
        </p>
        <hr />
        <p className="page-description">
          ✅ <strong>BrowserRouter</strong> keeps UI in sync with the URL.<br />
          ✅ <strong>Routes & Route</strong> map specific paths (like <strong>/about</strong>) to components.<br />
          ✅ <strong>Link</strong> components replace traditional <code>&lt;a&gt;</code> tags to prevent full-page reloads.
        </p>
        <div className="demo-badge">
          🧪 React Router v6 — modern client-side routing
        </div>
      </div>
    </div>
  );
}

export default About;