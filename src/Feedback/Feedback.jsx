import React from 'react'
import "../Feedback/Feedback.css"

export default function Feedback() {


  return (
    <div className='wrapper'>
      <div className='form-box feedback'>
        <form action=''>
          <h1>Feedback</h1>

          <div className='input-box'>
            <input type="text" placeholder='Username' required/>
          </div>
          <div className='input-box'>
            <input type="email" placeholder='Email' required/>
          </div>
          <div className='input-box'>
            <textarea type="text" placeholder='share your thoughts' className='textarea'/>
          </div>
          <br></br>
          <br></br>
          <button type='submit' className='button'>Submit</button>

        </form>
      </div>
    </div>
  )
}
