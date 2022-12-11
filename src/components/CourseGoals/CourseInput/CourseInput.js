import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
//import styled from 'styled-components';

//const FormControl = styled.div`
//	margin: 0.5rem 0;
//
//	& label {
//    	font-weight: bold;
//    	display: block;
//    	margin-bottom: 0.5rem;
//        color: ${props => props.invalid ? 'red' : 'black'};
//	}
//
//	& input {
//    	display: block;
//    	width: 100%;
//        border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//        background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//    	font: inherit;
//    	line-height: 1.5rem;
//    	padding: 0 0.25rem;
//	}
//
//	& input:focus {
//    	outline: none;
//    	background: #fad0ec;
//    	border-color: #8b005d;
//	}
//`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = event => {
	// set deafult styles back, when user starts typing again
	if(event.target.value.trim().length > 0) {
		setIsValidInput(true);
	}
	
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    // user tried to add goal with empty input
    if(enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  // replacing div with the new styled component
  // <div className={`form-control ${!isValidInput ? 'invalid' : ''}`}>
  // className can be added to styled components as well

  /* dynamically adding the invalid class with the form-control class from css module */
  return (
    <form onSubmit={formSubmitHandler}>
        <div className={`${styles['form-control']} ${!isValidInput && styles.invalid}`}>
			<label>Course Goal</label>
			<input type="text" onChange={goalInputChangeHandler} />
        </div>
      	<Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
