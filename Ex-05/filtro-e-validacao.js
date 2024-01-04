const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 60,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Junior",
    idade: 65,
    habilitado: true,
  },
  {
    nome: "Mario",
    idade: 18,
    habilitado: true,
  },
];

const idadeFiltrada = usuarios.filter((usuario) => {
  return usuario.idade >= 18 && usuario.idade <= 65;
});

const habilitados = (usuarios) => {
  const resultado = usuarios.every((usuario) => {
    return usuario.habilitado === true;
  });

  if (resultado) {
    console.log("todos passaram no teste");
  } else {
    console.log("todos precisam estar habilitados");
  }

  return resultado;
};

console.log("Usuarios com idade ácima de 18 e menor que 65.", idadeFiltrada);

const resultadoFinal = habilitados(usuarios);
