import React from "react";
function alertMsg()
{
  alert("Message from JavaScript Alert");
  console.log("Message to developer");
}
const App =  ()=>{

  return(
    <div className="App">
      <h1>Let we see the output of JAVASCRIPT</h1>
      <button onClick={alertMsg}>CE1</button>
    </div>
  );
};
export default App;
