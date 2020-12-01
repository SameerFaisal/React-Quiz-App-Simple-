import React from 'react'
//Stateless component being used to display the current question
function Question(props) {
    return (<h1 className="question">{props.dataSet.question}</h1>)
}

export default Question