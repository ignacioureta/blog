import React from "react";
import ColorSelect from "./components/ColorSelect";
import LocatedInSelect from "./components/LocatedInSelect";

const App: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ width: "200px", height: "100px" }}>
        <ColorSelect />
        <LocatedInSelect />
      </div>
    </div>
  );
};

export default App;
