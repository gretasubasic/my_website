import React from 'react'
import styled from 'styled-components'
import { info } from './data'
import { createGlobalStyle } from 'styled-components';
import Untitled from "./Untitled (1).svg"




const About = () => {
    return (
        <AboutWrapper>
            <h2>About Me</h2>
        <div>
        
            {info.map((information) => {
            const {info, title} = information;
            return <div className="about">
                   <p>{info}</p>
                </div>
          
            })}
        
        </div>
        </AboutWrapper>
    )
}

createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');






`

const AboutWrapper = styled.div`



display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 16px;
letter-spacing: 1px;
line-height: 3px;
margin-top: 6rem;



.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    
    
}





p {
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
align-content: center;
color: #edf5e0;
padding: 2rem;
font-weight: 100;
width: 700px;


}

h2 {
    color: #b366ce;
    letter-spacing: 1px;
    font-size: 32px;
    text-transform: uppercase;
    &:hover {
    color: #e07bf3;
   
    }
}





@media (max-width: 780px) {
    .about {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        
    }
   

    p {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
    }

    img {
        display: none;
    }
}
}




`

export default About
