const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];

const nomeDoLivro = "Dom Quixote";

const filtrarLivros = livros.findIndex((livro) => {
  return livro === nomeDoLivro;
});

if (filtrarLivros !== -1) {
  console.log(`O livro está na posição ${filtrarLivros + 1}
      `);
} else {
  console.log("Inválido");
}
