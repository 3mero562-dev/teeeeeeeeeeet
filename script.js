let cart = [];

function addToCart(name, price) {
    const item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name,
            price,
            qty: 1
        });
    }

    renderCart();
}

function renderCart() {

    let html = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        html += `
        <div class="cartItem">
            <div>
                <b>${item.name}</b><br>
                ${item.qty} × ${item.price.toLocaleString()} د.ع
            </div>

            <div>

            <button onclick="minus(${index})">➖</button>

            <button onclick="plus(${index})">➕</button>

            <button onclick="removeItem(${index})">🗑️</button>

            </div>

        </div>
        `;
    });

    document.getElementById("cartItems").innerHTML = html;

    document.getElementById("total").innerHTML =
    "المجموع : " + total.toLocaleString() + " د.ع";

}

function plus(i){
    cart[i].qty++;
    renderCart();
}

function minus(i){

    if(cart[i].qty>1){
        cart[i].qty--;
    }else{
        cart.splice(i,1);
    }

    renderCart();

}

function removeItem(i){
    cart.splice(i,1);
    renderCart();
}

function sendWhatsApp(){

    if(cart.length==0){
        alert("السلة فارغة");
        return;
    }

    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let address=document.getElementById("address").value;
    let notes=document.getElementById("notes").value;

    if(name=="" || phone=="" || address==""){
        alert("املأ الاسم ورقم الهاتف والعنوان");
        return;
    }

    let total=0;

    let message="🍪 طلب جديد من Cookies Lareen\n\n";

    message+="👤 الاسم: "+name+"\n";
    message+="📞 الهاتف: "+phone+"\n";
    message+="📍 العنوان: "+address+"\n";

    if(notes!=""){
        message+="📝 ملاحظات: "+notes+"\n";
    }

    message+="\n🛒 الطلب:\n";

    cart.forEach(item=>{

        total+=item.price*item.qty;

        message+=
        "• "+item.name+
        " × "+item.qty+
        " = "+(item.price*item.qty).toLocaleString()+
        " د.ع\n";

    });

    message+="\n💰 المجموع: "+total.toLocaleString()+" د.ع";

    window.open(
    "https://wa.me/9647868008181?text="+encodeURIComponent(message),
    "_blank");

}
