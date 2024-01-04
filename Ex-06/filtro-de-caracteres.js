const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const limiteDeCaracteresDeCidades = (cidades) => {
  const cidadeFiltrada = cidades.filter((cidade) => {
    return cidade.length <= 8;
  });

  return cidadeFiltrada.join(", ");
};

const resultadoFinal = limiteDeCaracteresDeCidades(cidades);
console.log(resultadoFinal);
