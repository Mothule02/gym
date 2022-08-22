import React from 'react'
import { Hme } from './home.styled'
import intro from '../assets/fitness-center-3.jpg'
import body from '../assets/fitness-center.jpg'
import lifting from '../assets/contact/weight-l.png'
import loss from '../assets/contact/weight-l2.png'
import cardio from '../assets/contact/heart.png'
import health from '../assets/contact/running.png'
import yoga from '../assets/yoga1.jpg'
import training from '../assets/training-1.jpg'
import ups from '../assets/fitness-center-2.jpg'
import {Link} from 'react-router-dom'

export default function Home() {
  
 
  document.querySelector('title').innerText = 'Flexa Fitness'
  return (
    <Hme>
      <div>
        <div className="intro">
          <div className="text">
            <h2>Physical and Psychological Wellbeing</h2>
            <h5>Activities Include Aerobics & Yoga </h5>
            <h5>We are commited and passionate in helping our clients every step
              of the way to achieve their their goals
            </h5>
            <h4>Secure your Physical and Mental Health by Getting in touch with us</h4>
            <div className="intro-btns">
            <Link to='contact' className='cont'>Get in Touch</Link>
            <Link to='plans' className='acti'>Our Plans</Link>
            </div>
          </div>

          <img src={intro} alt="" />
        </div>
        <h1 className='stroke'>Some Of Our Programmes For Your Ideal Body</h1>
        <div className="programmes">
          <div>
            <img src={lifting} alt="" width={50} height={50} />
            <h2>Weight Lifting</h2>
            <p>In this programme you are trained to develop your physical strength
              and the size skeletal muscels
            </p>
            
          </div>
          <div>
            <img src={loss} alt="" width={50} height={50} />
            <h2>Fat Burning</h2>
            <p>In this programme you are trained to loose certain
              amount of weight with a given diet and regular excercises.
            </p>
          </div>
          <div>
            <img src={health} alt="" width={50} height={50} />
            <h2>Health fitness</h2>
            <p>In this programme you are trained to mantain body weight with
              a proper nutrition.This include Aerobic exercise.

            </p>
          </div>
          <div>
            <img src={cardio} alt="" width={50} height={50} />
            <h2>Cardio Training</h2>
            <p>Strengthens and enlarges the heart muscle, to improve 
              its pumping efficiency and reduce
              the resting heart rate.
            </p>
          </div>
        </div>
        
        <h1 style={{textAlign: 'center'}}>Why Choose Us?</h1>
        <div className="content">
          
        <div className="images">
            <div className="group2">
              <img className='img1' src={body} alt="" />
              <img className='img4' src={ups} alt="" />
            </div>
            <div className="subg1">
              <img className='img2' src={training} alt="" />
              <img className='img3' src={yoga} alt="" />
            </div>
          </div>
          
         
          <div className="desc">
            <ul>
              <li>+25 Programmes, Including Yoga & Aerobics </li>
              <li>Custom Diet Plan on request</li>
              <li>+65 Differnt Gyming Equipment</li>
              <li>Bathrooms with Showers For That intense Workout</li>
              <li>+5 OutDoor Activities</li>
              <li>+200 Online Exercise Tips</li>
            </ul>
          </div>
          
          
        </div>
       
        <div className="b-hrs">
          
          <div>
          <h1 style={{textAlign: 'center'}}>Business Hours</h1>
          <table>   
            <thead>
              <tr>
                
                <th>Day</th>
                <th>Open</th>
                <th>Close</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mon</td>
                <td>11:00 AM</td>
                <td>07:00 PM</td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>11:00 AM</td>
                <td>07:00 PM</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>11:00 AM</td>
                <td>07:00 PM</td>
              </tr>
              <tr>
                <td>Thu</td>
                <td>11:00 AM</td>
                <td>07:00 PM</td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>11:00 AM</td>
                <td>06:00 PM</td>
              </tr>
              <tr>
                <td>Sat</td>
                <td>12:00 AM</td>
                <td>05:00 PM</td>
              </tr>
              <tr>
                <td>Sun</td>
                <td>closed</td>
                <td>closed</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
            <h1 style={{textAlign: 'center'}}>Location</h1>
            <iframe  title='gmap' 
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d459649.96468877356!2d27.755525072823904!3d-25.83603952417333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-25.5664832!2d28.0068974!4m5!1s0x1e950de1b1c01511%3A0xea53674d38974d85!2sgyms%20johannesburg!3m2!1d-26.132346599999998!2d28.067557599999997!5e0!3m2!1sen!2sza!4v1657582287723!5m2!1sen!2sza"
            width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </Hme>
  )
}
