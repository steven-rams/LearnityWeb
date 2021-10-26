let registros = [];

function agregarRegistro() {

    var usuario = document.getElementById("in_nombre_usuario").value
    var contrasena = document.getElementById("in_contrasena").value;
    var confirmar_contrasena = document.getElementById("in_confirmar_contrasena").value;

    function arreglo(usuario, contrasena, confirmar_contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.confirmar_contrasena = confirmar_contrasena;
    }

    registros.push({ usuario, contrasena, confirmar_contrasena });

    //console.log(registros);

}


function OrdenarArreglo(arreglo) {

    var respuesta = arreglo.sort(function(a, b) {
        if (a.usuario > b.usuario) {
            return 1; //Si el resultado es positivo, b se ordena antes de a.
        }
        if (a.usuario < b.usuario) {
            return -1; //Si el resultado es negativo, a se ordena antes que b.
        }
        return 0; //Si el resultado es 0, nada cambia.

    });

    return respuesta;

}

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;