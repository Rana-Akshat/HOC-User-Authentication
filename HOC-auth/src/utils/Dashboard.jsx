import React from 'react'

export const Dashboard = ({ logout }) => {
  return (
    <div className='container'>
        <h2>Dashboard</h2>
        <div className="logout-bttn">
        <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}
