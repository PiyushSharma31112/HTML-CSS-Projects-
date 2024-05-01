const order = document.getElementById('order-now');
const addItem = document.querySelectorAll('.button-5');
const addItem2 = document.querySelectorAll('.button-3');

order.addEventListener('click',()=>{
    if(confirm('Are you sure ?') == true){
       alert('ok')
    } else {
        alert('You canceled your order')
    }
})

addItem.forEach((add) => {

    add.addEventListener('click',()=>{
        alert('Your item added into cart');
    });

})

addItem2.forEach((add) => {

    add.addEventListener('click',()=>{
        alert('Your item added into cart');
    });

})
