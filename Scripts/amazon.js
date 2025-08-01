import{Cart,addtocart} from '../Scripts/cart.js'
import{productArray} from '../Scripts/products.js'

let add='';
productArray.forEach((product)=>{
    add +=  `<div class="container">
            <div class="pro-image-con">
                <img class="pro-image" src="${product.image}">
            </div>
            <div class="matter">
                ${product.productName}
            </div>
            <div class="rating">
                <img class=rat-stars src="images/ratings/rating-${(product.rating.stars)*10}.png">
                <div class="count">${product.rating.rCount}</div>
                
            </div>
            <div class="cost">
                ${(product.priceCent/100).toFixed(2)}
            </div>
            <div class="quantity">
                <select class="sel js-quant-${product.id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div>
            <div class="added-to-cart">
                <div class="added-to-cart js-added-to-cart-${product.id}">

                </div>
                </div>
                <button class="add-to-cart js-addCart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>`;
        document.querySelector('.js-grid').innerHTML=add;

function cartquantity(){
     let cnt=0;
        Cart.forEach((qt)=>{
            cnt+=qt.quantity;
        });
        document.querySelector('.js-cart').innerHTML=cnt;
    }
function displayadding(productId){
      const adding = document.querySelector(`.js-added-to-cart-${productId}`);
        adding.classList.add('added-to-cart-visible');
        adding.innerHTML=`<img class="tick-img" src="images/icons/checkmark.png" > Added`
            
        setTimeout(() => {
            adding.innerHTML='';
            
        }, 1000);
}
        
        document.querySelectorAll('.js-addCart').forEach((button)=>{
        button.addEventListener('click',()=>{
            
         const productId = button.dataset.productId;
         addtocart(productId);
         cartquantity();
         displayadding(productId);  
    });        
    })
    });
                    

