
let argv = require('./config/yargs').argv
var colors = require('colors/safe');


let {crearArchivo} = require('./multiplicar/multiplicar')
let {listartabla} = require('./multiplicar/multiplicar')
let comando = argv._[0]

//console.log (argv)
 
  
switch (comando) {
    case 'listar':

        listartabla(argv.base, argv.limite)
        .then(dato   => console.log( colors.green(  dato))   )
        .catch ( err => console.log(err))
        // console.log ('Listar')
      
    break
    case 'crear':
         crearArchivo(argv.base, argv.limite)
         .then (archivo => console.log (`archivo creado ${archivo}`))
         .catch (err => console.log (err))
        console.log ('crear')
    break

    default:
      console.log ('Comando no reconocido')


}


  