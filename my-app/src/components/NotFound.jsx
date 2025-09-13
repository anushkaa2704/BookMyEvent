import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <a href="/" className="btn btn-primary">Go Back Home</a>
        </div>
      </div>
    </div>
  )
}

export default NotFound