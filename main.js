// task1
// const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
// const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

// function mask() {
// 	let clients3 = [];
// 	for (let i = 0; i < clients1.length; i++){ 
// 		let client = clients1[i];
// 		if(clients2.indexOf(client) === -1) {
// 			clients3.push(client)
// 		}
// 	}

// 	for (let i = 0; i < clients2.length; i++){ 
// 		let client = clients2[i];
// 		if(clients1.indexOf(client) === -1) {
// 			clients3.push(client)
// 		}
// 	}
// 	return clients3;
// }
//  console.log(mask());


// вариант 2 

// const newSet = new Set([...clients1, ...clients2]);
// console.log(mySet2);

// task2
// const characters = [
// 	{
// 	  name: "Елена",
// 	  lastName: "Гилберт",
// 	  age: 17, 
// 	  gender: "woman",
// 	  status: "human"
// 	},
// 	{
// 	  name: "Кэролайн",
// 	  lastName: "Форбс",
// 	  age: 17,
// 	  gender: "woman",
// 	  status: "human"
// 	},
// 	{
// 	  name: "Аларик",
// 	  lastName: "Зальцман",
// 	  age: 31,
// 	  gender: "man",
// 	  status: "human"
// 	},
// 	{
// 	  name: "Дэймон",
// 	  lastName: "Сальваторе",
// 	  age: 156,
// 	  gender: "man",
// 	  status: "vampire"
// 	},
// 	{
// 	  name: "Ребекка",
// 	  lastName: "Майклсон",
// 	  age: 1089,
// 	  gender: "woman",
// 	  status: "vempire"
// 	},
// 	{
// 	  name: "Клаус",
// 	  lastName: "Майклсон",
// 	  age: 1093,
// 	  gender: "man",
// 	  status: "vampire"
// 	}
//  ];
//  function chekccHaracters (characters) {
// 	 const allHeroes = characters.map(({name, lastName, age}) => ({name, lastName, age}));
// 	 console.log(allHeroes);
//  }
//  chekccHaracters(characters);

//  tsak3
// const user1 = {
// 	name: "John",
// 	years: 30
// };
// const {name, years: age, isAdmin = false} = user1;
// // console.log(name, age, isAdmin);


// let container = document.getElementById('root');
// let list = "";
// for (key in user1) {
// 	let li = `<li>${key}: ${user1[key]}</li>`;
// 	list += li;
// 	console.log(li);
// }
// let ul = `<ul>${list}</ul>`;
// container.innerHTML = ul;

//  tsak4
// Детективное агентство несколько лет собирает информацию о возможной личности Сатоши Накамото. Вся информация, собранная в конкретном году, хранится в отдельном объекте. Всего таких объектов три - satoshi2018, satoshi2019, satoshi2020.
// Чтобы составить полную картину и профиль, вам необходимо объединить данные из этих трех объектов в один объект - fullProfile.
// Учтите, что некоторые поля в объектах могут повторяться. В таком случае в результирующем объекте должно сохраниться значение, которое было получено позже (например, значение из 2020 более приоритетное по сравнению с 2019).
// Напишите код, который составит полное досье о возможной личности Сатоши Накамото. Изменять объекты satoshi2018, satoshi2019, satoshi2020 нельзя.
// const satoshi2020 = {
// 	name: 'Nick',
// 	surname: 'Sabo',
// 	age: 51,
// 	country: 'Japan',
// 	birth: '1979-08-21',
// 	location: {
// 	  lat: 38.869422, 
// 	  lng: 139.876632
// 	}
//  }
 
//  const satoshi2019 = {
// 	name: 'Dorian',
// 	surname: 'Nakamoto',
// 	age: 44,
// 	hidden: true,
// 	country: 'USA',
// 	wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
// 	browser: 'Chrome'
//  }
 
//  const satoshi2018 = {
// 	name: 'Satoshi',
// 	surname: 'Nakamoto', 
// 	technology: 'Bitcoin',
// 	country: 'Japan',
// 	browser: 'Tor',
// 	birth: '1975-04-05'
//  }
// let newProfile = {...satoshi2018, ...satoshi2019, ...satoshi2020};
// console.log(newProfile);

//  task5
// Дан массив книг. Вам нужно добавить в него еще одну книгу, не изменяя существующий массив (в результате операции должен быть создан новый массив).
const books = [{
	name: 'Harry Potter',
	author: 'J.K. Rowling'
 }, {
	name: 'Lord of the rings',
	author: 'J.R.R. Tolkien'
 }, {
	name: 'The witcher',
	author: 'Andrzej Sapkowski'
 }];
 
 const bookToAdd = {
	name: 'Game of thrones',
	author: 'George R. R. Martin'
 }
 var newBooks = books.concat(bookToAdd);
console.log(newBooks);

// task6
// Дан обьект employee. Добавьте в него свойства age и salary, не изменяя изначальный объект (должен быть создан новый объект, который будет включать все необходимые свойства). Выведите новосозданный объект в консоль.
// const employee = {
//   name: 'Vitalii',
//   surname: 'Klichko'
// }
// const newUser = new Object(employee);
// // newUser.age = 50;
// // newUser.salary = 1000;
// const {name, surname, age = 50, salary = 1000} = newUser;

// const user = {name, surname, age, salary};
// console.log(employee);
// console.log(user);

// task7
// Дополните код так, чтоб он был рабочим
// const array = ['value', () => 'showValue'];
// const [value, showValue] = array


// alert(value); // должно быть выведено 'value'
// alert(showValue());  // должно быть выведено 'showValue'
