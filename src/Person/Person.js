import React from 'react';
import './Person.css'
const person=(Props)=>{


  return (
      <div className="Person" >
      <p onClick={Props.click}> I'm a {Props.name} and I'm {Props.age} years old!</p>
      <p>{Props.children}</p>
      <input type="text" onChange={Props.changed} value={Props.name}/>

      </div>

  )
};
export default person;
