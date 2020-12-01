import React from 'react'
import Answer from './Answer'
//Stateless component being used to display the options, each option 
//has a choice(index) that is being pushed in Answer component
function AnswerList(props) {
    const options = [];
    for(let i=0; i < props.dataSet.options.length; i++){
        options.push(<Answer choice ={i} handleClick = {props.handleClick} answer ={props.dataSet.options[i]}/>)
    }
    return (
        <div>
            {options}
        </div>
    )
}

export default AnswerList