import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export default function InputFile(props) {
  const {
    setFileName,
    fileNames,
    setIsLoading,
    setInputFile,
    file,
    setFile,
    disabled,
  } = props;

  const readFile = (e) => {
    if (e !== undefined) {
      if (e.target.files[0] !== undefined) {
        e.preventDefault();
        const items = [];
        const reader = new FileReader();
        setFileName(e.target.files[0].name);
        setFile(e.target.value);
        console.log(e.target.value);
        reader.onload = async (e) => {
          setIsLoading(true);
          const text = e.target.result.split(/\r\n|\n/);
          let weight = parseInt(text[0]);
          text.forEach((line, index) => {
            //console.log(line);
            if (index !== 0) {
              const cell = line.split(" ");

              const stock = cell[2] % 1 === 0 ? cell[2] : "";
              let name = "";
              if (stock !== "") {
                cell.slice(3).forEach((t) => {
                  name += t + " ";
                });
              } else {
                cell.slice(2).forEach((t) => {
                  name += t + " ";
                });
              }
              items.push({
                name: name.trim(),
                value: cell[0],
                weight: cell[1],
                stock: stock,
                qty: "",
                time: "",
              });
            }
          });

          //setItemsFile(items);
          setInputFile(weight, items);
          setIsLoading(false);
        };

        reader.readAsText(e.target.files[0]);
      }
    }
  };

  return (
    <FormGroup>
      <legend>File</legend>
      <Label
        for="file"
        // className="sd-file-choose btn btn-primary disabled"
        className={classNames("sd-file-choose btn btn-primary", {
          disabled: disabled,
        })}
      >
        <FontAwesomeIcon icon="file-upload" /> Upload
      </Label>

      <Input
        type="file"
        name="file"
        id="file"
        onChange={(e) => readFile(e)}
        style={{ display: "none" }}
        value={file}
        disabled={disabled}
      />
      <br></br>
      <Label>{fileNames}</Label>
    </FormGroup>
  );
}
