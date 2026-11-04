import React, { useState } from 'react'

import { SITE_PASSWORD, UNLOCK_STORAGE_KEY } from '../config/site-access'
import './password-gate.css'

const isUnlocked = () => {
  try {
    return window.sessionStorage.getItem(UNLOCK_STORAGE_KEY) === 'true'
  } catch (e) {
    return false
  }
}

const PasswordGate = ({ children }) => {
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (value === SITE_PASSWORD) {
      try {
        window.sessionStorage.setItem(UNLOCK_STORAGE_KEY, 'true')
      } catch (e) {}
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  if (unlocked) {
    return children
  }

  return (
    <div className="pg-screen">
      <form className="pg-card" onSubmit={handleSubmit}>
        <span className="pg-eyebrow Epilogue-17Bold">Protected</span>
        <h1 className="pg-title Epilogue-36Bold">This page needs a password</h1>
        <p className="pg-desc Epilogue-17">
          Enter the password you were given to view this case study.
        </p>
        <input
          type="password"
          className="pg-input Epilogue-17"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
            setError(false)
          }}
          placeholder="Password"
          autoFocus
        />
        {error && <p className="pg-error Epilogue-17">Incorrect password, try again.</p>}
        <button type="submit" className="pg-submit Epilogue-17Bold">
          Unlock
        </button>
      </form>
    </div>
  )
}

export default PasswordGate
