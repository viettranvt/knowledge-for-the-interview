# COOKIES SESSION

- Giống nhau:

1. Xác định và theo dõi hành vi của người dùng

- Khác nhau

1. Cookies lưu trữ tại client và session lưu trữ tại server => session an toàn hơn cookies do năm ở server
2. Cookies không an toàn vì có thể giả mạo
3. Nếu app nghiêng về hiệu suất máy chủ thì nên dùng cookies (vì session lưu trữ trên máy chủ trong một khoảng thời gian nhất định nếu sl truy cập tăng cùng một lục thì sẽ chiếm hiệu năng do memory tăng ), nếu app thiêng về bảo mật nên dùng session
4. Cookies có giới hạn dung lượng 4KB
5. Thông tin quan trọng của tài khoản thì không nên lưu cookies vì có thể đọc được
6. Quản lý session vô cùng phức tạp (lưu trữ session khi bảo trì server, khi scale ra nhiều server)

# COOKIES

- Là tập tin do trình duyệt quản lý theo kịểu **key – value**
- Lưu trữ tại client (giống cmnd luôn để ở ví. Khi làm gì đó cần đưa ra để xác minh)
- file chưa thông tin tầm 4KB
- Nếu không set time to live cho cookie thì nó sẽ là một session
- Các thông số của cookie:
  1.  **maxAge**: Thời gian sống của cookie tính theo miliseconds
  2.  **expired**: Thời gian sống của cookie tính theo date
  3.  **httpOnly**: Có cho phép người dùng truy cập browser để lấy thông tin cookie
  4.  **sercure**: mã hoá thông tin khi truyền tải dữ liệu

![cookies](https://i.imgur.com/EV832se.png)

# SESSION

- Session là thông tin lưu trữ tại server
- sessionId là mã định danh (khi user gửi cnnd thì sẽ xác định người đó là ai)
- Khi server có xảy ra lỗi và restart lại thì người người buộc phải đăng nhập lại
- Khi scale hệ thống theo chiều ngang (phân tán, cluster) việc quản lý session sẽ rất khó và phải có nới quản lý riêng(Khả năng mở rộng kém)

![session](https://i.imgur.com/rbzWknd.png)

- Các ý tưởng dùng session cho server khi scale chiều ngang

  1. Request đầu tiên vào máy chủ nào thì các request sau cũng phải vào máy chủ đó
     **Nhược đĩểm**: Một máy chủ có thể tiếp nhận quá nhiều yêu cầu và khi mất session ở máy chủ đó buộc phải đăng nhập lại

     ![session](https://i.imgur.com/yfVjxTX.png)

  2. Copy session: khi session được tạo thì sẽ được đồng bộ session cho các máy chủ còn lại => các máy chủ đều có session
     **Nhược đĩểm**: Có thể quá trinh đồng bộ ko đồng nhất

     ![session](https://i.imgur.com/ZrVZzto.png)

  3. Share session: Lưu các session trong một CSDL(redis) tập trung khi đó các máy chủ có thể lấy session trong CSDL bằng session id
     **Nhược điểm** khi CSDL die thì sẽ mất toàn bộ session

     ![session](https://i.imgur.com/Wk9jGqI.png)

---

## Go Home [click here](/README)
