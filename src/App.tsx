import React from "react";
import TagSelect from "./components/TagSelect";
import LocatedInSelect from "./components/LocatedInSelect";
import AuthorSelect from "./components/AuthorSelect";
import SourceSelect from "./components/SourceSelect";

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
        <TagSelect />
        <LocatedInSelect />
        <AuthorSelect />
        <SourceSelect />
      </div>
    </div>
  );
};

export default App;
