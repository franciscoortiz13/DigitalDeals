const logo = document.getElementById("navbar-logo");

if(logo) {
    logo.addEventListener("click", () => {
        window.location.reload();
    })
}