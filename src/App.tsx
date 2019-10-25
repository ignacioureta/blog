import React from "react";
import ColorSelect from "./components/ColorSelect";
import LocatedInSelect from "./components/LocatedInSelect";
import AuthorSelect from "./components/AuthorSelect";

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
        <AuthorSelect />
      </div>
    </div>
  );
};

export default App;
