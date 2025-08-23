// tạo tài khoản
const email = "test@demo.com";
const pass = "123";

//lấy element
const account = document.getElementById("email");
const password = document.getElementById("pass");
const btn = document.getElementById("btn");

// thêm event
btn.addEventListener("click", (event) => {
    // so sánh tk và mk voà có hợp lệ không 
    event.preventDefault();
    if(account.value === email && password.value === pass) {
        alert("đăng nhập thành công");
        // action theo href success.html
        window.location.href = "success.html"

    } else {
        account.style.borderColor = "red"
        password.style.borderColor = "red"
        alert("tài khoản hoặc mật khẩu không đúng");
    }
})


  