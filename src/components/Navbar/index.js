import React from "react";
import ModalAbout from "./ModelAbout";
import ModalHelp from "./ModalHelp";
import "./navStyle.css";

export default function index() {
  return (
    <>
      <div className="sd-nav">
        <div className="sd-logo">Niên luận cơ sở ngành KTPM</div>
        <ul>
          <li>
            <ModalAbout />
          </li>
          <li>
            <ModalHelp title="Help" content="Huong dan su dung" />
          </li>
        </ul>
      </div>
    </>
  );
}
