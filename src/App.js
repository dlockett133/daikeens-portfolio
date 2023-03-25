import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route tag takes in a path argument that defines the route and the element argument that renders the component when the route is called */}
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
