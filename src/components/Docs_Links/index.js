import React from 'react'
import SubComponent from '../subcomponent'
import linkedin from "../../assets/linkedin.svg"
import file from "../../assets/TIRTHESH_KARANDE_FULL_STACK_PYTHON.pdf"
import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

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
              <MailOutlined style={{  padding:"10px", fontSize:'24px' }} />   <p>tirtheshkarande@gmail.com </p>
            </div>
            
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "start", paddingBottom: "10px" }}
            >
                <PhoneOutlined style={{  padding:"10px", fontSize:'24px' }}   />   <p> +91 9922180669</p>
            </div> */}
           
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "start", paddingBottom: "10px" }}
            >
                <LinkedinOutlined style={{  padding:"10px", fontSize:'24px' }} />   <a target="_blank" href='https://www.linkedin.com/in/tirthesh-karande-7428a8148/'>https://www.linkedin.com/in/tirthesh-karande-7428a8148/ </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "start", paddingBottom: "10px" }}>
            <GithubOutlined style={{  padding:"10px", fontSize:'24px' }} /><a target="_blank" href='https://github.com/ktirthesh'>https://github.com/ktirthesh </a>
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
