import React from 'react'
import SubComponent from '../subcomponent'

function About(props) {
    return (
        <SubComponent ref={props.ref}>
            <h1>
                About
            </h1>
            <p>
                hello my namr is tirthesh karande
            </p>
        </SubComponent>
    )
}

export default About
