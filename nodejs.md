# BASIC JS

## JS engine

- JS Engine là một chương trình phần mềm hoặc một thành phần của trình duyệt web được sử dụng để biên dịch và thực thi mã JavaScript

---

## V8 engine

- V8 engine là một engine JavaScript mã nguồn mở, được sử dụng để biên dịch và thực thi mã JavaScript trên các trình duyệt web
- V8 engine được viết bằng C++ và tối ưu hóa để cải thiện tốc độ thực thi JavaScript bằng cách sử dụng các kỹ thuật như Just-In-Time Compilation (JIT) và Garbage Collection (GC).
- Với JIT, V8 engine sẽ biên dịch mã JavaScript thành mã máy trực tiếp thay vì thông dịch và thực thi từng dòng mã. Điều này giúp cải thiện tốc độ thực thi mã JavaScript.
- Với GC, V8 engine tự động quản lý và thu dọn các đối tượng không sử dụng trong bộ nhớ để tối ưu hóa sử dụng tài nguyên.

---

## Luồng hoạt động trong js

- Event loop sẽ đưa từng tác vụ vào **call stack** để xử lý.
- Nếu tác vụ đồng bộ thì sẽ được thực thi ngay
- Còn nếu tác vụ bất đồng bộ sẽ được đẩy qua cho **WebAPIs/BrowserApis/NodeApis** để xử lý và trả kết quả vào trong **callback queue**
- Trong back queue sẽ có 2 ngăn bao gồm: **micro task** và **macro task**
  1. Micro task bao gồm: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
  2. Macro task bao gồm: process.nextTick, Promises, queueMicrotask, MutationObserver
- Về độ ưu tiên thì micro task sẽ được ưu tiên hơn macrotask
- Event loop sẽ kiểm tra trong call stask còn tác vụ nào đang thực thi hay không, Nếu không nó sẽ đưa tác vụ từ trong call queue (cụ thể là các tác vụ trong micro task trước, nếu micro task hết mới tới lượt macro task) vào trong call stack để thực thi

---

## Non-blocking IO

- Non-blocking IO (Input/Output) là một cơ chế trong lập trình cho phép các tiến trình hoạt động mà không phải chờ đợi các hoạt động nhập/xuất hoàn tất.
- Thay vì chờ đợi, các tiến trình non-blocking IO sẽ tiếp tục thực thi các tác vụ khác trong khi các hoạt động IO đang diễn ra.

---

## Single thread

- Single thread là mô hình thực thi mà chỉ có một luồng (thread) duy nhất trong quá trình thực thi chương trình.
- Trong một single thread, tất cả các tác vụ (tasks) phải được thực hiện theo trình tự và chỉ có một tác vụ được thực hiện tại một thời điểm.
- Việc sử dụng single thread giúp tối ưu hóa tài nguyên của server, giảm thiểu tình trạng cạnh tranh tài nguyên giữa các luồng và đảm bảo tính nhất quán của dữ liệu.

---

## Multi thread

- Multithreading là mô hình thực thi mà cho phép chạy đồng thời nhiều luồng (thread) trong cùng một chương trình.
- Trong multithreading, mỗi luồng có thể thực hiện các tác vụ riêng biệt đồng thời, tuy nhiên các luồng này vẫn chia sẻ tài nguyên chung của chương trình.

---

## Memory leak

- Memory leak là một hiện tượng xảy ra khi một ứng dụng không thể giải phóng bộ nhớ đã được cấp phát cho các đối tượng không sử dụng nữa.
- Nếu ứng dụng không giải phóng bộ nhớ đã được cấp phát cho các đối tượng không sử dụng nữa, các đối tượng đó sẽ tiếp tục tồn tại trong bộ nhớ và dần dần sẽ chiếm dụng bộ nhớ hệ thống, gây ra hiện tượng memory leak.
- Hiện tượng này có thể gây ra sự chậm trễ hoặc đáng kể giảm hiệu suất của ứng dụng và có thể dẫn đến sự cố hệ thống nghiêm trọng.

## Go Home [click here](./README.md)
