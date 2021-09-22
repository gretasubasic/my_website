import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import MoreProjects from './MoreProjects'
import { GoCode } from "react-icons/go"


const ProjectsPage = () => {
    return (
        <Wrapper>
            <h2><GoCode/> The Projects I've Built <GoCode/></h2>
            <Project />
            <MoreProjects />
           
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


svg {
    width: 32px;
    height: 32px;
    margin: 2rem;
    
    
    
}

h1 {
    color: #b366ce;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 40px;
}

h2 {
    color: #b366ce;
    letter-spacing: 1px;
    font-size: 32px;
    margin-top: 10rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-around
    &:hover {
      color: #e07bf3;;
    }

    @media (max-width: 400px){
        
        svg {
            display: none;
        }
    }


}


`



export default ProjectsPage
