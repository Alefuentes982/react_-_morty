import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import logo from "./logo.svg";
import imageUrl from './img/backR&M.jpg';
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={imageUrl} className="imagenBack" alt="Background" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;