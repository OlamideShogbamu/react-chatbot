import './App.css';
import Basic from "./components/Basic"
import ChatForm from "./components/ChatForm"

function App() {
  return (
    <>
      <div className="header">
        <h1 className="mh_space">GeoST4R Chatbot</h1>
        <span style={{ color: 'rgb(149, 150, 147)' }}>RMNCHN on-the-go field assistant</span>
      </div>
      
      <div className="App">
        <br/>
        <ChatForm />
        <br/>
        <Basic />
      </div>
    </>
  );
}

export default App;
