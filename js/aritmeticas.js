export function sumar(var_a, var_b) {
  return var_a + var_b;
}

export function restar(var_a, var_b) {
  return var_a - var_b;
}
//Otra manera es generando un objetos de las funciones

export function sumar2(var_a, var_b) {
  return var_a + var_b;
}

export function restar2(var_a, var_b) {
  return var_a - var_b;
}

export const objAritmetica = {
  sumar2,
  restar2,
};
