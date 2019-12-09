let makePerson = (name, age) => {
	let person = {}
	person.name = name
	person.age = age
	return person
}

const vicky = makePerson('Vicky', 24)


// Creating explicit relationship pattern to personStore (creates the prototype relationship in the background)
// The instance of the class has access to its parents 'prototype' object by using its own .__proto__ object. 

const personStore = {
	greet: function(){
		console.log('hello')
	}
}

function personFromPersonStore(name, age) {
	let person = Object.create(personStore)
	person.name = name
	person.age = age
	return person
}

personStore.introduce = function() {
	console.log("Hi, my name is " + this.name)
}

const ian = personFromPersonStore('Ian', 33)
ian.greet()
console.log(ian.age)
console.log(ian.name)
ian.introduce()
console.log(ian.__proto__)






// A lot of the above is automated when using the 'new' keyword, which is responsible for creating the `this` reference 
// (which refers to the calling object. e.g. user1.methodname, the `this` will refer to the user1 object.`)

// the prototype relationship is also automatically defined by using the `new` keyword.
// it essentially does this:

// PersonConstructor {
// 	name: value
// 	age: value
// 	prototype: {
// 		greet() {
// 			do stuff
// 		}
// 	}
// }

 
function personConstructor() {
	this.greet = () => {
		console.log("hello")
	}
}

const personFromConstructor = (name, age) => {
	let person = new personConstructor()
	person.age = age
	person.name = name
	return person
}

const max = personFromConstructor('Max', 34)
max.greet()


// Finally, the class keyword introduces further syntactical sugar which automates the `this` keyword and handles the prototype / __proto__ relationship between classes and their instances. 


class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	increment() {
		this.score++
	}
	login() {
		console.log('you are logged in!')
	}
}

const b = new Person('Biaina', 35)
b.login()