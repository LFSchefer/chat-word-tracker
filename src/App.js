import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import NumberOfChat from './components/NumberOfChat';

function App() {
  return (
    <div className="App">
      <Header/>
      <NumberOfChat/>
      <InputForm/>
    </div>
  );
}

export default App;
