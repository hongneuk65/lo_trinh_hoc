// classes

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
    getAddress() {
        return this.address;
    }
}

const test = new Person('nguyen van hong', "nghe an");
console.log(test.name);
console.log(test.getAddress());



