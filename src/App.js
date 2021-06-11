import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed'

function App() {
  return (
    <div className="app">
        <Header />
      <div className="app__body">

        <Sidebar />
        <Feed />
        {/* header */}
        {/* Sidebar */}
        {/* feed */}
        {/* widgets */}
      </div>
    </div>

  );
}

export default App;
