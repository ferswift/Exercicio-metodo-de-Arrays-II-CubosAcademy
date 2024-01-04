const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const filtrarPositivos = (numero) => {
  const inteirosPositivos = numero.filter((numeros) => {
    return numeros > 0;
  });

  if (inteirosPositivos.length > 0) {
    console.log(inteirosPositivos);
  } else {
    console.log("NAO EXISTE");
  }
};

filtrarPositivos(numeros);
