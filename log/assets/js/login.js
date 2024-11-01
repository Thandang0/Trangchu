function validateForm(event) {
    // Ngăn form tải lại trang
    event.preventDefault(); 

    const check_empty = /^$/; // Kiểm tra chuỗi rỗng
    const check_space = /\s/; // Kiểm tra khoảng trắng
    const check_length = /^.{6,8}$/; // Kiểm tra số ký tự từ 6 đến 8
    const check_dau =/^[a-zA-Z0-9]*$/; 
    let valid = true;

    const fullname = document.getElementById('fullname');
    const password = document.getElementById('password');

    // Kiểm tra fullname
    if (check_empty.test(fullname.value)) {
        valid = false;
        document.querySelector('.n-empty').style.display = 'block';
        document.querySelector('#fullname').style.borderColor='red';
    } else {
        document.querySelector('.n-empty').style.display = 'none';
        document.querySelector('#fullname').style.borderColor='green';
    }
    if(check_space.test(fullname.value) || !check_dau.test(fullname.value)){
        valid = false;
        document.querySelector('#fullname').style.borderColor='red';
        document.querySelector('.c-fullname').style.display = 'block';
    }
    else{
        document.querySelector('.c-fullname').style.display = 'none';
        document.querySelector('#fullname').style.borderColor='green';
    }


    // Kiểm tra password
    if (check_empty.test(password.value) || !check_length.test(password.value)) {
        valid = false;
        document.querySelector('#password').style.borderColor='red';
        document.querySelector('.c-password').style.display = 'block';
    } 
    else {
        document.querySelector('.c-password').style.display = 'none';
        document.querySelector('#password').style.borderColor='green';
    }


    //ktra dữ lie tren local
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    
    if (storedUserData) {
        // So sánh giá trị
        if (fullname.value === storedUserData.username && password.value === storedUserData.password) {
            // Nếu giống nhau, có thể cập nhật hoặc thực hiện hành động cần thiết
            localStorage.setItem('userData', JSON.stringify({
                username: fullname.value,
                password: password.value
            }));
            alert("Đăng nhập thành công!"); // Thông báo thành công
            // Có thể chuyển hướng hoặc thực hiện hành động khác
            window.location.href = 'https://thandang0.github.io/Trangchu/'; // Ví dụ chuyển hướng
        } 
        else {
            document.querySelector('.nopass').style.display = 'block';// Thông báo lỗi
            document.querySelector('#password').style.borderColor='red';
            document.querySelector('#fullname').style.borderColor='red';
        }
    } 
    else {
        alert("Không có dữ liệu người dùng trong Local Storage.");
    }
}   