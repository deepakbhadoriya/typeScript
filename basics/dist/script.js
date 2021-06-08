var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ! TypeScript type definition
// ? typed function parameters and return
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
var user = {
    name: 'Deepak',
    surname: 'Bhadoriya',
    age: 30,
    getMessage: function () {
        return 'Hello ' + this.name;
    }
};
var user2 = {
    name: 'Jack',
    surname: 'Sparrow',
    getMessage: function () {
        return 'Hello ' + this.name;
    }
};
//
//
//
//
//
// ! Union in TS
var username = 'alex';
var pageName = '1'; //this is union
var errorMessage = null; //Before fetching result
var users = null; //with interface
var someProp; //! never so this
var number = 2;
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
//
//
//
//
//
// ! void in TS
// ? When we don't return something its void (void is a set of undefined and null)
var doSomething = function () {
    console.log('do something');
};
//
//
//
//
//
// ! Any type in TS
// ? Any type turns off TS checks always avoid it
var foo = 'foo';
foo.bar(); // no error
//
//
//
//
//
// ! Unknown type in TS
// ? Introduced in TypeScript 3
var any = 10;
var unknown = 10;
var s1 = any;
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
var s2 = unknown;
var pageNum = '1';
// let numericPageNumber: number= pageNum as number  // ?  will throw error
var numericPageNumber = pageNum;
//
//
//
//
//
// ! never type in TS
// ? Function with never can't be executed to the end
var doSomething2 = function () {
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
var someElement = document.querySelector('.foo');
console.log('someElement', someElement.value);
var secondElement = document.querySelector('.foo1');
secondElement.addEventListener('blur', function (e) {
    // console.log('e', e.target.value) //? will throw error
    var target = e.target;
    console.log('e', target.value);
});
var NewUser = /** @class */ (function () {
    function NewUser(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName + lastName;
    }
    //   changeUnchangeableName():void{
    //       this.unchangeableName='foo' //? will throw error can't change read only
    //   }
    // now if we don't implement getFullName class will throw error
    NewUser.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    NewUser.maxAge = 50;
    return NewUser;
}());
// ? Can access static type through class name
console.log(NewUser.maxAge);
var deepak = new NewUser('Deepak', 'Bhadoriya');
console.log(deepak.getFullName());
console.log(deepak.unchangeableName);
// ! Inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(NewUser));
var admin1 = new Admin('Admin', 'Name');
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
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var userJ = {
    name: 'jack',
    data: {
        meta: 'Foo'
    }
};
var userJ2 = {
    name: 'John',
    data: ['foo', 'bar', 'baz']
};
var result = addId(user);
console.log(result);
