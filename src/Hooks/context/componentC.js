import { useContext } from "react";
import { JsonDataContext } from "./componentA";  // Import the context

function ComponentC() {
  const jsonDataReccieved = useContext(JsonDataContext);  // Use the correct context
  console.log(jsonDataReccieved);

  return (
    <div>
      <h1>ComponentC</h1>
    </div>
  );
}

export default ComponentC;
