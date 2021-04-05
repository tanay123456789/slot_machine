import React from "react";

const SlotM=(props)=>{

  let x=props.s;
  let y=props.y;
  let z=props.z;
  

  if((x===y)&&(y===z)){
    return(
      <>
        <div className='slot_inner'>
        <h1>
          {x} {y} {z} 
        </h1>
        <h1>This is Matching.</h1>
        </div>
      </>
    );
  }
  else{
    return(
      <>
        <div className='slot_inner'>
        <h1>
          {x} {y} {z} 
        </h1>
        <h1>This is Not matching.</h1>
        </div>
      </>
    );

  }

};

const App=()=>{
    return (
        <>
          <h1 className="heading_style">
          🎰WELCOME TO <span style={{fontWeight:'bold'}}>SLOT MACHINE GAME🎰</span> 
          </h1>

          <SlotM x="😄" y="😄" z="😄"/>
          <SlotM/>
          <SlotM/>
        </>
    )
}
export default App;