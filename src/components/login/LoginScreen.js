import React from 'react'

const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    // console.log('clic button')
    history.push('/marvel')
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
