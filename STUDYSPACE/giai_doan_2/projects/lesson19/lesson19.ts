// Allases type 
type hongType =  number | string;

function addNumberOrString(a: hongType, b: hongType) {
  // Nếu cả hai tham số đều là số
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // cộng số
  }

  // Nếu cả hai tham số đều là chuỗi
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b); // nối chuỗi
  }

  // Nếu không phải số hoặc chuỗi -> báo lỗi
  throw new Error('Parameters must be numbers or strings');
}

console.log("check >> :", addNumberOrString('h','nguyen'))