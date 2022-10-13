import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Navbar from './Navbar';
import { LogoutButton } from "../Logout";
import Card from './Card'



export const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
   
    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div>
               <Navbar />                
               <LogoutButton /> 
              
               <Card /> 
            </div>
        )
    )
}