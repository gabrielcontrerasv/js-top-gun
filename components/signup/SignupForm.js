import React from "react";
import { FaUserAlt, FaLock, FaRegEye, FaCity } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'

export default function SignupForm() {
    return (
        <div>
            <form>
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="signup-input-form">
                        <span><FaUserAlt /></span>
                        <input type="text" placeholder="Enter full name" id="name-signup-input" required />
                    </div>
                    <div className="signup-input-form">
                        <span><AiFillMail /></span>
                        <input type="email" placeholder="Enter email" id="email-signup-input" required />
                    </div>
                </div>
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="signup-input-form">
                        <span><BsTelephoneFill /></span>
                        <input type="text" placeholder="Enter phone number" id="name-signup-input" required />
                    </div>
                    <div className="signup-input-form">
                        <span><FaCity /></span>
                        <input type="text" placeholder="Type your location city" id="name-signup-input" required />
                    </div>
                </div>
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="signup-input-form">
                        <span><FaLock /></span>
                        <input type='password' placeholder='Type password' required />
                    </div>
                    <div className="signup-input-form">
                        <span><FaRegEye /></span>
                        <input type='password' placeholder='Confirm password' required />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
