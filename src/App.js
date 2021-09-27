import './App.css';
import { AiFillPlusCircle } from "react-icons/ai";
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <div className='Chat-title'>
        <h1>Messages</h1><span><AiFillPlusCircle /></span>
      </div>
      <Contacts />
    </div>
  );
}

export default App;
