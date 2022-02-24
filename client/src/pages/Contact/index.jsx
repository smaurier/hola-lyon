import React, { useState } from 'react'
import Input from '../../components/Input'

function Contact() {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)

  const handleChange = (event) => {
    switch(event.target.name){
      case "firstName" :
        setFirstName(event.target.value)
        break;
      case "lastName" :
        setLastName(event.target.value)
        break;
      case "email" :
        setEmail(event.target.value)
        break;
      case "message" :
        setMessage(event.target.value)
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      firstName, lastName, email, message
    }
    console.log(data)
  }

  return (
    <div className='contact'>
      <h1>Contactez-moi</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <Input label="Prénom" type="text" name="firstName" className="firstName" tabIndex="1" onChange={handleChange}/>
        </div>
        <div className='form-input'>
          <Input label="Nom" type="text" name="lastName" className="lastName" tabIndex="2" onChange={handleChange}/>
        </div>
        <div className='form-input'>
          <Input label="Email" type="mail" name="email" className="email" tabIndex="3" placeholder="example@corp.com" onChange={handleChange}/>
        </div>
        <div className='form-input'>
          <Input label="Votre Message" type="textarea" name="message" className="message" tabIndex="4" placeholder="Votre message ..." onChange={handleChange}/>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact
