# BASIC JS

## ECMAScript

- ECMAScript là một chuẩn ngôn ngữ lập trình, định nghĩa các quy tắc và hướng dẫn để triển khai ngôn ngữ lập trình JavaScript
- ECMAScript định nghĩa các quy tắc cơ bản để triển khai các tính năng của JavaScript, bao gồm cách xử lý các biến, hàm, lớp và cú pháp

---

## JS engine

- JS Engine là một chương trình phần mềm hoặc một thành phần của trình duyệt web được sử dụng để biên dịch và thực thi mã JavaScript
- JS Engine thực hiện các bước sau:
  1. **Phân tích cú pháp (parsing)**: JS engine phân tích cú pháp (syntax) của mã JavaScript để tạo ra một cấu trúc cây phân tích cú pháp (parse tree).
  2. **Biên dịch (compiling)**: Sau khi cấu trúc cây phân tích cú pháp đã được tạo ra, JS engine sẽ biên dịch mã JavaScript sang mã máy (machine code). Để làm điều này, JS engine sử dụng một công cụ gọi là bộ biên dịch (compiler).
  3. **Tối ưu hóa (optimizing)**: Một số JS engine như V8 có khả năng tối ưu hóa mã JavaScript bằng cách sử dụng một kỹ thuật gọi là "just-in-time (JIT)" compiling. JIT compiling sẽ biên dịch và tối ưu hóa mã JavaScript trong thời gian chạy, giúp mã chạy nhanh hơn.
  4. **Thực thi (executing)**: JS engine thực thi mã máy đã được tạo ra bằng các bước trên, và đưa ra kết quả tương ứng. Trong trường hợp của JavaScript, kết quả thường là sự thay đổi trên các phần tử HTML trên trang web, hoặc các thông báo ghi ra console, v.v.

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
  1. Macro task bao gồm: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
  2. Micro task bao gồm: process.nextTick, Promises, queueMicrotask, MutationObserver
- Về độ ưu tiên thì micro task sẽ được ưu tiên hơn macrotask
- Event loop sẽ kiểm tra trong call stask còn tác vụ nào đang thực thi hay không, Nếu không nó sẽ đưa tác vụ từ trong call queue (cụ thể là các tác vụ trong micro task trước, nếu micro task hết mới tới lượt macro task) vào trong call stack để thực thi

---

## Promise

- Các trạng thái của Promise gồm:
  1. **Pending**: Trạng thái khi Promise mới được khởi tạo và chưa được giải quyết (resolve) hoặc thất bại (reject).
  2. **Fulfilled**: Trạng thái khi Promise đã được giải quyết thành công, có kết quả trả về.
  3. **Rejected**: Trạng thái khi Promise bị từ chối, thất bại, có lỗi xảy ra.
  4. **Settled**: Trạng thái khi Promise đã được giải quyết (thành công hoặc thất bại), không còn ở trạng thái pending nữa.

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

---

## Golang vs NodeJS

- NodeJS là single thread còn golang là multi thread.
- Nodejs thông dịch còn golang là biên dịch
- Ngôn ngữ lập trình: Node.js được viết bằng JavaScript, trong khi Golang được viết bằng Go.
- Độ phổ biến: Node.js phổ biến hơn trong việc phát triển web, trong khi Golang được sử dụng nhiều trong các ứng dụng back-end.
- Thời gian phát triển: Với Node.js, việc phát triển ứng dụng web nhanh hơn bởi vì nó sử dụng JavaScript và có nhiều module có sẵn. Trong khi đó, Golang cung cấp các công cụ mạnh mẽ để tạo ra ứng dụng đáp ứng nhanh hơn.
- Độ tin cậy: Với tính năng goroutine và channel, Golang giúp việc quản lý lỗi tốt hơn so với Node.js. Node.js thường gặp phải vấn đề về đồng bộ hóa và phát triển ứng dụng lớn hơn.
- Hiệu năng: Với tính năng goroutine và concurrency, Golang cung cấp hiệu năng cao hơn so với Node.js trong việc xử lý các tác vụ đồng thời.

---

## Promise vs Async/Await:

1. **Promise**

   - Thường được dùng trong các trường hợp đơn giản và cần xử lý lỗi.
   - Nếu xử lý nhiều tác vụ bất đồng bộ cùng nhau sẽ dẫn tới tình trạng **promise hell**

2. **Async/Await**
   - Thường được dùng trong các trường hợp phức tạp (thực hiện nhiều yêu cầu bất đồng bộ cùng một lúc).
   - Nó làm cho mã trông giống với các thao tác đồng bộ và dễ hiểu hơn.
   - Khi sử dụng Async/Await, người lập trình phải xử lý các lỗi và ngoại lệ được ném ra từ các hàm bất đồng bộ trong try-catch.

---

## Closure

- Là một hàm được khai báo trong hàm khác và hàm này có thể truy cập và sử dụng biến bên ngoài phạm vi hàm đó.

---

## Callback

- Callback là một hàm được truyền như một tham số cho một hàm khác và được gọi lại (invoke) trong tương lai sau khi một tác vụ hoàn thành.
- Callback thường được sử dụng để xử lý các tác vụ không đồng bộ (asynchronous) như đọc/ghi file, truy vấn cơ sở dữ liệu, gửi yêu cầu HTTP, và các hoạt động mạng khác.

---

### Function declaration và Function expression

- **Function Declaration**
  1. Cho phép khai báo một hàm trực tiếp trong phạm vi toàn cục hoặc bên trong một khối mã.
  2. Được khai báo bằng cú pháp: **function functionName() { // code }**.
  3. **Hoisting**: Một đặc điểm quan trọng của Function Declaration là nó được kéo lên đầu phạm vi, vì vậy bạn có thể gọi hàm trước khi nó được khai báo trong mã.
- **Function Expression**
  1. Là một cách khai báo hàm thông qua việc gán một hàm cho một biến hoặc một thuộc tính của đối tượng.
  2. Được khai báo bằng cú pháp: **var functionName = function() { // code }** hoặc **const functionName = function() { // code }**.
  3. **Không có hoisting**: Function Expression không được kéo lên đầu phạm vi, vì vậy bạn cần đảm bảo rằng biến chứa hàm được khai báo trước khi nó được sử dụng trong mã.

---

## Prototype

- Prototype chứa các thuộc tính và phương thức được chia sẻ cho tất cả các đối tượng được tạo ra từ nó.
- VD

  ```TS
  function Person(name) {
    this.name = name;
  }


  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };

  let person1 = new Person('Alice');
  let person2 = new Person('Bob');

  person1.greet(); // Hello, my name is Alice
  person2.greet(); // Hello, my name is Bob
  ```

---

## Libuv

- Libuv là thư viện c++ hỗ trợ đa nền tảng có trách nhiệm thực hiện thread pool, event loop và các xử lý bất đồng bộ trong nodeJS
- Trong nodeJS các xử lý có block sẽ ủy quyền cho libuv và có các thread pool xử lý những hoạt động này

---

## Nodejs

- là một nền tảng để phát triển ứng dụng web dựa trên nền tảng JavaScrip
- Nodejs được phát triển theo hướng event driven (Mô hình hướng sự kiện)

---

## Tính chất NodeJS

- Non-blocking I/O
- Eventloop
- Khả năng mở rộng: Node.js có khả năng xử lý hàng nghìn kết nối đồng thời mà không gây ra tình trạng đơ máy
- Dễ dàng xây dựng các ứng dụng mạng: Node.js có các thư viện và framework hỗ trợ việc phát triển các ứng dụng mạng, bao gồm Express, Socket.io, Meteor, NestJS, etc
- Được viết bằng ngôn ngữ JavaScript: Node.js cho phép các lập trình viên sử dụng JavaScript để xây dựng cả phía client và phía server của một ứng dụng mạng, tạo ra sự đồng nhất và dễ dàng trong việc quản lý mã nguồn.

---

## Luồng hoạt động của Nodejs

- **Ngôn ngữ Javascript không thực hiện những công việc ở server-side như đọc file, truy vấn database mà nó ủy quyền cho phần core thực hiện (phần core được viết bởi C/C++)**
- Khi có request đến server, nó đẩy event vào **Event Queue**.
- **Event loop** sẽ nhận lần lượt các event để xử lý.
- Nếu event đó **không bị Block (Không phải chờ)**, nó tự xử lý rồi trả response lại
- Còn nếu event đó **bị Block (phải chờ)**, Event Loop sẽ đưa công việc qua **Thread Pool**.
- Sau khi thread pool xử lý xong trả về một **callback function**
- Callback function sẽ tiếp túc được đẩy vào event queue(không cần phải đợi event queue) và chờ event loop xử lý

  ![event-loop](https://i.imgur.com/siIW46E.png)

---

## Go Home [click here](./README.md)
