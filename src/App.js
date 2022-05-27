import './App.css';
import ChatList from './components/ChatList';
import Chatview from './components/Chatview';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <ChatList/>
      {/* <Chatview/> */}
    </div>
  );
}

export default App;
