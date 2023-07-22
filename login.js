function checkCredentials(event) {
	event.preventDefault(); // Ngăn chặn form gửi dữ liệu mặc định

	// Lấy giá trị của tên đăng nhập và mật khẩu từ các trường nhập liệu
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Kiểm tra nếu tên đăng nhập là "Hung" và mật khẩu là "123" thì hiển thị thông báo đăng nhập thành công
	if (username === "Hung" && password === "123") {
	  window.location.href="index.html"
	} else {
	  document.getElementById("message").textContent = "username or password is incorrect, please try again!";
	}
}