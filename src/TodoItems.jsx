import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.removeList = this.removeList.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }

  removeList(key) {
    this.props.removeList(key);
  }

  createTasks(item) {
    return <li onClick={() => this.removeList(item.key)} key={item.key}>{item.text}</li>
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
