import React from 'react'
import {clamp, easeInOut, motion, useTime, useTransform} from "framer-motion"

export default function Animation() {
    const myVariant={
        first : {width:100,height:100, backgroundColor:"skyblue",
            margin:"auto",marginTop:45
        },
        
    }
    const myTime =useTime();
    const rotate = useTransform(myTime,[0,5000],[0,360],{clamp:false})
 
  return (
    <div>
          
        <motion.div variants={myVariant} animate={"first"}
      style={{rotate}}
       >

        </motion.div>
        <motion.h1 animate={{color:"magenta",fontSize:40,x:20,y:50}}
        whileHover={{color:"black"}}>Welcome to React Animation</motion.h1><br/><br/>


        <motion.div animate={{width:150,height:150,backgroundColor:'blue'}}
        drag
        dragConstraints={{top:0, left:0,right:0,bottom:0}}
        dragElastic={1}>Drag Me

        </motion.div>
    </div>
  )
}
