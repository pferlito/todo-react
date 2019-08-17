import React from 'react';

function Toggle(props) {
  const handleChange = () => props.handleChange(props.index);
  const handleDestroy = () => props.handleDestroy(props.index);
  return (
    <React.Fragment>
      <input className="toggle"
             type="checkbox"
             checked={props.value.state === 'completed'}
             onChange={handleChange}
      />
      <label>{props.value.text}</label>
      <button className="destroy" onClick={handleDestroy}></button>
    </React.Fragment>
  )
}

export default Toggle;
