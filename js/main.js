const btnswitch = document.querySelector("#switch");
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