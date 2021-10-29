import React from "react";
import styled from 'styled-components';

// import { Carousel } from '@trendyol-js/react-carousel';



const GameDB=({data})=>{
    const newData = data.results[0].platforms;

    // return(
    //     <div>  {newData[0].platform.name}</div>
    // )



    return(
        <>
        {newData.map((item) =>{
                    return(
        
                       
                        <Game
                            name={item.platform.name}
                            imgsrc={item.platform.image_background}
                            releaseDate={item.released_at}
                            
                            />

              
    )
})
}</>)
}

const Game = ({name, imgsrc, releaseDate}) =>{
    return(
        <>
     
        <Displayer>
        <Image src={imgsrc}/>
        <div>
        <h5>{name}</h5>
        <p>Release Date:{releaseDate}</p>
        </div>
        </Displayer>
       
        </>

        
    )
}


const Image = styled.img`
        flex:1;
        width:30vw;
        height:40vh;
        border-radius:20px;`

        const Displayer = styled.div`
        
        display:flex;
        width:30vw;
        height:30vw;
        flex-wrap:wrap;
        margin-bottom:10px;
        background-color:rgba(189, 190, 169,0.8);
        justify-content:center;
        padding:2px;
        border-radius:20px;`

        


        


export {
    GameDB,
    Game

}

















// const Game = ({name, imgsrc, platform, genre}) =>{

    
    
//     return(

//         <>
//          <SecCarousel>
    
        
      
//             <h3>{name}</h3>
//             <h2>{platform}</h2>
//             <Image src={imgsrc} />
            
        
//             <h3>{genre}</h3>
//             </SecCarousel>
        
        
        
        
//         </>

//     )

    
// }

// const Image = styled.img`

//         width:200px;
//         height:200px;
// `     

// const SecCarousel= styled.div`
        
        
// height:50vh;
// width:50vw;
// justify-content:center;
// align-items:center;`





// export default Game;
