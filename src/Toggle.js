import React from 'react';
import PropTypes from 'prop-types';


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

Toggle.propTypes = {
  value: PropTypes.object.isRequired,
};

export default Toggle;
