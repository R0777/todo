import React, {Component} from 'react';
import '../App.css'
import TodoDone from './TodoDone'
import TodoNot from './TodoNot'
import todoData from './todosData'


class App extends Component {

constructor() {
super()

this.state = {

tdo: todoData,
tnot: todoData

}
this.handChan = this.handChan.bind(this)

}

handChan(id) {
this.setState(prevState => {
const updateTodo = prevState.tdo.map(
  
)





})


}


  render() {

  const toDo = this.state.tdo.map(el => <TodoDone key={this.state.tdo.id} item={el} handChange = {this.handChan}/>)
  const toNot = this.state.tnot.map(el => <TodoNot key={this.state.tnot.id} item={el} handChange = {this.handChan}/>)

  return(
    <main className="todo-list">
      <h2>Done</h2>
      <form>
{toDo}

</form>
<h2>Not Done</h2>
      <form>
{toNot}

</form>
</main>
  )
  }
}
export default App