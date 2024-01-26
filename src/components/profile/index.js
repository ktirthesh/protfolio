import React from 'react'
import './index.css'
import profile from "../../assets/profile_image.jpeg"
function Profile() {
    return (
        <div className='profile_component'>
            <div className='profile-subcomponent'>
            <div className='profile-image-box'>
                {/* <div className='profile-image'> */}
                    <img src={profile} className='profile-image'/>
                {/* </div> */}
            </div>
            <div className='profile-content'>
                <h1>
                    Tirthesh Suresh Karande
                </h1>
                <h2>
                    Softeware Engineer
                </h2>
                <h3>
                    Full Stack Developemnt
                </h3>
            </div>
            </div>
        </div>
    )
}

export default Profile
