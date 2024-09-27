import React from "react";
import seriesData from "../../API/series.json";
import ComponentB from "./componentB";  

// Create context outside of the component
const JsonDataContext = React.createContext();

function ComponentA() {
  return (
    <JsonDataContext.Provider value={seriesData[0]}>
      <ComponentB />
    </JsonDataContext.Provider>
  );
}

export default ComponentA;

