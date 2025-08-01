export let Cart= JSON.parse(localStorage.getItem('cart'));

if(!Cart){
Cart=[
    {
        productId:"1",
        quantity:2
    },
    {
        productId:"2",
        quantity:1
    }
];
}

function storage(){
    localStorage.setItem('cart',JSON.stringify(Cart));
}

export function addtocart(productId){
        let maxcnt;
        Cart.forEach((qt)=>{
        if(productId===qt.productId){
            maxcnt=qt;
        }
    });
    const qntSelect=document.querySelector(`.js-quant-${productId}`);
    const quant = Number(qntSelect.value);
    console.log(quant);
    if(maxcnt){
        maxcnt.quantity+=quant;
    }else{
        Cart.push({
        productId:productId,
        quantity: quant
    });
    
}

storage();
}


function cartqunt(){
let cnt=0;
    Cart.forEach((qt)=>{
        cnt+=qt.quantity;
    })
    document.querySelector('.js-cart').innerHTML=cnt;
    


}

export function removeElement(pro){
    const newCart=[];
    let cn=0;
    Cart.forEach((ite)=>{
        
        if(ite.productId!==pro){
            cn+=ite.quantity;
            newCart.push(ite);
        }
    });
    document.querySelector('.js-citems').innerHTML=cn;
    Cart=newCart;
    storage();
}