import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify.js';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    console.log("The token is 👉", hash);

    if(_token){
      setToken(_token)
    }
  }, []);

  return (
    <div className="app">
    {token ? <h1>I am logged in</h1>:<Login />}
    </div>
  );
}

export default App;
