import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="form-container" style={{ minHeight: "90vh" }}>
          <h4 className="title text-center mb-5">Contact Us</h4>
        <form action='https://formspree.io/f/xbjepbke' method='POST'>
        <div className="mb-3">
            <input
              type="text"
              name="username"
              
              className="form-control"
            
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              
              className="form-control"
            
              placeholder="Enter Your Email"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <textarea
              type="message"
              name = "message"
             
              className="form-control"
          
              placeholder="your message"
              required
              autoFocus
            />
          </div>
         
          <button type="submit" className="btn btn-primary btn1">
            SEND
          </button>
         
        </form>
      </div>
    </>
  )
}

export default Contact