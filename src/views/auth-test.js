import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const AuthTest = () => {
  const { isLoading, isAuthenticated, user, loginWithRedirect, logout } = useAuth0()

  if (isLoading) return <p style={{ color: '#fff', padding: 100 }}>Loading...</p>

  return isAuthenticated ? (
    <div style={{ padding: 100, color: '#fff' }}>
      <p>Logged in as {user.email}</p>
      <button
        style={{ color: '#fff' }}
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Logout
      </button>
    </div>
  ) : (
    <div style={{ padding: 100, color: '#fff' }}>
      <button
        style={{ background: '#fff', color: '#000' }}
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  )
}

export default AuthTest
