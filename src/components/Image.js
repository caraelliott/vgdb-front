import styled from 'styled-components';
// import cart from '../assets/cartridge.png'


import cart from '../assets/video-games.jpg'

const Cartridge = styled.div`
            background-image: url(${cart});
            width:80vw;
            height:30vh;
            position:absolute;
            right:0;
            z-index:-1;
            background-size: cover;
           `

const Image=() =>{
    return(
        <Cartridge>hello</Cartridge>
    )
}

export default Image;