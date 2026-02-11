document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbar = document.querySelector('.navbar');

    function closeNavbar() {
        var navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function(event) {
            closeNavbar();
        });
    });

    document.addEventListener('click', function(event) {
        var navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse && !navbar.contains(event.target)) {
            closeNavbar();
        }
    });
});