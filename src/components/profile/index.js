import React from 'react'
import './index.css'
import profile from "../../assets/profile_image.jpeg"
function Profile() {
    return (
        <div className='profile_component'>
            <div className='profile-subcomponent'>
            <div className='profile-image-box'>
                    <img src={profile} className='profile-image'/>
            </div>
            <div className='profile-content'>
                <h1>
                    Tirthesh Suresh Karande
                </h1>
            <div class="waviy">
            <span >S</span>
            <span >o</span>
            <span >f</span>
            <span >t</span>
            <span >w</span>
            <span >a</span>
            <span >r</span>
            <span style={{marginRight:"20px"}}>e</span>

            <span > </span>
            <span >d</span>
            <span >e</span>
            <span >v</span>
            <span >e</span>
            <span >l</span>
            <span >o</span>
            <span >p</span>
            <span >e</span>
            <span >r</span>
            </div>

                <h3>
                    Full Stack Developemnt
                </h3>
            </div>
            </div>
        </div>
    )
}

export default Profile
