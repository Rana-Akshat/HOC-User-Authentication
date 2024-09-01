import React from 'react'

export const LoginPage = ({ login }) => {
  return (
    <div className='container'>
        <h2>Login Page</h2>
        <div className='login-bttn'>
        <button onClick={login}>Login</button>
        </div>
    </div>
  )
}
