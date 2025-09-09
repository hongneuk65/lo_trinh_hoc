//lesson 40 



interface IPerson {
    firstName: string;
    lastName: string;
    adđress: string;
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: "hong",
    lastName: "nguyen",
    adđress: "nghe an"
};

console.log(getFullName(person40))

// interface 


