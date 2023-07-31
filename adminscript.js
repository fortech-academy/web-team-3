document.addEventListener("DOMContentLoaded", function () {
   const bookForm = document.getElementById("book-form");

   bookForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("The book has been added successfully!");
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const userForm = document.getElementById("user-form");

   userForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("User has been added successfully!");
   });
});
