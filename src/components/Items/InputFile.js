import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputFile(props) {
  const { setWeightFile, setItemsFile } = props;
  const [fileName, setFileName] = useState();
  const readFile = (e) => {
    if (e !== undefined) {
      if (e.target.files[0] !== undefined) {
        e.preventDefault();
        const items = [];
        const reader = new FileReader();

        setFileName(e.target.files[0].name);
        reader.onload = async (e) => {
          const text = e.target.result.split(/\r\n|\n/);
          setWeightFile(parseInt(text[0]));
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

          setItemsFile(items);
        };
        reader.readAsText(e.target.files[0]);
      }
    }
  };

  return (
    <FormGroup>
      <legend>File</legend>
      <Label for="file" className="sd-file-choose btn btn-primary">
        <FontAwesomeIcon icon="file-upload" /> Upload
      </Label>
      <Input
        type="file"
        name="file"
        id="file"
        onChange={(e) => readFile(e)}
        style={{ display: "none" }}
      />
      <br></br>
      <Label>{fileName}</Label>
    </FormGroup>
  );
}
