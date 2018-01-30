import React, { Component } from 'react';
import TodoItems from './TodoItems';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    const itemArray = this.state.items;
    if (this.inputElement.value !== '') {
      itemArray.unshift({
        text: this.inputElement.value,
        key: Date.now(),
      });
      this.setState({
        items: itemArray,
      });
      this.inputElement.value = '';
    }
    e.preventDefault();
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => (item.key !== key));
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div id="container">
        <div id="title">Todo App</div>
        <div className="todoMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input
                ref={(input) => { this.inputElement = input; }}
                placeholder="What do you need to do?"
              />
              <button type="submit">Add</button>
            </form>
          </div>
          <TodoItems
            entries={this.state.items}
            removeItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default Home;
