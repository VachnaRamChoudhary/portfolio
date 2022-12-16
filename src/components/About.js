import React from 'react'

export default function About() {
  return (
    <>
    <div style={{margin:'4%', color:'white', fontSize:'1.4rem', display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
        <div style={{paddingTop:'6%',maxWidth:'700px'}}>
            <div style={{width:'auto'}}>
                <h1 style={{textAlign:'center'}}>Know Who I'M</h1>
            </div>
            <div style={{}}>
                <p>
                    Hi Everyone, I am Vachna Ram from Delhi, India.
                </p>
                <p>
                    I am a final year student pursuing B.Tech in Electrical and Electronics Engineering
                     from National Institute of Technology,Delhi.
                </p>
                <p>
                Apart from coding, some other activities that I love to do!
                <ul>
                    <li>
                        Playing Games
                    </li>
                    <li>
                        Watching Movies/Web Series
                    </li>
                    <li>
                        Eating Delicious Food
                    </li>
                </ul>
                </p>
            </div>
        </div>
        <div>
            <img src="about_img.png" style={{height:'60vh',width:'47vh', paddingTop:'10%'}} alt="RRR" />
        </div>
        
    </div>
    </>
  )
}
