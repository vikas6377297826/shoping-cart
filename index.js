const data= [
    {
        id : 0,
        img : 'images/0001.jpg',
        name : 'Redmi K20',
        price : 858,
        save : 58,
        delievery : 'After shipping In 4 - 7 days',
        itemInCart: false,
        details: "I am product number1 jwtb rejbrjergnjergberrgbdgjreg n wjerg ergij erghherwruierh eijjrbire hrtbr eghrtjbhier ghjrebgre ghrt giurtugerghtr huirt htrhiir rt",
        imgFirst: 'images/0001.jpg',
        imgSecond: 'images/0002.jpg',
        imgThird: 'images/0003.jpg',
        imgForth: 'images/0004.jpg'
    },
    {
        id : 1,
        img : 'images/T-001.jpg',
        name : 'Samsung Galaxy Note 20',
        price : 300,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        details: "I am product number1 jwtb rejbrjergnjergberrgbdgjreg n wjerg ergij erghherwruierh eijjrbire hrtbr eghrtjbhier ghjrebgre ghrt giurtugerghtr huirt htrhiir rt",
        imgFirst: 'images/T-001.jpg',
        imgSecond: 'images/T-002.jpg',
        imgThird: 'images/T-003.jpg',
        imgForth: 'images/T-004.jpg'
    },
    {
        id : 2,
        img : 'images/redmi9.jpg',
        name : 'OPPO Find X2',
        price : 240,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        details: "I am product number1 jwtb rejbrjergnjergberrgbdgjreg n wjerg ergij erghherwruierh eijjrbire hrtbr eghrtjbhier ghjrebgre ghrt giurtugerghtr huirt htrhiir rt",
        imgFirst: 'images/oppA5s.jpg',
        imgSecond: 'images/redmi8.jpg',
        imgThird: 'images/redmi9.jpg',
        imgForth: 'images/vivo.jpg'
    },
    {
        id : 3,
        img : 'images/oppa5s.jpg',
        name : 'Realme X50 Pro',
        price : 285,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
         details: "I am product number1 jwtb rejbrjergnjergberrgbdgjreg n wjerg ergij erghherwruierh eijjrbire hrtbr eghrtjbhier ghjrebgre ghrt giurtugerghtr huirt htrhiir rt",
        imgFirst: 'images/samgalaxyM01.jpg',
        imgSecond: 'images/redmi8.jpg',
        imgThird: 'images/samGalaxys20+.jpg',
        imgForth: 'images/vivo.jpg'
    },
    {
        id : 4,
        img : 'images/redminote8.jpg',
        name : 'Redmi Note 8',
        price : 200,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
         details: "I am product number1 jwtb rejbrjergnjergberrgbdgjreg n wjerg ergij erghherwruierh eijjrbire hrtbr eghrtjbhier ghjrebgre ghrt giurtugerghtr huirt htrhiir rt",
        imgFirst: 'images/oppA5s.jpg',
        imgSecond: 'images/redmi8.jpg',
        imgThird: 'images/redmi9.jpg',
        imgForth: 'images/vivo.jpg'
    },
    {
        id : 5,
        img : 'images/redminote9.jpg',
        name : 'Redmi Note 9',
        price : 220,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
         details: "I am product number1 jwtb rejbrjergnjergberrgbdgjreg n wjerg ergij erghherwruierh eijjrbire hrtbr eghrtjbhier ghjrebgre ghrt giurtugerghtr huirt htrhiir rt",
        imgFirst: 'images/oppA5s.jpg',
        imgSecond: 'images/redmi8.jpg',
        imgThird: 'images/redmi9.jpg',
        imgForth: 'images/vivo.jpg'
    },
    {
        id : 6,
        img : 'images/redmi8.jpg',
        name : 'Redmi 8A Dual',
        price : 160,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : 'images/redmi9.jpg',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 8,
        img : 'images/redmi9.jpg',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 9,
        img : 'images/redmi9.jpg',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
        
    },
    {
        id : 10,
        img : 'images/redmi9.jpg',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 11,
        img : 'images/redmi9.jpg',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    }
];

let cartList=[]; //array to store cart lists

let i;
let detail = document.getElementsByClassName('card-item');
let detailsImg = document.getElementById('details-img')
let detailTitle = document.getElementById('detail-title')
let detailPrice = document.getElementById('detail-price')
let youSave = document.getElementById('you-save');
let spec = document.getElementById("spec");
let detailsPage = document.getElementById('details-page');
let back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
let imgfirst = document.getElementById("option-img1");
let imgsecond = document.getElementById("option-img2");
let imgthird = document.getElementById("option-img3");
let imgforth = document.getElementById("option-img4");
let addToCarts = document.querySelectorAll('#add-to-cart')
let cart = document.getElementById('cart');


// click event to display cart page
cart.addEventListener('click',displayCart);

let carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click', ()=>addToCart(getId));

let home = document.getElementById('logo');

//click event to hide cart page and return to home page
home.addEventListener('click', hideCart);

// Events on dynamically created element to remove items from list 
document.addEventListener('click', function(e){
    if (e.target.id=='remove') {
        let itemId = e.target.parentNode.id
        removeFromCart(itemId);
    }
})

//click event to display details page
for (let i = 0; i < data.length; i++) {
    detail[i].addEventListener('click', handleDetail)

};
let getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val => val.addEventListener('click', ()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
    detailsPage.style.display = 'block';
    getId = this.parentNode.id;
    detailsImg.src = data[getId].img;
    detailTitle.innerHTML = data[getId].name;
    detailPrice.innerHTML = 'price : $ ' + data[getId].price;
    youSave.innerHTML = 'You save : ($ ' + data[getId].save + ')';
    spec.innerHTML =  data[getId].details;
    imgfirst.src = data[getId].imgFirst;
    imgsecond.src = data[getId].imgSecond;
    imgthird.src = data[getId].imgThird;
    imgforth.src = data[getId].imgForth;
}

// add item to the cart
function addToCart(id){
    if (!data[id].itemInCart) {
        cartList = [...cartList, data[id]];
        addItem()
        alert("item added to your cart");
    } else{
        alert("your item is already there")
    }
    data[id].itemInCart = true;
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none';
}

//hide your cart page
function hideCart(){
    document.getElementById("main").style.display = "block";
    document.getElementById("cart-container").style.display = "none";
}

//display your cart page
function displayCart(){
    document.getElementById("main").style.display = "none";
    document.getElementById("details-page").style.display = "none";
    document.getElementById("cart-container").style.display = "block"
    if (cartList.length==0) {
        document.getElementById("cart-with-items").style.display = "none";
        document.getElementById("empty-cart").style.display = "block";
    }
    else{
        document.getElementById("empty-cart").style.display = "none";
        document.getElementById("cart-with-items").style.display = "block";
    }
}

let totalAmount;
let totalItems;
let totalSaving;

//add item to the cart
function addItem(){
    totalAmount = 0;
    totalItems = 0;
    totalSaving = 0;
    let clrNode = document.getElementById("item-body");
    clrNode.innerHTML = '';
    console.log(clrNode.childNodes);
    cartList.map((cart)=>{
        let cartCont = document.getElementById("item-body");
        totalAmount = totalAmount + cart.price;
        totalSaving = totalSaving + cart.save;
        totalItems = totalItems + 1;

        let tempCart = document.createElement('div');
        tempCart.setAttribute('class', 'cart-list');
        tempCart.setAttribute('id', cart.id);

        let listImg = document.createElement('img');
        listImg.setAttribute('id', 'list-img');
        listImg.src = cart.img;
        tempCart.appendChild(listImg);

        let listName = document.createElement('h3');
        listName.setAttribute('class', 'list-name');
        listName.innerHTML = cart.name;
        tempCart.appendChild(listName);

        let listPay = document.createElement('h3');
        listPay.setAttribute('class', 'pay');
        listPay.innerHTML = cart.price;
        tempCart.appendChild(listPay);

        let listQuantity = document.createElement('h3');
        listQuantity.setAttribute('class', 'quantity');
        listQuantity.innerHTML = '1';
        tempCart.appendChild(listQuantity);

        let listTrash = document.createElement('i');
        listTrash.setAttribute('class', 'fa fa-trash ');
        listTrash.setAttribute('id', 'remove');
        tempCart.appendChild(listTrash);

        cartCont.appendChild(tempCart);
    })
        document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
        document.getElementById('total').style.display= "block"; 
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}

/* zoomer effacts
let span = document.getElementById('span');
let div = document.getElementById('div');

console.log(div, span);

 let cx = div.offsetWidth / span.offsetWidth;
 let cy = div.offsetHeight / span.offsetHeight;

 function imagezoomer(){
     span.addEventListener("mousemove", movesspan);
     detailsImg.addEventListener("mousemove", movesspan);

     span.addEventListener("mouseleave", leave);
     detailsImg.addEventListener("mouseleave", leave);
     
     function movesspan(e){
         span.style.visibility = "visible";
                      div.style.visibility = "visible";
     }
 }

*/ 








imgfirst.addEventListener('mouseover', displayPhoto1);
function displayPhoto1(){
    console.log("you are click on photo")
    detailsImg.src = imgfirst.src;
}

imgsecond.addEventListener('mouseover', displayPhoto2);
function displayPhoto2(){
    console.log("you are click on photo")
    detailsImg.src = imgsecond.src;
}

imgthird.addEventListener('mouseover', displayPhoto3);
function displayPhoto3(){
    console.log("you are click on photo")
    detailsImg.src = imgthird.src;
}

imgforth.addEventListener('mouseover', displayPhoto4);
function displayPhoto4(){
    console.log("you are click on photo")
    detailsImg.src = imgforth.src;
}




// This code is nit running so don't distreb
/*let div = document.createElement("div");

div.setAttribute("id","zoom-img-area");

let span = document.createElement("span");
span.setAttribute("id","zoom-img");

let cx = div.offsetWidth / span.offsetWidth;
let cy = div.offsetHeights / span.offsetHeight;

function imageZoomer(){
    span.addEventListener("mousemove", movespan);
    detailsImg.addEventListener("mousemove", movespan);

    span.addEventListener("mouseleave", leave);
    detailsImg.addEventListener("mouseleave", leave);
function movespan(e){

    span.style.visibility = "visible"
    div.style.visibility = "visible"

    let pos, x, y;
    e.preventDefault();
    pos = getCursorPostion(e);
    x = pos.x - (span.offsetWidth);
    y = pos.x - (span.offsetHeight);

    if (x>detailsImg.width - span.offsetWidth) {
        x = detailsImg.width - span.offsetWidth;
    }
    if(x<0){x=0};
    if (y>detailsImg.height - span.offsetHeight) {
        y = detailsImg.height - span.offsetHeight;
    }
    if (y<0) {y=0};

    span.style.left = x + "px";
    span.style.top = y + "px";
    div.style.backgroundPosition = "-" + (x*cx) + "px -" + (y*cy) + "px";
}

function getCursorPostion(e){
    div.style.backgroundImage = "url('"+ detailsImg.src + "')"
    let a, x=0; y=0;
    e = e||window.event;
    a = detailsImg.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {X:x, Y:y}
 }
 function leave(){
     span.style.visibility = "hidden";
     div.style.visibility = "hidden";
 }
}
imageZoomer();




console.log(span, div);
*/

let magnifying_area =  document.getElementById("main_img");


magnifying_area.addEventListener("mousemove",function(event){
	clientX = event.clientX - magnifying_area.offsetLeft
	clientY = event.clientY - magnifying_area.offsetTop
	 
	let mWidth = magnifying_area.offsetWidth
	let mHeight = magnifying_area.offsetHeight
	clientX = clientX / mWidth * 100
	clientY = clientY / mHeight * 100

	//magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
	detailsImg.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
})

magnifying_area.addEventListener("mouseleave",function(){
	detailsImg.style.transform = 'translate(-50%,-50%) scale(1)'
})




let nlHidden = document.getElementById('nlHidden');



function displayNewsLatter(){
    let newsLatterFirst = document.getElementById('newsLatterFirst');
    setTimeout(() => {
        newsLatterFirst.style.display = "block"
    }, 5000);
}
displayNewsLatter();

nlHidden.addEventListener("click", function(){
    newsLatterFirst.style.display = 'none';
})








