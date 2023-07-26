let listCart = [];
function checkCart() {
    var cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("listCart="));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split("=")[1]);
    }
}
checkCart();
addCartToHTML();
// submitPay();
function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector(".returnCart .list");
    listCartHTML.innerHTML = "";

    let totalQuantityHTML = document.querySelector(".totalQuantity");
    let totalPriceHTML = document.querySelector(".totalPrice");
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if (listCart) {
        listCart.forEach((product) => {
            if (product) {
                let newCart = document.createElement("div");
                newCart.classList.add("item");
                newCart.innerHTML = `
                    <div class="item__img">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">${product.price.toLocaleString()}VND/1 vé</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">${(
                        product.price * product.quantity
                    ).toLocaleString()} VND</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + product.price * product.quantity;
            }
        });
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = totalPrice.toLocaleString() + "VND";
}
let submitPhone = document.getElementById("phone").value;

//
function CustomAlert() {
    //
    this.alert = function (message, title) {
        let submitName = document.getElementById("fullName").value;
        let submitPhone = document.getElementById("phone").value;
        let submitAddress = document.getElementById("address").value;

        // 1. Validate dữ liệu. VD: Nhập đủ thông tin.

        if (!submitName || !submitPhone || !submitAddress) {
            alert("Vui lòng nhập đủ thông tin trước khi thực hiện thanh toán!");
            return;
        }

        // 2. Thực hiện đẩy data checkout vào cookie hoặc localStorage.
        // const keyNgoc = `data_checkout`;
        document.cookie =
            "data_checkout=" +
            JSON.stringify(submitName, submitPhone, submitAddress) +
            "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
        // localStorage.setItem(
        //     keyNgoc,
        //     JSON.stringify(Ngoc)
        //   );
        // 3. Thực hiện thông báo thành công, quay lại màn hình index.
        // alert("Bạn đã đặt hàng thành công!");
        listCart = [];
        document.cookie =
            "listCart=" +
            JSON.stringify(listCart) +
            "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
        document.body.innerHTML =
            document.body.innerHTML +
            '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

        let dialogoverlay = document.getElementById("dialogoverlay");
        let dialogbox = document.getElementById("dialogbox");

        let winH = window.innerHeight;
        dialogoverlay.style.height = winH + "px";

        dialogbox.style.top = "100px";

        dialogoverlay.style.display = "block";
        dialogbox.style.display = "block";

        document.getElementById("dialogboxhead").style.display = "block";

        if (typeof title === "undefined") {
            document.getElementById("dialogboxhead").style.display = "none";
        } else {
            document.getElementById("dialogboxhead").innerHTML =
                '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' +
                title;
        }
        document.getElementById("dialogboxbody").innerHTML = message;
        document.getElementById("dialogboxfoot").innerHTML =
            '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    };

    this.ok = function () {
        document.getElementById("dialogbox").style.display = "none";
        document.getElementById("dialogoverlay").style.display = "none";
        window.location.href = "index.html";
    };
}

let customAlert = new CustomAlert();
