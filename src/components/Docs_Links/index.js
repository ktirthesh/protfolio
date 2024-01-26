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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "start", paddingBottom: "10px" }}
            >
                <img style={{ color: "#0a66c2" ,padding:"10px"  }} src={linkedin}></img>   <a target="_blank" href='https://www.linkedin.com/in/tirthesh-karande-7428a8148/'>https://www.linkedin.com/in/tirthesh-karande-7428a8148/ </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "start", paddingBottom: "10px" }}>
                <img height={"30px"} width={"30px"} style={{margin:"10px"}} src="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg"></img>  <a target="_blank" href='https://github.com/ktirthesh'>https://github.com/ktirthesh </a>
            </div>
            <div className='button_on_hower' onClick={() => downloadFile()}>
                Download Resume
            </div>
            <div className='button_on_hower' onClick={() => downloadFile()}>
                Download Cover Letter
            </div>

        </SubComponent>
    )
}

export default LinkandDocs
