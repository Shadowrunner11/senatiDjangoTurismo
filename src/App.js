import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailView from './Molecules/DetailView';
import Home from './Molecules/Home';
import Lugares from './Molecules/Lugares';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/lugares' element={<Lugares />}/>
          <Route path='/lugares/detail' element={<DetailView />}>
            <Route path=':lugarId' element={<DetailView />}/>
          </Route>
          <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  
          
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
