import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValidInput ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
