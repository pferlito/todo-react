import React from 'react';
import PropTypes from 'prop-types';


function ToggleAll({handleToggleAll}) {
  return (
    <React.Fragment>
      <input id="toggle-all" className="toggle-all" type="checkbox"
             onClick={handleToggleAll}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
    </React.Fragment>
  )
}

ToggleAll.propTypes = {
  handleToggleAll: PropTypes.func.isRequired
};

export default ToggleAll;
