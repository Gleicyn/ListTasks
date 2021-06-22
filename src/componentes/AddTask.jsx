import React ,{useState}from 'react'

import "./AddTask.css"
import Button from './Button'

import './Task.css'
const AddTask =({handleTaskAddition })=>{
    const [inputData, setTnputData] = useState ('')

    const handleInputChange = (e)=>{
        setTnputData(e.target.value)
    }

    const handleAddTaskClik = () =>{
        handleTaskAddition(inputData)

    }

    return (

        <div className='add-task-container'>
            <input onChange={handleInputChange} value={inputData} className='add-task-input' type='text'/>
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClik }>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask 