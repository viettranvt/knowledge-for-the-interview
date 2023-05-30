# TYPESCRIPT

## TS VS JS

**1. JS**

    - Linh hoạt
    - Không cần định nghĩa kiểu dữ liệu hoặc tìm hiểu kiểu dữ kiệu khi sữ dụng libs
    - Code nhanh khi làm một mình
    - Cần phải hiểu rõ JS để tránh gặp lỗi vật

**2. TS**

    - Được nhắc code
    - Tránh gặp lỗi vặt
    - tốn thời gian trong việc setup ban đầu

---
## INSTALL TS NODE

    1. Install ts and tsconfig
        - npm i -g typescript ts-node ts-lib @types/node

    2. Generate tsconfig file
        - tsc --init

    3. Compile ts
        - tsc **<file_name>**
        - **Compile all file**: tsc

    4. Run and compile ts
        - ts-node **<file_name>**

---
## STATIC TYPE CHECKING

    - Giúp phát hiện lỗi ngay trong lúc code
    - Tránh lỗi typo (sau cú pháp)
    - Tiết kiệm thời gian debug

---
## EXPLICIT TYPES

- Khai báo kiểu dữ liệu trong ts thì sử dụng dấu **:** sau tên biến
    ```TS
        let count: number = 2
        const numList: []number = [1,2,3]
    ```

---
## INFERED TYPES

- Ts tự detect kiểu dữ liệu khi mình khai báo giá trị
- Đôi lúc TS không detect được kiểu thì sẽ là any
    ```TS
        let count = 2
        const numList = [1,2,3]
    ```

---
## ERAISED TYPES

- Khi compile từ TS sang JS thì tất các type annotation sẽ bị xóa

---
## DOWNLEVELING

---
## LITERAL TYPES

- Chỉ định một giá trị cụ thể làm kiểu dữ liệu
    ```TS
        let count: 1;
        let student: null
    ```
- Khi dùng const khi omit type annotation, literal type sẽ được sử dụng. Vì const chỉ nhận 1 giá trị và không thay đổi được
    ```TS
        const count = 1 // const count: 1;

        const student = {
            id: 1,
            name: 'Easy Frontend',
        }
        // this is how ts understand:
        // const student: {
        // id: number;
        // name: string;
        // }
        // because the props of an object can be updated

        const student = {
            id: 1,
            name: 'Easy Frontend',
        } as const
        // this is how ts understand:
        // const student: {
        // readonly id: 1;
        // readonly name: "Easy Frontend";
        // }
        // you now can't update props of this object
    ```

---
## TYPE ASSERTION

 - Ta có thể ép kiểu dữ liệu bằng toán tử  **as**
    ```TS
        function getStatusName(state: 'active') {
            console.log(state);
        }

        let s = 'active'; // let s: string
        getStatusName(s)
        // ts error: Argument of type 'string' is not assignable to parameter of type '"active"'.ts(2345)

        // solution 1
        let s: 'active' = 'active'; // or const s = 'active'
        getStatusName(s);

        // solution 2
        let s = 'active';
        getStatusName(s as 'active')
    ```

---
## TYPE

 - Ta có thể đặt tên lại cho bất kỳ kiểu dữ liêu 
    ```TS
        type StudentName = string;
        type StudentAge = number;
        type IsStopStudent = boolean
    ```

 - Ta có thể định nghĩa cho một object 
    ```TS
        type Student = {
            readonly id: number;
            name: string;
            age?: number; //optional
        }

        const studentA: Student = {
            id: 1,
            name: 'Alice',
        } 
    ```
 - **Union type**: Có thể kết hợp từ hai hay nhiều kiểu dữ liệu khác nhau
 - Cho phép giá trị có thể chấp nhận hoặc là kiểu dữ liệu này hoặc là kiểu dữ liệu kia
    ```TS
        type Status = 'active' | 'inactive';
        type ProductStatus = 0 | 1 | 2 | 3;
        type StudentId = number | string;
    ```
 - **Intersection type**: Cho phép gom nhiều thuộc tính của các interface hoặc các type
    ```TS
        interface BusinessPartner {
            name: string;
            credit: number;
        }

        interface Identity {
            id: number;
            name: string;
        }

        interface Contact {
            email: string;
            phone: string;
        }

        type Employee = Identity & Contact;
        type Customer = BusinessPartner & Contact;
    ```

---
## INTERFACE

 - Ta có thể đặt tên cho một object type
 - Interface cho phép khai báo nhiều lần và nó sẽ những interface đó thành một (declaration merging). **Lưu ý**: Các trường trùng nhau phải giống kiểu dữ liệu
    ```TS
        type Student {
            readonly id: number;
            name: string;
            age?: number; //optional
        }

        const studentB: Student = {
            id: 2,
            name: 'Bob',
            age: 18,
        }

        interface Student {
            id: number | string;
            name: string;
            gender: 'male' | 'female';
            grade: 'A' | 'B' | 'C' | 'D' | 'E';
        }

        // interface way
        interface Employee extends Identity, Contact {}
        interface Customer extends BusinessPartner, Contact {}

        interface Student {
            id: number;
            name: string;
        }
        // declaration merging
        // works, no error
        interface Student {
            age?: number;
        }
        const alice: Student = {
            id: 1,
            name: 'Alice',
        }
    ```

---
## FUNCTION
 - **Overload**: Cho phép một hàm có thể truyền nhiều kiểu parameter khác nhau
 - **Lưu ý**: Các trường trùng nhau phải giống kiểu dữ liệu
    ```TS
        function makeDate(timestamp: number): Date;
        function makeDate(m: number, d: number, y: number): Date;
        function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
        if (d !== undefined && y !== undefined) {
            return new Date(y, mOrTimestamp, d);
        } else {
            return new Date(mOrTimestamp);
        }
        }
        const d1 = makeDate(12345678);
        const d2 = makeDate(5, 5, 5);
        const d3 = makeDate(1, 3);
    ```

 - **Destructuring**
    ```TS
        function createStudent(student: { id: number, name: string, age: number})
        {
            const { id, name, age } = student;
            console.log(id, name, age)
        }
        createStudent({
            id: 1,
            name: 'Bob',
            age: 18,
        });

        function createStudent({ id, name, age }: { id: number, name: string, age:
        number}) {
            console.log(id, name, age)
        }

        createStudent({
            id: 1,
            name: 'Bob',
            age: 18,
        });

        interface Student {
            id: number;
            name: string;
            age: number;
        }

        function createStudent({ id, name, age }: Student) {
            console.log(id, name, age)
        }

        createStudent({
            id: 1,
            name: 'Bob',
            age: 18,
        } as Student);
    ```

---
## ENUM

 - Tập hợp các giá trị cùng một nhóm
 - **Lợi ích**: Dễ dàng quản lý và truy xuất
 - Sử dụng cho data một chiều, đĩnh nghĩa rồi sử dụng
    ```TS
        enum Status {
            PENDING, // 0
            IN_PROGRESS, // 1
            DONE, // 2
            CANCELLED, // 3
        }

        enum Status {
            PENDING = 3, // 3
            IN_PROGRESS, // 4
            DONE, // 5
            CANCELLED, // 6
        }

        enum Status {
            PENDING = 3,
            IN_PROGRESS = 5,
            DONE = 8,
            CANCELLED = 10,
        }

        // can assign any number to your enum variable
        const stats1: Status = Status.PENDING;
        const stats2: Status = 1;
        const stats3: Status = -1;
        // number enum --> support reverse mapping
        console.log(Status[0]); // 'PENDING'
        console.log(Status['DONE']); // 2

        // string enum
        enum MediaTypes {
            JSON = "application/json",
            XML = "application/xml",
        }
        fetch("https://example.com/api/endpoint", {
        headers: {
            Accept: MediaTypes.JSON,
        },
        }).then(response => {
            // ...
        });
    ```

---
## GENERICS
 - Kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng.
    ```TS
        interface Student {
            id: number;
            name: string;
        }

        const numberList: Array<number> = [1, 2, 3];
        const wordList: Array<string> = ['easy', 'frontend'];

        const studentList: Array<Student> = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        ]

        interface List<T> {
            lenght: number;
            [index: number]: T
        }

        const numberList: List<number> = [1,2,3]

        interface Student {
            id: number;
            name: string;
        }

        const studentList: List<Student> = []
    ```
 - **keyof**: Lấy ra tất cả các key của một kiểu dữ liệu
    ```TS
        interface Student {
            id: number;
            name: string;
        }

        type StudentKeys = keyofStudent // id, name
        const keys: StudentKeys = ... // id | name
    ```
 - **valueof**: Lấy ra kiểu dữ liệu
    ```TS
        console.log(typeof 'easy frontend'); // 'string'
        console.log(typeof 123); // 'number'
        console.log(typeof false); // 'boolean'
        console.log(typeof {}); // 'object'
        console.log(typeof []); // 'object'
        console.log(typeof function() {}); // 'function'
        console.log(typeof window !== 'undefined'); // true on client, false on server
    ```
 - **Mapped types**: Dùng index signature để định nghĩa kiểu dữ liệu có props lấy từ kiểu dữ liệu khác.
    ```TS
        interface Student {
            id: number;
            name: string;
        }

        type MappedTypes = {
            [Key in keyof Student]: boolean;
        };
    ```

---
## UTILITY TYPES
 - **Partial**: tất cả các trường đều optional
    ```TS
        interface Todo {
            title: string;
            description: string;
        }
        
        function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
            return { ...todo, ...fieldsToUpdate };
        }
    ```
 - **Required**: Tất cả các trường đều bắt buộc
    ```TS
        interface Props {
            a?: number;
            b?: string;
        }
        
        const obj: Props = { a: 5 };
        
        const obj2: Required<Props> = { a: 5 };
    ```
 - **Readonly**: Tất cả các trường chỉ được phép đọc
    ```TS
        interface Todo {
            title: string;
        }
        
        const todo: Readonly<Todo> = {
        title: "Delete inactive users",
        };
        
        todo.title = "Hello";
        // Cannot assign to 'title' because it is a read-only property.
    ```
 - **Record<Keys, type>**: Tạo ra dữ liệu kiểu object
    ```TS
        interface CatInfo {
            age: number;
            breed: string;
        }
        
        type CatName = "miffy" | "boris" | "mordred";
        
        const cats: Record<CatName, CatInfo> = {
            miffy: { age: 10, breed: "Persian" },
            boris: { age: 5, breed: "Maine Coon" },
            mordred: { age: 16, breed: "British Shorthair" },
        };
    ```
 - **Pick**: Tạo ra kiểu dữ liệu mới bằng các lấy một vài key từ kiểu dữ liêu cũ
    ```TS
        interface Todo {
            title: string;
            description: string;
            completed: boolean;
        }
 
        type TodoPreview = Pick<Todo, "title" | "completed">;
        
        const todo: TodoPreview = {
            title: "Clean room",
            completed: false,
        };
    ```
 - **Omit**: Tạo ra kiểu dữ liệu mới bằng các lấy tất cả và trừ ra một vài key từ kiểu dữ liêu cũ
    ```TS
        interface Todo {
            title: string;
            description: string;
            completed: boolean;
            createdAt: number;
        }
        
        type TodoPreview = Omit<Todo, "description">;
        
        const todo: TodoPreview = {
            title: "Clean room",
            completed: false,
            createdAt: 1615544252770,
        };
        
        todo;
        
        const todo: TodoPreview
        
        type TodoInfo = Omit<Todo, "completed" | "createdAt">;
        
        const todoInfo: TodoInfo = {
            title: "Pick up kids",
            description: "Kindergarten closes at 5pm",
        };
    ```
 - **ReturnType**: Lấy kiểu dữ liệu trả về của một hàm nào đó
    ```TS
        declare function f1(): { a: number; b: string };
        
        type T0 = ReturnType<() => string>;
            
        //type T0 = string
        type T1 = ReturnType<(s: string) => void>;
            
        //type T1 = void
        type T2 = ReturnType<<T>() => T>;
            
        //type T2 = unknown
        type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
            
        //type T3 = number[]
    ```

---
## KHI NÀO DÙNG TYPE VÀ INTERFACE
 - Sử dụng interface cho đến khi không dùng được nữa thì chuyển qua type
 - Khi muốn định nghĩa public API cho người khác sử dụng thì phải sử dụng interface để nếu có thiếu người khác có thể bỗ sung vào.

---
## SO SÁNH GIỮA INTERFACE VÀ TYPE
 - Một "interface" có thể được kế thừa bằng cách mở rộng từ nhiều "interface" khác
    ```TS
        // Interface
        interface Animal {
            name: string;
        }

        interface Cat extends Animal {
            purr: () => void;
        }

        // Type
        type AnimalType = {
            name: string;
        };

        // Không hỗ trợ kế thừa với Type
    ```
 - Một "interface" cho phép khai báo nhiều lần và nó sẽ những interface đó thành một (declaration merging). Còn type thì không
    ```TS
        interface Student {
            id: number;
            name: string;
        }
        // declaration merging
        // works, no error
        interface Student {
            age?: number;
        }
        const alice: Student = {
            id: 1,
            name: 'Alice',
        }
    ```
 - Khi sử dụng "interface", ta có thể mở rộng các kiểu nguyên thủy (primitive types) như string, number, boolean. Trong khi đó, khi sử dụng "type", bạn không thể mở rộng các kiểu nguyên thủy.
    ```TS
        // Interface
        interface ExtendableString extends String {
            // Mở rộng kiểu nguyên thủy
            countVowels: () => number;
        }

        // Type
        type ExtendableType = string; // Không thể mở rộng kiểu nguyên thủy
    ```
 - Type" hỗ trợ sử dụng "union" và "intersection" types trực tiếp, trong khi "interface" không có tính năng này. Để sử dụng "union" và "intersection" types với "interface", ta cần sử dụng "type" để tạo ra kiểu mới và sử dụng nó trong "interface".
    ```TS
        // Type - Sử dụng union type trực tiếp
        type NumberOrString = number | string;

        // Interface - Sử dụng union type thông qua Type
        type NumberOrStringType = number | string;

        interface MyInterface {
            value: NumberOrStringType;
        }

        // Hoặc
        interface MyInterface {
            value: NumberOrString;
        }
    ```

---
## SO SÁNH GIỮA INTERFACE VÀ CLASS
 - Một class chỉ có thể có kế thừa một class nhưng có thể implement nhiều interface
---
## Go Home [click here](../README.md)

voi tra gia tri la undefine con never thi ko