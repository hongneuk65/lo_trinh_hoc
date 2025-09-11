let user = {};

console.log(user.address ? user.address.street: undefined);

console.log(user?.address?? "not found user")

let userAdmin = {
    admin() {
        alert("i am hong");
    }
};
let userGuest = {};

userGuest?.admin?.();