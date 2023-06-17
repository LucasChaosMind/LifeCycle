
let buyClothe = () =>{
    
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
        products.qty += 1;
    }else{
        let product = {
            id: 1,
            name: 'Pruduct Test System',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            img: 'https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg',
            color: '#ff00ee',
            size: 'XL',
            price: 999,
            qty: 1
        }
        products = product;
    }

    localStorage.setItem("products", JSON.stringify(products));

    console.log(NewProductDOM(products));
    console.log(JSON.parse(localStorage.getItem("products")));
}

const openTheCart = () =>{
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
    }else{
        return;
    }

    document.getElementById("info-products").innerHTML += NewProductDOM(products);

    thePrice(products);
}

const moreQuantity = (id) =>{
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
        if(products.id = parseInt(id)){
            products.qty += 1;
            localStorage.setItem("products", JSON.stringify(products));
            document.querySelectorAll(".productSee").forEach((product)=>{
                product.remove();
            })
            openTheCart();
        }
        
    }else{
        return;
    }

}
const minusQuantity = (id)=>{
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
        if(products.id = parseInt(id)){
            products.qty -= 1;
            localStorage.setItem("products", JSON.stringify(products));
            document.querySelectorAll(".productSee").forEach((product)=>{
                product.remove();
            })
            openTheCart();
        }
        
    }else{
        return;
    }
}

const thePrice = (products) =>{
    let total = products.qty * products.price;
    document.getElementById("subtotal").innerHTML = total;
    document.getElementById("total").innerHTML = total;
}

const NewProductDOM = (product) => {
    
    return`<div class='productSee mb-1'>
            <div class='product-detail d-flex'>
                <img class='img' src="${product.img}" />
                <div class='details ps-2 d-flex justify-content-around flex-column'>
                    <span class='product-name' ><b>Product:</b>${product.name}</span>                        <span className='Product-id'><b>ID:</b>00000001</span>
                        <div class='product-color' style="background-color: ${product.color}"></div>
                        <span class='product-size'><b>Size:</b>${product.size}</span>   
                </div>
                <div class='price-detail d-flex justify-content-evenly align-items-center flex-column'>
                    <div class='productAmountContainer mb-1 d-flex align-items-center' >
                    <button style="cursor: 'pointer'" onClick="moreQuantity(${product.id})">+</button>
                        <span class='product-amount'>${product.qty}</span>
                        <button style="cursor: class="button-more" 'pointer'" onClick="minusQuantity(${product.id})">-</button>
                    </div>
                    <span class='product-price'><span>$</span>${product.price}</span>
                </div>
            </div>
    </div>`
} 