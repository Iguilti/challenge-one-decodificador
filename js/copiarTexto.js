// função "CTRL + C" ao clicar no botão "copiar" no elemento textarea secundário com id="texto" do HTML //

function copiarTexto() {
    // seleciona o elemento de entrada de texto
    let texto = document.getElementById("textAreaTwo");
    // seleciona o conteúdo do elemento de entrada de texto
    texto.select();
    // copia o conteúdo para a área de transferência
    document.execCommand("copy");
    // alerta o usuário que o conteúdo foi copiado
    alert("Texto copiado com sucesso!");
  }