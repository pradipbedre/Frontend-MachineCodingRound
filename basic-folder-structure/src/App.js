import Folder from "./components/Folder";
import "./styles.css";
import explorer from "./data/FolderData";
import { useState } from "react";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}
