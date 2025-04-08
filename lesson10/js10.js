// this

// !"use strict" -> {}
// "use strict" -> {}, undefined (null, number, string)

// 1. Global scope
// 2. Function (arrow, simple)
// 3. call apply bind
// 4. fonction constructors

// 1. Global scope

// console.log(this);

// 2. Function (arrow, simple)

// ----------------------------
// -- arrow func

// "use strict";

// function bar() {
//   // this

//   const baz = () => {
// 		//
//     const foo = () => {
//       console.log(this);
//     };
//   };

//   foo();
// }

// bar();

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo();

// ----------------------------

// const car = {
//   brand: "bmw",
//   startEngine: function () {
//     // this
//     const foo = () => {
//       console.log(`Start ${this.brand}`);
//     };
//     foo();
//   },
// };

// car.startEngine();

// ----------------------------
// 3. call apply bind

// const car1 = {
//   brand: "bmw",
//   startEngine: function (title1, title2) {
//     console.log(`Start ${title1} ${title2} ${this.brand}`);
//   },
// };

// const car2 = {
//   brand: "kia",
// };

// // car1.startEngine.call(car2, "Super", "Super");
// // car1.startEngine.apply(car2, ["Super", "Super"]); // array

// const foo = car1.startEngine.bind(car2, "Super", "Super");
// foo();

// ----------------------------

// class User extends React.Component {
// 	this.name: 'user'

// 	showName: () => {
// 		console.log(this.name)
// 	}

// 	render(
// 		return (
// 			<Button onClick={showName} />
// 		)
// 	)
// }

// ----------------------------

// const car1 = {
//   brand: "bmw",
//   startEngine: function () {
//     console.log(`Start ${this.brand}`);
//   },
// };

// setTimeout(car1.startEngine.bind(car1), 1000);

// function mySetTimeout(callback, delay) {
//   // delay

//   callback(); () {
// car1.startEngine()
// }
// }

// ----------------------------

// const car1 = {
//   brand: "bmw",
//   startEngine: function () {
//     // car2
//     return function () {
// 			// car4

//     };
//     // return undefined
//   },

// };

// const car2 = {
//   brand: "kia",
// };

// const car3 = {
//   brand: "ferrari",
// };

// const car4 = {
//   brand: "toyota",
// };

// // console.dir(car1.startEngine.bind(car2));

// car1.startEngine.call(car2).bind(car4).call(car3);

// ----------------------------

// const car2 = {
//   brand: "kia",
// };

// const car1 = {
//   brand: "bmw",
//   startEngine: function () {
//     // this
//     const foo = () => {
//       console.log(`Start ${this.brand}`);
//     };

//     foo.call(car2);
//   },
// };

// car1.startEngine();

// ----------------------------
// 4. function constructors

// function CarCreator(brand, speed) {
//   // {}
//   this.brand = brand; // {brand: 'bmw'}
//   this.speed = speed; // {brand: 'bmw', speed: 200}
//   // return {brand: 'bmw', speed: 200
// }

// const car1 = new CarCreator("bmw", 200);
// const car2 = new CarCreator("kia", 220);

// console.log(car1);
// console.log(car2);

// function foo() {}

// console.log(new foo());

// ----------------------------

function foo() {
  // this
  const x = 10;

  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

// const obj1 = foo();
// obj1.bar(); // undefined  || 20 ||
// obj1.baz(); // 20 				|| 20 ||

const obj2 = foo.call({ x: 30 });

// obj2.bar(); // 30 || 30

let y = obj2.bar;
let z = obj2.baz;

y(); // 30
z(); // undefined
