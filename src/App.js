import './App.css';
import TaskMangement from './feature/Assignment 1 - Task Board/TaskManagement';
import ShoppingPage from './feature/Assignment 2 - Shopping Cart App/ShoppingPage';
import { Route,Routes,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <p>
        <Link to='/task-board'>Task board</Link>
      </p>
      <p>
        <Link to='/shopping-app'>Shopping page</Link>
      </p>
      <Routes>
        <Route path='/task-board' element={<TaskMangement />} />
        <Route path='/shopping-app' element={<ShoppingPage />} />
      </Routes>
    </div>
  );
}

export default App;
