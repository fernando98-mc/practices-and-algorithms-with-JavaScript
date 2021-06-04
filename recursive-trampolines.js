
/**
 * Agragar funcion trampoline 
 */
const trampoline = fn => (...args) => {
    let result  = fn(...args)
    while (typeof result === 'function'){
        result = result()
    }
    return result
}


/**
 * Funcion suma
 */
const suma = (number, sum = 0) => (
    number === 0
        ? sum
        : () => suma(number - 1, sum + number)
)

const tsuma = trampoline(suma)

/**
 * Probar
 */
const r = tsuma(1000000);
console.log(r);