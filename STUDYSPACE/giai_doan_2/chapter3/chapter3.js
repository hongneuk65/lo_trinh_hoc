let sum6 = (x, y, z=0 ) => { // z là optional param
    console.log(z);
    if(z){
        return x + y + z;
    }
    return x + y
}

console.log("check sum6: ", sum6(1,3), sum6(1,3,9)); 

let sum4 = (x, y, z ) => { // z là optional param
    console.log(z);
    if(z){
        return x + y + z;
    }
    return x + y
}

console.log("check: ", sum4(1,3,3)); // NaN: not a number; null; undef

