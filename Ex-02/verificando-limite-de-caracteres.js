const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verfificarPalavras = palavras.some((palavra) => {
  return palavra.length > 5;
});

if (verfificarPalavras) {
  console.log("existe palavra inválida");
} else {
  console.log("array validado");
}
