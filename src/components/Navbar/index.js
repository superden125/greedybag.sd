import React from "react";
import ModalAbout from "./ModelAbout";
import "./navStyle.css";

export default function index() {
  return (
    <>
      <div className="sd-nav">
        <div className="sd-logo">Niên luận cơ sở ngành KTPM</div>
        <ul>
          <li>
            <ModalAbout title="About" content="Vef chung toi" />
          </li>
          <li>
            <ModalAbout title="Help" content="Huong dan su dung" />
          </li>
        </ul>
      </div>
    </>
  );
}
