import React from 'react'
import SubComponent from '../subcomponent'

function About(props) {
    return (
        <SubComponent ref={props.ref}>
            <h1>
                About
            </h1>
            <p>
            Experienced developer proficient in React.js, Python, and Django, specializing in FinTech solutions. Adept at crafting seamless and innovative applications, I bring a robust skill set that spans both frontend and backend development. With a deep understanding of financial technology, I've contributed to projects that enhance user experiences and data security. Beyond coding, I possess expertise in deploying applications on AWS, ensuring scalable and efficient solutions. Committed to staying at the forefront of technology trends, I leverage my skills to bridge the gap between finance and cutting-edge software development for impactful and future-ready solutions.
            </p>
        </SubComponent>
    )
}

export default About
