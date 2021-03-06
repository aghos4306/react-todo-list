import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [],
    id:uuid(),
    item:'',
    editItem: false
  };
  handleChange = (e) =>{
    this.setState({
      item: e.target.value
    })
  };
  handleSubmit = (e) =>{
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    };
    const updatedItems = [...this.state.items,newItem];   //spread operator
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    }, ()=> console.log(this.state));
  };
  clearList = () => {
    console.log('clear list method')
  };
  handleDelete = (id) =>{
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) =>{
    console.log('handle edit method');
  };
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput item={this.state.item} handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} editItem={this.state.editItem}
              />
              <TodoList items={this.state.items} clearList={this.clearList}
              handleDelete={this.handleDelete} handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
        
    );
  }
}

export default App;