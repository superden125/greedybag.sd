import React from "react";
import classNames from "classnames";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import { FormGroup, Input, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputFile(props) {
  const {
    setFileName,
    fileNames,
    setIsLoading,
    setInputFile,
    totalWeight,
    totalValue,
    file,
    setFile,
    items,
    isGreedy,
    inputWeight,
    type,
    disabled,
  } = props;

  const fileUpload = React.useRef(null);

  const getExtFile = (filename) => {
    let last_dot = filename.lastIndexOf(".");
    return filename.slice(last_dot + 1);
  };

  const readFileTxt = (reader) => {
    const items = [];

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
          });
        }
      });

      setInputFile(weight, items);

      setIsLoading(false);
    };
    //reader.readAsText(e.target.files[0]);
  };

  const readFileXlsx = (reader) => {
    const items = [];
    reader.onload = async (e) => {
      setIsLoading(true);

      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      /* Update state */
      // console.log(data);

      for (let i = 1; i < data.length; i++) {
        items.push({
          name: data[i][0].trim(),
          value: data[i][1],
          weight: data[i][2],
          stock: data[i][3] % 1 === 0 ? data[i][3] : "",
          qty: "",
        });
      }
      setInputFile(0, items);
      setIsLoading(false);
    };
  };

  const readFile = (e) => {
    if (e !== undefined) {
      if (e.target.files[0] !== undefined) {
        e.preventDefault();

        const reader = new FileReader();
        let ext = getExtFile(e.target.files[0].name);
        setFileName(e.target.files[0].name);
        setFile(e.target.value);

        switch (ext) {
          case "txt":
            readFileTxt(reader);
            break;

          case "xlsx":
            readFileXlsx(reader);
            break;
          default:
            break;
        }

        ext === "xlsx" && reader.readAsBinaryString(e.target.files[0]);
        ext === "txt" && reader.readAsText(e.target.files[0]);
      }
    }
  };

  const exportToCSV = (items, fileName) => {
    let csvData = [...items];
    const ttValue = totalValue(csvData);
    const ttWeight = totalWeight(csvData);
    csvData.push({
      name: "Input Weight:",
      value: inputWeight,
      weight: "Type:",
      stock: type,
    });
    csvData.push({
      name: "Total:",
      value: ttValue,
      weight: ttWeight,
    });

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(csvData);

    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <FormGroup>
      <legend>File</legend>
      <Label
        for="file"
        className={classNames("sd-file-choose sd-btn btn btn-primary", {
          disabled: disabled,
        })}
      >
        <span className="sd-file-upload">
          <FontAwesomeIcon icon="file-upload" className="sd-icon" />
          Thêm File
        </span>
      </Label>

      <Input
        type="file"
        name="file"
        id="file"
        onChange={(e) => readFile(e)}
        style={{ display: "none" }}
        value={file || ""}
        disabled={disabled}
        ref={fileUpload}
      />

      <br></br>
      <Label>{fileNames}</Label>
      <br />
      <Button
        className="sd-file-choose sd-btn btn btn-danger"
        onClick={() => exportToCSV(items, "result")}
        disabled={!isGreedy}
      >
        <FontAwesomeIcon icon="file-download" className="sd-icon" />
        Xuất file
      </Button>
    </FormGroup>
  );
}
