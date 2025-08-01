import{Cart,removeElement} from '../Scripts/cart.js'
import {productArray} from '../Scripts/products.js'
let tot='';
Cart.forEach((qt)=>{
    const productId=qt.productId;
    let MatchPro;
    productArray.forEach((pitem)=>{
        if(pitem.id===productId){
            MatchPro=pitem;
        }
    });
    if(MatchPro){
    tot+=
    `
    <div class="check-o1 
      js-pro-con-${MatchPro.id}">
    <div class="check-date">Delivery date: Tuesday,June 21</div>
    <div class="check-pd">
        
            <img class="img" src="${MatchPro.image}">
        
        <div class="check-mat">
            <div class="pro-nm">${MatchPro.productName}</div>
            <div class="cost">${((MatchPro.priceCent)/100).toFixed(2)}</div>
            <div class="quant">
                <span class="qunt">Quantity: ${qt.quantity} </span>
                <div class="js-updt-btn sp-css" data-product-id="${MatchPro.id}">Update</div>
                <span class="sp-${MatchPro.id} "></span>
                <span class="sp js-del-btn" data-product-id="${MatchPro.id}">Delete</span>
            </div>
        </div>
    </div>
    <div class="check-abt">
        <div class="d-opt">
            Choose a delivery option:
        </div>
        <div class="rad-1">
            <input type="radio" checked class="rad-but" name="del-${MatchPro.id}">
            <div class="rad-1de">
                <div class="day-date">
                    Tuesday, June 21
                </div>
                <div class="ship-cost">
                    FREE Shipping
                </div>
            </div>
        </div>
        <div class="rad-1">
            <input type="radio" class="rad-but" name="del-${MatchPro.id}">
            <div class="rad-1de">
                <div class="day-date">
                    Wednesday, June 15
                </div>
                <div class="ship-cost">
                    $4.99-Shipping
                </div>
            </div>
        </div>
        <div class="rad-1">
            <input type="radio" class="rad-but" name="del-${MatchPro.id}">
            <div class="rad-1de">
                <div class="day-date">Monday, June 13</div>
                <div class="ship-cost">$9.99-Shipping</div>
            </div>
        </div>
    </div>
    </div>
    `;}
});
document.querySelector('.js-checkout-list').innerHTML=tot;
function deletebtn(){
 document.querySelectorAll('.js-del-btn').forEach((link)=>{
    link.addEventListener('click',()=>{
     const proId=link.dataset.productId;
    removeElement(proId);
    const container=document.querySelector(`.js-pro-con-${proId}`);
    container.remove();
    })
 })
}
deletebtn();
document.querySelectorAll('.js-updt-btn').forEach((link)=>{
    link.addEventListener('click',()=>{
    const proId=link.dataset.productId;
    const target=document.querySelector(`.sp-${proId}`);
    target.innerHTML=`<input class="quant-input" > <span class="save-quant link-primary">Save</span>`;
    const savebtn=target.querySelector('.save-quant');
    const inpf=target.querySelector('.quant-input');
    savebtn.addEventListener('click',()=>{
       const newv=Number(inpf.value);
       let match;
       Cart.forEach((item)=>{
        if(item.productId===proId){
            match=item;
        }
        });
        if(match){
            match.quantity=newv;
            localStorage.setItem('cart',JSON.stringify(Cart));
            location.reload();
        }
       })
       console.log(Cart);
    console.log(proId);
    })
})
let cou=0;
Cart.forEach((item)=>{
    cou+=item.quantity;
});
document.querySelector('.js-citems').innerHTML=cou;

