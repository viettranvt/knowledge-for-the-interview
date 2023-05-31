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

## DOM event

- Component tự định nghĩa phải viết hoa kí tự đầu

  ```html
  <script type="text/babel">
    function App() {
      return (
        <div className="wrapper">
          <button
            onClick={() => {
              console.log("hello");
            }}
          >
            click me
          </button>
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
  ```

- Chọn component trong một object

  ```html
  <script type="text/babel">
    const Form = {
      Input() {
        return <input />;
      },
      CheckBox() {
        return <input type="checkbox" />;
      },
    };

    // solution 1
    function App() {
      return (
        <div className="wrapper">
          <Form.Input />
        </div>
      );
    }

    //solution 2
    function App() {
      const type = "Input";
      const Component = Form[type];

      return (
        <div className="wrapper">
          <Component />
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
  ```

  ```html
  <script type="text/babel">
    function Button({title, href, onClick}) {
        let Component = "button"
        const props = {}

        if (href) {
            Component = "a"
            props.href = href
        }

        if (onClick) {
            props.onClick = onClick
        }

        return (
            <Component {...props}>{title}<Component/>
        )
    }

    // solution 1
    function App() {
      return (
        <div className="wrapper">
          <Button
            title="Clickme"
            href="https://abc.com"
            onClick={() => {
              console.log("abc");
            }}
          />
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
  ```

- Booleans, null & undefined không được render

  ```html
  <script type="text/babel">
    function App() {
      //Not render
      return <div className="wrapper">{true}</div>;
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
  ```

- Kết hợp toán tử logic để render theo điều kiện

  ```html
  <script type="text/babel">
    let firstAccess = true;

    function App() {
      return (
        <div className="wrapper">{firstAccess && <h1>Welcome to ...</h1>}</div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
  ```

  ```html
  <script type="text/babel">
    let firstAccess = true;

    function App({ title }) {
      return (
        <div className="wrapper">
          <h1>{title || "hello"}</h1>
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App title="hello" />, root);
  </script>
  ```

## Children props & Render props

- Có hai cách truyền Props: string(string literal), biểu thức(expression)

  ```html
  <script type="text/babel">
    function Button({title}) {
        let Component = "button"

        return (
            <Component>{title}<Component/>
        )
    }

    // string literal
    function App({title}) {
      return (
        <div className="wrapper">
          <Button isPrimary title="hello" />
        </div>
      );
    }

    //expression
    function App({title}) {
      const title = "hello";

      return (
        <div className="wrapper">
          <Button isPrimary title={title} />
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App title="hello" />, root);
  </script>
  ```

- Props default to true

  ```html
  <script type="text/babel">
    //isPrimary = true
    function Button({title, isPrimary}) {
        let Component = "button"

        return (
            <Component>{title}<Component/>
        )
    }


    function App(title) {
      const title = "hello";

      return (
        <div className="wrapper">
          <Button isPrimary title={title} />
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App title="hello" />, root);
  </script>
  ```

- Pread and rest props

  ```html
  <script type="text/babel">
    function Input({ label, ...inputProps }) {
      return (
        <div>
          <label>{label}</label>
          <input {...inputProps} />
        </div>
      );
    }

    function App() {
      return (
        <div className="wrapper">
          <Input label="Full name" placeholder="Enter name" type="radio" />
        </div>
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
  ```

### Children props

- Có hai cách truyền children Props: string(string literal), biểu thức(expression)

- <YourComponent>String literals</YourComponent>
- <YourComponent>{expression}</YourComponent>

  ```html
  <script type="text/babel">
    function Button({children}) {
        let Component = "button"

        return (
            <Component>{children}<Component/>
        )
    }

    // string literals
    function App(title) {
        return (
            <div className="wrapper">
                <Button>Click me</Button>
            </div>
        );
    }

    // expression
    function App() {
        return (
            <div className="wrapper">
                <Button>{click me}</Button>
            </div>
        );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App/>, root);
  </script>
  ```

### Render props

```html
<script type="text/babel">
  function List({ data }) {
    return (
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  // string literals
  function App(title) {
    const cars = ["honda", "toyota"];

    return (
      <div className="wrapper">
        <List data={cars} />
      </div>
    );
  }

  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
</script>
```

```html
<script type="text/babel">
  function List({ data, chidlren }) {
    return <ul>{data.map((item) => children(item))}</ul>;
  }

  // string literals
  function App(title) {
    const cars = ["honda", "toyota"];

    return (
      <div className="wrapper">
        <List data={cars}>{(item) => <li key={item}>{item}</li>}</List>
      </div>
    );
  }

  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
</script>
```

---

## Webpack

- Là công cụ compile các module Javascript. Nó hay được gọi là “module bundler”.

  ![webpack](https://images.viblo.asia/full/9ad58b9d-c2da-4e90-82b0-c1f198632681.png)

---

## NPM VS YARN

- NPM cài package tuần tự, Yarn cài package song song => yarn nhanh hơn
- NPM cơ chế cache không tốt như yarn. Yarn sẽ có một phân vùng để lưu các pakage đã cài, khi cài lại thì yarn sẽ kiểm tra trong cache nếu có sẽ lấy ra và không tải trên mạng về

---

## HOOKS

- Hook chỉ sử dụng cho function component
- Dùng hook giúp cho component trở nên đơn giản và dễ hiểu hơn
  1. Không bị chia logic ra như methods trong lifecycle của class component
  2. Không cần sử dụng this
- Quy ước: use<...>

  ```TS
    import {
      useState,
      useEffect,
      useLayoutEffect,
      useRef,
      useCallback,
      useMemo,
      useReducer,
      useContext,
      useImperativeHandle,
      useDebugValue,
    } from 'react'
  ```

---

## USE STATE

- Giúp đơn giản hóa việc thể hiện trạng thái của dữ liệu ra giao diện người dùng (dữ liệu thay đổi gì giao diện thay đổi đó)

### Khi nào dùng ?

- Khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật (render lại dữ liệu)

  ```TS
    import {
      useState,
    } from 'react'

    function Component() {
      const [state, setState] = useState(initState)
    }
  ```

  ```TS
  import { useState } from "react";
  import "./App.css";

  function App() {
    const [counter, setCounter] = useState<number>(1);
    const handlerClick = () => {
      setCounter(counter + 1);
    };

    return (
      <div className="App">
        <h1 style={{ padding: 20 }}>{counter}</h1>
        <button onClick={handlerClick}>Increase</button>
      </div>
    );
  }
  ```

  **Lưu ý**:

  - Component được render sau khi `setState`
  - Initial state chỉ dùng cho lần đầu
  - Setstate with callback

  ```TS
    import { useState } from "react";
    import "./App.css";

    function App() {
      const [counter, setCounter] = useState<number>(1);
      const handlerClick = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
      };

      // counter = 1 => after click counter = 2
      // because current counter = 1
      // first time  1 + 1 = 2
      // second time 1 + 1 = 2
      // third time  1 + 1 = 2
      // rerender one time


      return (
        <div className="App">
          <h1 style={{ padding: 20 }}>{counter}</h1>
          <button onClick={handlerClick}>Increase</button>
        </div>
      );
    }
  ```

  ```TS
  import { useState } from "react";
  import "./App.css";

  function App() {
    const [counter, setCounter] = useState<number>(1);
    const handlerClick = () => {
      setCounter(prevState => prevState + 1);
      setCounter(prevState => prevState + 1);
      setCounter(prevState => prevState + 1);
    };

    // counter = counter + 1
    // counter = counter + 1
    // counter = counter + 1

    // => counter = counter + 3
    // rerender one time

    return (
      <div className="App">
        <h1 style={{ padding: 20 }}>{counter}</h1>
        <button onClick={handlerClick}>Increase</button>
      </div>
    );
  }
  ```

  - Initial state with callback

  ```TS
  import { useState } from "react";
  import "./App.css";

  const gifts: number[] = [100, 200, 300];

  function App() {
    // do not calculate here, because after rendering the total will be recalculated => affect performance
    // initial state used only once
    // const total = order.reduce((total, cur) => total + cur);

    const [counter, setCounter] = useState<number>(() => {
      return order.reduce((total, cur) => total + cur);
    });
    const handlerClick = () => {
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
    };

    return (
      <div className="App">
        <h1 style={{ padding: 20 }}>{counter}</h1>
        <button onClick={handlerClick}>Increase</button>
      </div>
    );
  }
  ```

## Two-way binding (Ràng buộc hai chiều)

- **React là one-way binding**
- Chiều 1: Giao diện thay đổi => dữ liệu thay đổi
- Chiều 2: Dữ liệu thay đổi => Giao diện thay đổi

  ```TS
  import { useState } from "react";
  import "./App.css";

  function App() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = () => {
      console.log(name, email);
    };

    return (
      <div className="App">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubmit}>Register</button>
      </div>
    );
  }
  ```

- Example radio

  ```TS
  import { useState } from "react";
  import "./App.css";

  const courses: Object[] = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "ReactJS",
    },
  ];

  function App() {
    const [checked, setChecked] = useState<number>(1);

    const handleSubmit = () => {
      console.log(checked);
    };

    return (
      <div className="App">
        {courses.map((course: any) => {
          return (
            <div key={course.id}>
              <input
                type="radio"
                checked={checked === course.id}
                onChange={() => setChecked(course.id)}
              />
              {course.name}
            </div>
          );
        })}
        <button onClick={handleSubmit}>Register</button>
      </div>
    );
  }
  ```

- Example checkbox

  ```TS
  import { useState } from "react";
  import "./App.css";

  const courses: Object[] = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "ReactJS",
    },
  ];

  function App() {
    const [checked, setChecked] = useState<number[]>([]);

    const handleSubmit = () => {
      console.log(checked);
    };

    const handleCheck = (id: number): void => {
      if (checked.includes(id)) {
        setChecked(checked.filter((data) => data !== id));
        return;
      }

      setChecked([...checked, id]);
    };

    return (
      <div className="App">
        {courses.map((course: any) => {
          return (
            <div key={course.id}>
              <input
                type="checkbox"
                checked={checked.includes(course.id)}
                onChange={() => handleCheck(course.id)}
              />
              {course.name}
            </div>
          );
        })}
        <button onClick={handleSubmit}>Register</button>
      </div>
    );
  }
  ```

---

## MOUNTED / UNMOUNTED

- Mounted là thời điểm đưa một component vào để sử dụng
- Unmount là thời điểm gỡ một component không sử dụng

---

## USE EFFECT

- Khi muốn thực hiện các side effects
- useEffect giúp:
  1. Update DOM
  2. Call API
  3. Listen DOM events: scroll, resize
  4. CleanUp: remove listener / unsubscribe, clear timer
- callback luôn được gọi sau khi component mounted
- Cleanup function luôn được gọi trước khi component unmounted
- useEffect(callback)

  1. Gọi callback mỗi khi component re-render
  2. Gọi callback sau khi component thêm element vào DOM

  ```TS
  import { useEffect, useState } from "react";

  const content = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      document.title = title;
    });

    // Không được viết như này vì nó sẽ chạy trước khi reder dữ liệu, nếu tác vụ nặng nó phải tốn thời gian tính toán trước khi render => làm cho web hiển thị UI chậm.
    // Thay vào đó ta dùng useEffect để render UI ra trước rối mới bắt đầu tính toán
    //   document.title = title;

    return (
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
    );
  };

  export default content;

  ```

- useEffect(callback, [])

  1. Chỉ gọi một lần khi component được mounted, re-render sẽ không gọi

  ```TS
  import { useEffect, useState } from "react";

  const content = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [posts, setPosts] = useState<Object[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/post`)
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    }, []);

    return (
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default content;

  ```

- useEffect(callback, [dependencies])

  1. callback sẽ được gọi mỗi khi dependencies thay đổi

  ```TS
  import { useEffect, useState } from "react";

  const tabs = ["posts", "comments", "album"];

  const content = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [posts, setPosts] = useState<Object[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [type, setType] = useState<string>(tabs[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
     useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    }, [type]);

    return (
      <div>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={type === tab ? { color: "white" } : {}}
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default content;

  ```

- useEffect with DOM

  ```TS
  import { useEffect, useState } from "react";

  const content = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showGoToTop, setShowGoToTop] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 200) {
          setShowGoToTop(true);
          return;
        }

        setShowGoToTop(false);
      };

      window.addEventListener("scroll", handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div>
        {showGoToTop && (
          <button style={{ position: "fixed", right: 20, bottom: 20 }}>
            Go to top
          </button>
        )}
      </div>
    );
  };

  export default content;
  ```

---

## Go Home [click here](../README.md)
