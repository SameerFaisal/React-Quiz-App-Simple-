import React from "react";

function FinalResult(props) {
 
  let result;
  if (props.points >= 2) {
    result = "Congrats! You have successfully passed the test";
   
  } else {
    result = "You have failed. Please try again.";
    
  }
  return (
    <div>
      <h3>{result}</h3>
    </div>
  );
}

export default FinalResult;