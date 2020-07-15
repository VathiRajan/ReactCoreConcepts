import React, { useState } from 'react';
import './App.css';

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

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  //you split itup into two
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
      <input name="email" value={email} onChange={(e) => setemail(e.target.value)} />
      <input name="password" type="password" value={pass} onChange={(e) => setpass(e.target.value)} />

    </div >
  );
}

export default App;
