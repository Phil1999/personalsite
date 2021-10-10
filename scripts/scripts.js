
let themeDots = document.getElementsByClassName('theme-dot')

let themeMode = localStorage.getItem('themeMode')

if (themeMode == null) {
    setTheme('blue')
} else {
    setTheme(themeMode)
}


for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let theme = this.dataset.mode
        setTheme(theme)
    })

}

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('theme-style').href = '../styles/style.css'
    }
    if (theme == 'blue') {
        document.getElementById('theme-style').href = '../styles/themes/blue.css'
    }
    if (theme == 'dark') {
        document.getElementById('theme-style').href = '../styles/themes/dark.css'
    }

    localStorage.setItem('themeMode', theme)
}


