import { useState } from "react";

function Folder({ explorer, handelInsertNode }) {
  // this is for when we ckick on folder it expand
  const [expand, setExpand] = useState(false);

  // when we click on the button like file and folder then it will show input
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const handelNewFolder = (event, isFolder) => {
    event.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: isFolder
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handelInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder">
          <span
            onClick={() => setExpand(!expand)}
            style={{ cursor: "pointer" }}
          >
            {" "}
            📂 {explorer.name}
          </span>
          <div className="folder__buttons">
            <button onClick={(e) => handelNewFolder(e, false)}>+File</button>
            <button onClick={(e) => handelNewFolder(e, true)}>+Folder</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📂" : "🗃"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onKeyDown={(e) => onAddFolder(e)}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <Folder explorer={exp} handelInsertNode={handelInsertNode} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span className="file">🗃{explorer.name}</span>
      </div>
    );
  }
}

export default Folder;
