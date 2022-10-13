import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
   

    <button style={{position: 'fixed', top: '1.2%', right: '75%', height: '6.5%', width: '5.5%', textAlign: 'center', justifyContent: 'center'}} type="button" class="btn btn-secondary btn-sm"  onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
    
  );
};
