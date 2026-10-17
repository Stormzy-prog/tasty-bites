const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Replace this demo number with the restaurant's
// real WhatsApp number before using the website.
const restaurantPhone = "";

const orderButton = document.getElementById("order-button");

if (orderButton) {
  orderButton.addEventListener("click", function (event) {
    if (!restaurantPhone) {
      event.preventDefault();
      alert("Welcome to Tasty Bites! WhatsApp ordering will be available soon.");
      return;
    }

    event.preventDefault();

    const message = encodeURIComponent(
      "Hello Tasty Bites! I would like to ask about your menu."
    );

    window.open(
      `https://wa.me/${restaurantPhone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  });
}