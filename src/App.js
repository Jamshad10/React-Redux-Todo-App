import './App.css';
import { Provider } from 'react-redux';
import store from './components/store';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Provider store={store} >
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
