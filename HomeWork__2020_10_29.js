// ДЗ

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

let arr = [1, 2, 3, 4, 5];
arr = arr.slice(0, 2);
document.write(arr);


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.