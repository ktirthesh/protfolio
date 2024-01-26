import React from 'react'
import SubComponent from '../subcomponent'
import linkedin from "../../assets/linkedin.svg"
import file from "../../assets/TIRTHESH_KARANDE_FULL_STACK_PYTHON.pdf"

function LinkandDocs(props) {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = file;
        link.target = "_blank"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <SubComponent>
            <h1>
                Links and Documents
            </h1>
            <img style={{ color: "#0a66c2" }} src={linkedin}></img> :  <a target="_blank" href='https://www.linkedin.com/in/tirthesh-karande-7428a8148/'>https://www.linkedin.com/in/tirthesh-karande-7428a8148/ </a>
            <p>github : <a target="_blank" href='https://www.linkedin.com/in/tirthesh-karande-7428a8148/'>https://www.linkedin.com/in/tirthesh-karande-7428a8148/ </a> </p>
            <div  className='button_on_hower' onClick={() => downloadFile()}>
                Download Resume
            </div>
            <div  className='button_on_hower' onClick={() => downloadFile()}>
                Download Cover Letter
            </div>
            
        </SubComponent>
    )
}

export default LinkandDocs
