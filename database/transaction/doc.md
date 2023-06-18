# Traction

- Trong MySQL, khi một tác vụ đang ghi (write) trên một dòng dữ liệu, các tác vụ đọc (read) khác có thể đọc dữ liệu đó, trừ khi tác vụ ghi đã khóa (lock) dòng đó và không cho phép các tác vụ đọc khác truy cập vào dòng đó cho đến khi tác vụ ghi kết thúc.
- Mặc định, MySQL sử dụng cơ chế "non-locking reads" trong đó các tác vụ đọc không khóa dòng dữ liệu và có thể đọc dữ liệu ngay cả khi có tác vụ ghi đang xảy ra. Điều này cho phép đọc dữ liệu "dirty read" (đọc dữ liệu chưa được ghi lại hoàn toàn) và "non-repeatable read" (đọc dữ liệu khác nhau trong cùng một transaction).
