const name = 'Sergio';
export function getSaludo( name ) {
    return 'Hola ' + name;
}

console.log( `Este es un texto: ${ getSaludo(name) }` );