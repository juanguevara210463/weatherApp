import React from 'react';

const Form = props =>(


          <form onSubmit= {props.getWeather}>
            <input className= "form" type="text" name="city" placeholder="state" />

  <form onSubmit= {props.getWeather}>
      <input className= "form" type="text" name="city" placeholder="state"/>

 
      <input className="form" type="text" name="country" placeholder="country" />

            <button className="btn">Submit</button>
        </form>
 

   <button className="btn">Check Weather</button>
 </form>

  );

  export default Form;
