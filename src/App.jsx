import './App.css';
import Content from './components/content/Content';
import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="body">
        <Sidebar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
