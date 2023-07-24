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
                newCart.innerHTML = `<img src="${value.image}">
                    <div class="info">
                        <div class="name">${value.name}</div>
                        <div class="price">${value.price} VND/1 value</div>
                    </div>
                    <div class="quantity">${value.quantity}</div>
                    <div class="returnPrice">${
                        value.price * value.quantity
                    } VND</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + value.quantity;
                totalPrice = totalPrice + value.price * value.quantity;
            }
        });
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = totalPrice + "VND";
}
