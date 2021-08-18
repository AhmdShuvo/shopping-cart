 function update(Product, price,isIncreasing){

    const productInput=document.getElementById(Product+'-input');
    let productQuantity=productInput.value;

    if(isIncreasing){
        productInput.value=parseInt(productQuantity)+1;

    }
    else if(productQuantity>0){
      productInput.value=parseInt(productQuantity)-1;
    }
      productQuantity=productInput.value;
    const productPrice=document.getElementById(Product+'-price');
   
   productPrice.innerText=productQuantity*price;

  totalAmount();
   
 }
 function productQuantity1(product){

    const productInput=document.getElementById(product+'-input');
    const productQuantity=parseInt(productInput.value);
    return productQuantity;
 }
 function totalAmount(){
     const phoneTotal=productQuantity1('phone')*1219;
     const caseTotal=productQuantity1('case')*59;
     const subTotal=phoneTotal+caseTotal;
     const tax=subTotal/10;
     const totalAmount=subTotal+tax;

     document.getElementById("subtotal").innerText=subTotal;
     document.getElementById("tax").innerText=tax;
     document.getElementById("totalAmount").innerText=totalAmount;

 }

document.getElementById('phone-plus-btn').addEventListener('click',function(){
    
    update("phone", 1219,true);
   
    
   
})

document.getElementById('phone-minus-btn').addEventListener('click',function(){
    update("phone",1219,false);
})

 document.getElementById('case-plus-btn').addEventListener('click',function(){
update('case',59, true)
 })
document.getElementById('case-minus-btn').addEventListener('click',function(){
    update('case', 59,false)
})