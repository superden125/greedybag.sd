import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faQuestionCircle,
  faFileUpload,
  faTrashAlt,
  faPlusCircle,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Items from "./components/Items";
import Headers from "./components/Headers";

function App() {
  library.add(
    fab,
    faQuestionCircle,
    faFileUpload,
    faTrashAlt,
    faPlusCircle,
    faUtensils,
    faTrashAlt
  );
  return (
    <div>
      <Headers />
      <Items />
    </div>
  );
}

export default App;
