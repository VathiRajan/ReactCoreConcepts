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

  const [{ value, value2 }, setValue] = useState(
    { count1: 10, count2: 20 })


  return (
    <div className="App">
      <button onClick={() =>
        setValue(a => ({
          count1: a.count1 + 1,...a


        }))
      } > Plus</button>
      <div>count 1 : {value}</div>
      <div>count 2: {value2}</div>
    </div >
  );
}

export default App;
