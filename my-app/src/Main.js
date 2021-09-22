import React from 'react'
import styled from "styled-components";
import { about } from './data';
import { createGlobalStyle } from 'styled-components';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


const Main = ({title}) => {
    return (
        <MainWrapper>
        <div>
            
            {about.map((info, index) => {
                const {headline, name} = info
                return <div key={index}>
                <motion.h1 initial={{y: -550, color: "#fff" }} animate={{ y: -10, color: "#fff" }} transition={{delay: 0.1, duration: 0.5, type: "spring", stiffness: 120}}>{headline}</motion.h1>
                <h2>{name}</h2>
                </div>
             
            })}
            
            <p>A enthustiastic Information Technology <br /> student passionate about web development with primary focus on JavaScript. 
            </p>

            <button className="btn">
                <Link to="/contact">Get In Touch</Link>
            </button>

            
            
        </div>
        </MainWrapper>
    )
}


createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');


`

const MainWrapper = styled.div`



a {
    color: #fff;

}

margin-top: 100px;
display: flex;
align-items: center;
justify-content: start;
margin-left: 4rem;



h1 {
color: #6d6393;
font-weight: 500;
letter-spacing: 4px;

font-size: 20px;
text-transform: uppercase;
margin-bottom: 1rem;


}

h2 {
color: #b366ce;
font-family: 'Montserrat', sans-serif;
font-weight: 600;
letter-spacing: 1px;
font-size: 100px;
margin-top: -10px;
margin-left: -10px;
margin-bottom: 3rem;
&:hover {
    color: #e07bf3;
   

}
}

p {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 0;
    color: #fff;
    margin-top: -20px;
    

}


@media (max-width: 780px){
    
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        
       
        
    }

    p {
        display: grid;
        grid-template-columns: 1fr;
        margin-left: -3.2rem;
        
        

        
    }

    h2 {
        font-size: 60px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-left: -3.2rem;
       
        
    }

    h1 {
        font-size: 14px;
        margin-left: -3.2rem;
        padding-left: 20px;
        
    }

    .btn {
        margin-left: -3.2rem;
        width: 200px;
        height: 50px;
        margin-bottom: 1rem;
    }
   
} 
`
export default Main
