ScrollReveal().reveal(".parent", {delay: 1000});

const click = document.getElementById("theme-toggle");
click.addEventListener("click" function () {
    document.body.classList.toggle ("dark-mode");

    if (document.body.classList.contains ("dark-mode")) {
        click.textContent = "☀️";
    }
    else {
        click.textContent = "🌙";
    }
});