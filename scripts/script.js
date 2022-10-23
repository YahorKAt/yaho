let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme")
    if (theme.getAttribute("href") == "css/dark-mode.css") {
        theme.href = "css/light-mode.css"
    } else {
        theme.href = "css/dark-mode.css"
    }
}
