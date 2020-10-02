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
            />{" "}
            Balo1
          </Label>
          <ModalType1
            title="Balo 1"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          />
        </FormGroup>
        <FormGroup check>
          <Label check className="form-type-items">
            <Input
              type="radio"
              name="radio1"
              value="2"
              onChange={(e) => onTypeChange(e)}
            />{" "}
            Balo2
          </Label>
          <ModalType1
            title="Balo 2"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          />
        </FormGroup>
        <FormGroup check>
          <Label check className="form-type-items">
            <Input
              type="radio"
              name="radio1"
              value="3"
              onChange={(e) => onTypeChange(e)}
            />{" "}
            Balo3
          </Label>
          <ModalType1
            title="Balo 3"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          />
        </FormGroup>
      </div>

      <div className={type.errors && "is-invalid"}></div>
      {type.errors && <span className="invalid-feedback">{type.errors}</span>}
    </FormGroup>
  );
}
