import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './useForm'

const App = () => {
  // React Hook "React.useState" is called conditionally. 
  //React Hooks must be called in the exact same order in every component render  react - hooks / rules - of - hooks
  /*if (true) {
    React.useState();
  }*/

  //1 You can also pass function to 
  //=> // setValue :       <button onClick={() => setValue(a => a + 1)}>Plus</button>
  //=> // setValue :       <button onClick={() => setValue(value + 1)}>Plus</button>

  const [value, setValue] = useState(
    {
      count1: 10, count2: 20
    })

  const [formValue, setFormValue] = useForm({
    email: "",
    password: ""
  })
  //useEffect
  const [resourceType, setResourceType] = useState("post")
  useEffect(
    () => {
      console.log("render")
    }
  )
  //useEffect
  return (
    <div className="App">
      <button onClick={() =>
        setValue(a => (
          {
            count1: a.count1 + 1,
            count2: a.count2 + 20
          })
        )
      } > Plus</button>

      <div>count 1 : {value.count1}</div>
      <div>count 2: {value.count2}</div>

      <input name="email" value={formValue.email} onChange={setFormValue} />
      <input name="password" type="password" value={formValue.password} onChange={setFormValue} />

      <div>
        <button onClick={setResourceType("posts")}> Posts</button>
        <button onClick={setResourceType("users")}> Users</button>
        <button onClick={setResourceType("comments")}> Comments</button>

        <h1>{resourceType}</h1>
      </div>

    </div>
  );

}

export default App;
