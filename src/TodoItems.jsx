import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.removeItem = this.removeItem.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }

  removeItem(key) {
    this.props.removeItem(key);
  }

  createTasks(item) {
    return <li onClick={() => this.removeItem(item.key)} key={item.key}>{item.text}</li>
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
