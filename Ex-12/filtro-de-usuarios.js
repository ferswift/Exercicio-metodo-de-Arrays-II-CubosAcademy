const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const filtrarPromgramadores = (pessoas) => {
  const resultado = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade > 20;
  });

  if (resultado.length > 0) {
    console.log(resultado);
  } else {
    console.log("Não há programadores");
  }
};

filtrarPromgramadores(pessoas);
