# REACT

## What is React

- Là một thư viện JS, sử dụng để xây dựng giao diện người dùng

---

## SPA (Single-page application) vs MPA (Multi-page application)

### SPA | SCR (Client side rendering):

- Được cho là cách tiếp cận hiện đại hơn
- Không yêu cầu tải lại trang trong quá trình sử dụng

### MPA | SSR (Server side rendering):

- Là cách tiếp cận cổ điễn hơn
- Tải lại trang trong quá trình sử dụng

### Tốc độ:

- SPA nhanh hơn khi sử dụng:
  1. Phần lớn tài nguyên được tải trong lần đầu (Nên lần đầu reder sẽ chậm)
  2. Trang chỉ tải thêm dữ liệu mới khi cần
- MPA chậm hơn khi sử dụng:
  1. Luôn tải lại trang khi truy cập hoặc chuyển trang

### Bóc tách

- SPA có phần front-end riêng biệt
- MPA front-end và back-end phụ thuộc lẫn nhau nhiều hơn, được đặt trong cùng một dự án

### SEO

- SPA không thân thiện SEO như MPA
- SPA trải nghiệm trên thiết bị di động tốt hơn MPA

### UX

- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- Trải nghiệm trên các thiết bị di dộng tốt hơn

### Quá trình phát triển

- SPA dễ dàng tái sử dụng code (component)
- SPA bóc tách FE và BE:
  1. Chia team phát triển song song
  2. Phát triển thêm mobile app dễ dàng

### Phụ thuộc Javascript

- SPA phụ thuộc hoàn toàn vào javascript (Nên trong react mới có thẻ noscript để thông báo khi trình duyệt không hỗ trợ Javascript)
- MPA có thể không cần Javascript

### Chọn SPA hay MPA ?

- Tùy thuộc vào dự án, vì không có gì hoàn hảo trong mọi trường hợp

### Performance

- SPA sẽ giảm tải cho server khi nhiều người sử dụng vì việc render client đã làm
- MPA sẽ tăng tải cho server khi nhiều người sử dụng vì mỗi lần tải trang hay chuyển trang thì đều gọi request lên server

---

## react.createElement() vs document.createElement()

### react.createElement()

- Trả về một đối tượng gọi là react element
- Thành phần nhỏ nhất của react.createElement() là react element

  ```html
  <script>
    //DOM
    const h1DOM = document.createElement("h1");

    h1DOM.title = "hello";
    h1DOM.className = "heading";

    h1DOM.innerText = "Hello guys!";

    document.body.appendChild(h1DOM);

    const ulDOM = document.createElement("ul");

    const liDOM1 = document.createElement("li");
    liDOM1.innerText = "Javascript";

    const liDOM2 = document.createElement("li");
    liDOM2.innerText = "ReactJS";

    ulDOM.appendChild(liDOM1);
    ulDOM.appendChild(liDOM2);
    document.body.appendChild(h1DOM);
  </script>
  ```

### document.createElement()

- Trả về một đối tượng gọi là dom element
- Thành phần nhỏ nhất của document.createElement() là node

  ```html
  <script>
    //React -> React DOM
    //React.createElement(type, props, chidlren, n)
    const h1React = React.createElement(
      "h1",
      {
        title: "hello",
        className: "heading",
      },
      "hello guys!"
    );

    document.dir(h1React);

    const ulReact = React.createElement(
      "ul",
      {
        id: "ul-id",
        style: "color:red;font-size:30px",
      },
      React.createElement("li", null, "Javascript"),
      React.createElement("li", null, "ReactJS")
    );

    document.dir(ulReact);
  </script>
  ```

---

## React DOM

- Là cầu nối để react tạo element và dùng element đó render vào dom

### Tại sao lại tách React-dom ra ?

- Vì để tinh giản thư viện react. Nếu như DOM thì dùng react-dom, nếu dùng code mobile thì dùng react-native

  ```html
  <script>
    //React -> React DOM
    //React.createElement(type, props, chidlren, n)
    const h1React = React.createElement(
      "h1",
      {
        title: "hello",
        className: "heading",
      },
      "hello guys!"
    );

    console.dir(h1React);
    const root = document.getElementById("root");

    //react-DOM -> render ui
    ReactDOM.render(h1React, root);

    const ulReact = React.createElement(
      "ul",
      {
        id: "ul-id",
        style: "color:red;font-size:30px",
      },
      React.createElement("li", null, "Javascript"),
      React.createElement("li", null, "ReactJS")
    );

    console.dir(ulReact);
    const root = document.getElementById("root");

    //react-DOM -> render ui
    ReactDOM.render(h1React, root);

    //React DOM version 18
    const root = document.getElementById("root");
    root.render(h1React);
  </script>
  ```

---

## JSX

- Là Javascript XML
- JSX không phải là HTML
- Cần có Javascript và Babel(Chuyển đổi cú pháp từ ES6 qua ES5) để dùng JSX

  ```html
  <script type="text/babel">
    const jsx = (
      <React.Fragment>
        <h1>Heading 1</h1>
        <h1>Heading 2</h1>
      </React.Fragment>
    );

    const hReact = React.createElement(
      React.Fragment,
      null,
      React.createElement("h1", null, "Javascript"),
      React.createElement("h2", null, "ReactJS")
    );

    //React DOM version 18
    const root = document.getElementById("root");
    ReactDOM.render(jsx, root);
    ReactDOM.render(hReact, root);
  </script>
  ```

---

## React Element types

- React Element types: string, function, class

### Tại sao lại có function và class

- Vì tư tưởng của wrapp là chia nhỏ component ra để nhìn code clean hơn , logic được rõ ràng và có thể tái sử dụng code => để react có thể chia component như vậy thì cần hỗ trợ function và class

  ```html
  <script type="text/babel">
    function Header() {
      return <div className="header">hello</div>;
    }

    const jsx = (
      <React.Fragment>
        <Header />
        <h1>Heading 2</h1>
      </React.Fragment>
    );

    const root = document.getElementById("root");
    ReactDOM.render(jsx, root);
  </script>
  ```

---

## Props (properties) thuộc tính

#### React element

- Sử props giống như với attribute của thẻ HTML
- 2 props class => className, for => htmlFor
- Phải tuân theo quy ước có sẵn

#### React component

- Sử dụng props giống như đối số cho component
- Tự đặt tên cho props
  1. Đặt theo camelCase
  2. \*Có thể bao gồm dấu gạch ngang
- **Chú ý**:
  1. Prop “key” là prop đặc biệt
  2. Props cơ bản là đối số của component => props có thể là bất cứ kiểu gì
  3. Sử dụng destructuring

```html
<script type="text/babel">
  function PostItem(props) {
    return (
      <div className="post-item">
        <img src={props.image} alt={props.title} />
        <h2 className="post-tile">{props.title}</h2>
        <p className="post-desc">{props.description}</p>
        <p className="post-publicshed">{props.publicshedAt}</p>
      </div>
    );
  }

  function App() {
    return (
      <div className="wrapper">
        <PostItem
          image="abc.png"
          title="test"
          description="test"
          publicshedAt="20/10/2023"
        />
      </div>
    );
  }

  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
</script>
```

---

## Go Home [click here](../README.md)
