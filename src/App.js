import { files } from "./components/treeStructure/appData";
import TreeStructure from "./components/treeStructure/treeStructure";

function App() {
  return (
    <div className="App">
      <TreeStructure files={files} />
    </div>
  );
}

export default App;
