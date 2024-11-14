import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Portfolio/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App sm:px-0">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
