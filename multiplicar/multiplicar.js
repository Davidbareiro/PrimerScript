const fs = require('fs');
var colors = require('colors');

 let  crearArchivo =  (base, limite) => {

    return new Promise ((resolve, reject) => {

        if (!Number(base))  {
            reject (`El valor ingresado ${ base } no es un nro`)
            return
        }

        let lista = ''

        for (let i = 1 ; i<=limite;i++) {
            
            var res = base  * i
        
            console.log(` El nro  ${base} * ${i} es : ${res}`)
            lista += ` El nro  ${base} * ${i} es : ${res}\n`
        }
        
        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-hasta ${limite}.txt`, lista, (err) => {
          if (err) {
              reject (err)
          }
          else
            resolve (`tabla-${base} -al-${limite}.txt`)
            //console.log('El achivo ha sido creado. Esta es la modificacion');
        });
         
    })

}

let listartabla = (base, limite) => {

    return new Promise ((resolve, reject) =>{

    let valores =''
    let milista 
    for (let i = 1; i<= limite; i++) 
        
        {
            milista = base  * i
            //console.log('milista', milista,base, i )
            valores += `El nro comienza en ${base} y va hasta ${limite} el valor es: ${milista} \n`
                   
        }
         resolve (valores)
        //console.log (valores)
    })
    
}

module.exports =  {
    crearArchivo : crearArchivo,
    listartabla: listartabla
}