// desativar sidebar atual e ativar sidebar oculta quando tiver mais de 3 caracteres no textarea principal //

const areaAtual = document.getElementById('areaAtual');
const areaOculta = document.getElementById('areaOculta');
const textAreaAtual = document.getElementById('textAreaOne'); 

textAreaAtual.addEventListener('keyup', function() {
    if (textAreaAtual.value.length >= 3) {
        areaAtual.style.display = 'none';
        areaOculta.style.display = 'flex';
    } else {
        areaAtual.style.display = 'flex';
        areaOculta.style.display = 'none';
    }
})