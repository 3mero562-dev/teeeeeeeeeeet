let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cartCount").innerText = cart.length;
}

function sendWhatsApp() {
  let text = "🍪 طلب جديد من Cookies Lareen\n\n";
  let total = 0;

  cart.forEach(item => {
    text += • ${item.name} - ${item.price} د.ع\n;
    total += item.price;
  });

  text += \n💰 المجموع: ${total} د.ع;

  window.open(
    https://wa.me/9647868008181?text=${encodeURIComponent(text)},
    "_blank"
  );
}
