import React from 'react'
import "./InviteInvalid.css"
const InviteInvalid = () => {
  return (
    <section className="container-invite">
      <div className="img-logo-invite">
        <img src="/modernLogo.svg" alt="" />
      </div>
      <div className="container-form-invite">

      <div
        className="container-form
      "
      >
        <div className='welcomeBack'>

        <img src="/inviteInvalid.svg" alt="" />
        <h2> Invite Invalid</h2>
        <p>This invite may be expired, or you might not have permission to join.</p>
        </div>
        
        
      
        <button>Continue to Discord</button>
      </div>
      
      </div>
    </section>
  )
}

export default InviteInvalid