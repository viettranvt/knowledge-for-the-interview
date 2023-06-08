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

- useEffect with timer function

  ```TS
  import { useEffect, useState } from "react";
  import "./App.css";

  function App() {
    const [countDown, setCountDown] = useState<number>(180);
    useEffect(() => {
      const timerId = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);

      // clear up function
      return () => {
        clearInterval(timerId);
      };
    }, []);

    return (
      <div className="App">
        <h1>{countDown}</h1>
      </div>
    );
  }

  export default App;

  ```

- Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted đầu tiên)

  ```TS
  import { useEffect, useState } from "react";
  import "./App.css";

  function App() {
    const [avatar, setAvatar] = useState<number>(1);

    useEffect(() => {
      console.log(`mounted or render ${count}`);
      // clear up function
      return () => {
        console.log(`cleanup ${count}`);
      };
    }, [count]);

    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
    );
  }

  export default App;

  ```

  ```TS
  import { useEffect, useState } from "react";
  import "./App.css";

  function App() {
    const [avatar, setAvatar] = useState<any>();

    useEffect(() => {
      return () => {
        avatar && URL.revokeObjectURL(avatar.preview);
      };
    }, [avatar]);

    const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files) {
        const file: any = files[0];

        file["preview"] = URL.createObjectURL(files[0]);
        setAvatar(file);
      }
    };

    return (
      <div className="App">
        <input type="file" onChange={handlePreviewAvatar} />
        {avatar && <img src={avatar.preview} alt="" width="80%" />}
      </div>
    );
  }

  export default App;
  ```

  ***

## UseEffect & UseLayoutEffect

- UseEffect:
  1. Cập nhật lại State
  2. Cập nhật DOM (mutated)
  3. Render lại UI
  4. Gọi cleanup nếu dependencies thay đổi
  5. Gọi useEffect callback
- UseLayoutEffect:
  1. Cập nhật lại State
  2. Cập nhật DOM (mutated)
  3. Gọi cleanup nếu dependencies thay đổi (sync)
  4. Gọi useLayoutEffect callback (sync)
  5. Render lại UI

---

## UseRef

- Lưu các giá trị qua một tham chiếu bên ngoài
- UseRef sẽ được call ở lần đầu render component. và mỗi khi setState qua useState sẽ dẫn đến rerender component, nhưng set giá trị cho ref thì không.
- Việc dùng useRef thay vì move biến ra ngoài component(tạo closure) là bởi do logic sẽ cần phải duy trì trong vòng đời của component, nếu move ra closure thì sinh ra nhiều instances của component đó sẽ dùng cùng 1 data(semi global)

- VD: count down number not use useRef => can't stop when clicking stop button, because when component re-render it will call component => create new block scope => current timerId = underfined.

  ```TS
  import { useState } from "react";
  import "./App.css";

  function App() {
    const [count, setCount] = useState<number>(60);

    let timerId: NodeJS.Timer;

    const handleStart = () => {
      timerId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    };
    const handleStop = () => {
      clearInterval(timerId);
    };

    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
      </div>
    );
  }

  export default App;
  ```

- Fix it (not recommended)

  ```TS
  import { useState } from "react";
  import "./App.css";

  let timerId: NodeJS.Timer;

  function App() {
    const [count, setCount] = useState<number>(60);

    const handleStart = () => {
      timerId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    };
    const handleStop = () => {
      clearInterval(timerId);
    };

    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
      </div>
    );
  }

  export default App;
  ```

- VD: Count down using useRef

  ```TS
  import { useEffect, useRef, useState } from "react";
  import "./App.css";

  function App() {
    const [count, setCount] = useState<number>(60);
    const ref = useRef<number>();
    const prevCount = useRef<number>();
    const h1Ref = useRef<any>();

    useEffect(() => {
      prevCount.current = count;
    }, [count]);

    useEffect(() => {
      // view element
      console.log(h1Ref.current);
    });

    const handleStart = () => {
      const timerId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      ref.current = Number(timerId);
    };
    const handleStop = () => {
      clearInterval(ref.current);
    };

    return (
      <div className="App">
        {/* add prop ref to get element */}
        <h1 ref={h1Ref}>{count}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
      </div>
    );
  }

  export default App;

  ```

---

## REACT.memo() - Hign Order component(HOC)

- Ghi nhớ các props của một component để từ đó quyết định có re-render lại component hay không

  ```TS
  <!-- content.tsx -->
  import { memo } from "react";

  function Content() {
    return <h2>Hello</h2>;
  }

  export default memo(Content);
  ```

  ```TS
  <!-- app.tsx -->
  import { useState } from "react";
  import "./App.css";
  import Content from "./content";

  function App() {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
      setCount((prev) => prev + 1);
    };

    return (
      <div className="App">
        {/* add prop ref to get element */}
        <Content />
        <h1>{count}</h1>
        <button onClick={handleClick}>click</button>
      </div>
    );
  }

  export default App;

  ```

  - Ở vd này ta thấy component đang là đếm số và ta thấy khi click đếm số thì component con (content) cũng bị render lại dùng không liên quan đến biến đếm
  - Ta sử dụng **memo()** cho component content. React sẽ kiểm tra nếu props của component content thay đổi thì mới re-render lại còn không sẽ không re-render

---

## useCallback()

- Giúp tránh tạo ra những hàm mới một cách không cần thiết trong function component

  ```TS
  <!-- content.tsx -->
  import { memo } from "react";

  interface Props {
    onIncrease: () => void;
  }

  function Content({ onIncrease }: Props) {
    return (
      <div>
        <h2>Hello</h2>
        <button onClick={onIncrease}>click</button>
      </div>
    );
  }

  export default memo(Content);
  ```

  ```TS
  <!-- app.tsx -->
  import { useCallback, useState } from "react";
  import "./App.css";
  import Content from "./content";

  function App() {
    const [count, setCount] = useState<number>(0);

    const handleIncrease = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);

    return (
      <div className="App">
        {/* add prop ref to get element */}
        <Content onIncrease={handleIncrease} />
        <h1>{count}</h1>
      </div>
    );
  }

  export default App;
  ```

- Ta thấy khi nhấn thì content lại re-render trong khi đã dùng react.memo và nội dung content không thay đổi
- Vì funtion handleIncrease là một **reference types**, khi render lại sẽ tạo ra một function handleIncmớirease mới không liên quan gì function handleIncmớirease cũ nên khi react memo so sánh (===) thì nó sẽ thấy địa chỉ khác nhau => re-render
- useCallback sẽ lưu tham chiếu của hàm trong lần render đầu tiên và return lại tham chiếu cho biến **handleIncrease** . Khi UI re-render thì useCallback sẽ trả lại tham chiếu trước đó và không tạo ra hàm mới
- useCallback phải đi chung với react.memo. Vì không có react.memo nó sẽ tự re-render lại.

---

## useMemo()

- Tránh thực hiện lại một logic không thiết

```TS
import { useState } from "react";
import "./App.css";
interface Product {
  name: string;
  price: number;
}

function App() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const handleSubmit = () => {
    setProducts([...products, { price: +price, name: name }]);
  };

  const total = products.reduce((result, prod) => result + prod.price, 0);

  return (
    <div className="App">
      <input
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```

- Ở vd này tại thấy khi nhập giá và tên thì sẽ bị re-render lại và gọi hàm tính total. Điều sẽ vô nghĩa với hàm tính total vì hàm total chỉ quan tâm product có bị thay đổi hay không

```TS
import { useState } from "react";
import "./App.css";
interface Product {
  name: string;
  price: number;
}

function App() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const handleSubmit = () => {
    setProducts([...products, { price: +price, name: name }]);
  };

  const total = products.reduce((result, prod) => result + prod.price, 0);

  return (
    <div className="App">
      <input
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```

- Cách khắc phục

```TS
import { useMemo, useRef, useState } from "react";
import "./App.css";
interface Product {
  name: string;
  price: number;
}

function App() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    setProducts([...products, { price: +price, name: name }]);
    setName("");
    setPrice("");
    nameRef.current?.focus();
  };

  const total = useMemo(() => {
    return products.reduce((result, prod) => result + prod.price, 0);
  }, [products]);

  return (
    <div className="App">
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```

---

## useReducer

- Là một phiên bản nâng cao của useState
- Phù hợp với state phức tạp(mảng chứa mảng con, object nhiều cấp)
- VD: Count number
- useState

  ```TS
  import { useState } from "react";
  import "./App.css";

  function App() {
    const [count, setCount] = useState<number>(0);

    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>Down</button>
        <button onClick={() => setCount(count + 1)}>Up</button>
      </div>
    );
  }

  export default App;

  ```

- useProducer

  ```TS
  import { useReducer } from "react";
  import "./App.css";

  //init state
  const initState = 0;

  //actions
  const UP_ACTION = "UP";
  const DOWN_ACTION = "DOWN";

  //reducer
  const reducer = (state: number, action: string) => {
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      default:
        throw new Error("Invalid action");
    }
  };

  function App() {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      </div>
    );
  }

  export default App;
  ```

---

## Context & useContext

- Context

1.  Giúp truyền dữ liệu từ component cha xuống component con mà không cần sử dụng props
    VD: Truyền dữ liệu từ app xuống paragraph

    - Use state

    ```TS
    <!-- app.tsx -->
    import { useState } from "react";
    import "./App.css";
    import Content from "./Content";

    function App() {
    const [theme, setTheme] = useState<string>("dark");
    const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    };

        return (
          <div className="App">
            <button onClick={toggleTheme}>Toggle theme</button>
            <Content theme={theme} />
          </div>
        );

    }

    export default App;
    ```

    ```TS
    <!-- content.tsx -->
    import { FC } from "react";
    import Paragraph from "./Paragraph";

    interface Props {
      theme: string;
    }

    const Content: FC<Props> = ({ theme }) => {
      return (
        <div>
          <Paragraph theme={theme} />
        </div>
      );
    };

    export default Content;
    ```

    ```TS
    <!-- paragraph.tsx -->
    import React, { FC } from "react";
    import "./App.css";

    interface Props {
      theme: string;
    }

    const Paragraph: FC<Props> = ({ theme }) => {
      return <p className={theme}>Paragraph</p>;
    };

    export default Paragraph;
    ```

    - Use context

    ```TS
    <!-- app.tsx -->
    import { createContext, useState } from "react";
    import "./App.css";
    import Content from "./Content";

    export const ThemeContext = createContext("dark");

    function App() {
      const [theme, setTheme] = useState<string>("dark");
      const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      };

      return (
        <ThemeContext.Provider value={theme}>
          <div className="App">
            <button onClick={toggleTheme}>Toggle theme</button>
            <Content />
          </div>
        </ThemeContext.Provider>
      );
    }

    export default App;
    ```

    ```TS
    <!-- paragraph.tsx -->
    import { useContext } from "react";
    import "./App.css";
    import { ThemeContext } from "./App";

    const Paragraph = () => {
      const theme = useContext(ThemeContext);
      return <p className={theme}>Paragraph</p>;
    };

    export default Paragraph;
    ```

---

## Redux & React-context

- Những điểm Redux hơn react Context
  1. Dễ dàng debug vì redux có thư viện debug
  2. Redux có kiến trúc để apply middleware
  3. Redux có addons để để dàng mở rộng (addons and extensibility)
  4. Redux là cross-platfrom(đa nền tảng), không phụ thuộc vào react
  5. Redux có thể dễ dàng cấu hình và performance hơn so với react context

---

## useImperativeHandle

- Giúp tùy chỉnh ref của một function component

  ```TS
  <!-- video.tsx -->
  import { forwardRef } from "react";

  const Video = (props: any, ref: React.LegacyRef<HTMLVideoElement>) => {
    return <video ref={ref} src={require("./videos/download.mp4")} />;
  };

  export default forwardRef(Video);
  ```

  ```TS
  <!-- app.stx -->
  import { useRef } from "react";
  import "./App.css";
  import Video from "./Video";

  function App() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
      videoRef.current?.play();
    };

    const handlePause = () => {
      videoRef.current?.pause();
    };

    return (
      <div className="App">
        <Video ref={videoRef} />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    );
  }

  export default App;
  ```

- Ta thấy nếu làm như này sẽ public toàn bộ thuộc tính của ref ra component của cha trong khi ta chỉ muốn play và pause thồi => component cha có thể tương tác nhiều hơn với ref video và có thể phá hỏng component video
- Cách khắc phục

  ```TS
  <!-- video.tsx -->
  import { forwardRef, useImperativeHandle, useRef } from "react";

  const Video = (props: any, ref: any) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useImperativeHandle(ref, () => ({
      play() {
        videoRef.current?.play();
      },
      pause() {
        videoRef.current?.pause();
      },
    }));

    return <video ref={videoRef} src={require("./videos/download.mp4")} />;
  };

  export default forwardRef(Video)
  ```

  ```TS
  <!-- app.tsx -->
  import { useRef } from "react";
  import "./App.css";
  import Video from "./Video";

  function App() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
      videoRef.current?.play();
    };

    const handlePause = () => {
      videoRef.current?.pause();
    };

    return (
      <div className="App">
        <Video ref={videoRef} />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    );
  }

  export default App;
  ```

---

## React router dom

- Là một thư viện tạo bộ định tuyến cho các ứng dụng được viết bởi ReactJS
- VD

  ```TS
  import { Link, Route, Routes } from "react-router-dom";
  import "./App.css";
  import Home from "./pages/Home";
  import New from "./pages/News";
  import Contact from "./pages/Contact";

  function App() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<New />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }

  export default App;

  ```

---

- use rafce to generate componet in vscode

---

## Go Home [click here](../README.md)
