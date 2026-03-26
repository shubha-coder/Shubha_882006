function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">📞 Contact</h1>
      <div className="page-card">
        <p className="page-description">
          Feel free to reach out for questions about this navigation pattern.
          React Router makes building single-page applications intuitive and scalable.
        </p>
        <ul className="feature-list">
          <li>📧 Email: lab02@reactrouter.demo</li>
          <li>🐙 GitHub: /react-router-navigation-lab</li>
          <li>🌐 Live demo: URL changes dynamically</li>
        </ul>
        <div className="demo-badge">
          💡 Tip: Use the buttons above to see the URL path update instantly.
        </div>
      </div>
    </div>
  );
}

export default Contact;