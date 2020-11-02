// ДЗ

// }/ let str = 'dassdasd';
// let n = -6;
// let b = true;
//
// let und = undefined;
// let wife = null;
//
// let obj = {};
// let symb = Symbol('s');
//
// let bN = BigInt(982314804824283);
//
//
//
// const me = {
//   name: 'Victor',
//   age: 24,
//   password: '12345',
//   job: {
//     company: {
//       name: 'Inoxoft',
//       street: 'H.Upa 73'
//     },
//     title: 'Middle+ Dev'
//   },
//   phone: 'Samsung'
// }
//
// // console.log(me);
// // console.log(me.job.company.name);
//
// me.car = 'Lacetti';
// me.bike = 'Fazer';
// me.age = 25;
//
// me.job.payment = 99999999;
//
// delete me.job.title;
// delete me.password
//
// console.log(me);
//
//
// const kari = {
//   name: 'karina',
//   age: 16
// }
//
//
// // const group = ['Alexandr', 'Dima', 'Anrii', 'Anna'];
// // const arrMe = ['Vcitro', 24, false, true, 'Fazer', 'Inoxoft', 5474575465403, 6767];
//
// const deletedusers = [];
//
// let users = [me, kari, {model: 3}, true, 'Tesla', [2, 5, ['Hello', 'World']]];
//
// // console.log(users);
// // console.log(users[1].age);
// // console.log(users[5][2][0]);
//
// // group[4] = 'Max';
// // console.log(group[666]);
//
// group.push('Anton');
// group.unshift('Oleg');
//
// let deletedUser = group.pop();
// alert(deletedUser + ' is deleted')
// deletedusers.push(deletedUser)
//
// group.pop()
// deletedUser = group.shift();
// deletedusers.push(deletedUser)
//
// deletedUser = group.shift();
// deletedusers.push(deletedUser)
//
// alert(deletedUser + ' is deleted')
//
// console.log(group);
// console.log(deletedusers);
// // console.log(ant);
// // console.log(oleg);


// const group = ['Alexandr', 'Dima','Anrii', 'Anna', 'Oleksii',];

// console.log(group[0])
// console.log(group[1])  => BAD
// console.log(group[2])
// console.log(group[3])

// console.log('*************');
// console.log(group.length);
// console.log(group);
// console.log('*************');


// i = i + 1
// i += 1
// i++

// for (let i = 0; i < group.length; i++) {
//   console.log(group[i])
//   console.log(i);
//   console.log('__________________');
// }

// let i = 0;

// while (i < group.length) {
//   console.log(group[i]);
//   i+=2
// }

// Практика 29.10.2020
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array_1 = ['a', 'b', 'c'];
// for(let i = 1; i<=3;i++){
//     array_1[array_1.length]= i;
// }
// console.log(array_1);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// Вариант 1
// let array_1 = [1, 2, 3];
// let array_2 = [];
// const count = array_1.length
// for(let i = 0; i<count; i++){
//     array_2[i]= array_1[array_1.length-1];
//     array_1.pop();
// }
// console.log(array_2);

// Вариант 2
// let array_1 = [1,2,3]
// let array_2 = [];
// // let tmp = array_1.pop();

// while (array_1.length) {
//     array_2.push(array_1.pop())
// }
// console.log(array_2)

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// Вариант 1

// let arr = [1,2,3]
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);

// Вариант 2

// let arr = [1,2,3]
// const tmp = arr.length;
// for (i=tmp; i<6;i++) {
// arr.push(i+1);
// }
// console.log(arr);

// Bариант 3

// let arr = [1,2,3]
// arr.push(4,5,6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr = [1,2,3]
// arr.unshift(4,5,6);
// console.log(arr);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];
// let deleted = arr.shift();
// document.write(deleted);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq'];
// let deleted = arr.pop();
// document.write(deleted);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let arr = [1,2,3,4,5];
// arr=arr.slice(3); 
// document.write(arr);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]

// let arr = [1,2,3,4,5];
// arr=arr.slice(0,2); 
// document.write(arr);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr = [1,2,3,4,5];
arr=arr.slice(0,2); 
document.write(arr);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.