import React from 'react'
import { links } from './data'
import styled from 'styled-components'
import { useGlobalContext } from './context/context'
import {AiOutlineClose} from "react-icons/ai"
import  {Link } from "react-router-dom"


const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    return (
       <Wrapper>
           <aside className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
               <div className="sidebar">
                   <button className="close-btn" onClick={closeSidebar}><AiOutlineClose /></button>
                   <article>
                       {links.map((link) => {
                           const {id, text, url} = link;
                           return (
                              <div key={id}>
                                  <Link to={url} onClick={closeSidebar}>{text}</Link>
                              </div>
                           )
                       })}
                   </article>
               </div>
           </aside>
           
       </Wrapper>
    )
}


const Wrapper = styled.aside`

div {
    margin: 1rem;
}



button {
    background: none;
    border: none;
}

svg {
    color: white;
    width: 30px;
    height: 30px;
    margin: 1rem;
    position: static;
}


@media (max-width: 567px) {
    
.sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  z-index: -1;
  transition: all 0.3s linear;
  transform: scale(0);
  background: rgba(0, 0, 0, 0.5);
}


.sidebar-wrapper.show {
  visibility: visible;
  z-index: 2;
  transform: scale(1);
}

.sidebar {
  width: 65vw;
  height: 70vh;
  max-width: 1170px;
  background: #070B34;
  border-radius: 5px;
  box-shadow: white;
  position: relative;
  padding: 4rem 2rem;
  color: white;
}

}

@media (min-width: 600px){
    aside {
        display: none;
    }

    div {
        display: none;
    }

    

    
    
}


`

export default Sidebar
