import './App.css';
// import {lazy} from 'react';
// const Header = lazy(() => import("./components/Header"))


import Header from "./components/Header";
import Project from "./components/Project";


function App() {
  return (
    <div className="App">
      <Header />
      <Project />
    </div>
  );
}

export default App;
