import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import imageTxt from "../../asset/images/file-txt.png";
import imageExcel from "../../asset/images/file-excel.png";

const ModalExample = (props) => {
  const { className, title, content } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <span onClick={toggle}>Trợ Giúp</span>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        size="lg"
        style={{ maxWidth: "1600px", width: "80%" }}
      >
        <ModalHeader toggle={toggle}>Trợ Giúp</ModalHeader>
        <ModalBody className="sd-modal-help">
          <ol>
            <li>Chọn khối lượng</li>
            <li>Chọn loại ba lô</li>
            <li>
              Nhập danh sách đồ vật (2 cách)
              <ol>
                <li>
                  Thêm thủ công bằng tay
                  <ol>
                    <li>Chọn 'Thêm'</li>
                    <li>
                      Nhập thông tin đồ vật
                      <ul>
                        <li>Tên đồ vật</li>
                        <li>Giá trị</li>
                        <li>Khối lượng</li>
                        <li>Số lượng hiện có (Nếu là ba lô loại 2)</li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  Nhập danh sách bằng file
                  <ol>
                    <li>Chọn 'Thêm File'</li>
                    <li>Chọn file danh sách đồ vật</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Chọn 'Tham ăn' để thực hiện việc chọn đồ vật</li>
            <li>
              Tuỳ chọn xuất file kết quả: 'Xuât File' để xuất kết quả ra file
              excel
            </li>
          </ol>
          <p>
            <strong>Kết quả: </strong>
            số lượng chọn mỗi đồ vật ở cột 'Số lượng lấy', tổng giá trị ba lô,
            tổng khối lượng đồ vật
          </p>

          <strong>Lưu ý: </strong>
          <ul>
            <li>Định dạng file được thêm phải là file excel hoặc file txt</li>
            <li>
              Đối với file excel phải có cấu trúc:
              <br />
              <img src={imageExcel} alt="excel"></img>
              <br />
            </li>
            <li>
              Đối với file txt phải có định dạng
              <p>
                Dòng đầu là trọng lượng của ba lô <br />
                Các dòng tiếp theo là thông tin đồ vật theo định dạng: [Giá trị]
                [Trọng lượng] [Số lượng hiện có (Nếu là loại 2)] [Tên đồ vật]{" "}
                <br />
                Ví dụ:
              </p>
              <img src={imageTxt} alt="txt"></img>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Nice!
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
