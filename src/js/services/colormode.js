const btn = document.querySelector(".btn-color");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.remove("dark-theme");
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
        console.log(theme)
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        if (document.body.classList.contains("dark-theme")){
            btn.textContent = 'Light Theme';
        }else{
            btn.textContent = 'Dark Theme';
        }
    }
    localStorage.setItem("theme", theme);
});