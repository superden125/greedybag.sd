import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import ModalType1 from "../ModalType/ModalType1";

export default function TypeBalo(props) {
  const { onTypeChange, type } = props;
  return (
    <FormGroup tag="fieldset">
      <legend>Loại</legend>
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
            Ba lô 1
          </Label>
          <ModalType1
            title="Ba lô 1"
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
            Ba lô 2
          </Label>
          <ModalType1
            title="Ba lô 2"
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
            Ba lô 3
          </Label>
          <ModalType1
            title="Ba lô 3"
            content="Mỗi đồ vật được chọn với số lượng tối đa là 1"
          />
        </FormGroup>
      </div>

      <div className={type.errors && "is-invalid"}></div>
      {type.errors && <span className="invalid-feedback">{type.errors}</span>}
    </FormGroup>
  );
}
