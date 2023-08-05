// función para validar el click en el navbar
(function navbarClicked(e) {
    if (e.target.matches('.nav-link')) {
        activarNavbar(e.target.id);
    }
})

// función  para activar el navbar al hacer click en un navlink
function activarNavbar(navbarLinkId) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        navLink.classList.remove("active");
    });
    const activeNavLink = document.getElementById(navbarLinkId);
    activeNavLink.classList.add("active");
}

// función para cargar html en el div
function loadPage(url, contenedor) {
    $.get(url, {}, function (data) {
        $("#" + contenedor).html(data);
    });
}


// función inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})();   