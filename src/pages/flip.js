/** @jsx jsx */
import { jsx } from 'theme-ui'
import {useState} from "react"
import MagicSauce from "../components/magic-sauce.js"


const Card = (props)=>{
  // const [isFlipped, setFlip]=useState(false)
  // function flip(){
  //   setFlip(!isFlipped)
  // }
  return(
    <div
      style={{
        margin:"auto",
        width:"500px",
        height:"700px",
        borderRadius:"10px",
      }}
    >
    {props.children}
    </div>
  )
}

const Inner = (props)=>{
  const [isFlipped, setFlip]=useState(false)
  function flip(){
    setFlip(!isFlipped)
  }
  return(
    <div
    style={{
      position:"relative",
      width:"100%",
      height:"100%",
      textAlign:"center",
      transition:"transform 0.8s",
      transformStyle: "preserve-3d",
      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
    }}
    onClick={flip}
    >
    {props.children}
    </div>
  )
}

const Back = (props)=>{
  return(
    <div
      style={{
        margin:"auto",
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundColor:"rgba(76, 150, 179, 1)",
        position: "absolute",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
    {props.children}
    </div>
  )
}

const Front = (props)=>{
  return(
    <div
      style={{
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        position: "absolute",
        backfaceVisibility: "hidden",
      }}
    >
    <img
      src={props.image}
      style={{
        borderRadius:"10px",
        width:"500px"
      }}
    />
    </div>
  )
}



const Flip = ()=>{
  return(
    <div>
      <div
      style={{
        width: "500px",
        height: "200px",
        backgroundColor: "rgba(245, 223, 77, 1)",
        borderRadius: "10px",
        margin: "auto",
      }}
      >

      <h1> "flip it" </h1>
      </div>

    <Card>
    <Inner>
      <MagicSauce flavor="glitterbomb"/>
      <Front image="https://files.slack.com/files-pri/T0HTW3H0V-F01LXQDC5QU/player_cards.png?pub_secret=8c1a206660"
        />
      <Back>
        <h1
        style={{
          color:"white",
        }}
        >Text</h1>
      </Back>
    </Inner>
    </Card>
    </div>
  )
}

export default Flip
