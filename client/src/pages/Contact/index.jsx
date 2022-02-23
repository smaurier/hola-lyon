import React, { useRef } from 'react'

function Contact() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    }
    console.log(data)
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
  }

  return (
    <>
      <h1>Contactez-moi !</h1>
      <form>
        <div className="name">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
            ref={firstNameRef}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
            ref={lastNameRef}
          />
        </div>
        <div className="mail">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="example@corp.com"
            tabIndex="3"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="message">Message : </label>
          <textarea
            placeholder="Votre message ..."
            className="message"
            name="message"
            tabIndex="4"
            ref={messageRef}
          />
        </div>
        <button onClick={handleSubmit} type="submit" className="send">Envoyer</button>
      </form>
    </>
  )
}

export default Contact
