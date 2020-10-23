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
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import Items from "./components/Items";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Navbars from "./components/Navbar";

function App() {
  library.add(
    fab,
    faQuestionCircle,
    faFileUpload,
    faTrashAlt,
    faPlusCircle,
    faUtensils,
    faTrashAlt,
    faFileDownload
  );
  return (
    <div>
      <Navbars />
      <Headers />
      <Items />
      <Footers />
    </div>
  );
}

export default App;
