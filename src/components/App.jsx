// Done:
// 1) Autofocus input field after submit
// 2) Clear input field after submit
// 3) Disable when empty item is added
// 4) Add a count to number of TODOs
// 5) Comlpete -> delete from string, remove item from array
// 6) Update visual

import React from "react";
import Form from "./Form";
import Title from "./Title";
import Blurb from "./Blurb";

function App() {
  return (
    <div className="main-body">
      <Title />
      <Blurb />
      <Form />
    </div>
  );
}

export default App;
