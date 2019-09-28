import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import Toggle from './Toggle.js';
import ToggleAll from './ToggleAll.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleDoubleClick(index) {
    this.props.handleStateChange(index, 'editing');
  }
  handleTextChange(e, index) {
    this.props.handleTextChange(index, e.target.value);
  }
  handleBlur(index) {
    this.props.handleStateChange(index, 'active');
  }
  // A single click causes a blur to the item being edited.
  handleToggleClick(index) {
    const editedIndex = this.props.list.items.findIndex((el) => {
      return el.state === 'editing'
    });
    if (editedIndex > -1) {
      this.handleBlur(editedIndex);
    }
  }
  render() {
    let filteredItems = this.props.list.items;
    // filter items according to selected filter
    if (this.props.list.filter) {
      filteredItems = this.props.list.items.filter((el) => {
        return el.state === this.props.list.filter;
      });
    }
    const self = this;
    return (
      <section className="main">
        <ToggleAll
          handleToggleAll={() => self.props.handleToggleAll()}
        />
        <ul className="todo-list">
          {filteredItems.map((value, index) => {
              return (
                <li key={index}
                    onDoubleClick={() => this.handleDoubleClick(index)}
                    className={value.state}>
                  <div className="view">
                    <Toggle value={value}
                      handleStateChange={(index, newState) => self.props.handleStateChange(index, newState)}
                      handleToggleClick={(index) => this.handleToggleClick(index)}
                      handleDestroy={(index) => this.props.handleDestroy(index)}
                      index={index}/>
                  </div>
                  {value.state === 'editing' &&
                  <input
                    type="text"
                    className="edit"
                    onChange={(e) => this.handleTextChange(e,index)}
                    onBlur={() => {this.handleBlur(index)}}
                    defaultValue={value.text}
                  />}
                </li>
              )
            }
          )}
        </ul>
      </section>
    )
  }
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleDestroy: PropTypes.func.isRequired,
  handleToggleAll: PropTypes.func.isRequired
};

export default TodoList;
