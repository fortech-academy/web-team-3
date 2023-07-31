const addToWishlistButtons = document.querySelectorAll(".addToWishlistButton");
const wishlistAlert = document.querySelector(".wishlistAlert");

addToWishlistButtons.forEach((button) => {
   button.addEventListener("click", () => {
      wishlistAlert.style.display = "block";
      setTimeout(() => {
         wishlistAlert.style.display = "none";
      }, 2000);
   });
});

const borrowButtons = document.querySelectorAll(".borrowButton");
const customAlert = document.getElementById("customAlert");
const checkoutBtn = document.querySelector(".checkoutBtn");
const continueBtn = document.querySelector(".continueBtn");

borrowButtons.forEach((borrowButton) => {
   borrowButton.addEventListener("click", () => {
      customAlert.style.display = "block";

      checkoutBtn.addEventListener("click", () => {
         customAlert.style.display = "none";
         window.location.href = "borrowed.html";
      });

      continueBtn.addEventListener("click", () => {
         customAlert.style.display = "none";
      });
   });
});
