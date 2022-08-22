import React from 'react'
import { Sev } from './services.styled'
import { Link } from 'react-router-dom'


export default function Services() {

  document.querySelector('title').innerText = 'Plans | Flexa fitness'
  
  return (
    <div>
      <Sev>
        <h1><i> Choose A Plan </i> Suitable For Your Needs </h1>
        <div className="plans">
          <div className="basic">
            <div className="head">Basic</div>
            <div className="price">R 450</div>
            <ul>
              <li>Acsess to all equipment</li>
              <li>2Hrs per week with a fittness marshall</li>
              <li>Eating plan</li>
              <li>Biometric assessment</li>
            </ul>
            <div className="join">
              <Link className='a-j' to=''>Join</Link>
            </div>
          </div>
          <div className="premium">
          <div className="head">Premium</div>
            <div className="price">R 750</div>
            <ul>
              <li>2 additional members under 18</li>
              <li>Acsess to all equipment</li>
              <li>5Hrs per week with a fittness marshall</li>
              <li>Eating plan</li>
              <li>Biometric assessment</li>
            </ul>
            <div className="join">
              <Link className='a-j' to=''>Join</Link>
            </div>
          </div>
          <div className="pro">
          <div className="head">Pro</div>
            <div className="price">R 1 200</div>
            <ul>
              <li>2 additional members under 18</li>
              <li>Acsess to all equipment</li>
              <li>12Hrs per week with a fittness marshall</li>
              <li>Eating plan</li>
              <li>Biometric assessment</li>
            </ul>
            <div className="join">
              <Link className='a-j' to=''>Join</Link>
            </div>
          </div>
        </div>
        <div className="form-p">
          <h1>For A Customized Plan Fill In The Form</h1>
          <div className="inputs-p">
            <div>
              <label htmlFor="">Firstname</label><br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Lastname</label><br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Phone</label><br />
              <input type="tel" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Email</label><br />
              <input type="email" name="" id="" />
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </Sev>
    </div>
  )
}
