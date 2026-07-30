let cart = [];
let total = 0;

function addProduct(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("total").innerText = "المجموع: " + total.toLocaleString() + " د.ع";
}

function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!name || !phone || !address) {
    alert("يرجى إدخال الاسم ورقم الهاتف والعنوان.");
    return;
  }

  if (cart.length === 0) {
    alert("السلة فارغة.");
    return;
  }

  let message = "🍪 *طلب جديد من Cookies Lareen*%0A%0A";
  message += "👤 الاسم: " + name + "%0A";
  message += "📞 الهاتف: " + phone + "%0A";
  message += "📍 العنوان: " + address + "%0A";

  if (notes) {
    message += "📝 ملاحظات: " + notes + "%0A";
  }

  message += "%0A🛒 الطلب:%0A";

  cart.forEach((item, index) => {
    message += (index + 1) + "- " + item.name + " - " + item.price.toLocaleString() + " د.ع%0A";
  });

message += "%0A💰 المجموع: " + total.toLocaleString() + " د.ع";

  window.open("https://wa.me/9647868008181?text=" + message, "_blank");
}
