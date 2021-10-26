let registros = []

function validar_captcha(rcaptcha) {
    var rcaptcha = 10 / 2;
    if (rcaptcha.value == 5) {
        return true;

    } else {

        return false;
    }
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {

    var usuario = document.getElementById("login_username")
    var contrasena = document.getElementById("login_password");


    function arreglo(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;

    }

    registros.includes({ usuario, contrasena });
    validar_captcha(rcaptcha)




    if (registros.includes({ usuario, contrasena })) {
        return true;
    }
    if (rcaptcha == 5) {
        return true
    }
    return false;


}
module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;