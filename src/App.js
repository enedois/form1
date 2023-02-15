import './App.css';
import React, {useReducer, useState} from 'react'
const formReducer = (state, event) =>{
  return{
    ...state, [event.name]:event.value
  }
}
function App() {

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer,{});

const handleSubmit = event=>{
  event.preventDefault();
  setSubmitting(true);
 
  setTimeout(()=>{
    setSubmitting(false);
  },3000);
  console.log('form submit');
}

const handleChange = event =>{
  setFormData({
    name: event.target.name,
    value: event.target.value,
  })
}//shown on screen


  return (
<div className="wrapper">
<h3>Simple Form</h3>
{submitting && <div>Form Submitting....
<ul>
  {Object.entries(formData).map(([name, value])=>(
    <li key={name}><strong>{name}</strong>:{value.toString()}</li>
  ))}
</ul>
</div>}
<form onSubmit={handleSubmit}>
  <fieldset>
  <label htmlFor="">Name</label>
  <input type="text" name="name" onChange={handleChange}/>

  </fieldset>
<button type="submit">
View
</button>
</form>
</div>  
  );
}

export default App;
