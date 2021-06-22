import InfoMain from './components/InfoMain'
import InfoContextPovider from "./contexts/InfoContext";

function App() {
  return (
    <div className="App">
      <InfoContextPovider>
        <InfoMain />
      </InfoContextPovider>
    </div>
  );
}

export default App;
