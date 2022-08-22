import axios from 'axios'
import React from 'react'
import { Con } from './contact.styled'


export default function Contact() {

  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')

  document.querySelector('title').innerText = 'Contact | Flexa Fitness'
  const onSubmit = ()=>{
    const formData ={
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      subject: subject,
      message: message
    }
    axios.post('https://us-central1-siteserver-1a502.cloudfunctions.net/api/form', formData)
  }
  return (
    <div>
      <Con>
        <h1>All Form Fields Are Required*</h1>
        <div className="form">
          <div className="inputs">
            <div style={{margin: '10px'}}>
            <input type="hidden" name="" />
            <div>
              <label htmlFor="">Firstname:</label><br />
              <input onChange={(e)=>setFirstname(e.target.value)} value={firstname} type="text" />
            </div>
            <div>
              <label htmlFor="">Lastname:</label><br />
              <input onChange={(e)=>setLastname(e.target.value)} value={lastname} type="text" />
            </div>
            <div>
              <label htmlFor="">Email:</label> <br />
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" />
            </div>
            <div>
              <label htmlFor="">Phone:</label><br />
              <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="phone" />
            </div>
            </div>
            <div style={{margin: '10px'}}>
              <div>
                <label htmlFor="">This is about? :</label><br />
                <select onChange={(e)=>setSubject(e.target.value)} name="" id="">
                  <option value="Diet plan Inquery">Diet plan Inquery</option>
                  <option value="Suggestions">Suggestions</option>
                  <option value="Exescise Routine Tips">Exescise Routine Tips</option>
                  <option value="Custom membership plan">Custom membership plan</option>
                  <option value="Critics">Critics</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Message:</label><br />
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} name="" id="" rows="10"></textarea>
              </div>
            </div>
            </div>
          <div className="submit">
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </Con>
    </div>
  )
}
