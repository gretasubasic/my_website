import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    
    return (
        <Wrapper>
           <h2>CONTACT</h2>
           <p>Wanna say hi?</p>
           <div>Contact me at: greta.subasic6@gmail.com</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #fff;

margin-bottom: 4rem;

h2 {
    color: #b366ce;
    letter-spacing: 1px;
    font-size: 32px;
    margin-top: 10rem;
    text-transform: uppercase;
    &:hover {
    color: #e07bf3;
   
    }


}
`

export default Footer
