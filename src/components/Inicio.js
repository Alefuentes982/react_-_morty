import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import fondo from "../img/fondoInicio.webp";

import { LoginButton } from "../Login";
import { LogoutButton } from "../Logout";
import { Profile } from "../Profile";

function Inicio() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
       
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <div>
          <img src={fondo} className="fondo" alt="fondo" />
          <LoginButton />
          </div>
        )}
      </header>
    </div>
  );
}

export default Inicio;
