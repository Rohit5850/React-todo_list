import logo from './logo.svg';
import './App.css';
import TodoApp from './Components/TodoApp';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="App todo_container">
      {/* <TodoApp/> */}
      <TodoForm/>
    </div>
  );
}

export default App;
