//smallest component of robofriend
import React from 'react';

const Card = (props)=>{
    //or we directly (props)=({name,id,email}) do this ES6 called destructuring
    const {name,email,id} = props;//from ES6 //props.id=id so i not use to understand later if get confuse
return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 Shadow-5'>
     <img alt="robot" src={`https://robohash.org/${props.id}u?200x200`}/> 
     <div > 
         <h2>{name}</h2>
         <p>{email}</p>
     </div>


    </div>
);
}

export default Card;