interface Student {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';

  showStudent(): void;
}

interface A {
  id: number | string;
  firstName: string;
}

interface B {
  info: Student | A;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

const test: B = {
  info: {
    id: 1,
    firstName: 'viettran',
  },
  name: 'anc',
  gender: 'male',
  grade: 'A',
};

console.log(test);

interface C {
  id: string | number;
  gender: 'male' | 'female';
}

interface D {
  name: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

interface E extends C, D {}

const test1: E = {
  id: 1,
  name: 'viettran',
  gender: 'female',
  grade: 'A',
};

console.log(test1);

class Student1 {
  id: string | number;
  name: string;
  score: number;

  constructor(id: string | number, name: string, score: number) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
}

// eslint-disable-next-line no-unused-vars
class Class {
  id: string | number;
  name: string;
  totalStudent: number;

  constructor(id: string | number, name: string, totalStudent: number) {
    this.id = id;
    this.name = name;
    this.totalStudent = totalStudent;
  }
}

// eslint-disable-next-line no-unused-vars
class Student2 implements Student {
  private _id: string | number;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';

  constructor(
    id: string | number,
    name: string,
    gender: 'male' | 'female',
    grade: 'A' | 'B' | 'C' | 'D' | 'E'
  ) {
    this._id = id;
    this.name = name;
    this.gender = gender;
    this.grade = grade;
  }

  showStudent(): void {
    console.log('gdfddsd');
  }

  get id(): string | number {
    return this._id;
  }

  set id(id: string): void {
    this._id = id;
  }
}

const std: Student1 = new Student1(1, 'viettran', 10);
console.log(std);

type keys = 'color' | 'name';

type Shape = {
  // eslint-disable-next-line no-unused-vars
  [key in keys]: string;
};
const circle: Shape = {
  name: 'circle',
  color: 'res',
};

console.log(circle);

//tuple
const test2: (string | number)[] = ['abc', 1];
console.log(test2);

const test3: [string, number, number?] = ['123', 123];
console.log(test3);

// eslint-disable-next-line no-unused-vars
abstract class Animal {
  name: string;
  abstract run(): void;

  constructor(name: string) {
    this.name = name;
  }
}
