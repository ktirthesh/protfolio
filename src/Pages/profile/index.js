import React from 'react'
import './index.css'
import profile from "../../assets/profile_image.jpeg"
function Profile(props) {
    return (
        <div style={{backgroundColor: props.background_color}} className='profile_component'>
            <div className='profile-subcomponent'>
            <div className='profile-image-box'>
                    <img src={profile} className='profile-image'/>
            </div>
            <div className='profile-content'>
                <h1>
                    Tirthesh Suresh Karande
                </h1>
            <div class="waviy">
          Software Developer
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
