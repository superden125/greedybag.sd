import React from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import ModalType1 from "../ModalType/ModalType1";

export default function TypeBalo(props) {
  const { onTypeChange, type } = props;
  return (
    <FormGroup tag="fieldset">
      <legend>Type</legend>
      <div className="form-type">
        <FormGroup check>
          <Label check className="form-type-items">
            <Input
              type="radio"
              name="radio1"
              value="1"
              onChange={(e) => onTypeChange(e)}
              checked={type.value && type.value === "1"}
            />{" "}
            Balo1
          </Label>
          <ModalType1
            title="Balo 1"
            content="Mỗi đồ vật được chọn với số lượng không giới hạn."
          />
        </FormGroup>
        <FormGroup check>
          <Label check className="form-type-items">
            <Input
              type="radio"
              name="radio1"
              value="2"
              onChange={(e) => onTypeChange(e)}
              checked={type.value && type.value === "2"}
            />{" "}
            Balo2
          </Label>
          <ModalType1
            title="Balo 2"
            content="Mỗi đồ vật được chọn với số lượng tối đa với số lượng hiện có"
          />
        </FormGroup>
        <FormGroup check>
          <Label check className="form-type-items">
            <Input
              type="radio"
              name="radio1"
              value="3"
              onChange={(e) => onTypeChange(e)}
              checked={type.value && type.value === "3"}
            />{" "}
            Balo3
          </Label>
          <ModalType1
            title="Balo 3"
            content="Mỗi đồ vật được chọn với số lượng tối đa là 1"
          />
        </FormGroup>
      </div>

      <div className={type.errors && "is-invalid"}></div>
      {type.errors && <span className="invalid-feedback">{type.errors}</span>}
    </FormGroup>
  );
}
