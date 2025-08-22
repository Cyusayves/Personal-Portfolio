// Toggle WhatsApp & Telegram when clicking "Get in Touch"
document.getElementById("getInTouchBtn").addEventListener("click", function() {
  const contactDetails = document.getElementById("contactDetails");
  contactDetails.style.display = (contactDetails.style.display === "block") ? "none" : "block";
});
