# DESIGN PATTERNS

## Polymorphic (Mẫu đa hình)

- Tạo những thuộc tính chung vào một collection
- Một Collection trong Mongo có thể chứa 32TB

  ![polymorphic](https://i.imgur.com/QxfDU8w.png)

---

## Attribute

- Nhóm nhiều trường tương tự vào một mảng, mảng sẽ chứa các cặp **key (tên trường)** và **value (giá trị của trường đó)** và có thể thêm một số trường khác để lưu thông tin thêm VD **{k: “hight”, v: “97”, u: “mm”}**
- **Trước khi dùng Attribute**: Nếu truy vấn nhanh cần phải đánh index cho từng trường => nếu quá nhiều trường đánh index sẽ làm tăng số lần sắp xếp các trường

  ![attribute](https://i.imgur.com/vE4s4Vm.png)

- **Sau khi dùng Attribute**: Do các trường lưu theo cặp key và value thì ta chỉ cần đánh index cho **key** và **value** là được, như thế sẽ giảm số lượng cột đánh index

  ![attribute](https://i.imgur.com/q5IQMoH.png)

- **Nhược điểm**: Truy vấn theo từng cấp

---

## Bucket

- Thường dùng để thiết kế lưu log, thời gian ghi nhận liên tục
- **Trước khi dùng Bucket**: mỗi phút hoặc môi giây lưu document một lần => tốn không gian lưu trữ anh hưởng đến hiệu năng câu truy vấn

  ![bucket](https://i.imgur.com/u1zKeSP.png)

  ![bucket](https://i.imgur.com/3oNJvin.png)

- **Sau khi dùng Attribute**: Thay vì mỗi phút hoặc môi giây lưu document một lần thì thay vào đó mình sẽ ghi nhận lại thông tin và 1 tiếng mình sẽ tổng hợp trong một document

  ![bucket](https://i.imgur.com/VyGwOXp.png)

  ![bucket](https://i.imgur.com/nY8eWd4.png)

- Cách cải thiện 1 ngày một document:

  ![bucket](https://i.imgur.com/WPMXGfb.png)

- **Nhược điểm**: Triển khai ban đầu rất phức tạp

---

## Subset (Mẫu tập hợp con)

- Thường dùng để thiết kế lưu comment, đánh giá
- Thay vì lưu hết data và trong document thì ta chĩ nên lưu những data thường xuyên được sử dụng còn các data khác sẽ lưu trong một bảng khác khi có nhu cầu sẽ truy vấn sau
- **Trước khi dùng Subset**: Tất cả thông tin được lưu trong một document. Giả sử một bài post đang nhiều comment và khi comment này nhiều lên => VD bài post có 50000000 comment thì lúc đó document sẽ tới giới hạn lưu trữ (16MB), hoặc thông tin được lên bộ nhớ đệm quá nhiều dẫn đến giảm hiệu năng và người dùng cũng không có nhu cầu xem hết.

  ![bucket](https://i.imgur.com/KKIcyPI.png)

- **Sau khi dùng Subset**: Chúng ta chỉ lưu một số ít data cần thiết (VD 5 comment mới nhất, 5 đánh giá mới nhất) vào trong một document còn những data còn lại ta sẽ lưu vào trong một document mới. Khi nào người dùng có nhu cầu coi thêm thì mình sẽ lấy data từ bảng kia => giảm thiểu data dư thừa lưu trong bộ nhớ tạm.

  ![bucket](https://i.imgur.com/mtvK7eH.png)

  ![bucket](https://i.imgur.com/uJfiBvZ.png)

---

## Go Home [click here](../../README.md)
