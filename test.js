// .toFixed()
const task1 = 1.5556;

console.log(task1.toFixed(2)); // 1.56 -> digunakan untuk membulatkan bilangan desimal

//  .reduce()
const task2 = [1, 2, 3, 4, 5];

const result = task2.reduce((x, y) => x + y);
console.log(result); // 15 -> digunakan untuk menggabungkan nilai dari pada task2

// .substring() -> untuk mengambil data pada index yang telah ditentukan
const task3 = "Live Coding Jojonomic Company";

console.log(task3.substring(0, 11));
