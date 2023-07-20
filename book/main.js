let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "Vé Vào Cửa Lễ Hội - Trẻ Em",
        image: "../assets/img/product/tickets-350x301.png",
        price: 60000,
        address: "Hà Nội",
        time: "<br>26-7-2023 đến 30-7-2023 ",
    },
    {
        id: 2,
        name: "Vé Vào Cửa Lễ Hội - Người lớn",
        image: "../assets/img/product/ticket1.jpeg",
        price: 100000,
        address: "Hà Nội",
        time: "<br>26-7-2023 đến 30-7-2023 ",
    },
    {
        id: 3,
        name: "Vé Vào Cửa Lễ Hội - Công Ty",
        image: "../assets/img/product/ticket2.avif",
        price: 80000,
        address: "Hà Nội",
        time: "<br>26-7-2023 đến 30-7-2023 ",
    },
    {
        id: 4,
        name: "Vé Vào Cửa Lễ Hội - Ưu tiên",
        image: "../assets/img/product/ticket3.avif",
        price: 100000,
        address: "Hà Nội",
        time: "<br>26-7-2023 đến 30-7-2023 ",
    },
    {
        id: 5,
        name: "Music festival Wonder",
        image: "../assets/img/product/ticket5.jpg",
        price: 300000,
        address: "Vinwonder Nha Trang",
        time: "<br>20:00, 22 tháng 7 năm 2023",
    },
    {
        id: 6,
        name: "Buổi hoà nhạc Summer vibes",
        image: "../assets/img/product/ticket6.jpg",
        price: 300000,
        address: " Thừa Thiên Huế",
        time: "<br>22:00, 28 tháng 8 năm 2023",
    },
    {
        id: 7,
        name: "Lễ hội âm nhạc",
        image: "../assets/img/product/ticket7.jpg",
        price: 300000,
        address: "Hà Nội",
        time: "<br>22:00, 25 tháng 9 năm 2023",
    },
    {
        id: 8,
        name: "Buổi hoà nhạc Open-air",
        image: "../assets/img/product/ticket8.jpg",
        price: 250000,
        address: "Hồ Chí Minh",
        time: "<br>22:00, 25 tháng 9 năm 2023",
    },
    {
        id: 9,
        name: "Buổi hoà nhạc Mixtape party",
        image: "../assets/img/product/ticket 9.jpg",
        price: 300000,
        address: "Biển Cửa Lò, Nghệ An",
        time: "<br>20:00, 22 tháng 12 năm 2023",
    },
    {
        id: 10,
        name: "THẺ KIM CƯƠNG",
        image: "../assets/img/card/1_KIM_CUONG.jpg",
        price: 500000000,
        address: "Hà Nội",
        time: "Bay toàn quốc 5 năm",
    },
    {
        id: 11,
        name: "THẺ BẠCH KIM",
        image: "../assets/img/card/2_BACH_KIM.jpg",
        price: 100000000,
        address: "Hà Nội",
        time: "Bay toàn quốc 2 năm",
    },
    {
        id: 12,
        name: "THẺ VÀNG",
        image: "../assets/img/card/3_VANG.jpg",
        price: 50000000,
        address: "Hà Nội",
        time: "Bay toàn quốc 1 năm",
    },
    {
        id: 13,
        name: "THẺ BẠC",
        image: "../assets/img/card/4_BAC.jpg",
        price: 30000000,
        address: "Hà Nội",
        time: "Bay toàn quốc 1 năm",
    },
    {
        id: 14,
        name: "THẺ THÀNH VIÊN",
        image: "../assets/img/card/5_THANH_VIEN.jpg",
        price: 5000000,
        address: "Hà Nội",
        time: "Bay toàn quốc 1 năm",
    },
    {
        id: 15,
        name: "THẺ GIA ĐÌNH",
        image: "../assets/img/card/6_GIA_DINH.jpg",
        price: 3000000,
        address: "Hà Nội",
        time: "Bay toàn quốc 1 năm",
    },
    {
        id: 16,
        name: "THẺ DOANH NGHIỆP",
        image: "../assets/img/card/7_DOANH_NGHIEP.jpg",
        price: 5500000,
        address: "Hà Nội",
        time: "Bay toàn quốc 1 năm",
    },
    {
        id: 17,
        name: "THẺ CÔNG ĐOÀN",
        image: "../assets/img/card/8_CONG_DOAN.jpg",
        price: 4900000,
        address: "Hà Nội",
        time: "Bay toàn quốc 1 năm",
    },
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <div class="add__img"><img src="${
                value.image
            }" class = "add__img--in"></div>
            <div class="title">${value.name}</div>
            <div class="price">Giá vé: ${value.price.toLocaleString()} VNĐ</div>
            <div class="address">Địa điểm: ${value.address} </div>
            <div class="time">Thời gian: ${value.time} </div>
            <button class="button" onclick="addToCard(${key})">Thêm vào giỏ hàng</button>`;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
                value.quantity - 1
            })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
                value.quantity + 1
            })">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
// changePage
let thisPage = 1;
let limit = 6;
let listItem = document.querySelectorAll(".item");
function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    listItem.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    listPage();
}
loadItem();
function listPage() {
    let count = Math.ceil(listItem.length / limit);
    document.querySelector(".listPage").innerHTML = "";
    if (thisPage != 1) {
        let prev = document.createElement("li");
        prev.innerHTML = "Prev";
        prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
        document.querySelector(".listPage").appendChild(prev);
    }
    for (i = 1; i < count; i++) {
        let newPage = document.createElement("li");
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add("active");
        }
        newPage.setAttribute("onclick", "changePage(" + i + ")");
        document.querySelector(".listPage").appendChild(newPage);
    }
    if (thisPage != count) {
        let next = document.createElement("li");
        next.innerHTML = "Next";
        next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
        document.querySelector(".listPage").appendChild(next);
    }
}
function changePage(i) {
    thisPage = i;
    loadItem();
}
