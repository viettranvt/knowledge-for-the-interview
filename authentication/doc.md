# Authentication

## Passport

- passport là một middleware giúp xác thực giữa user và hệ thống
- 5 tính năng chính:

  1. passport.initialize() // khởi tạo passport
  2. passport.session() // khởi tạo passport làm việc với session
  3. passport.authentication() //xác thực thông qua một middleware
  4. passport.serializeUser() // Đảm bảo cung cấp thông tin danh tính cho người dùng trên server sau khi xác thực xong
  5. passport.deserializeUser() // xác thực lại danh tính khi gọi hàm hoặc một request sau khi đã xác thực xong

- Quy trình làm việc của passport:

![auth](https://i.imgur.com/QafgQZF.png)

---

## Go Home [click here](/README)
