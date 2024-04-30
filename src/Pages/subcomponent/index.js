import React from 'react'

function SubComponent(props) {
  return (
    <div
    ref={props.ref}
    style={{
        paddingBottom: "50px",
        paddingTop:"20px",
        paddingLeft:"100px",
        paddingRight:"100px",
        borderRadius: "10px",
        backgroundColor: "white"
    }}
>
        {props.children}
      
    </div>
  )
}

export default SubComponent
