const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const listaDeCompras = (lista) => {
  const itemsDaLista = lista.some((item) => {
    return item === "cerveja" || item === "vodka";
  });

  if (itemsDaLista) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
  } else {
    console.log("tudo certo, vamos as compras!.");
  }

  return itemsDaLista;
};

const resultado = listaDeCompras(palavras);
