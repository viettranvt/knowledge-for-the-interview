# REDIS

- Là một hệ thống cơ sở dữ liệu mã nguồn mở (open-source) được phát triển để lưu trữ và truy vấn dữ liệu.
- Tên "Redis" viết tắt của "Remote Dictionary Server" (máy chủ từ điển từ xa) và nó được thiết kế để làm việc với dữ liệu trong bộ nhớ (in-memory data store).
- Redis được xây dựng dựa trên kiến trúc key-value store, trong đó dữ liệu được lưu trữ dưới dạng cặp khóa-giá trị.

## PROBLEM

- **Tuyết lở (Cache avalanche)** Khi lượng truy cập cao cùng lúc tới VD(10K user) mà redis lưu thông tin đồng loạt hết hạn hoặc redis đột ngột chết, dẫn tới hệ thống buộc phải truy xuất xuống DB (Mysql) mà một mysql chỉ xử lý 2k request/s dẫn tới bị sập sau đó khiến toàn bộ hệ thống bị sập

  ![redis](https://i.imgur.com/A4JAWLY.png)
  ![redis](https://i.imgur.com/SotbC78.png)

  **Biện pháp xử lý:**

  1. Tránh tình trạng hết hạn cùng một lúc bằng cách random thêm một số thời gian nữa để thời gian chết khác nhau
  1. Sử dụng mutex (cơ chế khóa lượng đồng thời)
  1. Khóa kép (tạo thêm redis nữa không có hạn nếu redis có hạn chết nó sẽ tiếp tục chui vào redis ko có hạn chết)

- **Thâm nhập (Cache penetration)**
- **Bread down (Cache breakdown)**

---

## Go Home [click here](../README.md)
