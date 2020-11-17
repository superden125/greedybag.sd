import React, { useState, useEffect } from "react";

import { Input, Table, Form as Forms, FormGroup, Row, Col } from "reactstrap";
import FlipMove from "react-flip-move";

import { greedy } from "../../greedy";
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

  const [isGreedy, setIsGreedy] = useState(false);

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isHaveFile, setIsHaveFile] = useState(false);

  const initItem = {
    name: "",
    value: "",
    weight: "",
    stock: "",
    qty: "",
    // time: "",
  };

  useEffect(() => {
    // /console.log(errors);
  }, [errors]);

  const addItem = () => {
    isGreedy && setIsGreedy(false);
    setItems([...items, initItem]);
    setErrors([...errors, initItem]);
  };

  const handleWeightChange = (e) => {
    setIsGreedy(false);
    setWeight({ ...weight, value: e.target.value, errors: "" });
  };

  const handleChange = (e, index) => {
    isGreedy && setIsGreedy(false);
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
          //e.target.value % 1 !== 0
          isNaN(e.target.value)
        ) {
          return { ...error, [e.target.name]: "Value must be number" };
        } //else {
        if (
          index === i &&
          e.target.name !== "name" &&
          parseInt(e.target.value) <= 0
        ) {
          return { ...error, [e.target.name]: "Value must > 0" };
        } //else {

        if (
          index === i &&
          e.target.name === "stock" &&
          !Number.isInteger(parseFloat(e.target.value))
        ) {
          //error
          return { ...error, [e.target.name]: "Stock must be Integer" };
        }

        return error;
        //}
        //}
      });

      setErrors(newErr);
    }
    //validItems(index, e.target.name, e.target.value);
  };
  const handleWeightBlur = (e) => {
    setWeight({ ...weight, touched: true });
    validWeight(e.target.value);
  };

  const validItems = (index, name, value) => {
    var valid = true;
    if (!value) {
      let newErr = errors.map((error, i) => {
        if (index === i) {
          valid = false;
          return { ...error, [name]: "Required" };
        } else {
          return error;
        }
      });
      setErrors(newErr);
    } else {
      let newErr = errors.map((error, i) => {
        if (index === i && name !== "name" && isNaN(value)) {
          valid = false;
          return { ...error, [name]: "Value must be number" };
        }

        if (index === i && name !== "name" && parseInt(value) <= 0) {
          valid = false;
          return { ...error, [name]: "Value must > 0" };
        }

        if (
          index === i &&
          name === "stock" &&
          !Number.isInteger(parseFloat(value))
        ) {
          valid = false;
          return { ...error, [name]: "Stock must be Integer" };
        }

        return error;
      });

      setErrors(newErr);
      return valid;
    }
  };

  const validWeight = (value) => {
    if (!value) {
      setWeight({ ...weight, errors: "Required" });
      return false;
    }

    if (isNaN(value)) {
      setWeight({ ...weight, errors: "Value must be number" });
      return false;
    }

    if (parseInt(value) <= 0) {
      setWeight({ ...weight, errors: "Value must be > 0" });
      return false;
    }

    return true;
  };

  const checkValue = () => {
    //false: no error
    //true: have error
    let check = false;

    if (!validWeight(weight.value)) {
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
    if (haveError()) check = true;
    return check;
  };

  const haveError = () => {
    //true: have error
    //false: no error
    let prevError = [...errors];
    var i = 0;
    while (i < prevError.length) {
      if (
        prevError[i].name ||
        prevError[i].value ||
        prevError[i].stock ||
        prevError[i].weight
      ) {
        return true;
      }
      i++;
    }
    return false;
  };

  const onSubmit = () => {
    if (!checkType() && !checkValue()) {
      greedy(items, parseInt(type.value), parseFloat(weight.value));
      setIsGreedy(true);
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
    setIsGreedy(false);
    setFileName();
    setFile("");
    setIsHaveFile(false);
  };

  const setItemsFile = (inputItems) => {
    setItems(inputItems);
    setErrors([]);

    inputItems.forEach((item) => {
      setErrors((prev) => [...prev, initItem]);
      //setItems((prev) => [...prev, item]);
    });
  };

  const setInputFile = (inputWeight, inputItems) => {
    //clearItem();
    setFile("");
    setIsGreedy(false);
    inputWeight > 0 && setWeight({ ...weight, value: inputWeight, errors: "" });
    setItemsFile(inputItems);
    setIsHaveFile(true);
  };

  const onTypeChange = (e) => {
    isGreedy && setIsGreedy(false);
    setType({
      value: e.target.value,
      errors: "",
    });
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

  const totalValue = (items) => {
    return items.reduce(
      (totalWeight, item) => totalWeight + item.qty * item.value,
      0
    );
  };

  const totalWeight = (items) => {
    return items.reduce(
      (totalWeight, item) => totalWeight + item.qty * item.weight,
      0
    );
  };

  const notVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1,
  };

  const leaveOut = {
    transform: "translateX(100%)",
    opacity: 0.1,
  };

  // const leaveState = {
  //   opacity: 0,
  // };

  return (
    <div>
      <Forms>
        <Row form>
          <Col md={3} className="offset-md-2">
            <div className="sd-fade-left-right">
              <FormGroup>
                <legend>Trọng Lượng</legend>
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
          <Col md={4}>
            <div className="sd-fade-left-right">
              <InputFile
                setFileName={setFileName}
                fileNames={fileName}
                items={items}
                isGreedy={isGreedy}
                setIsLoading={setIsLoading}
                setInputFile={setInputFile}
                file={file}
                setFile={setFile}
                inputWeight={weight.value}
                type={type.value}
                totalValue={totalValue}
                totalWeight={totalWeight}
                disabled={isHaveFile}
              />
            </div>
          </Col>
        </Row>
        <ButtonControl
          clearItem={clearItem}
          addItem={addItem}
          onSubmit={onSubmit}
        />
        <h2 className="text-center sd-fade-up-down">Danh Sách Đồ Vật</h2>

        <Table striped className="table-hover sd-fade-up-down sd-table">
          <thead>
            <tr>
              <th style={{ width: "500px" }}>Tên đồ vật</th>
              <th>Giá trị</th>
              <th>Trọng lượng</th>
              <th>Số lượng hiện có</th>
              <th>Số lượng lấy</th>
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
            {items.length > 0 &&
              !isLoading &&
              items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Input
                      type="text"
                      id="name"
                      value={item.name ? item.name : null}
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
            {isGreedy && (
              <tr className="sd-total-row">
                <td className="sd-total-title">Tổng cộng:</td>
                <td>{totalValue(items)}</td>

                <td>{totalWeight(items)}</td>
              </tr>
            )}
          </FlipMove>
          {/* </tbody> */}
        </Table>
      </Forms>
    </div>
  );
}

TableItem.propTypes = {};

export default TableItem;
