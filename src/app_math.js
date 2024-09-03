import math from '../misModulos/math.js'            // Esta sintaxis de importación, esta reservada para "exports default {}".
import {dividir} from '../misModulos/math.js'       // Si utilizo "Exportación Nombrada", debo importarlo de esta forma.

console.log(math.sumar(10, 10))
console.log(math.restar(10, 5))
console.log(dividir(10, 5))