
import linkedin from "../../assets/linkedin.svg"
import {Layout} from "antd"

const {  Footer } = Layout;

const CustomFooter = (props) => {
    const FooterBox = (footerboxprops) => {
      const { box_laebl, box_text } = footerboxprops
      return (
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: "700", fontSize: "15px" }} >{box_laebl}</span>
          <br />
          <span style={{ fontSize: "15px" }}>{box_text}</span>
        </div>
      )
    }
  
    const FollowMe = () => {
      const url ="https://www.linkedin.com/in/tirthesh-karande-7428a8148/"
      return (
        <a href={url} target="_blank">
          <img src={linkedin} />
        </a>
      );
    }
  
    const Copywrite=()=>{
      return (
        <div style={{ textAlign: 'center' }}>
        Portfolio ©{new Date().getFullYear()}<br /> Created by Tirthesh Karande
      </div>
      )
    }
  
    return (
      <Footer style={{ textAlign: 'right', height: "100px", position: "fixed", borderTop: "1px solid", bottom: "0", 
                        minWidth: "100%", paddingInline: "30px" }}>
        <div style={{ alignItems: "center", display: "Flex", justifyContent: "space-between" }}>
          <FooterBox box_laebl="Contact number" box_text="9922180669" />
          <FooterBox box_laebl="Email address" box_text="tirtheshkarande@gmail.com" />
          <FooterBox box_laebl="Follow ME" box_text={<FollowMe />} />
          <Copywrite />
        </div>
      </Footer>
    )
  }

  export default CustomFooter