import React from 'react'

import styled from "styled-components"
import logo from "./Untitled (1).svg"
import { Link } from 'react-router-dom'
import { links } from './data'
import {createGlobalStyle} from "styled-components"
import { motion } from "framer-motion"
import {GiHamburgerMenu} from "react-icons/gi"
import { useGlobalContext } from './context/context'
import letterG from "./letter-g.svg"


const Navbar = () => {
    const { openSidebar } = useGlobalContext()
    return (
       
        <Wrapper>
        <motion.div className="header" initial={{y: -50, color: "#fff" }} animate={{ y: -10, color: "#8de4af" }} transition={{delay: 0.1, duration: 0.2, type: "spring", stiffness: 200}}>
        <img src={letterG} alt="" />
           <ul>
          
               {links.map((link) => {
                const {id, url, text} = link
                return <li key={id}><Link to={url}>{text}</Link></li>
               })}
           </ul>
           <button className="hamburger-menu" onClick={openSidebar}><GiHamburgerMenu /></button>
            
        </motion.div>
        </Wrapper>
    
    )
}


createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lekton:wght@400;700&display=swap');




`

const Wrapper = styled.div`



height: 6rem;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 10rem;


  .header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: right;
  }

img {
    width: 4rem;
    margin-left: 20px;
    padding: 20px;
    background: transparent;
    position: relative;
    top: 5px; left: -600px;
  
    &:hover {
        
     

    }
}



ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 2rem;
    margin-left: 10rem;
    text-align: right ;
   
    
}

li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.hamburger-menu {
    
    
    background: transparent;
    border: none;
    
    svg {
        color: white;
        width: 30px;
        height: 30px;
        
        
    }
}


@media (min-width: 767px){
    .hamburger-menu {
        display: none;
    }

    
}

@media (max-width: 767px) {

    .hamburger-menu {
        margin-left: 10rem;
    }
   ul {
        display: none;
    }

    .header {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-right: -7rem;
    }
}



`




export default Navbar
