import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function login() {
  return (
    <div className ="login">
        <Link to='/'>
            <img
                className='login__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png?20220213013322"
                alt="" 
            />
        </Link>
         <div className="login__container">
            <h1>
                Sign-In
            </h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />

                <button className="login__signInButton">Sign-In</button>
            </form>

            <p>
                By signing-in you agree to the blah blah blah conditions
            </p>

            <button className="login__registerButton">Create your Amazon Account</button>
         </div>
    </div>
  )
}

export default login