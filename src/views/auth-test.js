import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const AuthTest = () => {
  const { isLoading, isAuthenticated, user, loginWithRedirect, logout } = useAuth0()

  if (isLoading) return <p>Loading...</p>

  return isAuthenticated ? (
    <div style={{ padding: 100 }}>
      <p>Logged in as {user.email}</p>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Logout
      </button>
    </div>
  ) : (
    <div style={{ padding: 100 }}>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  )
}

export default AuthTest
