import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { className, title } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <span onClick={toggle}>{title}</span>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        size="lg"
        style={{ maxWidth: "1600px", width: "80%" }}
      >
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className="sd-modal-about">
          <h2>Niên luận cơ sở ngành KTPM</h2>
          <div>
            <h4>Đề tài: Bài toán sắp xếp ba lô dùng thuật toán tham ăn</h4>
            <h4>Nội dung đề tài:</h4>
            <p>
              Một hành khách chỉ được mang theo một vali có khối lượng hàng hoá
              tối đa là M. Hành khách đó đã chuẩn bị ra N dồ vật được đánh số từ
              1 đến N để chuẩn bị mang theo. Đồ vật thứ i có trọng lượng là ai
              và giá trị sử dụng là ci (i = 1, 2, .. N). Yêu cầu: Chỉ ra đồ vật
              mà hành khách đó cần mang theo sao cho tổng giá trị sử dụng là lớn
              nhất?
            </p>
            <p>
              Thuật toán Tham lam: Martello và Toth (1990) đã đưa ra một giải
              thuật gần đúng kiểu tham lam (greedy approximation algorithm) để
              giải bài toán xếp ba lô. Giải thuật này sắp xếp các đồ vật theo
              thứ tự giảm .dần về giá trị, sau ó theo tđhứ tự đó xếp các đồ vật
              vào ba lô cho đến khi không cho thêm được đồ vật nào vào nữa.
            </p>

            <p>Mục tiêu niên luận:</p>
            <ul>
              <li>- Sử dụng giải thuật Tham lam để giải bài toán đặt ra.</li>
              <li>
                - Sử dụng ngôn ngữ Java (hoặc C hoặc .NET, v.v.) để cài đặt giải
                thuật.
              </li>
              <li>
                - Giao diện thân thiện: Dùng bàn phím, chuột và các tập tin văn
                bản để lấy dữ liệu ban đầu và xuất kết quả ra.
              </li>
            </ul>
          </div>

          <div>
            <h4>Sinh viên thực hiện:</h4>
            <p>Triệu Đức Minh - B1704835</p>
            <h4>Giáo viên hướng dẫn:</h4>
            <p>TS. Nguyễn Công Danh</p>
          </div>
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
