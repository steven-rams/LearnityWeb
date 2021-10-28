 const btnswitch = document.querySelector("#switch");
 const btnswitch2 = document.querySelector("#switch2, #switch3, #switch4,#switch5,#switch6,#switch7,#switch8,#switch9 ");

 btnswitch.addEventListener('click', () => {
     document.body.classList.toggle('dark');
     btnswitch.classList.toggle('active');

     //guardar en local storage

     if (document.body.classList.contains("dark")) {
         localStorage.setItem("dark-mode", "true")

     } else {
         localStorage.setItem("dark-mode", "false")
     }
 });


 //obtenemos el modo actual

 if (localStorage.getItem('dark-mode') == "true") {
     document.body.classList.add('dark');
     btnswitch.classList.add('active');
 } else {
     document.body.classList.remove('dark');
     btnswitch.classList.remove('active');
 }
 btnswitch2.addEventListener('click', () => {
     document.body.classList.toggle('dark');
     btnswitch2.classList.toggle('active');

     //guardar en local storage

     if (document.body.classList.contains("dark")) {
         localStorage.setItem("dark-mode", "true")

     } else {
         localStorage.setItem("dark-mode", "false")

     }
 });


 //obtenemos el modo actual

 if (localStorage.getItem('dark-mode') == "true") {
     document.body.classList.add('dark');
     btnswitch2.classList.add('active');
 } else {
     document.body.classList.remove('dark');
     btnswitch2.classList.remove('active');
 }





 $(function() {
     $(".navbar-toggler").on("click", function(e) {
         $(".tm-header").toggleClass("show");
         e.stopPropagation();
     });

     $("html").click(function(e) {
         var header = document.getElementById("tm-header");

         if (!header.contains(e.target)) {
             $(".tm-header").removeClass("show");
         }
     });

     $("#tm-nav .nav-link").click(function(e) {
         $(".tm-header").removeClass("show");
     });
 });