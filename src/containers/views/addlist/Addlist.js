import React, {Component} from 'react';
import './Styles/main.css'
import TodoList from './ToDoList';
import AddTodo from './AddTodo';

class AddList extends Component{

  constructor(props){
    super(props);

    this.state = {
      todoList : [],
    }
  }

  todoId = 1;

  handleSubmit = (text) => {
    this.setState({
      todoList : [{
        text: text,
        todoId: this.todoId,
        }
        , ...this.state.todoList],
    })
    this.todoId++
  }

  handleDelete = (id) => {
    const shallowList = this.state.todoList.filter((todo)=>{
      return (todo.todoId !== id);
    })
    this.setState({
      todoList : [...shallowList]
    })
    console.log("delete item with :", id)
  }

  render() {

    // console.log('App Render')

    return (
      <main className='App_wrapper'>
        <h5>
        This is a simple To-Do list app done with React. A responsive todo-List made using React JS. Made use concepts like of props, state and ref for input form, keys and list.
        </h5>
  
        
        <AddTodo  handleSubmit={this.handleSubmit}/>
        <TodoList handleDelete={this.handleDelete} todoList={ this.state.todoList}/>

      </main>
    );
  }
}

export default AddList;