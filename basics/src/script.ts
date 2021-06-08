// ! TypeScript type definition
// ? typed function parameters and return
const getFullName = (name: string, surname: string): string => {
  return name + ' ' + surname;
};
//
//
//
//
//
// ! Interface in TypeScript help us to describe entities
interface UserInterface {
  name: string;
  surname: string;
  age?: number; //Age now optional
  getMessage?(): string;
}

const user: UserInterface = {
  name: 'Deepak',
  surname: 'Bhadoriya',
  age: 30,
  getMessage() {
    return 'Hello ' + this.name;
  },
};

const user2: UserInterface = {
  name: 'Jack',
  surname: 'Sparrow',
  getMessage() {
    return 'Hello ' + this.name;
  },
};
//
//
//
//
//
// ! Union in TS
let username: string = 'alex';
let pageName: string | number = '1'; //this is union
let errorMessage: string | null = null; //Before fetching result
let users: UserInterface | null = null; //with interface
let someProp: string | number | null | undefined | string[] | object; //! never so this
//
//
//
//
//
// ! Type alias in TS
type NUM = number; //Type alias
type PopularTag = string;
type MaybePopularTag = string | null;

let number: NUM = 2;
const popularTags: PopularTag[] = ['dragon', 'coffee'];
const dragonsTag: MaybePopularTag = 'dragon';
//
//
//
//
//
// ! void in TS
// ? When we don't return something its void (void is a set of undefined and null)
const doSomething = (): void => {
  console.log('do something');
};
//
//
//
//
//
// ! Any type in TS
// ? Any type turns off TS checks always avoid it
let foo: any = 'foo';
foo.bar(); // no error
//
//
//
//
//
// ! Unknown type in TS
// ? Introduced in TypeScript 3
let any: any = 10;
let unknown: unknown = 10;

let s1: string = any;
// let s2:string=unknown  // ? cannot assign unknown to string but can be done by any

console.log(any.foo());
// console.log(unknown.foo())  // ? will throw error
//
//
//
//
//
// ! Type Assertion in TS
// ? convert one type to another
let s2: string = unknown as string;

let pageNum: string = '1';
// let numericPageNumber: number= pageNum as number  // ?  will throw error
let numericPageNumber: number = (pageNum as unknown) as number;
//
//
//
//
//
// ! never type in TS
// ? Function with never can't be executed to the end
const doSomething2 = (): never => {
  throw 'error';
};
//
//
//
//
//
// ! TS with DOM
// ? Use as property to correctly define the DOM element so TS will know that DOM element has that property or not
// const someElement = document.querySelector('.foo');
// console.log('someElement', someElement.value) //? will throw error
// console.log('someElement', (someElement as any).value) //? never do this
const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log('someElement', someElement.value);

const secondElement = document.querySelector('.foo1');
secondElement.addEventListener('blur', (e) => {
  // console.log('e', e.target.value) //? will throw error

  const target = e.target as HTMLInputElement;
  console.log('e', target.value);
});
//
//
//
//
//
// ! Classes in TS
// ? Classes are just syntactical sugar around Prototypes

interface newUserInterface {
  getFullName(): string;
}

class NewUser implements newUserInterface {
  private firstName: string;
  private lastName: string;
  readonly unchangeableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = firstName + lastName;
  }

  //   changeUnchangeableName():void{
  //       this.unchangeableName='foo' //? will throw error can't change read only
  //   }

  // now if we don't implement getFullName class will throw error
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// ? Can access static type through class name
console.log(NewUser.maxAge);

const deepak = new NewUser('Deepak', 'Bhadoriya');
console.log(deepak.getFullName());
console.log(deepak.unchangeableName);

// ! Inheritance
class Admin extends NewUser {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const admin1 = new Admin('Admin', 'Name');
console.log(admin1.getFullName());
console.log(admin1.unchangeableName);
console.log(admin1.setEditor('Sam'));
console.log(admin1.getEditor);
//
//
//
//
//
// ! Generics interfaces and functions
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserJInterface<T> {
  // ? Generic interface allow us to provide different data types
  name: string;
  data: T;
}

const userJ: UserJInterface<{ meta: string }> = {
  name: 'jack',
  data: {
    meta: 'Foo',
  },
};

const userJ2: UserJInterface<string[]> = {
  name: 'John',
  data: ['foo', 'bar', 'baz'],
};

const result = addId<UserInterface>(user);
console.log(result);
