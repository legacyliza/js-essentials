// function go(someName, someAge, friendName) {
//   console.log('Hello ' + someName + ' AGE: ' + someAge + " Friend: " + friendName);
// }

// function run(name,age,arr) {
//   let friends = '';
//   for (var i = 0; i < arr.length; i++){
//       friends = friends + arr[i] + ' ';
//   }

//   go(name, age, friends);
// }

// run('Liza',20,['Fred','Bob','Mike']);


// const obj = {
//   name: 'andrew',
//   age: 25,
  
//   getAge: function() {
//     console.log(this.age);
//   }
// };


// obj.getAge();

// let i = 0;

// for(; i < 100; i++) {
//   console.log(i);
// }






// const obj = {
//   name: 'liza',
//   age: '30',
//   getInfo: function() {
//     return this.name + ' : ' + this.age + ' : test your code';
//   }
// }

// function test(bz) {
//   console.log(bz.name)
//   console.log(bz.age)
//   console.log(bz.getInfo())
// }
// test(obj)




// const func = () => {
// }

// const func = function() {
//   console.log('hello liza');
// }

// function func() {
// }


// function helloLiza() {
//   console.log('hello liza2')
// };
// helloLiza()















function test(name, age, arr) {
  for(var z = 0; z < arr.length; z++) {
  
    console.log(name,age,arr[z]);
  }
}
test('liza',20,['red','green','blue']);


const obj = {
  name: 'Masha',
  age: 22,
};
console.log("My name is " + obj.name +  " and I'm " + obj.age + " years old.")


function run(name,age,arr) {
  let friends = '';
  for (var i = 0; i < arr.length; i++){
      friends = friends + arr[i] + ' ';
  }
  console.log(name,age,friends)
}
run('Liza',20,['Fred','Bob','Mike']);




// 1.2 Max and Min
function math(one,two,tree) {
  console.log(Math.max(one,two,tree));
  console.log(Math.min (one,two,tree));
}
math(30,20,1)

// 1.3  Average number
function nums(a,b,c) {
  return a + b + c
}
let result = nums(3,7,9)
console.log(result);

function div(d) {
  return result / 3
}
let division = div()
console.log(division);

// 4 
var test = ''
for(var i = 0; i<=8; i++){
  test += '#'
  console.log(test)
}
