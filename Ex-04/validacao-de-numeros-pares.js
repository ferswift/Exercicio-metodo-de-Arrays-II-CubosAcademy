const numeros = [0, 122, 4, 6, 7, 8, 44];

const numerosPares = numeros.every((numero) => {
  return numero % 2 === 0;
});

if (numerosPares) {
  console.log("Array Válido");
} else {
  console.log("Array Invalido");
}
