function login() {
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
   const errorMessage = document.getElementById("error-message");

   const users = [
      { username: "diana@yahoo.fortech", password: "dianaungureanu" },
      { username: "catalin@yahoo.fortech", password: "catalinpintoi" },
      { username: "oana@yahoo.fortech", password: "oanacristea" },
      { username: "mihai@yahoo.fortech", password: "mihaivicovivi" },
   ];

   const admins = [
      { username: "admin@booklender.test", password: "admin0000" },
   ];

   let isUserAuthenticated = false;
   let isAdminAuthenticated = false;

   for (const user of users) {
      if (username === user.username && password === user.password) {
         isUserAuthenticated = true;
         break;
      }
   }
   for (const admin of admins) {
      if (username === admin.username && password === admin.password) {
         isAdminAuthenticated = true;
         break;
      }
   }

   if (isUserAuthenticated) {
      errorMessage.textContent = "";
      window.location.replace("userhomepage.html");
   } else if (isAdminAuthenticated) {
      errorMessage.textContent = "";
      window.location.replace("adminhomepage.html");
   } else {
      errorMessage.textContent = "Invalid credentials. Please try again.";
   }
}
