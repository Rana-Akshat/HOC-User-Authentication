import React from 'react'

function withAuth(Component, isAuthenticated) {
  return (props) => {
    if (!isAuthenticated) {
        return <div>Please login to continue</div>
    }
    return <Component {...props} />
  }
}

export default withAuth