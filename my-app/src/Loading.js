import React, {useEffect} from 'react'
import styled from 'styled-components'
import letterG from "./letter-g.svg"
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context/context'

const Loading = () => {
    const {loading, setLoading} = useGlobalContext()



 
    

    return (
        <Wrapper>
          <img src={letterG} alt="" className="loader" />
        </Wrapper>

    )
}

const Wrapper = styled.div`


@media (max-width: 567px) {
    
    display: flex;
   
    justify-content: center;
   align-items: center;
   margin-top: 15rem;
   }


 
 display: flex;
 flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 15rem;



.loader {
    position: relative;
    width: 250px;
    height: 250px;
    // border-radius: 50%;
    
    animation: animate 2s linear infinite;
 
}



}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

}

.loader:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: #011310;
    border-radius: 50%;
    z-index: 1000;


}

.loader:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(45deg, transparent, transparent 40%, #92f7bd);
    background: #011310;
    border-radius: 50%;
    z-index: 1000;
    z-index: 1;
    filter: blur(30px);

}



img {
    position: absolute;
}


`

export default Loading
