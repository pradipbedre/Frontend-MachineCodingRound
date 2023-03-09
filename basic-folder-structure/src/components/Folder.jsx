import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

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
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
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
