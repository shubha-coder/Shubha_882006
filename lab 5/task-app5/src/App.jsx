import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [permission, setPermission] = useState(Notification.permission)

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }
    const perm = await Notification.requestPermission();
    setPermission(perm);
  }

  const sendNotification = () => {
    if (permission === 'granted') {
      new Notification("Hello from React!", {
        body: "This is a basic push notification.",
        icon: "/vite.svg" // fallback icon using Vite logo
      });
    } else {
      alert("Please request permission first.");
    }
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>React Browser Notifications</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <p>Current Permission Status: <strong>{permission}</strong></p>
        {permission !== 'granted' && (
          <button onClick={requestPermission} style={{ marginRight: '1rem', padding: '10px' }}>
            Request Permission
          </button>
        )}
      </div>

      <div>
        <button onClick={sendNotification} disabled={permission !== 'granted'} style={{ padding: '10px' }}>
          Send Test Notification
        </button>
      </div>
    </div>
  )
}

export default App
