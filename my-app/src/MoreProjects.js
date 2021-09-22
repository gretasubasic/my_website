import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { unsplash_app, games_cart } from './data';
import {ImGithub} from "react-icons/im"
import {GoLinkExternal} from "react-icons/go"
import { Link } from "react-router-dom";





const MoreProjects = () => {
    return (
       <Wrapper>
           <section className="projects">
               <div className="project-info">
                   {unsplash_app.map((items) => {
                       const {name, about} = items;
                       return <article>
                           <a href="https://github.com/gretasubasic/e_commerce_project"><ImGithub /></a>
                           <a href="https://eager-archimedes-0797d7.netlify.app/"> <GoLinkExternal /></a>
                           <h3>{name}</h3>
                           <p>{about}</p>
                       </article>
                   })}

                   
               </div>

               <div className="project-info">
               {games_cart.map((items) => {
                       const {name, about} = items;
                       return <article>
                           <a href="www.gretasubasic.com"><ImGithub /></a>
                           <a href="https://gifted-mclean-e7f2cd.netlify.app/"><GoLinkExternal/></a>
                           
                           <h3>{name}</h3>
                           <p>{about}</p>

                       </article>
                   })}
               </div>
          </section>

       </Wrapper>
    )
}


createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lekton:wght@400;700&display=swap');

`

const Wrapper = styled.div`
margin-bottom: 6rem;

.projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
}


.project-info {
    margin-top: 6rem;
    width: 400px;
    height: 400px;
    background-color: #0a0e3f;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
}

article {
    margin: 2rem;
  
}

svg {
    width: 30px;
    height: 30px;
    margin: 2rem;
    
}


@media (max-width: 800px) {

    .projects {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    
    }

    .project-info {
        
        margin-top: 2rem;
        width: 320px;
        height: 320px;
        
        
        
}

}
`

export default MoreProjects
