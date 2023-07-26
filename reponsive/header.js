// Lắng nghe sự kiện click vào nút
const toggleButton = document.getElementById("toggleButton");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", function () {
    // Kiểm tra xem menu có đang hiển thị hay không
    const isMenuVisible = menu.classList.contains("visible");

    // Nếu đang hiển thị, ẩn đi. Ngược lại, hiển thị menu.
    if (isMenuVisible) {
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
    }
});
