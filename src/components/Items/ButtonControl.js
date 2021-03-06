import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonControl(props) {
  const { clearItem, addItem, onSubmit } = props;
  return (
    <div className="button-control">
      <Button onClick={() => clearItem()} color="danger" className="sd-btn">
        <FontAwesomeIcon icon="trash-alt" /> Xoá
      </Button>{" "}
      <Button onClick={() => addItem()} color="info" className="sd-btn">
        <FontAwesomeIcon icon="plus-circle" /> Thêm
      </Button>{" "}
      <Button onClick={onSubmit} color="success" className="sd-btn">
        <FontAwesomeIcon icon="utensils" /> Tham Ăn
      </Button>
    </div>
  );
}
