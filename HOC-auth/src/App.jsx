import React, { useState } from 'react'
import { LoginPage } from './utils/LoginPage'
import { Dashboard } from './utils/Dashboard'
import withAuth from './utils/withAuth'
import './App.css'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const AuthenticatedDashboard = withAuth(Dashboard, isAuthenticated)

  return (
    <>
      <div>
        {!isAuthenticated ? (
          <LoginPage login = {login} />
        ) : (
          <AuthenticatedDashboard logout = {logout} />
        )}
      </div>
    </>
  )
}

export default App
