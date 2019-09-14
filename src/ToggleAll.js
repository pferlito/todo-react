import React from 'react';

function ToggleAll(props) {
  const handleToggleAll = () => {
    props.handleToggleAll();
  };

  return (
    <React.Fragment>
      <input id="toggle-all" className="toggle-all" type="checkbox"
             onClick={handleToggleAll}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
    </React.Fragment>
  )
}

export default ToggleAll;
