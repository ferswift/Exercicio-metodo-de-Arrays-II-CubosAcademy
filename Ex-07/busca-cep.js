const enderecos = [
  { cep: 0o111222, rua: "Rua dos Artistas" },
  { cep: 0o11333, rua: "Rua Augusta" },
  { cep: 0o222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const cepProcurado = 0o222444;

const filtrarEndereco = enderecos.find((endereco) => {
  return endereco.cep === cepProcurado;
});

if (filtrarEndereco) {
  console.log(filtrarEndereco.rua);
} else {
  console.log("Rua não encontrada");
}
