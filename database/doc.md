# DATABASE TIPS

- 1 document chứa tối đa 16MB và object related là 100
- **Workingset** trong MongoDB là phần CSDL được sử dụng tích cực và được lưu trữ trong bộ nhớ đệm (Dữ liệu truy cập thường xuyên và dữ liệu chỉ mục)
- **Cách thực thi** MongoDB kiểm tra dữ liệu được yêu cầu có trong bộ nhớ hay chưa nếu có thì lấy từ bộ nhớ đệm. Nếu chưa thì tải từ disk lên bộ nhớ (quá trình này được gọi là **slow Disk**)
- Tránh truy cập từ disk thì Mongo cố giữ nhiều data trên bộ nhớ đệm nhất có thể => muốn nhanh có thể thêm ram cho máy chủ (tạm thời, chữa cháy) , giảm kích thước collection

## 1. Multiple connection with mongoDB

## 2. Index

- Mục tiêu của index là sắp xếp và khi truy vấn nó sẽ biết nó đang ở trang và trỏ đến trang đó nào nhằm tốc độ xử lý câu truy vấn với một lượng data lớn
- Các loại index trong **mongoDB**: Btree, B+tree
- Các loại index trong **MySQL**: Inno, MyISAM, MEMORY/HEAP, NDB
- Index sẽ lưu trên RAM và sẽ mất thời gian đánh index rất nhiều, nên nếu chỉ mục nhiều quá nó sẽ chia nhỏ ra (Giống như một cuốn sách quá nhiều trang ,ta sẽ chia cuốn sách đó thành từng tập nhỏ)
- Tại sao MongoDB laị chọn index Btree vì một nút sẽ chứa nhiều phần tử so với binary tree thì môi nút chỉ chứa một phần tử
- Btree trong MongoDBMongoDB sẽ gồm thông tin con trỏ và khóa
- **Công thức**: nếu số lượng khóa là n thì con trỏ sẽ là n+1

  ![b-tree](https://i.imgur.com/9NfPFts.png)

- Đánh nhiều index cùng lúc thì cần lưu ý nó sẽ theo quy tắc **preffix rules** (index ngoài cùng bên trái)
- VD: Index({a: 1, b:1, c:1})<br>
  find({a: “viet”}) //index scan<br>
  find({a: “viet”, b: “a”}) //index scan <br>
  find({a: “viet”, b: “a”, c: “b”}) //index scan<br>
  find({a: “viet”, c: “b”}) //index scan<br>
  find({b: “viet”, c: “b”}) //column scan<br>
  find({c: “b”}) //column scan<br>
  find({b: “viet”}) //column scan

---

## 3. Big data

- Sử dụng câu lệnh LIMIT để giới hạn kết quả truy vấn, có một số cách khác để cải thiện tốc độ truy xuất dữ liệu từ một bảng dữ liệu VD: LIMIT 5, 5 sẽ giới hạn số lượng kết quả trả về từ vị trí thứ 6 đến thứ 10.
- Sử dụng index: Tạo index cho các cột quan trọng sẽ giúp cải thiện tốc độ truy xuất dữ liệu. Nếu các cột này đã được tạo index, truy xuất dữ liệu sẽ nhanh hơn nhiều.
- Sử dụng công cụ tìm kiếm: Nếu bảng của bạn chứa nhiều thông tin không cần thiết, bạn có thể sử dụng công cụ tìm kiếm để lọc dữ liệu và chỉ trả về kết quả cần thiết.
- Tối ưu hóa cấu trúc bảng: Tối ưu hóa cấu trúc bảng có thể giúp cải thiện tốc độ truy xuất dữ liệu. Bạn có thể chia bảng thành các bảng nhỏ hơn, cấu trúc lại các cột, hoặc thêm index cho các cột quan trọng.

  1. Khi một bảng có quá nhiều data, ta có thể giải quyết bài toán bigdata bằng cách tạo nhiều bảng rồi sử dụng thuật toán **modulo** để quyết định sẽ lưu vào bảng nào VD(có 3 bảng order rồi ta sẽ dựa vào userID để quyết định lưu vào bảng order nào bằng cách **userID % 3**)

  ![b-tree](https://i.imgur.com/q4JheJq.png)

  2. Thuật toán kết hợp 1 với 2 (Merge Join) là một thuật toán trong SQL được sử dụng để kết hợp dữ liệu từ hai bảng (table) khác nhau dựa trên một cột (column) chung. Thuật toán này sử dụng nguyên lý chia để trị, tương tự như Merge Sort, để thực hiện kết hợp dữ liệu.

  - Cách thức thực hiện thuật toán Merge Join trong SQL như sau:
    2.1. Sắp xếp dữ liệu trong hai bảng theo cột chung (common column).<br>
    2.2. Duyệt qua từng bảng và so sánh giá trị trong cột chung của các hàng (rows) tương ứng.<br>
    2.3. Nếu giá trị trong cột chung của hai hàng bằng nhau, ta kết hợp hai hàng này và đưa vào kết quả.<br>
    2.4. Lặp lại quá trình từ bước 2 cho đến khi duyệt hết hai bảng.<br>

- Sử dụng caching: Nếu dữ liệu trong bảng thay đổi ít, bạn có thể sử dụng caching để lưu trữ kết quả của truy vấn trước đó và trả về kết quả đó nếu truy vấn giống nhau được gửi lại.
- Sử dụng phần mềm truy vấn cơ sở dữ liệu: Các phần mềm truy vấn cơ sở dữ liệu chuyên nghiệp như MySQL hay PostgreSQL cung cấp các công cụ để tối ưu hóa tốc độ truy xuất dữ liệu, chẳng hạn như bảng phân tán hoặc tối ưu hóa truy vấn.
- Sử dụng các kỹ thuật phân tán dữ liệu: Nếu bảng dữ liệu quá lớn để truy xuất trực tiếp, bạn có thể sử dụng các kỹ thuật phân tán dữ liệu để chia dữ liệu thành các phân đoạn và truy xuất dữ liệu từ các phân đoạn này độc lập nhau.
  1. Kỹ thuật phân tán dữ liệu (distributed data processing) là một phương pháp để xử lý dữ liệu lớn bằng cách phân chia dữ liệu thành nhiều phân đoạn và xử lý các phân đoạn này đồng thời trên nhiều máy tính hoặc nút mạng khác nhau trong hệ thống phân tán. Mỗi nút mạng trong hệ thống phân tán thực hiện một phần xử lý dữ liệu trên một phân đoạn nhỏ của dữ liệu, sau đó kết hợp kết quả của các phân đoạn này để đưa ra kết quả cuối cùng.
  2. Kỹ thuật phân tán dữ liệu cho phép tăng tốc độ xử lý dữ liệu bằng cách chia nhỏ dữ liệu thành các phân đoạn nhỏ hơn để xử lý song song trên nhiều nút mạng, đồng thời giảm độ trễ và tăng khả năng chịu lỗi của hệ thống. Kỹ thuật phân tán dữ liệu được sử dụng trong nhiều hệ thống xử lý dữ liệu lớn như Apache Hadoop, Apache Spark, Cassandra, MongoDB, và Riak.

---

## 4. Pattern

- For **Database Pattern**, [click here](./patterns/doc.md) to read more

---

## Go Home [click here](../README.md)
