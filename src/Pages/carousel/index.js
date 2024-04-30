
import React from 'react';
import { Carousel } from 'antd';
import "./index.css"


const Banner = () => {
    const BannerContent = (props) => {
        return (
            <>
                {props.profile_image ?
                    <div style={{minHeight:"350px"}} >
                        <div style={{ minHeight: "150px", minWidth: "150px" }}>
                       <img src={null}></img>

                        </div>

                    </div> : null}
                <div style={{minHeight:"350px"}}>
                    <h1>
                        {props.heading}
                    </h1>
                </div>

            </>
        )


    }
    const images_details =[
        {className:"banner_image1",profile_image:"hello",heading:"Tirthesh Karande"},
        {className:"banner_image2", heading:"Need  an IT support"},
        {className:"banner_image2", heading:"Create ML model and deploy it "},
        ]

    return(
    <Carousel adaptiveHeight={true}  autoplay>
        {images_details.map(
            (banner_info,index ) => {
                return <div className={ ` ${banner_info.className}`}>
                    <div className='bg-text'>
                        <BannerContent {...banner_info}/>
                </div>
                
                </div>;
             }
         )}
    </Carousel>

)
}
export default Banner;