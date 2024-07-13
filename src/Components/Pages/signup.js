import React from 'react'
import './signup.css';

function signup() {
  return (
    <>
        <div className='signup_page'>
          <div className="signup">
            <h1>SIGN UP</h1>
            <div className='input_elements'>
              <p>Enter Name</p>
              <input type="text" 
              placeholder='Name'/>
              <p>Enter User Name</p>
              <input type="text" 
              placeholder='User Name'/>
              <p>Enter Password</p>
              <input type="text" 
              placeholder='Password'/>
              <p>Confirm Password</p>
              <input type="text" 
              placeholder='Confirm Password'/>
            </div>
            <button>SIGN UP</button>
          </div>
        </div>
    </>
  )
}

export default signup