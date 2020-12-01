import React from 'react'
import FinalResult from "./FinalResult";

function UserGreeting(props) {
    return (
        <div>
            <h2 className="userGreeting">Thank you for completing the questionnaire!</h2>
            <FinalResult points={props.points} />
        </div>
    )
}

export default UserGreeting