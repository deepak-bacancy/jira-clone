import './App.css';
import Header from './components/Header/header';
import { BrowserRouter } from 'react-router-dom';
import RouteHandler from './pages/RouterHandler/RouterHandler';

function App() {
  return (
    <div className="h-screen parent">
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </div>
  );
}

export default App;
