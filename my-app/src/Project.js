import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import unwind from "./unwind-project.png"
import { unwind_info } from './data'
import {ImGithub} from "react-icons/im"
import {GoLinkExternal} from "react-icons/go"
import { GoCode } from "react-icons/go"
import { FaReact } from "react-icons/fa"


const Project = () => {
    return (
        
        <Wrapper>
            <div className="technology-info"><GoCode/>
                <li>react.js</li>
                <li>styled-components</li>
                </div>
            <div><img src={unwind} alt="unwind" /></div>
            <div className="project-info ">
                {unwind_info.map((items, index) => {
                   const {name, about} = items;
                   return <div>
                       <a href="https://github.com/gretasubasic/e_commerce_project"><ImGithub /></a>
                        <a href="https://eager-archimedes-0797d7.netlify.app/"> <GoLinkExternal /></a>
                       <h3>{name}</h3>
                       <p className="unwind-paragraph">{about}</p>
                      
                   </div>
                })}
                 
                </div>
                
                
            
        </Wrapper>
    )
}


createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lekton:wght@400;700&display=swap');




`


const Wrapper = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
margin: 3rem;
grid-column-gap: 1rem; 
align-items: flex-end;


.title {
    text-transform: uppercase;
}


img {
    opacity: .25;
    width: 600px;
    margin-bottom: 3rem;
    border-radius: 5px;
    
    &:hover {
        opacity: 100%;
    }
    
    
}

li {
    list-style-type: none;
    margin: 1rem;
}

.technology-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    color: #bea9de;
    font-size: 13px;
}

.project-info {
    background: #0a0e3f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 12px white;
    border-radius: 5px;
    opacity: 100%;
    box-sizing: border-box;
    position: relative;
    
    
}

    .unwind-paragraph {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 1rem;
    color: white;
    }

    svg {
    width: 30px;
    height: 30px;
    margin: 2rem;
    
}
    
    
    h3 {
    margin: 1rem;
    font-size: 20px;
    color: white;
    font-weight: 900;
    }

    @media (max-width: 992px) {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    
       img {
           width: 100%;
       }

    .project-info {
        width: 100%;
    }
    
    }

    

    

 


    
    
}
`
export default Project
