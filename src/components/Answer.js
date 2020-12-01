import React from 'react'
//stateless function being used to call the handleClick function 
//with our selected option
function Answer(props) {
    return (
        <div>
            <button className="btnAnswer" type="button" onClick = {() => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}

export default Answer