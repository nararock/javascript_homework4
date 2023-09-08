//task1
for (let i = 0; i < 11; i++){
    if (i%2===0 && i!==0) console.log(`${i} - четное число`);
    else if (i%2!==0 && i!==0) console.log(`${i} - нечетное число`);
    else console.log(`${i} - это ноль`);
}

//task2
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

//task3
const array = Array.from({length:5}, el=>Math.trunc(Math.random()*9));
const sum = array.reduce((sum, el)=>sum+el,0);
const min = array.reduce((min, el)=>Math.min(min,el),array[0]);
console.log(array);
console.log(`Сумма элементов массива ${sum}`);
console.log(`Минимальное число в массиве ${min}`);
array.indexOf(3)!==-1?console.log(`В массиве есть число 3`):console.log(`В массиве нет числа 3`);

//task*
const a = Array.from({length:20}, (_, i)=>console.log('х'.repeat(i + 1)));
