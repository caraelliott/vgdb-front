import React,{useState} from "react";

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'



const GameMap= ({data}) =>{
    const resultData= data.results

    const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
         setIndex(selectedIndex)};


return (
   <>
    <Sec>
  <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Image
            src={resultData[2].background_image}

            alt="First slide"
        />
        <Carousel.Caption>
            <h3>{resultData[2].name}</h3>
            <p>{resultData[2].platforms[0].name}</p>
        </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
        <Image
            src={resultData[0].background_image}
            alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{resultData[0].name}</h3>
            <p>{resultData[0].platforms[0].name}</p>
        </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
        <Image
            
            src={resultData[1].background_image}
            alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{resultData[1].name}</h3>
            <p>{resultData[1].platforms[1].name}</p>
        </Carousel.Caption>
        </Carousel.Item>
  </Carousel>
  </Sec>
</>
)
}

const Image = styled.img`

        width:50vw;
        height:50vh;
        border-radius:20px;
        `


const Sec= styled.div`
    width:50vw;
    height:50vh;
    // padding-top:30px;
    box-shadow: 9px 10px 6px 1px rgba(0,0,0,0.75);
    border-radius:20px;
    color: black;



    margin: 30px auto;

     
`     
    // const[current, setCurrent] = useState(0)
    //  const resultData= data.results
    //  const len=resultData.length
    //  console.log("this is result data",resultData)
    // return(
    //     <>
       
    //         <FaArrowAltCircleRight/>
    //         <FaArrowAltCircleLeft />
    //     <Carousel>
           
    //     {resultData.map((item) =>{
    //         return(

               
    //             <Game
    //                 name={item.name}
    //                 imgsrc={item.background_image}
    //                 platform={item.platforms[0].platform.name}
    //                 genre={item.genres[0].name}
    //                 />
                    
            
           

    //         )
            

    //     })}
    //     </Carousel>
       

        
        
    
        
        
        
    //     </>
    //     )}


        
    

        export default GameMap;