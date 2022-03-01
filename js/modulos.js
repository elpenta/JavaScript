import { var_pi, Saludar } from "./constantes.js"; //Aca si esta todo en la mismo path ./ sino tendria q poner ../../
//Indico entre llaves que variable importo
import { sumar, restar, objAritmetica } from "./aritmeticas.js";

//ALIAS para una variable q importo, para acortar nombres.
//import { sumar, restar, objAritmetica as objArit } from "./aritmeticas.js";

console.log("archivos modulos js");
console.log(var_pi);
console.log(sumar(3, 4));

console.log(objAritmetica.sumar2(3, 4));
//invoca a la clase
let saludo = new Saludar();
saludo;
