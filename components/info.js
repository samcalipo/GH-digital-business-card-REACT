import React from 'react'

export default function Info(){
    return(
        <div className="info-div">
            <img src="../profilepic.png"/>
            <h1>Abdul Samad Ahmad</h1>
            <p>Frontend Developer</p>
            <small>abdulsamadahmad.website</small>
            <div>
                <a className="info--email_btn" href="#"><i class="fa fa-envelope" aria-hidden="true"></i> Email</a>
                <a className="info--linkedin_btn" href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
            </div>
        </div>
    )
}