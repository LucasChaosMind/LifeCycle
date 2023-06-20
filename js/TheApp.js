window.addEventListener('DOMContentLoaded', () =>{
    openTheCart();
});

let allMyProducts = [
    {
        id: 1,
        name: 'Pruduct Test System +',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        img: 'https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg',
        color: '#ff00ee',
        size: 'XL',
        price: 999,
    },
    {
        id: 2,
        name: 'Pruduct Test System ++',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        img: 'https://i.pinimg.com/564x/cf/cb/8c/cfcb8c2ad5a4b2748cd2ce62b3b17b94.jpg',
        color: '#ff0000',
        size: 'XL',
        price: 599,
    },
    
];

let buyClothe = (id) => {
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
        let existingProduct = allMyProducts.find(product => product.id === id);

        if (existingProduct) {
            let cartProduct = products.find(product => product.id === id);

            if (cartProduct) {
                products.forEach((pd, index)=>{
                    if(pd.id === id){
                        products[index].qty += 1;
                    }
                })
            } else {
                products.push({
                    ...existingProduct,
                    qty: 1
                });
            }
        }
    } else {
        let existingProduct = allMyProducts.find(product => product.id === id);

        if (existingProduct) {
            products = [{
                ...existingProduct,
                qty: 1
            }];
        } else {
            return;
        }
    }

    localStorage.setItem("products", JSON.stringify(products));

    console.log(NewProductDOM(products));
    console.log(JSON.parse(localStorage.getItem("products")));
}

const openTheCart = () => {
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
    } else {
        return;
    }

    products.forEach(product => {
        document.getElementById("info-products").innerHTML += NewProductDOM(product);
    });

    thePrice(products);
}

const moreQuantity = (id) => {
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
        let product = products.find(p => p.id === id);

        if (product) {
            product.qty += 1;
            localStorage.setItem("products", JSON.stringify(products));
            document.querySelectorAll(".productSee").forEach((product) => {
                product.remove();
            });
            openTheCart();
        }
    } else {
        return;
    }
}

const minusQuantity = (id) => {
    let auxProducts = localStorage.getItem("products");
    let products;

    if (auxProducts !== null) {
        products = JSON.parse(auxProducts);
        let product = products.find(p => p.id === id);

        if (product) {
            product.qty -= 1;
            localStorage.setItem("products", JSON.stringify(products));
            document.querySelectorAll(".productSee").forEach((product) => {
                product.remove();
            });
            openTheCart();
        }
        if(product.qty == 0 || product.qty < 0){
            const index = products.findIndex((pd) => pd.id === product.id)
            products.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(products));
            document.querySelectorAll(".productSee").forEach((product) => {
                product.remove();
            });
            openTheCart();
        }
    } else {
        return;
    }
}

const thePrice = (products) => {
    let total = 0;

    products.forEach(product => {
        total += product.qty * product.price;
    });

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