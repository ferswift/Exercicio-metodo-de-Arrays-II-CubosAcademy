const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const arrayModificado = frutas.map((frutas, indice) => {
  return `${indice} - ${frutas.slice(0, 1).toUpperCase()}${frutas
    .slice(1)
    .toLowerCase()}`;
});

console.log(arrayModificado);
