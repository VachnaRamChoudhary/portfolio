import React from 'react'
import { Avatar } from '@mui/material';
import { fontSize } from '@mui/system';


export default function portfolio() {
  return (
    <>
    <div style={{color:'white',margin:'24vh 1%',display:'flex',flexWrap:'wrap',flexDirection:'row', justifyContent:'space-around'  }}>
        <div style={{paddingTop:'4vh'}}>
            <h1>Hi There!</h1>
            <h1>I'm Vachna Ram</h1>
            <h1>Software Devloper</h1>
        </div>
        <div>
        <Avatar
            alt="Remy Sharp"
            src="profile.jpg"
            sx={{ width: 300, height: 300, minWidth:80, minHeight:80}}
            />
        </div>
    </div>
    <div style={{width:'100%'}}>
        <h1 style={{textAlign:'center',color:'yellow', fontFamily:'cursive'}}>  
              LET ME INTRODUCE MYSELF
        </h1>
        <div style={{textAlign:'center',color:'white', fontSize:'1.2rem'}}>
            <p>
                I am a Full Stack Web as well as App Developer.
            </p>
            <p>
                I am fluent in languages like C++ and Javascript.
            </p>
            <p>
                My field of Interest is to Develop highly interactive Front end / User Interfaces 
                for Web and mobile applications and also developing backends using the MERN Stack.

            </p>
            <p>
                I use React for front-end web development. 
                I think it is one of Node.js and the best library for front-end development. 
                For Android and IOS Apps, I use React Native
            </p>
        </div>
    </div>
    </>
  )
}
