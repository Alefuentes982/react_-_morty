<<<<<<< HEAD
=======
import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import logo from "./logo.svg";
import imageUrl from './img/backR&M.jpg';
>>>>>>> 6517f0e05ef7277649ebd72a6f3ab77af35724e1
import "./App.css";
import "./components/Inicio"
import Inicio from "./components/Inicio";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <Inicio/>
=======
        <img src={imageUrl} className="imagenBack" alt="Background" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
>>>>>>> 6517f0e05ef7277649ebd72a6f3ab77af35724e1
      </header>
    </div>
  );
}

export default App;