import logo from './logo.svg';
import './App.css';
import BaseNavigator from './components/navigation/BaseNavigator';
import AddBooks from './components/books/AddBooks';

function App() {
  return (
    <div className="App">
      {/* <AddBooks /> */}
     <BaseNavigator />
    </div>
  );
}

export default App;
