import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Input,
  Table,
  Form as Forms,
  Label,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import FlipMove from "react-flip-move";

import { greedy1, greedy2, greedy3 } from "../../greedy";
import InputFile from "./InputFile";
import TypeBalo from "./TypeBalo";
import ButtonControl from "./ButtonControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TableItem(props) {
  const [items, setItems] = useState([]);
  const [weight, setWeight] = useState({
    value: "",
    touched: false,
    errors: "",
  });
  const [errors, setErrors] = useState([]);
  const [type, setType] = useState({
    value: 0,
    errors: "",
  });

  const initItem = {
    name: "",
    value: "",
    weight: "",
    stock: "",
    qty: "",
    time: "",
  };

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  const addItem = () => {
    setItems([...items, initItem]);
    setErrors([...errors, initItem]);
  };

  const handleWeightChange = (e) => {
    setWeight({ ...weight, value: e.target.value, errors: "" });
  };

  const handleChange = (e, index) => {
    let newArr = items.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setItems(newArr);

    let newErr = errors.map((error, i) => {
      if (index === i) {
        return { ...error, [e.target.name]: "" };
      } else {
        return error;
      }
    });
    setErrors(newErr);
  };

  const handleBlur = (index) => (e) => {
    if (!e.target.value) {
      let newErr = errors.map((error, i) => {
        if (index === i) {
          return { ...error, [e.target.name]: "Required" };
        } else {
          return error;
        }
      });
      setErrors(newErr);
    } else {
      let newErr = errors.map((error, i) => {
        if (
          index === i &&
          e.target.name !== "name" &&
          e.target.value % 1 !== 0
        ) {
          return { ...error, [e.target.name]: "Value must be number" };
        } else {
          if (
            index === i &&
            e.target.name !== "name" &&
            parseInt(e.target.value) <= 0
          ) {
            return { ...error, [e.target.name]: "Value must > 0" };
          } else {
            return error;
          }
        }
      });

      setErrors(newErr);
    }
  };
  const handleWeightBlur = (e) => {
    setWeight({ ...weight, touched: true });
    if (!e.target.value) {
      setWeight({ ...weight, errors: "Required" });
    } else {
      if (e.target.value % 1 !== 0)
        setWeight({ ...weight, errors: "Value must be number" });
      else {
        if (parseInt(e.target.value) <= 0)
          setWeight({ ...weight, errors: "Value must be > 0" });
      }
    }
  };

  const checkValue = () => {
    //false: no error
    //true: have error
    let check = false;
    if (weight.value === "") {
      setWeight({ ...weight, errors: "Required" });
      check = true;
    }
    const newErrors = [...errors];

    for (var i = 0; i < items.length; i++) {
      let error = { ...newErrors[i] };
      if (items[i].name === "") {
        error.name = "Required";
        check = true;
      }
      if (items[i].value === "") {
        error.value = "Required";
        check = true;
      }
      if (items[i].weight === "") {
        error.weight = "Required";
        check = true;
      }
      if (items[i].stock === "" && type.value === "2") {
        error.stock = "Required";
        check = true;
      }
      if (type.value !== "2") {
        error.stock = "";
      }
      newErrors[i] = error;
    }
    setErrors(newErrors);
    return check;
  };

  const onSubmit = () => {
    if (!checkType() && !checkValue()) {
      console.log(type);
      switch (type.value) {
        case "1":
          setItems(greedy1(items, parseInt(weight.value)));
          return;
        case "2":
          setItems(greedy2(items, parseInt(weight.value)));
          return;
        case "3":
          setItems(greedy3(items, parseInt(weight.value)));
          return;
        default:
          return;
      }
    }
  };

  const clearItem = () => {
    setItems([]);
    setErrors([]);
    setWeight({
      value: "",
      touched: false,
      errors: "",
    });
    setType({ ...type, value: 0 });
  };

  const setWeightFile = (value) => {
    setWeight({ ...weight, value: value, errors: "" });
  };

  const setItemsFile = (inputItems) => {
    setItems([]);
    inputItems.forEach((item) => {
      setErrors((prev) => [...prev, initItem]);
      setItems((prev) => [...prev, item]);
    });
  };

  const onTypeChange = (e) => {
    setType({
      value: e.target.value,
      errors: "",
    });
    // let n = errors.length;
    // setErrors([]);
    // for (var i = 0; i < n; i++) {
    //   setErrors([...errors, initItem]);
    // }
  };

  const checkType = () => {
    //false no errors
    //true have errors
    if (type.value === 0) {
      setType({ ...type, errors: "Required" });
      return true;
    }
    return false;
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);

    const newErrors = [...errors];
    newErrors.splice(index, 1);
    setErrors(newErrors);
  };

  const notVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1,
  };

  const leaveOut = {
    transform: "translateX(100%)",
    opacity: 0.1,
  };

  const leaveState = {
    opacity: 0,
  };

  return (
    <div>
      <Forms>
        <Row form>
          <Col md={3} className="offset-md-2">
            <div className="sd-fade-left-right">
              <FormGroup>
                <legend>Weight</legend>
                <Input
                  style={{ width: "100px" }}
                  type="number"
                  name="weight"
                  id="weight"
                  value={weight.value}
                  onChange={handleWeightChange}
                  onBlur={handleWeightBlur}
                  className={weight.errors && "is-invalid"}
                />
                {weight.errors && (
                  <span className="invalid-feedback">{weight.errors}</span>
                )}
              </FormGroup>
            </div>
          </Col>
          <Col md={3}>
            <div className="sd-fade-left-right">
              <TypeBalo onTypeChange={onTypeChange} type={type} />
            </div>
          </Col>
          <Col md={3}>
            <div className="sd-fade-left-right">
              <InputFile
                setWeightFile={setWeightFile}
                setItemsFile={setItemsFile}
              />
            </div>
          </Col>
        </Row>
        <ButtonControl
          clearItem={clearItem}
          addItem={addItem}
          onSubmit={onSubmit}
        />
        <h2 className="text-center sd-fade-up-down">Table Items</h2>

        <Table striped className="table-hover sd-fade-up-down">
          <thead>
            <tr>
              <th style={{ width: "500px" }}>Name</th>
              <th>Value</th>
              <th>Weight</th>
              <th>Stock</th>
              <th>Qty</th>
              <th></th>
            </tr>
          </thead>
          {/* <tbody> */}
          <FlipMove
            typeName="tbody"
            enterAnimation={{
              from: notVisibleState,
              to: {},
            }}
            leaveAnimation={{
              from: {},
              to: leaveOut,
            }}
          >
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <Input
                    type="text"
                    id="name"
                    value={item ? item.name : null}
                    name="name"
                    onChange={(e) => handleChange(e, index)}
                    onBlur={handleBlur(index)}
                    className={
                      errors[index] && errors[index].name && "is-invalid"
                    }
                  ></Input>
                  {errors[index].name && (
                    <span className="invalid-feedback">
                      {errors[index].name}
                    </span>
                  )}
                </td>
                <td>
                  <Input
                    type="text"
                    value={item.value}
                    name="value"
                    // type="number"
                    onChange={(e) => handleChange(e, index)}
                    onBlur={handleBlur(index)}
                    className={errors[index].value && "is-invalid"}
                  ></Input>
                  {errors[index].value && (
                    <span className="invalid-feedback">
                      {errors[index].value}
                    </span>
                  )}
                </td>
                <td>
                  <Input
                    type="text"
                    value={item.weight}
                    name="weight"
                    onChange={(e) => handleChange(e, index)}
                    onBlur={handleBlur(index)}
                    className={errors[index].weight && "is-invalid"}
                  ></Input>
                  {errors[index].weight && (
                    <span className="invalid-feedback">
                      {errors[index].weight}
                    </span>
                  )}
                </td>
                <td>
                  <Input
                    type="text"
                    value={item.stock}
                    name="stock"
                    onChange={(e) => handleChange(e, index)}
                    onBlur={handleBlur(index)}
                    className={errors[index].stock && "is-invalid"}
                    disabled={type.value !== "2" ? true : false}
                  ></Input>
                  {errors[index].stock && (
                    <span className="invalid-feedback">
                      {errors[index].stock}
                    </span>
                  )}
                </td>
                <td>
                  <Input
                    type="text"
                    disabled
                    value={item.qty}
                    name="qty"
                    onChange={(e) => handleChange(e, index)}
                  ></Input>
                </td>
                <td>
                  <FontAwesomeIcon
                    icon="trash-alt"
                    className="icon-trash"
                    onClick={() => handleDeleteItem(index)}
                  />
                </td>
              </tr>
            ))}
          </FlipMove>
          {/* </tbody> */}
        </Table>
      </Forms>
    </div>
  );
}

TableItem.propTypes = {};

export default TableItem;
