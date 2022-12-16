import React from 'react'
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
 //import MenuItem from '@mui/material/MenuItem';

export default function CodingProfile() {
    const pages=['GeeksForGeeks', 'Leetcode', 'Codechef','Codeforces'];
    let links=[
        'https://auth.geeksforgeeks.org/user/vachnaram/practice/', 
        'https://leetcode.com/VachnaRam/',
        'https://www.codechef.com/users/vachnaram',
         'https://codeforces.com/profile/Vachna'
        ]


    const content = pages.map((page,i) =>
    <a href={`${links[i]}`}  target='_blank' style={{textDecoration: 'none'}}>
        <div className='container'  style={{minWidth:'250px',width:'25vw',border:'4px solid black',borderRadius:'30px',margin:'20px',textAlign:'center',backgroundColor:'rgb(58 249 5 / 31%)'}}>
            <div style={{textAlign:'center'}}>
                <img style={{height:'130px',minWidth:'200px'}} src={`${page}.png`} alt="No found" />
            </div>
            <div key={page} style={{color:'white', minWidth:'300px',textAlign:'center'}}>
                {page}
            </div>
            
        </div>
    </a>
  );

  return (
    <div style={{color:'white'}}>
        <h1 style={{textAlign:'center'}}>My Problem Solving Skills</h1>
        <div  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',fontSize:'1.6rem'}}>
            {content}
        </div>
    </div>
  )
}
