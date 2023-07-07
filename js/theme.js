// TEMA CLARO E ESCURO //

// selecionar elementos e guardar em variáveis
const themeHtml = document.querySelector('html');
const inputCheck = document.getElementById('switcher');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');

// ativar classe CSS ".dark-mode" no HTML quando o input checkbox estiver selecinado
inputCheck.addEventListener('change', function() {
    themeHtml.classList.toggle('dark-theme');
});

// quando o checkbox estiver selecionado mudar o nome do tema no HTML
inputCheck.addEventListener('change', function() {
    if (inputCheck.checked) {
        lightMode.style.display = 'none';
        darkMode.style.display = 'inline';
    } else {
        lightMode.style.display = 'inline';
        darkMode.style.display = 'none';
    }
})

