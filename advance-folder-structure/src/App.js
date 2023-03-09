import Folder from "./components/Folder";
import "./styles.css";
import explorer from "./data/FolderData";
import { useState } from "react";
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handelInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder explorer={explorerData} handelInsertNode={handelInsertNode} />
    </div>
  );
}
