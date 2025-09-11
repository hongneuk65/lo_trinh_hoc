const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
let thirdArr = [...firstArr, ...secondArr]


const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const update = {...myVehicle, ...updateMyVehicle}

console.log(update);