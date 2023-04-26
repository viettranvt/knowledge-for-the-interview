# PATTERN

## FACTORY PATTERN

- Là một mẫu thiết kế phần mềm thuộc nhóm "Creational Pattern" (mẫu tạo đối tượng), cho phép tạo ra các đối tượng một cách trừu tượng hơn.
- Factory Pattern được sử dụng khi chúng ta cần tạo ra nhiều đối tượng của một lớp nhưng việc tạo ra chúng cần được che giấu, giảm thiểu sự phụ thuộc giữa các lớp và tăng tính mở rộng của hệ thống
- VD: Giả sử bạn đang xây dựng một ứng dụng quản lý vật nuôi. Bạn có các class Dog, Cat, và Bird để mô tả các loại động vật khác nhau. Bạn muốn tạo ra các đối tượng động vật tương ứng dựa trên loại động vật mà người dùng chọn, nhưng bạn không muốn phải gọi trực tiếp tới constructor của từng class để tạo đối tượng.

  ```TS
    interface Animal {
        speak(): void;
    }
  ```

  ```TS
    class Dog implements Animal {
        speak() {
            console.log('Woof!');
        }
    }

    class Cat implements Animal {
        speak() {
            console.log('Meow!');
        }
    }

    class Bird implements Animal {
        speak() {
            console.log('Tweet!');
        }
    }
  ```

  ```TS
    class AnimalFactory {
        createAnimal(animalType: string): Animal {
            switch (animalType) {
                case 'dog':
                    return new Dog();
                case 'cat':
                    return new Cat();
                case 'bird':
                    return new Bird();
                default:
                    throw new Error(`Invalid animal type: ${animalType}`);
            }
        }
    }
  ```

---

## FACADE PATTERN

- Là một mẫu thiết kế phần mềm thuộc nhóm "Structural Pattern" (mẫu cấu trúc), cho phép che giấu sự phức tạp của một hệ thống bên trong một interface đơn giản hơn để người dùng có thể sử dụng dễ dàng hơn.

- Facade Pattern giúp giảm sự phụ thuộc giữa các thành phần trong một hệ thống phức tạp, bằng cách cung cấp một giao diện đơn giản để tương tác với hệ thống.
- VD: Khi chúng ta sử dụng một thư viện bên ngoài để tương tác với cơ sở dữ liệu. Thay vì trực tiếp gọi các phương thức từ thư viện này, chúng ta có thể tạo một lớp facade trung gian để giấu đi chi tiết cài đặt và giúp cho việc sử dụng thư viện trở nên dễ dàng hơn.

  ```TS
  class DatabaseFacade {
      constructor(database) {
          this.database = database;
      }

      getUser(userId) {
          return this.database.query(`SELECT * FROM users WHERE id = ${userId}`);
      }

      createUser(user) {
          return this.database.query(`INSERT INTO users (name, email) VALUES ('${user.name}', '${user.email}')`);
      }

      updateUser(userId, updates) {
          const updateQuery = Object.entries(updates).map(([key, value]) => `${key} = '${value}'`).join(', ');
          return this.database.query(`UPDATE users SET ${updateQuery} WHERE id = ${userId}`);
      }

      deleteUser(userId) {
          return this.database.query(`DELETE FROM users WHERE id = ${userId}`);
      }
  }

  // Sử dụng facade để tương tác với cơ sở dữ liệu
  const db = new Database();
  const dbFacade = new DatabaseFacade(db);

  dbFacade.createUser({ name: 'John', email: 'john@example.com' });
  dbFacade.updateUser(1, { name: 'Jane', email: 'jane@example.com' });
  const user = dbFacade.getUser(1);
  dbFacade.deleteUser(1);
  ```

---

## STRATEGY PATTERN

- Là một trong những mẫu thiết kế phần mềm thuộc nhóm "Behavioral Pattern" (mẫu hành vi), cho phép chọn lựa giữa các thuật toán khác nhau để giải quyết một vấn đề cụ thể tùy thuộc vào tình huống.
- VD: Việc tính thuế có thể được giải quyết bằng nhiều cách khác nhau, tùy thuộc vào địa chỉ của khách hàng và quy định thuế của khu vực đó.
- VD2: Mô phỏng chiến tranh giữa hai quốc gia, và bạn muốn cho người chơi lựa chọn các chiến thuật khác nhau để chiến đấu

  ```TS
  interface Strategy {
      attack(): void;
  }
  ```

  ```TS
    class AmbushStrategy implements Strategy {
        attack() {
            console.log("Tấn công đột kích");
        }
    }

    class DefenseStrategy implements Strategy {
        attack() {
            console.log("Chiến đấu phòng thủ");
        }
    }

    class RearAttackStrategy implements Strategy {
        attack() {
            console.log("Tấn công phía sau");
        }
    }
  ```

  ```TS
    class Warrior {
        strategy: Strategy;

        constructor(strategy: Strategy) {
            this.strategy = strategy;
        }

        attack() {
            this.strategy.attack();
        }
    }
  ```

  ```TS
    const warrior1 = new Warrior(new AmbushStrategy());
    const warrior2 = new Warrior(new DefenseStrategy());
    const warrior3 = new Warrior(new RearAttackStrategy());

    warrior1.attack(); // Tấn công đột kích
    warrior2.attack(); // Chiến đấu phòng thủ
    warrior3.attack(); // Tấn công phía sau
  ```

---

## SINGLETON PATTERN

- Cho phép một class chỉ được khởi tạo duy nhất một lần và cung cấp một cách dễ dàng để truy cập đến đối tượng đó từ bất kỳ đâu trong ứng dụng.
- VD: Chúng ta có thể tạo ra một module và đảm bảo rằng chỉ có một phiên bản của module đó được tạo ra

  ```TS
    //IIFE function
    const mySingleton = (function() {
        let instance;

        function init() {
            let privateVariable = "I'm also private";

            return {
                // public variables and functions
                publicMethod: function() {
                    console.log("The public can see me!");
                },

                getPrivateVariable: function() {
                    return privateVariable;
                },
            };
        }

        return {
            getInstance: function() {
                if (!instance) {
                    instance = init();
                }

                return instance;
            }
        };
    })();

    // Usage
    const singleA = mySingleton.getInstance();
    const singleB = mySingleton.getInstance();
    console.log(singleA === singleB); // true
  ```

---

## DEPENDENCY INJECTION PATTERN

- Là một mẫu thiết kế phần mềm được sử dụng để cải thiện tính linh hoạt, bảo trì, khả năng mở rộng và kiểm thử của một ứng dụng, đảm bảo rằng các đối tượng có thể được tạo một cách độc lập với các phụ thuộc của nó và cho phép tái sử dụng và kiểm thử dễ dàng hơn.
- Có hai loại DI:

  1. Constructor Injection: phụ thuộc được truyền vào qua constructor của đối tượng.
     VD:

     ```TS
        class UserRepository {
        // ...
        }

        class UserService {
        constructor(userRepository) {
            this.userRepository = userRepository;
        }

        // ...
        }

        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);
     ```

  2. Setter Injection: phụ thuộc được truyền vào thông qua setter của đối tượng
     VD:

     ```TS
        class UserRepository {
        // ...
        }

        class UserService {
        setUserRepository(userRepository) {
            this.userRepository = userRepository;
        }

        // ...
        }

        const userRepository = new UserRepository();
        const userService = new UserService();
        userService.setUserRepository(userRepository);
     ```

---

## Go Home [click here](../README.md)
