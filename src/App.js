import './App.css';
import Header from './components/Header';
import NumberOfChat from './components/NumberOfChat';
import WordTracker from './components/WordTracker';

function App() {
  return (
    <div className="App">
      <Header/>
      <WordTracker/>
      {/* <NumberOfChat/> */}
    </div>
  );
}

export default App;
