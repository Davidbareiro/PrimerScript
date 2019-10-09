

const fs = require('fs');

let base = 155;
let lista = ''

for (let i = 1 ; i<=10;i++) {
    
    var res = base  * i

    console.log(` El nro  ${base} * ${i} es : ${res}`)
    lista += ` El nro  ${base} * ${i} es : ${res}\n`
}

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${base}.txt`, lista, (err) => {
  if (err) throw err;
  console.log('El achivo ha sido creado');
});