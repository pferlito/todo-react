import React from 'react';
import PropTypes from 'prop-types';


function Toggle({value, handleChange, handleDestroy, index}) {
  const doChange = () => handleChange(index);
  const doDestroy = () => handleDestroy(index);
  return (
    <React.Fragment>
      <input className="toggle"
             type="checkbox"
             checked={value.state === 'completed'}
             onChange={doChange}
      />
      <label>{value.text}</label>
      <button className="destroy" onClick={doDestroy}></button>
    </React.Fragment>
  )
}

Toggle.propTypes = {
  value: PropTypes.object.isRequired,
};

export default Toggle;
