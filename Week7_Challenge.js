// Create a method in the Person class which returns how another person's age compares.
// return a sentence in the following format: {other person name} is {older than / younger than / the same age as} me.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		let otherPersonName = other.name;
        let otherPersonAge = other.age;
        let myAge = this.age;

        if (otherPersonAge < myAge) {
            return `${otherPersonName} is younger than me.`;
        } else if (otherPersonAge > myAge) {
            return `${otherPersonName} is older than me.`;
        } else if (otherPersonAge === myAge) {
            return `${otherPersonName} is the same age as me.`;
        }
    }
}

let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

